import re
import json
import shutil
from pathlib import Path

PDF = Path("test 01 polity  (1).pdf")
OUT = Path("data/uppcs_test1.json")

if not PDF.exists():
    print("❌ PDF नहीं मिली:")
    print(PDF)
    print("\nPDF को ~/exam-sathi/ में रखकर फिर चलाएं.")
    raise SystemExit(1)

# -------------------------------------------------
# USER PROVIDED ANSWER KEY — 1 to 150
# -------------------------------------------------

answer_text = """
1 A
2 B
3 C
4 D
5 D
6 A
7 A
8 D
9 B
10 A
11 A
12 C
13 A
14 B
15 A
16 B
17 A
18 B
19 B
20 B
21 A
22 A
23 A
24 C
25 D
26 B
27 B
28 C
29 C
30 B
31 C
32 A
33 B
34 B
35 B
36 B
37 A
38 C
39 C
40 B
41 C
42 C
43 B
44 C
45 B
46 D
47 C
48 D
49 B
50 B
51 A
52 D
53 A
54 C
55 A
56 A
57 D
58 D
59 B
60 A
61 A
62 A
63 B
64 B
65 A
66 C
67 A
68 B
69 A
70 A
71 C
72 D
73 B
74 B
75 D
76 A
77 B
78 D
79 C
80 A
81 B
82 B
83 B
84 C
85 C
86 A
87 A
88 C
89 C
90 C
91 C
92 B
93 B
94 C
95 A
96 B
97 D
98 A
99 A
100 A
101 A
102 A
103 B
104 A
105 B
106 A
107 A
108 A
109 C
110 C
111 C
112 B
113 B
114 B
115 C
116 D
117 C
118 B
119 C
120 A
121 C
122 C
123 B
124 B
125 D
126 B
127 B
128 C
129 B
130 B
131 D
132 A
133 B
134 C
135 C
136 C
137 D
138 B
139 A
140 D
141 C
142 D
143 A
144 A
145 A
146 C
147 B
148 C
149 D
150 D
"""

answers = {}

for num, letter in re.findall(r"(\d+)\s+([ABCD])", answer_text):
    answers[int(num)] = letter

if len(answers) != 150:
    print("❌ Answer key में 150 answers नहीं मिले.")
    print("मिले:", len(answers))
    raise SystemExit(1)

# -------------------------------------------------
# Extract PDF text
# -------------------------------------------------

def get_pdf_text():
    commands = [
        ["pdftotext", "-layout", str(PDF), "-"],
    ]

    import subprocess

    try:
        result = subprocess.run(
            commands[0],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="ignore"
        )
    except FileNotFoundError:
        print("❌ pdftotext installed नहीं है.")
        print("\nपहले चलाएं:")
        print("pkg update")
        print("pkg install poppler")
        raise SystemExit(1)

    if result.returncode != 0:
        print("❌ PDF पढ़ने में समस्या:")
        print(result.stderr)
        raise SystemExit(1)

    return result.stdout


text = get_pdf_text()

# -------------------------------------------------
# Normalize text
# -------------------------------------------------

text = text.replace("\r", "\n")
text = text.replace("\u00a0", " ")

# unwanted control characters
text = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", " ", text)

# -------------------------------------------------
# Find Hindi question blocks
#
# PDF में English questions पहले और Hindi questions
# बाद में हैं। Hindi question number के बाद
# Devanagari text होने से हम Hindi blocks निकालते हैं.
# -------------------------------------------------

pattern = re.compile(
    r"(?m)^\s*(\d{1,3})\.\s+(?=[\u0900-\u097F])"
)

matches = list(pattern.finditer(text))

questions_raw = []

for i, m in enumerate(matches):
    number = int(m.group(1))

    if number < 1 or number > 150:
        continue

    start = m.end()
    end = matches[i + 1].start() if i + 1 < len(matches) else len(text)

    block = text[start:end].strip()

    # केवल पहला occurrence sequence लेना
    # duplicate page artifacts को बाद में remove करेंगे.
    questions_raw.append((number, block))

# -------------------------------------------------
# Keep one block per question number
# -------------------------------------------------

question_blocks = {}

for number, block in questions_raw:
    if number not in question_blocks:
        question_blocks[number] = block

print("PDF से Hindi question blocks मिले:", len(question_blocks))

missing = [i for i in range(1, 151) if i not in question_blocks]

if missing:
    print("⚠️ इन questions को PDF extraction में नहीं मिला:")
    print(missing)

# -------------------------------------------------
# Parse options
# -------------------------------------------------

def clean_text(value):
    value = re.sub(r"\s+", " ", value)
    value = value.strip()

    # common PDF spacing cleanup
    value = value.replace("के े", "के")
    value = value.replace("की े", "की")
    value = value.replace("है ै", "है")
    value = value.replace("में े", "में")

    return value


def parse_question(number, block):

    # Stop at obvious next-page/header artifacts
    block = re.sub(
        r"\s*<PARSED TEXT.*?$",
        "",
        block,
        flags=re.I | re.S
    )

    # Find four Hindi option labels
    option_matches = list(
        re.finditer(
            r"\(([abcd])\)\s*",
            block,
            flags=re.I
        )
    )

    if len(option_matches) < 4:
        return None

    # Take first four option markers
    option_matches = option_matches[:4]

    question_text = block[:option_matches[0].start()]

    options = []

    for i, match in enumerate(option_matches):
        start = match.end()

        if i + 1 < len(option_matches):
            end = option_matches[i + 1].start()
        else:
            end = len(block)

        option = block[start:end]

        # remove trailing unrelated text after last option
        option = re.split(
            r"\n\s*\d{1,3}\.\s+",
            option
        )[0]

        options.append(clean_text(option))

    question_text = clean_text(question_text)

    if not question_text or len(options) != 4:
        return None

    return {
        "id": number,
        "question": question_text,
        "options": {
            "A": options[0],
            "B": options[1],
            "C": options[2],
            "D": options[3]
        },
        "answer": answers[number],
        "solution": ""
    }


questions = []

for number in range(1, 151):

    block = question_blocks.get(number)

    if not block:
        print(f"⚠️ Question {number}: PDF block missing")
        continue

    item = parse_question(number, block)

    if not item:
        print(f"⚠️ Question {number}: options parse नहीं हुए")
        continue

    questions.append(item)

# -------------------------------------------------
# Safety check
# -------------------------------------------------

print("\nParsed questions:", len(questions))

if len(questions) != 150:
    print("\n❌ 150 questions successfully parse नहीं हुए.")
    print("Website में incomplete data नहीं डालेंगे.")
    print("पहले PDF extraction को ठीक करें.")
    raise SystemExit(1)

# -------------------------------------------------
# Backup existing output
# -------------------------------------------------

OUT.parent.mkdir(parents=True, exist_ok=True)

if OUT.exists():
    backup = OUT.with_name(
        OUT.stem + "_backup.json"
    )
    shutil.copy2(OUT, backup)
    print("Existing JSON backup:", backup)

# -------------------------------------------------
# Final data
# -------------------------------------------------

data = {
    "id": "uppcs-test-1",
    "title": "UPPCS Test 1",
    "subtitle": "भारतीय राजव्यवस्था",
    "subject": "Polity",
    "exam": "UPPCS",
    "medium": "Hindi",
    "language": "hi",
    "totalQuestions": 150,
    "durationMinutes": 120,
    "negativeMarking": True,
    "negativeMarkingValue": 1 / 3,
    "source": "test 01 polity (1).pdf",
    "answerKey": "User supplied",
    "questions": questions
}

OUT.write_text(
    json.dumps(
        data,
        ensure_ascii=False,
        indent=2
    ),
    encoding="utf-8"
)

print("\n======================================")
print("✅ UPPCS TEST 1 तैयार")
print("======================================")
print("Questions :", len(questions))
print("Medium    : Hindi")
print("Subject   : Polity")
print("Answers   : 1–150")
print("Output    :", OUT)
print("======================================")
