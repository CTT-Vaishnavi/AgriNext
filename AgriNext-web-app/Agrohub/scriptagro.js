/* -----------------------------
   Data (sample) — expand as needed
   ----------------------------- */
const data = {
  states: {
    "Maharashtra": {
  districts: {
    "Buldhana": { talukas: { "Buldana": {}, "Chikhli": {}, "Khamgaon": {}, "Nandura": {}, "Malkapur": {},"Mehkar": {}, "Motala": {}, "Deulgaon Raja": {}, "Lonar": {},"Sindkhed Raja": {}, "Jalgaon Jamod": {}, "Shegaon": {}}},
    "Pune": { talukas: { "Haveli": {}, "Baramati": {}, "Shirur": {}, "Bhor": {} } },
    "Amravati": { talukas: { "Amravati": {}, "Achalpur": {}, "Daryapur": {}, "Chikhaldara": {} } },
    "Parbhani": { talukas: { "Parbhani": {}, "Gangakhed": {}, "Purna": {}, "Sonpeth": {},"Jintur": {} } },
    "Nagpur": { talukas: { "Nagpur": {}, "Hingna": {}, "Umred": {}, "Katol": {} } },
    "Ahmednagar": { talukas: { "Ahmednagar": {}, "Shirdi": {}, "Karjat": {}, "Pathardi": {} } },
    "Thane": { talukas: { "Thane": {}, "Kalyan": {}, "Ulhasnagar": {}, "Murbad": {} } },
    "Nashik": { talukas: { "Nashik": {}, "Sinnar": {}, "Deolali": {}, "Igatpuri": {} } },
    "Chhatrapati Sambhajinagar": { talukas: { "Chhatrapati Sambhajinagar": {}, "Jalna": {}, "Aurangabad": {}, "Paithan": {} } },
    "Solapur": { talukas: { "Solapur": {}, "Akkalkot": {}, "Mohol": {}, "Pandharpur": {} } },
    "Raigad": { talukas: { "Alibag": {}, "Mangaon": {}, "Pen": {}, "Roha": {} } },
    "Wardha": { talukas: { "Wardha": {}, "Arvi": {}, "Deoli": {}, "Hinganghat": {}, "Samudrapur": {} } },
    "Yavatmal": { talukas: { "Yavatmal": {}, "Umarkhed": {}, "Pusad": {}, "Darwha": {} } },
    "Latur": { talukas: { "Latur": {}, "Ausa": {}, "Udgir": {}, "Nilanga": {} } },
    "Jalgaon": { talukas: { "Jalgaon": {}, "Bhusawal": {}, "Chalisgaon": {}, "Raver": {}, "Yawal": {} } },
    "Kolhapur": { talukas: { "Kolhapur": {}, "Panhala": {}, "Hatkanangale": {}, "Gadhinglaj": {} } },
    "Dhule": { talukas: { "Dhule": {}, "Shirpur": {}, "Sakri": {}, "Nardana": {} } },
    "Gondia": { talukas: { "Gondia": {}, "Tirora": {}, "Deori": {}, "Arjuni Morgaon": {} } },
    "Akola": { talukas: { "Akola": {}, "Balapur": {}, "Murtizapur": {}, "Barshitakli": {} } },
    "Beed": { talukas: { "Beed": {}, "Ashti": {}, "Kaij": {}, "Wadwani": {} } },
    "Bhandara": { talukas: { "Bhandara": {}, "Tumsar": {}, "Lakhani": {}, "Sakoli": {}}},
    "Chandrapur": { talukas: { "Chandrapur": {}, "Ballarpur": {}, "Rajura": {}, "Warora": {}}},
    "Gadchiroli": { talukas: { "Gadchiroli": {}, "Aheri": {}, "Etapalli": {}, "Chamorshi": {} }},
    "Jalna": { talukas: { "Jalna": {}, "Bhokardan": {}, "Badnapur": {}, "Ambad": {} } },
    "Mumbai": { talukas: { "Mumbai City": {}, "Mumbai Suburban": {}, "Andheri": {}, "Bandra": {} } },
    "Nanded": { talukas: { "Nanded": {}, "Deglur": {}, "Himayatnagar": {}, "Mukhed": {}}},
    "Dharashiv": { talukas: { "Dharashiv": {}, "Osmanabad": {}, "Lohara": {}, "Tuljapur": {}}},
    "Palghar": { talukas: { "Palghar": {}, "Dahanu": {}, "Vasai": {}, "Mokhada": {}}},
    "Ratnagiri": { talukas: { "Ratnagiri": {}, "Chiplun": {}, "Sangameshwar": {}, "Lanja": {}, "Guhagar": {} ,"Rajapur": {}, "Khed": {}}},
    "Sindhudurg": { talukas: { "Sindhudurg": {}, "Kankavli": {}, "Sawantwadi": {}, "Malvan": {}, "Vengurla": {}, "Dodamarg": {}, "Kudal": {}}},
    "Satara": { talukas: { "Satara": {}, "Karad": {}, "Wai": {}, "Phaltan": {}, "Khandala": {}, "Mahabaleshwar": {}, "Jaoli": {}, "Koregaon": {}}},
    "Washim": { talukas: { "Washim": {}, "Mangrulpir": {}, "Karanja": {}, "Manora": {}, "Risod": {}, "Shirala": {}, "Malegaon": {}}}
  }
},
    "Karnataka": {
      districts: {
        "Bengaluru Urban": { talukas: { "Bengaluru North": {}, "Bengaluru South": {} } },
        "Mysuru": { talukas: { "Mysuru": {}, "Nanjangud": {} } },
        "Dharwad": { talukas: { "Dharwad": {}, "Hubli": {} } }
      }
    }
  },
  dealers: {
    "Maharashtra": {
      "Buldhana": {
        "Buldana": [
          { name: "Buldana Agro Store", address: "Main Rd, Buldana - 443001", phone: "+91-9422000001", whatsapp: "+919422000001", lat:20.533, lon:75.174 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Buldana", phone: "+91-9422000002", whatsapp: "+919422000002", lat:20.536, lon:75.180 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Buldana", phone: "+91-9422000003", whatsapp: "+919422000003", lat:20.529, lon:75.168 },
          { name: "Agro World Buldana", address: "Station Rd, Buldana", phone: "+91-9422000004", whatsapp: "+919422000004", lat:20.534, lon:75.177 },
          { name: "Farmers' Choice", address: "Market Yard, Buldana", phone: "+91-9422000005", whatsapp: "+919422000005", lat:20.531, lon:75.172 },
          { name: "Krushi Mitra Buldana", address: "Near Petrol Pump, Buldana", phone: "+91-9422000006", whatsapp: "+919422000006", lat:20.535, lon:75.179 },
          { name: "Rural Agro Solutions", address: "Village Road, Buldana", phone: "+91-9422000007", whatsapp: "+919422000007", lat:20.530, lon:75.170 },
          { name: "Farm Fresh Fertilizers", address: "Opposite Temple, Buldana", phone: "+91-9422000008", whatsapp: "+919422000008", lat:20.532, lon:75.173 },
          { name: "Shree Agro Fert", address: "Plot 10, MIDC, Buldana", phone: "+91-9422000009", whatsapp: "+919422000009", lat:20.537, lon:75.181 },
          { name: "Krushi Dhan", address: "Near Railway Station, Buldana", phone: "+91-9422000010", whatsapp: "+919422000010", lat:20.528, lon:75.167 },
          {name: "Agro Plus", address: "Sector 5, Buldana - 443001", phone: "+91-9422000011", whatsapp: "+919422000011", lat:20.538, lon:75.182 },
          { name: "Fertilizer World", address: "Near City Center, Buldana", phone: "+91-9422000012", whatsapp: "+919422000012", lat:20.526, lon:75.165 },
          { name: "Krushi Vikas Kendra", address: "Opposite Post Office, Buldana", phone: "+91-9422000013", whatsapp: "+919422000013", lat:20.539, lon:75.183 },
          { name: "AgroTech Solutions", address: "Industrial Area, Buldana", phone: "+91-9422000014", whatsapp: "+919422000014", lat:20.525, lon:75.164 },
          { name: "Farmers' Hub", address: "Near Main Square, Buldana", phone: "+91-9422000015", whatsapp: "+919422000015", lat:20.540, lon:75.184 }

        ],
        "Chikhli": [{ name: "Chikhli Agro Supplies", address: "Station Rd, Chikhli - 443201", phone: "+91-9123456788", whatsapp: "+919123456788", lat:20.430, lon:76.180},
          { name: "Farmers' Fertilizer Hub", address: "Market Yard, Chikhli", phone: "+91-9123456787", whatsapp: "+919123456787", lat:20.432, lon:76.185},
          { name: "AgroTech Chikhli", address: "Near Petrol Pump, Chikhli", phone: "+91-9123456786", whatsapp: "+919123456786", lat:20.428, lon:76.178},
          { name: "Krushi Mitra", address: "Main Bazaar, Chikhli", phone: "+91-9123456785", whatsapp: "+919123456785", lat:20.431, lon:76.182 },
          { name: "Green Leaf Agro", address: "Opposite Bank, Chikhli", phone: "+91-9123456784", whatsapp: "+919123456784", lat:20.429, lon:76.179 },
          { name: "Rural Agro Center", address: "Village Road, Chikhli", phone: "+91-9123456783", whatsapp: "+919123456783", lat:20.433, lon:76.183 },
          { name: "Farm Fresh Fertilizers", address: "Near Temple, Chikhli", phone: "+91-9123456782", whatsapp: "+919123456782", lat:20.427, lon:76.177 }
        ],
      "Khamgaon": [{ name: "Khamgaon Agro Hub", address: "Market Rd, Khamgaon - 444303", phone: "+91-9123456781", whatsapp: "+919123456781", lat:20.430, lon:76.730 },
          { name: "Farmers' Choice Khamgaon", address: "Near Bus Stand, Khamgaon", phone: "+91-9123456780", whatsapp: "+919123456780", lat:20.432, lon:76.735 },
          { name: "Agro World Khamgaon", address: "Station Rd, Khamgaon", phone: "+91-9123456779", whatsapp: "+919123456779", lat:20.428, lon:76.725 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Khamgaon", phone: "+91-9123456778", whatsapp: "+919123456778", lat:20.431, lon:76.732 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Khamgaon", phone: "+91-9123456777", whatsapp: "+919123456777", lat:20.429, lon:76.728 },
          { name: "Krushi Mitra Khamgaon", address: "Near Petrol Pump, Khamgaon", phone: "+91-9123456776", whatsapp: "+919123456776", lat:20.433, lon:76.736 },
          { name: "Rural Agro Solutions", address: "Village Road, Khamgaon", phone: "+91-9123456775", whatsapp: "+919123456775", lat:20.427, lon:76.724 }
        ],
      "Nandura": [{ name: "Nandura Agro Store", address: "Main Rd, Nandura - 443404", phone: "+91-9123456774", whatsapp: "+919123456774", lat:20.530, lon:76.520 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Nandura", phone: "+91-9123456773", whatsapp: "+919123456773", lat:20.532, lon:76.525 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Nandura", phone: "+91-9123456772", whatsapp: "+919123456772", lat:20.528, lon:76.518 },
          { name: "Agro World Nandura", address: "Station Rd, Nandura", phone: "+91-9123456771", whatsapp: "+919123456771", lat:20.531, lon:76.522 },
          { name: "Farmers' Choice", address: "Market Yard, Nandura", phone: "+91-9123456770", whatsapp: "+919123456770", lat:20.529, lon:76.519 },
          { name: "Krushi Mitra Nandura", address: "Near Petrol Pump, Nandura", phone: "+91-9123456769", whatsapp: "+919123456769", lat:20.533, lon:76.526 },
          { name: "Rural Agro Solutions", address: "Village Road, Nandura", phone: "+91-9123456768", whatsapp: "+919123456768", lat:20.527, lon:76.517 }
        ],
      "Malkapur": [{ name: "Malkapur Agro Hub", address: "Market Rd, Malkapur - 443101", phone: "+91-9123456767", whatsapp: "+919123456767", lat:20.640, lon:76.180 },
          { name: "Farmers' Choice Malkapur", address: "Near Bus Stand, Malkapur", phone: "+91-9123456766", whatsapp: "+919123456766", lat:20.642, lon:76.185 },
          { name: "Agro World Malkapur", address: "Station Rd, Malkapur", phone: "+91-9123456765", whatsapp: "+919123456765", lat:20.638, lon:76.175 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Malkapur", phone: "+91-9123456764", whatsapp: "+919123456764", lat:20.641, lon:76.182 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Malkapur", phone: "+91-9123456763", whatsapp: "+919123456763", lat:20.639, lon:76.178 },
          { name: "Krushi Mitra Malkapur", address: "Near Petrol Pump, Malkapur", phone: "+91-9123456762", whatsapp: "+919123456762", lat:20.643, lon:76.186 },
          { name: "Rural Agro Solutions", address: "Village Road, Malkapur", phone: "+91-9123456761", whatsapp: "+919123456761", lat:20.637, lon:76.174 }
        ],
      "Mehkar": [{ name: "Mehkar Agro Store", address: "Main Rd, Mehkar - 443301", phone: "+91-9123456760", whatsapp: "+919123456760", lat:20.170, lon:76.520 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Mehkar", phone: "+91-9123456759", whatsapp: "+919123456759", lat:20.172, lon:76.525 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Mehkar", phone: "+91-9123456758", whatsapp: "+919123456758", lat:20.168, lon:76.518 },
          { name: "Agro World Mehkar", address: "Station Rd, Mehkar", phone: "+91-9123456757", whatsapp: "+919123456757", lat:20.171, lon:76.522 },
          { name: "Farmers' Choice", address: "Market Yard, Mehkar", phone: "+91-9123456756", whatsapp: "+919123456756", lat:20.169, lon:76.519 },
          { name: "Krushi Mitra Mehkar", address: "Near Petrol Pump, Mehkar", phone: "+91-9123456755", whatsapp: "+919123456755", lat:20.173, lon:76.526 },
          { name: "Rural Agro Solutions", address: "Village Road, Mehkar", phone: "+91-9123456754", whatsapp: "+919123456754", lat:20.167, lon:76.517 }
        ],
      "Motala": [{ name: "Motala Agro Hub", address: "Market Rd, Motala - 443102", phone: "+91-9123456753", whatsapp: "+919123456753", lat:20.430, lon:76.180 },
          { name: "Farmers' Choice Motala", address: "Near Bus Stand, Motala", phone: "+91-9123456752", whatsapp: "+919123456752", lat:20.432, lon:76.185 },
          { name: "Agro World Motala", address: "Station Rd, Motala", phone: "+91-9123456751", whatsapp: "+919123456751", lat:20.428, lon:76.175 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Motala", phone: "+91-9123456750", whatsapp: "+919123456750", lat:20.431, lon:76.182 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Motala", phone: "+91-9123456749", whatsapp: "+919123456749", lat:20.429, lon:76.178 },
          { name: "Krushi Mitra Motala", address: "Near Petrol Pump, Motala", phone: "+91-9123456748", whatsapp: "+919123456748", lat:20.433, lon:76.186 },
          { name: "Rural Agro Solutions", address: "Village Road, Motala", phone: "+91-9123456747", whatsapp: "+919123456747", lat:20.427, lon:76.174 }
        ],
      "Deulgaon Raja": [{ name: "Deulgaon Raja Agro Store", address: "Main Rd, Deulgaon Raja - 443204", phone: "+91-9123456746", whatsapp: "+919123456746", lat:20.930, lon:76.520 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Deulgaon Raja", phone: "+91-9123456745", whatsapp: "+919123456745", lat:20.932, lon:76.525 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Deulgaon Raja", phone: "+91-9123456744", whatsapp: "+919123456744", lat:20.928, lon:76.518 },
          { name: "Agro World Deulgaon Raja", address: "Station Rd, Deulgaon Raja", phone: "+91-9123456743", whatsapp: "+919123456743", lat:20.931, lon:76.522 },
          { name: "Farmers' Choice", address: "Market Yard, Deulgaon Raja", phone: "+91-9123456742", whatsapp: "+919123456742", lat:20.929, lon:76.519 },
          { name: "Krushi Mitra Deulgaon Raja", address: "Near Petrol Pump, Deulgaon Raja", phone: "+91-9123456741", whatsapp: "+919123456741", lat:20.933, lon:76.526 },
          { name: "Rural Agro Solutions", address: "Village Road, Deulgaon Raja", phone: "+91-9123456740", whatsapp: "+919123456740", lat:20.927, lon:76.517 }
        ],
      "Lonar": [{ name: "Lonar Agro Hub", address: "Market Rd, Lonar - 443302", phone: "+91-9123456739", whatsapp: "+919123456739", lat:19.983, lon:76.520 },
          { name: "Farmers' Choice Lonar", address: "Near Bus Stand, Lonar", phone: "+91-9123456738", whatsapp: "+919123456738", lat:19.985, lon:76.525 },
          { name: "Agro World Lonar", address: "Station Rd, Lonar", phone: "+91-9123456737", whatsapp: "+919123456737", lat:19.981, lon:76.515 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Lonar", phone: "+91-9123456736", whatsapp: "+919123456736", lat:19.984, lon:76.522 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Lonar", phone: "+91-9123456735", whatsapp: "+919123456735", lat:19.982, lon:76.518 },
          { name: "Krushi Mitra Lonar", address: "Near Petrol Pump, Lonar", phone: "+91-9123456734", whatsapp: "+919123456734", lat:19.986, lon:76.526 },
          { name: "Rural Agro Solutions", address: "Village Road, Lonar", phone: "+91-9123456733", whatsapp: "+919123456733", lat:19.980, lon:76.514 }
        ],
      "Sindkhed Raja": [{ name: "Sindkhed Raja Agro Store", address: "Main Rd, Sindkhed Raja - 443405", phone: "+91-9123456732", whatsapp: "+919123456732", lat:20.150, lon:76.520 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Sindkhed Raja", phone: "+91-9123456731", whatsapp: "+919123456731", lat:20.152, lon:76.525 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Sindkhed Raja", phone: "+91-9123456730", whatsapp: "+919123456730", lat:20.148, lon:76.518 },
          { name: "Agro World Sindkhed Raja", address: "Station Rd, Sindkhed Raja", phone: "+91-9123456729", whatsapp: "+919123456729", lat:20.151, lon:76.522 },
          { name: "Farmers' Choice", address: "Market Yard, Sindkhed Raja", phone: "+91-9123456728", whatsapp: "+919123456728", lat:20.149, lon:76.519 },
          { name: "Krushi Mitra Sindkhed Raja", address: "Near Petrol Pump, Sindkhed Raja", phone: "+91-9123456727", whatsapp: "+919123456727", lat:20.153, lon:76.526 },
          { name: "Rural Agro Solutions", address: "Village Road, Sindkhed Raja", phone: "+91-9123456726", whatsapp: "+919123456726", lat:20.147, lon:76.517 }
        ],
      "Jalgaon Jamod": [{ name: "Jalgaon Jamod Agro Hub", address: "Market Rd, Jalgaon Jamod - 443403", phone: "+91-9123456725", whatsapp: "+919123456725", lat:20.430, lon:76.180 },
          { name: "Farmers' Choice Jalgaon Jamod", address: "Near Bus Stand, Jalgaon Jamod", phone: "+91-9123456724", whatsapp: "+919123456724", lat:20.432, lon:76.185 },
          { name: "Agro World Jalgaon Jamod", address: "Station Rd, Jalgaon Jamod", phone: "+91-9123456723", whatsapp: "+919123456723", lat:20.428, lon:76.175 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Jalgaon Jamod", phone: "+91-9123456722", whatsapp: "+919123456722", lat:20.431, lon:76.182 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Jalgaon Jamod", phone: "+91-9123456721", whatsapp: "+919123456721", lat:20.429, lon:76.178 },
          { name: "Krushi Mitra Jalgaon Jamod", address: "Near Petrol Pump, Jalgaon Jamod", phone: "+91-9123456720", whatsapp: "+919123456720", lat:20.433, lon:76.186 },
          { name: "Rural Agro Solutions", address: "Village Road, Jalgaon Jamod", phone: "+91-9123456719", whatsapp: "+919123456719", lat:20.427, lon:76.174 }
        ],
      "Shegaon": [{ name: "Shegaon Agro Store", address: "Main Rd, Shegaon - 443203", phone: "+91-9123456718", whatsapp: "+919123456718", lat:20.860, lon:76.520 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Shegaon", phone: "+91-9123456717", whatsapp: "+919123456717", lat:20.862, lon:76.525 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Shegaon", phone: "+91-9123456716", whatsapp: "+919123456716", lat:20.858, lon:76.518 },
          { name: "Agro World Shegaon", address: "Station Rd, Shegaon", phone: "+91-9123456715", whatsapp: "+919123456715", lat:20.861, lon:76.522 },
          { name: "Farmers' Choice", address: "Market Yard, Shegaon", phone: "+91-9123456714", whatsapp: "+919123456714", lat:20.859, lon:76.519 },
          { name: "Krushi Mitra Shegaon", address: "Near Petrol Pump, Shegaon", phone: "+91-9123456713", whatsapp: "+919123456713", lat:20.863, lon:76.526 },
          { name: "Rural Agro Solutions", address: "Village Road, Shegaon", phone: "+91-9123456712", whatsapp: "+919123456712", lat:20.857, lon:76.517 }
        ]
      },
      "Amravati": {
        "Amravati": [
          { name: "Amravati Agro Solutions", address: "Station Rd, Amravati - 444601", phone: "+91-9123456789", whatsapp: "+919123456789", lat:20.933, lon:77.750 },
          { name: "Farmers' Hub Amravati", address: "Market Yard, Amravati", phone: "+91-9123456790", whatsapp: "+919123456790", lat:20.935, lon:77.755 },
          { name: "Green Leaf Fertilizers", address: "Near Bus Stand, Amravati", phone: "+91-9123456791", whatsapp: "+919123456791", lat:20.931, lon:77.745 },
          { name: "Krushi Mitra Amravati", address: "Gandhi Market, Amravati", phone: "+91-9123456792", whatsapp: "+919123456792", lat:20.934, lon:77.752 },
          { name: "Agro World Amravati", address: "Main Rd, Amravati", phone: "+91-9123456793", whatsapp: "+919123456793", lat:20.932, lon:77.748 },
          { name: "Rural Agro Center", address: "Village Road, Amravati", phone: "+91-9123456794", whatsapp: "+919123456794", lat:20.936, lon:77.756 },
          { name: "Farm Fresh Fertilizers", address: "Opposite Temple, Amravati", phone: "+91-9123456795", whatsapp: "+919123456795", lat:20.930, lon:77.744 },
          { name: "Shree Agro Fert", address: "Plot 10, MIDC, Amravati", phone: "+91-9123456796", whatsapp: "+919123456796", lat:20.937, lon:77.757 }
        ],
        "Achalpur": [{ name: "Achalpur Agro Store", address: "Main Rd, Achalpur - 444806", phone: "+91-9123456797", whatsapp: "+919123456797", lat:21.250, lon:77.520 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Achalpur", phone: "+91-9123456798", whatsapp: "+919123456798", lat:21.252, lon:77.525 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Achalpur", phone: "+91-9123456799", whatsapp: "+919123456799", lat:21.248, lon:77.518 },
          { name: "Agro World Achalpur", address: "Station Rd, Achalpur", phone: "+91-9123456800", whatsapp: "+919123456800", lat:21.251, lon:77.522 },
          { name: "Farmers' Choice", address: "Market Yard, Achalpur", phone: "+91-9123456801", whatsapp: "+919123456801", lat:21.249, lon:77.519 },
          { name: "Krushi Mitra Achalpur", address: "Near Petrol Pump, Achalpur", phone: "+91-9123456802", whatsapp: "+919123456802", lat:21.253, lon:77.526 },
          { name: "Rural Agro Solutions", address: "Village Road, Achalpur", phone: "+91-9123456803", whatsapp: "+919123456803", lat:21.247, lon:77.517 }
        ],
        "Daryapur": [{ name: "Daryapur Agro Hub", address: "Market Rd, Daryapur - 444803", phone: "+91-9123456804", whatsapp: "+919123456804", lat:20.930, lon:77.180 },
          { name: "Farmers' Choice Daryapur", address: "Near Bus Stand, Daryapur", phone: "+91-9123456805", whatsapp: "+919123456805", lat:20.932, lon:77.185 },
          { name: "Agro World Daryapur", address: "Station Rd, Daryapur", phone: "+91-9123456806", whatsapp: "+919123456806", lat:20.928, lon:77.175 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Daryapur", phone: "+91-9123456807", whatsapp: "+919123456807", lat:20.931, lon:77.182 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Daryapur", phone: "+91-9123456808", whatsapp: "+919123456808", lat:20.929, lon:77.178 },
          { name: "Krushi Mitra Daryapur", address: "Near Petrol Pump, Daryapur", phone: "+91-9123456809", whatsapp: "+919123456809", lat:20.933, lon:77.186 },
          { name: "Rural Agro Solutions", address: "Village Road, Daryapur", phone: "+91-9123456810", whatsapp: "+919123456810", lat:20.927, lon:77.174 },
          { name: "Farm Fresh Fertilizers", address: "Opposite Temple, Daryapur", phone: "+91-9123456811", whatsapp: "+919123456811", lat:20.926, lon:77.173 }
        ],
        "Chikhaldara": [{ name: "Chikhaldara Agro Store", address: "Main Rd, Chikhaldara - 444807", phone: "+91-9123456812", whatsapp: "+919123456812", lat:21.050, lon:77.520 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Chikhaldara", phone: "+91-9123456813", whatsapp: "+919123456813", lat:21.052, lon:77.525 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Chikhaldara", phone: "+91-9123456814", whatsapp: "+919123456814", lat:21.048, lon:77.518 },
          { name: "Agro World Chikhaldara", address: "Station Rd, Chikhaldara", phone: "+91-9123456815", whatsapp: "+919123456815", lat:21.051, lon:77.522 },
          { name: "Farmers' Choice", address: "Market Yard, Chikhaldara", phone: "+91-9123456816", whatsapp: "+919123456816", lat:21.049, lon:77.519 },
          { name: "Krushi Mitra Chikhaldara", address: "Near Petrol Pump, Chikhaldara", phone: "+91-9123456817", whatsapp: "+919123456817", lat:21.053, lon:77.526 },
          { name: "Rural Agro Solutions", address: "Village Road, Chikhaldara", phone: "+91-9123456818", whatsapp: "+919123456818", lat:21.047, lon:77.517 }
        ]
      },
      "Pune": {
        "Haveli": [
          { name: "Shree Agro Fert", address: "Plot 12, MIDC, Pune", phone: "+91-9876543210", whatsapp: "+919876543210", lat:18.5204, lon:73.8567 },
          { name: "Pune Krushi Kendra", address: "Near Bus Stand, Pune - 411001", phone: "+91-9123456789", whatsapp: "+919123456789", lat:18.5214, lon:73.8557 },
          { name: "Agro World Pune", address: "Market Yard, Pune", phone: "+91-9123456790", whatsapp: "+919123456790", lat:18.5194, lon:73.8577 },
          { name: "Farmers' Hub Pune", address: "Station Rd, Pune", phone: "+91-9123456791", whatsapp: "+919123456791", lat:18.5224, lon:73.8547 },
          { name: "Green Leaf Fertilizers", address: "Gandhi Market, Pune", phone: "+91-9123456792", whatsapp: "+919123456792", lat:18.5184, lon:73.8587 },
          { name: "Krushi Mitra Pune", address: "Main Rd, Pune", phone: "+91-9123456793", whatsapp: "+919123456793", lat:18.5234, lon:73.8537 },
          { name: "Rural Agro Center", address: "Village Road, Pune", phone: "+91-9123456794", whatsapp: "+919123456794", lat:18.5174, lon:73.8597 }
        ],
         "Baramati": [
          { name: "Baramati Agro Solutions", address: "Station Rd, Baramati - 413102", phone: "+91-9123456795", whatsapp: "+919123456795", lat:18.1500, lon:74.5800 },
          { name: "Farmers' Hub Baramati", address: "Market Yard, Baramati", phone: "+91-9123456796", whatsapp: "+919123456796", lat:18.1510, lon:74.5810 },
          { name: "Green Leaf Fertilizers", address: "Near Bus Stand, Baramati", phone: "+91-9123456797", whatsapp: "+919123456797", lat:18.1490, lon:74.5790 },
          { name: "Krushi Mitra Baramati", address: "Gandhi Market, Baramati", phone: "+91-9123456798", whatsapp: "+919123456798", lat:18.1520, lon:74.5820 },
          { name: "Agro World Baramati", address: "Main Rd, Baramati", phone: "+91-9123456799", whatsapp: "+919123456799", lat:18.1480, lon:74.5780 },
          { name: "Rural Agro Center", address: "Village Road, Baramati", phone: "+91-9123456800", whatsapp: "+919123456800", lat:18.1530, lon:74.5830 }
         ],
        "Shirur": [{ name: "Shirur Agro Hub", address: "Market Rd, Shirur - 412210", phone: "+91-9123456801", whatsapp: "+919123456801", lat:18.7667, lon:74.5667 },
          { name: "Farmers' Choice Shirur", address: "Near Bus Stand, Shirur", phone: "+91-9123456802", whatsapp: "+919123456802", lat:18.7687, lon:74.5717 },
          { name: "Agro World Shirur", address: "Station Rd, Shirur", phone: "+91-9123456803", whatsapp: "+919123456803", lat:18.7647, lon:74.5617 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Shirur", phone: "+91-9123456804", whatsapp: "+919123456804", lat:18.7677, lon:74.5687 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Shirur", phone: "+91-9123456805", whatsapp: "+919123456805", lat:18.7657, lon:74.5647 },
          { name: "Krushi Mitra Shirur", address: "Near Petrol Pump, Shirur", phone: "+91-9123456806", whatsapp: "+919123456806", lat:18.7697, lon:74.5727 },
          { name: "Rural Agro Solutions", address: "Village Road, Shirur", phone: "+91-9123456807", whatsapp: "+919123456807", lat:18.7637, lon:74.5607 }
         ],
        "Bhr": [{ name: "Bhr Agro Store", address: "Main Rd, Bhr - 412205", phone: "+91-9123456808", whatsapp: "+919123456808", lat:18.9000, lon:74.5667 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Bhr", phone: "+91-9123456809", whatsapp: "+919123456809", lat:18.9020, lon:74.5717 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Bhr", phone: "+91-9123456810", whatsapp: "+919123456810", lat:18.8980, lon:74.5617 },
          { name: "Agro World Bhr", address: "Station Rd, Bhr", phone: "+91-9123456811", whatsapp: "+919123456811", lat:18.9010, lon:74.5687 },
          { name: "Farmers' Choice", address: "Market Yard, Bhr", phone: "+91-9123456812", whatsapp: "+919123456812", lat:18.8990, lon:74.5647 },
          { name: "Krushi Mitra Bhr", address: "Near Petrol Pump, Bhr", phone: "+91-9123456813", whatsapp: "+919123456813", lat:18.9030, lon:74.5727 },
          { name: "Rural Agro Solutions", address: "Village Road, Bhr", phone: "+91-9123456814", whatsapp: "+919123456814", lat:18.8970, lon:74.5607 }
         ]
      },
      "Parbhani": {
        "Parbhani": [
          { name: "Parbhani Krushi Kendra", address: "Station Rd, Parbhani - 431401", phone: "+91-9123456780", whatsapp: "+919123456780", lat:19.2685, lon:76.7704 },
          { name: "Agro World Parbhani", address: "Market Yard, Parbhani", phone: "+91-9123456781", whatsapp: "+919123456781", lat:19.2695, lon:76.7714 },
          { name: "Farmers' Hub Parbhani", address: "Near Bus Stand, Parbhani", phone: "+91-9123456782", whatsapp: "+919123456782", lat:19.2675, lon:76.7694 },
          { name: "Green Leaf Fertilizers", address: "Gandhi Market, Parbhani", phone: "+91-9123456783", whatsapp: "+919123456783", lat:19.2705, lon:76.7724 },
          { name: "Krushi Mitra Parbhani", address: "Main Rd, Parbhani", phone: "+91-9123456784", whatsapp: "+919123456784", lat:19.2665, lon:76.7684 },
          { name: "Rural Agro Center", address: "Village Road, Parbhani", phone: "+91-9123456785", whatsapp: "+919123456785", lat:19.2715, lon:76.7734 }
        ],
        "Gangakhed": [
          { name: "Gangakhed Agro Store", address: "Main Rd, Gangakhed - 431514", phone: "+91-9123456786", whatsapp: "+919123456786", lat:18.9300, lon:76.7700 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Gangakhed", phone: "+91-9123456787", whatsapp: "+919123456787", lat:18.9320, lon:76.7750 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Gangakhed", phone: "+91-9123456788", whatsapp: "+919123456788", lat:18.9280, lon:76.7650 },
          { name: "Agro World Gangakhed", address: "Station Rd, Gangakhed", phone: "+91-9123456789", whatsapp: "+919123456789", lat:18.9310, lon:76.7720 },
          { name: "Farmers' Choice", address: "Market Yard, Gangakhed", phone: "+91-9123456790", whatsapp: "+919123456790", lat:18.9290, lon:76.7690 },
          { name: "Krushi Mitra Gangakhed", address: "Near Petrol Pump, Gangakhed", phone: "+91-9123456791", whatsapp: "+919123456791", lat:18.9330, lon:76.7760 },
          { name: "Rural Agro Solutions", address: "Village Road, Gangakhed", phone: "+91-9123456792", whatsapp: "+919123456792", lat:18.9270, lon:76.7640 }
        ],
        "Purna": [{ name: "Purna Agro Hub", address: "Market Rd, Purna - 431511", phone: "+91-9123456793", whatsapp: "+919123456793", lat:19.1500, lon:76.7700 },
          { name: "Farmers' Choice Purna", address: "Near Bus Stand, Purna", phone: "+91-9123456794", whatsapp: "+919123456794", lat:19.1520, lon:76.7750 },
          { name: "Agro World Purna", address: "Station Rd, Purna", phone: "+91-9123456795", whatsapp: "+919123456795", lat:19.1480, lon:76.7650 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Purna", phone: "+91-9123456796", whatsapp: "+919123456796", lat:19.1510, lon:76.7720 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Purna", phone: "+91-9123456797", whatsapp: "+919123456797", lat:19.1490, lon:76.7690 },
          { name: "Krushi Mitra Purna", address: "Near Petrol Pump, Purna", phone: "+91-9123456798", whatsapp: "+919123456798", lat:19.1530, lon:76.7760 },
          { name: "Rural Agro Solutions", address: "Village Road, Purna", phone: "+91-9123456799", whatsapp: "+919123456799", lat:19.1470, lon:76.7640 }
        ],
        "Jintur": [{ name: "Jintur Agro Store", address: "Main Rd, Jintur - 431509", phone: "+91-9123456807", whatsapp: "+919123456807", lat:19.2000, lon:76.7900 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Jintur", phone: "+91-9123456808", whatsapp: "+919123456808", lat:19.2020, lon:76.7950 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Jintur", phone: "+91-9123456809", whatsapp: "+919123456809", lat:19.1980, lon:76.7850 },
          { name: "Agro World Jintur", address: "Station Rd, Jintur", phone: "+91-9123456810", whatsapp: "+919123456810", lat:19.2010, lon:76.7920 },
          { name: "Farmers' Choice", address: "Market Yard, Jintur", phone: "+91-9123456811", whatsapp: "+919123456811", lat:19.1990, lon:76.7890 },
          { name: "Krushi Mitra Jintur", address: "Near Petrol Pump, Jintur", phone: "+91-9123456812", whatsapp: "+919123456812", lat:19.2030, lon:76.7960 },
          { name: "Rural Agro Solutions", address: "Village Road, Jintur", phone: "+91-9123456813", whatsapp: "+918177921044", lat:19.1970, lon:76.7840 }
        ],
        "Sonpeth": [{ name: "Sonpeth Agro Store", address: "Main Rd, Sonpeth - 431516", phone: "+91-9123456800", whatsapp: "+919123456800", lat:18.9200, lon:76.7800 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Sonpeth", phone: "+91-9123456801", whatsapp: "+919123456801", lat:18.9220, lon:76.7850 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Sonpeth", phone: "+91-9123456802", whatsapp: "+919123456802", lat:18.9180, lon:76.7750 },
          { name: "Agro World Sonpeth", address: "Station Rd, Sonpeth", phone: "+91-9123456803", whatsapp: "+919123456803", lat:18.9210, lon:76.7820 },
          { name: "Farmers' Choice", address: "Market Yard, Sonpeth", phone: "+91-9123456804", whatsapp: "+919123456804", lat:18.9190, lon:76.7790 },
          { name: "Krushi Mitra Sonpeth", address: "Near Petrol Pump, Sonpeth", phone: "+91-9123456805", whatsapp: "+919123456805", lat:18.9230, lon:76.7860 },
          { name: "Rural Agro Solutions", address: "Village Road, Sonpeth", phone: "+91-9123456806", whatsapp: "+919123456806", lat:18.9170, lon:76.7740 }
        ]
      },
      "Nagpur": {
        "Nagpur": [
          { name: "Nagpur Agro Solutions", address: "Station Rd, Nagpur - 440001", phone: "+91-9123456815", whatsapp: "+919123456815", lat:21.1458, lon:79.0882 },
          { name: "Farmers' Hub Nagpur", address: "Market Yard, Nagpur", phone: "+91-9123456816", whatsapp: "+919123456816", lat:21.1468, lon:79.0892 },
          { name: "Green Leaf Fertilizers", address: "Near Bus Stand, Nagpur", phone: "+91-9123456817", whatsapp: "+919123456817", lat:21.1448, lon:79.0872 },
          { name: "Krushi Mitra Nagpur", address: "Gandhi Market, Nagpur", phone: "+91-9123456818", whatsapp: "+919123456818", lat:21.1478, lon:79.0902 },
          { name: "Agro World Nagpur", address: "Main Rd, Nagpur", phone: "+91-9123456819", whatsapp: "+919123456819", lat:21.1438, lon:79.0862 },
          { name: "Rural Agro Center", address: "Village Road, Nagpur", phone: "+91-9123456820", whatsapp: "+919123456820", lat:21.1488, lon:79.0912 }
        ],
        "Hingna": [{ name: "Hingna Agro Store", address: "Main Rd, Hingna - 441110", phone: "+91-9123456821", whatsapp: "+919123456821", lat:21.0833, lon:79.0500 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Hingna", phone: "+91-9123456822", whatsapp: "+919123456822", lat:21.0853, lon:79.0550 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Hingna", phone: "+91-9123456823", whatsapp: "+919123456823", lat:21.0813, lon:79.0450 },
          { name: "Agro World Hingna", address: "Station Rd, Hingna", phone: "+91-9123456824", whatsapp: "+919123456824", lat:21.0843, lon:79.0520 },
          { name: "Farmers' Choice", address: "Market Yard, Hingna", phone: "+91-9123456825", whatsapp: "+919123456825", lat:21.0823, lon:79.0490 },
          { name: "Krushi Mitra Hingna", address: "Near Petrol Pump, Hingna", phone: "+91-9123456826", whatsapp: "+919123456826", lat:21.0863, lon:79.0560 },
          { name: "Rural Agro Solutions", address: "Village Road, Hingna", phone: "+91-9123456827", whatsapp: "+919123456827", lat:21.0803, lon:79.0440 }
        ],
        "Umred": [{ name: "Umred Agro Hub", address: "Market Rd, Umred - 441203", phone: "+91-9123456828", whatsapp: "+919123456828", lat:20.9500, lon:79.2500 },
          { name: "Farmers' Choice Umred", address: "Near Bus Stand, Umred", phone: "+91-9123456829", whatsapp: "+919123456829", lat:20.9520, lon:79.2550 },
          { name: "Agro World Umred", address: "Station Rd, Umred", phone: "+91-9123456830", whatsapp: "+919123456830", lat:20.9480, lon:79.2450 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Umred", phone: "+91-9123456831", whatsapp: "+919123456831", lat:20.9510, lon:79.2520 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Umred", phone: "+91-9123456832", whatsapp: "+919123456832", lat:20.9490, lon:79.2490 },
          { name: "Krushi Mitra Umred", address: "Near Petrol Pump, Umred", phone: "+91-9123456833", whatsapp: "+919123456833", lat:20.9530, lon:79.2560 },
          { name: "Rural Agro Solutions", address: "Village Road, Umred", phone: "+91-9123456834", whatsapp: "+919123456834", lat:20.9470, lon:79.2440 }
        ],
        "Katol": [{ name: "Katol Agro Store", address: "Main Rd, Katol - 441302", phone: "+91-9123456835", whatsapp: "+919123456835", lat:21.2000, lon:79.3000 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Katol", phone: "+91-9123456836", whatsapp: "+919123456836", lat:21.2020, lon:79.3050 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Katol", phone: "+91-9123456837", whatsapp: "+919123456837", lat:21.1980, lon:79.2950 },
          { name: "Agro World Katol", address: "Station Rd, Katol", phone: "+91-9123456838", whatsapp: "+919123456838", lat:21.2010, lon:79.3020 },
          { name: "Farmers' Choice", address: "Market Yard, Katol", phone: "+91-9123456839", whatsapp: "+919123456839", lat:21.1990, lon:79.2990 },
          { name: "Krushi Mitra Katol", address: "Near Petrol Pump, Katol", phone: "+91-9123456840", whatsapp: "+919123456840", lat:21.2030, lon:79.3060 },
          { name: "Rural Agro Solutions", address: "Village Road, Katol", phone: "+91-9123456841", whatsapp: "+919123456841", lat:21.1970, lon:79.2940 }
        ]  
      },
      "Ahmednagar": {
        "Ahmednagar": [
          { name: "Ahmednagar Agro Solutions", address: "Station Rd, Ahmednagar - 414001", phone: "+91-9123456842", whatsapp: "+919123456842", lat:19.0952, lon:74.7496 },
          { name: "Farmers' Hub Ahmednagar", address: "Market Yard, Ahmednagar", phone: "+91-9123456843", whatsapp: "+919123456843", lat:19.0962, lon:74.7506 },
          { name: "Green Leaf Fertilizers", address: "Near Bus Stand, Ahmednagar", phone: "+91-9123456844", whatsapp: "+919123456844", lat:19.0942, lon:74.7486 },
          { name: "Krushi Mitra Ahmednagar", address: "Gandhi Market, Ahmednagar", phone: "+91-9123456845", whatsapp: "+919123456845", lat:19.0972, lon:74.7516 },
          { name: "Agro World Ahmednagar", address: "Main Rd, Ahmednagar", phone: "+91-9123456846", whatsapp: "+919123456846", lat:19.0932, lon:74.7476 },
          { name: "Rural Agro Center", address: "Village Road, Ahmednagar", phone: "+91-9123456847", whatsapp: "+919123456847", lat:19.0982, lon:74.7526 }
        ],
        "Shirdi": [{ name: "Shirdi Agro Store", address: "Main Rd, Shirdi - 423109", phone: "+91-9123456848", whatsapp: "+919123456848", lat:19.7667, lon:74.4800 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Shirdi", phone: "+91-9123456849", whatsapp: "+919123456849", lat:19.7687, lon:74.4850 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Shirdi", phone: "+91-9123456850", whatsapp: "+919123456850", lat:19.7647, lon:74.4750 },
          { name: "Agro World Shirdi", address: "Station Rd, Shirdi", phone: "+91-9123456851", whatsapp: "+919123456851", lat:19.7677, lon:74.4820 },
          { name: "Farmers' Choice", address: "Market Yard, Shirdi", phone: "+91-9123456852", whatsapp: "+919123456852", lat:19.7657, lon:74.4780 },
          { name: "Krushi Mitra Shirdi", address: "Near Petrol Pump, Shirdi", phone: "+91-9123456853", whatsapp: "+919123456853", lat:19.7697, lon:74.4860 },
          { name: "Rural Agro Solutions", address: "Village Road, Shirdi", phone: "+91-9123456854", whatsapp: "+919123456854", lat:19.7637, lon:74.4740 }
        ],
        "Karjat": [{ name: "Karjat Agro Hub", address: "Market Rd, Karjat - 410201", phone: "+91-9123456855", whatsapp: "+919123456855", lat:18.9100, lon:73.3300 },
          { name: "Farmers' Choice Karjat", address: "Near Bus Stand, Karjat", phone: "+91-9123456856", whatsapp: "+919123456856", lat:18.9120, lon:73.3350 },
          { name: "Agro World Karjat", address: "Station Rd, Karjat", phone: "+91-9123456857", whatsapp: "+919123456857", lat:18.9080, lon:73.3250 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Karjat", phone: "+91-9123456858", whatsapp: "+919123456858", lat:18.9110, lon:73.3320 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Karjat", phone: "+91-9123456859", whatsapp: "+919123456859", lat:18.9090, lon:73.3290 },
          { name: "Krushi Mitra Karjat", address: "Near Petrol Pump, Karjat", phone: "+91-9123456860", whatsapp: "+919123456860", lat:18.9130, lon:73.3360 },
          { name: "Rural Agro Solutions", address: "Village Road, Karjat", phone: "+91-9123456861", whatsapp: "+919123456861", lat:18.9070, lon:73.3240 }
        ],
        "Pathardi": [{ name: "Pathardi Agro Store", address: "Main Rd, Pathardi - 414102", phone: "+91-9123456862", whatsapp: "+919123456862", lat:19.1000, lon:74.9000 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Pathardi", phone: "+91-9123456863", whatsapp: "+919123456863", lat:19.1020, lon:74.9050 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Pathardi", phone: "+91-9123456864", whatsapp: "+919123456864", lat:19.0980, lon:74.8950 },
          { name: "Agro World Pathardi", address: "Station Rd, Pathardi", phone: "+91-9123456865", whatsapp: "+919123456865", lat:19.1010, lon:74.9020 },
          { name: "Farmers' Choice", address: "Market Yard, Pathardi", phone: "+91-9123456866", whatsapp: "+919123456866", lat:19.0990, lon:74.8990 },
          { name: "Krushi Mitra Pathardi", address: "Near Petrol Pump, Pathardi", phone: "+91-9123456867", whatsapp: "+919123456867", lat:19.1030, lon:74.9060 },
          { name: "Rural Agro Solutions", address: "Village Road, Pathardi", phone: "+91-9123456868", whatsapp: "+919123456868", lat:19.0970, lon:74.8940 }
        ] 
      },
      "Thane": {
        "Thane": [
          { name: "Thane Agro Solutions", address: "Station Rd, Thane - 400601", phone: "+91-9123456869", whatsapp: "+919123456869", lat:19.2183, lon:72.9781 },
          { name: "Farmers' Hub Thane", address: "Market Yard, Thane", phone: "+91-9123456870", whatsapp: "+919123456870", lat:19.2193, lon:72.9791 },
          { name: "Green Leaf Fertilizers", address: "Near Bus Stand, Thane", phone: "+91-9123456871", whatsapp: "+919123456871", lat:19.2173, lon:72.9771 },
          { name: "Krushi Mitra Thane", address: "Gandhi Market, Thane", phone: "+91-9123456872", whatsapp: "+919123456872", lat:19.2203, lon:72.9801 },
          { name: "Agro World Thane", address: "Main Rd, Thane", phone: "+91-9123456873", whatsapp: "+919123456873", lat:19.2163, lon:72.9761 },
          { name: "Rural Agro Center", address: "Village Road, Thane", phone: "+91-9123456874", whatsapp: "+919123456874", lat:19.2213, lon:72.9811 }
        ],
        "Kalyan": [{ name: "Kalyan Agro Store", address: "Main Rd, Kalyan - 421301", phone: "+91-9123456875", whatsapp: "+919123456875", lat:19.2400, lon:73.1300 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Kalyan", phone: "+91-9123456876", whatsapp: "+919123456876", lat:19.2420, lon:73.1350 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Kalyan", phone: "+91-9123456877", whatsapp: "+919123456877", lat:19.2380, lon:73.1250 },
          { name: "Agro World Kalyan", address: "Station Rd, Kalyan", phone: "+91-9123456878", whatsapp: "+919123456878", lat:19.2410, lon:73.1320 },
          { name: "Farmers' Choice", address: "Market Yard, Kalyan", phone: "+91-9123456879", whatsapp: "+919123456879", lat:19.2390, lon:73.1290 },
          { name: "Krushi Mitra Kalyan", address: "Near Petrol Pump, Kalyan", phone: "+91-9123456880", whatsapp: "+919123456880", lat:19.2430, lon:73.1360 },
          { name: "Rural Agro Solutions", address: "Village Road, Kalyan", phone: "+91-9123456881", whatsapp: "+919123456881", lat:19.2370, lon:73.1240 }
        ],
        "Ulhasnagar": [{ name: "Ulhasnagar Agro Hub", address: "Market Rd, Ulhasnagar - 421003", phone: "+91-9123456882", whatsapp: "+919123456882", lat:19.2167, lon:73.1500 },
          { name: "Farmers' Choice Ulhasnagar", address: "Near Bus Stand, Ulhasnagar", phone: "+91-9123456883", whatsapp: "+919123456883", lat:19.2187, lon:73.1550 },
          { name: "Agro World Ulhasnagar", address: "Station Rd, Ulhasnagar", phone: "+91-9123456884", whatsapp: "+919123456884", lat:19.2147, lon:73.1450 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Ulhasnagar", phone: "+91-9123456885", whatsapp: "+919123456885", lat:19.2177, lon:73.1520 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Ulhasnagar", phone: "+91-9123456886", whatsapp: "+919123456886", lat:19.2157, lon:73.1490 },
          { name: "Krushi Mitra Ulhasnagar", address: "Near Petrol Pump, Ulhasnagar", phone: "+91-9123456887", whatsapp: "+919123456887", lat:19.2197, lon:73.1560 },
          { name: "Rural Agro Solutions", address: "Village Road, Ulhasnagar", phone: "+91-9123456888", whatsapp: "+919123456888", lat:19.2137, lon:73.1440 }
        ],
        "Murbad": [{ name: "Murbad Agro Store", address: "Main Rd, Murbad - 421401", phone: "+91-9123456889", whatsapp: "+919123456889", lat:19.3000, lon:73.2500 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Murbad", phone: "+91-9123456890", whatsapp: "+919123456890", lat:19.3020, lon:73.2550 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Murbad", phone: "+91-9123456891", whatsapp: "+919123456891", lat:19.2980, lon:73.2450 },
          { name: "Agro World Murbad", address: "Station Rd, Murbad", phone: "+91-9123456892", whatsapp: "+919123456892", lat:19.3010, lon:73.2520 },
          { name: "Farmers' Choice", address: "Market Yard, Murbad", phone: "+91-9123456893", whatsapp: "+  919123456893", lat:19.2990, lon:73.2490 },
          { name: "Krushi Mitra Murbad", address: "Near Petrol Pump, Murbad", phone: "+91-9123456894", whatsapp: "+919123456894", lat:19.3030, lon:73.2560 },
          { name: "Rural Agro Solutions", address: "Village Road, Murbad", phone: "+91-9123456895", whatsapp: "+919123456895", lat:19.2970, lon:73.2440 }
        ]
      },
      "Nashik": {
        "Nashik": [
          { name: "Nashik Agro Hub", address: "Main Rd, Nashik - 422001", phone: "+91-9123456896", whatsapp: "+919123456896", lat:19.9975, lon:73.7890 },
          { name: "Farmers' Choice Nashik", address: "Near Bus Stand, Nashik", phone: "+91-9123456897", whatsapp: "+919123456897", lat:19.9985, lon:73.7880 },
          { name: "Agro World Nashik", address: "Station Rd, Nashik", phone: "+91-9123456898", whatsapp: "+919123456898", lat:19.9965, lon:73.7870 },
          { name: "Green Fields Fertilizer Nashik", address: "Gandhi Market, Nashik", phone: "+91-9123456899", whatsapp: "+919123456899", lat:1.2345, lon:-7.8e+2 },
          { name: "Shree Krushi Seva Kendra Nashik", address: "Main Rd, Nashik", phone: "+91-9123456800", whatsapp: "+919123456800", lat:-4.5e+2, lon:-6.7e+2 }
        ],
        "Sinnar": [
          { name: "Sinnar Agro Store", address: "Main Rd, Sinnar - 422103", phone: "+91-9123456801", whatsapp: "+919123456801", lat:20.0000, lon:73.9000 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Sinnar", phone: "+91-9123456802", whatsapp: "+919123456802", lat:20.0020, lon:73.9050 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Sinnar", phone: "+91-9123456803", whatsapp: "+919123456803", lat:19.9980, lon:73.8950 },
          { name: "Agro World Sinnar", address: "Station Rd, Sinnar", phone: "+91-9123456804", whatsapp: "+919123456804", lat:20.0010, lon:73.9020 },
          { name: "Farmers' Choice", address: "Market Yard, Sinnar", phone: "+91-9123456805", whatsapp: "+919123456805", lat:19.9990, lon:73.8990 },
          { name: "Krushi Mitra Sinnar", address: "Near Petrol Pump, Sinnar", phone: "+91-9123456806", whatsapp: "+919123456806", lat:20.0030, lon:73.9060 },
          { name: "Rural Agro Solutions", address: "Village Road, Sinnar", phone: "+91-9123456807", whatsapp: "+919123456807", lat:19.9970, lon:73.8940 }
        ],
        "Deolali": [
          { name: "Deolali Agro Hub", address: "Main Rd, Deolali - 422401", phone: "+91-9123456808", whatsapp: "+919123456808", lat:19.9667, lon:73.9333 },
          { name: "Farmers' Choice Deolali", address: "Near Bus Stand, Deolali", phone: "+91-9123456809", whatsapp: "+919123456809", lat:19.9687, lon:73.9383 },
          { name: "Agro World Deolali", address: "Station Rd, Deolali", phone: "+91-9123456810", whatsapp: "+919123456810", lat:19.9647, lon:73.9283 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Deolali", phone: "+91-9123456811", whatsapp: "+919123456811", lat:19.9677, lon:73.9353 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Deolali", phone: "+91-9123456812", whatsapp: "+919123456812", lat:19.9657, lon:73.9323 },
          { name: "Krushi Mitra Deolali", address: "Near Petrol Pump, Deolali", phone: "+91-9123456813", whatsapp: "+919123456813", lat:19.9697, lon:73.9393 },
          { name: "Rural Agro Solutions", address: "Village Road, Deolali", phone: "+91-9123456814", whatsapp: "+919123456814", lat:19.9637, lon:73.9273 }
        ],
        "Igatpuri": [
          { name: "Igatpuri Agro Store", address: "Main Rd, Igatpuri - 422403", phone: "+91-9123456815", whatsapp: "+919123456815", lat:19.7667, lon:73.5167 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Igatpuri", phone: "+91-9123456816", whatsapp: "+919123456816", lat:19.7687, lon:73.5217 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Igatpuri", phone: "+91-9123456817", whatsapp: "+919123456817", lat:19.7647, lon:73.5117 },
          { name: "Agro World Igatpuri", address: "Station Rd, Igatpuri", phone: "+91-9123456818", whatsapp: "+919123456818", lat:19.7677, lon:73.5187 },
          { name: "Farmers' Choice", address: "Market Yard, Igatpuri", phone: "+91-9123456819", whatsapp: "+919123456819", lat:19.7657, lon:73.5157 },
          { name: "Krushi Mitra Igatpuri", address: "Near Petrol Pump, Igatpuri", phone: "+91-9123456820", whatsapp: "+919123456820", lat:19.7697, lon:73.5227 },
          { name: "Rural Agro Solutions", address: "Village Road, Igatpuri", phone: "+91-9123456821", whatsapp: "+919123456821", lat:19.7637, lon:73.5107 }
        ]
      },
      "Chhatrapati Sambhajinagar": {
        "Chhatrapati Sambhajinagar": [
          { name: "Sambhajinagar Agro Solutions", address: "Station Rd, Chhatrapati Sambhajinagar - 431001", phone: "+91-9123456822", whatsapp: "+919123456822", lat:19.8562, lon:75.3433 },
          { name: "Farmers' Hub Sambhajinagar", address: "Market Yard, Chhatrapati Sambhajinagar", phone: "+91-9123456823", whatsapp: "+919123456823", lat:19.8572, lon:75.3443 },
          { name: "Green Leaf Fertilizers", address: "Near Bus Stand, Chhatrapati Sambhajinagar", phone: "+91-9123456824", whatsapp: "+919123456824", lat:19.8552, lon:75.3423 },
          { name: "Krushi Mitra Sambhajinagar", address: "Gandhi Market, Chhatrapati Sambhajinagar", phone: "+91-9123456825", whatsapp: "+919123456825", lat:19.8582, lon:75.3453 },
          { name: "Agro World Sambhajinagar", address: "Main Rd, Chhatrapati Sambhajinagar", phone: "+91-9123456826", whatsapp: "+919123456826", lat:19.8542, lon:75.3413 },
          { name: "Rural Agro Center", address: "Village Road, Chhatrapati Sambhajinagar", phone: "+91-9123456827", whatsapp: "+919123456827", lat:19.8592, lon:75.3463 } 
        ],
        "Jalna":[
          { name: "Jalna Agro Store", address: "Main Rd, Jalna - 431203", phone: "+91-9123456828", whatsapp: "+919123456828", lat:19.8410, lon:75.8860 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Jalna", phone: "+91-9123456829", whatsapp: "+919123456829", lat:19.8430, lon:75.8910 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Jalna", phone: "+91-9123456830", whatsapp: "+919123456830", lat:19.8390, lon:75.8810 },
          { name: "Agro World Jalna", address: "Station Rd, Jalna", phone: "+91-9123456831", whatsapp: "+919123456831", lat:19.8420, lon:75.8880 },
          { name: "Farmers' Choice", address: "Market Yard, Jalna", phone: "+91-9123456832", whatsapp: "+919123456832", lat:19.8400, lon:75.8850 },
          { name: "Krushi Mitra Jalna", address: "Near Petrol Pump, Jalna", phone: "+91-9123456833", whatsapp: "+919123456833", lat:19.8440, lon:75.8920 },
          { name: "Rural Agro Solutions", address: "Village Road, Jalna", phone: "+91-9123456834", whatsapp: "+919123456834", lat:19.8380, lon:75.8800 }
        ],
        "Aurangabad": [
          { name: "Aurangabad Agro Hub", address: "Main Rd, Aurangabad - 431001", phone: "+91-9123456835", whatsapp: "+919123456835", lat:19.8762, lon:75.3433 },
          { name: "Farmers' Choice Aurangabad", address: "Near Bus Stand, Aurangabad", phone: "+91-9123456836", whatsapp: "+919123456836", lat:19.8782, lon:75.3483 },
          { name: "Agro World Aurangabad", address: "Station Rd, Aurangabad", phone: "+91-9123456837", whatsapp: "+919123456837", lat:19.8742, lon:75.3383 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Aurangabad", phone: "+91-9123456838", whatsapp: "+919123456838", lat:19.8772, lon:75.3453 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Aurangabad", phone: "+91-9123456839", whatsapp: "+919123456839", lat:19.8752, lon:75.3423 },
          { name: "Krushi Mitra Aurangabad", address: "Near Petrol Pump, Aurangabad", phone: "+91-9123456840", whatsapp: "+919123456840", lat:19.8792, lon:75.3493 },
          { name: "Rural Agro Solutions", address: "Village Road, Aurangabad", phone: "+91-9123456841", whatsapp: "+919123456841", lat:19.8732, lon:75.3373 }
        ],
        "Paithan": [
          { name: "Paithan Agro Store", address: "Main Rd, Paithan - 431107", phone: "+91-9123456842", whatsapp: "+919123456842", lat:19.5550, lon:75.3200 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Paithan", phone: "+91-9123456843", whatsapp: "+919123456843", lat:19.5570, lon:75.3250 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Paithan", phone: "+91-9123456844", whatsapp: "+919123456844", lat:19.5530, lon:75.3150 },
          { name: "Agro World Paithan", address: "Station Rd, Paithan", phone: "+91-9123456845", whatsapp: "+919123456845", lat:19.5560, lon:75.3220 },
          { name: "Farmers' Choice", address: "Market Yard, Paithan", phone: "+91-9123456846", whatsapp: "+919123456846", lat:19.5540, lon:75.3190 },
          { name: "Krushi Mitra Paithan", address: "Near Petrol Pump, Paithan", phone: "+91-9123456847", whatsapp: "+919123456847", lat:19.5580, lon:75.3260 },
          { name: "Rural Agro Solutions", address: "Village Road, Paithan", phone: "+91-9123456848", whatsapp: "+919123456848", lat:19.5520, lon:75.3140 }
        ]
      },
      "Solapur": {
        "Solapur": [
          { name: "Solapur Agro Hub", address: "Main Rd, Solapur - 413001", phone: "+91-9123456849", whatsapp: "+919123456849", lat:17.6599, lon:75.9064 },
          { name: "Farmers' Choice Solapur", address: "Near Bus Stand, Solapur", phone: "+91-9123456850", whatsapp: "+919123456850", lat:17.6619, lon:75.9114 },
          { name: "Agro World Solapur", address: "Station Rd, Solapur", phone: "+91-9123456851", whatsapp: "+919123456851", lat:17.6579, lon:75.9014 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Solapur", phone: "+91-9123456852", whatsapp: "+919123456852", lat:17.6609, lon:75.9084 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Solapur", phone: "+91-9123456853", whatsapp: "+919123456853", lat:17.6589, lon:75.9054 },
          { name: "Krushi Mitra Solapur", address: "Near Petrol Pump, Solapur", phone: "+91-9123456854", whatsapp: "+919123456854", lat:17.6629, lon:75.9124 }],
        "Akkalkot": [
          { name: "Akkalkot Agro Store", address: "Main Rd, Akkalkot - 413216", phone: "+91-9123456855", whatsapp: "+919123456855", lat:17.1000, lon:76.2500 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Akkalkot", phone: "+91-9123456856", whatsapp: "+919123456856", lat:17.1020, lon:76.2550 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Akkalkot", phone: "+91-9123456857", whatsapp: "+919123456857", lat:17.0980, lon:76.2450 },
          { name: "Agro World Akkalkot", address: "Station Rd, Akkalkot", phone: "+91-9123456858", whatsapp: "+919123456858", lat:17.1010, lon:76.2520 },
          { name: "Farmers' Choice", address: "Market Yard, Akkalkot", phone: "+91-9123456859", whatsapp: "+919123456859", lat:17.0990, lon:76.2490 },
          { name: "Krushi Mitra Akkalkot", address: "Near Petrol Pump, Akkalkot", phone: "+91-9123456860", whatsapp: "+919123456860", lat:17.1030, lon:76.2560 },
          { name: "Rural Agro Solutions", address: "Village Road, Akkalkot", phone: "+91-9123456861", whatsapp: "+919123456861", lat:17.0970, lon:76.2440 }
        ],
        "Mohol": [
          { name: "Mohol Agro Hub", address: "Main Rd, Mohol - 413213", phone: "+91-9123456862", whatsapp: "+919123456862", lat:17.1500, lon:75.9300 },
          { name: "Farmers' Choice Mohol", address: "Near Bus Stand, Mohol", phone: "+91-9123456863", whatsapp: "+919123456863", lat:17.1520, lon:75.9350 },
          { name: "Agro World Mohol", address: "Station Rd, Mohol", phone: "+91-9123456864", whatsapp: "+919123456864", lat:17.1480, lon:75.9250 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Mohol", phone: "+91-9123456865", whatsapp: "+919123456865", lat:17.1510, lon:75.9320 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Mohol", phone: "+91-9123456866", whatsapp: "+919123456866", lat:17.1490, lon:75.9290 },
          { name: "Krushi Mitra Mohol", address: "Near Petrol Pump, Mohol", phone: "+91-9123456867", whatsapp: "+919123456867", lat:17.1530, lon:75.9360 }],
        "Pandharpur": [
          { name: "Pandharpur Agro Store", address: "Main Rd, Pandharpur - 413304", phone: "+91-9123456868", whatsapp: "+919123456868", lat:17.6800, lon:75.3300 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Pandharpur", phone: "+91-9123456869", whatsapp: "+919123456869", lat:17.6820, lon:75.3350 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Pandharpur", phone: "+91-9123456870", whatsapp: "+919123456870", lat:17.6780, lon:75.3250 },
          { name: "Agro World Pandharpur", address: "Station Rd, Pandharpur", phone: "+91-9123456871", whatsapp: "+919123456871", lat:17.6810, lon:75.3320 },
          { name: "Farmers' Choice", address: "Market Yard, Pandharpur", phone: "+91-9123456872", whatsapp: "+919123456872", lat:17.6790, lon:75.3290 },
          { name: "Krushi Mitra Pandharpur", address: "Near Petrol Pump, Pandharpur", phone: "+91-9123456873", whatsapp: "+919123456873", lat:17.6830, lon:75.3360 },
          { name: "Rural Agro Solutions", address: "Village Road, Pandharpur", phone: "+91-9123456874", whatsapp: "+919123456874", lat:17.6770, lon:75.3240 }
        ]
      },
      "Raigad": {
        "Alibag": [{ name: "Alibag Agro Store", address: "Main Rd, Alibag - 402201", phone: "+91-9123456875", whatsapp: "+919123456875", lat:18.6415, lon:72.8720 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Alibag", phone: "+91-9123456876", whatsapp: "+919123456876", lat:18.6435, lon:72.8770 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Alibag", phone: "+91-9123456877", whatsapp: "+919123456877", lat:18.6395, lon:72.8670 },
          { name: "Agro World Alibag", address: "Station Rd, Alibag", phone: "+91-9123456878", whatsapp: "+919123456878", lat:18.6425, lon:72.8740 },
          { name: "Farmers' Choice", address: "Market Yard, Alibag", phone: "+91-9123456879", whatsapp: "+  919123456879", lat:18.6405, lon:72.8710 },
          { name: "Krushi Mitra Alibag", address: "Near Petrol Pump, Alibag", phone: "+91-9123456880", whatsapp: "+919123456880", lat:18.6445, lon:72.8780 },
          { name: "Rural Agro Solutions", address: "Village Road, Alibag", phone: "+91-9123456881", whatsapp: "+919123456881", lat:18.6385, lon:72.8660 }
        ],
        "Pen": [{ name: "Pen Agro Store", address: "Main Rd, Pen - 402107", phone: "+91-9123456882", whatsapp: "+919123456882", lat:18.6860, lon:73.1000 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Pen", phone: "+91-9123456883", whatsapp: "+919123456883", lat:18.6880, lon:73.1050 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Pen", phone: "+91-9123456884", whatsapp: "+919123456884", lat:18.6840, lon:73.0950 },
          { name: "Agro World Pen", address: "Station Rd, Pen", phone: "+91-9123456885", whatsapp: "+919123456885", lat:18.6870, lon:73.1020 },
          { name: "Farmers' Choice", address: "Market Yard, Pen", phone: "+91-9123456886", whatsapp: "+919123456886", lat:18.6850, lon:73.0990 },
          { name: "Krushi Mitra Pen", address: "Near Petrol Pump, Pen", phone: "+91-9123456887", whatsapp: "+919123456887", lat:18.6890, lon:73.1060 },
          { name: "Rural Agro Solutions", address: "Village Road, Pen", phone: "+91-9123456888", whatsapp: "+919123456888", lat:18.6830, lon:73.0940 }
        ],
        "Roha": [{ name: "Roha Agro Store", address: "Main Rd, Roha - 402109", phone: "+91-9123456889", whatsapp: "+919123456889", lat:18.4430, lon:73.1000 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Roha", phone: "+91-9123456890", whatsapp: "+919123456890", lat:18.4450, lon:73.1050 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Roha", phone: "+91-9123456891", whatsapp: "+919123456891", lat:18.4410, lon:73.0950 },
          { name: "Agro World Roha", address: "Station Rd, Roha", phone: "+91-9123456892", whatsapp: "+919123456892", lat:18.4440, lon:73.1020 },
          { name: "Farmers' Choice", address: "Market Yard, Roha", phone: "+91-9123456893", whatsapp: "+919123456893", lat:18.4420, lon:73.0990 },
          { name: "Krushi Mitra Roha", address: "Near Petrol Pump, Roha", phone: "+91-9123456894", whatsapp: "+919123456894", lat:18.4460, lon:73.1060 },
          { name: "Rural Agro Solutions", address: "Village Road, Roha", phone: "+91-9123456895", whatsapp: "+919123456895", lat:18.4400, lon:73.0940 }
        ] ,
        "Mangaon": [{ name: "Mangaon Agro Store", address: "Main Rd, Mangaon - 402104", phone: "+91-9123456896", whatsapp: "+919123456896", lat:18.2140, lon:73.1000 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Mangaon", phone: "+91-9123456897", whatsapp: "+919123456897", lat:18.2160, lon:73.1050 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Mangaon", phone: "+91-9123456898", whatsapp: "+919123456898", lat:18.2120, lon:73.0950 },
          { name: "Agro World Mangaon", address: "Station Rd, Mangaon", phone: "+91-9123456899", whatsapp: "+919123456899", lat:18.2150, lon:73.1020 },
          { name: "Farmers' Choice", address: "Market Yard, Mangaon", phone: "+91-9123456800", whatsapp: "+919123456800", lat:18.2130, lon:73.0990 },
          { name: "Krushi Mitra Mangaon", address: "Near Petrol Pump, Mangaon", phone: "+91-9123456801", whatsapp: "+919123456801", lat:18.2170, lon:73.1060 },
          { name: "Rural Agro Solutions", address: "Village Road, Mangaon", phone: "+91-9123456802", whatsapp: "+919123456802", lat:18.2110, lon:73.0940 }
        ]
      },
      "Wardha": {
        "Wardha": [
          { name: "Wardha Agro Hub", address: "Main Rd, Wardha - 442001", phone: "+91-9123456803", whatsapp: "+919123456803", lat:20.7450, lon:78.6020 },
          { name: "Farmers' Choice Wardha", address: "Near Bus Stand, Wardha", phone: "+91-9123456804", whatsapp: "+919123456804", lat:20.7470, lon:78.6070 },
          { name: "Agro World Wardha", address: "Station Rd, Wardha", phone: "+91-9123456805", whatsapp: "+919123456805", lat:20.7430, lon:78.5970 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Wardha", phone: "+91-9123456806", whatsapp: "+919123456806", lat:20.7460, lon:78.6040 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Wardha", phone: "+91-9123456807", whatsapp: "+919123456807", lat:20.7440, lon:78.6010 },
          { name: "Krushi Mitra Wardha", address: "Near Petrol Pump, Wardha", phone: "+91-9123456808", whatsapp: "+919123456808", lat:20.7480, lon:78.6080 },
          { name: "Rural Agro Solutions", address: "Village Road, Wardha", phone: "+91-9123456809", whatsapp: "+919123456809", lat:20.7420, lon:78.5960 }
        ],
        "Arvi": [
          { name: "Arvi Agro Store", address: "Main Rd, Arvi - 442201", phone: "+91-9123456810", whatsapp: "+919123456810", lat:20.7160, lon:78.9300 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Arvi", phone: "+91-9123456811", whatsapp: "+919123456811", lat:20.7180, lon:78.9350 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Arvi", phone: "+91-9123456812", whatsapp: "+919123456812", lat:20.7140, lon:78.9250 },
          { name: "Agro World Arvi", address: "Station Rd, Arvi", phone: "+91-9123456813", whatsapp: "+919123456813", lat:20.7170, lon:78.9320 },
          { name: "Farmers' Choice", address: "Market Yard, Arvi", phone: "+91-9123456814", whatsapp: "+919123456814", lat:20.7150, lon:78.9290 },
          { name: "Krushi Mitra Arvi", address: "Near Petrol Pump, Arvi", phone: "+91-9123456815", whatsapp: "+919123456815", lat:20.7190, lon:78.9360 },
          { name: "Rural Agro Solutions", address: "Village Road, Arvi", phone: "+91-9123456816", whatsapp: "+919123456816", lat:20.7130, lon:78.9240 }
        ],
        "Deoli": [
          { name: "Deoli Agro Store", address: "Main Rd, Deoli - 442203", phone: "+91-9123456817", whatsapp: "+919123456817", lat:20.5500, lon:78.9000 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Deoli", phone: "+91-9123456818", whatsapp: "+919123456818", lat:20.5520, lon:78.9050 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Deoli", phone: "+91-9123456819", whatsapp: "+919123456819", lat:20.5480, lon:78.8950 },
          { name: "Agro World Deoli", address: "Station Rd, Deoli", phone: "+91-9123456820", whatsapp: "+919123456820", lat:20.5510, lon:78.9020 },
          { name: "Farmers' Choice", address: "Market Yard, Deoli", phone: "+91-9123456821", whatsapp: "+919123456821", lat:20.5490, lon:78.8990 },
          { name: "Krushi Mitra Deoli", address: "Near Petrol Pump, Deoli", phone: "+91-9123456822", whatsapp: "+919123456822", lat:20.5530, lon:78.9060 },
          { name: "Rural Agro Solutions", address: "Village Road, Deoli", phone: "+91-9123456823", whatsapp: "+919123456823", lat:20.5470, lon:78.8940 }
        ],
        "Hinganghat": [
          { name: "Hinganghat Agro Store", address: "Main Rd, Hinganghat - 442301", phone: "+91-9123456824", whatsapp: "+919123456824", lat:20.4660, lon:79.2330 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Hinganghat", phone: "+91-9123456825", whatsapp: "+919123456825", lat:20.4680, lon:79.2380 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Hinganghat", phone: "+91-9123456826", whatsapp: "+919123456826", lat:20.4640, lon:79.2280 },
          { name: "Agro World Hinganghat", address: "Station Rd, Hinganghat", phone: "+91-9123456827", whatsapp: "+919123456827", lat:20.4670, lon:79.2350 },
          { name: "Farmers' Choice", address: "Market Yard, Hinganghat", phone: "+91-9123456828", whatsapp: "+919123456828", lat:20.4650, lon:79.2320 },
          { name: "Krushi Mitra Hinganghat", address: "Near Petrol Pump, Hinganghat", phone: "+91-9123456829", whatsapp: "+919123456829", lat:20.4690, lon:79.2390 },
          { name: "Rural Agro Solutions", address: "Village Road, Hinganghat", phone: "+91-9123456830", whatsapp: "+919123456830", lat:20.4630, lon:79.2270 }
        ],
        "Samudrapur": [
          { name: "Samudrapur Agro Store", address: "Main Rd, Samudrapur - 442305", phone: "+91-9123456831", whatsapp: "+919123456831", lat:20.3500, lon:79.1500 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Samudrapur", phone: "+91-9123456832", whatsapp: "+919123456832", lat:20.3520, lon:79.1550 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Samudrapur", phone: "+91-9123456833", whatsapp: "+919123456833", lat:20.3480, lon:79.1450 },
          { name: "Agro World Samudrapur", address: "Station Rd, Samudrapur", phone: "+91-9123456834", whatsapp: "+919123456834", lat:20.3510, lon:79.1520 },
          { name: "Farmers' Choice", address: "Market Yard, Samudrapur", phone: "+91-9123456835", whatsapp: "+919123456835", lat:20.3490, lon:79.1490 },
          { name: "Krushi Mitra Samudrapur", address: "Near Petrol Pump, Samudrapur", phone: "+91-9123456836", whatsapp: "+919123456836", lat:20.3530, lon:79.1560 },
          { name: "Rural Agro Solutions", address: "Village Road, Samudrapur", phone: "+91-9123456837", whatsapp: "+919123456837", lat:20.3470, lon:79.1440 }
        ]
      },
      "Yavatmal": {
        "Yavatmal": [
          { name: "Yavatmal Agro Hub", address: "Main Rd, Yavatmal - 445001", phone: "+91-9123456838", whatsapp: "+919123456838", lat:20.3880, lon:78.1300 },
          { name: "Farmers' Choice Yavatmal", address: "Near Bus Stand, Yavatmal", phone: "+91-9123456839", whatsapp: "+919123456839", lat:20.3900, lon:78.1350 },
          { name: "Agro World Yavatmal", address: "Station Rd, Yavatmal", phone: "+91-9123456840", whatsapp: "+919123456840", lat:20.3860, lon:78.1250 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Yavatmal", phone: "+91-9123456841", whatsapp: "+919123456841", lat:20.3890, lon:78.1320 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Yavatmal", phone: "+91-9123456842", whatsapp: "+919123456842", lat:20.3870, lon:78.1290 },
          { name: "Krushi Mitra Yavatmal", address: "Near Petrol Pump, Yavatmal", phone: "+91-9123456843", whatsapp: "+919123456843", lat:20.3910, lon:78.1360 },
          { name: "Rural Agro Solutions", address: "Village Road, Yavatmal", phone: "+91-9123456844", whatsapp: "+919123456844", lat:20.3850, lon:78.1240 }
        ],
        "Umarkhed": [
          { name: "Umarkhed Agro Store", address: "Main Rd, Umarkhed - 445206", phone: "+91-9123456845", whatsapp: "+919123456845", lat:19.9500, lon:78.3500 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Umarkhed", phone: "+91-9123456846", whatsapp: "+919123456846", lat:19.9520, lon:78.3550 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Umarkhed", phone: "+91-9123456847", whatsapp: "+919123456847", lat:19.9480, lon:78.3450 },
          { name: "Agro World Umarkhed", address: "Station Rd, Umarkhed", phone: "+91-9123456848", whatsapp: "+919123456848", lat:19.9510, lon:78.3520 },
          { name: "Farmers' Choice", address: "Market Yard, Umarkhed", phone: "+91-9123456849", whatsapp: "+919123456849", lat:19.9490, lon:78.3490 },
          { name: "Krushi Mitra Umarkhed", address: "Near Petrol Pump, Umarkhed", phone: "+91-9123456850", whatsapp: "+919123456850", lat:19.9530, lon:78.3560 },
          { name: "Rural Agro Solutions", address: "Village Road, Umarkhed", phone: "+91-9123456851", whatsapp: "+919123456851", lat:19.9470, lon:78.3440 }
        ],
        "Pusad": [
          { name: "Pusad Agro Store", address: "Main Rd, Pusad - 445204", phone: "+91-9123456852", whatsapp: "+919123456852", lat:20.4000, lon:77.6000 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Pusad", phone: "+91-9123456853", whatsapp: "+919123456853", lat:20.4020, lon:77.6050 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Pusad", phone: "+91-9123456854", whatsapp: "+919123456854", lat:20.3980, lon:77.5950 },
          { name: "Agro World Pusad", address: "Station Rd, Pusad", phone: "+91-9123456855", whatsapp: "+919123456855", lat:20.4010, lon:77.6020 },
          { name: "Farmers' Choice", address: "Market Yard, Pusad", phone: "+91-9123456856", whatsapp: "+919123456856", lat:20.3990, lon:77.5990 },
          { name: "Krushi Mitra Pusad", address: "Near Petrol Pump, Pusad", phone: "+91-9123456857", whatsapp: "+919123456857", lat:20.4030, lon:77.6060 },
          { name: "Rural Agro Solutions", address: "Village Road, Pusad", phone: "+91-9123456858", whatsapp: "+919123456858", lat:20.3970, lon:77.5940 }
        ],
        "Darwha": [
          { name: "Darwha Agro Store", address: "Main Rd, Darwha - 445202", phone: "+91-9123456859", whatsapp: "+919123456859", lat:20.5500, lon:77.8500 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Darwha", phone: "+91-9123456860", whatsapp: "+919123456860", lat:20.5520, lon:77.8550 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Darwha", phone: "+91-9123456861", whatsapp: "+919123456861", lat:20.5480, lon:77.8450 },
          { name: "Agro World Darwha", address: "Station Rd, Darwha", phone: "+91-9123456862", whatsapp: "+919123456862", lat:20.5510, lon:77.8520 },
          { name: "Farmers' Choice", address: "Market Yard, Darwha", phone: "+91-9123456863", whatsapp: "+919123456863", lat:20.5490, lon:77.8490 },
          { name: "Krushi Mitra Darwha", address: "Near Petrol Pump, Darwha", phone: "+91-9123456864", whatsapp: "+919123456864", lat:20.5530, lon:77.8560 },
          { name: "Rural Agro Solutions", address: "Village Road, Darwha", phone: "+91-9123456865", whatsapp: "+919123456865", lat:20.5470, lon:77.8440 }
        ],
      },
      "Latur": {
        "Latur": [
          { name: "Latur Agro Hub", address: "Main Rd, Latur - 413512", phone: "+91-9123456866", whatsapp: "+919123456866", lat:18.4080, lon:76.5690 },
          { name: "Farmers' Choice Latur", address: "Near Bus Stand, Latur", phone: "+91-9123456867", whatsapp: "+919123456867", lat:18.4100, lon:76.5740 },
          { name: "Agro World Latur", address: "Station Rd, Latur", phone: "+91-9123456868", whatsapp: "+919123456868", lat:18.4060, lon:76.5640 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Latur", phone: "+91-9123456869", whatsapp: "+919123456869", lat:18.4090, lon:76.5710 },
          { name: "Shree Krushi Seva Kendra", address: "Main Rd, Latur", phone: "+91-9123456870", whatsapp: "+919123456870", lat:18.4070, lon:76.5680 },
          { name: "Krushi Mitra Latur", address: "Near Petrol Pump, Latur", phone: "+91-9123456871", whatsapp: "+919123456871", lat:18.4110, lon:76.5750 },
          { name: "Rural Agro Solutions", address: "Village Road, Latur", phone: "+91-9123456872", whatsapp: "+919123456872", lat:18.4050, lon:76.5630 }  
        ],
        "Nilanga": [
          { name: "Nilanga Agro Store", address: "Main Rd, Nilanga - 413521", phone: "+91-9123456873", whatsapp: "+919123456873", lat:18.1500, lon:76.5500 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Nilanga", phone: "+91-9123456874", whatsapp: "+919123456874", lat:18.1520, lon:76.5550 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Nilanga", phone: "+91-9123456875", whatsapp: "+919123456875", lat:18.1480, lon:76.5450 },
          { name: "Agro World Nilanga", address: "Station Rd, Nilanga", phone: "+91-9123456876", whatsapp: "+919123456876", lat:18.1510, lon:76.5520 },
          { name: "Farmers' Choice", address: "Market Yard, Nilanga", phone: "+91-9123456877", whatsapp: "+919123456877", lat:18.1490, lon:76.5490 },
          { name: "Krushi Mitra Nilanga", address: "Near Petrol Pump, Nilanga", phone: "+91-9123456878", whatsapp: "+919123456878", lat:18.1530, lon:76.5560 },
          { name: "Rural Agro Solutions", address: "Village Road, Nilanga", phone: "+91-9123456879", whatsapp: "+919123456879", lat:18.1470, lon:76.5440 }
        ],
        "Ausa": [
          { name: "Ausa Agro Store", address: "Main Rd, Ausa - 413520", phone: "+91-9123456880", whatsapp: "+919123456880", lat:18.3100, lon:76.5700 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Ausa", phone: "+91-9123456881", whatsapp: "+919123456881", lat:18.3120, lon:76.5750 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Ausa", phone: "+91-9123456882", whatsapp: "+919123456882", lat:18.3080, lon:76.5650 },
          { name: "Agro World Ausa", address: "Station Rd, Ausa", phone: "+91-9123456883", whatsapp: "+919123456883", lat:18.3110, lon:76.5720 },
          { name: "Farmers' Choice", address: "Market Yard, Ausa", phone: "+91-9123456884", whatsapp: "+919123456884", lat:18.3090, lon:76.5690 },
          { name: "Krushi Mitra Ausa", address: "Near Petrol Pump, Ausa", phone: "+91-9123456885", whatsapp: "+919123456885", lat:18.3130, lon:76.5760 },
          { name: "Rural Agro Solutions", address: "Village Road, Ausa", phone: "+91-9123456886", whatsapp: "+919123456886", lat:18.3070, lon:76.5640 }
        ],
        "Udgir": [
          { name: "Udgir Agro Store", address: "Main Rd, Udgir - 413517", phone: "+91-9123456887", whatsapp: "+919123456887", lat:18.3600, lon:77.1200 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Udgir", phone: "+91-9123456888", whatsapp: "+919123456888", lat:18.3620, lon:77.1250 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Udgir", phone: "+91-9123456889", whatsapp: "+919123456889", lat:18.3580, lon:77.1150 },
          { name: "Agro World Udgir", address: "Station Rd, Udgir", phone: "+91-9123456890", whatsapp: "+919123456890", lat:18.3610, lon:77.1220 },
          { name: "Farmers' Choice", address: "Market Yard, Udgir", phone: "+91-9123456891", whatsapp: "+919123456891", lat:18.3590, lon:77.1190 },
          { name: "Krushi Mitra Udgir", address: "Near Petrol Pump, Udgir", phone: "+91-9123456892", whatsapp: "+919123456892", lat:18.3630, lon:77.1260 },
          { name: "Rural Agro Solutions", address: "Village Road, Udgir", phone: "+91-9123456893", whatsapp: "+919123456893", lat:18.3570, lon:77.1140 }
        ],
      },
      "Jalgaon": {
        "Jalgaon": [

        ],
        "Bhusawal": [],
        "Chalisgaon": [],
        "Raver": [],
        "YaWal": []
      },
      "Kolhapur": {
        "Kolhapur": [],
        "Panhala": [],
        "Hatkanangale": [],
        "Gadhinglaj": []
      },
      "Dhule": {
        "Dhule": [],
        "Shirpur": [],
        "Sakri": [],
        "Nardana": []
      },
      "Gondia":{
        "Gondia": [],
        "Tirora": [],
        "Deori": [],
        "Arjuni Morgaon": []
      },
      "Akola":{
        "Akola": [],
        "Murtizapur": [],
        "Patur": [],
        "Barshitakli": []
      },
      "Beed":{
        "Beed": [],
        "Ashti": [],
        "Kaij": [],
        "Wadwani": []
      },
      "Bandara":{
        "Lakhani": [],
        "Tumsar": [],
        "Bhandara": [],
        "Sakoli": []
      },
      "Chadrapur":{
        "Chandrapur": [],
        "Ballarpur": [],
        "Warora": [],
        "Rajura": []
      },
      "Gadchiroli":{
        "Gadchiroli": [],
        "Aheri": [],
        "Etapalli": [],
        "Chamorshi": []
      },
      "Jalna":{
        "Jalna": [],
        "Bhokardan": [],
        "Ambad": [],
        "Badnapur": []
      },
      "Nanded":{
        "Nanded": [],
        "Deglur": [],
        "Mukhed": [],
        "Himayatnagar": []
      },
      "Mumbai":{
        "Mumbai City":[],
        "Mumbai Suburban":[],
        "Andheri":[],
        "Bandra":[],
      },
      "Dharashiv":{
        "Dharashiv":[],
        "Osmanabad":[],
        "Tuljapur":[],
        "Lohara":[],
      },
      "Palghar":{
        "Palghar":[],

      },
      "Ratnagiri":{},
      "Sindhudurg":{},
      "Washim":{},
      "Satara":{}
    },
    "Karnataka": {
      "Bengaluru Urban": {
        "Bengaluru North": [
          { name: "Bangalore Agro Supplies", address: "MG Rd, Bengaluru - 560001", phone: "+91-9988776655", whatsapp: "+919988776655", lat:12.9716, lon:77.5946 },
          { name: "Farmers' Friend", address: "Brigade Rd, Bengaluru", phone: "+91-8877665544", whatsapp: "+918877665544", lat:12.9726, lon:77.5956 },
          { name: "Green Grow Fertilizers", address: "Commercial St, Bengaluru", phone: "+91-7766554433", whatsapp: "+917766554433", lat:12.9736, lon:77.5966 },
          { name: "Krushi Mitra Bengaluru", address: "Jayanagar, Bengaluru", phone: "+91-6655443322", whatsapp: "+916655443322", lat:12.9498, lon:77.5901 },
          { name: "Agro World Bengaluru", address: "Koramangala, Bengaluru", phone: "+91-5544332211", whatsapp: "+915544332211", lat:12.9352, lon:77.6245 },
          { name: "Rural Agro Center", address: "Yelahanka, Bengaluru", phone: "+91-4433221100", whatsapp: "+914433221100", lat:13.0845, lon:77.5938 },
          { name: "Farm Fresh Fertilizers", address: "Hebbal, Bengaluru", phone: "+91-3322110099", whatsapp: "+913322110099", lat:13.0285, lon:77.5895 }
        ],
        "Bengaluru South": [{ name: "South Bangalore Agro", address: "Jayanagar, Bengaluru - 560041", phone: "+91-9988776656", whatsapp: "+919988776656", lat:12.9498, lon:77.5901 },
          { name: "Farmers' Hub South", address: "JP Nagar, Bengaluru", phone: "+91-8877665545", whatsapp: "+918877665545", lat:12.9322, lon:77.5838 },
          { name: "Green Leaf Fertilizers", address: "Bannerghatta Rd, Bengaluru", phone: "+91-7766554434", whatsapp: "+917766554434", lat:12.9250, lon:77.5938 },
          { name: "Krushi Mitra South", address: "Basavanagudi, Bengaluru", phone: "+91-6655443323", whatsapp: "+916655443323", lat:12.9352, lon:77.5845 },
          { name: "Agro World South", address: "Electronic City, Bengaluru", phone: "+91-5544332212", whatsapp: "+915544332212", lat:12.8397, lon:77.6770 },
          { name: "Rural Agro Center South", address: "Kanakapura Rd, Bengaluru", phone: "+91-4433221101", whatsapp: "+914433221101", lat:12.8000, lon:77.6000 },
          { name: "Farm Fresh Fertilizers South", address: "Hosur Rd, Bengaluru", phone: "+91-3322110098", whatsapp: "+913322110098", lat:12.7326, lon:77.7076 }
        ]
      },
      "Mysuru": {
        "Mysuru": [
          { name: "Mysore Fertilizer Co.", address: "Ashoka Rd, Mysuru - 570001", phone: "+91-8877665544", whatsapp: "+918877665544", lat:12.2958, lon:76.6394 },
          { name: "Farmers' Choice Mysuru", address: "Gokulam, Mysuru", phone: "+91-7766554433", whatsapp: "+917766554433", lat:12.3070, lon:76.6490 },
          { name: "Green Grow Fertilizers", address: "Vijayanagar, Mysuru", phone: "+91-6655443322", whatsapp: "+916655443322", lat:12.3142, lon:76.6350 },
          { name: "Krushi Mitra Mysuru", address: "Hebbal, Mysuru", phone: "+91-5544332211", whatsapp: "+915544332211", lat:12.3210, lon:76.6380 },
          { name: "Agro World Mysuru", address: "Chamundi Hill Rd, Mysuru", phone: "+91-4433221100", whatsapp: "+914433221100", lat:12.2950, lon:76.6500 },
          { name: "Rural Agro Center Mysuru", address: "Hunsur Rd, Mysuru", phone: "+91-3322110099", whatsapp: "+913322110099", lat:12.2800, lon:76.6200 }
        ],
        "Nanjangud": []
      },
      "Dharwad": {
        "Dharwad": [
          { name: "Dharwad Agro Center", address: "Main St, Dharwad - 580001", phone: "+91-7766554433", whatsapp: "+917766554433", lat:15.4589, lon:75.0078 },
          { name: "Farmers' Hub Dharwad", address: "Gandhi Rd, Dharwad", phone: "+91-6655443322", whatsapp: "+916655443322", lat:15.4599, lon:75.0088 },
          { name: "Green Leaf Fertilizers", address: "Station Rd, Dharwad", phone: "+91-5544332211", whatsapp: "+915544332211", lat:15.4579, lon:75.0068 },
          { name: "Krushi Mitra Dharwad", address: "Navanagar, Dharwad", phone: "+91-4433221100", whatsapp: "+914433221100", lat:15.4609, lon:75.0098 },
          { name: "Agro World Dharwad", address: "Hubli Rd, Dharwad", phone: "+91-3322110099", whatsapp: "+913322110099", lat:15.4569, lon:75.0058 },
          { name: "Rural Agro Center Dharwad", address: "Karnataka Rd, Dharwad", phone: "+91-2211009988", whatsapp: "+912211009988", lat:15.4619, lon:75.0108 },
          { name: "Farm Fresh Fertilizers Dharwad", address: "Opposite Temple, Dharwad", phone: "+91-1100998877", whatsapp: "+911100998877", lat:15.4559, lon:75.0048 }
        ],
        "Hubli": [{ name: "Hubli Agro Store", address: "Main Rd, Hubli - 580020", phone: "+91-9988776655", whatsapp: "+919988776655", lat:15.3647, lon:75.1234 },
          { name: "Green Fields Fertilizer", address: "Gandhi Market, Hubli", phone: "+91-8877665544", whatsapp: "+918877665544", lat:15.3667, lon:75.1284 },
          { name: "Shree Krushi Seva Kendra", address: "Near Bus Stand, Hubli", phone: "+91-7766554433", whatsapp: "+917766554433", lat:15.3627, lon:75.1184 },
          { name: "Agro World Hubli", address: "Station Rd, Hubli", phone: "+91-6655443322", whatsapp: "+916655443322", lat:15.3657, lon:75.1254 },
          { name: "Farmers' Choice", address: "Market Yard, Hubli", phone: "+91-5544332211", whatsapp: "+915544332211", lat:15.3637, lon:75.1214 },
          { name: "Krushi Mitra Hubli", address: "Near Petrol Pump, Hubli", phone: "+91-4433221100", whatsapp: "+914433221100", lat:15.3677, lon:75.1294 },
          { name: "Rural Agro Solutions", address: "Village Road, Hubli", phone: "+91-3322110099", whatsapp: "+913322110099", lat:15.3617, lon:75.1174 },
          { name: "Farm Fresh Fertilizers", address: "Opposite Temple, Hubli", phone: "+91-2211009988", whatsapp: "+912211009988", lat:15.3607, lon:75.1164 },
          { name: "Shree Agro Fert", address: "Plot 10, MIDC, Hubli", phone: "+91-1100998877", whatsapp: "+911100998877", lat:15.3687, lon:75.1304}
        ]
      }
  }
}
};

/* -----------------------------
   Elements
----------------------------- */
const stateSel = document.getElementById('state');
const districtSel = document.getElementById('district');
const talukaSel = document.getElementById('taluka');
const langSel = document.getElementById('lang');
const searchInput = document.getElementById('searchFarm');
const dealerList = document.getElementById('dealerList');
const resultHeader = document.getElementById('resultHeader');
const resultSub = document.getElementById('resultSub');
const micBtn = document.getElementById('micBtn');
const showBtn = document.getElementById('showDealers');
const autoBtn = document.getElementById('autoDetect');
const downloadCSV = document.getElementById('downloadCSV');
const downloadPDF = document.getElementById('downloadPDF');
const themeBtn = document.getElementById('themeBtn');

let map = null;
let mapMarkers = [];

/* -----------------------------
   Helpers
----------------------------- */
function safeGet(array, path) {
  // path as array of keys. returns undefined if any missing
  return path.reduce((acc, k) => (acc && acc[k] !== undefined) ? acc[k] : undefined, array);
}

function clearMarkers() {
  if (!map || !mapMarkers.length) return;
  mapMarkers.forEach(m => m.setMap(null));
  mapMarkers = [];
}

function addMarker(lat, lon, title) {
  if (!map) return;
  const m = new google.maps.Marker({ position: { lat, lng: lon }, map, title });
  mapMarkers.push(m);
}

/* -----------------------------
   Populate selects safely
----------------------------- */
function populateStates() {
  stateSel.innerHTML = '';
  Object.keys(data.states || {}).forEach(s => {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = s;
    stateSel.appendChild(opt);
  });
  // set first if none selected
  if(!stateSel.value && stateSel.options.length) stateSel.selectedIndex = 0;
  populateDistricts();
}

function populateDistricts() {
  districtSel.innerHTML = '';
  const st = stateSel.value;
  const districts = safeGet(data, ['states', st, 'districts']) || {};
  Object.keys(districts).forEach(d => {
    const opt = document.createElement('option');
    opt.value = d; opt.textContent = d;
    districtSel.appendChild(opt);
  });
  if(!districtSel.value && districtSel.options.length) districtSel.selectedIndex = 0;
  populateTalukas();
}

function populateTalukas() {
  talukaSel.innerHTML = '';
  const st = stateSel.value, di = districtSel.value;
  const talukas = safeGet(data, ['states', st, 'districts', di, 'talukas']) || {};
  Object.keys(talukas).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t; opt.textContent = t;
    talukaSel.appendChild(opt);
  });
  if(!talukaSel.value && talukaSel.options.length) talukaSel.selectedIndex = 0;
}

/* -----------------------------
   Show dealers (safe)
----------------------------- */
function showDealers() {
  dealerList.innerHTML = '';
  clearMarkers();

  const st = stateSel.value, di = districtSel.value, ta = talukaSel.value;
  if(!st || !di || !ta) {
    resultHeader.textContent = 'Dealers (0)';
    resultSub.textContent = 'Please select state / district / taluka';
    return;
  }

  const list = safeGet(data, ['dealers', st, di, ta]) || [];
  const q = (searchInput.value || '').trim().toLowerCase();

  const filtered = list.filter(d => {
    if(!q) return true;
    const hay = `${d.name} ${d.address} ${d.phone}`.toLowerCase();
    return hay.includes(q);
  });

  if (!filtered.length) {
    dealerList.innerHTML = '<div class="small-muted">No dealers found for selected taluka.</div>';
    resultHeader.textContent = `Dealers (0)`;
    resultSub.textContent = 'Try different taluka or remove search term';
    return;
  }

  filtered.forEach(d => {
    const phoneEsc = d.phone ? d.phone.replace(/'/g,"\\'") : '';
    const wnum = (d.whatsapp||'').replace(/\D/g,'');
    const waHref = wnum ? `https://wa.me/${wnum}` : '#';
    const lat = Number(d.lat), lon = Number(d.lon);
    const div = document.createElement('div');
    div.className = 'dealer';
    div.innerHTML =
      `<div style="flex:1">
         <div class="name">${escapeHtml(d.name)}</div>
         <div class="stars">⭐ ⭐ ⭐ ⭐ ☆</div>
         <div class="addr">${escapeHtml(d.address)}</div>
       </div>
       <div style="display:flex;flex-direction:column;gap:6px;">
         <button class="btn-small" onclick="copyText('${phoneEsc}')">📞 Call</button>
         <a class="btn-small" href="${waHref}" target="_blank" rel="noopener">💬 WhatsApp</a>
       </div>`;
    dealerList.appendChild(div);
    // add map marker if coordinates present
    if (!isNaN(lat) && !isNaN(lon) && map) {
      addMarker(lat, lon, d.name);
    }
  });

  resultHeader.textContent = `Dealers (${filtered.length})`;
  resultSub.textContent = `${Math.min(filtered.length, 50)} shown`;
}

/* -----------------------------
   Utilities
----------------------------- */
function escapeHtml(t){ return String(t||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function copyText(t){ if(!t) return; navigator.clipboard.writeText(t).then(()=> alert('Copied: '+t)).catch(()=>alert('Copy failed')); }

/* -----------------------------
   CSV & PDF
----------------------------- */
function downloadCSVFile() {
  const st = stateSel.value, di = districtSel.value, ta = talukaSel.value;
  const list = safeGet(data, ['dealers', st, di, ta]) || [];
  if(!list.length) return alert('No dealers to export');

  const rows = [['Name','Address','Phone']];
  list.forEach(d => rows.push([d.name, d.address, d.phone]));
  const csv = rows.map(r => r.map(c => `"${String(c||'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type:'text/csv' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${st}_${di}_${ta}_dealers.csv`; a.click();
}

function printPDF() {
  window.print();
}

/* -----------------------------
   Map initialization (safe)
----------------------------- */
function initMapIfAvailable() {
  // Only initialize if google maps script loaded
  if (typeof google !== 'undefined' && google.maps) {
    map = new google.maps.Map(document.getElementById('map'), { center:{ lat:20.53, lng:75.18 }, zoom:10 });
    // optionally add sample markers for visible dealers
  } else {
    // google maps not loaded or API key missing — show fallback message
    document.getElementById('map').textContent = '🌍📍🌍';
  }
}

/* -----------------------------
   Auto-detect location
----------------------------- */
function autoDetectLocation() {
  if (!navigator.geolocation) return alert('Geolocation not supported by browser');
  autoBtn.disabled = true; autoBtn.textContent = 'Detecting...';
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude, lon = pos.coords.longitude;
    if (map) {
      map.setCenter({ lat, lng: lon }); map.setZoom(12);
      addMarker(lat, lon, 'You are here');
    } else {
      alert(`Your location: ${lat.toFixed(4)}, ${lon.toFixed(4)}`);
    }
    autoBtn.disabled = false; autoBtn.textContent = 'Auto Detect Location';
  }, err => {
    autoBtn.disabled = false; autoBtn.textContent = 'Auto Detect Location';
    alert('Permission denied or unable to get location');
  }, { timeout: 10000 });
}

/* -----------------------------
   Voice search (guarded)
----------------------------- */
function startVoiceSearch() {
  const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Speech) return alert('SpeechRecognition not supported in this browser');
  const rec = new Speech();
  rec.lang = 'en-IN';
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.onresult = (e) => {
    const text = e.results[0][0].transcript || '';
    searchInput.value = text;
    showDealers();
  };
  rec.onerror = (ev) => {
    console.error('Speech error', ev);
    alert('Voice recognition error');
  };
  rec.start();
}

/* -----------------------------
   3D card parallax
----------------------------- */
function attachCardParallax() {
  const card = document.getElementById('card3d');
  if (!card) return;
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const rx = (y - rect.height / 2) / 20;
    const ry = (rect.width / 2 - x) / 20;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = 'rotateX(0) rotateY(0)');
}

/* -----------------------------
   Event wiring & startup
----------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  populateStates();
  populateDistricts();
  populateTalukas();
  attachCardParallax();
  initMapIfAvailable();

  // listeners
  stateSel.addEventListener('change', () => { populateDistricts(); showDealers(); });
  districtSel.addEventListener('change', () => { populateTalukas(); showDealers(); });
  talukaSel.addEventListener('change', showDealers);
  showBtn.addEventListener('click', showDealers);
  micBtn.addEventListener('click', startVoiceSearch);
  autoBtn.addEventListener('click', autoDetectLocation);
  downloadCSV.addEventListener('click', downloadCSVFile);
  downloadPDF.addEventListener('click', printPDF);
  themeBtn.addEventListener('click', () => document.body.classList.toggle('dark-mode'));
  searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') showDealers(); });

  // set default selections if available
  if (stateSel.options.length) stateSel.selectedIndex = 0;
  populateDistricts();
  if (districtSel.options.length) districtSel.selectedIndex = 0;
  populateTalukas();
  if (talukaSel.options.length) talukaSel.selectedIndex = 0;
});

// Toggle mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

