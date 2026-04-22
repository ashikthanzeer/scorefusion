// Default configuration (will be updated based on shift type)
let SUBJECT_ORDER = ["Mathematics", "Physics", "Chemistry"];
let SUBJECT_RANGES = [
  { name: "Mathematics", start: 1, end: 75, totalQuestions: 75 },
  { name: "Physics", start: 76, end: 120, totalQuestions: 45 },
  { name: "Chemistry", start: 121, end: 150, totalQuestions: 30 }
];
let SUBJECT_TOTAL_QUESTIONS = {
  "Mathematics": 75,
  "Physics": 45,
  "Chemistry": 30
};
let TOTAL_QUESTIONS = 150;

// Shift type configurations
const SHIFT_TYPE_CONFIGS = {
  "engineering": {
    SUBJECT_ORDER: ["Mathematics", "Physics", "Chemistry"],
    SUBJECT_RANGES: [
      { name: "Mathematics", start: 1, end: 75, totalQuestions: 75 },
      { name: "Physics", start: 76, end: 120, totalQuestions: 45 },
      { name: "Chemistry", start: 121, end: 150, totalQuestions: 30 }
    ],
    SUBJECT_TOTAL_QUESTIONS: {
      "Mathematics": 75,
      "Physics": 45,
      "Chemistry": 30
    },
    TOTAL_QUESTIONS: 150,
    MAX_MARKS: 600
  },
  "pharmacy": {
    SUBJECT_ORDER: ["Physics", "Chemistry"],
    SUBJECT_RANGES: [
      { name: "Physics", start: 1, end: 45, totalQuestions: 45 },
      { name: "Chemistry", start: 46, end: 75, totalQuestions: 30 }
    ],
    SUBJECT_TOTAL_QUESTIONS: {
      "Physics": 45,
      "Chemistry": 30
    },
    TOTAL_QUESTIONS: 75,
    MAX_MARKS: 300
  }
};

// Function to set configuration based on shift type
function setConfigurationByShiftType(shiftType) {
  const config = SHIFT_TYPE_CONFIGS[shiftType];
  if (config) {
    SUBJECT_ORDER = config.SUBJECT_ORDER;
    SUBJECT_RANGES = config.SUBJECT_RANGES;
    SUBJECT_TOTAL_QUESTIONS = config.SUBJECT_TOTAL_QUESTIONS;
    TOTAL_QUESTIONS = config.TOTAL_QUESTIONS;
  }
}
const MARKS_CORRECT = 4;
const MARKS_WRONG = -1;
const SKIPPED_RESPONSE = "N";
const QUESTION_CANCELLED = "CANCELLED";
const THEME_STORAGE_KEY = "theme";
const RESULT_STORAGE_KEY = "keamLastResult";
const FORM_STORAGE_KEY = "keamForm";
const LEGACY_RESULT_STORAGE_KEY = "keamPrototypeLastResult";
const LEGACY_FORM_STORAGE_KEY = "keamPrototypeForm";

const KEAM_SHIFT_DATA = {
  "keam-2026-engg-17-4": {
    "label": "17 April 2026 - Engineering",
    "type": "engineering",
    "status": "ready",
    "note": "Official provisional answer key loaded from 17_4_ENG.pdf (Question Paper Code: 5/2026/OL).",
    "sourceUrl": "https://cee.kerala.gov.in/keam2026/list/anskey/17_4_ENG.pdf",
    "cancelledQuestions": [],
    "answers": {
      "1": "E", "2": "B", "3": "C", "4": "A", "5": "D", "6": "B", "7": "E", "8": "B", "9": "C", "10": "B",
      "11": "A", "12": "B", "13": "A", "14": "D", "15": "E", "16": "B", "17": "C", "18": "A", "19": "B", "20": "A",
      "21": "B", "22": "A", "23": "E", "24": "E", "25": "D", "26": "E", "27": "D", "28": "A", "29": "D", "30": "A",
      "31": "E", "32": "C", "33": "E", "34": "A", "35": "E", "36": "D", "37": "C", "38": "B", "39": "C", "40": "D",
      "41": "A", "42": "B", "43": "A", "44": "E", "45": "B", "46": "E", "47": "A", "48": "D", "49": "C", "50": "E",
      "51": "B", "52": "C", "53": "D", "54": "B", "55": "D", "56": "B", "57": "A", "58": "C", "59": "C", "60": "A",
      "61": "D", "62": "E", "63": "B", "64": "A", "65": "E", "66": "C", "67": "C", "68": "A", "69": "C", "70": "C",
      "71": "C", "72": "B", "73": "E", "74": "B", "75": "D", "76": "D", "77": "A", "78": "E", "79": "D", "80": "C",
      "81": "A", "82": "E", "83": "B", "84": "A", "85": "D", "86": "D", "87": "D", "88": "C", "89": "A", "90": "E",
      "91": "A", "92": "B", "93": "D", "94": "B", "95": "B", "96": "A", "97": "E", "98": "A", "99": "C", "100": "D",
      "101": "B", "102": "C", "103": "A", "104": "B", "105": "E", "106": "B", "107": "E", "108": "C", "109": "E", "110": "A",
      "111": "A", "112": "A", "113": "D", "114": "C", "115": "A", "116": "B", "117": "C", "118": "E", "119": "C", "120": "C",
      "121": "B", "122": "C", "123": "B", "124": "E", "125": "A", "126": "E", "127": "D", "128": "D", "129": "C", "130": "B",
      "131": "E", "132": "B", "133": "D", "134": "A", "135": "D", "136": "C", "137": "D", "138": "E", "139": "D", "140": "C",
      "141": "C", "142": "D", "143": "E", "144": "B", "145": "D", "146": "D", "147": "C", "148": "D", "149": "E", "150": "E"
    }
  },
  "keam-2026-pharm-18-4": {
    "label": "18 April 2026 - Pharmacy",
    "type": "pharmacy",
    "status": "ready",
    "note": "Official provisional answer key loaded from BPH_18_04.pdf (Question Paper Code: 6/2026/OL).",
    "sourceUrl": "https://cee.kerala.gov.in/keam2026/list/anskey/BPH_18_04.pdf",
    "cancelledQuestions": [],
    "answers": {
      "1": "A", "2": "B", "3": "E", "4": "C", "5": "A", "6": "E", "7": "B", "8": "C", "9": "E", "10": "E",
      "11": "A", "12": "C", "13": "E", "14": "A", "15": "E", "16": "C", "17": "A", "18": "B", "19": "A", "20": "D",
      "21": "B", "22": "E", "23": "A", "24": "C", "25": "D", "26": "E", "27": "C", "28": "B", "29": "D", "30": "C",
      "31": "E", "32": "B", "33": "C", "34": "A", "35": "D", "36": "B", "37": "E", "38": "D", "39": "C", "40": "E",
      "41": "B", "42": "D", "43": "C", "44": "C", "45": "D", "46": "D", "47": "B", "48": "C", "49": "E", "50": "B",
      "51": "C", "52": "A", "53": "B", "54": "D", "55": "C", "56": "A", "57": "D", "58": "E", "59": "D", "60": "A",
      "61": "A", "62": "D", "63": "B", "64": "E", "65": "B", "66": "B", "67": "D", "68": "B", "69": "A", "70": "A",
      "71": "D", "72": "A", "73": "D", "74": "C", "75": "E"
    }
  },
  "keam-2026-engg-18-4": {
    "label": "18 April 2026 - Engineering",
    "type": "engineering",
    "status": "ready",
    "note": "Official provisional answer key loaded from 18_4_ENG.pdf (Question Paper Code: 7/2026/OL).",
    "sourceUrl": "https://cee.kerala.gov.in/keam2026/list/anskey/18_4_ENG.pdf",
    "cancelledQuestions": [],
    "answers": {
      "1": "E", "2": "A", "3": "E", "4": "C", "5": "A", "6": "B", "7": "E", "8": "A", "9": "E", "10": "A",
      "11": "D", "12": "A", "13": "D", "14": "C", "15": "A", "16": "E", "17": "C", "18": "E", "19": "A", "20": "A",
      "21": "E", "22": "A", "23": "C", "24": "C", "25": "A", "26": "C", "27": "A", "28": "C", "29": "A", "30": "A",
      "31": "B", "32": "A", "33": "B", "34": "A", "35": "D", "36": "A", "37": "E", "38": "A", "39": "E", "40": "C",
      "41": "B", "42": "A", "43": "E", "44": "A", "45": "E", "46": "B", "47": "A", "48": "B", "49": "C", "50": "B",
      "51": "D", "52": "A", "53": "B", "54": "D", "55": "C", "56": "A", "57": "C", "58": "D", "59": "B", "60": "D",
      "61": "A", "62": "D", "63": "E", "64": "A", "65": "D", "66": "B", "67": "E", "68": "B", "69": "A", "70": "D",
      "71": "C", "72": "E", "73": "D", "74": "A", "75": "C", "76": "D", "77": "C", "78": "C", "79": "A", "80": "E",
      "81": "D", "82": "A", "83": "B", "84": "D", "85": "D", "86": "C", "87": "B", "88": "D", "89": "D", "90": "D",
      "91": "E", "92": "C", "93": "D", "94": "E", "95": "B", "96": "B", "97": "C", "98": "D", "99": "C", "100": "E",
      "101": "B", "102": "E", "103": "D", "104": "E", "105": "B", "106": "A", "107": "D", "108": "B", "109": "D", "110": "E",
      "111": "C", "112": "B", "113": "D", "114": "C", "115": "C", "116": "C", "117": "C", "118": "D", "119": "B", "120": "E",
      "121": "B", "122": "C", "123": "E", "124": "D", "125": "B", "126": "B", "127": "C", "128": "E", "129": "B", "130": "B",
      "131": "E", "132": "B", "133": "D", "134": "B", "135": "E", "136": "D", "137": "B", "138": "C", "139": "E", "140": "E",
      "141": "D", "142": "C", "143": "C", "144": "E", "145": "B", "146": "B", "147": "A", "148": "C", "149": "E", "150": "D"
    }
  },
  "keam-2026-pharm-19-4": {
    "label": "19 April 2026 - Pharmacy",
    "type": "pharmacy",
    "status": "ready",
    "note": "Official provisional answer key loaded from BPH_19_04.pdf (Question Paper Code: 8/2026/OL).",
    "sourceUrl": "https://cee.kerala.gov.in/keam2026/list/anskey/BPH_19_04.pdf",
    "cancelledQuestions": [],
    "answers": {
      "1": "B", "2": "C", "3": "E", "4": "A", "5": "E", "6": "A", "7": "E", "8": "B", "9": "A", "10": "A",
      "11": "D", "12": "E", "13": "D", "14": "B", "15": "A", "16": "C", "17": "E", "18": "A", "19": "C", "20": "A",
      "21": "C", "22": "A", "23": "E", "24": "B", "25": "D", "26": "E", "27": "C", "28": "A", "29": "B", "30": "D",
      "31": "C", "32": "D", "33": "E", "34": "C", "35": "C", "36": "D", "37": "B", "38": "D", "39": "C", "40": "B",
      "41": "B", "42": "D", "43": "C", "44": "B", "45": "E", "46": "A", "47": "D", "48": "D", "49": "E", "50": "B",
      "51": "C", "52": "E", "53": "A", "54": "B", "55": "D", "56": "D", "57": "C", "58": "A", "59": "B", "60": "E",
      "61": "C", "62": "A", "63": "D", "64": "B", "65": "E", "66": "A", "67": "C", "68": "E", "69": "B", "70": "D",
      "71": "C", "72": "D", "73": "E", "74": "B", "75": "A"
    }
  },
  "keam-2026-engg-19-4": {
    "label": "19 April 2026 - Engineering",
    "type": "engineering",
    "status": "ready",
    "note": "Official provisional answer key loaded from 19_04_ENG.pdf (Question Paper Code: 9/2026/OL).",
    "sourceUrl": "https://cee.kerala.gov.in/keam2026/list/anskey/19_4_ENG.pdf",
    "cancelledQuestions": [],
    "answers": {
      "1": "D", "2": "E", "3": "C", "4": "A", "5": "D", "6": "B", "7": "D", "8": "D", "9": "E", "10": "C",
      "11": "D", "12": "B", "13": "D", "14": "B", "15": "E", "16": "D", "17": "E", "18": "D", "19": "C", "20": "A",
      "21": "E", "22": "D", "23": "B", "24": "E", "25": "C", "26": "D", "27": "D", "28": "B", "29": "D", "30": "D",
      "31": "D", "32": "B", "33": "E", "34": "C", "35": "B", "36": "D", "37": "A", "38": "D", "39": "C", "40": "E",
      "41": "E", "42": "C", "43": "D", "44": "A", "45": "E", "46": "B", "47": "A", "48": "E", "49": "E", "50": "B",
      "51": "A", "52": "D", "53": "B", "54": "C", "55": "E", "56": "A", "57": "A", "58": "B", "59": "B", "60": "C",
      "61": "D", "62": "C", "63": "A", "64": "B", "65": "B", "66": "E", "67": "C", "68": "A", "69": "B", "70": "A",
      "71": "C", "72": "C", "73": "A", "74": "C", "75": "E", "76": "D", "77": "C", "78": "A", "79": "E", "80": "B",
      "81": "C", "82": "A", "83": "E", "84": "B", "85": "D", "86": "D", "87": "C", "88": "B", "89": "A", "90": "E",
      "91": "C", "92": "A", "93": "D", "94": "B", "95": "E", "96": "A", "97": "C", "98": "E", "99": "B", "100": "D",
      "101": "E", "102": "A", "103": "C", "104": "B", "105": "D", "106": "C", "107": "D", "108": "B", "109": "E", "110": "A",
      "111": "A", "112": "E", "113": "B", "114": "A", "115": "B", "116": "C", "117": "D", "118": "A", "119": "B", "120": "E",
      "121": "C", "122": "E", "123": "A", "124": "A", "125": "C", "126": "E", "127": "A", "128": "B", "129": "D", "130": "A",
      "131": "B", "132": "B", "133": "D", "134": "A", "135": "E", "136": "C", "137": "C", "138": "B", "139": "A", "140": "E",
      "141": "D", "142": "C", "143": "E", "144": "D", "145": "C", "146": "B", "147": "C", "148": "A", "149": "E", "150": "B"
    }
  },
  "keam-2026-pharm-20-4": {
    "label": "20 April 2026 - Pharmacy",
    "type": "pharmacy",
    "status": "ready",
    "note": "Official provisional answer key loaded from BPH_20_04.pdf (Question Paper Code: 10/2026/OL).",
    "sourceUrl": "https://cee.kerala.gov.in/keam2026/list/anskey/BPH_20_04.pdf",
    "cancelledQuestions": [],
    "answers": {
      "1": "A", "2": "E", "3": "B", "4": "D", "5": "C", "6": "B", "7": "A", "8": "D", "9": "C", "10": "A",
      "11": "B", "12": "A", "13": "D", "14": "E", "15": "A", "16": "C", "17": "A", "18": "D", "19": "A", "20": "B",
      "21": "A", "22": "E", "23": "C", "24": "A", "25": "D", "26": "C", "27": "C", "28": "A", "29": "D", "30": "D",
      "31": "D", "32": "C", "33": "B", "34": "E", "35": "C", "36": "A", "37": "E", "38": "D", "39": "D", "40": "B",
      "41": "B", "42": "A", "43": "B", "44": "D", "45": "E", "46": "E", "47": "B", "48": "A", "49": "E", "50": "B",
      "51": "D", "52": "C", "53": "E", "54": "E", "55": "C", "56": "C", "57": "D", "58": "E", "59": "A", "60": "D",
      "61": "C", "62": "E", "63": "E", "64": "E", "65": "B", "66": "C", "67": "B", "68": "B", "69": "C", "70": "D",
      "71": "B", "72": "A", "73": "C", "74": "E", "75": "B"
    }
  },
  "keam-2026-engg-20-4": {
    "label": "20 April 2026 - Engineering",
    "type": "engineering",
    "status": "ready",
    "note": "Official provisional answer key loaded from 20_4_ENG (1).pdf (Question Paper Code: 11/2026/OL).",
    "sourceUrl": "https://cee.kerala.gov.in/keam2026/list/anskey/20_4_ENG.pdf",
    "cancelledQuestions": [],
    "answers": {
      "1": "B", "2": "E", "3": "C", "4": "E", "5": "E", "6": "B", "7": "A", "8": "E", "9": "B", "10": "E",
      "11": "A", "12": "A", "13": "D", "14": "C", "15": "A", "16": "A", "17": "E", "18": "D", "19": "C", "20": "E",
      "21": "C", "22": "E", "23": "C", "24": "E", "25": "A", "26": "B", "27": "E", "28": "A", "29": "A", "30": "E",
      "31": "D", "32": "E", "33": "E", "34": "C", "35": "A", "36": "A", "37": "A", "38": "A", "39": "A", "40": "E",
      "41": "D", "42": "B", "43": "E", "44": "E", "45": "C", "46": "D", "47": "C", "48": "A", "49": "E", "50": "D",
      "51": "E", "52": "D", "53": "C", "54": "E", "55": "D", "56": "D", "57": "A", "58": "E", "59": "B", "60": "D",
      "61": "C", "62": "D", "63": "C", "64": "B", "65": "D", "66": "B", "67": "C", "68": "E", "69": "D", "70": "E",
      "71": "C", "72": "E", "73": "C", "74": "D", "75": "B", "76": "D", "77": "B", "78": "B", "79": "B", "80": "B",
      "81": "A", "82": "A", "83": "E", "84": "D", "85": "D", "86": "B", "87": "C", "88": "C", "89": "A", "90": "A",
      "91": "A", "92": "D", "93": "A", "94": "C", "95": "E", "96": "C", "97": "C", "98": "C", "99": "B", "100": "C",
      "101": "D", "102": "B", "103": "A", "104": "D", "105": "B", "106": "A", "107": "E", "108": "B", "109": "A", "110": "A",
      "111": "E", "112": "C", "113": "B", "114": "B", "115": "E", "116": "B", "117": "C", "118": "B", "119": "A", "120": "C",
      "121": "B", "122": "A", "123": "C", "124": "C", "125": "D", "126": "B", "127": "D", "128": "B", "129": "C", "130": "B",
      "131": "C", "132": "A", "133": "C", "134": "C", "135": "D", "136": "D", "137": "A", "138": "D", "139": "D", "140": "D",
      "141": "B", "142": "D", "143": "A", "144": "E", "145": "B", "146": "B", "147": "B", "148": "D", "149": "D", "150": "E"
    }
  },
  "keam-2026-engg-21-4": {
    "label": "21 April 2026 - Engineering",
    "type": "engineering",
    "status": "ready",
    "note": "Official provisional answer key loaded from 21_4_ENG.pdf (Question Paper Code: 12/2026/OL).",
    "sourceUrl": "https://cee.kerala.gov.in/keam2026/list/anskey/21_4_ENG.pdf",
    "cancelledQuestions": [],
    "answers": {
      "1": "D", "2": "A", "3": "C", "4": "E", "5": "B", "6": "A", "7": "D", "8": "E", "9": "B", "10": "A",
      "11": "B", "12": "E", "13": "C", "14": "C", "15": "A", "16": "D", "17": "A", "18": "E", "19": "B", "20": "E",
      "21": "A", "22": "C", "23": "E", "24": "B", "25": "A", "26": "C", "27": "B", "28": "E", "29": "E", "30": "A",
      "31": "D", "32": "E", "33": "A", "34": "E", "35": "A", "36": "D", "37": "A", "38": "C", "39": "E", "40": "D",
      "41": "B", "42": "E", "43": "A", "44": "E", "45": "B", "46": "A", "47": "C", "48": "A", "49": "D", "50": "C",
      "51": "C", "52": "E", "53": "A", "54": "E", "55": "C", "56": "B", "57": "D", "58": "E", "59": "E", "60": "C",
      "61": "D", "62": "A", "63": "E", "64": "D", "65": "E", "66": "D", "67": "D", "68": "D", "69": "E", "70": "D",
      "71": "B", "72": "A", "73": "A", "74": "B", "75": "E", "76": "D", "77": "A", "78": "C", "79": "B", "80": "C",
      "81": "C", "82": "D", "83": "A", "84": "B", "85": "D", "86": "D", "87": "C", "88": "A", "89": "D", "90": "B",
      "91": "C", "92": "D", "93": "C", "94": "B", "95": "A", "96": "C", "97": "B", "98": "A", "99": "E", "100": "A",
      "101": "D", "102": "C", "103": "D", "104": "B", "105": "C", "106": "E", "107": "B", "108": "D", "109": "D", "110": "C",
      "111": "C", "112": "A", "113": "C", "114": "B", "115": "C", "116": "D", "117": "C", "118": "B", "119": "C", "120": "B",
      "121": "C", "122": "B", "123": "E", "124": "B", "125": "A", "126": "A", "127": "D", "128": "E", "129": "D", "130": "C",
      "131": "E", "132": "A", "133": "B", "134": "B", "135": "D", "136": "A", "137": "B", "138": "B", "139": "D", "140": "C",
      "141": "E", "142": "A", "143": "B", "144": "B", "145": "E", "146": "D", "147": "E", "148": "C", "149": "B", "150": "E"
    }
  },
  "keam-2026-engg-22-4": {
    "label": "22 April 2026 - Engineering",
    "type": "engineering",
    "status": "ready",
    "note": "Official provisional answer key loaded from 22_04_ENG.pdf (Question Paper Code: 13/2026/OL).",
    "sourceUrl": "https://cee.kerala.gov.in/keam2026/list/anskey/22_04_ENG.pdf",
    "cancelledQuestions": [],
    "answers": {
      "1": "C", "2": "B", "3": "E", "4": "D", "5": "A", "6": "C", "7": "A", "8": "D", "9": "C", "10": "E",
      "11": "A", "12": "A", "13": "C", "14": "A", "15": "D", "16": "A", "17": "E", "18": "C", "19": "A", "20": "A",
      "21": "B", "22": "C", "23": "A", "24": "D", "25": "E", "26": "A", "27": "C", "28": "E", "29": "A", "30": "A",
      "31": "B", "32": "C", "33": "D", "34": "E", "35": "A", "36": "A", "37": "E", "38": "C", "39": "A", "40": "D",
      "41": "D", "42": "E", "43": "B", "44": "E", "45": "E", "46": "D", "47": "A", "48": "E", "49": "C", "50": "C",
      "51": "E", "52": "B", "53": "E", "54": "D", "55": "A", "56": "E", "57": "D", "58": "D", "59": "E", "60": "A",
      "61": "A", "62": "C", "63": "D", "64": "A", "65": "D", "66": "E", "67": "D", "68": "B", "69": "A", "70": "D",
      "71": "B", "72": "D", "73": "C", "74": "B", "75": "C", "76": "E", "77": "B", "78": "D", "79": "B", "80": "E",
      "81": "C", "82": "C", "83": "D", "84": "B", "85": "D", "86": "C", "87": "B", "88": "D", "89": "B", "90": "B",
      "91": "E", "92": "D", "93": "B", "94": "E", "95": "C", "96": "C", "97": "A", "98": "E", "99": "E", "100": "D",
      "101": "E", "102": "C", "103": "D", "104": "B", "105": "B", "106": "B", "107": "B", "108": "C", "109": "E", "110": "C",
      "111": "C", "112": "B", "113": "A", "114": "E", "115": "A", "116": "C", "117": "C", "118": "B", "119": "C", "120": "A",
      "121": "D", "122": "B", "123": "B", "124": "C", "125": "B", "126": "E", "127": "B", "128": "D", "129": "C", "130": "B",
      "131": "A", "132": "E", "133": "D", "134": "D", "135": "E", "136": "D", "137": "C", "138": "A", "139": "B", "140": "A",
      "141": "A", "142": "D", "143": "A", "144": "D", "145": "E", "146": "E", "147": "C", "148": "B", "149": "C", "150": "B"
    }
  }
};

let lastResult = null;

window.addEventListener("DOMContentLoaded", () => {
  populateShiftOptions();
  bindEvents();
  applyTheme(
    localStorage.getItem(THEME_STORAGE_KEY) ||
    (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
  restoreFormState();
  restoreResult();
});

function bindEvents() {
  document.getElementById("analyzeBtn")?.addEventListener("click", handleAnalyze);
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
  document.getElementById("clearDataBtn")?.addEventListener("click", clearStoredData);
  document.getElementById("exportPdfBtn")?.addEventListener("click", exportKeamPdf);
  document.getElementById("shift")?.addEventListener("change", persistFormState);
  document.getElementById("responseInput")?.addEventListener("input", persistFormState);
}

function populateShiftOptions() {
  const shiftSelect = document.getElementById("shift");
  shiftSelect.innerHTML = '<option value="">Select Exam Shift</option>';

  Object.entries(KEAM_SHIFT_DATA).forEach(([id, config]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = config.label;
    shiftSelect.appendChild(option);
  });
}

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) themeToggle.innerHTML = theme === "dark" ? "&#9728;&#65039;" : "&#127769;";

  const themeMeta = document.getElementById("themeColorMeta");
  if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#0f1117" : "#f4f6fb");

  if (lastResult) {
    drawRing(lastResult.scores, lastResult.maxMarks || 600);
    drawChart(lastResult.scores);
  }
}

function toggleTheme() {
  applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
}

function setAnalyzing(isAnalyzing) {
  const button = document.getElementById("analyzeBtn");
  if (!button) return;

  button.disabled = isAnalyzing;
  document.getElementById("analyzeBtnText").textContent = isAnalyzing ? "Analyzing..." : "Analyze";
  document.getElementById("analyzeBtnSpinner").hidden = !isAnalyzing;
}

function handleAnalyze() {
  const shiftId = document.getElementById("shift").value;
  const responseText = document.getElementById("responseInput").value;

  if (!shiftId) {
    alert("Please select an exam shift.");
    return;
  }

  if (!responseText.trim()) {
    alert("Please paste the student responses.");
    return;
  }

  const shiftConfig = KEAM_SHIFT_DATA[shiftId];
  if (!shiftConfig || shiftConfig.status !== "ready" || !shiftConfig.answers) {
    alert(shiftConfig?.note || "Answer key missing for this shift.");
    return;
  }

  // Set configuration based on shift type
  setConfigurationByShiftType(shiftConfig.type || "engineering");

  setAnalyzing(true);

  try {
    const parsedResponses = parseResponses(responseText);
    const result = calculateResult(parsedResponses.answers, shiftConfig);
    result.sourceNote = shiftConfig.note || "";
    result.sourceUrl = shiftConfig.sourceUrl || "";
    result.parseSummary = {
      validCount: parsedResponses.validCount,
      invalidCount: parsedResponses.invalidLines.length,
      duplicateCount: parsedResponses.duplicateQuestions.length,
      cancelledCount: (shiftConfig.cancelledQuestions || []).length
    };
    renderResult(result, parsedResponses, shiftConfig);
    persistFormState();
    localStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(result));
  } catch (error) {
    console.error("KEAM analysis error:", error);
    alert(error.message || "Unable to analyze the KEAM responses.");
  } finally {
    setAnalyzing(false);
  }
}

function parseResponses(rawText) {
  const answers = {};
  const invalidLines = [];
  const duplicateQuestions = [];
  const cleanedText = stripUnintendedHeaders(rawText);
  const lines = cleanedText.split(/\r?\n/);

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    if (isHeaderRow(trimmed)) return;

    const match = trimmed.match(/^(?:question\s*no\.?\s*:?\s*)?(\d+)(?:\s*[:\-]\s*|\s+)(.+)$/i);
    if (!match) {
      invalidLines.push(index + 1);
      return;
    }

    const questionNo = Number(match[1]);
    const normalizedAnswer = normalizeAnswer(match[2]);

    if (!Number.isInteger(questionNo) || questionNo < 1 || questionNo > TOTAL_QUESTIONS || normalizedAnswer === "") {
      invalidLines.push(index + 1);
      return;
    }

    if (answers[questionNo]) duplicateQuestions.push(questionNo);
    answers[questionNo] = normalizedAnswer;
  });

  return {
    answers,
    validCount: Object.keys(answers).length,
    invalidLines,
    duplicateQuestions
  };
}

function isHeaderRow(value) {
  const normalized = value
    .replace(/[:|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return /^question\s*no\.?\s*answer$/i.test(normalized)
    || /^question\s*no\.?$/i.test(normalized)
    || /^answer$/i.test(normalized);
}

function stripUnintendedHeaders(rawText) {
  return String(rawText || "")
    .split(/\r?\n/)
    .filter((line) => !isHeaderRow(line.trim()))
    .join("\n");
}

function normalizeAnswer(value) {
  const cleaned = String(value || "")
    .trim()
    .toUpperCase()
    .replace(/^OPTION\s*/, "")
    .replace(/\s+/g, "");

  const numericMap = { "1": "A", "2": "B", "3": "C", "4": "D", "5": "E" };

  if (/^(N|NA|NIL|SKIP|SKIPPED|NOTANSWERED)$/.test(cleaned)) return SKIPPED_RESPONSE;
  if (numericMap[cleaned]) return numericMap[cleaned];
  if (/^[A-E]$/.test(cleaned)) return cleaned;
  return "";
}

function calculateResult(studentAnswers, shiftConfig) {
  const scores = createBlankScores();
  const details = [];
  const answerKey = shiftConfig.answers;
  const cancelledQuestions = new Set(shiftConfig.cancelledQuestions || []);
  const shiftType = shiftConfig.type || "engineering";
  const maxMarks = SHIFT_TYPE_CONFIGS[shiftType]?.MAX_MARKS || 600;

  // First pass: track cancelled questions per subject
  for (let questionNo = 1; questionNo <= TOTAL_QUESTIONS; questionNo += 1) {
    const subject = getSubjectByQuestion(questionNo);
    const isCancelled = cancelledQuestions.has(questionNo);
    if (isCancelled) {
      scores[subject].cancelled += 1;
    }
  }

  for (let questionNo = 1; questionNo <= TOTAL_QUESTIONS; questionNo += 1) {
    const subject = getSubjectByQuestion(questionNo);
    const isCancelled = cancelledQuestions.has(questionNo);
    const correctAnswer = normalizeAnswer(answerKey[questionNo]);
    const studentAnswer = normalizeAnswer(studentAnswers[questionNo]);

    if (isCancelled) {
      details.push({
        questionNo,
        subject,
        attempted: false,
        correct: false,
        cancelled: true,
        studentAnswer: studentAnswer && studentAnswer !== SKIPPED_RESPONSE ? studentAnswer : "-",
        correctAnswer: QUESTION_CANCELLED,
        scoreImpact: 0
      });
      continue;
    }

    const attempted = Boolean(studentAnswer) && studentAnswer !== SKIPPED_RESPONSE;
    const correct = attempted && studentAnswer === correctAnswer;

    if (!attempted) {
      scores[subject].u += 1;
    } else if (correct) {
      scores[subject].c += 1;
      scores[subject].s += MARKS_CORRECT;
    } else {
      scores[subject].w += 1;
      scores[subject].s += MARKS_WRONG;
    }

    details.push({
      questionNo,
      subject,
      attempted,
      correct,
      cancelled: false,
      studentAnswer: attempted ? studentAnswer : (studentAnswer === SKIPPED_RESPONSE ? SKIPPED_RESPONSE : "-"),
      correctAnswer: correctAnswer || "-",
      scoreImpact: attempted ? (correct ? MARKS_CORRECT : MARKS_WRONG) : 0
    });
  }

  // Second pass: calculate normalized scores and bonuses
  SUBJECT_ORDER.forEach((subject) => {
    const entry = scores[subject];
    const totalQuestionsInSubject = SUBJECT_TOTAL_QUESTIONS[subject];
    const nonCancelledQuestions = totalQuestionsInSubject - entry.cancelled;
    
    if (nonCancelledQuestions > 0) {
      const normalizationFactor = totalQuestionsInSubject / nonCancelledQuestions;
      entry.normalized = entry.s * normalizationFactor;
      entry.bonus = entry.normalized - entry.s;
    } else {
      entry.normalized = entry.s;
      entry.bonus = 0;
    }
  });

  return {
    scores,
    details,
    shiftId: document.getElementById("shift").value,
    shiftLabel: shiftConfig.label,
    shiftType: shiftType,
    maxMarks: maxMarks,
    generatedAt: new Date().toISOString()
  };
}

function createBlankScores() {
  const scores = {};
  SUBJECT_ORDER.forEach((subject) => {
    scores[subject] = { c: 0, w: 0, u: 0, s: 0, cancelled: 0, normalized: 0, bonus: 0 };
  });
  return scores;
}

function getSubjectByQuestion(questionNo) {
  return SUBJECT_RANGES.find((range) => questionNo >= range.start && questionNo <= range.end)?.name || "Unknown";
}

function renderResult(result, parsedResponses, shiftConfig) {
  lastResult = result;

  renderBanner(parsedResponses, shiftConfig);
  renderSummaryTable(result.scores);
  renderQuestionTable(result.details);
  drawRing(result.scores, result.maxMarks || 600);
  drawChart(result.scores);

  const resultsSection = document.getElementById("resultsSection");
  resultsSection.style.display = "block";
  requestAnimationFrame(() => resultsSection.classList.add("visible"));

  const charts = document.getElementById("charts");
  charts.style.display = "block";
  charts.classList.add("show");

  const questionAnalysis = document.getElementById("questionAnalysis");
  questionAnalysis.style.display = "block";
  questionAnalysis.classList.add("show");
}

function renderBanner(parsedResponses, shiftConfig) {
  const banner = document.getElementById("parseBanner");
  const invalidCount = parsedResponses.invalidLines.length;
  const duplicateCount = parsedResponses.duplicateQuestions.length;
  const attemptedCount = parsedResponses.validCount;
  const cancelledCount = (shiftConfig.cancelledQuestions || []).length;
  const sourceLine = shiftConfig.sourceUrl
    ? `<p>Source: <a href="${shiftConfig.sourceUrl}" target="_blank" rel="noopener noreferrer">official final answer key PDF</a></p>`
    : "";

  banner.innerHTML = `
    <p class="info-banner-title">Analysis Summary</p>
    <p><strong>${shiftConfig.label}</strong></p>
    <p>Parsed ${attemptedCount} valid response line${attemptedCount === 1 ? "" : "s"}.</p>
    <p>Ignored ${invalidCount} invalid line${invalidCount === 1 ? "" : "s"} and replaced ${duplicateCount} duplicate entr${duplicateCount === 1 ? "y" : "ies"} with the latest answer.</p>
    <p>${cancelledCount} question${cancelledCount === 1 ? "" : "s"} marked cancelled in the official key are excluded from scoring.</p>
    ${sourceLine}
  `;
  banner.style.display = "block";
}

function renderSummaryTable(scores) {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  let totalRawScore = 0;
  let totalNormalizedScore = 0;
  let totalBonus = 0;
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalSkipped = 0;

  SUBJECT_ORDER.forEach((subject) => {
    const entry = scores[subject];
    const attempted = entry.c + entry.w;
    const accuracy = attempted ? Math.round((entry.c / attempted) * 100) : 0;
    const roundedScore = Math.round(entry.s);
    const roundedNormalized = Math.round(entry.normalized ?? entry.s);
    const bonusQuestions = entry.cancelled ?? 0;

    totalRawScore += entry.s;
    totalNormalizedScore += (entry.normalized ?? entry.s);
    totalBonus += (entry.bonus ?? 0);
    totalCorrect += entry.c;
    totalWrong += entry.w;
    totalSkipped += entry.u;

    tbody.innerHTML += `
      <tr>
        <td>${subject}</td>
        <td class="score-col">${roundedScore}</td>
        <td class="bonus-col">${bonusQuestions}</td>
        <td class="normalized-col">${roundedNormalized}</td>
        <td class="correct-col">${entry.c}</td>
        <td class="wrong-col">${entry.w}</td>
        <td class="skip-col">${entry.u}</td>
        <td>${accuracy}%</td>
      </tr>
    `;
  });

  // Add Total row with bold text
  const totalAttempted = totalCorrect + totalWrong;
  const totalAccuracy = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  const roundedTotalRaw = Math.round(totalRawScore);
  const roundedTotalNormalized = Math.round(totalNormalizedScore);
  const totalBonusQuestions = SUBJECT_ORDER.reduce((sum, subject) => sum + ((scores[subject]?.cancelled ?? 0)), 0);

  tbody.innerHTML += `
    <tr style="font-weight: bold;">
      <td><strong>Total</strong></td>
      <td class="score-col"><strong>${roundedTotalRaw}</strong></td>
      <td class="bonus-col"><strong>${totalBonusQuestions}</strong></td>
      <td class="normalized-col"><strong>${roundedTotalNormalized}</strong></td>
      <td class="correct-col"><strong>${totalCorrect}</strong></td>
      <td class="wrong-col"><strong>${totalWrong}</strong></td>
      <td class="skip-col"><strong>${totalSkipped}</strong></td>
      <td><strong>${totalAccuracy}%</strong></td>
    </tr>
  `;
}

function renderQuestionTable(details) {
  const tbody = document.querySelector("#detailTable tbody");
  tbody.innerHTML = "";

  details.forEach((detail) => {
    const resultText = detail.cancelled
      ? "Cancelled"
      : (detail.correct ? "Correct" : (detail.attempted ? "Wrong" : "Skipped"));
    const resultClass = detail.cancelled
      ? "result-cancelled"
      : (detail.correct ? "result-correct" : (detail.attempted ? "result-wrong" : "result-skip"));

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${detail.questionNo}</td>
      <td>${detail.subject}</td>
      <td>${detail.studentAnswer}</td>
      <td>${detail.correctAnswer}</td>
      <td class="${resultClass}">${resultText}</td>
    `;

    tbody.appendChild(row);
  });
}

function getKeamSubjectAnalytics(result) {
  return SUBJECT_ORDER.map((subject) => {
    const entry = result.scores?.[subject] || { c: 0, w: 0, u: 0, s: 0, normalized: 0, bonus: 0, cancelled: 0 };
    const questionCount = result.details?.filter((detail) => detail.subject === subject && !detail.cancelled).length
      || (entry.c + entry.w + entry.u);
    const attempted = entry.c + entry.w;
    const accuracy = attempted ? Math.round((entry.c / attempted) * 100) : 0;
    const attemptRate = questionCount ? Math.round((attempted / questionCount) * 100) : 0;
    const normalizedScore = Math.round(entry.normalized ?? entry.s);
    const bonus = Math.round(entry.bonus ?? 0);
    const rawScore = Math.round(entry.s);

    return {
      subject,
      score: rawScore,
      normalized: normalizedScore,
      bonus: bonus,
      correct: entry.c,
      wrong: entry.w,
      skipped: entry.u,
      attempted,
      accuracy,
      attemptRate,
      questionCount,
      maxScore: questionCount * MARKS_CORRECT
    };
  });
}

function exportKeamPdf() {
  if (!lastResult) {
    alert("Analyze the KEAM responses first.");
    return;
  }

  if (!window.PdfExportUtils) {
    alert("PDF export is unavailable right now. Please refresh and try again.");
    return;
  }

  const subjectAnalytics = getKeamSubjectAnalytics(lastResult);
  const totalScore = subjectAnalytics.reduce((sum, item) => sum + item.score, 0);
  const totalNormalizedScore = subjectAnalytics.reduce((sum, item) => sum + item.normalized, 0);
  const totalBonus = subjectAnalytics.reduce((sum, item) => sum + item.bonus, 0);
  const totalCorrect = subjectAnalytics.reduce((sum, item) => sum + item.correct, 0);
  const totalWrong = subjectAnalytics.reduce((sum, item) => sum + item.wrong, 0);
  const totalSkipped = subjectAnalytics.reduce((sum, item) => sum + item.skipped, 0);
  const totalAttempted = totalCorrect + totalWrong;
  const scoredQuestionCount = subjectAnalytics.reduce((sum, item) => sum + item.questionCount, 0);
  const maxScore = scoredQuestionCount * MARKS_CORRECT;
  const accuracy = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  try {
    const pdf = window.PdfExportUtils.createDoc();
    const subtitleLines = [
      lastResult.shiftLabel || "KEAM"
    ];

    window.PdfExportUtils.addTitle(pdf, "KEAM Score Analysis - ScoreFusion", subtitleLines);

    window.PdfExportUtils.addSection(pdf, "Summary");
    window.PdfExportUtils.addKeyValueLines(pdf, [
      { label: "Total Normalized Score", value: `${Math.round(totalNormalizedScore)}` },
      { label: "Total Accuracy", value: `${accuracy}%` }
    ]);

    window.PdfExportUtils.addSection(pdf, "Subject-wise Score Analysis");
    
    // Build table rows with detailed breakdown - including normalized scores and bonus
    const tableRows = subjectAnalytics.map((item) => ([
      item.subject,
      String(item.score),
      String(item.bonus),
      String(item.normalized),
      String(item.correct),
      String(item.wrong),
      String(item.skipped),
      `${item.accuracy}%`
    ]));
    
    // Add total row with bold styling
    tableRows.push([
      "Total",
      String(totalScore),
      String(Math.round(totalBonus)),
      String(Math.round(totalNormalizedScore)),
      String(totalCorrect),
      String(totalWrong),
      String(totalSkipped),
      `${accuracy}%`
    ]);

    window.PdfExportUtils.addTable(
      pdf,
      [
        { label: "Subject", width: 0.17 },
        { label: "Score", width: 0.12 },
        { label: "Bonus", width: 0.12 },
        { label: "Norm. Score", width: 0.15 },
        { label: "Correct", width: 0.12 },
        { label: "Wrong", width: 0.12 },
        { label: "Skipped", width: 0.12 },
        { label: "Acc.", width: 0.08 }
      ],
      tableRows,
      { boldLastRow: true }
    );

    const shiftToken = (lastResult.shiftId || "keam").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
    window.PdfExportUtils.save(pdf, `keam-score-analysis-${shiftToken || "report"}.pdf`);
  } catch (error) {
    console.error("Failed to export KEAM PDF:", error);
    alert(`Unable to export PDF right now.\n\n${error.message}`);
  }
}

function drawRing(scores, maxMarks = 600) {
  const totalNormalized = SUBJECT_ORDER.reduce((sum, subject) => sum + scores[subject].normalized, 0);
  const max = TOTAL_QUESTIONS * MARKS_CORRECT;
  const scorePct = max ? Math.max(0, (totalNormalized / max) * 100) : 0;
  const correctTotal = SUBJECT_ORDER.reduce((sum, subject) => sum + scores[subject].c, 0);
  const wrongTotal = SUBJECT_ORDER.reduce((sum, subject) => sum + scores[subject].w, 0);
  const accuracyPct = (correctTotal + wrongTotal)
    ? (correctTotal / (correctTotal + wrongTotal)) * 100
    : 0;

  const isDark = document.body.classList.contains("dark");
  const trackColor = isDark ? "#2e3347" : "#dde3ee";
  const valueColor = isDark ? "#e2e8f0" : "#1a1a2e";
  const labelColor = isDark ? "#94a3b8" : "#64748b";

  animateRing({
    canvas: document.getElementById("scoreRing"),
    percent: scorePct,
    displayValue: Math.round(totalNormalized),
    suffix: `/${maxMarks}`,
    color: "#3b82f6",
    headerText: "Total marks",
    trackColor,
    valueColor,
    labelColor
  });

  animateRing({
    canvas: document.getElementById("accuracyRing"),
    percent: accuracyPct,
    displayValue: Math.round(accuracyPct),
    suffix: "%",
    color: "#10b981",
    headerText: "Accuracy",
    trackColor,
    valueColor,
    labelColor
  });
}

function animateRing({ canvas, percent, displayValue, suffix, color, headerText, trackColor, valueColor, labelColor }) {
  const devicePixelRatio = window.devicePixelRatio || 1;
  const width = canvas.parentElement.clientWidth || 200;
  const height = Math.round(width * 0.55);

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;

  const context = canvas.getContext("2d");
  context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

  const radius = width / 2 - Math.max(10, width * 0.07);
  const lineWidth = Math.max(8, width * 0.06);
  const labelSize = Math.max(10, width * 0.065);
  const valueSize = Math.max(16, width * 0.12);

  let current = 0;

  function drawFrame() {
    context.clearRect(0, 0, width, height);
    context.lineWidth = lineWidth;
    context.lineCap = "round";

    context.beginPath();
    context.arc(width / 2, height, radius, Math.PI, 0);
    context.strokeStyle = trackColor;
    context.stroke();

    context.beginPath();
    context.arc(width / 2, height, radius, Math.PI, Math.PI + (Math.PI * current / 100));
    context.strokeStyle = color;
    context.stroke();

    context.textAlign = "center";
    context.fillStyle = labelColor;
    context.font = `${labelSize}px system-ui`;
    context.fillText(headerText, width / 2, height - radius / 1.5);

    context.fillStyle = valueColor;
    context.font = `bold ${valueSize}px system-ui`;
    context.fillText(`${Math.round((current / Math.max(percent || 1, 1)) * displayValue) || 0}${suffix}`, width / 2, height - radius / 3.2);

    if (current < percent) {
      current = Math.min(current + 2, percent);
      requestAnimationFrame(drawFrame);
    } else {
      context.clearRect(0, 0, width, height);
      context.lineWidth = lineWidth;
      context.lineCap = "round";

      context.beginPath();
      context.arc(width / 2, height, radius, Math.PI, 0);
      context.strokeStyle = trackColor;
      context.stroke();

      context.beginPath();
      context.arc(width / 2, height, radius, Math.PI, Math.PI + (Math.PI * percent / 100));
      context.strokeStyle = color;
      context.stroke();

      context.textAlign = "center";
      context.fillStyle = labelColor;
      context.font = `${labelSize}px system-ui`;
      context.fillText(headerText, width / 2, height - radius / 1.5);

      context.fillStyle = valueColor;
      context.font = `bold ${valueSize}px system-ui`;
      context.fillText(`${displayValue}${suffix}`, width / 2, height - radius / 3.2);
    }
  }

  drawFrame();
}

function drawChart(scores) {
  const context = document.getElementById("scoreChart").getContext("2d");
  if (window.keamScoreChart) window.keamScoreChart.destroy();

  const colors = ["#f59e0b", "#3b82f6", "#10b981"];
  
  window.keamScoreChart = new Chart(context, {
    type: "pie",
    data: {
      labels: SUBJECT_ORDER,
      datasets: [{
        data: SUBJECT_ORDER.map((subject) => Math.round(scores[subject].normalized)),
        backgroundColor: colors.slice(0, SUBJECT_ORDER.length)
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: (contextValue) => `${contextValue.label}: ${contextValue.raw} pts`
          }
        }
      }
    }
  });
}

function persistFormState() {
  const formState = {
    shift: document.getElementById("shift")?.value || "",
    responseInput: document.getElementById("responseInput")?.value || ""
  };

  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formState));
}

function restoreFormState() {
  const storedState = localStorage.getItem(FORM_STORAGE_KEY) || localStorage.getItem(LEGACY_FORM_STORAGE_KEY);
  if (!storedState) return;

  try {
    const formState = JSON.parse(storedState);
    document.getElementById("shift").value = formState.shift || "";
    document.getElementById("responseInput").value = formState.responseInput || "";
  } catch (error) {
    console.error("Failed to restore KEAM form state:", error);
    localStorage.removeItem(FORM_STORAGE_KEY);
  }
}

function restoreResult() {
  const storedResult = localStorage.getItem(RESULT_STORAGE_KEY) || localStorage.getItem(LEGACY_RESULT_STORAGE_KEY);
  if (!storedResult) return;

  try {
    const result = JSON.parse(storedResult);
    lastResult = result;
    
    // Set configuration based on shift type if available
    if (result.shiftType) {
      setConfigurationByShiftType(result.shiftType);
    }
    
    renderSummaryTable(result.scores);
    renderQuestionTable(result.details);
    drawRing(result.scores, result.maxMarks || 600);
    drawChart(result.scores);

    const resultsSection = document.getElementById("resultsSection");
    resultsSection.style.display = "block";
    resultsSection.classList.add("visible");

    const charts = document.getElementById("charts");
    charts.style.display = "block";
    charts.classList.add("show");

    const questionAnalysis = document.getElementById("questionAnalysis");
    questionAnalysis.style.display = "block";
    questionAnalysis.classList.add("show");
  } catch (error) {
    console.error("Failed to restore KEAM result:", error);
    localStorage.removeItem(RESULT_STORAGE_KEY);
  }
}

function clearStoredData() {
  localStorage.removeItem(RESULT_STORAGE_KEY);
  localStorage.removeItem(FORM_STORAGE_KEY);
  localStorage.removeItem(LEGACY_RESULT_STORAGE_KEY);
  localStorage.removeItem(LEGACY_FORM_STORAGE_KEY);

  lastResult = null;
  document.getElementById("resultsSection").style.display = "none";
  document.getElementById("charts").style.display = "none";
  document.getElementById("questionAnalysis").style.display = "none";
  document.getElementById("parseBanner").style.display = "none";
  document.getElementById("shift").value = "";
  document.getElementById("responseInput").value = "";

  if (window.keamScoreChart) {
    window.keamScoreChart.destroy();
    window.keamScoreChart = null;
  }
}
