/* -----------------------------
   Data (sample) — expand as needed
   ----------------------------- */
const data = {
  states: {
    "Maharashtra": {
  districts: {
    "Buldhana": { talukas: { 
        "Buldana": {}, "Chikhli": {}, "Khamgaon": {}, "Nandura": {}, "Malkapur": {}, 
        "Mehkar": {}, "Motala": {}, "Deulgaon Raja": {}, "Lonar": {}, 
        "Sindkhed Raja": {}, "Jalgaon Jamod": {}, "Shegaon": {}
      } 
    },
    "Pune": { talukas: { "Haveli": {}, "Baramati": {}, "Shirur": {}, "Bhor": {} } },
    "Amravati": { talukas: { "Amravati": {}, "Achalpur": {}, "Daryapur": {}, "Chikhaldara": {} } },
    "Parbhani": { talukas: { "Parbhani": {}, "Gangakhed": {}, "Purna": {}, "Sonpeth": {},"Jintur": {} } }
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
      }
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
    document.getElementById('map').textContent = 'Map not available (missing or invalid API key).';
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

