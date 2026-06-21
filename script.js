const slides = [
  {
    title: "2026 CKM Syndrome Guideline",
    notes: [
      "這份簡報聚焦 2026 AHA/ACC/ADA/ASN CKM syndrome guideline，目標不是逐條翻譯，而是讓臨床醫師快速掌握這份 guideline 的使用方式。",
      "CKM 的核心，是把 cardiovascular、kidney、metabolic 三個系統放在同一個風險框架下思考。"
    ],
    tags: ["Guideline update", "Physician reference"]
  },
  {
    title: "CKM Syndrome 的臨床定義與照護邏輯",
    notes: [
      "CKM syndrome 不是單一診斷，而是一種跨器官風險狀態。代謝風險、腎臟疾病與心血管系統會互相推動。",
      "臨床上，要先定位病人的 CKM stage，再決定風險量化、治療優先序與追蹤頻率。"
    ],
    tags: ["Definition", "Care logic"]
  },
  {
    title: "CKM Stage 0-4 分期總覽",
    notes: [
      "Stage 0 是沒有 CKM risk factors，重點是維持心血管健康；Stage 1 開始出現 excess 或 dysfunctional adiposity；Stage 2 進入 metabolic risk factors、T2D 或 CKD。",
      "Stage 3 是 subclinical CVD 或高風險等同狀態；Stage 4 則是 clinical CVD 合併 CKM risk。分期的目的，是幫助判斷追蹤頻率、風險量化方式與治療強度。"
    ],
    tags: ["Staging", "Stage 0-4"]
  },
  {
    title: "分期後要怎麼追蹤：Longitudinal assessment",
    notes: [
      "所有成人都建議至少每年評估 BMI、waist circumference 和 BP。Stage 0 的 lipids、glycemia、eGFR 可以每 5 年；Stage 1 縮短到每 2 到 3 年。",
      "Stage 2 以上則進入每年至少一次的代謝與腎臟評估，並且要同時看 eGFR 和 UACR。"
    ],
    tags: ["Monitoring", "UACR"]
  },
  {
    title: "風險量化與 refinement：PREVENT、CAC、pre-HF",
    notes: [
      "30 到 79 歲、沒有 CVD 的成人，可以使用 PREVENT equations 估算 10 年 CVD、ASCVD 和 HF risk；30 到 59 歲也可用 30 年風險支持長期預防策略。",
      "當 PREVENT-CVD 達到 20% 以上，就可能進入 Stage 3 的 risk equivalent。若治療決策仍不確定，可以用 CAC 或 pre-HF biomarkers 進一步 refine risk。"
    ],
    tags: ["PREVENT", "CAC", "pre-HF"]
  },
  {
    title: "Stage 1-3 管理總圖：Obesity、T2D、CKD 三條主線",
    notes: [
      "Stage 1 到 3 的管理有共同底層，包括 Life's Essential 8、interdisciplinary care、SDOH、血壓與血脂控制。",
      "接著依病人的主要風險 profile 分成 obesity、T2D、CKD 三條主線，常常需要在同一個病人身上整合。"
    ],
    tags: ["Stage 1-3", "Management"]
  },
  {
    title: "T2D in CKM Stage 2-3",
    notes: [
      "在 CKM Stage 2 到 3 的 T2D 管理中，重點不只是 HbA1c。若病人有 CVD 或 CVD 風險升高，應考慮具心腎保護效果的 antihyperglycemic therapy。",
      "藥物選擇要看 CKD、ASCVD、HF、obesity、severe hyperglycemia 和 MASLD。"
    ],
    tags: ["T2D", "SGLT2i", "GLP-1"]
  },
  {
    title: "CKD in CKM Stage 2-3",
    notes: [
      "CKD 的評估不能只看 eGFR，也要看 UACR。這張圖用 T2D 與 albuminuria 兩個關鍵分支來決定腎臟保護策略。",
      "若 CKD 合併 T2D 或 albuminuria，RASi 與 SGLT2i 是重要保護策略。若 persistent albuminuria，則可進一步考慮 ns-MRA 或 GLP-1-based therapy。"
    ],
    tags: ["CKD", "eGFR", "UACR"]
  },
  {
    title: "Stage 3 的 pre-HF：不要等到症狀出現",
    notes: [
      "Stage 3 不只包含 subclinical ASCVD，也包含 pre-HF。當 PREVENT-HF risk 達到 5% 以上時，可以考慮 cardiac biomarkers。",
      "HF prevention 不應等到症狀出現才開始。越早辨識高風險，越有機會透過 CKM risk factor control 介入。"
    ],
    tags: ["pre-HF", "Biomarkers"]
  },
  {
    title: "Stage 4 with ASCVD",
    notes: [
      "進入 Stage 4 代表已有 clinical CVD。對 ASCVD 病人，secondary prevention 仍要重視 LDL-C、BP、antithrombotic 與生活型態。",
      "CKM guideline 強調還要同時處理 obesity、T2D 和 CKD，依共病選擇 GLP-1-based therapy、SGLT2i 或 kidney protective therapy。"
    ],
    tags: ["ASCVD", "Secondary prevention"]
  },
  {
    title: "Stage 4 with HF",
    notes: [
      "HF 的 CKM 管理不是單一器官治療。HFrEF、HFmrEF、HFpEF 的證據與優先序不同，而 obesity、T2D、CKD 會影響藥物選擇、劑量、監測與預後。",
      "在這個交會處，SGLT2i 是關鍵藥物類別之一；但每位病人仍需要依 HF subtype、eGFR、UACR 與血壓整合治療。"
    ],
    tags: ["HF", "Subtype", "GDMT"]
  },
  {
    title: "醫師版 Takeaway：CKM 門診工作流",
    notes: [
      "最後把整份 guideline 收束成門診工作流：Stage、Risk、Refine、Treat、Follow。",
      "CKM 的臨床決策關鍵，就是把分期、風險量化、精準化、治療、追蹤串成閉環。"
    ],
    tags: ["Workflow", "Takeaway"]
  }
];

const fullScript = [
  "整理了一份 2026 AHA/ACC/ADA/ASN CKM Syndrome Guideline 的醫師參考版簡報。CKM syndrome 把心血管、腎臟與代謝疾病放在同一個臨床框架下思考，重點不只是診斷肥胖、糖尿病、CKD 或 CVD，而是透過分期、風險量化與追蹤策略，提早介入、避免 progression，並促進 regression。",
  "這份簡報整理了 CKM Stage 0-4 分期、PREVENT risk equations 的臨床應用、eGFR + UACR 追蹤與腎臟保護策略、T2D、CKD、ASCVD、HF 情境下的治療重點，以及門診可用的 CKM 五步驟工作流。",
  "核心 takeaway：CKM staging 不是診斷標籤，而是決定追蹤頻率、風險量化與治療強度的臨床座標。"
];

let current = 0;
let mode = "notes";

const slideImage = document.getElementById("slideImage");
const thumbs = document.getElementById("thumbs");
const slideSelect = document.getElementById("slideSelect");
const slideCount = document.getElementById("slideCount");
const progress = document.getElementById("progress");
const notesContent = document.getElementById("notesContent");
const notesTab = document.getElementById("notesTab");
const fullTab = document.getElementById("fullTab");

function pad(num) {
  return String(num).padStart(2, "0");
}

function slidePath(index) {
  return `origin_image/slide_${pad(index + 1)}.png`;
}

function renderThumbs() {
  thumbs.innerHTML = "";
  slideSelect.innerHTML = "";
  slides.forEach((slide, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "thumb-button";
    button.type = "button";
    button.dataset.index = String(index);
    button.innerHTML = `
      <img src="${slidePath(index)}" alt="Slide ${index + 1} thumbnail" loading="lazy">
      <span class="thumb-title"><strong>${index + 1}</strong><span>${slide.title}</span></span>
    `;
    button.addEventListener("click", () => setSlide(index));
    li.appendChild(button);
    thumbs.appendChild(li);

    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${index + 1}. ${slide.title}`;
    slideSelect.appendChild(option);
  });
}

function renderNotes() {
  if (mode === "full") {
    notesContent.innerHTML = `
      <h2>完整介紹文</h2>
      ${fullScript.map((item) => `<p>${item}</p>`).join("")}
    `;
    return;
  }

  const slide = slides[current];
  notesContent.innerHTML = `
    <h2>${current + 1}. ${slide.title}</h2>
    <div class="pill-row">${slide.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}</div>
    ${slide.notes.map((item) => `<p>${item}</p>`).join("")}
  `;
}

function setSlide(index) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  slideImage.src = slidePath(current);
  slideImage.alt = `Slide ${current + 1}: ${slides[current].title}`;
  slideCount.textContent = `${current + 1} / ${slides.length}`;
  progress.style.width = `${((current + 1) / slides.length) * 100}%`;
  slideSelect.value = String(current);

  document.querySelectorAll(".thumb-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.index) === current);
  });

  renderNotes();
}

document.getElementById("prevBtn").addEventListener("click", () => setSlide(current - 1));
document.getElementById("nextBtn").addEventListener("click", () => setSlide(current + 1));
slideSelect.addEventListener("change", (event) => setSlide(Number(event.target.value)));

notesTab.addEventListener("click", () => {
  mode = "notes";
  notesTab.classList.add("active");
  fullTab.classList.remove("active");
  renderNotes();
});

fullTab.addEventListener("click", () => {
  mode = "full";
  fullTab.classList.add("active");
  notesTab.classList.remove("active");
  renderNotes();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") setSlide(current + 1);
  if (event.key === "ArrowLeft" || event.key === "PageUp") setSlide(current - 1);
});

renderThumbs();
setSlide(0);
