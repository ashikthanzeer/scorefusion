const SUBJECT_ORDER = ["Mathematics", "Physics", "Chemistry"];
const SUBJECT_RANGES = [
  { name: "Mathematics", start: 1, end: 75 },
  { name: "Physics", start: 76, end: 120 },
  { name: "Chemistry", start: 121, end: 150 }
];
const TOTAL_QUESTIONS = 150;
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
  "keam-2025-engg-5": {
    label: "KEAM 2025 ENGG-5 - 28 Apr 2025",
    status: "ready",
    note: "Official final answer key loaded from Final_Engg5_28042025.pdf (Question Paper Code: 14/2025/OL).",
    sourceUrl: "https://www.cee.kerala.gov.in/keam2025/list/anskey/Final_Engg5_28042025.pdf",
    cancelledQuestions: [65, 99, 127, 131, 140],
    answers: {
      1: "C", 2: "D", 3: "B", 4: "E", 5: "D", 6: "C", 7: "E", 8: "B", 9: "C", 10: "D",
      11: "A", 12: "E", 13: "E", 14: "B", 15: "D", 16: "B", 17: "B", 18: "A", 19: "D", 20: "B",
      21: "A", 22: "C", 23: "B", 24: "D", 25: "A", 26: "B", 27: "E", 28: "D", 29: "D", 30: "E",
      31: "B", 32: "D", 33: "C", 34: "E", 35: "E", 36: "A", 37: "B", 38: "E", 39: "A", 40: "B",
      41: "D", 42: "E", 43: "B", 44: "C", 45: "D", 46: "C", 47: "A", 48: "A", 49: "D", 50: "C",
      51: "B", 52: "D", 53: "D", 54: "E", 55: "E", 56: "A", 57: "E", 58: "C", 59: "C", 60: "B",
      61: "A", 62: "E", 63: "C", 64: "B", 66: "D", 67: "A", 68: "D", 69: "D", 70: "C",
      71: "D", 72: "B", 73: "E", 74: "C", 75: "B", 76: "A", 77: "C", 78: "A", 79: "D", 80: "C",
      81: "E", 82: "D", 83: "B", 84: "D", 85: "A", 86: "E", 87: "A", 88: "A", 89: "B", 90: "E",
      91: "A", 92: "E", 93: "C", 94: "B", 95: "B", 96: "C", 97: "A", 98: "E", 100: "A",
      101: "B", 102: "C", 103: "B", 104: "C", 105: "D", 106: "C", 107: "A", 108: "E", 109: "B", 110: "C",
      111: "B", 112: "D", 113: "C", 114: "A", 115: "A", 116: "A", 117: "A", 118: "B", 119: "D", 120: "B",
      121: "B", 122: "E", 123: "D", 124: "C", 125: "A", 126: "D", 128: "B", 129: "E", 130: "C",
      132: "E", 133: "A", 134: "E", 135: "C", 136: "A", 137: "E", 138: "D", 139: "C",
      141: "E", 142: "E", 143: "C", 144: "A", 145: "D", 146: "C", 147: "B", 148: "D", 149: "E", 150: "E"
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
    drawRing(lastResult.scores);
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

  return {
    scores,
    details,
    shiftId: document.getElementById("shift").value,
    shiftLabel: shiftConfig.label,
    generatedAt: new Date().toISOString()
  };
}

function createBlankScores() {
  return {
    Mathematics: { c: 0, w: 0, u: 0, s: 0 },
    Physics: { c: 0, w: 0, u: 0, s: 0 },
    Chemistry: { c: 0, w: 0, u: 0, s: 0 }
  };
}

function getSubjectByQuestion(questionNo) {
  return SUBJECT_RANGES.find((range) => questionNo >= range.start && questionNo <= range.end)?.name || "Unknown";
}

function renderResult(result, parsedResponses, shiftConfig) {
  lastResult = result;

  renderBanner(parsedResponses, shiftConfig);
  renderSummaryTable(result.scores);
  renderQuestionTable(result.details);
  drawRing(result.scores);
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

  let totalScore = 0;
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalSkipped = 0;

  SUBJECT_ORDER.forEach((subject) => {
    const entry = scores[subject];
    const attempted = entry.c + entry.w;
    const accuracy = attempted ? Math.round((entry.c / attempted) * 100) : 0;

    totalScore += entry.s;
    totalCorrect += entry.c;
    totalWrong += entry.w;
    totalSkipped += entry.u;

    tbody.innerHTML += `
      <tr>
        <td>${subject}</td>
        <td>${entry.s}</td>
        <td>${entry.c}</td>
        <td>${entry.w}</td>
        <td>${entry.u}</td>
        <td>${accuracy}%</td>
      </tr>
    `;
  });

  // Add Total row with bold text
  const totalAttempted = totalCorrect + totalWrong;
  const totalAccuracy = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  tbody.innerHTML += `
    <tr style="font-weight: bold;">
      <td><strong>Total</strong></td>
      <td><strong>${totalScore}</strong></td>
      <td><strong>${totalCorrect}</strong></td>
      <td><strong>${totalWrong}</strong></td>
      <td><strong>${totalSkipped}</strong></td>
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
    const entry = result.scores?.[subject] || { c: 0, w: 0, u: 0, s: 0 };
    const questionCount = result.details?.filter((detail) => detail.subject === subject && !detail.cancelled).length
      || (entry.c + entry.w + entry.u);
    const attempted = entry.c + entry.w;
    const accuracy = attempted ? Math.round((entry.c / attempted) * 100) : 0;
    const attemptRate = questionCount ? Math.round((attempted / questionCount) * 100) : 0;
    const maxScore = questionCount * MARKS_CORRECT;

    return {
      subject,
      score: entry.s,
      correct: entry.c,
      wrong: entry.w,
      skipped: entry.u,
      attempted,
      accuracy,
      attemptRate,
      questionCount,
      maxScore
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
      { label: "Total Score", value: `${totalScore} / ${maxScore}` },
      { label: "Total Accuracy", value: `${accuracy}%` }
    ]);

    window.PdfExportUtils.addSection(pdf, "Subject-wise Score Analysis");
    
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
        { label: "Subject", width: 0.25 },
        { label: "Score", width: 0.15 },
        { label: "Correct", width: 0.15 },
        { label: "Wrong", width: 0.15 },
        { label: "Skipped", width: 0.15 },
        { label: "Acc.", width: 0.15 }
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

function drawRing(scores) {
  const total = SUBJECT_ORDER.reduce((sum, subject) => sum + scores[subject].s, 0);
  const max = TOTAL_QUESTIONS * MARKS_CORRECT;
  const scorePct = max ? Math.max(0, (total / max) * 100) : 0;
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
    displayValue: total,
    suffix: "/600",
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

  window.keamScoreChart = new Chart(context, {
    type: "pie",
    data: {
      labels: SUBJECT_ORDER,
      datasets: [{
        data: SUBJECT_ORDER.map((subject) => scores[subject].s),
        backgroundColor: ["#f59e0b", "#3b82f6", "#10b981"]
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
    renderSummaryTable(result.scores);
    renderQuestionTable(result.details);
    drawRing(result.scores);
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
