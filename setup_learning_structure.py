from pathlib import Path

# ============================================================
# LOYAL EDUCATION HUB
# Professional Test Series + Batches Structure
# IMPORTANT: UPPCS Test 1 JSON is NOT modified.
# ============================================================

ROOT = Path("data")
ROOT.mkdir(exist_ok=True)

# ------------------------------------------------------------
# TEST SERIES
# ------------------------------------------------------------

test_series = r'''export const testSeries = [
  {
    id: "uppcs-test-series",
    title: "UPPCS Test Series",
    subtitle: "UPPCS की परीक्षा-केंद्रित तैयारी",
    description:
      "UPPCS के लिए subject-wise और exam-oriented test series.",
    exam: "UPPCS",
    status: "LIVE",
    badge: "UPPCS",
    tests: [
      {
        id: "test-1",
        title: "UPPCS Test Series 01",
        subtitle: "भारतीय राजव्यवस्था",
        questions: 150,
        duration: 120,
        marks: 200,
        status: "AVAILABLE",
        href: "/mock-tests/uppcs-test-1",
      },
    ],
  },

  {
    id: "general-government-test-series",
    title: "Government Exams Test Series",
    subtitle: "SSC • Railway • Banking • Police • Teaching",
    description:
      "विभिन्न सरकारी परीक्षाओं के लिए structured practice tests.",
    exam: "Government Exams",
    status: "COMING SOON",
    badge: "TEST SERIES",
    tests: [],
  },
];
'''

# ------------------------------------------------------------
# BATCHES
# ------------------------------------------------------------

batches = r'''export const batches = [
  {
    id: "history-by-khan-sir",
    title: "History by Khan Sir",
    subtitle: "इतिहास की सम्पूर्ण तैयारी",
    teacher: "Khan Sir",
    description:
      "प्रतियोगी परीक्षाओं के लिए इतिहास की व्यवस्थित तैयारी।",
    badge: "HISTORY",
    status: "LIVE",

    subjects: [
      "प्राचीन इतिहास",
      "मध्यकालीन इतिहास",
      "आधुनिक इतिहास",
    ],

    sessions: [
      {
        id: "history-lecture-01",
        title: "Lecture 01",
        description: "History by Khan Sir",
        youtubeUrl: "https://youtu.be/dEm1b7xoWcM",
      },
      {
        id: "history-lecture-02",
        title: "Lecture 02",
        description: "History by Khan Sir",
        youtubeUrl: "https://youtu.be/PWZyAomujhc",
      },
    ],
  },

  {
    id: "pw-government-exams",
    title: "PW Government Exams Batch",
    subtitle: "सरकारी परीक्षाओं की structured preparation",
    teacher: "PW Faculty",
    description:
      "सरकारी परीक्षाओं की तैयारी के लिए अलग batch structure.",
    badge: "PW BATCH",
    status: "LIVE",

    subjects: [
      "General Studies",
      "Reasoning",
      "Quantitative Aptitude",
      "Current Affairs",
    ],

    sessions: [],
  },
];
'''

# ------------------------------------------------------------
# BRAND CONFIG
# ------------------------------------------------------------

brand = r'''export const siteBrand = {
  name: "LOYAL EDUCATION HUB",
  developer: "LOYAL JI",
  developerText: "DEVELOPER BY 💓 LOYAL JI 💓",
};
'''

(ROOT / "test-series.js").write_text(test_series, encoding="utf-8")
(ROOT / "batches.js").write_text(batches, encoding="utf-8")
(ROOT / "brand.js").write_text(brand, encoding="utf-8")

print("")
print("==============================================")
print("  LOYAL EDUCATION HUB STRUCTURE CREATED")
print("==============================================")
print("")
print("✓ data/test-series.js")
print("✓ data/batches.js")
print("✓ data/brand.js")
print("")
print("✓ UPPCS Test 1 JSON untouched")
print("✓ History by Khan Sir added")
print("✓ Lecture 01 added")
print("✓ Lecture 02 added")
print("✓ PW Government Exams Batch added")
print("")
