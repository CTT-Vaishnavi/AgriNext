/* ===============================
   LANGUAGE DATA
================================ */
const LANG = {
  en: {
    title: "Government Scheme & Insurance Eligibility",
    subtitle: "Official advisory based on crop and irrigation details",
    check: "Check Eligibility",
    alert: "Please select all required fields"
  },
  hi: {
    title: "सरकारी योजना और बीमा पात्रता",
    subtitle: "फसल और सिंचाई के आधार पर सरकारी सलाह",
    check: "पात्रता जांचें",
    alert: "कृपया सभी विवरण चुनें"
  },
  mr: {
    title: "सरकारी योजना व विमा पात्रता",
    subtitle: "पीक व सिंचनावर आधारित सरकारी सल्ला",
    check: "पात्रता तपासा",
    alert: "कृपया सर्व तपशील निवडा"
  }
};

let CURRENT_LANG = "en";

function setLang(lang) {
  CURRENT_LANG = lang;
  document.getElementById("title").innerText = LANG[lang].title;
  document.getElementById("subtitle").innerText = LANG[lang].subtitle;
  document.getElementById("checkBtn").innerText = LANG[lang].check;
}

/* ===============================
   DATA
================================ */
const stateDistricts = {
 Maharashtra: [
    "Pune",
    "Mumbai City",
    "Mumbai Suburban",
    "Thane",
    "Palghar",
    "Nashik",
    "Ahmednagar",
    "Jalgaon",
    "Dhule",
    "Nandurbar",
    "Kolhapur",
    "Sangli",
    "Satara",
    "Solapur",
    "Aurangabad",
    "Jalna",
    "Beed",
    "Latur",
    "Osmanabad",
    "Nanded",
    "Parbhani",
    "Hingoli",
    "Amravati",
    "Akola",
    "Yavatmal",
    "Nagpur"
  ],

  Gujarat: [
    "Ahmedabad", "Surat", "Vadodara",
    "Rajkot", "Junagadh", "Bhavnagar"
  ],

  Karnataka: [
    "Bengaluru", "Mysuru", "Hubballi",
    "Belagavi", "Kalaburagi"
  ],

  MadhyaPradesh: [
    "Indore", "Bhopal", "Jabalpur",
    "Gwalior", "Ujjain"
  ],

  Rajasthan: [
    "Jaipur", "Kota", "Udaipur",
    "Ajmer", "Bikaner"
  ],

  UttarPradesh: [
    "Lucknow", "Kanpur", "Agra",
    "Meerut", "Varanasi"
  ],

  Telangana: [
    "Hyderabad", "Warangal", "Nizamabad"
  ],

  TamilNadu: [
    "Chennai", "Coimbatore", "Madurai",
    "Salem", "Trichy"
  ]
};


const crops = [
  "Rice",
  "Wheat",
  "Cotton",
  "Sugarcane",
  "Maize",
  "Soybean",
  "Groundnut",
  "Mustard",
  "Bajra",
  "Jowar",
  "Tur (Arhar)",
  "Gram (Chana)",
  "Sunflower",
  "Potato",
  "Onion"
];


const cropIrrigationScheme = {
  Rice: ["canal", "rainfed"],
  Wheat: ["sprinkler", "canal"],
  Cotton: ["drip", "sprinkler"],
  Sugarcane: ["drip"],
  Maize: ["sprinkler", "rainfed"],
  Soybean: ["rainfed"],
  Groundnut: ["sprinkler", "rainfed"],
  Mustard: ["rainfed"],
  Bajra: ["rainfed"],
  Jowar: ["rainfed"],
  "Tur (Arhar)": ["rainfed"],
  "Gram (Chana)": ["rainfed"],
  Sunflower: ["sprinkler"],
  Potato: ["drip", "sprinkler"],
  Onion: ["drip"]
};

const irrigationSubsidy = {
  drip: { percent: 55, scheme: "PMKSY – Micro Irrigation" },
  sprinkler: { percent: 45, scheme: "PMKSY – Sprinkler System" },
  canal: { percent: 25, scheme: "Canal Irrigation Support Scheme" },
  rainfed: { percent: 40, scheme: "Rainfed Area Development Programme" }
};

const districtPremiumRates = {
  Pune: 1.5,
  Nashik: 1.8,
  Nagpur: 2.0,
  Ahmedabad: 1.7,
  Surat: 1.9,
  Indore: 1.6,
  Bhopal: 1.5,
  Jaipur: 1.8,
  Coimbatore: 1.4,
  Hyderabad: 1.6
};


/* ===============================
   INITIAL LOAD
================================ */
window.onload = () => {
  const stateSel = document.getElementById("state");
  const districtSel = document.getElementById("district");
  const cropSel = document.getElementById("crop");

  stateSel.innerHTML = "<option value=''>Select</option>";
  Object.keys(stateDistricts).forEach(s => {
    stateSel.innerHTML += `<option value="${s}">${s}</option>`;
  });

  districtSel.innerHTML = "<option value=''>Select</option>";
  cropSel.innerHTML = "<option value=''>Select</option>";
  crops.forEach(c => {
    cropSel.innerHTML += `<option value="${c}">${c}</option>`;
  });

  setLang("en");
};

/* ===============================
   FORM HELPERS
================================ */
function loadDistricts() {
  const districtSel = document.getElementById("district");
  districtSel.innerHTML = "<option value=''>Select</option>";

  (stateDistricts[state.value] || []).forEach(d => {
    districtSel.innerHTML += `<option value="${d}">${d}</option>`;
  });
}

function selectCrop(cropName) {
  document.getElementById("crop").value = cropName;
}

function toggleDark(){
  document.body.classList.toggle("dark");

  const icon = document.getElementById("darkIcon");

  if(document.body.classList.contains("dark")){
    icon.innerText = "☀️";   // Light mode icon
    icon.title = "Light Mode";
  }else{
    icon.innerText = "🌙";   // Dark mode icon
    icon.title = "Dark Mode";
  }
}


/* ===============================
   STEP PROGRESS
================================ */
function moveToResult() {
  document.getElementById("stepResult")?.classList.add("active");
}

function moveToPDF() {
  document.getElementById("stepPDF")?.classList.add("active");
}

// const s = irrigationSubsidy[i];
// const d = district.value;
// const sum = sumInsured.value || 10000; // default demo amount
// const rate = districtPremiumRates[d] || 2;
// const premiumAmt = (sum * rate / 100).toFixed(0);

// resultBox.innerHTML = `
//   <div class="result-box success">

//     <h3>Eligible Government Scheme</h3>

//     <!-- SCHEME INFO -->
//     <div class="result-section-block">
//       <h4>📌 Scheme Information</h4>
//       <p><b>Crop:</b> ${c}</p>
//       <p><b>Irrigation Type:</b> ${i}</p>
//       <p><b>Scheme Name:</b> ${s.scheme}</p>
//       <p><b>Subsidy:</b> ${s.percent}%</p>
//       <p><b>Scheme Type:</b> Centrally Sponsored Scheme</p>
//     </div>

//     <!-- ELIGIBILITY -->
//     <div class="result-section-block">
//       <h4>✅ Eligibility Conditions</h4>
//       <ul>
//         <li>Farmer must be Small / Marginal / Medium</li>
//         <li>Minimum 0.5 Acre agricultural land required</li>
//         <li>Valid land record (7/12 / Patta)</li>
//         <li>Bank account linked with Aadhaar</li>
//       </ul>
//     </div>

//     <!-- DOCUMENTS -->
//     <div class="result-section-block">
//       <h4>📄 Required Documents</h4>
//       <ul>
//         <li>Aadhaar Card</li>
//         <li>Land Record (7/12 Extract / Patta)</li>
//         <li>Bank Passbook</li>
//         <li>Passport Size Photograph</li>
//       </ul>
//     </div>

//     <!-- INSURANCE INFO (NEW) -->
//     <div class="result-section-block">
//       <h4>🛡 Crop Insurance (PMFBY)</h4>
//       <p><b>District:</b> ${d}</p>
//       <p><b>Premium Rate:</b> ${rate}%</p>
//       <p><b>Estimated Farmer Share:</b> ₹${premiumAmt}</p>
//       <small>
//         * Premium amount is indicative and may vary as per government notification.
//       </small>
//     </div>

//     <!-- ADVISORY -->
//     <div class="advisory-box">
//       <b>🌾 Advisory Note:</b><br>
//       ${i} irrigation with ${c} crop is suitable in <b>${d}</b> district.
//       Farmer is advised to apply early for subsidy and insurance benefits.
//     </div>

//     <!-- ACTIONS -->
//     <div class="result-actions">
//       <a href="https://pmksy.gov.in" target="_blank" class="gov-btn">
//         Apply on Government Portal
//       </a>
//       <button onclick="downloadPDF()" class="gov-btn outline">
//         Download PDF
//       </button>
//       <button onclick="shareWhatsApp()" class="gov-btn outline">
//         Share
//       </button>
//     </div>

//   </div>
// `;

const state = document.getElementById("state");
const crop = document.getElementById("crop");
const irrigation = document.getElementById("irrigation");
const district = document.getElementById("district");
const sumInsured = document.getElementById("sumInsured");



/* ===============================
   INSURANCE PREMIUM
================================ */
function calculatePremium() {
  const d = district.value;
  const sum = sumInsured.value;
  const premiumBox = document.getElementById("premiumResult");

  if (!d || !sum) {
showGovAlert(LANG[CURRENT_LANG].alert);
    return;
  }

  const rate = districtPremiumRates[d] || 2;

  premiumBox.innerHTML = `
    <div class="result-box success">
      <p><b>District:</b> ${d}</p>
      <p><b>Premium Rate:</b> ${rate}%</p>
      <p><b>Farmer Pays:</b> ₹${(sum * rate / 100).toFixed(0)}</p>
    </div>
  `;
}


function downloadPDF() {
  if (!crop.value || !irrigation.value) {
    alert("Please check eligibility first");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  // ===============================
  // BACKGROUND LOGO (WATERMARK)
  // ===============================
  const logo = new Image();
  logo.src = "../images/output-onlinepngtools (1).png";

  logo.onload = () => {

    function addBackgroundLogo() {
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const imgWidth = 120;
      const imgHeight = 120;

      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;

      doc.saveGraphicsState();
      doc.setGState(new doc.GState({ opacity: 0.08 })); // 🔥 watermark opacity
      doc.addImage(logo, "PNG", x, y, imgWidth, imgHeight);
      doc.restoreGraphicsState();
    }

    // ✅ Add watermark
    addBackgroundLogo();

    // ===============================
    // HEADER
    // ===============================
    let y = 20;
doc.addImage(logo, "PNG", 20, y - 9, 18, 18);


    doc.setFont("Times", "Bold");
    doc.setFontSize(16);
    doc.text("Eligible Government Scheme Report", 105, y, { align: "center" });

    y += 8;
    doc.setFont("Times", "Normal");
    doc.setFontSize(11);
    doc.text(
      "AgriNext – Smart Government Scheme & Insurance Portal (Educational Project)",
      105,
      y,
      { align: "center", maxWidth: 180 }
    );

    y += 6;
    doc.line(15, y, 195, y);
    y += 10;

    // ===============================
    // SCHEME INFORMATION
    // ===============================
    doc.setFont("Times", "Bold");
    doc.setFontSize(13);
    doc.text("1. Scheme Information", 15, y);
    y += 8;

    doc.setFont("Times", "Normal");
    doc.setFontSize(12);

    doc.text(`Crop : ${crop.value}`, 20, y); y += 7;
    doc.text(`Irrigation Type : ${irrigation.value}`, 20, y); y += 7;
    doc.text(`Scheme Name : ${irrigationSubsidy[irrigation.value].scheme}`, 20, y); y += 7;
    doc.text(`Subsidy : ${irrigationSubsidy[irrigation.value].percent}%`, 20, y); y += 7;
    doc.text("Scheme Type : Centrally Sponsored Scheme", 20, y);

    y += 12;

/* ===============================
   2. Crop Insurance (PMFBY)
============================== */
// 🔴 IMPORTANT FIX FOR NUMBER SPACING
// doc.setCharSpace(0);        // reset character spacing
// doc.setFont("Helvetica");   // keep safe font
// doc.setFont("Times", "Bold");
// doc.setFontSize(13);
// doc.text("2. Crop Insurance (PMFBY)", 15, y);
// y += 10;

// // Values
// const d = district.value || "Pune";
// const sum = Number(sumInsured.value) || 10000;
// const rate = districtPremiumRates[d] || 2;
// const premiumAmt = (sum * rate / 100).toFixed(0);

// // Label column X & Value column X
// const labelX = 20;
// const valueX = 75;

// doc.setFont("Times", "Normal");
// doc.setFontSize(12);

// // Row 1
// doc.text("District", labelX, y);
// doc.text(`: ${d}`, valueX, y);
// y += 7;

// // Row 2
// doc.text("Sum Insured", labelX, y);
// doc.text(`: ₹${sum}`, valueX, y);
// y += 7;

// // Row 3
// doc.text("Premium Rate", labelX, y);
// doc.text(`: ${rate}%`, valueX, y);
// y += 7;

// // Row 4
// doc.text("Farmer Premium", labelX, y);
// doc.text(`: ₹${premiumAmt}`, valueX, y);
// y += 8;

// // Note
// doc.setFontSize(10);
// doc.text(
//   "* Premium amount is indicative. Final premium may vary as per government notification.",
//   labelX,
//   y,
//   { maxWidth: 170 }
// );

// y += 10;


/* ===============================
   2. Crop Insurance (PMFBY)
============================== */

// 🔥 HARD RESET (IMPORTANT)
doc.setFont("Helvetica", "Bold");
doc.setFontSize(13);
doc.setCharSpace(0);

doc.text("2. Crop Insurance (PMFBY)", 15, y, { charSpace: 0 });
y += 10;

// Data (force plain strings)
const d = String(district.value || "Pune");
const sum = String(Number(sumInsured.value) || 10000);
const rate = String(districtPremiumRates[district.value] || 2);
const premiumAmt = String(
  ((Number(sumInsured.value) || 10000) *
    (districtPremiumRates[district.value] || 2) / 100).toFixed(0)
);

// Normal text
doc.setFont("Helvetica", "Normal");
doc.setFontSize(12);

// ❌ DO NOT USE ₹
// ✅ USE Rs.

doc.text("District : " + d, 20, y, { charSpace: 0 });
y += 7;

doc.text("Sum Insured : Rs. " + sum, 20, y, { charSpace: 0 });
y += 7;

doc.text("Premium Rate : " + rate + " %", 20, y, { charSpace: 0 });
y += 7;

doc.text("Farmer Premium : Rs. " + premiumAmt, 20, y, { charSpace: 0 });
y += 8;

// Note
doc.setFontSize(10);
doc.text(
  "* Premium amount is indicative. Final premium may vary as per government notification.",
  20,
  y,
  { maxWidth: 170, charSpace: 0 }
);

y += 10;



    // ===============================
    // ELIGIBILITY
    // ===============================
    doc.setFont("Times", "Bold");
    doc.setFontSize(13);
    doc.text("2. Eligibility Conditions", 15, y);
    y += 8;

    doc.setFont("Times", "Normal");
    doc.setFontSize(12);

    const eligibility = [
      "Farmer must be Small / Marginal / Medium",
      "Minimum 0.5 Acre agricultural land required",
      "Valid land record (7/12 Extract or Patta)",
      "Bank account linked with Aadhaar"
    ];

    eligibility.forEach(e => {
      doc.text(`• ${e}`, 20, y);
      y += 7;
    });

    y += 8;

    // ===============================
    // DOCUMENTS
    // ===============================
    doc.setFont("Times", "Bold");
    doc.setFontSize(13);
    doc.text("3. Required Documents", 15, y);
    y += 8;

    doc.setFont("Times", "Normal");
    doc.setFontSize(12);

    const docs = [
      "Aadhaar Card",
      "Land Record (7/12 Extract / Patta)",
      "Bank Passbook",
      "Passport Size Photograph"
    ];

    docs.forEach(d => {
      doc.text(`• ${d}`, 20, y);
      y += 7;
    });

    y += 8;

    // ===============================
    // ADVISORY
    // ===============================
    doc.setFont("Times", "Bold");
    doc.setFontSize(13);
    doc.text("4. Advisory Note", 15, y);
    y += 8;

    doc.setFont("Times", "Normal");
    doc.setFontSize(12);
    doc.text(
      `${crop.value} crop with ${irrigation.value} irrigation is recommended to maximize subsidy and water efficiency.`,
      20,
      y,
      { maxWidth: 170 }
    );

    // ===============================
    // FOOTER
    // ===============================
    doc.setFontSize(10);
    doc.text(
      "Generated by AgriNext | For Academic & Educational Use Only",
      105,
      285,
      { align: "center" }
    );

    // ===============================
    // SAVE PDF
    // ===============================
    doc.save("AgriNext_Government_Scheme_Report.pdf");
  };
}

/* ===============================
   WHATSAPP SHARE
================================ */
// function shareWhatsApp() {
//   const s = irrigationSubsidy[irrigation.value];

//   const msg = `
// AgriNext – Government Advisory
// Crop: ${crop.value}
// Irrigation: ${irrigation.value}
// Scheme: ${s.scheme}
// Subsidy: ${s.percent}%
// Apply: https://pmksy.gov.in
// `;

//   window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
// }
function checkEligibility() {
  const c = crop.value;
  const i = irrigation.value;
  const d = district.value || "Pune";   // ✅ fallback district
  const resultBox = document.getElementById("results");

  if (!c || !i) {
showGovAlert(LANG[CURRENT_LANG].alert);
    return;
  }

  moveToResult();

  // ❌ Not suitable case
  if (!cropIrrigationScheme[c].includes(i)) {
    resultBox.innerHTML = `
      <div class="result-box error">
        <h3>Not Recommended</h3>
        <p><b>${c}</b> is not suitable under <b>${i}</b> irrigation.</p>
        <p><b>Recommended Irrigation:</b> ${cropIrrigationScheme[c].join(", ")}</p>
      </div>
    `;
    return;
  }

  /* ===============================
     INSURANCE CALCULATION (FIXED)
  ============================== */
  const sum = Number(sumInsured.value) || 10000; // ✅ default
  const rate = districtPremiumRates[d] || 2;
  const premiumAmt = (sum * rate / 100).toFixed(0);

  const s = irrigationSubsidy[i];

  /* ===============================
     FINAL RESULT (SCHEME + INSURANCE)
  ============================== */
  resultBox.innerHTML = `
    <div class="result-box success">
    

      <h3>Eligible Government Scheme</h3>
      <!-- Scheme Info -->
      <div class="result-section-block">
        <h4>📌 Scheme Information</h4>
        <p><b>Crop:</b> ${c}</p>
        <p><b>Irrigation Type:</b> ${i}</p>
        <p><b>Scheme Name:</b> ${s.scheme}</p>
        <p><b>Subsidy:</b> ${s.percent}%</p>
        <p><b>Scheme Type:</b> Centrally Sponsored Scheme</p>
      </div>

      <!-- Insurance Info -->
      <div class="result-section-block">
        <h4>🛡 Crop Insurance (PMFBY)</h4>
        <p><b>District:</b> ${d}</p>
        <p><b>Sum Insured:</b> ₹${sum}</p>
        <p><b>Premium Rate:</b> ${rate}%</p>
        <p><b>Farmer Premium:</b> ₹${premiumAmt}</p>
        <small>
          * This is an indicative premium. Final amount may vary as per
          government notification.
        </small>
      </div>
  <!-- ELIGIBILITY -->
    <div class="result-section-block">
      <h4>✅ Eligibility Conditions</h4>
      <ul>
        <li>Farmer must be Small / Marginal / Medium</li>
        <li>Minimum 0.5 Acre agricultural land required</li>
        <li>Valid land record (7/12 / Patta)</li>
        <li>Bank account linked with Aadhaar</li>
      </ul>
    </div>

    <!-- DOCUMENTS -->
    <div class="result-section-block">
      <h4>📄 Required Documents</h4>
      <ul>
        <li>Aadhaar Card</li>
        <li>Land Record (7/12 Extract / Patta)</li>
        <li>Bank Passbook</li>
        <li>Passport Size Photograph</li>
      </ul>
    </div>

      <!-- Advisory -->
      <div class="advisory-box">
        <b>🌾 Advisory Note:</b><br>
        ${c} crop with ${i} irrigation is suitable in <b>${d}</b> district.
        Farmer is advised to enroll in PMFBY insurance for risk protection.
      </div>

      <!-- Actions -->
      <div class="result-actions">
        <a href="https://pmfby.gov.in/" target="_blank" class="gov-btn">
          Apply on Government Portal
        </a>
      </div>

    </div>
  `;
}


/* ===============================
   WHATSAPP SHARE (FULL RESULT)
================================ */
function shareWhatsApp() {
  const c = crop.value;
  const i = irrigation.value;
  const d = district.value || "Pune";
  const sum = Number(sumInsured.value) || 10000;
  const rate = districtPremiumRates[d] || 2;
  const premiumAmt = (sum * rate / 100).toFixed(0);
  const s = irrigationSubsidy[i];

  const msg = `
🌾 *AgriNext – Government Scheme Advisory*

📌 *Scheme Information*
Crop: ${c}
Irrigation: ${i}
Scheme: ${s.scheme}
Subsidy: ${s.percent}%
Scheme Type: Centrally Sponsored

🛡 *Crop Insurance (PMFBY)*
District: ${d}
Sum Insured: ₹${sum}
Premium Rate: ${rate}%
Farmer Premium: ₹${premiumAmt}

✅ *Eligibility Conditions*
• Small / Marginal / Medium Farmer
• Minimum 0.5 Acre agricultural land
• Valid land record (7/12 / Patta)
• Aadhaar linked bank account

📄 *Required Documents*
• Aadhaar Card
• Land Record (7/12 / Patta)
• Bank Passbook
• Passport Size Photograph

🌾 *Advisory Note*
${c} crop with ${i} irrigation is suitable in ${d} district.
PMFBY insurance is recommended for risk protection.

🔗 Apply here: https://pmksy.gov.in

(Generated by AgriNext – Educational Project)
`;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}


function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}

// phone no
const phoneNumber = "18001801551";

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// 📞 Call handler
document.getElementById("callSupport").addEventListener("click", () => {
  if (!isMobile()) {
    alert("Calling is supported on mobile devices only.");
    return;
  }

  const confirmCall = confirm("Do you want to call Farmer Support?");
  if (confirmCall) {
    window.location.href = `tel:${phoneNumber}`;
  }
});

function showGovAlert(message) {
  document.getElementById("govAlertMsg").innerText = message;
  document.getElementById("govAlert").style.display = "flex";
}

function closeGovAlert() {
  document.getElementById("govAlert").style.display = "none";
}


function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}

