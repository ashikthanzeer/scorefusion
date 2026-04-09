// PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// ─── Answer Keys ─────────────────────────────────────────────────────────────
const ANSWER_KEYS = {
  "2026-01-24-S1": {
     "444792526":{"correctAnswerId":"4447921789","subject":"Mathematics"},
    "444792527":{"correctAnswerId":"4447921793","subject":"Mathematics"},
    "444792528":{"correctAnswerId":"4447921795","subject":"Mathematics"},
    "444792529":{"correctAnswerId":"4447921800","subject":"Mathematics"},
    "444792530":{"correctAnswerId":"4447921802","subject":"Mathematics"},
    "444792531":{"correctAnswerId":"4447921806","subject":"Mathematics"},
    "444792532":{"correctAnswerId":"4447921811","subject":"Mathematics"},
    "444792533":{"correctAnswerId":"4447921815","subject":"Mathematics"},
    "444792534":{"correctAnswerId":"4447921818","subject":"Mathematics"},
    "444792535":{"correctAnswerId":"4447921824","subject":"Mathematics"},
    "444792536":{"correctAnswerId":"4447921828","subject":"Mathematics"},
    "444792537":{"correctAnswerId":"4447921832","subject":"Mathematics"},
    "444792538":{"correctAnswerId":"4447921835","subject":"Mathematics"},
    "444792539":{"correctAnswerId":"4447921841","subject":"Mathematics"},
    "444792540":{"correctAnswerId":"4447921842","subject":"Mathematics"},
    "444792541":{"correctAnswerId":"4447921848","subject":"Mathematics"},
    "444792542":{"correctAnswerId":"4447921850","subject":"Mathematics"},
    "444792543":{"correctAnswerId":"4447921856","subject":"Mathematics"},
    "444792544":{"correctAnswerId":"4447921860","subject":"Mathematics"},
    "444792545":{"correctAnswerId":"4447921862","subject":"Mathematics"},
    "444792546":{"correctAnswerId":"36","subject":"Mathematics"},
    "444792547":{"correctAnswerId":"78","subject":"Mathematics"},
    "444792548":{"correctAnswerId":"72","subject":"Mathematics"},
    "444792549":{"correctAnswerId":"2","subject":"Mathematics"},
    "444792550":{"correctAnswerId":"4","subject":"Mathematics"},

    "444792551":{"correctAnswerId":"4447921874","subject":"Physics"},
    "444792552":{"correctAnswerId":"4447921878","subject":"Physics"},
    "444792553":{"correctAnswerId":"4447921880","subject":"Physics"},
    "444792554":{"correctAnswerId":"4447921886","subject":"Physics"},
    "444792555":{"correctAnswerId":"4447921887","subject":"Physics"},
    "444792556":{"correctAnswerId":"4447921893","subject":"Physics"},
    "444792557":{"correctAnswerId":"4447921897","subject":"Physics"},
    "444792558":{"correctAnswerId":"4447921900","subject":"Physics"},
    "444792559":{"correctAnswerId":"4447921903","subject":"Physics"},
    "444792560":{"correctAnswerId":"4447921907","subject":"Physics"},
    "444792561":{"correctAnswerId":"4447921913","subject":"Physics"},
    "444792562":{"correctAnswerId":"4447921916","subject":"Physics"},
    "444792563":{"correctAnswerId":"4447921920","subject":"Physics"},
    "444792564":{"correctAnswerId":"4447921926","subject":"Physics"},
    "444792565":{"correctAnswerId":"4447921930","subject":"Physics"},
    "444792566":{"correctAnswerId":"4447921931","subject":"Physics"},
    "444792567":{"correctAnswerId":"4447921938","subject":"Physics"},
    "444792568":{"correctAnswerId":"4447921941","subject":"Physics"},
    "444792569":{"correctAnswerId":"4447921945","subject":"Physics"},
    "444792570":{"correctAnswerId":"4447921949","subject":"Physics"},
    "444792571":{"correctAnswerId":"125","subject":"Physics"},
    "444792572":{"correctAnswerId":"210","subject":"Physics"},
    "444792573":{"correctAnswerId":"160","subject":"Physics"},
    "444792574":{"correctAnswerId":"3730","subject":"Physics"},
    "444792575":{"correctAnswerId":"64","subject":"Physics"},

    "444792576":{"correctAnswerId":"4447921958","subject":"Chemistry"},
    "444792577":{"correctAnswerId":"4447921961","subject":"Chemistry"},
    "444792578":{"correctAnswerId":"4447921966","subject":"Chemistry"},
    "444792579":{"correctAnswerId":"4447921971","subject":"Chemistry"},
    "444792580":{"correctAnswerId":"4447921975","subject":"Chemistry"},
    "444792581":{"correctAnswerId":"4447921978","subject":"Chemistry"},
    "444792582":{"correctAnswerId":"4447921981","subject":"Chemistry"},
    "444792583":{"correctAnswerId":"4447921986","subject":"Chemistry"},
    "444792584":{"correctAnswerId":"4447921988","subject":"Chemistry"},
    "444792585":{"correctAnswerId":"4447921995","subject":"Chemistry"},
    "444792586":{"correctAnswerId":"4447921996","subject":"Chemistry"},
    "444792587":{"correctAnswerId":"4447922002","subject":"Chemistry"},
    "444792588":{"correctAnswerId":"4447922004","subject":"Chemistry"},
    "444792589":{"correctAnswerId":"4447922010","subject":"Chemistry"},
    "444792590":{"correctAnswerId":"4447922012","subject":"Chemistry"},
    "444792591":{"correctAnswerId":"4447922017","subject":"Chemistry"},
    "444792592":{"correctAnswerId":"4447922020","subject":"Chemistry"},
    "444792593":{"correctAnswerId":"4447922025","subject":"Chemistry"},
    "444792594":{"correctAnswerId":"4447922031","subject":"Chemistry"},
    "444792595":{"correctAnswerId":"4447922033","subject":"Chemistry"},
    "444792596":{"correctAnswerId":"12","subject":"Chemistry"},
    "444792597":{"correctAnswerId":"15","subject":"Chemistry"},
    "444792598":{"correctAnswerId":"54","subject":"Chemistry"},
    "444792599":{"correctAnswerId":"4","subject":"Chemistry"},
    "444792600":{"correctAnswerId":"111","subject":"Chemistry"}
  },
  "2026-01-21-S1": {
    "8606541132":{"correctAnswerId":"8606543851","subject":"Mathematics"},
    "8606541129":{"correctAnswerId":"8606543839","subject":"Mathematics"},
    "8606541145":{"correctAnswerId":"8606543903","subject":"Mathematics"},
    "8606541137":{"correctAnswerId":"8606543872","subject":"Mathematics"},
    "8606541142":{"correctAnswerId":"8606543891","subject":"Mathematics"},
    "8606541126":{"correctAnswerId":"8606543827","subject":"Mathematics"},
    "8606541130":{"correctAnswerId":"8606543844","subject":"Mathematics"},
    "8606541131":{"correctAnswerId":"8606543849","subject":"Mathematics"},
    "8606541141":{"correctAnswerId":"8606543886","subject":"Mathematics"},
    "8606541136":{"correctAnswerId":"8606543867","subject":"Mathematics"},
    "8606541143":{"correctAnswerId":"8606543895","subject":"Mathematics"},
    "8606541134":{"correctAnswerId":"8606543861","subject":"Mathematics"},
    "8606541128":{"correctAnswerId":"8606543834","subject":"Mathematics"},
    "8606541139":{"correctAnswerId":"8606543880","subject":"Mathematics"},
    "8606541135":{"correctAnswerId":"8606543864","subject":"Mathematics"},
    "8606541138":{"correctAnswerId":"8606543875","subject":"Mathematics"},
    "8606541127":{"correctAnswerId":"8606543832","subject":"Mathematics"},
    "8606541144":{"correctAnswerId":"8606543899","subject":"Mathematics"},
    "8606541140":{"correctAnswerId":"8606543883","subject":"Mathematics"},
    "8606541133":{"correctAnswerId":"8606543854","subject":"Mathematics"},
    "8606541149":{"correctAnswerId":"1","subject":"Mathematics"},
    "8606541148":{"correctAnswerId":"1333","subject":"Mathematics"},
    "8606541146":{"correctAnswerId":"225","subject":"Mathematics"},
    "8606541147":{"correctAnswerId":"2","subject":"Mathematics"},
    "8606541150":{"correctAnswerId":"17","subject":"Mathematics"},
    "8606541169":{"correctAnswerId":"8606543986","subject":"Physics"},
    "8606541154":{"correctAnswerId":"8606543923","subject":"Physics"},
    "8606541165":{"correctAnswerId":"8606543969","subject":"Physics"},
    "8606541160":{"correctAnswerId":"8606543947","subject":"Physics"},
    "8606541170":{"correctAnswerId":"8606543988","subject":"Physics"},
    "8606541152":{"correctAnswerId":"8606543916","subject":"Physics"},
    "8606541151":{"correctAnswerId":"8606543912","subject":"Physics"},
    "8606541156":{"correctAnswerId":"8606543933","subject":"Physics"},
    "8606541159":{"correctAnswerId":"8606543946","subject":"Physics"},
    "8606541167":{"correctAnswerId":"8606543978","subject":"Physics"},
    "8606541161":{"correctAnswerId":"8606543953","subject":"Physics"},
    "8606541155":{"correctAnswerId":"8606543930","subject":"Physics"},
    "8606541153":{"correctAnswerId":"8606543922","subject":"Physics"},
    "8606541162":{"correctAnswerId":"8606543955","subject":"Physics"},
    "8606541157":{"correctAnswerId":"8606543936","subject":"Physics"},
    "8606541158":{"correctAnswerId":"8606543940","subject":"Physics"},
    "8606541163":{"correctAnswerId":"8606543959","subject":"Physics"},
    "8606541168":{"correctAnswerId":"8606543980","subject":"Physics"},
    "8606541164":{"correctAnswerId":"8606543966","subject":"Physics"},
    "8606541166":{"correctAnswerId":"8606543974","subject":"Physics"},
    "8606541171":{"correctAnswerId":"17","subject":"Physics"},
    "8606541174":{"correctAnswerId":"1080","subject":"Physics"},
    "8606541173":{"correctAnswerId":"100","subject":"Physics"},
    "8606541172":{"correctAnswerId":"280","subject":"Physics"},
    "8606541175":{"correctAnswerId":"500","subject":"Physics"},
    "8606541195":{"correctAnswerId":"8606544073","subject":"Chemistry"},
    "8606541188":{"correctAnswerId":"8606544047","subject":"Chemistry"},
    "8606541176":{"correctAnswerId":"8606543997","subject":"Chemistry"},
    "8606541181":{"correctAnswerId":"8606544018","subject":"Chemistry"},
    "8606541183":{"correctAnswerId":"8606544026","subject":"Chemistry"},
    "8606541185":{"correctAnswerId":"8606544034","subject":"Chemistry"},
    "8606541187":{"correctAnswerId":"8606544041","subject":"Chemistry"},
    "8606541189":{"correctAnswerId":"8606544051","subject":"Chemistry"},
    "8606541182":{"correctAnswerId":"8606544022","subject":"Chemistry"},
    "8606541190":{"correctAnswerId":"8606544053","subject":"Chemistry"},
    "8606541193":{"correctAnswerId":"8606544067","subject":"Chemistry"},
    "8606541179":{"correctAnswerId":"8606544008","subject":"Chemistry"},
    "8606541186":{"correctAnswerId":"8606544038","subject":"Chemistry"},
    "8606541184":{"correctAnswerId":"8606544028","subject":"Chemistry"},
    "8606541191":{"correctAnswerId":"8606544059","subject":"Chemistry"},
    "8606541177":{"correctAnswerId":"8606544002","subject":"Chemistry"},
    "8606541180":{"correctAnswerId":"8606544014","subject":"Chemistry"},
    "8606541194":{"correctAnswerId":"8606544069","subject":"Chemistry"},
    "8606541192":{"correctAnswerId":"8606544062","subject":"Chemistry"},
    "8606541178":{"correctAnswerId":"8606544007","subject":"Chemistry"},
    "8606541200":{"correctAnswerId":"8","subject":"Chemistry"},
    "8606541198":{"correctAnswerId":"70","subject":"Chemistry"},
    "8606541197":{"correctAnswerId":"13","subject":"Chemistry"},
    "8606541196":{"correctAnswerId":"20","subject":"Chemistry"},
    "8606541199":{"correctAnswerId":"6","subject":"Chemistry"}
  },
  "2026-04-08-S2": {
    "691121526": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121527": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121528": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121529": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121530": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121531": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121532": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121533": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121534": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121535": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121536": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121537": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121538": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121539": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121540": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121541": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121542": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121543": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121544": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121545": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121546": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121547": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121548": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121549": {"correctAnswerId": "", "subject": "Mathematics"},
    "691121550": {"correctAnswerId": "", "subject": "Mathematics"},

    "691121551": {"correctAnswerId": "", "subject": "Physics"},
    "691121552": {"correctAnswerId": "", "subject": "Physics"},
    "691121553": {"correctAnswerId": "", "subject": "Physics"},
    "691121554": {"correctAnswerId": "", "subject": "Physics"},
    "691121555": {"correctAnswerId": "", "subject": "Physics"},
    "691121556": {"correctAnswerId": "", "subject": "Physics"},
    "691121557": {"correctAnswerId": "", "subject": "Physics"},
    "691121558": {"correctAnswerId": "", "subject": "Physics"},
    "691121559": {"correctAnswerId": "", "subject": "Physics"},
    "691121560": {"correctAnswerId": "", "subject": "Physics"},
    "691121561": {"correctAnswerId": "", "subject": "Physics"},
    "691121562": {"correctAnswerId": "", "subject": "Physics"},
    "691121563": {"correctAnswerId": "", "subject": "Physics"},
    "691121564": {"correctAnswerId": "", "subject": "Physics"},
    "691121565": {"correctAnswerId": "", "subject": "Physics"},
    "691121566": {"correctAnswerId": "", "subject": "Physics"},
    "691121567": {"correctAnswerId": "", "subject": "Physics"},
    "691121568": {"correctAnswerId": "", "subject": "Physics"},
    "691121569": {"correctAnswerId": "", "subject": "Physics"},
    "691121570": {"correctAnswerId": "", "subject": "Physics"},
    "691121571": {"correctAnswerId": "", "subject": "Physics"},
    "691121572": {"correctAnswerId": "", "subject": "Physics"},
    "691121573": {"correctAnswerId": "", "subject": "Physics"},
    "691121574": {"correctAnswerId": "", "subject": "Physics"},
    "691121575": {"correctAnswerId": "", "subject": "Physics"},

    "691121576": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121577": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121578": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121579": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121580": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121581": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121582": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121583": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121584": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121585": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121586": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121587": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121588": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121589": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121590": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121591": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121592": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121593": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121594": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121595": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121596": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121597": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121598": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121599": {"correctAnswerId": "", "subject": "Chemistry"},
    "691121600": {"correctAnswerId": "", "subject": "Chemistry"}
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
  const totalAttempted = totalCorrect + totalWrong;
  const maxScore = normalized.totalQuestions * 4;
  const accuracy = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  try {
    const pdf = window.PdfExportUtils.createDoc();
    const subtitleLines = [
      normalized.shiftLabel || 'JEE Main'
    ];

    window.PdfExportUtils.addTitle(pdf, 'JEE Main Score Analysis', subtitleLines);

    window.PdfExportUtils.addSection(pdf, 'Summary');
    window.PdfExportUtils.addKeyValueLines(pdf, [
      { label: 'Total Score', value: `${totalScore} / ${maxScore}` },
      { label: 'Total Accuracy', value: `${accuracy}%` }
    ]);

    window.PdfExportUtils.addSection(pdf, 'Subject-wise Score Analysis');
    window.PdfExportUtils.addTable(
      pdf,
      [
        { label: 'Subject', width: 0.4 },
        { label: 'Score', width: 0.3 },
        { label: 'Accuracy', width: 0.3 }
      ],
      subjectAnalytics.map((item) => ([
        item.subject,
        `${item.score}/${item.maxScore}`,
        `${item.accuracy}%`
      ]))
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
  ["Physics","Chemistry","Mathematics"].forEach(s => {
    const attempted = res[s].c + res[s].w;
    const acc = attempted ? Math.round(res[s].c / attempted * 100) : 0;
    tbody.innerHTML += `<tr>
      <td>${s}</td><td>${res[s].s}</td><td>${res[s].c}</td>
      <td>${res[s].w}</td><td>${res[s].u}</td><td>${acc}%</td>
    </tr>`;
  });

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


