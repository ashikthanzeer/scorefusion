// PDF.js worker setup (should be included before any pdfjsLib usage)
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// answer key data structure: map shift -> { qid: { correctAnswerId, subject } }
// populate these objects with the real keys for each exam shift.
// leaving them empty will trigger an alert when analyzing.
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
        "8606541132": {"correctAnswerId":"8606543851","subject":"Mathematics"},
    "8606541129": {"correctAnswerId":"8606543839","subject":"Mathematics"},
    "8606541145": {"correctAnswerId":"8606543903","subject":"Mathematics"},
    "8606541137": {"correctAnswerId":"8606543872","subject":"Mathematics"},
    "8606541142": {"correctAnswerId":"8606543891","subject":"Mathematics"},
    "8606541126": {"correctAnswerId":"8606543827","subject":"Mathematics"},
    "8606541130": {"correctAnswerId":"8606543844","subject":"Mathematics"},
    "8606541131": {"correctAnswerId":"8606543849","subject":"Mathematics"},
    "8606541141": {"correctAnswerId":"8606543886","subject":"Mathematics"},
    "8606541136": {"correctAnswerId":"8606543867","subject":"Mathematics"},
    "8606541143": {"correctAnswerId":"8606543895","subject":"Mathematics"},
    "8606541134": {"correctAnswerId":"8606543861","subject":"Mathematics"},
    "8606541128": {"correctAnswerId":"8606543834","subject":"Mathematics"},
    "8606541139": {"correctAnswerId":"8606543880","subject":"Mathematics"},
    "8606541135": {"correctAnswerId":"8606543864","subject":"Mathematics"},
    "8606541138": {"correctAnswerId":"8606543875","subject":"Mathematics"},
    "8606541127": {"correctAnswerId":"8606543832","subject":"Mathematics"},
    "8606541144": {"correctAnswerId":"8606543899","subject":"Mathematics"},
    "8606541140": {"correctAnswerId":"8606543883","subject":"Mathematics"},
    "8606541133": {"correctAnswerId":"8606543854","subject":"Mathematics"},

    "8606541149": {"correctAnswerId":"1","subject":"Mathematics"},
    "8606541148": {"correctAnswerId":"1333","subject":"Mathematics"},
    "8606541146": {"correctAnswerId":"225","subject":"Mathematics"},
    "8606541147": {"correctAnswerId":"2","subject":"Mathematics"},
    "8606541150": {"correctAnswerId":"17","subject":"Mathematics"},


    "8606541169": {"correctAnswerId":"8606543986","subject":"Physics"},
    "8606541154": {"correctAnswerId":"8606543923","subject":"Physics"},
    "8606541165": {"correctAnswerId":"8606543969","subject":"Physics"},
    "8606541160": {"correctAnswerId":"8606543947","subject":"Physics"},
    "8606541170": {"correctAnswerId":"8606543988","subject":"Physics"},
    "8606541152": {"correctAnswerId":"8606543916","subject":"Physics"},
    "8606541151": {"correctAnswerId":"8606543912","subject":"Physics"},
    "8606541156": {"correctAnswerId":"8606543933","subject":"Physics"},
    "8606541159": {"correctAnswerId":"8606543946","subject":"Physics"},
    "8606541167": {"correctAnswerId":"8606543978","subject":"Physics"},
    "8606541161": {"correctAnswerId":"8606543953","subject":"Physics"},
    "8606541155": {"correctAnswerId":"8606543930","subject":"Physics"},
    "8606541153": {"correctAnswerId":"8606543922","subject":"Physics"},
    "8606541162": {"correctAnswerId":"8606543955","subject":"Physics"},
    "8606541157": {"correctAnswerId":"8606543936","subject":"Physics"},
    "8606541158": {"correctAnswerId":"8606543940","subject":"Physics"},
    "8606541163": {"correctAnswerId":"8606543959","subject":"Physics"},
    "8606541168": {"correctAnswerId":"8606543980","subject":"Physics"},
    "8606541164": {"correctAnswerId":"8606543966","subject":"Physics"},
    "8606541166": {"correctAnswerId":"8606543974","subject":"Physics"},

    "8606541171": {"correctAnswerId":"17","subject":"Physics"},
    "8606541174": {"correctAnswerId":"1080","subject":"Physics"},
    "8606541173": {"correctAnswerId":"100","subject":"Physics"},
    "8606541172": {"correctAnswerId":"280","subject":"Physics"},
    "8606541175": {"correctAnswerId":"500","subject":"Physics"},


    "8606541195": {"correctAnswerId":"8606544073","subject":"Chemistry"},
    "8606541188": {"correctAnswerId":"8606544047","subject":"Chemistry"},
    "8606541176": {"correctAnswerId":"8606543997","subject":"Chemistry"},
    "8606541181": {"correctAnswerId":"8606544018","subject":"Chemistry"},
    "8606541183": {"correctAnswerId":"8606544026","subject":"Chemistry"},
    "8606541185": {"correctAnswerId":"8606544034","subject":"Chemistry"},
    "8606541187": {"correctAnswerId":"8606544041","subject":"Chemistry"},
    "8606541189": {"correctAnswerId":"8606544051","subject":"Chemistry"},
    "8606541182": {"correctAnswerId":"8606544022","subject":"Chemistry"},
    "8606541190": {"correctAnswerId":"8606544053","subject":"Chemistry"},
    "8606541193": {"correctAnswerId":"8606544067","subject":"Chemistry"},
    "8606541179": {"correctAnswerId":"8606544008","subject":"Chemistry"},
    "8606541186": {"correctAnswerId":"8606544038","subject":"Chemistry"},
    "8606541184": {"correctAnswerId":"8606544028","subject":"Chemistry"},
    "8606541191": {"correctAnswerId":"8606544059","subject":"Chemistry"},
    "8606541177": {"correctAnswerId":"8606544002","subject":"Chemistry"},
    "8606541180": {"correctAnswerId":"8606544014","subject":"Chemistry"},
    "8606541194": {"correctAnswerId":"8606544069","subject":"Chemistry"},
    "8606541192": {"correctAnswerId":"8606544062","subject":"Chemistry"},
    "8606541178": {"correctAnswerId":"8606544007","subject":"Chemistry"},

    "8606541200": {"correctAnswerId":"8","subject":"Chemistry"},
    "8606541198": {"correctAnswerId":"70","subject":"Chemistry"},
    "8606541197": {"correctAnswerId":"13","subject":"Chemistry"},
    "8606541196": {"correctAnswerId":"20","subject":"Chemistry"},
    "8606541199": {"correctAnswerId":"6","subject":"Chemistry"}
  }
};

// event listeners - ensure DOM ready
window.addEventListener('DOMContentLoaded', () => {
  const analyzeBtn = document.getElementById("analyzeBtn");
  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      try { process(); } catch(e){ console.error('process error',e); }
    });
  }
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  // Keyboard accessibility for drop zone
  const dz = document.getElementById('dropZone');
  if (dz) {
    dz.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        document.getElementById('pdfFile')?.click();
      }
    });
  }
});

// file input/dropzone handling
const pdfFile = document.getElementById('pdfFile');
const dropZone = document.getElementById('dropZone');
const dropText = document.getElementById('dropText');

pdfFile.addEventListener('change', () => {
  if (pdfFile.files && pdfFile.files[0]) {
    dropText.textContent = '📎 ' + pdfFile.files[0].name;
    dropText.style.color = 'var(--success, #10b981)';
  } else {
    dropText.textContent = 'Tap to choose or drag & drop PDF';
    dropText.style.color = '';
  }
});

['dragenter','dragover'].forEach(evt => {
  dropZone.addEventListener(evt, e => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });
});
dropZone.addEventListener('dragleave', e => {
  dropZone.classList.remove('dragover');
});
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    pdfFile.files = e.dataTransfer.files;
    dropText.textContent = '📎 ' + e.dataTransfer.files[0].name;
    dropText.style.color = 'var(--success, #10b981)';
  }
});

// theme handling
let _lastResult = null;
function applyTheme(theme) {
  if (theme === 'dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');
  localStorage.setItem('theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.innerText = theme === 'dark' ? '☀️' : '🌙';
  if (_lastResult) drawRing(_lastResult.scores);
}

function toggleTheme() {
  applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
}

(function(){
  const saved = localStorage.getItem('theme') ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);
})();

// core logic
function setAnalyzing(on) {
  const btn     = document.getElementById('analyzeBtn');
  const txt     = document.getElementById('analyzeBtnText');
  const spinner = document.getElementById('analyzeBtnSpinner');
  if (!btn) return;
  btn.disabled = on;
  if (txt)     txt.textContent = on ? 'Analyzing…' : 'Analyze';
  if (spinner) spinner.hidden  = !on;
}

async function process() {
  const shift = document.getElementById("shift").value;
  const file = document.getElementById("pdfFile").files[0];
  if (!shift || !file) return alert("Please select a shift and upload your PDF.");

  const key = ANSWER_KEYS[shift];
  if (!key || Object.keys(key).length === 0)
    return alert("Answer key missing for this shift.");

  setAnalyzing(true);
  try {
  const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;

  let text = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(it => it.str).join(" ") + " ";
  }

  render(calculate(text, key));
  } catch(err) {
    console.error('Analysis error:', err);
    alert('Failed to analyze PDF. Please check the file and try again.');
  } finally {
    setAnalyzing(false);
  }
}

function calculate(text, key) {
  const res = {
    Physics:{c:0,w:0,u:0,s:0},
    Chemistry:{c:0,w:0,u:0,s:0},
    Mathematics:{c:0,w:0,u:0,s:0}
  };
  const details = [];

  const blocks = text.replace(/\s+/g," ")
    .split(/(?=Question\s*ID\s*[: ]\s*\d+)/i);

  for (const block of blocks) {
    const qid = (block.match(/Question\s*ID\s*[: ]\s*(\d+)/i)||[])[1];
    if (!qid || !key[qid]) continue;

    const { correctAnswerId, subject } = key[qid];
    if (!res[subject]) continue;

    const type = (block.match(/Question\s*Type\s*[: ]\s*(MCQ|SA)/i)||[])[1];

    let attempted=false, correct=false, chosen=null, given=null;

    if (type==="MCQ") {
      const optMap={};
      block.replace(/Option\s*(\d)\s*ID\s*[: ]\s*(\d+)/gi,(_,i,id)=>optMap[i]=id);
      chosen=(block.match(/Chosen\s*Option\s*[: ]\s*(\d+|--|-)/i)||[])[1];
      if (optMap[chosen]) {
        attempted=true;
        if (optMap[chosen]===correctAnswerId) correct=true;
      }
    } else if (type==="SA") {
      given=(block.match(/(?:Given|Answer)\s*[: ]\s*([0-9.\-]+)/i)||[])[1];
      if (given && given!="--" && given!="-") {
        attempted=true;
        if (Math.abs(+given-+correctAnswerId)<0.01) correct=true;
      }
    }

    if (!attempted) res[subject].u++;
    else if (correct){res[subject].c++;res[subject].s+=4;}
    else{res[subject].w++;res[subject].s-=1;}

    details.push({qid,subject,type,attempted,correct,chosen,given,correctAnswerId});
  }
  return {scores:res, details};
}

function render(result){
  _lastResult = result;
  const rs = document.getElementById('resultsSection');
  rs.style.display='block';
  requestAnimationFrame(()=> rs.classList.add('visible'));
  const res = result.scores || result;
  const tbody=document.getElementById("tbody");
  tbody.innerHTML="";
  ["Physics","Chemistry","Mathematics"].forEach(s=>{
    const acc = res[s].c ? Math.round(res[s].c / (res[s].c+res[s].w) * 100) : 0;
    tbody.innerHTML+=
      `<tr><td>${s}</td><td>${res[s].s}</td><td>${res[s].c}</td><td>${res[s].w}</td><td>${res[s].u}</td><td>${acc}%</td></tr>`;
  });
  drawRing(res);
  drawChart(res);
  try { localStorage.setItem('lastResult', JSON.stringify(result)); } catch(e) {}
  const analysisDiv = document.getElementById('questionAnalysis');
  const tableBody = document.querySelector('#detailTable tbody');
  tableBody.innerHTML = '';
  result.details.forEach((d,i)=>{
    const answered = d.attempted ? (d.chosen||d.given||'') : '—';
    const resultText = d.correct ? 'Correct' : (d.attempted ? 'Wrong' : 'Skipped');
    const cls = d.correct ? 'result-correct' : (d.attempted ? 'result-wrong' : 'result-skip');
    tableBody.innerHTML += `<tr><td>${i+1}</td><td>${d.qid}</td><td>${answered}</td><td>${d.correctAnswerId}</td><td class="${cls}">${resultText}</td></tr>`;
  });
  analysisDiv.style.display = 'block';
  document.getElementById('charts').style.display = 'block';
  analysisDiv.classList.add('show');
  document.getElementById('charts').classList.add('show');
}

function drawRing(res) {
  const total = res.Physics.s + res.Chemistry.s + res.Mathematics.s;
  const max = 75 * 4;
  const pct = Math.round((total / max) * 100);
  const correctTotal = res.Physics.c + res.Chemistry.c + res.Mathematics.c;
  const attemptedTotal = correctTotal + res.Physics.w + res.Chemistry.w + res.Mathematics.w;
  const accPct = attemptedTotal ? Math.round((correctTotal / attemptedTotal) * 100) : 0;

  function setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
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

  const isDark = document.body.classList.contains('dark');
  const trackColor  = isDark ? '#2e3347' : '#dde3ee';
  const themeColor  = isDark ? '#e2e8f0' : '#1a1a2e';
  const headerColor = isDark ? '#94a3b8' : '#64748b';

  function animateRing(canvas, targetPct, color, headerText, displayText, suffix='', footerText='') {
    const { ctx, cw, ch } = setupCanvas(canvas);
    const radius = cw / 2 - Math.max(10, cw * 0.07);
    const lw = Math.max(8, cw * 0.06);
    const labelSize = Math.max(10, cw * 0.065);
    const valueSize = Math.max(16, cw * 0.12);
    let current = 0;
    let rafId;
    function step() {
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = lw;
      // Track
      ctx.beginPath();
      ctx.arc(cw / 2, ch, radius, Math.PI, 0, false);
      ctx.strokeStyle = trackColor;
      ctx.stroke();
      // Fill
      ctx.beginPath();
      ctx.arc(cw / 2, ch, radius, Math.PI, Math.PI + Math.PI * (current / 100), false);
      ctx.strokeStyle = color;
      ctx.lineCap = 'round';
      ctx.stroke();
      // Header label
      ctx.font = `${labelSize}px system-ui`;
      ctx.fillStyle = headerColor;
      ctx.textAlign = 'center';
      ctx.fillText(headerText, cw / 2, ch - radius / 1.5);
      // Value
      ctx.font = `bold ${valueSize}px system-ui`;
      ctx.fillStyle = themeColor;
      ctx.fillText((displayText instanceof Function ? displayText(current) : displayText) + suffix, cw / 2, ch - radius / 3.2);
      if (footerText) {
        ctx.font = `${labelSize}px system-ui`;
        ctx.fillStyle = headerColor;
        ctx.fillText(footerText, cw / 2, ch - radius / 8);
      }
      if (current < targetPct) {
        current = Math.min(current + 2, targetPct);
        rafId = requestAnimationFrame(step);
      }
    }
    if (rafId) cancelAnimationFrame(rafId);
    step();
  }

  animateRing(document.getElementById('scoreRing'),    pct,    '#3b82f6', 'Total marks:', () => total, '', '/300');
  animateRing(document.getElementById('accuracyRing'), accPct, '#10b981', 'Accuracy:',    () => accPct, '%');
}

function drawChart(res) {
  const ctx = document.getElementById('scoreChart').getContext('2d');
  if (window.scoreChartInstance) window.scoreChartInstance.destroy();
  window.scoreChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Physics','Chemistry','Mathematics'],
      datasets: [{
        data: [res.Physics.s, res.Chemistry.s, res.Mathematics.s],
        backgroundColor: ['#3b82f6','#10b981','#f59e0b']
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.raw || 0;
              return label + ': ' + value + ' pts';
            }
          }
        }
      }
    }
  });
}

// restore from storage if available (runs on load)
window.addEventListener('DOMContentLoaded', ()=>{
  const stored = localStorage.getItem('lastResult');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      render(parsed);
    } catch(e) {
      console.error('failed to parse stored result', e);
      localStorage.removeItem('lastResult');
    }
  }
  const clearBtn = document.getElementById('clearDataBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', ()=>{
      localStorage.removeItem('lastResult');
      const rs = document.getElementById('resultsSection');
      if (rs) rs.style.display='none';
      const charts = document.getElementById('charts');
      if (charts) charts.style.display='none';
      const analysisDiv = document.getElementById('questionAnalysis');
      if (analysisDiv) analysisDiv.style.display='none';
    });
  }
});

/* ================= ANSWER KEYS ================= */