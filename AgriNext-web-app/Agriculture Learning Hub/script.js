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



// ------------------ 210 Video List ---------------------
const videos = [
    { 
      title: "Spray Best Practices", 
      cat: "spray", 
      link: "https://youtu.be/s9mbk9_1cOU", 
      desc: "योग्य फवारणी कशी करावी?",
      img: "./img/फवारणी करण्याच्या आधुनिक पद्धती.png"
    },

    { 
      title: "Irrigation Tips", 
      cat: "irrigation", 
      link: "https://youtu.be/LYCwvZvyKas", 
      desc: "पाणी व्यवस्थापनाची योग्य पद्धत.",
      img: "./img/पाणी व्यवस्थापनाची योग्य पद्धत.png"
    },

    { 
      title: "Crop Spacing", 
      cat: "spacing", 
      link: "https://youtu.be/IcKrLwFXwz4", 
      desc: "उत्पादन वाढवण्यासाठी योग्य अंतर.",
      img: "./img/योग्य फवारणी कशी करावी.png"
    },

    {
  title: "Organic Pest Control",
  cat: "organic",
  link: "https://youtu.be/CwupSGuJezs",
  desc: "दशपर्णी & जीवामृत वापर.",
  img: "https://image.pollinations.ai/prompt/Dashparni%20organic%20pest%20spray%20traditional%20Indian%20farming%20AI%20generated"
},

    { 
      title: "Disease Management", 
      cat: "disease", 
      link: "https://youtu.be/zIqmyIE_nI4", 
      desc: "टोमॅटो रोग ओळख & उपाय.",
      img: "https://image.pollinations.ai/prompt/Tomato%20plant%20disease%20leaf%20closeup%20AI%20generated%20ultra%20realistic"

    },
{
  title: "Spray Best Practices",
  cat: "spray",
  link: "https://youtu.be/s9mbk9_1cOU",
  desc: "योग्य फवारणी कशी करावी?",
  img: "./img/Spray Best Practices.png"
},

{
  title: "Irrigation Tips",
  cat: "irrigation",
  link: "https://youtu.be/LYCwvZvyKas",
  desc: "पाणी व्यवस्थापनाची योग्य पद्धत.",
  img:"https://image.pollinations.ai/prompt/Drip%20irrigation%20system%20in%20farmland%20water%20management%20AI%20generated"
},

{
  title: "Crop Spacing",
  cat: "spacing",
  link: "https://youtu.be/IcKrLwFXwz4",
  desc: "उत्पादन वाढवण्यासाठी योग्य अंतर.",
  img: "https://image.pollinations.ai/prompt/Animated%20cartoon%20farm%20Crop%20Spacing%20guidelines%20top%20view%20rows%20of%20plants%20AI%20generated"
},

{
  title: "Organic Pest Control",
  cat: "organic",
  link: "https://youtu.be/CwupSGuJezs",
  desc: "दशपर्णी & जीवामृत वापर.",
  img: "https://image.pollinations.ai/prompt/Animated%20cartoon%20Organic%20Pest%20Control%20Jeevamrut%20Dashparni%20modern%20farming%20AI%20generated"
},

{
  title: "Disease Management",
  cat: "disease",
  link: "https://youtu.be/AQD-YM85ssc",
  desc: "टोमॅटो रोग ओळख & उपाय.",
  img: "https://image.pollinations.ai/prompt/Animated%20cartoon%20Tomato%20Disease%20Management%20leaf%20infection%20treatment%20AI%20generated"
}
,



// ✔ NEW SPRAY CARDS
{
  title: "Advanced Spray Techniques",
  cat: "spray",
  link: "https://youtube.com/shorts/j_GwXi2cgxQ?si=uwX8vUDPws0zSzDb",
  desc: "फवारणी करण्याच्या आधुनिक पद्धती.",
  img: "https://image.pollinations.ai/prompt/3D%20Advanced%20Pesticide%20Spray%20Techniques%20farmer%20sprayer%20modern%20agriculture"
},

{
  title: "Combination Spray Guide",
  cat: "spray",
  link: "https://youtu.be/hmpTDfqRi_M",
  desc: "एकत्र फवारणी योग्य आहे का?",
  img: "https://image.pollinations.ai/prompt/3D%20Combination%20Spray%20Guide%20mixing%20pesticides%20safe%20agriculture"
},

{
  title: "Correct Nozzle Usage",
  cat: "spray",
  link: "https://youtu.be/qV3wg8iP1lk",
  desc: "नोजलचे प्रकार आणि उपयोग.",
  img: "https://image.pollinations.ai/prompt/3D%20Spray%20Nozzle%20Types%20and%20Usage%20agriculture%20closeup"
},

{
  title: "Pesticide Safety Marathi",
  cat: "spray",
  link: "https://youtu.be/EPUdnm07pCk",
  desc: "फवारणी करताना घ्यायची काळजी.",
  img: "https://image.pollinations.ai/prompt/3D%20Pesticide%20Safety%20Marathi%20protective%20gear%20mask%20gloves%20spray"
},

{
  title: "Drone Spraying Agriculture",
  cat: "spray",
  link: "https://youtu.be/b_f3dzCbqyU",
  desc: "ड्रोनद्वारे फवारणी.",
  img: "https://image.pollinations.ai/prompt/3D%20Agriculture%20Drone%20Spraying%20pesticide%20field%20realistic"
},
{
  title: "Spray Timing Tips",
  cat: "spray",
  link: "https://youtu.be/4Af9bxzwn2M",
  desc: "फवारणीसाठी योग्य वेळ.",
  img: "https://image.pollinations.ai/prompt/3D%20Best%20Time%20for%20Pesticide%20Spraying%20sunrise%20field%20agriculture"
},
{
  title: "Mixing Pesticides Safely",
  cat: "spray",
  link: "https://youtu.be/u_L_jwPrjms",
  desc: "किटकनाशके सुरक्षितपणे मिसळा.",
  img: "https://image.pollinations.ai/prompt/3D%20Safe%20Pesticide%20Mixing%20farmer%20measuring%20chemicals%20agriculture"
},
{
  title: "Spray Equipment Maintenance",
  cat: "spray",
  link: "https://youtu.be/24kR8TjLTZA",
  desc: "फवारणी उपकरणांची देखभाल.",
  img: "https://image.pollinations.ai/prompt/3D%20Pesticide%20Spray%20Equipment%20Maintenance%20cleaning%20repair%20agriculture"
},
{
  title: "Eco-Friendly Spraying",
  cat: "spray",
  link: "https://youtu.be/Rg37qVOYlMc",
  desc: "पर्यावरणपूरक फवारणी पद्धती.",
  img: "https://image.pollinations.ai/prompt/3D%20Eco-Friendly%20Pesticide%20Spraying%20natural%20methods%20agriculture"
},



// ✔ IRRIGATION CARDS
{
  title: "Smart Irrigation Guide",
  cat: "irrigation",
  link: "https://youtu.be/d20VQ958SCQ", 
  desc: "स्मार्ट पाणी व्यवस्थापन.",
  img: "https://image.pollinations.ai/prompt/3D%20smart%20irrigation%20system%20automated%20agriculture%20sensor%20based%20water%20supply%20ultra%20realistic%20render"
},

{
  title: "Onion Irrigation Schedule",
  cat: "irrigation",
  link: "https://youtu.be/kXzOUaKdt9w",
  desc: "कांदा पिकाला पाणी देण्याचा तक्ता.",
  img: "https://image.pollinations.ai/prompt/3D%20onion%20crop%20irrigation%20system%20drip%20lines%20field%20ultra%20high%20detail"
},

{
  title: "Sugarcane Water Management",
  cat: "irrigation",
  link: "https://youtu.be/65HFDHWWH6c",
  desc: "उसाला पाणी कसे द्यावे?",
  img: "https://image.pollinations.ai/prompt/3D%20sugarcane%20field%20water%20management%20irrigation%20channels%20hyper%20realistic%20agriculture"
},

{
  title: "Rice Irrigation Method",
  cat: "irrigation",
  link: "https://youtu.be/eZ4A8iXvTZk",
  desc: "भात पिकाचे पाणी व्यवस्थापन.",
  img: "https://image.pollinations.ai/prompt/3D%20rice%20paddy%20irrigation%20flooding%20water%20channels%20agriculture%20cinematic%20render"
},

{
  title: "Drip vs Flood Irrigation",
  cat: "irrigation",
  link: "https://youtu.be/QwpkBHrc8wI",
  desc: "ठिबक VS पारंपरिक पाणी देणे.",
  img: "https://image.pollinations.ai/prompt/3D%20drip%20irrigation%20vs%20flood%20irrigation%20comparison%20split%20screen%20agriculture%20ultra%20realistic"
},
{
  title: "Wheat Irrigation Tips",
  cat: "irrigation",
  link: "https://youtu.be/h9u3XRkxOj0",
  desc: "गहू पिकासाठी पाणी व्यवस्थापन.",
  img: "https://image.pollinations.ai/prompt/3D%20wheat%20crop%20irrigation%20system%20field%20top%20view%20agriculture%20realistic"
},
{ 
  title: "Vegetable Watering Guide",
  cat: "irrigation",
  link: "https://youtu.be/JXdE8c55dtQ",
  desc: "भाजीपाला पिकांसाठी पाणी देण्याचे तंत्र.",
  img: "https://image.pollinations.ai/prompt/3D%20vegetable%20garden%20watering%20guide%20sprinkler%20system%20ultra%20realistic"
},
{
  title: "Fruit Orchard Irrigation",
  cat: "irrigation",
  link: "https://youtu.be/U7im-p28MCE",
  desc: "फळबागेतील पाणी व्यवस्थापन.",
  img: "https://image.pollinations.ai/prompt/3D%20fruit%20orchard%20irrigation%20drip%20system%20trees%20agriculture%20realistic"
},  
{
  title: "Legume Crop Watering",
  cat: "irrigation",
  link: "https://youtu.be/ExaNqzjHn0s",
  desc: "डाळीपिकांसाठी पाणी देण्याचे तंत्र.",
  img: "https://image.pollinations.ai/prompt/3D%20realistic%20legume%20crop%20irrigation%20water%20management%20beans%20pulses%20field%20agriculture"
},
{
  title: "Tomato Irrigation Schedule",
  cat: "irrigation",
  link: "https://youtu.be/rChYQaYjLRM",
  desc: "टोमॅटो पिकासाठी पाणी देण्याचा तक्ता.",
  img: "https://image.pollinations.ai/prompt/3D%20tomato%20crop%20irrigation%20schedule%20drip%20system%20field%20ultra%20realistic"
},




// ✔ SPACING CARDS
  {
    title: "Crop Spacing Detailed Guide",
    cat: "spacing",
    link: "https://youtu.be/ce1YGZIzWss", // Better updated Marathi video
    desc: "लागवडीचे अंतर कसे ठरवावे?",
    img: "https://image.pollinations.ai/prompt/3D%20crop%20spacing%20agriculture%20field%20top%20view%20rows%20planting%20guideline%20ultra%20realistic"
  },

  {
    title: "Brinjal Spacing",
    cat: "spacing",
    link: "https://youtu.be/1F226izViYo",
    desc: "वांगे पिकाचे अंतर.",
    img: "https://image.pollinations.ai/prompt/3D%20brinjal%20plant%20spacing%20eggplant%20field%20top%20view%20agriculture%20render"
  },

  {
    title: "Chilli Spacing",
    cat: "spacing",
    link: "https://youtu.be/2swQHnLcANo",
    desc: "मिरची लागवडीचे अंतर.",
    img: "https://image.pollinations.ai/prompt/3D%20chilli%20crop%20spacing%20planting%20rows%20agriculture%20ultra%20realistic"
  },

  {
    title: "Cotton Planting Distance",
    cat: "spacing",
    link: "https://youtu.be/OIwuAniWfUU",
    desc: "कापूस लागवडीचे अंतर.",
    img: "https://image.pollinations.ai/prompt/3D%20cotton%20plant%20spacing%20field%20top%20angle%20agriculture%20cinematic%20render"
  },

  {
    title: "Maize Planting Guide",
    cat: "spacing",
    link: "https://youtu.be/MBc-dQtM2A0",
    desc: "मका लागवडीचे अंतर.",
    img: "https://image.pollinations.ai/prompt/3D%20maize%20crop%20spacing%20corn%20field%20rows%20planting%20agriculture%20realistic"
  },


// ✔ ORGANIC CARDS
  {
    title: "Organic Farming Start",
    cat: "organic",
    link: "https://youtu.be/OlM5Pm45_G8", // Better & clearer video
    desc: "सेंद्रिय शेतीची सुरुवात.",
    img: "https://image.pollinations.ai/prompt/3D%20organic%20farming%20startup%20natural%20farming%20soil%20preparation%20farmer%20field%20ultra%20realistic"
  },

  {
    title: "Jivamrut Full Tutorial",
    cat: "organic",
    link: "https://youtu.be/ABISozMnYTs",
    desc: "जीवामृत तयार करण्याची पद्धत.",
    img: "https://image.pollinations.ai/prompt/3D%20jivamrut%20preparation%20organic%20fertilizer%20farmer%20mixing%20cow%20dung%20agriculture%20realistic"
  },

  {
    title: "Compost Making at Home",
    cat: "organic",
    link: "https://youtu.be/THBd-AId4os", // Updated better compost video
    desc: "घरच्या घरी कंपोस्ट.",
    img: "https://image.pollinations.ai/prompt/3D%20home%20compost%20making%20organic%20waste%20compost%20bin%20garden%20ultra%20realistic"
  },

  {
    title: "Organic Pest Solutions",
    cat: "organic",
    link: "https://youtu.be/Rg37qVOYlMc", // Stronger, scientific Marathi guide
    desc: "सेंद्रिय किटकनाशके.",
    img: "https://image.pollinations.ai/prompt/3D%20organic%20pest%20control%20natural%20pesticide%20neem%20spray%20agriculture%20realistic"
  },

  {
    title: "Vermicompost Benefits",
    cat: "organic",
    link: "https://youtu.be/9bxwF9K9Zt8",
    desc: "वर्मी कंपोस्टचे फायदे.",
    img: "https://image.pollinations.ai/prompt/3D%20vermicompost%20earthworm%20composting%20organic%20fertilizer%20agriculture%20realistic"
  },

  {
    title: "Neem Extract Preparation",
    cat: "organic",
    link: "https://youtu.be/M4zA8MKLcLU",
    desc: "निंबोळी अर्क तयार करण्याची पद्धत.",
    img: "https://image.pollinations.ai/prompt/3D%20neem%20extract%20preparation%20organic%20pesticide%20farmer%20mixing%20agriculture%20realistic"
  },
  {
    title: "Biofertilizer Usage Guide",
    cat: "organic",
    link: "https://youtu.be/5HSu8EhSAnU",
    desc: "जैवखते कसे वापरावे?",
    img: "https://image.pollinations.ai/prompt/3D%20biofertilizer%20usage%20guide%20benefits%20plant%20growth%20agriculture%20realistic"
  },

  {
    title: "Green Manure Crops",
    cat: "organic",
    link: "https://youtu.be/EYgJ8nFMr_M",
    desc: "हरित खते पिके आणि फायदे.",
    img: "https://image.pollinations.ai/prompt/3D%20green%20manure%20crops%20field%20soil%20enrichment%20agriculture%20realistic"
  },
  {
    title: "Crop Rotation Benefits",
    cat: "organic",
    link: "https://youtu.be/Ax9K7GsyqkQ",
    desc: "पिकांची फेरलागवड आणि फायदे.",
    img: "https://image.pollinations.ai/prompt/3D%20crop%20rotation%20benefits%20field%20diversity%20soil%20health%20agriculture%20realistic"
  },



// ✔ DISEASE CARDS
  {
    title: "Tomato Disease Control",
    cat: "disease",
    link: "https://youtu.be/6MlyuDQk2mo",
    desc: "टोमॅटो लीफ कर्ल उपाय.",
    img: "https://image.pollinations.ai/prompt/3D%20Tomato%20Leaf%20Curl%20Disease%20control%20plant%20infection%20agriculture%20ultra%20realistic"
  },

  {
    title: "Powdery Mildew Cure",
    cat: "disease",
    link: "https://youtu.be/9eq6ehakatE", // Better HD video
    desc: "पावडरी मिल्ड्यू उपाय.",
    img: "https://image.pollinations.ai/prompt/3D%20Powdery%20Mildew%20on%20leaves%20white%20fungus%20disease%20plant%20realistic%20agriculture"
  },

  {
    title: "Bacterial Blight Solution",
    cat: "disease",
    link: "https://youtu.be/SN582q4Mc9g",
    desc: "बॅक्टेरियल ब्लाईट उपाय.",
    img: "https://image.pollinations.ai/prompt/3D%20Bacterial%20Blight%20plant%20disease%20brown%20spots%20leaves%20agriculture%20realistic"
  },

  {
    title: "Fungal Rot Prevention",
    cat: "disease",
    link: "https://youtu.be/qMo9ftZnxFM",
    desc: "बुरशीमुळे रोग प्रतिबंध.",
    img: "https://image.pollinations.ai/prompt/3D%20Fungal%20Rot%20plant%20root%20rot%20fruit%20rot%20disease%20agriculture%20realistic"
  },

  {
    title: "Virus Disease Management",
    cat: "disease",
    link: "https://youtu.be/uqj4yKw3gD0", // Better virus management video
    desc: "व्हायरस ओळख.",
    img: "https://image.pollinations.ai/prompt/3D%20Plant%20Virus%20disease%20mosaic%20virus%20leaf%20patterns%20realistic%20agriculture"
  },
  {
    title: "Root Knot Nematode Cure",
    cat: "disease",
    link: "https://youtu.be/D68Zj1Vdghc",
    desc: "रूट नॉट नेमाटोड उपाय.",
    img: "https://image.pollinations.ai/prompt/3D%20Root%20Knot%20Nematode%20plant%20roots%20galls%20disease%20agriculture%20realistic"
  },
  {
    title: "Leaf Spot Disease Control",
    cat: "disease",
    link: "https://youtu.be/IvnhzlRXvCo",
    desc: "लीफ स्पॉट रोग नियंत्रण.",
    img: "https://image.pollinations.ai/prompt/3D%20Leaf%20Spot%20Disease%20plant%20leaves%20brown%20spots%20disease%20agriculture%20realistic"
  },
  {
    title: "Damping Off Prevention",
    cat: "disease",
    link: "https://youtu.be/I0el94lBpvQ",
    desc: "डॅम्पिंग ऑफ प्रतिबंध.",
    img: "https://image.pollinations.ai/prompt/3D%20Damping%20Off%20seedlings%20fungal%20disease%20prevention%20agriculture%20realistic"
  },
  {
    title: "Anthracnose Disease Solution",
    cat: "disease",
    link: "https://youtu.be/gCiddE1LXN4",
    desc: "अँथ्रॅक्नोज रोग उपाय.",
    img: "https://image.pollinations.ai/prompt/3D%20Anthracnose%20Disease%20plant%20fruit%20dark%20lesions%20disease%20agriculture%20realistic"

  },
// ---------------- Fertilizer Cards ----------------

  {
    title: "Fertilizer Science Explained",
    cat: "fertilizer",
    link: "https://youtu.be/PGDmoTBO3QM",
    desc: "खतांमागील विज्ञान समजून घ्या.",
    img: "https://image.pollinations.ai/prompt/3D%20realistic%20Fertilizer%20Science%20granules%20plants%20soil%20nutrient%20cycle"
  },

  {
    title: "NPK Full Explanation",
    cat: "fertilizer",
    link: "https://youtu.be/ARPp0MCcx8I",
    desc: "NPK म्हणजे काय? कधी आणि कसे द्यावे?",
    img: "https://image.pollinations.ai/prompt/3D%20NPK%20fertilizer%20explainer%20Nitrogen%20Phosphorus%20Potassium%20bag%20illustration"
  },

  {
    title: "How to Apply DAP",
    cat: "fertilizer",
    link: "https://youtu.be/stAuSpB6XMA",
    desc: "DAP योग्य पद्धतीने कसे वापरावे?",
    img: "https://image.pollinations.ai/prompt/3D%20DAP%20fertilizer%20granules%20farmer%20hand%20application%20soil"
  },

  {
    title: "Fertilizer Schedule Guide",
    cat: "fertilizer",
    link: "https://youtu.be/FEm5rE9QZJU",
    desc: "खतांच्या तक्त्यानुसार योग्य वापर.",
    img: "https://image.pollinations.ai/prompt/3D%20fertilizer%20schedule%20guide%20calendar%20crop%20nutrition%20visual"
  },

  {
    title: "Micronutrient Deficiency",
    cat: "fertilizer",
    link: "https://youtu.be/iH5P325tjvA",
    desc: "झिंक, आयर्न, मॅग्नेशियमची कमतरता ओळखा.",
    img: "https://image.pollinations.ai/prompt/3D%20micronutrient%20deficiency%20leaves%20chlorosis%20zinc%20iron%20magnesium"
  },

  {
    title: "Urea Application Techniques",
    cat: "fertilizer",
    link: "https://youtu.be/ozU296EYYEk",
    desc: "युरिया देण्याची सर्वात सुरक्षित पद्धत.",
    img: "https://image.pollinations.ai/prompt/3D%20urea%20application%20technique%20farmer%20field%20granules"
  },

  {
    title: "Soil Fertility Boost Methods",
    cat: "fertilizer",
    link: "https://youtu.be/RivglUZxC-A",
    desc: "माती सुपीकता वाढवण्याचे उपाय.",
    img: "https://image.pollinations.ai/prompt/3D%20soil%20fertility%20boost%20organic%20inputs%20earth%20texture"
  },

  {
    title: "Liquid Fertilizer Guide",
    cat: "fertilizer",
    link: "https://youtu.be/_z4rJZmLK5Q",
    desc: "द्रवरूप खतांचा योग्य वापर.",
    img: "https://image.pollinations.ai/prompt/3D%20liquid%20fertilizer%20spray%20bottle%20agriculture%20plant%20growth"
  },

  {
    title: "Nutrient Uptake in Plants",
    cat: "fertilizer",
    link: "https://youtu.be/rjTxtsU2Xe4",
    desc: "वनस्पतींमध्ये पोषकद्रव्ये कशी शोषली जातात?",
    img: "https://image.pollinations.ai/prompt/3D%20nutrient%20uptake%20roots%20xylem%20phloem%20illustration"
  },

  {
    title: "Foliar Spray Fertilizer",
    cat: "fertilizer",
    link: "https://youtu.be/Z_O0uBK1ySE",
    desc: "फोलिअर फवारणीचा योग्य वापर.",
    img: "https://image.pollinations.ai/prompt/3D%20foliar%20spray%20fertilizer%20mist%20leaves%20sprayer"
  },

  {
    title: "Balanced Fertilizer Dosage",
    cat: "fertilizer",
    link: "https://youtu.be/jVpzpE-LekQ",
    desc: "प्रत्येक पिकासाठी योग्य खताचे प्रमाण.",
    img: "https://image.pollinations.ai/prompt/3D%20balanced%20fertilizer%20dosage%20NPK%20ratio%20chart%20agriculture"
  },

  {
    title: "Organic vs Chemical Fertilizer",
    cat: "fertilizer",
    link: "https://youtu.be/5msgiBeoKjI",
    desc: "सेंद्रिय vs रासायनिक खत — तुलना.",
    img: "https://image.pollinations.ai/prompt/3D%20organic%20vs%20chemical%20fertilizer%20comparison%20plant%20growth"
  },

  {
    title: "Phosphorus Management",
    cat: "fertilizer",
    link: "https://youtu.be/x35p0r6i8hI",
    desc: "फॉस्फरस कधी आणि कसे द्यावे?",
    img: "https://image.pollinations.ai/prompt/3D%20phosphorus%20fertilizer%20granules%20roots%20absorption"
  },

  {
    title: "Potassium Deficiency Solutions",
    cat: "fertilizer",
    link: "https://youtu.be/ZMZah-Xj0R4",
    desc: "पोटॅशियम अभाव ओळख आणि उपाय.",
    img: "https://image.pollinations.ai/prompt/3D%20potassium%20deficiency%20leaf%20yellow%20brown%20edges%20realistic%20animated%20loop.webm"
  },
  {
    title: "Slow-Release Fertilizers",
    cat: "fertilizer",
    link: "https://youtu.be/nHrp3DlQkTo",
    desc: "हळू-प्रभावी खतांचे फायदे.",
    img: "https://image.pollinations.ai/prompt/3D%20slow%20release%20fertilizer%20polymer%20coated%20granules"},
    {
    title: "Soil pH and Fertilizer Use",
    cat: "fertilizer",
    link: "https://youtu.be/5_gYbLGiVMI",
    desc: "मातीचे pH आणि खतांचा वापर.",
    img: "https://image.pollinations.ai/prompt/3D%20soil%20pH%20testing%20kit%20fertilizer%20application%20agriculture"
  },
  {
    title: "Calcium and Magnesium in Soil",
    cat: "fertilizer",
    link: "https://youtu.be/YFC20mm9ZfQ",
    desc: "मातीतील कॅल्शियम आणि मॅग्नेशियमचे महत्त्व.",
    img: "https://image.pollinations.ai/prompt/3D%20calcium%20magnesium%20soil%20nutrients%20plant%20health"
  },
  {
    title: "Ammonium vs Nitrate Nitrogen",
    cat: "fertilizer",
    link: "https://youtu.be/3Jrlw0-ud40",
    desc: "अमोनियम vs नायट्रेट नायट्रोजन — काय फरक?",
    img: "https://image.pollinations.ai/prompt/3D%20ammonium%20nitrate%20nitrogen%20comparison%20plant%20nutrition"
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
