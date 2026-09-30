import re
import json
import subprocess
from pathlib import Path

PDF = Path("test 01 polity  (1).pdf")
OUT = Path("data/uppcs_test1_1_50.json")

# =========================================================
# USER ANSWER KEY — Q1 TO Q50
# =========================================================

ANSWERS = {
    1:"A",  2:"B",  3:"C",  4:"D",  5:"D",
    6:"A",  7:"A",  8:"D",  9:"B", 10:"A",
   11:"A", 12:"C", 13:"A", 14:"B", 15:"A",
   16:"B", 17:"A", 18:"B", 19:"B", 20:"B",
   21:"A", 22:"A", 23:"A", 24:"C", 25:"D",
   26:"B", 27:"B", 28:"C", 29:"C", 30:"B",
   31:"C", 32:"A", 33:"B", 34:"B", 35:"B",
   36:"B", 37:"A", 38:"C", 39:"C", 40:"B",
   41:"C", 42:"C", 43:"B", 44:"C", 45:"B",
   46:"D", 47:"C", 48:"D", 49:"B", 50:"B"
}

# =========================================================
# SOLUTION TEXT
# Detailed PDF solutions are not supplied in the booklet.
# So we do NOT invent explanations.
# =========================================================

def make_solution(number, answer):
    return (
        f"सही उत्तर: विकल्प {answer}। "
        f"यह उत्तर दिए गए UPPCS Test 1 के answer key के अनुसार है। "
        f"विस्तृत व्याख्या उपलब्ध source solution से बाद में जोड़ी जा सकती है।"
    )

# =========================================================
# CHECK PDF
# =========================================================

if not PDF.exists():
    print("❌ PDF नहीं मिली!")
    print()
    print("पहले यह check करो:")
    print('ls -lh')
    print()
    print("PDF ढूंढने के लिए:")
    print('find ~/storage/downloads -iname "*.pdf" 2>/dev/null')
    raise SystemExit(1)

# =========================================================
# PDF → TEXT
# =========================================================

print("📖 PDF पढ़ी जा रही है...")

try:
    result = subprocess.run(
        ["pdftotext", "-layout", str(PDF), "-"],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="ignore"
    )
except FileNotFoundError:
    print("❌ pdftotext नहीं मिला.")
    print("चलाएं: pkg install poppler")
    raise SystemExit(1)

if result.returncode != 0:
    print("❌ PDF पढ़ने में error:")
    print(result.stderr)
    raise SystemExit(1)

text = result.stdout.replace("\r", "\n")
lines = text.splitlines()

# =========================================================
# FIND HINDI QUESTION NUMBERS
# =========================================================

positions = {}

for i, line in enumerate(lines):
    s = line.strip()

    m = re.match(r"^(\d{1,3})\.\s+(.*)$", s)

    if not m:
        continue

    number = int(m.group(1))
    rest = m.group(2)

    if 1 <= number <= 50 and re.search(r"[\u0900-\u097F]", rest):
        if number not in positions:
            positions[number] = i

print("Hindi question positions:", len(positions))

# =========================================================
# TEXT CLEANER
# =========================================================

def clean(s):

    s = re.sub(r"\s+", " ", s).strip()

    # Common PDF extraction artifacts
    replacements = {
        "केे ": "के ",
        "कीी ": "की ",
        "मेंं ": "में ",
        "हैै ": "है ",
        "काा ": "का ",
        "सेे ": "से ",
        "कोो ": "को ",
        "औरं ": "और ",
        "कि�": "कि",
        "वि�": "वि",
        "संं": "सं",
        "रााज्य": "राज्य",
        "रााष्ट्ररपति": "राष्ट्रपति",
        "न्याायाालय": "न्यायालय",
        "मूूल": "मूल",
        "अधि�काार": "अधिकार",
        "संंवि�धाान": "संविधान",
    }

    for old, new in replacements.items():
        s = s.replace(old, new)

    return s.strip()

# =========================================================
# PARSE QUESTION
# =========================================================

def parse_question(number, start, end):

    block = "\n".join(lines[start:end])

    # Remove page marker/header
    block = re.sub(
        r"<PARSED TEXT FOR PAGE:.*?>",
        " ",
        block
    )

    # Find Hindi options
    option_matches = list(
        re.finditer(
            r"\(([abcd])\)\s*",
            block,
            flags=re.IGNORECASE
        )
    )

    if len(option_matches) < 4:
        return None

    option_matches = option_matches[:4]

    question = block[:option_matches[0].start()]

    letters = ["A", "B", "C", "D"]
    options = {}

    for i, match in enumerate(option_matches):

        start_option = match.end()

        if i + 1 < len(option_matches):
            end_option = option_matches[i + 1].start()
        else:
            end_option = len(block)

        option = block[start_option:end_option]

        options[letters[i]] = clean(option)

    question = clean(question)

    # Remove accidental leading number
    question = re.sub(
        r"^\s*\d{1,3}\s*[\.\-:]?\s*",
        "",
        question
    )

    if not question:
        return None

    if any(not options[x] for x in letters):
        return None

    return {
        "id": number,
        "question": question,
        "options": options,
        "answer": ANSWERS[number],
        "solution": make_solution(
            number,
            ANSWERS[number]
        )
    }

# =========================================================
# EXTRACT Q1–50
# =========================================================

questions = []

for number in range(1, 51):

    if number not in positions:
        print(f"❌ Q{number}: Hindi question नहीं मिला")
        continue

    start = positions[number]

    future_positions = [
        p for n, p in positions.items()
        if p > start
    ]

    end = min(future_positions) if future_positions else len(lines)

    item = parse_question(
        number,
        start,
        end
    )

    if item:
        questions.append(item)
        print(f"✅ Q{number}")
    else:
        print(f"❌ Q{number}: options नहीं निकले")

# =========================================================
# SAFETY CHECK
# =========================================================

print()
print("========================================")
print("Parsed Questions:", len(questions), "/ 50")
print("========================================")

if len(questions) != 50:

    found = {q["id"] for q in questions}

    missing = [
        i for i in range(1, 51)
        if i not in found
    ]

    print("❌ Batch incomplete.")
    print("Missing:", missing)
    print()
    print("Incomplete data website में नहीं डालेंगे.")
    raise SystemExit(1)

# =========================================================
# FINAL JSON
# =========================================================

data = {
    "id": "uppcs-test-1",
    "title": "UPPCS Test 1",
    "subject": "भारतीय राजव्यवस्था",
    "exam": "UPPCS",
    "medium": "Hindi",
    "language": "hi",
    "batch": "Q1-Q50",
    "totalQuestions": 50,

    "settings": {
        "durationMinutes": 60,
        "negativeMarking": True,
        "negativeMarkingValue": 0.3333333333
    },

    "source": "test 01 polity PDF",
    "answerKeySource": "User supplied answer key",

    "questions": questions
}

OUT.parent.mkdir(
    parents=True,
    exist_ok=True
)

OUT.write_text(
    json.dumps(
        data,
        ensure_ascii=False,
        indent=2
    ),
    encoding="utf-8"
)

print()
print("========================================")
print("🎉 UPPCS TEST 1 — Q1 TO Q50 READY")
print("========================================")
print("Questions :", len(questions))
print("Medium    : Hindi")
print("Answers   : Q1-Q50")
print("Solutions : Added")
print("Output    :", OUT)
print("========================================")
