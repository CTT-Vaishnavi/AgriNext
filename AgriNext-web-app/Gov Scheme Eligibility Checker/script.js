let LANG = {};
let CURRENT_LANG = "en";

// Load language file
async function loadLanguage() {
    const res = await fetch("schemes.json");
    LANG = await res.json();
}
loadLanguage();

// Language switch
function changeLanguage() {
    CURRENT_LANG = document.getElementById("languageSwitcher").value;
    const L = LANG[CURRENT_LANG];

    document.getElementById("title").innerText = L.title;
    document.getElementById("lbl_state").innerText = L.select_state;
    document.getElementById("lbl_crop").innerText = L.select_crop;
    document.getElementById("lbl_category").innerText = L.category;
    document.getElementById("lbl_land").innerText = L.land;
    document.getElementById("btn_check").innerText = L.check_button;
}

// Load schemes
async function checkEligibility() {
    const L = LANG[CURRENT_LANG];
    const state = document.getElementById("state").value;
    const crop = document.getElementById("crop").value;
    const category = document.getElementById("category").value;
    const land = parseFloat(document.getElementById("land").value);

    const res = await fetch("schemes.json");
    const schemes = await res.json();

    let eligible = [];
    schemes.forEach(s => {
        if (
            (s.states.includes(state) || s.states.includes("All")) &&
            (s.crops.includes(crop) || s.crops.includes("All")) &&
            (s.categories.includes(category) || s.categories.includes("All")) &&
            land >= s.land_min && land <= s.land_max
        ) eligible.push(s);
    });

    const result = document.getElementById("result");
    result.innerHTML = "";
    document.getElementById("eligible_title").innerText = L.eligible_schemes;

    eligible.forEach((s, i) => {
        result.innerHTML += `
        <div class="scheme-card">

            <div class="scheme-icon">
                <lottie-player 
                    src="https://assets6.lottiefiles.com/packages/lf20_x62chJ.json"  
                    background="transparent"
                    speed="1"
                    style="width:60px;height:60px;"
                    loop autoplay>
                </lottie-player>
            </div>

            <h3>${s.name}</h3>

            <div class="details-box" id="details-${i}">
                <p><b>Benefit:</b> ${s.benefit}</p>
                <p><b>Documents:</b> ${s.docs.join(", ")}</p>
                <p><b>Apply:</b> ${s.apply}</p>
            </div>

            <div class="action-buttons">
                <button class="details-btn" onclick="toggleDetails(${i})">📝 View Details</button>
                <button class="apply-btn" onclick="window.open('${s.apply}', '_blank')">🔥 Apply Now</button>
                <button class="pdf-btn" onclick="downloadPDF('${s.name}', '${s.benefit}')">📄 PDF</button>
            </div>

        </div>`;
    });
}

// Slide details
function toggleDetails(id) {
    document.getElementById(`details-${id}`).classList.toggle("open");
}

// PDF generator
function downloadPDF(name, benefit) {
    alert("PDF Download Coming Soon!");
}
