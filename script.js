// PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// ─── Answer Keys ─────────────────────────────────────────────────────────────
const ANSWER_KEYS = {
  "2026-04-08-S2": {
    "691121526": {"correctAnswerId": "6911211786", "subject": "Mathematics"},
    "691121527": {"correctAnswerId": "6911211791", "subject": "Mathematics"},
    "691121528": {"correctAnswerId": "6911211796", "subject": "Mathematics"},
    "691121529": {"correctAnswerId": "6911211800", "subject": "Mathematics"},
    "691121530": {"correctAnswerId": "6911211802", "subject": "Mathematics"},
    "691121531": {"correctAnswerId": "6911211807", "subject": "Mathematics"},
    "691121532": {"correctAnswerId": "6911211812", "subject": "Mathematics"},
    "691121533": {"correctAnswerId": "6911211816", "subject": "Mathematics"},
    "691121534": {"correctAnswerId": "6911211819", "subject": "Mathematics"},
    "691121535": {"correctAnswerId": "6911211823", "subject": "Mathematics"},
    "691121536": {"correctAnswerId": "6911211827", "subject": "Mathematics"},
    "691121537": {"correctAnswerId": "6911211830", "subject": "Mathematics"},
    "691121538": {"correctAnswerId": "6911211834", "subject": "Mathematics"},
    "691121539": {"correctAnswerId": "6911211839", "subject": "Mathematics"},
    "691121540": {"correctAnswerId": "6911211844", "subject": "Mathematics"},
    "691121541": {"correctAnswerId": "6911211848", "subject": "Mathematics"},
    "691121542": {"correctAnswerId": "6911211850", "subject": "Mathematics"},
    "691121543": {"correctAnswerId": "6911211854", "subject": "Mathematics"},
    "691121544": {"correctAnswerId": "6911211861", "subject": "Mathematics"},
    "691121545": {"correctAnswerId": "6911211863", "subject": "Mathematics"},
    "691121546": {"correctAnswerId": "2", "subject": "Mathematics"},
    "691121547": {"correctAnswerId": "12", "subject": "Mathematics"},
    "691121548": {"correctAnswerId": "4", "subject": "Mathematics"},
    "691121549": {"correctAnswerId": "18", "subject": "Mathematics"},
    "691121550": {"correctAnswerId": "395", "subject": "Mathematics"},

    "691121551": {"correctAnswerId": "6911211872", "subject": "Physics"},
    "691121552": {"correctAnswerId": "6911211875", "subject": "Physics"},
    "691121553": {"correctAnswerId": "6911211881", "subject": "Physics"},
    "691121554": {"correctAnswerId": "6911211886", "subject": "Physics"},
    "691121555": {"correctAnswerId": "6911211887", "subject": "Physics"},
    "691121556": {"correctAnswerId": "6911211891", "subject": "Physics"},
    "691121557": {"correctAnswerId": "6911211896", "subject": "Physics"},
    "691121558": {"correctAnswerId": "6911211902", "subject": "Physics"},
    "691121559": {"correctAnswerId": "6911211906", "subject": "Physics"},
    "691121560": {"correctAnswerId": "6911211908", "subject": "Physics"},
    "691121561": {"correctAnswerId": "6911211913", "subject": "Physics"},
    "691121562": {"correctAnswerId": "6911211917", "subject": "Physics"},
    "691121563": {"correctAnswerId": "6911211922", "subject": "Physics"},
    "691121564": {"correctAnswerId": "6911211926", "subject": "Physics"},
    "691121565": {"correctAnswerId": "6911211928", "subject": "Physics"},
    "691121566": {"correctAnswerId": "6911211932", "subject": "Physics"},
    "691121567": {"correctAnswerId": "6911211935", "subject": "Physics"},
    "691121568": {"correctAnswerId": "6911211942", "subject": "Physics"},
    "691121569": {"correctAnswerId": "6911211945", "subject": "Physics"},
    "691121570": {"correctAnswerId": "6911211948", "subject": "Physics"},
    "691121571": {"correctAnswerId": "2", "subject": "Physics"},
    "691121572": {"correctAnswerId": "203", "subject": "Physics"},
    "691121573": {"correctAnswerId": "2", "subject": "Physics"},
    "691121574": {"correctAnswerId": "200", "subject": "Physics"},
    "691121575": {"correctAnswerId": "9", "subject": "Physics"},

    "691121576": {"correctAnswerId": "6911211958", "subject": "Chemistry"},
    "691121577": {"correctAnswerId": "6911211960", "subject": "Chemistry"},
    "691121578": {"correctAnswerId": "6911211964", "subject": "Chemistry"},
    "691121579": {"correctAnswerId": "6911211970", "subject": "Chemistry"},
    "691121580": {"correctAnswerId": "6911211974", "subject": "Chemistry"},
    "691121581": {"correctAnswerId": "6911211977", "subject": "Chemistry"},
    "691121582": {"correctAnswerId": "6911211982", "subject": "Chemistry"},
    "691121583": {"correctAnswerId": "6911211984", "subject": "Chemistry"},
    "691121584": {"correctAnswerId": "6911211990", "subject": "Chemistry"},
    "691121585": {"correctAnswerId": "6911211992", "subject": "Chemistry"},
    "691121586": {"correctAnswerId": "6911211997", "subject": "Chemistry"},
    "691121587": {"correctAnswerId": "6911212002", "subject": "Chemistry"},
    "691121588": {"correctAnswerId": "6911212005", "subject": "Chemistry"},
    "691121589": {"correctAnswerId": "6911212009", "subject": "Chemistry"},
    "691121590": {"correctAnswerId": "6911212013", "subject": "Chemistry"},
    "691121591": {"correctAnswerId": "6911212016", "subject": "Chemistry"},
    "691121592": {"correctAnswerId": "6911212022", "subject": "Chemistry"},
    "691121593": {"correctAnswerId": "6911212026", "subject": "Chemistry"},
    "691121594": {"correctAnswerId": "6911212029", "subject": "Chemistry"},
    "691121595": {"correctAnswerId": "6911212034", "subject": "Chemistry"},
    "691121596": {"correctAnswerId": "6", "subject": "Chemistry"},
    "691121597": {"correctAnswerId": "16", "subject": "Chemistry"},
    "691121598": {"correctAnswerId": "3", "subject": "Chemistry"},
    "691121599": {"correctAnswerId": "1126", "subject": "Chemistry"},
    "691121600": {"correctAnswerId": "4", "subject": "Chemistry"}
  },
  "2026-04-02-S1": {
    "6911211": {"correctAnswerId": "6911213", "subject": "Mathematics"},
    "6911212": {"correctAnswerId": "6911218", "subject": "Mathematics"},
    "6911213": {"correctAnswerId": "69112110", "subject": "Mathematics"},
    "6911214": {"correctAnswerId": "69112114", "subject": "Mathematics"},
    "6911215": {"correctAnswerId": "69112118", "subject": "Mathematics"},
    "6911216": {"correctAnswerId": "69112123", "subject": "Mathematics"},
    "6911217": {"correctAnswerId": "69112126", "subject": "Mathematics"},
    "6911218": {"correctAnswerId": "69112131", "subject": "Mathematics"},
    "6911219": {"correctAnswerId": "69112135", "subject": "Mathematics"},
    "69112110": {"correctAnswerId": "69112140", "subject": "Mathematics"},
    "69112111": {"correctAnswerId": "69112141", "subject": "Mathematics"},
    "69112112": {"correctAnswerId": "69112148", "subject": "Mathematics"},
    "69112113": {"correctAnswerId": "69112151", "subject": "Mathematics"},
    "69112114": {"correctAnswerId": "69112155", "subject": "Mathematics"},
    "69112115": {"correctAnswerId": "69112159", "subject": "Mathematics"},
    "69112116": {"correctAnswerId": "69112162", "subject": "Mathematics"},
    "69112117": {"correctAnswerId": "69112167", "subject": "Mathematics"},
    "69112118": {"correctAnswerId": "69112171", "subject": "Mathematics"},
    "69112119": {"correctAnswerId": "69112174", "subject": "Mathematics"},
    "69112120": {"correctAnswerId": "69112180", "subject": "Mathematics"},
    "69112121": {"correctAnswerId": "4", "subject": "Mathematics"},
    "69112122": {"correctAnswerId": "91", "subject": "Mathematics"},
    "69112123": {"correctAnswerId": "81", "subject": "Mathematics"},
    "69112124": {"correctAnswerId": "8", "subject": "Mathematics"},
    "69112125": {"correctAnswerId": "192", "subject": "Mathematics"},

    "69112126": {"correctAnswerId": "69112187", "subject": "Physics"},
    "69112127": {"correctAnswerId": "69112191", "subject": "Physics"},
    "69112128": {"correctAnswerId": "69112195", "subject": "Physics"},
    "69112129": {"correctAnswerId": "691121101", "subject": "Physics"},
    "69112130": {"correctAnswerId": "691121103", "subject": "Physics"},
    "69112131": {"correctAnswerId": "691121108", "subject": "Physics"},
    "69112132": {"correctAnswerId": "691121111", "subject": "Physics"},
    "69112133": {"correctAnswerId": "691121117", "subject": "Physics"},
    "69112134": {"correctAnswerId": "691121121", "subject": "Physics"},
    "69112135": {"correctAnswerId": "691121125", "subject": "Physics"},
    "69112136": {"correctAnswerId": "691121127", "subject": "Physics"},
    "69112137": {"correctAnswerId": "691121131", "subject": "Physics"},
    "69112138": {"correctAnswerId": "691121134", "subject": "Physics"},
    "69112139": {"correctAnswerId": "691121138", "subject": "Physics"},
    "69112140": {"correctAnswerId": "691121143", "subject": "Physics"},
    "69112141": {"correctAnswerId": "691121146", "subject": "Physics"},
    "69112142": {"correctAnswerId": "691121151", "subject": "Physics"},
    "69112143": {"correctAnswerId": "691121154", "subject": "Physics"},
    "69112144": {"correctAnswerId": "691121160", "subject": "Physics"},
    "69112145": {"correctAnswerId": "691121163", "subject": "Physics"},
    "69112146": {"correctAnswerId": "36", "subject": "Physics"},
    "69112147": {"correctAnswerId": "120", "subject": "Physics"},
    "69112148": {"correctAnswerId": "171", "subject": "Physics"},
    "69112149": {"correctAnswerId": "3", "subject": "Physics"},
    "69112150": {"correctAnswerId": "387", "subject": "Physics"},

    "69112151": {"correctAnswerId": "691121174", "subject": "Chemistry"},
    "69112152": {"correctAnswerId": "691121177", "subject": "Chemistry"},
    "69112153": {"correctAnswerId": "691121181", "subject": "Chemistry"},
    "69112154": {"correctAnswerId": "691121186", "subject": "Chemistry"},
    "69112155": {"correctAnswerId": "691121190", "subject": "Chemistry"},
    "69112156": {"correctAnswerId": "691121194", "subject": "Chemistry"},
    "69112157": {"correctAnswerId": "691121195", "subject": "Chemistry"},
    "69112158": {"correctAnswerId": "691121200", "subject": "Chemistry"},
    "69112159": {"correctAnswerId": "691121206", "subject": "Chemistry"},
    "69112160": {"correctAnswerId": "691121207", "subject": "Chemistry"},
    "69112161": {"correctAnswerId": "691121211", "subject": "Chemistry"},
    "69112162": {"correctAnswerId": "691121218", "subject": "Chemistry"},
    "69112163": {"correctAnswerId": "691121222", "subject": "Chemistry"},
    "69112164": {"correctAnswerId": "691121223", "subject": "Chemistry"},
    "69112165": {"correctAnswerId": "691121229", "subject": "Chemistry"},
    "69112166": {"correctAnswerId": "691121234", "subject": "Chemistry"},
    "69112167": {"correctAnswerId": "691121238", "subject": "Chemistry"},
    "69112168": {"correctAnswerId": "691121239", "subject": "Chemistry"},
    "69112169": {"correctAnswerId": "691121245", "subject": "Chemistry"},
    "69112170": {"correctAnswerId": "691121248", "subject": "Chemistry"},
    "69112171": {"correctAnswerId": "33", "subject": "Chemistry"},
    "69112172": {"correctAnswerId": "8", "subject": "Chemistry"},
    "69112173": {"correctAnswerId": "17", "subject": "Chemistry"},
    "69112174": {"correctAnswerId": "41", "subject": "Chemistry"},
    "69112175": {"correctAnswerId": "727", "subject": "Chemistry"}
  },
  "2026-04-04-S2": {
    "695278376": { "correctAnswerId": "6952781276", "subject": "Mathematics" },
    "695278377": { "correctAnswerId": "6952781283", "subject": "Mathematics" },
    "695278378": { "correctAnswerId": "6952781285", "subject": "Mathematics" },
    "695278379": { "correctAnswerId": "6952781290", "subject": "Mathematics" },
    "695278380": { "correctAnswerId": "6952781293", "subject": "Mathematics" },
    "695278381": { "correctAnswerId": "6952781298", "subject": "Mathematics" },
    "695278382": { "correctAnswerId": "6952781302", "subject": "Mathematics" },
    "695278383": { "correctAnswerId": "6952781307", "subject": "Mathematics" },
    "695278384": { "correctAnswerId": "6952781308", "subject": "Mathematics" },
    "695278385": { "correctAnswerId": "6952781315", "subject": "Mathematics" },
    "695278386": { "correctAnswerId": "6952781317", "subject": "Mathematics" },
    "695278387": { "correctAnswerId": "6952781321", "subject": "Mathematics" },
    "695278388": { "correctAnswerId": "6952781325", "subject": "Mathematics" },
    "695278389": { "correctAnswerId": "6952781328", "subject": "Mathematics" },
    "695278390": { "correctAnswerId": "6952781332", "subject": "Mathematics" },
    "695278391": { "correctAnswerId": "6952781337", "subject": "Mathematics" },
    "695278392": { "correctAnswerId": "6952781342", "subject": "Mathematics" },
    "695278393": { "correctAnswerId": "6952781346", "subject": "Mathematics" },
    "695278394": { "correctAnswerId": "6952781351", "subject": "Mathematics" },
    "695278395": { "correctAnswerId": "6952781355", "subject": "Mathematics" },
    "695278396": { "correctAnswerId": "944", "subject": "Mathematics" },
    "695278397": { "correctAnswerId": "4", "subject": "Mathematics" },
    "695278398": { "correctAnswerId": "9", "subject": "Mathematics" },
    "695278399": { "correctAnswerId": "16", "subject": "Mathematics" },
    "695278400": { "correctAnswerId": "5", "subject": "Mathematics" },

    "695278401": { "correctAnswerId": "6952781361", "subject": "Physics" },
    "695278402": { "correctAnswerId": "6952781367", "subject": "Physics" },
    "695278403": { "correctAnswerId": "6952781372", "subject": "Physics" },
    "695278404": { "correctAnswerId": "6952781374", "subject": "Physics" },
    "695278405": { "correctAnswerId": "6952781379", "subject": "Physics" },
    "695278406": { "correctAnswerId": "6952781384", "subject": "Physics" },
    "695278407": { "correctAnswerId": "6952781386", "subject": "Physics" },
    "695278408": { "correctAnswerId": "6952781391", "subject": "Physics" },
    "695278409": { "correctAnswerId": "6952781396", "subject": "Physics" },
    "695278410": { "correctAnswerId": "6952781397", "subject": "Physics" },
    "695278411": { "correctAnswerId": "6952781401", "subject": "Physics" },
    "695278412": { "correctAnswerId": "6952781405", "subject": "Physics" },
    "695278413": { "correctAnswerId": "6952781410", "subject": "Physics" },
    "695278414": { "correctAnswerId": "6952781414", "subject": "Physics" },
    "695278415": { "correctAnswerId": "6952781417", "subject": "Physics" },
    "695278416": { "correctAnswerId": "6952781424", "subject": "Physics" },
    "695278417": { "correctAnswerId": "6952781427", "subject": "Physics" },
    "695278418": { "correctAnswerId": "6952781432", "subject": "Physics" },
    "695278419": { "correctAnswerId": "6952781433", "subject": "Physics" },
    "695278420": { "correctAnswerId": "6952781439", "subject": "Physics" },
    "695278421": { "correctAnswerId": "300", "subject": "Physics" },
    "695278422": { "correctAnswerId": "8", "subject": "Physics" },
    "695278423": { "correctAnswerId": "12", "subject": "Physics" },
    "695278424": { "correctAnswerId": "314", "subject": "Physics" },
    "695278425": { "correctAnswerId": "5625", "subject": "Physics" },

    "695278426": { "correctAnswerId": "6952781449", "subject": "Chemistry" },
    "695278427": { "correctAnswerId": "6952781451", "subject": "Chemistry" },
    "695278428": { "correctAnswerId": "6952781456", "subject": "Chemistry" },
    "695278429": { "correctAnswerId": "6952781460", "subject": "Chemistry" },
    "695278430": { "correctAnswerId": "6952781463", "subject": "Chemistry" },
    "695278431": { "correctAnswerId": "6952781468", "subject": "Chemistry" },
    "695278432": { "correctAnswerId": "6952781472", "subject": "Chemistry" },
    "695278433": { "correctAnswerId": "6952781476", "subject": "Chemistry" },
    "695278434": { "correctAnswerId": "6952781481", "subject": "Chemistry" },
    "695278435": { "correctAnswerId": "6952781482", "subject": "Chemistry" },
    "695278436": { "correctAnswerId": "6952781488", "subject": "Chemistry" },
    "695278437": { "correctAnswerId": "6952781492", "subject": "Chemistry" },
    "695278438": { "correctAnswerId": "6952781495", "subject": "Chemistry" },
    "695278439": { "correctAnswerId": "6952781499", "subject": "Chemistry" },
    "695278440": { "correctAnswerId": "6952781503", "subject": "Chemistry" },
    "695278441": { "correctAnswerId": "6952781509", "subject": "Chemistry" },
    "695278442": { "correctAnswerId": "6952781512", "subject": "Chemistry" },
    "695278443": { "correctAnswerId": "6952781516", "subject": "Chemistry" },
    "695278444": { "correctAnswerId": "6952781521", "subject": "Chemistry" },
    "695278445": { "correctAnswerId": "6952781522", "subject": "Chemistry" },
    "695278446": { "correctAnswerId": "3", "subject": "Chemistry" },
    "695278447": { "correctAnswerId": "2474", "subject": "Chemistry" },
    "695278448": { "correctAnswerId": "2", "subject": "Chemistry" },
    "695278449": { "correctAnswerId": "7", "subject": "Chemistry" },
    "695278450": { "correctAnswerId": "435", "subject": "Chemistry" }
  }
};

// ─── DOM Ready ───────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("analyzeBtn")?.addEventListener("click", () => {
    try { process(); } catch(e) { console.error('process error', e); }
  });
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
  document.getElementById("exportPdfBtn")?.addEventListener("click", exportJeePdf);

  document.getElementById('dropZone')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); document.getElementById('pdfFile')?.click(); }
  });

  const modal = document.getElementById('questionModal');
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
});

// ─── File Input ───────────────────────────────────────────────────────────────
const pdfFile = document.getElementById('pdfFile');
const dropZone = document.getElementById('dropZone');
const dropText = document.getElementById('dropText');

pdfFile.addEventListener('change', () => {
  if (pdfFile.files?.[0]) {
    dropText.textContent = '📎 ' + pdfFile.files[0].name;
    dropText.style.color = 'var(--success)';
  } else {
    dropText.textContent = 'Tap to choose or drag & drop PDF';
    dropText.style.color = '';
  }
});

['dragenter','dragover'].forEach(evt =>
  dropZone.addEventListener(evt, e => { e.preventDefault(); dropZone.classList.add('dragover'); })
);
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  if (e.dataTransfer.files?.[0]) {
    pdfFile.files = e.dataTransfer.files;
    dropText.textContent = '📎 ' + e.dataTransfer.files[0].name;
    dropText.style.color = 'var(--success)';
  }
});

// ─── Theme ────────────────────────────────────────────────────────────────────
let _lastResult = null;
const JEE_SUBJECT_ORDER = ["Physics", "Chemistry", "Mathematics"];

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.innerText = theme === 'dark' ? '☀️' : '🌙';

  const themeMeta = document.getElementById('themeColorMeta');
  if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#0f1117' : '#f4f6fb');

  if (_lastResult) drawRing(_lastResult);
}
function toggleTheme() {
  applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
}
(function () {
  const saved = localStorage.getItem('theme') ||
    (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);
})();

// ─── Button State ─────────────────────────────────────────────────────────────
function setAnalyzing(on) {
  const btn = document.getElementById('analyzeBtn');
  if (!btn) return;
  btn.disabled = on;
  const txt = document.getElementById('analyzeBtnText');
  const spinner = document.getElementById('analyzeBtnSpinner');
  if (txt) txt.textContent = on ? 'Analyzing…' : 'Analyze';
  if (spinner) spinner.hidden = !on;
}

// ─── Main Process ─────────────────────────────────────────────────────────────
async function process() {
  const shift = document.getElementById("shift").value;
  const file  = document.getElementById("pdfFile").files[0];
  if (!shift || !file) return alert("Please select a shift and upload your PDF.");

  const key = ANSWER_KEYS[shift];
  if (!key || !Object.keys(key).length) return alert("Answer key missing for this shift.");

  setAnalyzing(true);
  try {
    const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;

    let rawText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page    = await pdf.getPage(i);
      const content = await page.getTextContent();
      // KEY FIX: NTA PDFs output each character as a separate item in getTextContent().
      // Joining with " " (space) produces "Q . 1 O p t i o n s" which breaks all regexes.
      // Joining with "" and stripping ALL whitespace gives clean parseable text.
      rawText += content.items.map(it => it.str).join("") + "\n";
    }

    // Strip ALL whitespace — makes parsing whitespace-independent
    const text = rawText.replace(/\s+/g, "");

    const result = calculate(text, key);
    result.shiftId = shift;
    result.shiftLabel = getShiftLabel(shift);
    result.sourceFileName = file.name;
    result.generatedAt = new Date().toISOString();

    render(result);
  } catch (err) {
    console.error('Analysis error:', err);
    alert('Failed to analyze PDF. Please check the file and try again.\n\n' + err.message);
  } finally {
    setAnalyzing(false);
  }
}

// ─── Calculate ────────────────────────────────────────────────────────────────
// After stripping whitespace, NTA PDF text looks like:
//  MCQ: Q.6Options1.2.3.4.QuestionType:MCQQuestionID:8606541139Option1ID:8606543879...ChosenOption:4
//  SA:  Q.49GivenAnswer:1620QuestionType:SAQuestionID:8606541174Status:Answered

function calculate(text, key) {
  const res = {
    Physics:    { c:0, w:0, u:0, s:0 },
    Chemistry:  { c:0, w:0, u:0, s:0 },
    Mathematics:{ c:0, w:0, u:0, s:0 }
  };
  const details = [];

  // Split at each question boundary
  const blocks = text.split(/(?=Q\.\d+(?:Options|Given))/i);
  const parsedByQid = new Map();

  for (const block of blocks) {
    if (!block.trim()) continue;

    const qidM = block.match(/QuestionID:(\d+)/i);
    const qid  = qidM?.[1];
    if (!qid || !key[qid]) continue;

    const { correctAnswerId, subject } = key[qid];
    if (!res[subject]) continue;

    const typeM = block.match(/QuestionType:(MCQ|SA)/i);
    const type  = typeM?.[1]?.toUpperCase() ?? null;

    // Option ID map: "1" -> "8606543879"
    const optMap = {};
    block.replace(/Option(\d)ID:(\d+)/gi, (_, num, id) => { optMap[num] = id; });

    // Options list for modal
    const optionsList = [];
    if (type === 'MCQ') {
      for (let n = 1; n <= 4; n++) {
        const k = String(n);
        if (optMap[k]) optionsList.push({ num: k, id: optMap[k] });
      }
    }

    let attempted = false, correct = false;
    let chosen = null, given = null, chosenOptionId = null;

    if (type === 'MCQ') {
      const chosenM = block.match(/ChosenOption:([0-9\-]+)/i);
      chosen = chosenM?.[1] ?? null;
      if (chosen && chosen !== '--' && chosen !== '-' && optMap[chosen]) {
        chosenOptionId = optMap[chosen];
        attempted = true;
        correct   = (chosenOptionId === correctAnswerId);
      }
    } else if (type === 'SA') {
      // "GivenAnswer:1620" or "GivenAnswer:--"
      const givenM = block.match(/GivenAnswer:(-?[\d.]+)/i);
      given = givenM?.[1] ?? null;
      if (given && given !== '--' && given !== '-') {
        attempted = true;
        correct   = (Math.abs(+given - +correctAnswerId) < 0.01);
      }
    }

    parsedByQid.set(qid, { qid, subject, type, attempted, correct,
                           chosen, given, correctAnswerId,
                           options: optionsList, chosenOptionId });
  }

  Object.entries(key).forEach(([qid, meta]) => {
    const detail = parsedByQid.get(qid) || {
      qid,
      subject: meta.subject,
      type: null,
      attempted: false,
      correct: false,
      chosen: null,
      given: null,
      correctAnswerId: meta.correctAnswerId,
      options: [],
      chosenOptionId: null
    };

    if (!detail.attempted)     res[detail.subject].u++;
    else if (detail.correct) { res[detail.subject].c++; res[detail.subject].s += 4; }
    else                     { res[detail.subject].w++; res[detail.subject].s -= 1; }

    details.push(detail);
  });

  return { scores: res, details, totalQuestions: details.length };
}

// ─── Render ───────────────────────────────────────────────────────────────────
function normalizeResult(result) {
  const scores = result?.scores || result;
  const details = Array.isArray(result?.details) ? result.details : [];
  const totalQuestions = result?.totalQuestions || details.length || 75;
  const shiftId = result?.shiftId || '';
  const shiftLabel = result?.shiftLabel || getShiftLabel(shiftId) || getShiftLabel(document.getElementById('shift')?.value || '');
  const sourceFileName = result?.sourceFileName || '';
  const generatedAt = result?.generatedAt || null;
  return { scores, details, totalQuestions, shiftId, shiftLabel, sourceFileName, generatedAt };
}

function getShiftLabel(shiftId) {
  if (!shiftId) return '';

  const option = document.querySelector(`#shift option[value="${shiftId}"]`);
  return option?.textContent?.trim() || shiftId;
}

function getJeeSubjectAnalytics(normalized) {
  return JEE_SUBJECT_ORDER.map((subject) => {
    const entry = normalized.scores?.[subject] || { c: 0, w: 0, u: 0, s: 0 };
    const subjectQuestionCount = normalized.details.filter((detail) => detail.subject === subject).length
      || (entry.c + entry.w + entry.u);
    const attempted = entry.c + entry.w;
    const accuracy = attempted ? Math.round((entry.c / attempted) * 100) : 0;
    const attemptRate = subjectQuestionCount ? Math.round((attempted / subjectQuestionCount) * 100) : 0;
    const maxScore = subjectQuestionCount * 4;

    return {
      subject,
      score: entry.s,
      correct: entry.c,
      wrong: entry.w,
      skipped: entry.u,
      attempted,
      accuracy,
      attemptRate,
      questionCount: subjectQuestionCount,
      maxScore
    };
  });
}

function exportJeePdf() {
  if (!_lastResult) {
    alert('Analyze a response sheet first.');
    return;
  }

  if (!window.PdfExportUtils) {
    alert('PDF export is unavailable right now. Please refresh and try again.');
    return;
  }

  const normalized = normalizeResult(_lastResult);
  const subjectAnalytics = getJeeSubjectAnalytics(normalized);
  const totalScore = subjectAnalytics.reduce((sum, item) => sum + item.score, 0);
  const totalCorrect = subjectAnalytics.reduce((sum, item) => sum + item.correct, 0);
  const totalWrong = subjectAnalytics.reduce((sum, item) => sum + item.wrong, 0);
  const totalSkipped = subjectAnalytics.reduce((sum, item) => sum + item.skipped, 0);
  const totalAttempted = totalCorrect + totalWrong;
  const maxScore = normalized.totalQuestions * 4;
  const accuracy = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  try {
    const pdf = window.PdfExportUtils.createDoc();
    const subtitleLines = [
      normalized.shiftLabel || 'JEE Main'
    ];

    window.PdfExportUtils.addTitle(pdf, 'JEE Main Score Analysis - ScoreFusion', subtitleLines);

    window.PdfExportUtils.addSection(pdf, 'Summary');
    window.PdfExportUtils.addKeyValueLines(pdf, [
      { label: 'Total Score', value: `${totalScore} / ${maxScore}` },
      { label: 'Total Accuracy', value: `${accuracy}%` }
    ]);

    window.PdfExportUtils.addSection(pdf, 'Subject-wise Score Analysis');
    
    // Build table rows with detailed breakdown
    const tableRows = subjectAnalytics.map((item) => ([
      item.subject,
      String(item.score),
      String(item.correct),
      String(item.wrong),
      String(item.skipped),
      `${item.accuracy}%`
    ]));
    
    // Add total row with bold styling
    tableRows.push([
      "Total",
      String(totalScore),
      String(totalCorrect),
      String(totalWrong),
      String(totalSkipped),
      `${accuracy}%`
    ]);

    window.PdfExportUtils.addTable(
      pdf,
      [
        { label: 'Subject', width: 0.25 },
        { label: 'Score', width: 0.15 },
        { label: 'Correct', width: 0.15 },
        { label: 'Wrong', width: 0.15 },
        { label: 'Skipped', width: 0.15 },
        { label: 'Acc.', width: 0.15 }
      ],
      tableRows,
      { boldLastRow: true }
    );

    const shiftToken = (normalized.shiftId || 'jee-main').replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase();
    window.PdfExportUtils.save(pdf, `jee-score-analysis-${shiftToken || 'report'}.pdf`);
  } catch (error) {
    console.error('Failed to export JEE PDF:', error);
    alert(`Unable to export PDF right now.\n\n${error.message}`);
  }
}

function render(result) {
  const normalized = normalizeResult(result);
  _lastResult = normalized;

  const rs = document.getElementById('resultsSection');
  rs.style.display = 'block';
  requestAnimationFrame(() => rs.classList.add('visible'));

  const res   = normalized.scores;
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  let totalScore = 0;
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalSkipped = 0;

  ["Physics","Chemistry","Mathematics"].forEach(s => {
    const attempted = res[s].c + res[s].w;
    const acc = attempted ? Math.round(res[s].c / attempted * 100) : 0;
    
    totalScore += res[s].s;
    totalCorrect += res[s].c;
    totalWrong += res[s].w;
    totalSkipped += res[s].u;

    tbody.innerHTML += `<tr>
      <td>${s}</td><td>${res[s].s}</td><td>${res[s].c}</td>
      <td>${res[s].w}</td><td>${res[s].u}</td><td>${acc}%</td>
    </tr>`;
  });

  // Add Total row with bold text
  const totalAttempted = totalCorrect + totalWrong;
  const totalAccuracy = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  tbody.innerHTML += `<tr style="font-weight: bold;">
    <td><strong>Total</strong></td><td><strong>${totalScore}</strong></td><td><strong>${totalCorrect}</strong></td>
    <td><strong>${totalWrong}</strong></td><td><strong>${totalSkipped}</strong></td><td><strong>${totalAccuracy}%</strong></td>
  </tr>`;

  drawRing(normalized);
  drawChart(res);
  try { localStorage.setItem('lastResult', JSON.stringify(normalized)); } catch(e) {}

  const analysisDiv = document.getElementById('questionAnalysis');
  const tableBody   = document.querySelector('#detailTable tbody');
  tableBody.innerHTML = '';

  normalized.details.forEach((d, i) => {
    const answered   = d.attempted ? (d.chosen || d.given || '') : '-';
    const resultText = d.correct ? 'Correct' : (d.attempted ? 'Wrong' : 'Skipped');
    const cls        = d.correct ? 'result-correct' : (d.attempted ? 'result-wrong' : 'result-skip');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${d.qid}</td>
      <td>${answered}</td>
      <td>${d.correctAnswerId}</td>
      <td class="${cls}">${resultText}</td>
    `;
    tableBody.appendChild(tr);
  });

  document.getElementById('charts').style.display = 'block';
  document.getElementById('charts').classList.add('show');
  analysisDiv.style.display = normalized.details.length ? 'block' : 'none';
  analysisDiv.classList.toggle('show', normalized.details.length > 0);
}
function openModal(d, num) {
  const modal = document.getElementById('questionModal');
  if (!modal) return;

  document.getElementById('modalQNum').textContent    = `Q${num}`;
  document.getElementById('modalSubject').textContent = d.subject;
  document.getElementById('modalQID').textContent     = `ID: ${d.qid}`;

  const badge = document.getElementById('modalResultBadge');
  badge.textContent = d.correct ? '✔ Correct' : (d.attempted ? '✘ Wrong' : '— Skipped');
  badge.className   = 'modal-badge ' + (d.correct ? 'badge-correct' : d.attempted ? 'badge-wrong' : 'badge-skip');

  // Question text is image-rendered in NTA PDFs — not extractable
  document.getElementById('modalQuestionBody').innerHTML =
    `<span class="modal-question-unavailable">Question text is rendered as an image in NTA response PDFs and cannot be extracted as text. Please refer to your PDF to view the full question.</span>`;

  const optContainer = document.getElementById('modalOptionsContainer');
  optContainer.innerHTML = '';

  if (d.type === 'MCQ') {
    (d.options || []).forEach(opt => {
      const isCorrect = (opt.id === d.correctAnswerId);
      const isChosen  = (opt.id === d.chosenOptionId);

      let cls = 'modal-option';
      if (isCorrect && isChosen)   cls += ' opt-correct-chosen';
      else if (isCorrect)           cls += ' opt-correct';
      else if (isChosen)            cls += ' opt-wrong-chosen';

      const el = document.createElement('div');
      el.className = cls;
      el.innerHTML = `
        <span class="opt-letter">${opt.num}</span>
        <div class="opt-body">
          <span class="opt-text">Option ${opt.num}</span>
          <span class="opt-id-note">ID: ${opt.id}</span>
        </div>
        <div class="opt-tags">
          ${isCorrect && !isChosen  ? '<span class="opt-tag tag-correct">✔ Correct</span>'     : ''}
          ${isChosen  && !isCorrect ? '<span class="opt-tag tag-wrong">✘ Your Answer</span>'   : ''}
          ${isChosen  &&  isCorrect ? '<span class="opt-tag tag-correct">✔ Your Answer</span>' : ''}
        </div>
      `;
      optContainer.appendChild(el);
    });

    const note = document.createElement('p');
    note.className = 'modal-note';
    note.innerHTML = '📄 Option values are image-rendered in NTA PDFs — text cannot be extracted. Open the PDF to view the actual option content.';
    optContainer.appendChild(note);

  } else if (d.type === 'SA') {
    const saDiv = document.createElement('div');
    saDiv.className = 'sa-answer-block';
    saDiv.innerHTML = `
      <div class="sa-row">
        <span class="sa-label">Your Answer</span>
        <span class="sa-val ${d.attempted ? (d.correct ? 'sa-correct' : 'sa-wrong') : 'sa-skip'}">
          ${d.attempted ? (d.given || '—') : 'Not Attempted'}
        </span>
      </div>
      <div class="sa-row">
        <span class="sa-label">Correct Answer</span>
        <span class="sa-val sa-correct">${d.correctAnswerId}</span>
      </div>
    `;
    optContainer.appendChild(saDiv);
  } else {
    const note = document.createElement('p');
    note.className = 'modal-note';
    note.textContent = 'Question type not recognised.';
    optContainer.appendChild(note);
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalCloseBtn')?.focus();
}

function closeModal() {
  document.getElementById('questionModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Ring Charts ──────────────────────────────────────────────────────────────
function drawRing(result) {
  const normalized = normalizeResult(result);
  const res   = normalized.scores;
  const total = res.Physics.s + res.Chemistry.s + res.Mathematics.s;
  const max   = normalized.totalQuestions * 4;
  const pct   = max ? (total / max) * 100 : 0;
  const correctTotal   = res.Physics.c + res.Chemistry.c + res.Mathematics.c;
  const attemptedTotal = correctTotal + res.Physics.w + res.Chemistry.w + res.Mathematics.w;
  const accPct = attemptedTotal ? (correctTotal / attemptedTotal) * 100 : 0;

  const isDark      = document.body.classList.contains('dark');
  const trackColor  = isDark ? '#2e3347' : '#dde3ee';
  const themeColor  = isDark ? '#e2e8f0' : '#1a1a2e';
  const headerColor = isDark ? '#94a3b8' : '#64748b';

  function setupCanvas(canvas) {
    const dpr  = window.devicePixelRatio || 1;
    const cssW = canvas.parentElement.clientWidth || 200;
    const cssH = Math.round(cssW * 0.55);
    canvas.style.width  = cssW + 'px';
    canvas.style.height = cssH + 'px';
    canvas.width  = cssW * dpr;
    canvas.height = cssH * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, cw: cssW, ch: cssH };
  }

  function animateRing(canvas, targetPct, displayValue, suffix, color, headerText, footerText) {
    const { ctx, cw, ch } = setupCanvas(canvas);
    const radius    = cw / 2 - Math.max(10, cw * 0.07);
    const lw        = Math.max(8, cw * 0.06);
    const labelSize = Math.max(10, cw * 0.065);
    const valueSize = Math.max(16, cw * 0.12);
    let current = 0, rafId;
    function step() {
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = lw;
      ctx.beginPath(); ctx.arc(cw/2, ch, radius, Math.PI, 0); ctx.strokeStyle = trackColor; ctx.stroke();
      ctx.beginPath(); ctx.arc(cw/2, ch, radius, Math.PI, Math.PI + Math.PI * (current/100));
      ctx.strokeStyle = color; ctx.lineCap = 'round'; ctx.stroke();
      ctx.font = `${labelSize}px system-ui`; ctx.fillStyle = headerColor; ctx.textAlign = 'center';
      ctx.fillText(headerText, cw/2, ch - radius/1.5);
      const animVal = typeof displayValue === 'function' ? displayValue(current) : displayValue;
      ctx.font = `bold ${valueSize}px system-ui`; ctx.fillStyle = themeColor;
      ctx.fillText(animVal + suffix, cw/2, ch - radius/3.2);
      if (footerText) { ctx.font = `${labelSize}px system-ui`; ctx.fillStyle = headerColor; ctx.fillText(footerText, cw/2, ch - radius/8); }
      if (current < targetPct) { current = Math.min(current + 2, targetPct); rafId = requestAnimationFrame(step); }
    }
    if (rafId) cancelAnimationFrame(rafId);
    step();
  }

  animateRing(
    document.getElementById('scoreRing'), pct,
    (p) => Math.round((p / 100) * max), `/${max}`,
    '#3b82f6', 'Total marks:', ''
  );
  animateRing(
    document.getElementById('accuracyRing'), accPct,
    (p) => Math.round(p), '%',
    '#10b981', 'Accuracy:', ''
  );
}
function drawChart(res) {
  const ctx = document.getElementById('scoreChart').getContext('2d');
  if (window.scoreChartInstance) window.scoreChartInstance.destroy();
  window.scoreChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Physics','Chemistry','Mathematics'],
      datasets: [{ data: [res.Physics.s, res.Chemistry.s, res.Mathematics.s],
                   backgroundColor: ['#3b82f6','#10b981','#f59e0b'] }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { tooltip: { callbacks: { label: c => `${c.label}: ${c.raw} pts` } } }
    }
  });
}

// ─── Persist / Restore ───────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('lastResult');
  if (stored) {
    try { render(JSON.parse(stored)); }
    catch(e) { console.error('restore error', e); localStorage.removeItem('lastResult'); }
  }

  document.getElementById('clearDataBtn')?.addEventListener('click', () => {
    localStorage.removeItem('lastResult');
    _lastResult = null;
    document.getElementById('resultsSection').style.display   = 'none';
    document.getElementById('charts').style.display           = 'none';
    document.getElementById('questionAnalysis').style.display = 'none';
    if (window.scoreChartInstance) {
      window.scoreChartInstance.destroy();
      window.scoreChartInstance = null;
    }
  });
});


