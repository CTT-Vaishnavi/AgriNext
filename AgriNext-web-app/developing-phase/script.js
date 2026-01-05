
/* ✅ FIXED WORKING IMAGE LINKS */
const cropImages = {
  Wheat: "image/gau.png",
  Rice: "image/bat.png",
  Cotton: "image/kapur.png",
  Soybean: "image/soyabin.png",
  Sugarcane: "image/us.png",
  Maize: "image/makka.png",
  Jowar: "image/javari.png",
  Bajra: "image/bajra.png",
  Turmeric: "image/hald.png",
  Onion: "image/kanda.png"
};


/* LANGUAGE PACK */
const langText={
en:{district:"DISTRICT",crop:"CROP",soil:"SOIL",area:"AREA",
fertilizer:"Recommended Fertilizer",tips:"Detailed Tips (35 lines)",
buyTitle:"Buy Fertilizers Online",buyBtn:"🛒 Click Here to Buy from AgriBegri",
yield:"Expected Yield (per acre)",cost:"Estimated Fertilizer Cost (per acre)"},
mr:{district:"जिल्हा",crop:"पीक",soil:"माती",area:"शेती क्षेत्र",
fertilizer:"शिफारस केलेले खत",tips:"तपशीलवार सूचना (३५ मुद्दे)",
buyTitle:"ऑनलाईन खत खरेदी करा",buyBtn:"🛒 येथे क्लिक करा - AgriBegri",
yield:"अपेक्षित उत्पादन (प्रति एकर)",cost:"अंदाजे खत खर्च (प्रति एकर)"},
hi:{district:"जिला",crop:"फसल",soil:"मिट्टी",area:"खेती क्षेत्र",
fertilizer:"अनुशंसित उर्वरक",tips:"विस्तृत सुझाव (35 लाइन)",
buyTitle:"ऑनलाइन उर्वरक खरीदें",buyBtn:"🛒 यहाँ क्लिक करें - AgriBegri",
yield:"अपेक्षित उपज (प्रति एकड़)",cost:"अनुमानित उर्वरक लागत (प्रति एकड़)"}
};

/* LONG TIPS */
const longTips={
Wheat:`Seed treatment with fungicides to prevent diseases. Sow in rows 20-25 cm apart. Apply NPK 100:50:50 at sowing. Irrigate every 10-15 days. Harvest when grains are hard.`,
Rice:`Puddle the field and transplant seedlings. Maintain 5-10 cm water level. Apply NPK 80:40:40 in splits. Use pesticides for stem borer. Harvest at 50% grain moisture.`,
Cotton:`Sow in ridges 60-75 cm apart. Apply NPK 60:30:30. Control bollworms with Bt toxin. Pick bolls when they burst. Avoid waterlogging.`,
Soybean:`Inoculate seeds with Rhizobium. Sow in rows 30-45 cm apart. Apply NPK 20:40:20. Irrigate at flowering and pod filling. Harvest when pods turn yellow.`,
Sugarcane:`Plant setts in furrows 75 cm apart. Apply NPK 160:80:80. Irrigate every 7-10 days. Control borers with insecticides. Harvest after 12-18 months.`,
Maize:`Sow seeds 20-25 cm apart in rows 60 cm apart. Apply NPK 120:60:40. Irrigate at knee-high and tasseling stage. Control corn borer with neem oil. Harvest when cobs dry.`,
Jowar:`Sow in lines 30-45 cm apart. Apply NPK 80:40:40. Irrigate sparingly. Use resistant varieties for drought. Harvest when grains harden.`,
Bajra:`Broadcast or drill in rows 30 cm apart. Apply NPK 40:20:20. Irrigate at critical stages. Control downy mildew with fungicides. Harvest when panicles dry.`,
Turmeric:`Plant rhizomes in raised beds. Apply NPK 100:50:100. Mulch to retain moisture. Control rhizome rot with fungicides. Harvest after 8-9 months.`,
Onion:`Sow seeds in nursery, transplant after 6 weeks. Apply NPK 60:30:30. Irrigate regularly but avoid waterlogging. Control thrips with insecticides. Harvest when tops fall.`
};

/* YIELD DATA */
const yieldData={
Wheat:"20-25 quintals",Rice:"30-35 quintals",
Cotton:"8-12 quintals",Soybean:"15-20 quintals",
Sugarcane:"80-100 tons",Maize:"25-30 quintals",
Jowar:"15-20 quintals",Bajra:"10-15 quintals",
Turmeric:"20-25 quintals",Onion:"150-200 quintals"
};

/* COST DATA (per acre, approximate in INR) */
const costData={
Wheat:"₹5000",Rice:"₹6000",
Cotton:"₹7000",Soybean:"₹4000",
Sugarcane:"₹15000",Maize:"₹5500",
Jowar:"₹4500",Bajra:"₹3500",
Turmeric:"₹8000",Onion:"₹10000"
};

/* WEATHER DATA */
const weatherData={
Pune:"29°C | Good for Sugarcane",
Nashik:"Cool | Best for Grapes",
Aurangabad:"Dry | Cotton suitable",
Kolhapur:"Humid | Best for Rice",
Amravati:"Hot | Soybean suitable",
Jalgaon:"Dry | Cotton & Banana",
Sangli:"Good for Grapes"
};

/* APMC RATES */
const apmcRates={
Pune:"Sugarcane ₹3000/ton | Wheat ₹2400/q",
Nashik:"Grapes ₹55/kg | Wheat ₹2200/q",
Aurangabad:"Cotton ₹6800/q",
Kolhapur:"Rice ₹3200/q | Turmeric ₹140/kg",
Amravati:"Soybean ₹4600/q",
Jalgaon:"Banana ₹18/kg | Cotton ₹6600/q",
Sangli:"Grapes ₹40/kg | Turmeric ₹130/kg"
};

/* SUGGESTED CROPS */
const cropSuggest={
Pune:"Sugarcane, Wheat, Vegetables",
Nashik:"Grapes, Onion, Wheat",
Aurangabad:"Cotton, Bajra, Moong",
Kolhapur:"Rice, Sugarcane, Banana",
Amravati:"Soybean, Wheat, Cotton",
Jalgaon:"Cotton, Banana, Jowar",
Sangli:"Grapes, Turmeric, Sugarcane"
};

/* AUTO DETECT */
function detectLocation(){
document.getElementById("district").value="Pune";
document.getElementById("distText").innerHTML="Auto Detected District: Pune";
}

/* MAIN PREDICTION */
function predict(){
let crop=document.getElementById("crop").value;
let soil=document.getElementById("soil").value;
let area=document.getElementById("area").value;
let district=document.getElementById("district").value;
let lang=document.getElementById("lang").value;

if(!area)return alert("Enter farm area");

let fertilizer={
Wheat:"NPK 100:50:50",Rice:"NPK 80:40:40",
Cotton:"NPK 60:30:30",Soybean:"NPK 20:40:20",
Sugarcane:"NPK 160:80:80",Maize:"NPK 120:60:40",
Jowar:"NPK 80:40:40",Bajra:"NPK 40:20:20",
Turmeric:"NPK 100:50:100",Onion:"NPK 60:30:30"
}[crop];

let L=langText[lang];
let tips=longTips[crop];
let yield=yieldData[crop];
let cost=costData[crop];

/* UPDATE RESULT */
let text=`
<b>${L.district}:</b> ${district}<br>
<b>${L.crop}:</b> ${crop}<br>
<b>${L.soil}:</b> ${soil}<br>
<b>${L.area}:</b> ${area} acres<br><br>

<b>${L.fertilizer}:</b> ${fertilizer}<br>
<b>${L.yield}:</b> ${yield}<br>
<b>${L.cost}:</b> ${cost}<br><br>
<b>${L.tips}:</b><br>${tips}<br><br>

<div style='background:#ffe680;color:#000;padding:12px;border-radius:10px;'>
<b>${L.buyTitle}:</b><br>
<a href='https://agribegri.com/fertilizers' target='_blank'>
${L.buyBtn}</a></div>`;

document.getElementById("resultBox").innerHTML=text;
document.getElementById("resultBox").classList.add("show");

/* SHOW IMAGE */
let img=document.getElementById("cropImage");
img.src=cropImages[crop];
img.style.display="block";

/* IMAGE ERROR FIX */
img.onerror=()=>{ img.style.display="none"; console.log("Image failed"); };

document.getElementById("weatherBox").innerHTML=`<b>Weather:</b><br>${weatherData[district]}`;
document.getElementById("apmcBox").innerHTML=`<b>APMC Rates:</b><br>${apmcRates[district]}`;
document.getElementById("cropSuggestBox").innerHTML=`<b>Suggested Crops:</b><br>${cropSuggest[district]}`;

document.getElementById("tipsTricksBox").style.display="block";

speak(text,lang);
}

/* SPEAK */
function speak(text,lang){
if(document.getElementById("audioToggle").value==="off")return;
let msg=new SpeechSynthesisUtterance(text);
msg.lang=lang==="mr"?"mr-IN":lang==="hi"?"hi-IN":"en-US";
msg.rate=.9;
speechSynthesis.speak(msg);
}

/* VOICE INPUT */
function startVoice(){
let rec=new webkitSpeechRecognition();
rec.lang="mr-IN";

rec.onresult=e=>{
let sp=e.results[0][0].transcript;

/* VOICE TO CROP SELECTION */
if(sp.includes("गहू")) document.getElementById("crop").value="Wheat";
if(sp.includes("भात")) document.getElementById("crop").value="Rice";
if(sp.includes("कापूस")) document.getElementById("crop").value="Cotton";
if(sp.includes("सोयाबीन")) document.getElementById("crop").value="Soybean";
if(sp.includes("ऊस")) document.getElementById("crop").value="Sugarcane";
if(sp.includes("मक्का")) document.getElementById("crop").value="Maize";
if(sp.includes("ज्वारी")) document.getElementById("crop").value="Jowar";
if(sp.includes("बाजरी")) document.getElementById("crop").value="Bajra";
if(sp.includes("हळद")) document.getElementById("crop").value="Turmeric";
if(sp.includes("कांदा")) document.getElementById("crop").value="Onion";

predict();
};

rec.start();
}



// APPLY MODE ON LOAD (LocalStorage)
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

// TOGGLE THEME
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    // Save Mode
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}




// Load saved mode
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

// Toggle mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
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


function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}

