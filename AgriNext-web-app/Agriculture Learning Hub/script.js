// ------------- FILTER BUTTON SYSTEM ----------------
function filterVideos(category) {
    let cards = document.querySelectorAll(".card");
    let btns = document.querySelectorAll(".btn");

    btns.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    cards.forEach(card => {
        if (category === "all") card.classList.remove("hide");
        else card.classList.toggle("hide", !card.classList.contains(category));
    });
}



// ------------------ 200 Video List ---------------------
const videos = [
    { 
      title: "Spray Best Practices", 
      cat: "spray", 
      link: "https://youtu.be/Pe17zoW5Mvw?si=LnKuGeyVYHcLTyKT", 
      desc: "योग्य फवारणी कशी करावी?",
      img: "./img/फवारणी करण्याच्या आधुनिक पद्धती.png"
    },

    { 
      title: "Irrigation Tips", 
      cat: "irrigation", 
      link: "https://youtu.be/SCYxM4qR2Mk", 
      desc: "पाणी व्यवस्थापनाची योग्य पद्धत.",
      img: "./img/पाणी व्यवस्थापनाची योग्य पद्धत.png"
    },

    { 
      title: "Crop Spacing", 
      cat: "spacing", 
      link: "https://youtu.be/mfO5hbo_8pA", 
      desc: "उत्पादन वाढवण्यासाठी योग्य अंतर.",
      img: "./img/योग्य फवारणी कशी करावी.png"
    },

    { 
      title: "Organic Pest Control", 
      cat: "organic", 
      link: "https://youtu.be/gZrjzPnEoFU", 
      desc: "दशपर्णी & जीवामृत वापर.",
      img: "https://images.unsplash.com/photo-1598511727647-5c5e2ed2a8bb?w=600"
    },

    { 
      title: "Disease Management", 
      cat: "disease", 
      link: "https://youtu.be/XeE6uqPhB0M", 
      desc: "टोमॅटो रोग ओळख & उपाय.",
      img: "https://images.unsplash.com/photo-1625314867126-efd03fbc0dce?w=600"
    },
{
  title: "Spray Best Practices",
  cat: "spray",
  link: "https://youtu.be/E3XCTgYHvI8",
  desc: "योग्य फवारणी कशी करावी?",
  img: "./img/Spray Best Practices.png"
},

{
  title: "Irrigation Tips",
  cat: "irrigation",
  link: "https://youtu.be/SCYxM4qR2Mk",
  desc: "पाणी व्यवस्थापनाची योग्य पद्धत.",
  img: "./img/irrigation1.png"
},

{
  title: "Crop Spacing",
  cat: "spacing",
  link: "https://youtu.be/mfO5hbo_8pA",
  desc: "उत्पादन वाढवण्यासाठी योग्य अंतर.",
  img: "./img/spacing1.png"
},

{
  title: "Organic Pest Control",
  cat: "organic",
  link: "https://youtu.be/gZrjzPnEoFU",
  desc: "दशपर्णी & जीवामृत वापर.",
  img: "./img/organic1.png"
},

{
  title: "Disease Management",
  cat: "disease",
  link: "https://youtu.be/XeE6uqPhB0M",
  desc: "टोमॅटो रोग ओळख & उपाय.",
  img: "./img/disease1.png"
},



// ✔ NEW SPRAY CARDS
{
  title: "Advanced Spray Techniques",
  cat: "spray",
  link: "https://youtu.be/4InENcy9X9Y",
  desc: "फवारणी करण्याच्या आधुनिक पद्धती.",
  img: "./img/spray2.png"
},

{
  title: "Combination Spray Guide",
  cat: "spray",
  link: "https://youtu.be/va3C6v-gZGc",
  desc: "एकत्र फवारणी योग्य आहे का?",
  img: "./img/spray3.png"
},

{
  title: "Correct Nozzle Usage",
  cat: "spray",
  link: "https://youtu.be/UXnZp2IxSL0",
  desc: "नोजलचे प्रकार आणि उपयोग.",
  img: "./img/spray4.png"
},

{
  title: "Pesticide Safety Marathi",
  cat: "spray",
  link: "https://youtu.be/805JQe2RKqA",
  desc: "फवारणी करताना घ्यायची काळजी.",
  img: "./img/spray5.png"
},

{
  title: "Drone Spraying Agriculture",
  cat: "spray",
  link: "https://youtu.be/_lHMMJ9Zh-Y",
  desc: "ड्रोनद्वारे फवारणी.",
  img: "./img/spray6.png"
},



// ✔ IRRIGATION CARDS
{
  title: "Smart Irrigation Guide",
  cat: "irrigation",
  link: "https://youtu.be/8unQcjCDndY",
  desc: "स्मार्ट पाणी व्यवस्थापन.",
  img: "./img/irrigation2.png"
},

{
  title: "Onion Irrigation Schedule",
  cat: "irrigation",
  link: "https://youtu.be/p8mb-7eFjsI",
  desc: "कांदा पिकाला पाणी देण्याचा तक्ता.",
  img: "./img/irrigation3.png"
},

{
  title: "Sugarcane Water Management",
  cat: "irrigation",
  link: "https://youtu.be/dF4W07Yij7c",
  desc: "उसाला पाणी कसे द्यावे?",
  img: "./img/irrigation4.png"
},

{
  title: "Rice Irrigation Method",
  cat: "irrigation",
  link: "https://youtu.be/qkPBbHmHbx0",
  desc: "भात पिकाचे पाणी व्यवस्थापन.",
  img: "./img/irrigation5.png"
},

{
  title: "Drip vs Flood Irrigation",
  cat: "irrigation",
  link: "https://youtu.be/aUxvcgwJq5g",
  desc: "ठिबक VS पारंपरिक पाणी देणे.",
  img: "./img/irrigation6.png"
},



// ✔ SPACING CARDS
{
  title: "Crop Spacing Detailed Guide",
  cat: "spacing",
  link: "https://youtu.be/SSuC1qkFlmM",
  desc: "लागवडीचे अंतर कसे ठरवावे?",
  img: "./img/spacing2.png"
},

{
  title: "Brinjal Spacing",
  cat: "spacing",
  link: "https://youtu.be/EEiZX2-l8NI",
  desc: "वांगे पिकाचे अंतर.",
  img: "./img/spacing3.png"
},

{
  title: "Chilli Spacing",
  cat: "spacing",
  link: "https://youtu.be/9ky_PQNVuMc",
  desc: "मिरची लागवडीचे अंतर.",
  img: "./img/spacing4.png"
},

{
  title: "Cotton Planting Distance",
  cat: "spacing",
  link: "https://youtu.be/zDeu1jQida0",
  desc: "कापूस लागवडीचे अंतर.",
  img: "./img/spacing5.png"
},

{
  title: "Maize Planting Guide",
  cat: "spacing",
  link: "https://youtu.be/WgZuxV5K0pQ",
  desc: "मका लागवडीचे अंतर.",
  img: "./img/spacing6.png"
},



// ✔ ORGANIC CARDS
{
  title: "Organic Farming Start",
  cat: "organic",
  link: "https://youtu.be/r1rH3w7GxJw",
  desc: "सेंद्रिय शेतीची सुरुवात.",
  img: "./img/organic2.png"
},

{
  title: "Jivamrut Full Tutorial",
  cat: "organic",
  link: "https://youtu.be/i2ZccqhzyA8",
  desc: "जीवामृत तयार करण्याची पद्धत.",
  img: "./img/organic3.png"
},

{
  title: "Compost Making at Home",
  cat: "organic",
  link: "https://youtu.be/OlnQXd1tsiE",
  desc: "घरच्या घरी कंपोस्ट.",
  img: "./img/organic4.png"
},

{
  title: "Organic Pest Solutions",
  cat: "organic",
  link: "https://youtu.be/QBMHuV7Ef7A",
  desc: "सेंद्रिय किटकनाशके.",
  img: "./img/organic5.png"
},

{
  title: "Vermicompost Benefits",
  cat: "organic",
  link: "https://youtu.be/3XhxVhFHzkw",
  desc: "वर्मी कंपोस्टचे फायदे.",
  img: "./img/organic6.png"
},



// ✔ DISEASE CARDS
{
  title: "Tomato Disease Control",
  cat: "disease",
  link: "https://youtu.be/5UbSSjucWTk",
  desc: "टोमॅटो लीफ कर्ल उपाय.",
  img: "./img/disease2.png"
},

{
  title: "Powdery Mildew Cure",
  cat: "disease",
  link: "https://youtu.be/pT8v0dLZQkk",
  desc: "पावडरी मिल्ड्यू उपाय.",
  img: "./img/disease3.png"
},

{
  title: "Bacterial Blight Solution",
  cat: "disease",
  link: "https://youtu.be/dp79Kla5J1U",
  desc: "बॅक्टेरियल ब्लाईट उपाय.",
  img: "./img/disease4.png"
},

{
  title: "Fungal Rot Prevention",
  cat: "disease",
  link: "https://youtu.be/cp0X-80nCYo",
  desc: "बुरशीमुळे रोग प्रतिबंध.",
  img: "./img/disease5.png"
},

{
  title: "Virus Disease Management",
  cat: "disease",
  link: "https://youtu.be/1j1gVxI9WNE",
  desc: "व्हायरस ओळख.",
  img: "./img/disease6.png"
},
// ---------------- Fertilizer Cards ----------------

{
  title: "Fertilizer Science Explained",
  cat: "fertilizer",
  link: "https://youtu.be/h7GFxSxGfCs",
  desc: "खतांमागील विज्ञान समजून घ्या.",
  img: "./img/fertilizer1.png"
},

{
  title: "NPK Full Explanation",
  cat: "fertilizer",
  link: "https://youtu.be/wu79DbDeihQ",
  desc: "NPK म्हणजे काय? कधी आणि कसे द्यावे?",
  img: "./img/fertilizer2.png"
},

{
  title: "How to Apply DAP",
  cat: "fertilizer",
  link: "https://youtu.be/FU4Ys4-SRpo",
  desc: "DAP योग्य पद्धतीने कसे वापरावे?",
  img: "./img/fertilizer3.png"
},

{
  title: "Fertilizer Schedule Guide",
  cat: "fertilizer",
  link: "https://youtu.be/rBTtPlqvGjY",
  desc: "खतांच्या तक्त्यानुसार योग्य वापर.",
  img: "./img/fertilizer4.png"
},

{
  title: "Micronutrient Deficiency",
  cat: "fertilizer",
  link: "https://youtu.be/E6r8MqFQbOM",
  desc: "झिंक, आयर्न, मॅग्नेशियमची कमतरता ओळखा.",
  img: "./img/fertilizer5.png"
},

{
  title: "Urea Application Techniques",
  cat: "fertilizer",
  link: "https://youtu.be/V8XjcsM_8ck",
  desc: "युरिया देण्याची सर्वात सुरक्षित पद्धत.",
  img: "./img/fertilizer6.png"
},

{
  title: "Soil Fertility Boost Methods",
  cat: "fertilizer",
  link: "https://youtu.be/a2H8TFLVYyo",
  desc: "माती सुपीकता वाढवण्याचे उपाय.",
  img: "./img/fertilizer7.png"
},

{
  title: "Liquid Fertilizer Guide",
  cat: "fertilizer",
  link: "https://youtu.be/dEF3uC9oaS8",
  desc: "द्रवरूप खतांचा योग्य वापर.",
  img: "./img/fertilizer8.png"
},

{
  title: "Nutrient Uptake in Plants",
  cat: "fertilizer",
  link: "https://youtu.be/Ek5ApX2HFqE",
  desc: "वनस्पतींमध्ये पोषकद्रव्ये कशी शोषली जातात?",
  img: "./img/fertilizer9.png"
},

{
  title: "Foliar Spray Fertilizer",
  cat: "fertilizer",
  link: "https://youtu.be/6vgRtUjUsEY",
  desc: "फोलिअर फवारणीचा योग्य वापर.",
  img: "./img/fertilizer10.png"
},

{
  title: "Balanced Fertilizer Dosage",
  cat: "fertilizer",
  link: "https://youtu.be/zOhtWQ3PEGo",
  desc: "प्रत्येक पिकासाठी योग्य खताचे प्रमाण.",
  img: "./img/fertilizer11.png"
},

{
  title: "Organic vs Chemical Fertilizer",
  cat: "fertilizer",
  link: "https://youtu.be/pKy0WHhkY4c",
  desc: "सेंद्रिय vs रासायनिक खत — तुलना.",
  img: "./img/fertilizer12.png"
},

{
  title: "Phosphorus Management",
  cat: "fertilizer",
  link: "https://youtu.be/nIm8A-7BZAw",
  desc: "फॉस्फरस कधी आणि कसे द्यावे?",
  img: "./img/fertilizer13.png"
},

{
  title: "Potassium Deficiency Solutions",
  cat: "fertilizer",
  link: "https://youtu.be/1hWMVgyT5yA",
  desc: "पोटॅशियम अभाव ओळख आणि उपाय.",
  img: "./img/fertilizer14.png"
},

{
  title: "Slow-Release Fertilizers",
  cat: "fertilizer",
  link: "https://youtu.be/LqlM9NGp8U0",
  desc: "हळू-प्रभावी खतांचे फायदे.",
  img: "./img/fertilizer15.png"
},

];


    // ------------ YOUR FULL LIST CONTINUES --------------
    // प्रत्येक video खालील format मध्ये add कर:
    // {
    //   title: "",
    //   cat: "",
    //   link: "",
    //   desc: "",
    //   img: "image_url_here"
    // }








// -------------------- AUTO CARD GENERATOR -------------------
const container = document.getElementById("videoContainer");

videos.forEach(video => {
    
    const card = document.createElement("a");
    card.href = video.link;
    card.target = "_blank";
    card.classList = `card ${video.cat}`;

    card.innerHTML = `
        <div class="thumbnail" style="background-image:url('${video.img}')"></div>
        <h2>${video.title}</h2>
        <p>${video.desc}</p>
    `;

    container.appendChild(card);
});



const buttons = document.querySelectorAll(".btn-filter");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});



// document.querySelectorAll(".btn-filter").forEach(btn => {
//     btn.addEventListener("click", function () {
//         let category = this.getAttribute("data-cat");

//         // active class update
//         document.querySelectorAll(".btn-filter").forEach(b => b.classList.remove("active"));
//         this.classList.add("active");

//         // card filter
//         document.querySelectorAll(".card").forEach(card => {
//             if (category === "all" || card.classList.contains(category)) {
//                 card.classList.remove("hide");
//             } else {
//                 card.classList.add("hide");
//             }
//         });
//     });
// });
