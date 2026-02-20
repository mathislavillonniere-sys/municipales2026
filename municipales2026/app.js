// --- 1. DONNÉES (DATA) ---
// Mise à jour : 09 Janvier 2025
// Candidats déclarés ou chefs de file naturels selon la presse (Le Parisien, PQR, etc.)
const citiesData = [
  // --- A ---
  {
    name: "Aix-en-Provence",
    coords: [43.5297, 5.4474],
    population: 145133,
    interco: "Métropole d'Aix-Marseille-Provence",
    mayor: "Sophie Joissains (UDI)",
    mayorColor: "#66ccff",
    candidates: [
      {
        name: "Sophie Joissains",
        party: "UDI",
        isMayor: true,
        color: "#66ccff",
        score: "34%",
        slogan: "",
      },
      {
        name: "Marc Pena",
        party: "PS - LÉ - PCF - G.s - PP - PO - GES - E!",
        color: "#FF3333",
        score: "21%",
        slogan: "Aix avenir",
      },
      {
        name: "Jean-Louis Geiger",
        party: "RN - UDR",
        color: "#0d378a",
        score: "20%",
        slogan: "Agir pour Aix",
      },
      {
        name: "Julie Boronad",
        party: "LFI",
        color: "#cc2443",
        score: "10%",
        slogan: "Aix en commun",
      },
      {
        name: "Philippe Klein",
        party: "HOR",
        color: "#0a539c",
        score: "8%",
        slogan: "",
      },
      {
        name: "Mounir Ben Ammar",
        party: "REV",
        color: "#77ff77",
        score: "7%",
        slogan: "Aix populaire et vivante",
      },
    ],
    polls: [
      {
        source: "IFOP (Fév. 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/fevrier/10075-mun-aix-ifop-la-provence-13-fevrier.pdf",
        details: "",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "M. Joissains", party: "LR", score: "30,28%" },
        { candidate: "M. Pena", party: "UG", score: "15,88%" },
      ],
      tour2: [
        { candidate: "M. Joissains", party: "LR", score: "43,53%" },
        { candidate: "M. Pena", party: "UG", score: "32,12%" },
        { candidate: "A. Gbaguidi", party: "LREM", score: "24,34%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Sophie Joissains", party: "UDI", score: "" },
        {
          candidate: "Marc Pena",
          party: "PS - LÉ - PCF - G.s - PP - PO - GES - E!",
          score: "",
        },
        { candidate: "Jean-Louis Geiger", party: "RN - UDR", score: "" },
        { candidate: "Julie Boronad", party: "LFI", score: "" },
        { candidate: "Philippe Klein", party: "HOR", score: "" },
        { candidate: "Mounir Ben Ammar", party: "REV", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Amiens",
    coords: [49.894, 2.2957],
    population: 133012,
    interco: "Amiens Métropole",
    mayor: "Brigitte Fouré (RE)",
    mayorColor: "#fab622",
    candidates: [
      {
        name: "Frédéric Fauvet",
        party: "PS - LÉ - PCF - D! - PP - GÉ",
        color: "#ff8080",
        score: "28%",
        slogan: "Pour Amiens",
      },
      {
        name: "Hubert de Jenlis",
        party: "RE / LR / Horizons",
        isMayor: true,
        color: "#fab622",
        score: "24%",
        slogan: "Nous, les amiénois !",
      },
      {
        name: "Damien Toumi",
        party: "RN",
        color: "#0d378a",
        score: "17%",
        slogan: "Amiens Pour Vous",
      },
      {
        name: "Samy Olivier",
        party: "LFI",
        color: "#cc2443",
        score: "13%",
        slogan: "Amiens en commun",
      },
      {
        name: "Julia Bellina",
        party: "SE",
        color: "#cccccc",
        score: "6%",
        slogan: "Amiens Ville d'Avenir",
      },
      {
        name: "Benoit Mercuzot",
        party: "DVC",
        color: "#ffd76e",
        score: "4",
        slogan: "Réussir Amiens ensemble",
      },
      {
        name: "Aurélien Caron",
        party: "LR",
        color: "#0066CC",
        score: "3%",
        slogan: "Amiens Ville d'Avenir",
      },
      {
        name: "Nicolas Reitzaum",
        party: "SE",
        color: "#cccccc",
        score: "2%",
        slogan: "Amiens, qui l’aime me suive !",
      },
      {
        name: "Paul-Éric Dècle",
        party: "LC",
        color: "#adc1fd",
        score: "1%",
        slogan: "Amiens au coeur",
      },
      {
        name: "Ridha Farhat",
        party: "SE",
        color: "#cccccc",
        score: "1%",
        slogan: "100% citoyen",
      },
    ],
    polls: [
      {
        source: "IFOP (Fév. 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/fevrier/10072-mun-amiens-cluster-17-courrier-picard-12-fevrier.pdf",
        details: "",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "B. Fouré", party: "UDI", score: "29,93%" },
        { candidate: "J. Pradayrol", party: "UG", score: "20,06%" },
      ],
      tour2: [
        { candidate: "B. Fouré", party: "UDI", score: "45,79%" },
        { candidate: "J. Pradayrol", party: "UG", score: "30,42%" },
        { candidate: "R. Deschamps", party: "DVC", score: "23,79%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Brigitte Fouré", party: "RE", score: "" },
        {
          candidate: "Hubert de Jenlis",
          party: "RE / LR / Horizons",
          score: "",
        },
        {
          candidate: "Frédéric Fauvet",
          party: "PS - LÉ - PP - GÉ - LRDG",
          score: "",
        },
        { candidate: "Léon Deffontaines", party: "PCF - D! - GES", score: "" },
        { candidate: "Damien Toumi", party: "RN", score: "" },
        { candidate: "Samy Olivier", party: "LFI", score: "" },
        { candidate: "Aurélien Caron", party: "LR", score: "" },
        { candidate: "Benoit Mercuzot", party: "DVC", score: "" },
        { candidate: "Paul-Éric Dècle", party: "LC", score: "" },
        { candidate: "Julia Bellina", party: "SE", score: "" },
        { candidate: "Ridha Farhat", party: "SE", score: "" },
        { candidate: "Nicolas Reitzaum", party: "SE", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Angers",
    coords: [47.4784, -0.5632],
    population: 155850,
    interco: "Angers Loire Métropole",
    mayor: "Christophe Béchu (Horizons)",
    mayorColor: "#1d06e7", // DVD/Horizons
    candidates: [
      {
        name: "Christophe Béchu",
        party: "HOR - RE - MoDem",
        isMayor: true,
        color: "#1d06e7",
        score: "",
        slogan: "",
      },
      {
        name: "Romain Laveau",
        party: "LÉ - PCF - PS - PP - G.s - GRS",
        color: "#00C000",
        score: "",
        slogan: "",
      },
      {
        name: "Aurore Lahondès",
        party: "Rassemblement National",
        color: "#0D378A",
        score: "",
        slogan: "",
      },
      {
        name: "Arash Saeidi",
        party: "La France Insoumise",
        color: "#cc2443",
        score: "",
        slogan: "",
      },
      {
        name: "Valentin Rambault",
        party: "DVC",
        color: "#ffd76e",
        score: "",
        slogan: "Angers 2026",
      },
    ],
    polls: [],
  },
  {
    name: "Angoulême",
    coords: [45.6486, 0.1562],
    population: 41908,
    interco: "Grand Angoulême",
    mayor: "Xavier Bonnefont (HOR)",
    mayorColor: "#1d06e7", // HOR
    candidates: [
      {
        name: "Xavier Bonnefont",
        party: "HOR - RE",
        isMayor: true,
        color: "#1d06e7",
        score: "",
        slogan: "",
      },
      {
        name: "Christophe Duhoux-Salaberry",
        party: "LÉ - DVG",
        color: "#00C000",
        score: "",
        slogan: "",
      },
      {
        name: "Anne-Aziliz Petit-Louboutin",
        party: "LFI-PCF-DVG",
        color: "#cc2443",
        score: "",
        slogan: "Union populaire Angoulême",
      },
      {
        name: "Raphaël Manzanas",
        party: "PS",
        color: "#ff8080",
        score: "",
        slogan: "",
      },
      {
        name: "Patrick Mardikian",
        party: "PS",
        color: "#ff8080",
        score: "",
        slogan: "",
      },
      {
        name: "Vincent You",
        party: "DVD",
        color: "#adc1fd",
        score: "",
        slogan: "",
      },
      {
        name: "Jesse Betruille",
        party: "RN",
        color: "#0d378a",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "Xavier Bonnefont", party: "DVD-LC", score: "52,68%" },
        {
          candidate: "Françoise Coutant",
          party: "EELV-G.s-PCF",
          score: "21,93%",
        },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Xavier Bonnefont", party: "HOR - RE", score: "" },
        {
          candidate: "Christophe Duhoux-Salaberry",
          party: "LÉ - DVG",
          score: "",
        },
        {
          candidate: "Anne-Aziliz Petit-Louboutin",
          party: "LFI-PCF-DVG",
          score: "",
        },
        { candidate: "Raphaël Manzanas", party: "PS", score: "" },
        { candidate: "Patrick Mardikian", party: "PS", score: "" },
        { candidate: "Vincent You", party: "DVD", score: "" },
        { candidate: "Jesse Betruille", party: "RN", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Annecy",
    coords: [45.8992, 6.1293],
    population: 131766,
    interco: "Communauté d'agglomération du Grand Annecy",
    mayor: "François Astorg (EELV)",
    mayorColor: "#00C000",
    candidates: [
      {
        name: "Antoine Armand",
        party: "RE - LR - HOR - PRV - LC	",
        color: "#ffeb00",
        score: "28%",
        slogan: "Acteurs d'Annecy",
      },
      {
        name: "Jean-Luc Rigaut",
        party: "DVD",
        color: "#adc1fd",
        score: "25%",
        slogan: "Unis par Annecy",
      },
      {
        name: "Alexandre Mulatier-Gachet",
        party: "DVG - PS - LÉ - PCF - PP",
        color: "#ffc0c0",
        score: "24%",
        slogan: "Vivre Annecy",
      },
      {
        name: "Guillaume Roit-Lévêque",
        party: "RN",
        color: "#0d378a",
        score: "14%",
        slogan: "Retrouvons Annecy",
      },
      {
        name: "Vincent Drême",
        party: "LFI",
        color: "#cc2443",
        score: "7%",
        slogan: "L'Avenir en Commune",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "J.L. Rigaut", party: "UDI", score: "28,39%" },
        { candidate: "F. Astorg", party: "ECO", score: "27,87%" },
      ],
      tour2: [
        { candidate: "F. Astorg", party: "ECO", score: "44,74%" },
        { candidate: "J.L. Rigaut", party: "UDI", score: "44,47%" },
        { candidate: "D. Lardet", party: "LREM", score: "10,79%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "François Astorg", party: "EELV", score: "" },
        {
          candidate: "Antoine Armand",
          party: "RE - LR - HOR - PRV - LC",
          score: "",
        },
        {
          candidate: "Alexandre Mulatier-Gachet",
          party: "DVG - PS - LÉ - PCF - PP",
          score: "",
        },
        { candidate: "Guillaume Roit-Lévêque", party: "RN", score: "" },
        { candidate: "Vincent Drême", party: "LFI", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Argenteuil",
    // Décalage vers le Nord-Ouest
    coords: [49.0282, 2.1536], // original: [48.9482, 2.2536]
    population: 110468,
    interco: "Métropole du Grand Paris",
    mayor: "Georges Mothron (LR)",
    mayorColor: "#0066CC",
    candidates: [
      {
        name: "Georges Mothron",
        party: "LR",
        isMayor: true,
        color: "#0066CC",
        score: "",
        slogan: "",
      },
      {
        name: "Nicolas Bougeard",
        party: "PS - PCF - G.s - PP - L'A - GRS - MRC - LÉ diss.",
        color: "#ff8080",
        score: "",
        slogan: "La gauche rassemblée",
      },
      {
        name: "Philippe Doucet",
        party: "DVG",
        color: "#ffc0c0",
        score: "",
        slogan: "",
      },
      {
        name: "Franck Debeaud",
        party: "VIA",
        color: "#0055aa",
        score: "",
        slogan: "Ensemble, rassemblés pour Argenteuil",
      },
      {
        name: "Yassin Zeghli",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "",
      },
      {
        name: "Nadir Slifi",
        party: "Divers",
        color: "#cccccc",
        score: "",
        slogan: "Argenteuil notre ville, notre avenir",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "G. Mothron", party: "LR", score: "45,36%" },
        { candidate: "P. Doucet", party: "PS", score: "33,37%" },
      ],
      tour2: [
        { candidate: "G. Mothron", party: "LR", score: "60,11%" },
        { candidate: "P. Doucet", party: "PS", score: "39,88%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Georges Mothron", party: "LR", score: "" },
        {
          candidate: "Nicolas Bougeard",
          party: "PS - PCF - G.s - PP - L'A - GRS - MRC - LÉ diss.",
          score: "",
        },
        { candidate: "Philippe Doucet", party: "DVG", score: "" },
        { candidate: "Franck Debeaud", party: "VIA", score: "" },
        { candidate: "Yassin Zeghli", party: "LFI", score: "" },
        { candidate: "Nadir Slifi", party: "Divers", score: "" },
      ],
      tour2: [],
    },
  },

  // --- B ---
  {
    name: "Besançon",
    coords: [47.2378, 6.0241],
    population: 116914,
    interco: "Grand Besançon Métropole",
    mayor: "Anne Vignot (EELV)",
    mayorColor: "#00C000", // EELV
    candidates: [
      {
        name: "Anne Vignot",
        party: "LÉ - PS - PCF - G.s - L'A - D! - L'E - ÀGC!",
        isMayor: true,
        color: "#00C000",
        score: "34%",
        slogan: "Besançon vivante, juste et humaine",
      },
      {
        name: "Ludovic Fagaut",
        party: "LR - Modem",
        color: "#0066CC",
        score: "24%",
        slogan: "Ensemble Besançon avance",
      },
      {
        name: "Éric Delabrousse",
        party: "HOR - RE - PR",
        color: "#1d06e7",
        score: "9%",
        slogan: "Besançon mérite mieux",
      },
      {
        name: "Séverine Véziès",
        party: "LFI",
        color: "#cc2443",
        score: "11%",
        slogan: "Faire mieux pour Besançon",
      },
      {
        name: "Jacques Ricciardetti",
        party: "RN - UDR - DLF - IL",
        color: "#0d378a",
        score: "11%",
        slogan: "Changeons Besançon",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "A. Vignot", party: "EELV", score: "31,19%" },
        { candidate: "L. Fagaut", party: "LR", score: "25,33%" },
        { candidate: "É. Alauzet", party: "LREM", score: "18,88%" },
      ],
      tour2: [
        { candidate: "A. Vignot", party: "EELV", score: "43,83%" },
        { candidate: "L. Fagaut", party: "LR", score: "41,61%" },
        { candidate: "É. Alauzet", party: "LREM", score: "14,55%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Anne Vignot", party: "EELV", score: "" },
        { candidate: "Ludovic Fagaut", party: "LR - Modem", score: "" },
        { candidate: "Éric Delabrousse", party: "HOR - RE - PR", score: "" },
        { candidate: "Séverine Véziès", party: "LFI", score: "" },
        {
          candidate: "Jacques Ricciardetti",
          party: "RN - UDR - DLF - IL",
          score: "",
        },
      ],
      tour2: [],
    },
  },
  {
    name: "Béziers",
    coords: [43.3442, 3.2158],
    population: 78683,
    interco: "Communauté d'agglomération Béziers Méditerranée",
    mayor: "Robert Ménard (App. RN)",
    mayorColor: "#0D378A", // App RN
    candidates: [
      {
        name: "Robert Ménard",
        party: "DVD / RN",
        isMayor: true,
        color: "#0D378A",
        score: "",
        slogan: "",
      },
      {
        name: "Pascal Resplandy",
        party: "DVD",
        color: "#0066CC",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
  },
  {
    name: "Bordeaux",
    coords: [44.8378, -0.5792],
    population: 261804,
    interco: "Bordeaux Métropole",
    mayor: "Pierre Hurmic (EELV)",
    mayorColor: "#00C000", // EELV
    candidates: [
      {
        name: "Pierre Hurmic",
        party: "Les Écologistes / PS / PCF",
        isMayor: true,
        color: "#00C000",
        score: "33%",
        slogan: "Bordeaux en confiance",
      },
      {
        name: "Thomas Cazenave",
        party: "RE / LR / Horizons / Modem / UDI",
        color: "#FF9900",
        score: "26%",
        slogan: "Faire gagner Bordeaux",
      },
      {
        name: "Julie Rechagneux",
        party: "RN",
        color: "#0d378a",
        score: "13%",
        slogan: "Remettre Bordeaux en ordre",
      },
      {
        name: "Philippe Poutou",
        party: "NPA",
        color: "#CC0000",
        score: "9%",
        slogan: "",
      },
    ],
    polls: [
      {
        source: "Ifop (Jan 2025)",
        url: "https://www.ifop.com",
        details: "Duel serré Hurmic (33%) / Cazenave (30%)",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "N. Florian", party: "LR", score: "34,55%" },
        { candidate: "P. Hurmic", party: "EELV", score: "34,38%" },
        { candidate: "T. Cazenave", party: "LREM", score: "12,69%" },
      ],
      tour2: [
        { candidate: "P. Hurmic", party: "EELV", score: "46,48%" },
        { candidate: "N. Florian", party: "LR", score: "44,12%" },
        { candidate: "P. Poutou", party: "NPA", score: "9,39%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Pierre Hurmic", party: "EELV", score: "" },
        {
          candidate: "Thomas Cazenave",
          party: "RE / LR / Horizons / Modem / UDI",
          score: "",
        },
        { candidate: "Julie Rechagneux", party: "RN", score: "" },
        { candidate: "Philippe Poutou", party: "NPA", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Boulogne-Billancourt",
    // Décalage vers le Sud-Ouest pour s'écarter de Paris
    coords: [48.8057, 2.1819], // original: [48.8357, 2.2419]
    population: 120911,
    interco: "Métropole du Grand Paris",
    mayor: "Pierre-Christophe Baguet (LR)",
    mayorColor: "#0066CC",
    candidates: [
      {
        name: "Pierre-Christophe Baguet",
        party: "LR",
        isMayor: true,
        color: "#0066CC",
        score: "",
        slogan: "",
      },
      {
        name: "Judith Shan",
        party: "PS - PP - PRG - É",
        color: "#ff8080",
        score: "",
        slogan: "Boulogne-Billancourt nous rassemble",
      },
      {
        name: "Pauline Rapilly-Fernot",
        party: "LÉ - PCF - LFI - D!	",
        color: "#00c000",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "P.C. Baguet", party: "LR", score: "60,13%" },
        { candidate: "A. Lavédrine", party: "LREM", score: "16,39%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Pierre-Christophe Baguet", party: "LR", score: "" },
        { candidate: "Judith Shan", party: "PS - PP - PRG - É", score: "" },
        {
          candidate: "Pauline Rapilly-Fernot",
          party: "LÉ - PCF - LFI - D!",
          score: "",
        },
      ],
      tour2: [],
    },
  },
  {
    name: "Brest",
    coords: [48.3904, -4.4861],
    population: 139163,
    interco: "Brest Métropole",
    mayor: "François Cuillandre (PS)",
    mayorColor: "#FF3333", // PS
    candidates: [
      {
        name: "François Cuillandre",
        party: "PS - LÉ - UDB",
        isMayor: true,
        color: "#FF3333",
        score: "27%",
        slogan: "La gauche unie pour Brest, avec François Cuillandre",
      },
      {
        name: "Stéphane Roudaut",
        party: "DVD - LR - HOR - UDI",
        color: "#0066CC",
        score: "18%",
        slogan: "Une nouvelle histoire pour Brest",
      },
      {
        name: "Yves Pagès",
        party: "RN",
        color: "#FF9900",
        score: "16%",
        slogan: "La force du changement",
      },
      {
        name: "Cécile Beaudouin",
        party: "LFI",
        color: "#CC0000",
        score: "13%",
        slogan: "La force du changement",
      },
    ],
    polls: [],
    results2020: {
      // Pas de résultats 2020 complets dans les données d'origine
    },
    results2026: {
      tour1: [
        { candidate: "François Cuillandre", party: "PS - LÉ - UDB", score: "" },
        {
          candidate: "Stéphane Roudaut",
          party: "DVD - LR - HOR - UDI",
          score: "",
        },
        { candidate: "Yves Pagès", party: "RN", score: "" },
        { candidate: "Cécile Beaudouin", party: "LFI", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Brive-la-Gaillarde",
    // Décalage vers le Sud-Ouest pour s'écarter de Paris
    coords: [45.158, 1.533],
    population: 47095,
    interco: "Communauté d'agglomération du Bassin de Brive",
    mayor: "Frédéric Soulier (LR)",
    mayorColor: "#0066CC",
    candidates: [
      {
        name: "Frédéric Soulier",
        party: "LR-RE-UDI-PRV-MEI",
        isMayor: true,
        color: "#0066CC",
        score: "",
        slogan: "",
      },
      {
        name: "Paul Roche",
        party: "PS-PP-PRG-LaC",
        color: "#ff8080",
        score: "",
        slogan: "Brive notre avenir",
      },
      {
        name: "Sophie Marcucci",
        party: "G·s-LFI-LÉ-PCF-GRS-REV-L'A",
        color: "#cf2e4d",
        score: "",
        slogan: "Unis pour Brive",
      },
      {
        name: "Valéry Élophe",
        party: "RN-UDR",
        color: "#0D378A",
        score: "",
        slogan: "Tout pour Brive !",
      },
      {
        name: "Michèle Geneste",
        party: "REC-DLF-UPR-LP",
        color: "#1a1b20",
        score: "",
        slogan: "Brive patriotes 2026",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        {
          candidate: "Frédéric Soulier",
          party: "LUD (LR-UDI-MR-Agir-LREM-MoDem-MEI)",
          score: "60,44%",
        },
        { candidate: "Paul Roche", party: "LUG (PS-PCF)", score: "20,69%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Frédéric Soulier", party: "LR", score: "" },
        { candidate: "Paul Roche", party: "PS-PP-PRG-LaC", score: "" },
        {
          candidate: "Sophie Marcucci",
          party: "G·s-LFI-LÉ-PCF-GRS-REV-L'A",
          score: "",
        },
      ],
      tour2: [],
    },
  },

  // --- C ---
  {
    name: "Caen",
    coords: [49.1828, -0.3706],
    population: 107229,
    interco: "Caen la Mer",
    mayor: "Aristide Olivier (DVD)",
    mayorColor: "#adc1fd", // Successeur Bruneau (DVD/LR)
    candidates: [
      {
        name: "Aristide Olivier",
        party: "DVD - PRV",
        isMayor: true,
        color: "#adc1fd",
        score: "",
        slogan: "Caen passionnément !",
      },
      {
        name: "Rudy L'Orphelin",
        party: "LÉ - PS - PCF - L'A - D! - PP",
        color: "#00c000",
        score: "",
        slogan: "Caen la ville nous rassemble",
      },
      {
        name: "Aurélien Guidi",
        party: "LFI - G.s",
        color: "#cc2443",
        score: "",
        slogan: "Faire mieux pour Caen",
      },
      {
        name: "Chantal Henry",
        party: "RN - UDR",
        color: "#0d378a",
        score: "",
        slogan: "Le 15 mars rassemblons Caen",
      },
      {
        name: "Thomas Chevalier",
        party: "DVC - ÉAC - U - AC - GA",
        color: "#ffd76e",
        score: "",
        slogan: "Caen dynamique !",
      },
      {
        name: "Antoine Casini",
        party: "DVG - PRG - EQX - L'E",
        color: "#ffc0c0",
        score: "",
        slogan: "Les Engagés",
      },
      {
        name: "Xavier Le Coutour",
        party: "CàC",
        color: "#ffc0c0",
        score: "",
        slogan: "Citoyens à Caen",
      },
      {
        name: "Pierre Casevitz",
        party: "LO",
        color: "#bb0000",
        score: "",
        slogan: "Lutte ouvrière - Faire entendre le camp des travailleurs",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "J. Bruneau", party: "LR", score: "50,79%" },
        { candidate: "R. Thomas", party: "EELV/PS", score: "25,55%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Aristide Olivier", party: "DVD", score: "" },
        {
          candidate: "Rudy L'Orphelin",
          bparty: "LÉ - PS - PCF - L'A - D! - PP",
          score: "",
        },
        { candidate: "Aurélien Guidi", party: "LFI - G.s", score: "" },
        { candidate: "Chantal Henry", party: "RN - UDR", score: "" },
        {
          candidate: "Thomas Chevalier",
          party: "DVC - ÉAC - U - AC - GA",
          score: "",
        },
        {
          candidate: "Antoine Casini",
          party: "DVG - PRG - EQX - L'E",
          score: "",
        },
        { candidate: "Xavier Le Coutour", party: "CàC", score: "" },
        { candidate: "Pierre Casevitz", party: "LO", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Châteauroux",
    coords: [46.8137, 1.6931],
    population: 42963,
    interco: "Communauté d'agglomération Châteauroux Métropole",
    mayor: " Gil Avérous (LR)",
    mayorColor: "#0066CC", // Successeur Bruneau (DVD/LR)
    candidates: [
      {
        name: " Gil Avérous",
        party: "LR",
        isMayor: true,
        color: "#0066CC",
        score: "",
        slogan: "",
      },
      {
        name: "Mylène Wunsch",
        party: "RN",
        color: "#0d378a",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "G. Avérous", party: "LR", score: "70,06%" },
        { candidate: "Maxime Gourru", party: "EELV-PCF", score: "10,03%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: " Gil Avérous", party: "LR", score: "" },
        { candidate: "Mylène Wunsch", party: "RN", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Clermont-Ferrand",
    coords: [45.7772, 3.087],
    population: 147327,
    interco: "Clermont Auvergne Métropole",
    mayor: "Olivier Bianchi (PS)",
    mayorColor: "#FF3333",
    candidates: [
      {
        name: "Olivier Bianchi",
        party: "PS - LÉ - PCF - G.s - PP - PRG - D! - L'A",
        isMayor: true,
        color: "#FF3333",
        score: "37%",
        slogan: "Vivre Clermont !",
      },
      {
        name: "Julien Bony",
        party: "LR - RE - MoDem - HOR - UDI - PRV",
        color: "#0066cc",
        score: "27%",
        slogan: "Le sursaut clermontois",
      },
      {
        name: "Antoine Darbois",
        party: "RN - UDR",
        color: "#0d378a",
        score: "15%",
        slogan: "Remettre Clermont en ordre",
      },
      {
        name: "Marianne Maximi",
        party: "LFI",
        color: "#cc2443",
        score: "14%",
        slogan: "Clermont fière et solidaire",
      },
      {
        name: "Yannick Cartailler",
        party: "SE",
        color: "#cccccc",
        score: "5%",
        slogan: "Le Réveil clermontois",
      },
    ],
    polls: [
      {
        source: "Ifop (Fev. 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/fevrier/10070-mun-clermont-ferrand-ifop-9-fevrier.pdf",
        details:
          "Bianchi (PS) en tête à 37%, suivi de Bony (LR) à 27%, Darbois (RN) à 15%, Maximi (LFI) à 14% et Cartailler (SE) à 5%",
      },
    ],
    results2020: {
      tour1: [
        {
          candidate: "O. Bianchi",
          party: "PS - LÉ - PCF - G.s - PP - PRG - D! - L'A",
          score: "38,09%",
        },
        { candidate: "J.P. Brenas", party: "LR", score: "20,78%" },
        { candidate: "E. Vignal", party: "LREM", score: "14,39%" },
      ],
      tour2: [
        { candidate: "O. Bianchi", party: "PS", score: "48,41%" },
        { candidate: "J.P. Brenas", party: "LR", score: "36,50%" },
        { candidate: "E. Vignal", party: "LREM", score: "15,08%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Olivier Bianchi", party: " ", score: "" },
        {
          candidate: "Julien Bony",
          party: "LR - RE - MoDem - HOR - UDI - PRV",
          score: "",
        },
        { candidate: "Marianne Maximi", party: "LFI", score: "" },
        { candidate: "Antoine Darbois", party: "RN - UDR", score: "" },
        { candidate: "Yannick Cartailler", party: "SE", score: "" },
      ],
      tour2: [],
    },
  },

  // --- D ---
  {
    name: "Dijon",
    coords: [47.322, 5.0415],
    population: 159346,
    interco: "Dijon Métropole",
    mayor: "Nathalie Koenders (PS)",
    mayorColor: "#FF3333", // PS
    candidates: [
      {
        name: "Nathalie Koenders",
        party: "PS - MoDem - PP - PR - GÉ",
        isMayor: true,
        color: "#FF3333",
        score: "41%",
        slogan: "Dijon. Écologique sociale attractive",
      },
      {
        name: "Emmanuel Bichot",
        party: "LR - UDI - HOR - LC - REC",
        color: "#0066CC",
        score: "17%",
        slogan: "Agir pour Dijon",
      },
      {
        name: "Thierry Coudert",
        party: "UDR - RN - IL",
        color: "#0d378a",
        score: "17%",
        slogan: "Le rassemblement dijonnais",
      },
      {
        name: "Olivier Minard",
        party: "LFI",
        color: "#cc2443",
        score: "11%",
        slogan: "Dijon populaire",
      },
      {
        name: "Michel Haberstrau",
        party: "LÉ - PCF - G.s - L'A",
        color: "#00c000",
        score: "17%",
        slogan: "Dijon change d'ère",
      },
    ],
    polls: [
      {
        source: "OpinionWay (Janv. 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/janvier/10052-mun-dijon-opinionway-le-bien-public-16-janvier.pdf",
        details:
          "Koenders (PS) en tête à 41%, suivi de Bichot (LR) à 17%, Coudert (UDR) à 17%, Minard (LFI) à 11% et Haberstrau (LÉ) à 14%",
      },
    ],
    results2026: {
      tour1: [
        {
          candidate: "Nathalie Koenders",
          party: "PS - MoDem - PP - PR - GÉ",
          score: "",
        },
        {
          candidate: "Emmanuel Bichot",
          party: "LR - UDI - HOR - LC - REC",
          score: "",
        },
        { candidate: "Thierry Coudert", party: "UDR - RN - IL", score: "" },
        { candidate: "Olivier Minard", party: "LFI", score: "" },
        {
          candidate: "Michel Haberstrau",
          party: "LÉ - PCF - G.s - L'A",
          score: "",
        },
      ],
      tour2: [],
    },
  },

  // --- G ---
  {
    name: "Guéret",
    coords: [46.17, 1.87],
    population: 12955,
    interco: "Communauté d'agglomération du Grand Guéret",
    mayor: "Marie-Françoise Fournier (SE)",
    mayorColor: "#cccccc", // Successeur Bruneau (DVD/LR)
    candidates: [
      {
        name: " Marie-Françoise Fournier",
        party: "SE",
        isMayor: true,
        color: "#cccccc",
        score: "",
        slogan: "L'énergie du collectif",
      },
      {
        name: "Didier Hoeltgen",
        party: "PS-PCF",
        color: "#ff8080",
        score: "",
        slogan: "",
      },
      {
        name: "Thierry Delaître",
        party: "LR-DVD",
        color: "#0066cc",
        score: "",
        slogan: "",
      },
      {
        name: "Éric Correia",
        party: "PRG",
        color: "#ffc0c0",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "Éric Correia", party: "EELV", score: "32,97%" },
        { candidate: "M. Fournier", party: "SE", score: "27,70%" },
      ],
      tour2: [
        { candidate: "M. Fournier", party: "SE", score: "35,68%" },
        { candidate: "Éric Correia", party: "EELV", score: "33,18%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: " Marie-Françoise Fournier", party: "SE", score: "" },
        { candidate: "Didier Hoeltgen", party: "PS-PCF", score: "" },
        { candidate: "Thierry Delaître", party: "LR-DVD", score: "" },
        { candidate: "Éric Correia", party: "PRG", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Grenoble",
    coords: [45.1885, 5.7245],
    population: 157650,
    interco: "Grenoble-Alpes Métropole",
    mayor: "Éric Piolle (EELV)",
    mayorColor: "#00C000", // EELV
    candidates: [
      {
        name: "Laurence Ruffin",
        party: "DVG - LÉ - PS - PCF - G·s - PA - L'A - LFI diss. - ADES - RC",
        color: "#cf2e4d",
        score: "34%",
        slogan: "Oui Grenoble",
      },
      {
        name: "Alain Carignon",
        party: "Société Civile/LR",
        color: "#0066CC",
        score: "25%",
        slogan: "Réconcilier Grenoble",
      },
      {
        name: "Allan Brunon",
        party: "LFI",
        color: "#cc2443",
        score: "10%",
        slogan: "Faire mieux pour Grenoble",
      },
      {
        name: "Romain Gentil",
        party: "PP - PRG - EQX",
        color: "#f2687a",
        score: "8%",
        slogan: "Grenoble capitale citoyenne",
      },
      {
        name: "Valentin Gabriac",
        party: "RN",
        color: "#0d378a",
        score: "8%",
        slogan: "Grenoble capitale des Alpes",
      },
      {
        name: "Pierre-Edouard Cardinal",
        party: "RE - MoDem",
        color: "#fab622",
        score: "6%",
        slogan: "Grenoble - La belle ambition",
      },
      {
        name: "Hervé Gerbi",
        party: "HOR",
        color: "#1d06e7",
        score: "5%",
        slogan: "Nous Grenoble",
      },
    ],
    polls: [
      {
        source: "Dauphiné Libéré (2025)",
        url: "#",
        details: "La succession Piolle ouverte, EELV en tête",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "E. Piolle", party: "EELV", score: "46,67%" },
        { candidate: "A. Carignon", party: "DVD", score: "19,80%" },
      ],
      tour2: [
        { candidate: "E. Piolle", party: "EELV", score: "53,13%" },
        { candidate: "A. Carignon", party: "DVD", score: "23,55%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Laurence Ruffin",
          party: "DVG - LÉ - PS - PCF - G·s - PA - L'A - LFI diss. - ADES - RC",
          score: "",
        },
        { candidate: "Alain Carignon", party: "Société Civile/LR", score: "" },
        { candidate: "Allan Brunon", party: "LFI", score: "" },
        { candidate: "Romain Gentil", party: "PP - PRG - EQX", score: "" },
        { candidate: "Valentin Gabriac", party: "RN", score: "" },
        {
          candidate: "Pierre-Edouard Cardinal",
          party: "RE - MoDem",
          score: "",
        },
        { candidate: "Hervé Gerbi", party: "HOR", score: "" },
      ],
      tour2: [],
    },
  },

  // --- L ---
  {
    name: "La Rochelle",
    coords: [46.1591, -1.152],
    population: 78535,
    mayor: " Thibaut Guiraud (DVG)",
    interco: "Communauté d'agglomération de La Rochelle",
    mayorColor: "#f2687a", // DVG
    candidates: [
      {
        name: "Thibaut Guiraud",
        party: "DVG",
        isMayor: true,
        color: "#f2687a",
        score: "",
        slogan: "Générations La Rochelle",
      },
      {
        name: "Olivier Falorni",
        party: "PRG / DVG",
        color: "#f2687a",
        score: "",
        slogan: "Pour les Rochelaises et les Rochelais",
      },
      {
        name: "Maryline Simoné",
        party: "PS / LÉ / PCF",
        color: "#ff8080",
        score: "",
        slogan: "La Rochelle unie, sociale, écologique et citoyenne",
      },
      {
        name: "Christophe Batcabe",
        party: "DVD",
        color: "#adc1fd",
        score: "",
        slogan: "Une vision pour La Rochelle",
      },
      {
        name: "Nino Salaün",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "La Rochelle, insoumise et populaire",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "O. Falorni", party: "DVG", score: "33,26%" },
        { candidate: "J.F. Fountaine", party: "DVG", score: "32,61%" },
        { candidate: "J.M. Soubeste", party: "EELV", score: "16,92%" },
      ],
      tour2: [
        { candidate: "J.F. Fountaine", party: "DVG", score: "41,96%" },
        { candidate: "O. Falorni", party: "DVG", score: "41,16%" },
        { candidate: "J.M. Soubeste", party: "EELV", score: "16,88%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Thibaut Guiraud", party: "DVG", score: "" },
        { candidate: "Olivier Falorni", party: "PRG / DVG", score: "" },
        { candidate: "Maryline Simoné", party: "PS / LÉ / PCF", score: "" },
        { candidate: "Christophe Batcabe", party: "DVD", score: "" },
        { candidate: "Nino Salaün", party: "LFI", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "La Roche-sur-Yon",
    coords: [46.67, -1.43],
    population: 54699,
    interco: "La Roche-sur-Yon Agglomération",
    mayor: "Luc Bouard (HOR)",
    mayorColor: "#1d06e7",
    candidates: [
      {
        name: "Luc Bouard",
        party: "HOR",
        isMayor: true,
        color: "#1d06e7",
        score: "",
        slogan: "",
      },
      {
        name: "Romain Bossis",
        party: "DVG-LFI-PS-LÉ-PP	",
        color: "#cc2443",
        score: "",
        slogan: "Pour La Roche !",
      },
      {
        name: "Freddy Roy",
        party: "RN-UDR",
        color: "#0d378a",
        score: "",
        slogan: "",
      },
      {
        name: "Anita Charrieau",
        party: "PCF",
        color: "#dd0000",
        score: "",
        slogan: "",
      },
      {
        name: "Gilles Robin",
        party: "LO",
        color: "#bb0000",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "L. Bouard", party: "HOR", score: "41,99%" },
        { candidate: "M. Marietta-Otille", party: "EELV", score: "13,94%" },
      ],
      tour2: [
        { candidate: "L. Bouard", party: "HOR", score: "63,14%" },
        { candidate: "M. Marietta-Otille", party: "EELV", score: "36,86%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Luc Bouard", party: "HOR", score: "" },
        { candidate: "Romain Bossis", party: "DVG-LFI-PS-LÉ-PP", score: "" },
        { candidate: "Freddy Roy", party: "RN-UDR", score: "" },
        { candidate: "Anita Charrieau", party: "PCF", score: "" },
        { candidate: "Gilles Robin", party: "LO", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Le Havre",
    coords: [49.4944, 0.1079],
    population: 166058,
    interco: "Le Havre Seine Métropole",
    mayor: "Édouard Philippe (Horizons)",
    mayorColor: "#0066CC", // Horizons
    candidates: [
      {
        name: "Édouard Philippe",
        party: "Horizons",
        isMayor: true,
        color: "#0066CC",
        score: "",
        slogan: "",
      },
      {
        name: "Jean-Paul Lecoq",
        party: "PCF - PS - LÉ - G.s - PP - L'AP",
        color: "#CC0000",
        score: "",
        slogan: "Le Front Populaire havrais",
      },
      {
        name: "Franck Keller",
        party: "RN - UDR",
        color: "#072149",
        score: "",
        slogan: "Le Front Populaire havrais",
      },
      {
        name: "Charlotte Boulogne",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "Le Havre insoumis",
      },
      {
        name: "Sophie Zarifian",
        party: "PCF - PS - LÉ - G.s - PP - L'AP",
        color: "#cccccc",
        score: "",
        slogan: "Le Havre en Débat",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "É. Philippe", party: "LREM/DVD", score: "43,59%" },
        { candidate: "J.P. Lecoq", party: "PCF", score: "35,87%" },
      ],
      tour2: [
        { candidate: "É. Philippe", party: "LREM/DVD", score: "58,83%" },
        { candidate: "J.P. Lecoq", party: "PCF", score: "41,16%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Édouard Philippe", party: "Horizons", score: "" },
        { candidate: "Jean-Paul Lecoq", party: "PCF", score: "" },
        { candidate: "Franck Keller", party: "RN - UDR", score: "" },
        { candidate: "Charlotte Boulogne", party: "LFI", score: "" },
        {
          candidate: "Sophie Zarifian",
          party: "PCF - PS - LÉ - G.s - PP - L'AP",
          score: "",
        },
      ],
      tour2: [],
    },
  },
  {
    name: "Le Mans",
    coords: [48.0061, 0.1996],
    population: 143847,
    interco: "Le Mans Métropole",
    mayor: "Stéphane Le Foll (PS)",
    mayorColor: "#ff8080", // PS
    candidates: [
      {
        name: "Stéphane Le Foll",
        party: "PS - PP - PRG",
        isMayor: true,
        color: "#ff8080",
        score: "",
        slogan: "Le Mans nous rassemble",
      },
      {
        name: "Marietta Karamanli",
        party: "L'Union pour Le Mans",
        color: "#ffc0c0",
        score: "",
        slogan: "Le Mans nous rassemble",
      },
      {
        name: "Olivier Sasso",
        party: "LR - UDI - HOR",
        color: "#0066cc",
        score: "",
        slogan: "Nouveau cap",
      },
      {
        name: "Maël Brillant",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "Le Mans ville humaine",
      },
      {
        name: "Victoria de Vigneral",
        party: "RN",
        color: "#0d378a",
        score: "",
        slogan: "Rassemblement pour Le Mans",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "S. Le Foll", party: "PS", score: "41,99%" },
        { candidate: "M. Marietta-Otille", party: "EELV", score: "13,94%" },
      ],
      tour2: [
        { candidate: "S. Le Foll", party: "PS", score: "63,14%" },
        { candidate: "M. Marietta-Otille", party: "EELV", score: "36,86%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Stéphane Le Foll", party: "PS", score: "" },
        {
          candidate: "Marietta Karamanli",
          party: "L'Union pour Le Mans",
          score: "",
        },
        { candidate: "Olivier Sasso", party: "LR - UDI - HOR", score: "" },
        { candidate: "Maël Brillant", party: "LFI", score: "" },
        { candidate: "Victoria de Vigneral", party: "RN", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Lille",
    coords: [50.6292, 3.0573],
    population: 236710,
    interco: "Métropole Européenne de Lille",
    mayor: "Arnaud Deslandes (PS)",
    mayorColor: "#FF3333", // PS
    candidates: [
      {
        name: "Arnaud Deslandes",
        party: "PS / PCF / G.s / PP",
        color: "#FF3333",
        score: "33%",
        slogan: "Tout pour Lille",
      },
      {
        name: "Stéphane Baly",
        party: "Les Écologistes / G.s / L'A / Gé",
        color: "#00C000",
        score: "19%",
        slogan: "Lille Demain",
      },
      {
        name: "Violette Spillebout",
        party: "Renaissance",
        color: "#FF9900",
        score: "18%",
        slogan: "",
      },
      {
        name: "Lahouaria Addouche",
        party: "La France Insoumise",
        color: "#cc2443",
        score: "16%",
        slogan: "",
      },
      {
        name: "Matthieu Valet",
        party: "RN",
        color: "#0D378A",
        score: "16%",
        slogan: "",
      },
      {
        name: "Louis Delemer",
        party: "LR",
        color: "#0066CC",
        score: "9%",
        slogan: "",
      },
    ],
    polls: [
      {
        source: "Harris Int. (Jan 2026)",
        url: "https://harris-interactive.fr",
        details: "Incertitude sur la succession Aubry, EELV en embuscade",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "M. Aubry", party: "PS", score: "29,80%" },
        { candidate: "S. Baly", party: "EELV", score: "24,53%" },
        { candidate: "V. Spillebout", party: "LREM", score: "17,53%" },
      ],
      tour2: [
        { candidate: "M. Aubry", party: "PS", score: "40,00%" },
        { candidate: "S. Baly", party: "EELV", score: "39,41%" },
        { candidate: "V. Spillebout", party: "LREM", score: "20,58%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Arnaud Deslandes",
          party: "PS / PCF / G.s / PP",
          score: "",
        },
        {
          candidate: "Stéphane Baly",
          party: "Les Écologistes / G.s / L'A / Gé",
          score: "",
        },
        { candidate: "Violette Spillebout", party: "Renaissance", score: "" },
        {
          candidate: "Lahouaria Addouche",
          party: "La France Insoumise",
          score: "",
        },
        { candidate: "Matthieu Valet", party: "RN", score: "" },
        { candidate: "Louis Delemer", party: "LR", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Limoges",
    coords: [45.8336, 1.2611],
    population: 129760,
    mayor: "Émile Roger Lombertie (LR)",
    interco: "Communauté Urbaine Limoges Métropole",
    mayorColor: "#0066CC", // LR
    candidates: [
      {
        name: "Émile R. Lombertie",
        party: "DVD",
        isMayor: true,
        color: "#adc1fd",
        score: "",
        slogan: "Avec Lombertie, soyons fiers de Limoges",
      },
      {
        name: "Thierry Miguel",
        party: "Gauche Unie - PS-PCF",
        color: "#FF3333",
        score: "",
        slogan: "Pour Limoges",
      },
      {
        name: "Damien Maudet",
        party: "Gauche Unie - LFI-ECO",
        color: "#cc2443",
        score: "",
        slogan: "Limoges Front Populaire - social et écologique",
      },
      {
        name: "Guillaume Guérin",
        party: "LR - DVD",
        color: "#0066CC",
        score: "",
        slogan: "Limoges en perspectives",
      },
      {
        name: "Albin Freychet",
        party: "RN",
        color: "#0D378A",
        score: "",
        slogan: "Limoges en Grand",
      },
      {
        name: "Vincent Léonie",
        party: "Reunir / DVC",
        color: "#ffd76e",
        score: "",
        slogan: "Réunir Limoges",
      },
      {
        name: "Marie de Ferluc",
        party: "Sans Étiquette",
        color: "#cccccc",
        score: "",
        slogan: "Un nouveau printemps pour Limoges",
      },
      {
        name: "Elisabeth Faucon",
        party: "Lutte Ouvrière",
        color: "#CC0000",
        score: "",
        slogan: "Lutte ouvrière - Le camp des travailleurs",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "E.R. Lombertie", party: "LR", score: "46,21%" },
        { candidate: "T. Miguel", party: "UG", score: "37,65%" },
      ],
      tour2: [
        { candidate: "E.R. Lombertie", party: "LR", score: "58,96%" },
        { candidate: "T. Miguel", party: "UG", score: "41,03%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Émile R. Lombertie", party: "LR/DVD", score: "" },
        {
          candidate: "Thierry Miguel",
          party: "Gauche Unie - PS-PCF",
          score: "",
        },
        {
          candidate: "Damien Maudet",
          party: "Gauche Unie - LFI-ECO",
          score: "",
        },
        { candidate: "Guillaume Guérin", party: "LR - DVD", score: "" },
        { candidate: "Albin Freychet", party: "RN", score: "" },
        { candidate: "Vincent Léonie", party: "Reunir / DVC", score: "" },
        { candidate: "Elisabeth Faucon", party: "Lutte Ouvrière", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Lyon",
    coords: [45.764, 4.8357],
    population: 506615,
    interco: "Métropole de Lyon",
    mayor: "Grégory Doucet (EELV)",
    mayorColor: "#00C000", // EELV
    candidates: [
      {
        name: "Jean-Michel Aulas",
        party: "LR - RE - HOR - MoDem - UDI",
        color: "#0066CC",
        score: "42%",
        slogan: "Cœur Lyonnais",
      },
      {
        name: "Grégory Doucet",
        party: "Les Écologistes / NFP",
        isMayor: true,
        color: "#00C000",
        score: "31%",
        slogan: "Vive Lyon",
      },
      {
        name: "Alexandre Humbert Dupalais",
        party: "RN / UDR",
        color: "#0D378A",
        score: "9%",
        slogan: "Retrouver Lyon",
      },
      {
        name: "Anaïs Belouassa-Cherifi",
        party: "LFI",
        color: "#cc2443",
        score: "9%",
        slogan: "Faire mieux pour Lyon",
      },
      {
        name: "Georges Képénékian",
        party: "DVC - EQX",
        color: "#ffd76e",
        score: "9%",
        slogan: "Lyon, quelle énergie !",
      },

      {
        name: "Nathalie Perrin-Gilbert",
        party: "DVG - PRG - PP - MRC",
        color: "#ffc0c0",
        score: "9%",
        slogan: "Lyon avec vous",
      },
    ],
    polls: [
      {
        source: "Cluster17 (Fév. 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/fevrier/10085-mun-lyon-cluster-17-politico-fevrier.pdf",
        details: "Doucet ratrappe Aulas, mais ce dernier reste favori",
      },
      {
        source: "BVA (Jan 2026)",
        url: "https://www.bva-group.com",
        details: "Doucet favori mais sans majorité absolue",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "G. Doucet", party: "EELV", score: "28,46%" },
        { candidate: "E. Blanc", party: "LR", score: "17,01%" },
        { candidate: "Y. Cucherat", party: "LREM", score: "14,92%" },
      ],
      tour2: [
        { candidate: "G. Doucet", party: "EELV", score: "52,40%" },
        { candidate: "Y. Cucherat", party: "LREM", score: "30,58%" },
        { candidate: "E. Blanc", party: "LR", score: "17,02%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Grégory Doucet", party: "EELV", score: "" },
        {
          candidate: "Jean-Michel Aulas",
          party: "LR - RE - HOR - MoDem - UDI",
          score: "",
        },
        {
          candidate: "Alexandre Humbert Dupalais",
          party: "RN / UDR",
          score: "",
        },
        { candidate: "Anaïs Belouassa-Cherifi", party: "LFI", score: "" },
        { candidate: "Georges Képénékian", party: "DVC - EQX", score: "" },
        {
          candidate: "Nathalie Perrin-Gilbert",
          party: "DVG - PRG - PP - MRC",
          score: "",
        },
      ],
      tour2: [],
    },
  },

  // --- M ---
  {
    name: "Marseille",
    coords: [43.2965, 5.3698],
    population: 861635,
    interco: "Métropole d'Aix-Marseille-Provence",
    mayor: "Benoît Payan (DVG)",
    mayorColor: "#FF3333", // DVG/PS
    candidates: [
      {
        name: "Benoît Payan",
        party: "Printemps Marseillais (DVG/PS/PC/EELV)",
        isMayor: true,
        color: "#FF3333",
        score: "31%",
        slogan: "",
      },
      {
        name: "Franck Allisio",
        party: "RN / UDR",
        color: "#0D378A",
        score: "29%",
        slogan: "Marseille en ordre !",
      },
      {
        name: "Martine Vassal",
        party: "DVD - LR - RE - HOR - UDI - LC",
        color: "#0066CC",
        score: "21%",
        slogan: "",
      },
      {
        name: "Sébastien Delogu",
        party: "LFI",
        color: "#cc2443",
        score: "12%",
        slogan: "Marseille fière et populaire",
      },
      {
        name: "Erwann Davoux",
        party: "DVD",
        color: "#adc1fd",
        score: "2%",
        slogan: "Marseille pour tous",
      },
      {
        name: "Rémy Bazzali",
        party: "LO",
        color: "#bb0000",
        score: "1%",
        slogan: "",
      },
    ],
    polls: [
      {
        source: "Odoxa (Déc 2025)",
        url: "https://www.odoxa.fr",
        details: "Payan en tête (34%) au 1er tour",
      },
      {
        source: "Elabe (Oct 2025)",
        url: "https://elabe.fr",
        details: "Forte poussée du RN (25%)",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "M. Rubirola", party: "UG", score: "23,44%" },
        { candidate: "M. Vassal", party: "LR", score: "22,32%" },
        { candidate: "S. Ravier", party: "RN", score: "19,45%" },
      ],
      tour2: [
        { candidate: "M. Rubirola", party: "UG", score: "38,28%" },
        { candidate: "M. Vassal", party: "LR", score: "30,75%" },
        { candidate: "S. Ravier", party: "RN", score: "19,81%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Benoît Payan", party: "DVG/PS/PC/EELV", score: "" },
        { candidate: "Franck Allisio", party: "RN / UDR", score: "" },
        {
          candidate: "Martine Vassal",
          party: "DVD - LR - RE - HOR - UDI - LC",
          score: "",
        },
        { candidate: "Sébastien Delogu", party: "LFI", score: "" },
        { candidate: "Erwann Davoux", party: "DVD", score: "" },
        { candidate: "Rémy Bazzali", party: "LO", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Metz",
    coords: [49.1193, 6.1757],
    population: 120874,
    interco: "Metz Métropole",
    mayor: "François Grosdidier (SL)",
    mayorColor: "#66ccff", // SL
    candidates: [
      {
        name: "François Grosdidier",
        party: "SL - HOR - DVC",
        isMayor: true,
        color: "#66ccff",
        score: "",
        slogan: "J'aime Metz",
      },
      {
        name: "Jérémy Roques",
        party: "LÉ - PCF - PA - L'A - D! - GÉ	",
        color: "#00C000",
        score: "",
        slogan: "Maintenant pour Metz",
      },
      {
        name: "Étienne Anstett",
        party: "RN - UDR",
        color: "#0d378a",
        score: "",
        slogan: "Un avenir à Metz",
      },
      {
        name: "Bertrand Mertz",
        party: "PS - PP - LRDG - LC",
        color: "#ff8080",
        score: "",
        slogan: "Un souffle nouveau pour Metz",
      },
      {
        name: "Ludovic Mendes",
        party: "RE - DVC",
        color: "#fab622",
        score: "",
        slogan: "Metz ensemble",
      },
      {
        name: "Charlotte Leduc",
        party: "LFI - NPA-A",
        color: "#cc2443",
        score: "",
        slogan: "Metz en commun",
      },
      {
        name: "Gaël Diafera",
        party: "NPA-R",
        color: "#b71c1c",
        score: "",
        slogan: "Metz ouvrière et révolutionnaire",
      },
      {
        name: "Mario Rinaldi",
        party: "LO",
        color: "#bb0000",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "F. Grosdidier", party: "LR", score: "29,76%" },
        { candidate: "X. Bouvet", party: "EELV", score: "24,95%" },
        { candidate: "F. Grolet", party: "RN", score: "11,85%" },
      ],
      tour2: [
        { candidate: "F. Grosdidier", party: "LR", score: "45,13%" },
        { candidate: "X. Bouvet", party: "EELV", score: "44,24%" },
        { candidate: "F. Grolet", party: "RN", score: "10,63%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "François Grosdidier", party: "LR", score: "" },
        { candidate: "Xavier Bouvet", party: "EELV", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Montpellier",
    coords: [43.6108, 3.8767],
    population: 299096,
    interco: "Montpellier Méditerranée Métropole",
    mayor: "Michaël Delafosse (PS)",
    mayorColor: "#FF3333", // PS
    candidates: [
      {
        name: "Michaël Delafosse",
        party: "PS - PCF - PP - PRG - PA - GÉ - E! - GRS - L'E - LÉ diss.",
        isMayor: true,
        color: "#FF3333",
        score: "35%",
        slogan: "",
      },
      {
        name: "Nathalie Oziol",
        party: "LFI",
        color: "#cc2443",
        score: "16%",
        slogan: "",
      },
      {
        name: "Rémi Gaillard",
        party: "SE",
        color: "#cccccc",
        score: "10%",
        slogan: "Yes we clown",
      },
      {
        name: "	France Jamet",
        party: "RN / UDR",
        color: "#0d378a",
        score: "8%",
        slogan: "",
      },
      {
        name: "Isabelle Perrein",
        party: "SE - LR - MoDem - UDI ",
        color: "#0066CC",
        score: "6%",
        slogan: "Aimer Montpellier",
      },
      {
        name: "Jean-Louis Roumégas",
        party: "LÉ - L'AP - G.s",
        color: "#00C000",
        score: "4%",
        slogan: "Le Printemps montpelliérain",
      },
      {
        name: "Thierry Tsagalos",
        party: "RN diss.",
        color: "#0d378a",
        score: "2%",
        slogan: "Rassemblement pour Montpellier",
      },
    ],
    polls: [
      {
        source: "Ifop (FEV 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/fevrier/10082-mun-montpellier-ifop-midi-libre-fevrier.pdf",
        details: "Prime au sortant pour Delafosse (39%)",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "P. Saurel", party: "DVG", score: "19,11%" },
        { candidate: "M. Delafosse", party: "PS", score: "16,66%" },
        { candidate: "M. Altrad", party: "SE", score: "13,30%" },
      ],
      tour2: [
        { candidate: "M. Delafosse", party: "PS", score: "47,22%" },
        { candidate: "P. Saurel", party: "DVG", score: "34,65%" },
        { candidate: "M. Altrad", party: "SE", score: "18,12%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Michaël Delafosse",
          party: "PS - PCF - PP - PRG - PA - GÉ - E! - GRS - L'E - LÉ diss.",
          score: "",
        },
        { candidate: "Nathalie Oziol", party: "LFI", score: "" },
        { candidate: "Thierry Tsagalos", party: "RN diss.", score: "" },
        {
          candidate: "Isabelle Perrein",
          party: "SE - LR - MoDem - UDI ",
          score: "",
        },
        { candidate: "Manu Reynaud", party: "LÉ - L'AP - G.s", score: "" },
        { candidate: "France Jamet", party: "RN / UDR", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Montreuil",
    // Décalage vers l'Est
    coords: [48.8617, 2.5419], // original lon: 2.4419 -> 2.54
    population: 111240,
    interco: "Métropole du Grand Paris",
    mayor: "Patrice Bessac (PCF)",
    mayorColor: "#CC0000",
    candidates: [
      {
        name: "Patrice Bessac",
        party: "PCF - LÉ - PS - G.s - L'Après - NPA-A",
        color: "#CC0000",
        score: "",
        slogan: "Vive Montreuil !",
      },
      {
        name: "Sayna Sharyari",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "Faire mieux pour Montreuil",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "P. Bessac", party: "PCF", score: "51,34%" },
        { candidate: "M. Espinoza", party: "EELV", score: "16,10%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Patrice Bessac",
          party: "PCF - LÉ - PS - G.s - L'Après - NPA-A",
          score: "",
        },
        { candidate: "Sayna Sharyari", party: "LFI", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Mulhouse",
    coords: [47.7508, 7.3359],
    population: 106315,
    mayor: "Michèle Lutz (LR)",
    mayorColor: "#0066CC",
    candidates: [
      {
        name: "Michèle Lutz",
        party: "DVD - LR - HOR",
        isMayor: true,
        color: "#0066CC",
        score: "",
        slogan: "Fiers de Mulhouse",
      },
      {
        name: "Loïc Minery",
        party: "LÉ - PS - PCF - G·s - PP",
        color: "#00c000",
        score: "",
        slogan: "Mulhouse en commun",
      },
      {
        name: "Christelle Ritz",
        party: "RN",
        color: "#0d378a",
        score: "",
        slogan: "",
      },
      {
        name: "Eliot Gafanesch",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "Fiers de Mulhouse",
      },
      {
        name: "Annouar Sassi",
        party: "DVG",
        color: "#ffc0c0",
        score: "",
        slogan: "Nous sommes Mulhouse",
      },
      {
        name: "Hicham Bensoussi",
        party: "DVC",
        color: "#ffd76e",
        score: "",
        slogan: "",
      },
      {
        name: "Cécile Sornin",
        party: "DVD",
        color: "#adc1fd",
        score: "",
        slogan: "Mulhouse Au Coeur",
      },
      {
        name: "Lara Million",
        party: "DVD",
        color: "#adc1fd",
        score: "",
        slogan: "",
      },
      {
        name: "Emmanuel Taffarelli",
        party: "REC - AF - PDF - CN - DLF - LP	",
        color: "#13151d",
        score: "",
        slogan: "Restaurer Mulhouse",
      },
      {
        name: "Kadhafi Djehaf",
        party: "SE",
        color: "#cccccc",
        score: "",
        slogan: "Notre Mulhouse",
      },
      {
        name: "Frédéric Marquet",
        party: "SE",
        color: "#cccccc",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "M. Lutz", party: "LR", score: "33,68%" },
        { candidate: "L. Minery", party: "EELV", score: "22,46%" },
        { candidate: "C. Ritz", party: "RN", score: "16,04%" },
        { candidate: "L. Million", party: "LREM", score: "14,35%" },
      ],
      tour2: [
        { candidate: "M. Lutz", party: "LR", score: "38,61%" },
        { candidate: "L. Minery", party: "EELV", score: "37,52%" },
        { candidate: "C. Ritz", party: "RN", score: "12,85%" },
        { candidate: "L. Million", party: "LREM", score: "11,02%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Michèle Lutz", party: "DVD - LR - HOR", score: "" },
        {
          candidate: "Loïc Minery",
          party: "LÉ - PS - PCF - G·s - PP",
          score: "",
        },
        { candidate: "Christelle Ritz", party: "RN", score: "" },
        { candidate: "Eliot Gafanesch", party: "LFI", score: "" },
        { candidate: "Annouar Sassi", party: "DVG", score: "" },
        { candidate: "Hicham Bensoussi", party: "DVC", score: "" },
        { candidate: "Cécile Sornin", party: "DVD", score: "" },
        { candidate: "Lara Million", party: "DVD", score: "" },
        {
          candidate: "Emmanuel Taffarelli",
          party: "REC - AF - PDF - CN - DLF - LP ",
          score: "",
        },
        { candidate: "Kadhafi Djehaf", party: "SE", score: "" },
        { candidate: "Frédéric Marquet", party: "SE", score: "" },
      ],
      tour2: [],
    },
  },

  // --- N ---
  {
    name: "Nancy",
    coords: [48.6921, 6.1844],
    population: 104260,
    interco: "Métropole du Grand Nancy",
    mayor: "Mathieu Klein (PS)",
    mayorColor: "#ff8080", // PS
    candidates: [
      {
        name: "Mathieu Klein",
        party: "PS - LÉ - PCF - PP - PRG",
        isMayor: true,
        color: "#ff8080",
        score: "",
        slogan: "Nancy grandit",
      },
      {
        name: "Laurent Hénart",
        party: "PR - LR - HOR - RE",
        color: "#e195d4",
        score: "",
        slogan: "Nancy avec vous !",
      },
      {
        name: "Emmanuel Lacresse",
        party: "RE diss.",
        color: "#ffd76e",
        score: "",
        slogan: "Nancy en avant !",
      },
      {
        name: "Sarah Farghaly",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "Nancy insoumise",
      },
      {
        name: "Laurent Watrin",
        party: "LE Diss. - DVG",
        color: "#77ff77",
        score: "",
        slogan: "Nous Nancy 2026",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "M. Klein", party: "PS", score: "37,88%" },
        { candidate: "L. Hénart", party: "Rad.", score: "34,69%" },
      ],
      tour2: [
        { candidate: "M. Klein", party: "PS", score: "54,53%" },
        { candidate: "L. Hénart", party: "Rad.", score: "45,47%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Mathieu Klein",
          party: "PS - LÉ - PCF - PP - PRG",
          score: "",
        },
        { candidate: "Laurent Hénart", party: "PR - LR - HOR - RE", score: "" },
        { candidate: "Emmanuel Lacresse", party: "RE diss.", score: "" },
        { candidate: "Sarah Farghaly", party: "LFI", score: "" },
        { candidate: "Laurent Watrin", party: "LE Diss. - DVG", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Nantes",
    coords: [47.2184, -1.5536],
    population: 314138,
    interco: "Nantes Métropole",
    mayor: "Johanna Rolland (PS)",
    mayorColor: "#FF3333", // PS
    candidates: [
      {
        name: "Johanna Rolland",
        party: "PS - LÉ - PCF - GÉ - PA - PRG - D! - UDB	",
        isMayor: true,
        color: "#FF3333",
        score: "",
        slogan: "La Gauche unie pour Nantes",
      },
      {
        name: "Foulques Chombart de Lauwe",
        party: "LR - MoDem - RE - HOR",
        color: "#0066CC",
        score: "",
        slogan: "",
      },
      {
        name: "Mounir Belhamiti",
        party: "Renaissance",
        color: "#FF9900",
        score: "",
        slogan: "",
      },
      {
        name: "William Aucant",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "Nouvelle nantes",
      },
      {
        name: "Jean-Claude Hulot",
        party: "RN / UDR",
        color: "#0d378a",
        score: "",
        slogan: "Pour une nantes sûre",
      },
    ],
    polls: [
      {
        source: "Télénantes/Ipsos (2025)",
        url: "#",
        details: "Rolland conforte son avance au 1er tour",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "J. Rolland", party: "PS", score: "31,36%" },
        { candidate: "L. Garnier", party: "LR", score: "19,93%" },
        { candidate: "J.C. Lemasson", party: "EELV", score: "14,51%" },
        { candidate: "V. Oppelt", party: "LREM", score: "13,00%" },
      ],
      tour2: [
        { candidate: "J. Rolland", party: "PS", score: "59,67%" },
        { candidate: "L. Garnier", party: "LR", score: "27,61%" },
        { candidate: "V. Oppelt", party: "LREM", score: "12,71%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Johanna Rolland",
          party: "PS - LÉ - PCF - GÉ - PA - PRG - D! - UDB",
          score: "",
        },
        {
          candidate: "Foulques Chombart de Lauwe",
          party: "LR - MoDem - RE - HOR",
          score: "",
        },
        { candidate: "Mounir Belhamiti", party: "Renaissance", score: "" },
        { candidate: "William Aucant", party: "LFI", score: "" },
        { candidate: "Jean-Claude Hulot", party: "RN / UDR", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Nice",
    coords: [43.7102, 7.262],
    population: 341522,
    interco: "Métropole Nice Côte d'Azur",
    mayor: "Christian Estrosi (Horizons)",
    mayorColor: "#0066CC", // Horizons (ex-LR)
    candidates: [
      {
        name: "Eric Ciotti",
        party: "UDR / RN ",
        color: "#0D378A",
        score: "41%",
        slogan: "Le meilleur est à venir",
      },
      {
        name: "Christian Estrosi",
        party: "Horizons",
        isMayor: true,
        color: "#0066CC",
        score: "31%",
        slogan: "Tous pour Nice",
      },
      {
        name: "Juliette Chesnel-Leroux",
        party: "ECO / PS / PCF",
        color: "#00C000",
        score: "12%",
        slogan: "",
      },
      {
        name: "Mireille Damiano",
        party: "LFI",
        color: "#cc2443",
        score: "10%",
        slogan: "Nice! Front Populaire",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "C. Estrosi", party: "LR", score: "47,62%" },
        { candidate: "P. Vardon", party: "RN", score: "16,69%" },
        { candidate: "J.M. Governatori", party: "ECO", score: "11,30%" },
      ],
      tour2: [
        { candidate: "C. Estrosi", party: "LR", score: "59,30%" },
        { candidate: "P. Vardon", party: "RN", score: "21,39%" },
        { candidate: "J.M. Governatori", party: "ECO", score: "19,30%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Christian Estrosi", party: "Horizons", score: "" },
        { candidate: "Eric Ciotti", party: "UDR / RN ", score: "" },
        {
          candidate: "Juliette Chesnel-Leroux",
          party: "ECO / PS / PCF",
          score: "",
        },
      ],
      tour2: [],
    },
  },
  {
    name: "Nîmes",
    coords: [43.8367, 4.3601],
    population: 148561,
    interco: "Nîmes Métropole",
    mayor: "Jean-Paul Fournier (LR)",
    mayorColor: "#0066CC",
    candidates: [
      {
        name: "Vincent Bouget",
        party: "PCF - PS - PP - LÉ - G·s - PRG - L'Après - LFI diss",
        color: "#dd0000",
        score: "32%",
        slogan: "Nîmes en commun",
      },
      {
        name: "Julien Sanchez",
        party: "RN - UDR - RPR - L'AF - LR diss.",
        color: "#0D378A",
        score: "23%",
        slogan: "Fiers d'être Nîmois !",
      },
      {
        name: "	Franck Proust",
        party: "LR - UDI - PRV - HOR",
        color: "#0066CC",
        score: "21%",
        slogan: "Tout Nîmes",
      },
      {
        name: "Julien Plantier",
        party: "NA - RE",
        color: "#adc1fd",
        score: "14%",
        slogan: "L'avenir Nîmois",
      },
      {
        name: "Pascal Dupretz",
        party: "LFI",
        color: "#cc2443",
        score: "7%",
        slogan: "Nîmes écologique et solidaire",
      },
      {
        name: "Jean-Marc Philibert",
        party: "SE",
        color: "#cccccc",
        score: "3%",
        slogan: "Vivons Nîmes",
      },
    ],
    polls: [
      {
        source: "OpinionWay (Fév. 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/fevrier/10072-mun-nimes-opinionway-objectif-gard-12-fevrier.pdf",
        details: "Bouget en tête (32%) devant Sanchez (23%) et Proust (21%)",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "J.P. Fournier", party: "LR", score: "34,35%" },
        { candidate: "Y. Lachaud", party: "DVC", score: "15,73%" },
        { candidate: "Y. Gillet", party: "RN", score: "14,34%" },
      ],
      tour2: [
        { candidate: "J.P. Fournier", party: "LR", score: "41,96%" },
        { candidate: "V. Bouget", party: "UG", score: "26,47%" },
        { candidate: "Y. Gillet", party: "RN", score: "17,51%" },
        { candidate: "Y. Lachaud", party: "DVC", score: "14,06%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Jean-Paul Fournier", party: "LR", score: "" },
        {
          candidate: "Vincent Bouget",
          party: "PCF - PS - PP - LÉ - G·s - PRG - L'Après - LFI diss",
          score: "",
        },
        {
          candidate: "Julien Sanchez",
          party: "RN - UDR - RPR - L'AF - LR diss.",
          score: "",
        },
        {
          candidate: "Franck Proust",
          party: "LR - UDI - PRV - HOR",
          score: "",
        },
        { candidate: "Julien Plantier", party: "NA - RE", score: "" },
        { candidate: "Pascal Dupretz", party: "LFI", score: "" },
        { candidate: "Jean-Marc Philibert", party: "SE", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Niort",
    coords: [46.3235, -0.4649],
    population: 59000,
    interco: "Communauté d'Agglomération du Niortais",
    mayor: "Jérôme Baloge (Rad.)",
    mayorColor: "#e195d4", // Radical
    candidates: [
      {
        name: "Jérôme Baloge",
        party: "Parti Radical / Re / Modem",
        isMayor: true,
        color: "#e195d4",
        score: "",
        slogan: "Niort tous ensemble",
      },
      {
        name: "Sébastien Mathieu",
        party: "Union de la Gauche (DVG-LFI-PCF-PS-LÉ-G.s-GÉ-Pirate)",
        color: "#FF3333",
        score: "",
        slogan: "Niort à gauche",
      },
      {
        name: "Céline Bonnet-Derisbourg",
        party: "RN",
        color: "#0D378A",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        {
          candidate: "Jérôme Baloge",
          party: "Parti Radical / Re / Modem",
          score: "67,99%",
        },
        {
          candidate: "François Gibert",
          party: "EÉLV-PS-PP-LRDG-ND",
          score: "18,73%",
        },
        { candidate: "Jérémy Robineau", party: "LFI-PCF", score: "9,59%" },
        { candidate: "Jean-Romée Charbonneau", party: "RN", score: "3,69%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Jérôme Baloge",
          party: "Parti Radical / Re / Modem",
          score: "",
        },
        {
          candidate: "Sébastien Mathieu",
          party: "Union de la Gauche (DVG-LFI-PCF-PS-LÉ-G.s-GÉ-Pirate)",
          score: "",
        },
        { candidate: "Céline Bonnet-Derisbourg", party: "RN", score: "" },
      ],
      tour2: [],
    },
  },

  // --- O ---
  {
    name: "Orléans",
    coords: [47.9029, 1.9092],
    population: 116238,
    interco: "Orléans Métropole",
    mayor: "Serge Grouard (DVD)",
    mayorColor: "#0066CC", // LR
    candidates: [
      {
        name: "Serge Grouard",
        party: "DVD",
        isMayor: true,
        color: "#0066CC",
        score: "",
        slogan: "",
      },
      {
        name: "Matthieu Schlesinger",
        party: "Renaissance",
        color: "#FF9900",
        score: "",
        slogan: "",
      },
      {
        name: "Jean-Philippe Grand",
        party: "Les Écologistes",
        color: "#00C000",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
  },

  // --- P ---
  {
    name: "Paris",
    coords: [48.8566, 2.3522],
    population: 2148000,
    interco: "Métropole du Grand Paris",
    mayor: "Anne Hidalgo (ne se représente pas)",
    mayorColor: "#FF3333", // PS
    candidates: [
      {
        name: "Emmanuel Grégoire",
        party: "PS / Alliance de Gauche",
        color: "#FF3333",
        score: "33%",
        slogan: "Paris en grand",
      },
      {
        name: "Rachida Dati",
        party: "LR / Droite parisienne",
        color: "#0066cc",
        score: "26%",
        slogan: "",
      },
      {
        name: "Pierre-Yves Bournazel",
        party: "Horizons / Centre",
        color: "#fab622",
        score: "14%",
        slogan: "",
      },
      {
        name: "Sophia Chikirou",
        party: "LFI",
        color: "#cc2443",
        score: "12%",
        slogan: "Le Nouveau Paris Populaire",
      },
      {
        name: "Sarah Knafo",
        party: "Reconquête!",
        color: "#13151d",
        score: "10%",
        slogan: "Une Ville Heureuse",
      },
      {
        name: "Thierry Mariani",
        party: "RN",
        color: "#0D378A",
        score: "4%",
        slogan: "",
      },
    ],
    // RÉACTIVATION DES SONDAGES
    polls: [
      {
        source: "Cluster17 (fév. 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/fevrier/10060-mun-paris-cluster-17-politico-2-fevrier.pdf",
        details:
          "Paris : Grégoire augmente quand Dati baissse légèrement, dynamique pour Knafo",
      },
      {
        source: "Ifop (Janv 2026)",
        url: "https://www.tf1info.fr/elections/sondage-elections-municipales-2026-a-paris-emmanuel-grégoire-et-rachida-dati-au-coude-a-coude-les-resultats-de-notre-enquete-sur-lci-2420609.html",
        details: "Paris : Grégoire et Dati au coude-à-coude",
      },
      {
        source: "Ifop (Janv 2026)",
        url: "https://www.ifop.com/wp-content/uploads/2026/01/122153_-le-climat-politique-a-paris.pdf",
        details: "Duel serré pour Grégoire/Dati",
      },
      {
        source: "Ipsos (Déc 2025)",
        url: "https://www.ipsos.com/fr-fr",
        details: "Dati (LR) 32% - Grégoire (PS) 28%",
      },
      {
        source: "Ifop (Nov 2025)",
        url: "https://www.ifop.com",
        details: "Duel serré au second tour Dati/Grégoire",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "A. Hidalgo", party: "PS", score: "29,33%" },
        { candidate: "R. Dati", party: "LR", score: "22,72%" },
        { candidate: "A. Buzyn", party: "LREM", score: "17,26%" },
        { candidate: "D. Belliard", party: "EELV", score: "10,79%" },
      ],
      tour2: [
        { candidate: "A. Hidalgo", party: "PS-EELV-PCF", score: "48,49%" },
        { candidate: "R. Dati", party: "LR", score: "34,31%" },
        { candidate: "A. Buzyn", party: "LREM", score: "13,04%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Emmanuel Grégoire",
          party: "PS / Alliance de Gauche",
          score: "",
        },
        {
          candidate: "Rachida Dati",
          party: "LR / Droite parisienne",
          score: "",
        },
        {
          candidate: "Pierre-Yves Bournazel",
          party: "Horizons / Centre",
          score: "",
        },
        { candidate: "Sophia Chikirou", party: "LFI", score: "" },
        { candidate: "Sarah Knafo", party: "Reconquête!", score: "" },
        { candidate: "Thierry Mariani", party: "RN", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Pau",
    coords: [43.2951, -0.3708],
    population: 77251,
    interco: "Communauté d'agglomération Pau Béarn Pyrénées",
    mayor: "François Bayrou (MoDem)",
    mayorColor: "#FF9900", // MoDem
    candidates: [
      {
        name: "François Bayrou",
        party: "MoDem - RE - LR",
        isMayor: true,
        color: "#FF9900",
        score: "",
        slogan: "Nous aimons Pau",
      },
      {
        name: "Jérôme Marbot",
        party: "PS - PCF - G.s - GÉ - L'AP",
        color: "#ff8080",
        score: "",
        slogan: "Nouvelle ère - Vivons Pau autrement",
      },
      {
        name: "Margaux Taillefer",
        party: "RN",
        color: "#0D378A",
        score: "",
        slogan: "L'espérance pour Pau",
      },
      {
        name: "Jean-François Blanco",
        party: "DVE - LFI",
        color: "#77ff77",
        score: "",
        slogan: "Nouvelle ère - Vivons Pau autrement",
      },
      {
        name: "Pascal Boniface",
        party: "Divers Centre",
        color: "#ffd76e",
        score: "",
        slogan: "Pau, c'est vous",
      },
      {
        name: "Philippe Arraou",
        party: "Divers Centre",
        color: "#ffd76e",
        score: "",
        slogan: "Arraou avec vous",
      },
      {
        name: "Reynald Cronier",
        party: "DLF",
        color: "#052656",
        score: "",
        slogan: "Pau, c'est vous",
      },
      {
        name: "Cyrille Marconi",
        party: "LO",
        color: "#bb0000",
        score: "",
        slogan: "Lutte ouvrière - Faire entendre le camp des travailleurs",
      },
    ],
    polls: [],
  },
  {
    name: "Perpignan",
    coords: [42.6887, 2.8948],
    population: 119344,
    mayor: "Louis Aliot (RN)",
    interco: "Perpignan Méditerranée Métropole",
    mayorColor: "#0D378A", // RN
    candidates: [
      {
        name: "Louis Aliot",
        party: "RN",
        isMayor: true,
        color: "#0D378A",
        score: "43%",
        slogan: "",
      },
      {
        name: "Mickael Idrac",
        party: "LFI - LÉ - G·s",
        color: "#cc2443",
        score: "16%",
        slogan: "Perpignan, changez d’air !",
      },

      {
        name: "Bruno Nougayrède",
        party: "DVD - LR - HOR - MoDem - UDI - RE",
        color: "#adc1fd",
        score: "12%",
        slogan: "Soyons fiers de Perpignan",
      },
      {
        name: "Mathias Blanc",
        party: "PS diss. - PCF - PRG - GÉ - L'AP - D! - PA - L'E - L'AE	",
        color: "#ff8080",
        score: "11%",
        slogan: "Perpignan Autrement",
      },
      {
        name: "Agnès Langevine",
        party: "PP - PS - DVC",
        color: "#ffc0c0",
        score: "9%",
        slogan: "Plus forts pour Perpignan",
      },
    ],
    polls: [
      {
        source: "Ifop (Déc. 2025)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2025/decembre/10029-mun-perpignan-ifop-lindependant-8-decembre.pdf",
        details: "Aliot proche de la réélection au 1er tour",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "L. Aliot", party: "RN", score: "48,3%" },
        { candidate: "A. Langevine", party: "EELV", score: "19,3%" },
        { candidate: "J. Lefebvre", party: "LREM", score: "13,4%" },
      ],
      tour2: [
        { candidate: "L. Aliot", party: "RN", score: "53,3%" },
        { candidate: "A. Langevine", party: "EELV", score: "25,5%" },
        { candidate: "J. Lefebvre", party: "LREM", score: "11,2%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Louis Aliot", party: "RN", score: "" },
        { candidate: "Mickael Idrac", party: "LFI - LÉ - G·s", score: "" },
        {
          candidate: "Bruno Nougayrède",
          party: "DVD - LR - HOR - MoDem - UDI - RE",
          score: "",
        },
        {
          candidate: "Mathias Blanc",
          party: "PS diss. - PCF - PRG - GÉ - L'AP - D! - PA - L'E - L'AE",
          score: "",
        },
        { candidate: "Agnès Langevine", party: "PP - PS - DVC", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Poitiers",
    coords: [46.5802, 0.3404],
    population: 90240,
    interco: "Grand Poitiers",
    mayor: "Léonore Moncond'huy (EELV)",
    mayorColor: "#00C000", // EELV
    candidates: [
      {
        name: "Léonore Moncond'huy",
        party: "Les Écologistes",
        isMayor: true,
        color: "#00C000",
        score: "26%",
        slogan: "",
      },
      {
        name: "François Blanchard",
        party: "PS/PRG/DVG",
        color: "#FF3333",
        score: "25%",
        slogan: "",
      },
      {
        name: "Lucile Parnaudeau",
        party: "DVD/RE/LR",
        color: "#adc1fd",
        score: "16%",
        slogan: "",
      },
      {
        name: "Charles Rangheard",
        party: "RN",
        color: "#0D378A",
        score: "13%",
        slogan: "",
      },
      {
        name: "À déterminer",
        party: "LFI/PCF/NPA",
        color: "#cc2443",
        score: "12%",
        slogan: "",
      },
      {
        name: "Anthony Brottier",
        party: "DVC/RE diss.",
        color: "#ffd76e",
        score: "8%",
        slogan: "",
      },
      {
        name: "Marie-Dolorès Prost",
        party: "UDR Diss.",
        color: "#052656",
        score: "Non testé",
        slogan: "",
      },
    ],
    polls: [
      {
        source: "Ifop (Juil 2025)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2025/octobre/9992-mun-poitiers-ifop-la-nouvelle-republique-4-octobre.pdf",
        details: "La gauche dans un mouchoir au 1er tour",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "N. Florian", party: "LR", score: "34,55%" },
        { candidate: "P. Hurmic", party: "EELV", score: "34,38%" },
        { candidate: "T. Cazenave", party: "LREM", score: "12,69%" },
      ],
      tour2: [
        { candidate: "P. Hurmic", party: "EELV", score: "46,48%" },
        { candidate: "N. Florian", party: "LR", score: "44,12%" },
        { candidate: "P. Poutou", party: "NPA", score: "9,39%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Léonore Moncond'huy",
          party: "Les Écologistes",
          score: "",
        },
        { candidate: "François Blanchard", party: "PS/PRG/DVG", score: "" },
        { candidate: "Lucile Parnaudeau", party: "DVD/RE/LR", score: "" },
        { candidate: "Charles Rangheard", party: "RN", score: "" },
        { candidate: "À déterminer", party: "LFI/PCF/NPA", score: "" },
        { candidate: "Anthony Brottier", party: "DVC/RE diss.", score: "" },
        { candidate: "Marie-Dolorès Prost", party: "UDR Diss.", score: "" },
      ],
      tour2: [],
    },
  },

  // --- R ---
  {
    name: "Reims",
    coords: [49.2583, 4.0317],
    population: 179380,
    interco: "Communauté Urbaine du Grand Reims",
    mayor: "Arnaud Robinet (Horizons)",
    mayorColor: "#0066CC", // Horizons
    candidates: [
      {
        name: "Arnaud Robinet",
        party: "HOR - LR - RE",
        isMayor: true,
        color: "#1d06e7",
        score: "",
        slogan: "Vivons Reims",
      },
      {
        name: "Éric Quénard",
        party: "PS - LÉ - PCF - G·s - L'AP - PP - GÉ - LRDG	",
        color: "#ff8080",
        score: "",
        slogan: "Unis pour Reims",
      },
      {
        name: "Anne-Sophie Frigou",
        party: "RN - LAF",
        color: "#0D378A",
        score: "",
        slogan: "Pour Reims, une nouvelle ère",
      },
      {
        name: "Patricia Coradel",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "",
      },
      {
        name: "Sébastien Mura",
        party: "DVG",
        color: "#ffc0c0",
        score: "",
        slogan: "Nous c'est Reims",
      },
      {
        name: "Stéphane Lang",
        party: "LR Diss.",
        color: "#adc1fd",
        score: "",
        slogan: "Les Rémois au cœur",
      },
      {
        name: "Thomas Rose",
        party: "LO",
        color: "#bb0000",
        score: "",
        slogan: "Lutte ouvrière - Faire entendre le camp des travailleurs",
      },
    ],
    polls: [],
    results2026: {
      tour1: [
        { candidate: "Arnaud Robinet", party: "HOR - LR - RE", score: "" },
        {
          candidate: "Éric Quénard",
          party: "PS - LÉ - PCF - G·s - L'AP - PP - GÉ - LRDG",
          score: "",
        },
        { candidate: "Anne-Sophie Frigou", party: "RN - LAF", score: "" },
        { candidate: "Patricia Coradel", party: "LFI", score: "" },
        { candidate: "Sébastien Mura", party: "DVG", score: "" },
        { candidate: "Stéphane Lang", party: "LR Diss.", score: "" },
        { candidate: "Thomas Rose", party: "LO", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Rennes",
    coords: [48.1173, -1.6778],
    population: 225081,
    interco: "Rennes Métropole",
    mayor: "Nathalie Appéré (PS)",
    mayorColor: "#FF3333", // PS
    candidates: [
      {
        name: "Nathalie Appéré",
        party: "PS",
        isMayor: true,
        color: "#FF3333",
        score: "",
        slogan: "",
      },
      {
        name: "Carole Gandon",
        party: "Renaissance",
        color: "#FF9900",
        score: "",
        slogan: "",
      },
      {
        name: "Charles Compagnon",
        party: "DVD",
        color: "#0066CC",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
  },
  {
    name: "Roubaix",
    coords: [50.6942, 3.1746],
    population: 98286,
    interco: "métropole européenne de Lille",
    mayor: "Alexandre Garcin (DVC)",
    mayorColor: "#ffd76e",
    candidates: [
      {
        name: "Alexandre Garcin",
        party: "DVC",
        isMayor: true,
        color: "#ffd76e",
        score: "",
        slogan: "Roubaix Ensemble",
      },
      {
        name: "Karim Amrouni",
        party: "DVG - LE - PCF - PRG - PS - PP",
        color: "#ff8080",
        score: "",
        slogan: "Agir au cœur de Roubaix",
      },
      {
        name: "David Guiraud",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "Fiers de Roubaix !",
      },
      {
        name: "Céline Sayah",
        party: "RN / DLF",
        color: "#0d378a",
        score: "",
        slogan: "Redresser Roubaix",
      },
      {
        name: "André Hibon",
        party: "DVD",
        color: "#adc1fd",
        score: "",
        slogan: "Roubaix, c'est vous",
      },
      {
        name: "Nacim Zeghlache-Salhi",
        party: "DVG",
        color: "#ffc0c0",
        score: "",
        slogan: "Pour Roubaix",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "Guillaume Delbar", party: "DVC", score: "41,22%" },
        {
          candidate: "Karim Amrouni",
          party: "DVG-PS dissident",
          score: "14,79%",
        },
      ],
      tour2: [
        { candidate: "Guillaume Delbar", party: "DVC", score: "56,20%" },
        {
          candidate: "Karim Amrouni",
          party: "DVG-PS dissident",
          score: "43,79%",
        },
      ],
    },
  },
  {
    name: "Rouen",
    coords: [49.4432, 1.0999],
    population: 114187,
    interco: "Métropole Rouen Normandie",
    mayor: "Nicolas Mayer-Rossignol (PS)",
    mayorColor: "#ff8080",
    candidates: [
      {
        name: "N. Mayer-Rossignol",
        party: "PS - LÉ - G.s - PCF",
        isMayor: true,
        color: "#ff8080",
        score: "42%",
        slogan: "Fiers de Rouen",
      },
      {
        name: "Marine Caron",
        party: "HOR - MoDem - RE - PRV - LR",
        color: "#1d06e7",
        score: "25%",
        slogan: "Réussir Rouen",
      },
      {
        name: "Maxime Da Silva",
        party: "LFI",
        color: "#cc2443",
        score: "18%",
        slogan: "Faire mieux pour Rouen",
      },
      {
        name: "Grégoire Houdan",
        party: "RN / UDR",
        color: "#0d378a",
        score: "12%",
        slogan: "Rouen Conquérante",
      },
      {
        name: "Frédéric Mazier",
        party: "REC",
        color: "#13151d",
        score: "Non testé",
        slogan: "À la reconquête de Rouen !",
      },
      {
        name: "Éric Moisan",
        party: "LO",
        color: "#bb0000",
        score: "Non testé",
        slogan: "Réussir Rouen",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "N. Mayer-Rossignol", party: "PS", score: "29,51%" },
        { candidate: "J.M. Bérégovoy", party: "EELV", score: "23,13%" },
        { candidate: "J.F. Bures", party: "DVD", score: "10,16%" },
      ],
      tour2: [
        { candidate: "N. Mayer-Rossignol", party: "PS", score: "67,12%" },
        { candidate: "J.F. Bures", party: "DVD", score: "32,88%" },
      ],
    },
  },

  // --- S ---
  {
    name: "Saint-Denis",
    // Décalage vers le Nord pour s'écarter de Paris
    coords: [49.006, 2.3582], // original lat: 48.9360 -> 49.00
    population: 112852,
    interco: "Métropole du Grand Paris",
    mayor: "Mathieu Hanotin (PS)",
    mayorColor: "#ff8080",
    candidates: [
      {
        name: "Mathieu Hanotin",
        party: "PS - LÉ - G.s - PA - GRS - PP",
        isMayor: true,
        color: "#ff8080",
        score: "",
        slogan: "Réussir ensemble",
      },
      {
        name: "Bally Bagayoko",
        party: "LFI - PCF",
        color: "#cc2443",
        score: "",
        slogan: "Ensemble, retrouvons l'espoir",
      },
      {
        name: "Quentin Gutierrez",
        party: "HOR - LR - RE",
        color: "#1d06e7",
        score: "",
        slogan: "A.G.I.R pour Saint-Denis !",
      },
      {
        name: "Pascal Kouppé de Kermartin",
        party: "UDI",
        color: "#66ccff",
        score: "",
        slogan: "Changer Saint-Denis Pierrefitte",
      },
      {
        name: "Agnès Renaud",
        party: "LO",
        color: "#bb0000",
        score: "",
        slogan: "Lutte ouvrière - Faire entendre le camp des travailleurs",
      },
    ],
    polls: [],
  },
  {
    name: "Saint-Étienne",
    coords: [45.4397, 4.3872],
    population: 172718,
    interco: "Saint-Étienne Métropole",
    mayor: "Gaël Perdriau (Ex-LR)",
    mayorColor: "#0066CC", // LR
    candidates: [
      {
        name: "Régis Juanico",
        party: "PS - LÉ - PCF - PP - G.s - SÉD",
        color: "#ff5555",
        score: "",
        slogan: "Rassembler Saint-Étienne",
      },
      {
        name: "Dino Cinieri",
        party: "LR - MoDem - PRV - PRG - RE - UDI",
        color: "#0066CC",
        score: "",
        slogan: "Saint-Étienne Ensemble 2026",
      },
      {
        name: "Corentin Jousserand",
        party: "RN",
        color: "#0d378a",
        score: "",
        slogan: "Retrouver Sainté !",
      },
      {
        name: "Valentine Mercier",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "Saint-Étienne insoumise",
      },
      {
        name: "Marc Chassaubéné",
        party: "DVD",
        color: "#adc1fd",
        score: "",
        slogan: "",
      },
      {
        name: "Siham Labich",
        party: "MoDem diss.",
        color: "#ffd76e",
        score: "",
        slogan: "Saint-Étienne citoyenne et humaine",
      },
      {
        name: "Éric Le Jaouen",
        party: "HOR",
        color: "#1d06e7",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
  },
  {
    name: "Saint-Martin-de-Bernegoue",
    coords: [46.2361, -0.3475],
    interco: "Communauté d'Agglomération du Niortais",
    population: 800,
    mayor: "Frédéric Nourrigeon (SE)",
    mayorColor: "#808080", // SE
    candidates: [
      {
        name: "Frédéric Nourrigeon",
        party: "SE",
        listName: "Liste sans étiquette",
        isMayor: true,
        color: "#808080",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
  },
  {
    name: "Sète",
    coords: [43.4028, 3.6928],
    population: 45337,
    interco: "Sète Agglopôle Méditerranée",
    mayor: "Hervé Marquès (DVD)",
    mayorColor: "#66ccff", // DVG-PS
    candidates: [
      {
        name: "Hervé Marquès",
        party: "DVD",
        isMayor: true,
        color: "#66ccff",
        score: "",
        slogan: "Protégeons l'Avenir",
      },
      {
        name: "Sébastien Denaja",
        party: "PS-PP-PRG-GÉ-L'E",
        color: "#ff8080",
        score: "",
        slogan: "Allons Ensemble ! avec Sébastien Denaja",
      },
      {
        name: "Sébastien Pacull",
        party: "RN-UDR-IDL",
        color: "#0d378a",
        score: "",
        slogan: "Sète Rassemblée",
      },
      {
        name: "Laura Seguin",
        party: "DVG-PCF-LFI-LÉ-G·s",
        color: "#ffc0c0",
        score: "",
        slogan: "Nouvelles Pages pour Sète",
      },
      {
        name: "Pascal Pintre",
        party: "DVD",
        color: "#adc1fd",
        score: "",
        slogan: "Agir pour Sète",
      },
      {
        name: "Josiane Amarger",
        party: "PA",
        color: "#6f2da8",
        score: "",
        slogan: "",
      },
      {
        name: "Daniel Pilaudeau",
        party: "LO",
        color: "#bb0000",
        score: "",
        slogan: "Lutte ouvrière – Le camp des travailleurs",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        {
          candidate: "François Commeinhes",
          party: "DVD-LR-LREM",
          score: "34,85%",
        },
        {
          candidate: "Véronique Calueba",
          party: "PCF-LFI-EÉLV-PA-PP-DVG",
          score: "19,24%",
        },
        {
          candidate: "Sébastien Denaja",
          party: "PS-LRDG-GE",
          score: "17,66%",
        },
        {
          candidate: "Sébastien Pacull",
          party: "DVD-RN-DLF-LR diss.",
          score: "14,38",
        },
      ],
      tour2: [
        {
          candidate: "François Commeinhes",
          party: "DVD-LR-LREM",
          score: "47,09%",
        },
        {
          candidate: "Véronique Calueba",
          party: "PCF-LFI-EÉLV-PA-PP-DVG-PS-LRDG-GE",
          score: "41,10%",
        },
        {
          candidate: "Sébastien Pacull",
          party: "DVD-RN-DLF-LR diss.-UDI",
          score: "11,80%",
        },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Hervé Marquès", party: "DVD", score: "" },
        { candidate: "Sébastien Denaja", party: "PS-PP-PRG-GÉ-L'E", score: "" },
        { candidate: "Sébastien Pacull", party: "RN-UDR-IDL", score: "" },
        { candidate: "Laura Seguin", party: "DVG-PCF-LFI-LÉ-G·s", score: "" },
        { candidate: "Pascal Pintre", party: "DVD", score: "" },
        { candidate: "Josiane Amarger", party: "PA", score: "" },
        { candidate: "Daniel Pilaudeau", party: "LO", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Strasbourg",
    coords: [48.5734, 7.7521],
    population: 291313,
    interco: "Eurométropole de Strasbourg",
    mayor: "Jeanne Barseghian (EELV)",
    mayorColor: "#00C000", // EELV
    candidates: [
      {
        name: "Catherine Trautmann",
        party: "PS",
        color: "#ff8080",
        score: "31%",
        slogan: "Pour Strasbourg",
      },
      {
        name: "Jeanne Barseghian",
        party: "Les Écologistes",
        isMayor: true,
        color: "#00C000",
        score: "22%",
        slogan: "Strasbourg juste et vivante",
      },
      {
        name: "Jean-Philippe Vetter",
        party: "LR - RES - RE diss.",
        color: "#0066cc",
        score: "19%",
        slogan: "Aimer Strasbourg",
      },
      {
        name: "Virginie Joron",
        party: "RN",
        color: "#0d378a",
        score: "11%",
        slogan: "",
      },
      {
        name: "Florian Kobryn",
        party: "LFI",
        color: "#cc2443",
        score: "9%",
        slogan: "Strasbourg fière et solidaire",
      },
      {
        name: "Pierre Jakubowicz",
        party: "HOR - RE - MoDem",
        color: "#1d06e7",
        score: "6%",
        slogan: "",
      },
    ],
    polls: [
      {
        source: "IPSOS (Fev. 2026)",
        url: "https://www.ipsos.com/fr-fr/municipales-2026-quelles-perspectives-dans-les-villes-de-lest-de-la-france",
        details:
          "Strasbourg : Trautmann en tête au 1er tour, mais un second tour très ouvert",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "J. Barseghian", party: "EELV", score: "27,87%" },
        { candidate: "A. Fontanel", party: "LREM", score: "19,86%" },
        { candidate: "C. Trautmann", party: "PS", score: "19,77%" },
      ],
      tour2: [
        { candidate: "J. Barseghian", party: "EELV", score: "41,70%" },
        { candidate: "A. Fontanel", party: "LREM", score: "34,95%" },
        { candidate: "C. Trautmann", party: "PS", score: "23,33%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Catherine Trautmann", party: "PS", score: "" },
        { candidate: "Jeanne Barseghian", party: "Les Écologistes", score: "" },
        {
          candidate: "Jean-Philippe Vetter",
          party: "LR - RES - RE diss.",
          score: "",
        },
        { candidate: "Virginie Joron", party: "RN", score: "" },
        { candidate: "Florian Kobryn", party: "LFI", score: "" },
        {
          candidate: "Pierre Jakubowicz",
          party: "HOR - RE - MoDem",
          score: "",
        },
      ],
      tour2: [],
    },
  },

  // --- T ---
  {
    name: "Toulon",
    coords: [43.1242, 5.928],
    population: 180452,
    interco: "Métropole Toulon Provence Méditerranée",
    mayor: "Josée Massi (DVD)",
    mayorColor: "#0066CC", // LR
    candidates: [
      {
        name: "Laure Lavalette",
        party: "RN / UDR",
        color: "#0d378a",
        score: "39%",
        slogan: "Un avenir pour Toulon",
      },
      {
        name: "Josée Massi",
        party: "DVD",
        isMayor: true,
        color: "#adc1fd",
        score: "24%",
        slogan: "",
      },
      {
        name: "Michel Bonnus",
        party: "LR",
        color: "#0066CC",
        score: "15%",
        slogan: "",
      },
      {
        name: "Magali Brunel",
        party: "PS - PCF - LÉ - PP	",
        color: "#FF3333",
        score: "13%",
        slogan: "Toulon en commun",
      },
      {
        name: "Isaline Cornil",
        party: "LFI",
        color: "#cc2443",
        score: "6%",
        slogan: "",
      },
      {
        name: "Emmanuel Le Lostec",
        party: "ÉAC - PN",
        color: "#77ff77",
        score: "Non testé",
        slogan: "En Avant Toulon-Isso Touloun",
      },
    ],
    polls: [
      {
        source: "IFOP (Jan 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/janvier/10058-mun-toulon-ifop-var-matin-28-janvier.pdf",
        details: "Le RN sort renforcé mais second tour compliqué",
      },
    ],
  },
  {
    name: "Toulouse",
    coords: [43.6047, 1.4442],
    population: 486828,
    interco: "Métropole Toulousaine",
    mayor: "Jean-Luc Moudenc (DVD)",
    mayorColor: "#0066CC", // LR/DVD
    candidates: [
      {
        name: "Jean-Luc Moudenc",
        party: "Aimer Toulouse (DVD)",
        isMayor: true,
        color: "#0066CC",
        score: "33%",
        slogan: "",
      },
      {
        name: "François Briançon",
        party: "PS - LÉ - PCF - G.s - PP - PRG - ND - MRC - AC",
        color: "#FF3333",
        score: "30%",
        slogan: "La Gauche unie pour Toulouse",
      },
      {
        name: "François Piquemal",
        party: "LFI - LÉ diss. - NPA-A - AC diss.",
        color: "#cc2443",
        score: "23%",
        slogan: "Demain Toulouse à gauche et écologiste",
      },
      {
        name: "Julien Leonardelli",
        party: "RN",
        color: "#0D378A",
        score: "7%",
        slogan: "",
      },
      {
        name: "Arthur Cottrel",
        party: "REC",
        color: "#13151d",
        score: "1.5%",
        slogan: "J’aime Toulouse",
      },
      {
        name: "Nadia Pellefigue",
        party: "DVG",
        color: "#ffc0c0",
        score: "Non testé",
        slogan: "",
      },
      {
        name: "à déterminer",
        party: "EQX",
        color: "#77ff77",
        score: "3%",
        slogan: "",
      },
      {
        name: "Guillaume Scali",
        party: "NPA",
        color: "#bb0000",
        score: "0.5%",
        slogan: "Toulouse ouvrière & révolutionnaire",
      },
      {
        name: "Pierre Pezzin",
        party: "DIV",
        color: "#cccccc",
        score: "0,5%",
        slogan: "",
      },
    ],
    polls: [
      {
        source: "IFOP (Fév. 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/fevrier/10084-mun-toulouse-ifop-sud-radio-la-depeche-19-fevrier.pdf",
        details: "",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "J.L. Moudenc", party: "LR", score: "36,18%" },
        { candidate: "A. Maurice", party: "EELV", score: "27,56%" },
        { candidate: "N. Pellefigue", party: "PS", score: "18,53%" },
      ],
      tour2: [
        { candidate: "J.L. Moudenc", party: "LR", score: "51,98%" },
        { candidate: "A. Maurice", party: "EELV", score: "48,02%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Jean-Luc Moudenc",
          party: "Aimer Toulouse (DVD)",
          score: "",
        },
        {
          candidate: "François Briançon",
          party: "PS - LÉ - PCF - G.s - PP - PRG - ND - MRC - AC",
          score: "",
        },
        {
          candidate: "François Piquemal",
          party: "LFI - LÉ diss. - NPA-A - AC diss.",
          score: "",
        },
        { candidate: "Julien Leonardelli", party: "RN", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Tourcoing",
    coords: [50.7125, 3.2516],
    population: 99160,
    interco: "métropole européenne de Lille",
    mayor: "Doriane Bécue (DVD)",
    mayorColor: "#adc1fd", // EELV
    candidates: [
      {
        name: "Doriane Bécue",
        party: "Divers Droite",
        isMayor: true,
        color: "#adc1fd",
        score: "53%",
        slogan: "",
      },
      {
        name: "Katy Vuylsteker",
        party: "LÉ - PS - PCF",
        color: "#00c000",
        score: "15%",
        slogan: "Nous, Tourcoing",
      },
      {
        name: "Franck Talpaert",
        party: "DVG",
        color: "#ffc0c0",
        score: "15%",
        slogan: "Citoyen.nes pour Tourcoing",
      },
      {
        name: "Bastien Verbrugghe",
        party: "RN",
        color: "#0d378a",
        score: "15%",
        slogan: "Pour Tourcoing",
      },
      {
        name: "Émilie Croës",
        party: "LFI",
        color: "#cc2443",
        score: "9%",
        slogan: "Tourcoing insoumise",
      },
    ],
    polls: [
      {
        source: "IFOP (Juin 2025)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2025/juin/9958-mun-tourcoing-ifop-voix-du-nord-23-juin.pdf",
        details: "",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "Gérald Darmanin", party: "LREM", score: "60,88%" },
        { candidate: "Franck Talpaert", party: "DVG", score: "10,77%" },
        { candidate: "Katy Vuylsteker", party: "PS", score: "9,20%" },
        { candidate: "Rémi Meurin", party: "RN", score: "8,39%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Doriane Bécue", party: "Divers Droite", score: "" },
        { candidate: "Katy Vuylsteker", party: "LÉ - PS - PCF", score: "" },
        { candidate: "Franck Talpaert", party: "DVG", score: "" },
        { candidate: "Bastien Verbrugghe", party: "RN", score: "" },
        { candidate: "Émilie Croës", party: "LFI", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Tours",
    coords: [47.3941, 0.6848],
    population: 136463,
    interco: "Tours Métropole Val de Loire",
    mayor: "Emmanuel Denis (EELV)",
    mayorColor: "#00C000", // EELV
    candidates: [
      {
        name: "Emmanuel Denis",
        party: "Les Écologistes - PS - PCF",
        isMayor: true,
        color: "#00C000",
        score: "37%",
        slogan: "",
      },
      {
        name: "Christophe Bouchet",
        party: "PRV - LR - RE - MoDem - UDI	",
        color: "#e195d4",
        score: "24%",
        slogan: "",
      },

      {
        name: "Aleksandar Nikolic",
        party: "Rassemblement National",
        color: "#0D378A",
        score: "15%",
        slogan: "",
      },
      {
        name: "Marie Quinton",
        party: "LFI",
        color: "#cc2443",
        score: "11%",
        slogan: "",
      },
      {
        name: "Benoist Pierre",
        party: "HOR diss.",
        color: "#ffd76e",
        score: "9%",
        slogan: "",
      },
      {
        name: "Henri Alfandari",
        party: "Horizon",
        color: "#0a539c",
        score: "2%",
        slogan: "",
      },
    ],
    polls: [
      {
        source: "OpinionWay (Jan 2026)",
        url: "https://www.commission-des-sondages.fr/notices/files/notices/2026/janvier/10051-mun-tours-opinionway-la-nouvelle-republique-16-janvier.pdf",
        details: "Répis pour Denis (37%) devant Bouchet (24%)",
      },
    ],
    results2020: {
      tour1: [
        { candidate: "E. Denis", party: "PS", score: "37,8%" },
        { candidate: "C. Bouchet", party: "LR", score: "24,5%" },
        { candidate: "A. Maurice", party: "EELV", score: "13,5%" },
        { candidate: "N. Pellefigue", party: "PS", score: "13,5%" },
      ],
      tour2: [
        { candidate: "E. Denis", party: "PS", score: "63,1%" },
        { candidate: "C. Bouchet", party: "LR", score: "36,9%" },
        { candidate: "A. Maurice", party: "EELV", score: "13,5%" },
        { candidate: "N. Pellefigue", party: "PS", score: "13,5%" },
      ],
    },
    results2026: {
      tour1: [
        {
          candidate: "Emmanuel Denis",
          party: "Les Écologistes - PS - PCF",
          score: "",
        },
        {
          candidate: "Christophe Bouchet",
          party: "PRV - LR - RE - MoDem - UDI",
          score: "",
        },
        {
          candidate: "Aleksandar Nikolic",
          party: "Rassemblement National",
          score: "",
        },
        { candidate: "Marie Quinton", party: "LFI", score: "" },
        { candidate: "Benoist Pierre", party: "HOR diss.", score: "" },
        { candidate: "Henri Alfandari", party: "Horizon", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Tulle",
    coords: [45.27, 1.77],
    population: 13401,
    interco: "Communauté d'agglomération Tulle Agglo",
    mayor: "Bernard Combes (PS)",
    mayorColor: "#ff8080", // DVG-PS
    candidates: [
      {
        name: "Bernard Combes",
        party: "DVG-PS",
        isMayor: true,
        color: "#ff8080",
        score: "",
        slogan: "Le pouvoir d'agir",
      },
      {
        name: "Nicolas Marlin",
        party: "PCF-LFI-LÉ-DVG",
        color: "#dd0000",
        score: "",
        slogan: "Ensemble pour Tulle",
      },
      {
        name: "Laurent Melin",
        party: "DVD-DVC-RE",
        color: "#adc1fd",
        score: "",
        slogan: "Tulle l'énergie qui nous unit",
      },
      {
        name: "Thierry Greck",
        party: "RN",
        color: "#0D378A",
        score: "",
        slogan: "Vivons Tulle Ensemble",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "B. Combes", party: "PS", score: "64,34%" },
        { candidate: "R. Chaumeil", party: "DVD(LR)", score: "35,65%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Bernard Combes", party: "DVG-PS", score: "" },
        { candidate: "Nicolas Marlin", party: "PCF-LFI-LÉ-DVG", score: "" },
        { candidate: "Laurent Melin", party: "DVD-DVC-RE", score: "" },
        { candidate: "Thierry Greck", party: "RN", score: "" },
      ],
      tour2: [],
    },
  },

  // --- V ---
  {
    name: "Valence",
    coords: [44.9333, 4.8917],
    population: 64726,
    interco: "Valence Romans Agglo",
    mayor: "Nicolas Daragon (LR)",
    mayorColor: "#0066CC", // LR
    candidates: [
      {
        name: "Nicolas Daragon",
        party: "LR",
        isMayor: true,
        color: "#0066CC",
        score: "",
        slogan: "Pour Valence, naturellement",
      },
      {
        name: "Paul Christophle",
        party: "PS-PCF-LÉ-PP-D!",
        color: "#ff8080",
        score: "",
        slogan: "L'appel pour Valence 2026",
      },
      {
        name: "Philippe Dos Reis",
        party: "RN",
        color: "#0D378A",
        score: "",
        slogan: "",
      },
      {
        name: "Stéphane Magnin",
        party: "LFI-PG-REV",
        color: "#cc2443",
        score: "",
        slogan: "",
      },
      {
        name: "Jules Boyadjian",
        party: "DVG",
        color: "#ffc0c0",
        score: "",
        slogan: "Le choix de Valence",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "N. Daragon", party: "LR", score: "59,45%" },
        { candidate: "A. Maurice", party: "EELV/PS", score: "17,75%" },
        { candidate: "O. Gfa", party: "LREM", score: "6,91%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Nicolas Daragon", party: "LR", score: "" },
        { candidate: "Paul Christophle", party: "PS-PCF-LÉ-PP-D!", score: "" },
        { candidate: "Philippe Dos Reis", party: "RN", score: "" },
        { candidate: "Stéphane Magnin", party: "LFI-PG-REV", score: "" },
        { candidate: "Jules Boyadjian", party: "DVG", score: "" },
      ],
      tour2: [],
    },
  },
  {
    name: "Villeurbanne",
    // Décalage léger vers l'Est pour ne pas coller à Lyon
    coords: [45.7667, 4.9803], // original lon: 4.8803 -> décalé à 4.98
    population: 154781,
    interco: "Métropole de Lyon",
    mayor: "Cédric Van Styvendael (PS)",
    mayorColor: "#FF3333",
    candidates: [
      {
        name: "Cédric Van Styvendael",
        party: "PS - LÉ - PCF - PP",
        isMayor: true,
        color: "#FF3333",
        score: "",
        slogan: "Engagé•es pour Villeurbanne",
      },
      {
        name: "Jean-Paul Bret",
        party: "PS diss.",
        color: "#ffc0c0",
        score: "",
        slogan: "Villeurbanne printemps citoyen",
      },
      {
        name: "Sophie Cruz",
        party: "LR - RE",
        color: "#0066CC",
        score: "",
        slogan: "Cœur Villeurbanne",
      },
      {
        name: "Mathieu Garabedian",
        party: "LFI",
        color: "#cc2443",
        score: "",
        slogan: "Engagé•es pour Villeurbanne",
      },
      {
        name: "Gérald Canon",
        party: "RN",
        color: "#0D378A",
        score: "",
        slogan: "Rendez-nous Villeurbanne !",
      },
      {
        name: "Marc Fraysse",
        party: "LR diss.",
        color: "#adc1fd",
        score: "",
        slogan: "",
      },
    ],
    polls: [],
    results2020: {
      tour1: [
        { candidate: "C. Van Styvendael", party: "PS", score: "33,29%" },
        { candidate: "B. Vaney", party: "EELV", score: "27,48%" },
        { candidate: "P. Morel", party: "LREM", score: "14,61%" },
      ],
      tour2: [
        { candidate: "C. Van Styvendael", party: "PS", score: "70,37%" },
        { candidate: "P. Morel", party: "LREM", score: "29,63%" },
      ],
    },
    results2026: {
      tour1: [
        { candidate: "Cédric Van Styvendael", party: "PS", score: "" },
        { candidate: "Jean-Paul Bret", party: "PS diss.", score: "" },
        { candidate: "Sophie Cruz", party: "LR - RE", score: "" },
        { candidate: "Mathieu Garabedian", party: "LFI", score: "" },
        { candidate: "Gérald Canon", party: "RN", score: "" },
        { candidate: "Marc Fraysse", party: "LR diss.", score: "" },
      ],
      tour2: [],
    },
  },
];

// --- CONSTANTES DE CONFIGURATION MAP ---
// CES BORNES CORRESPONDENT EXACTEMENT A L'IMAGE WIKIMEDIA "France_location_map"
const MAP_BOUNDS = {
  minLon: -5.8, // Borne Ouest exacte de la carte
  maxLon: 10.0, // Est
  minLat: 41.0, // Sud
  maxLat: 51.5, // Nord
};

// Fonction de projection latitude/longitude -> pourcentage X/Y CSS
function latLonToPercent(lat, lon) {
  const x =
    ((lon - MAP_BOUNDS.minLon) / (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon)) * 100;
  const y =
    ((MAP_BOUNDS.maxLat - lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * 100;

  // Modification : On laisse les valeurs dépasser 0 et 100 pour que les points (ex: Nord) puissent dépasser
  return {
    x: x,
    y: y,
  };
}

// --- 2. INITIALISATION (image map) ---
document.addEventListener("DOMContentLoaded", () => {
  // --- Initialisation du Zoom (Correction) ---
  function initZoom() {
    const btnIn = document.getElementById("btn-zoom-in");
    const btnOut = document.getElementById("btn-zoom-out");
    const imageMap = document.getElementById("image-map");
    const mapViewport = document.getElementById("map");

    if (!btnIn || !btnOut || !imageMap || !mapViewport) {
      console.warn("Zoom controls or map not found");
      return;
    }

    let currentScale = 1;
    let translateX = 0;
    let translateY = 0;
    const MIN_SCALE = 1;
    const MAX_SCALE = 4;

    // Reset pour être sûr
    imageMap.style.transformOrigin = "0 0";
    imageMap.style.transition = "transform 0.2s ease-out";

    const clampState = () => {
      if (currentScale < MIN_SCALE) currentScale = MIN_SCALE;
      if (currentScale > MAX_SCALE) currentScale = MAX_SCALE;

      const viewportWidth = mapViewport.clientWidth;
      const viewportHeight = mapViewport.clientHeight;
      const contentWidth = imageMap.offsetWidth * currentScale;
      const contentHeight = imageMap.offsetHeight * currentScale;

      const maxOffsetX = Math.max(0, contentWidth - viewportWidth);
      const maxOffsetY = Math.max(0, contentHeight - viewportHeight);

      if (translateX > 0) translateX = 0;
      if (translateX < -maxOffsetX) translateX = -maxOffsetX;
      if (translateY > 0) translateY = 0;
      if (translateY < -maxOffsetY) translateY = -maxOffsetY;
    };

    const applyTransform = () => {
      clampState();
      imageMap.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
    };

    const zoomAroundPoint = (clientX, clientY, deltaScale) => {
      const rect = mapViewport.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const relativeY = clientY - rect.top;
      const contentX = (relativeX - translateX) / currentScale;
      const contentY = (relativeY - translateY) / currentScale;

      currentScale = Math.min(
        MAX_SCALE,
        Math.max(MIN_SCALE, currentScale + deltaScale),
      );
      translateX = relativeX - contentX * currentScale;
      translateY = relativeY - contentY * currentScale;
      applyTransform();
    };

    const handleZoomButton = (e, direction) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();

      const rect = mapViewport.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const delta = direction === "in" ? 0.5 : -0.5;
      zoomAroundPoint(centerX, centerY, delta);
    };

    // Utilisation de onclick pour écraser tout conflit précédent
    btnIn.onclick = (e) => handleZoomButton(e, "in");
    btnOut.onclick = (e) => handleZoomButton(e, "out");

    // Support touch pour mobile
    btnIn.ontouchstart = (e) => handleZoomButton(e, "in");
    btnOut.ontouchstart = (e) => handleZoomButton(e, "out");

    // --- GESTION DU PINCH-TO-ZOOM ---
    const gestureTarget = mapViewport;
    let startDist = 0;
    let startScale = 1;
    let pinchAnchor = null;
    let panStart = null;

    const distanceBetweenTouches = (touchList) => {
      const dx = touchList[0].clientX - touchList[1].clientX;
      const dy = touchList[0].clientY - touchList[1].clientY;
      return Math.hypot(dx, dy);
    };

    const midpointBetweenTouches = (touchList) => ({
      x: (touchList[0].clientX + touchList[1].clientX) / 2,
      y: (touchList[0].clientY + touchList[1].clientY) / 2,
    });

    // Détection début pincement ou pan
    gestureTarget.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 2) {
          if (e.cancelable) e.preventDefault();
          startDist = distanceBetweenTouches(e.touches);
          startScale = currentScale;
          const rect = mapViewport.getBoundingClientRect();
          const mid = midpointBetweenTouches(e.touches);
          const relativeX = mid.x - rect.left;
          const relativeY = mid.y - rect.top;
          pinchAnchor = {
            x: (relativeX - translateX) / currentScale,
            y: (relativeY - translateY) / currentScale,
          };
          panStart = null; // On désactive le pan pendant le pinch
        } else if (e.touches.length === 1 && currentScale > 1) {
          panStart = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
          };
        }
      },
      { passive: false },
    );

    // Gestion du mouvement (pinch ou pan)
    gestureTarget.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length === 2 && startDist > 0) {
          if (e.cancelable) e.preventDefault();
          const newDist = distanceBetweenTouches(e.touches);
          let targetScale = (newDist / startDist) * startScale;
          if (targetScale < MIN_SCALE) targetScale = MIN_SCALE;
          if (targetScale > MAX_SCALE) targetScale = MAX_SCALE;

          currentScale = targetScale;

          const rect = mapViewport.getBoundingClientRect();
          const mid = midpointBetweenTouches(e.touches);
          const relativeX = mid.x - rect.left;
          const relativeY = mid.y - rect.top;

          if (pinchAnchor) {
            translateX = relativeX - pinchAnchor.x * currentScale;
            translateY = relativeY - pinchAnchor.y * currentScale;
          }

          applyTransform();
        } else if (e.touches.length === 1 && panStart && currentScale > 1) {
          if (e.cancelable) e.preventDefault();
          const touch = e.touches[0];
          const dx = touch.clientX - panStart.x;
          const dy = touch.clientY - panStart.y;
          translateX += dx;
          translateY += dy;
          panStart = { x: touch.clientX, y: touch.clientY };
          applyTransform();
        }
      },
      { passive: false },
    );

    // Fin des gestes tactiles
    gestureTarget.addEventListener("touchend", (e) => {
      if (e.touches.length < 2) {
        startDist = 0;
        pinchAnchor = null;
      }
      if (e.touches.length === 1 && currentScale > 1) {
        panStart = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      } else if (e.touches.length === 0) {
        panStart = null;
      }
    });

    gestureTarget.addEventListener("touchcancel", () => {
      startDist = 0;
      pinchAnchor = null;
      panStart = null;
    });

    // Initialisation visuelle
    applyTransform();

    // Reset lors des changements de taille d'écran
    window.addEventListener("resize", () => {
      currentScale = 1;
      translateX = 0;
      translateY = 0;
      applyTransform();
    });
  }

  // Le délai assure que le DOM est bien stabilisé
  setTimeout(initZoom, 100);

  // --- NEW: gestion robuste du chargement de l'image de la carte ---
  const mapImg = document.getElementById("france-img");
  if (mapImg) {
    const fallbacks = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/France_location_map.svg/1280px-France_location_map.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/82/France_location_map.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/France_location_map.svg/1024px-France_location_map.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/France_relief_location_map.jpg",
    ];
    let idx = 0;
    try {
      mapImg.crossOrigin = "anonymous";
    } catch (e) {}
    try {
      mapImg.referrerPolicy = "no-referrer";
    } catch (e) {}

    // overlay fallback (créé une seule fois si besoin)
    let fallbackOverlay = null;
    function createFallbackOverlay(container) {
      if (fallbackOverlay) return fallbackOverlay;
      const div = document.createElement("div");
      div.id = "map-fallback";
      div.setAttribute("aria-hidden", "false");
      Object.assign(div.style, {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",

        justifyContent: "center",
        background: "linear-gradient(180deg,#ffffff, #f0f4f8)",
        color: "#666",
        padding: "20px",
        boxSizing: "border-box",
        textAlign: "center",
        zIndex: "5",
      });
      // --- Ajout : lien vers la page Wikimedia et bouton de retry ---
      div.innerHTML = `
				<div>
					<strong>Carte non disponible</strong>
					<div style="margin-top:8px;font-size:0.9rem">
						Impossible de charger l'image distante. Les points sont affichés ci‑dessous.
					</div>
					<div style="margin-top:12px">
						<a href="https://commons.wikimedia.org/wiki/File:France_relief_location_map.jpg" target="_blank" rel="noreferrer">Voir sur Wikimedia</a>
						&nbsp;•&nbsp;
						<a href="${fallbacks[0]}" id="map-open-img" target="_blank" rel="noreferrer">Ouvrir l'image</a>
					</div>
					<div style="margin-top:10px">
						<button id="map-retry-btn" style="padding:6px 10px;border-radius:6px;border:1px solid #ccc;background:#fff;cursor:pointer">Réessayer le chargement</button>
					</div>
				</div>
			`;
      fallbackOverlay = div;
      return div;
    }

    const imageMap = document.getElementById("image-map");

    const handleLoad = function () {
      // image chargée correctement -> supprimer overlay si présent
      if (fallbackOverlay && fallbackOverlay.parentElement)
        fallbackOverlay.parentElement.removeChild(fallbackOverlay);
      mapImg.style.display = "block";
      mapImg.classList.add("loaded");
      mapImg.removeEventListener("load", handleLoad);
      mapImg.removeEventListener("error", handleError);
    };

    const handleError = function () {
      // essaie la prochaine fallback
      if (idx < fallbacks.length) {
        const next = fallbacks[idx++];
        mapImg.removeEventListener("error", handleError);
        // petit délai pour éviter boucles rapides
        setTimeout(() => {
          mapImg.src = next;
          mapImg.addEventListener("error", handleError);
        }, 120);
        return;
      }
      // toutes les sources ont échoué -> afficher overlay fallback et masquer img
      if (imageMap) {
        const overlay = createFallbackOverlay(imageMap);
        // n'ajoute pas deux fois
        if (!imageMap.querySelector("#map-fallback"))
          imageMap.appendChild(overlay);
        mapImg.style.display = "none";

        // --- Ajout : wiring du bouton "Réessayer" pour relancer le premier fallback ---
        const retryBtn = imageMap.querySelector("#map-retry-btn");
        if (retryBtn) {
          retryBtn.addEventListener("click", () => {
            // reset index pour relancer depuis la première source
            idx = 1; // on va assigner fallbacks[0] ci‑dessous et incrémenter idx
            mapImg.style.display = "block";
            // retirer overlay
            if (fallbackOverlay && fallbackOverlay.parentElement)
              fallbackOverlay.parentElement.removeChild(fallbackOverlay);
            // relancer la source initiale
            mapImg.removeEventListener("error", handleError);
            mapImg.removeEventListener("load", handleLoad);
            mapImg.addEventListener("load", handleLoad);
            mapImg.addEventListener("error", handleError);
            mapImg.src = fallbacks[0];
          });
        }
      }
      mapImg.removeEventListener("error", handleError);
      mapImg.removeEventListener("load", handleLoad);
    };

    mapImg.addEventListener("load", handleLoad);
    mapImg.addEventListener("error", handleError);

    // si src vide, initialise avec premier fallback
    if (!mapImg.src || mapImg.src.trim() === "") {
      mapImg.src = fallbacks[idx++];
    }
  }

  // 1. NAVIGATION (Reste inchangé)
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Ignorer les boutons sans data-section (ex: boutons de zoom)
      if (!e.currentTarget.hasAttribute("data-section")) return;

      document
        .querySelectorAll(".nav-btn")
        .forEach((b) => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const target = e.currentTarget.getAttribute("data-section");

      const targetEl = document.getElementById(target);
      if (targetEl) {
        document
          .querySelectorAll(".section")
          .forEach((s) => s.classList.remove("active"));
        targetEl.classList.add("active");
      }
    });
  });

  const closeBtn = document.getElementById("close-btn");
  if (closeBtn) closeBtn.addEventListener("click", closeDetails);

  // Fonction pour générer la carte et les listes
  function renderApp() {
    // Gestion de la MAP (Pins)
    const pinsContainer = document.getElementById("pins");
    if (pinsContainer) {
      pinsContainer.innerHTML = "";
      citiesData.forEach((city) => {
        const pos = latLonToPercent(city.coords[0], city.coords[1]);

        const pin = document.createElement("div");
        pin.className = "pin";
        pin.style.left = pos.x + "%";
        pin.style.top = pos.y + "%";

        // Le point (dot)
        const dot = document.createElement("div");
        dot.className = "dot";

        // --- Modification: Couleur du point selon le parti du maire sortant ---
        if (city.mayorColor) {
          dot.style.backgroundColor = city.mayorColor;
          dot.style.borderColor = "#fff"; // On garde le contour blanc
        }

        let baseSize = 8;
        if (city.population > 1000000) baseSize = 20;
        else if (city.population > 400000) baseSize = 16;
        else if (city.population > 200000) baseSize = 12;
        dot.style.width = baseSize + "px";
        dot.style.height = baseSize + "px";

        // Popup
        const popup = document.createElement("div");
        popup.className = "hover-popup";

        // --- AJOUT : Correction pour Lille et les villes du Nord ---
        // Si la ville est située dans les 15% supérieurs de la carte, on affiche la popup en dessous
        // pour éviter qu'elle ne soit coupée ou qu'elle déborde de l'écran.
        if (pos.y < 15) {
          popup.style.bottom = "auto";
          popup.style.top = "150%"; // Affiche la popup en dessous du point
        }

        // Titre
        const title = document.createElement("h4");
        title.textContent = city.name;
        // Modification de style pour insérer la population avant la ligne de séparation
        title.style.borderBottom = "none";
        title.style.marginBottom = "0";
        title.style.paddingBottom = "0";
        popup.appendChild(title);

        // Population (Nouveau)
        const popInfo = document.createElement("div");
        popInfo.textContent =
          city.population.toLocaleString("fr-FR") + " habitants";
        popInfo.style.fontSize = "0.8rem";
        popInfo.style.color = "#888";
        popInfo.style.marginBottom = "10px";
        popInfo.style.borderBottom = "2px solid #f0f0f0"; // La ligne se déplace ici
        popInfo.style.paddingBottom = "5px";
        popup.appendChild(popInfo);

        // Candidats
        if (city.candidates) {
          city.candidates.slice(0, 4).forEach((cand) => {
            const row = document.createElement("div");
            row.className = "candidate-mini-item";
            const scoreHtml =
              cand.score && cand.score !== ""
                ? `<span class="c-score">${cand.score}</span>`
                : "";

            // Support des flags booleans `isElected` / `isReelected` + clef `status`
            const statusKeyFromFlags = cand.isReelected
              ? "reelected"
              : cand.isElected
                ? "elected"
                : cand.status;
            const statusHtml = renderStatusBadgeHTML(statusKeyFromFlags);

            // Ancien affichage direct du badge de statut (conservé pour compatibilité)
            const statusBadge =
              cand.status === "elected"
                ? `<span class="status-badge status-elected"><span class="sb-icon">✓</span>Élu</span>`
                : cand.status === "reelected"
                  ? `<span class="status-badge status-reelected"><span class="sb-icon">⟳</span>Réélu</span>`
                  : "";

            // Si on affiche déjà un badge "Maire élu(e) / Maire réélu(e)" via les flags
            // on ne doit pas afficher aussi le badge de statut (évite duplication/cocher bleue)
            const showStatusHtml = !(cand.isElected || cand.isReelected);

            // Ajout de l'affichage du nom de la liste en petit
            const listHtml = cand.listName
              ? `<div style="font-size:0.75em; color:#888; font-style:italic; margin-top:2px;">"${cand.listName}"</div>`
              : "";

            // Badges spéciaux pour le maire : sortant / élu / réélu
            const mayorBadgeParts = [];
            if (cand.isMayor) {
              mayorBadgeParts.push(
                `<span style="font-size:0.7em; background:#f0f0f0; border:1px solid #ccc; color:#555; padding:0 3px; border-radius:3px; font-weight:normal; vertical-align: text-top;">Sortant</span>`,
              );
            }
            if (cand.isReelected) {
              mayorBadgeParts.push(
                `<span class="mayor-reelected">réélu(e)</span>`,
              );
            } else if (cand.isElected) {
              mayorBadgeParts.push(`<span class="mayor-elected">élu(e)</span>`);
            }
            const mayorBadge = mayorBadgeParts.length
              ? " " + mayorBadgeParts.join(" ")
              : "";

            row.innerHTML = `
                            <div class="candidate-left">
                                <div class="party-dot" style="background-color: ${cand.color}"></div>
                                <div class="candidate-info">
                                    <span class="c-name">${cand.name}${mayorBadge}${showStatusHtml ? statusHtml : ""}</span>
                                    <span class="c-party">${cand.party}</span>
                                    ${listHtml}
                                </div>
                            </div>
                            ${scoreHtml}
                        `;
            popup.appendChild(row);
          });
        }

        // Bouton Détails
        const btn = document.createElement("button");
        btn.className = "popup-detail-btn";
        btn.textContent = "Détails →";
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          window.showCityDetails(city.name);
        });
        popup.appendChild(btn);

        pin.appendChild(dot);
        pin.appendChild(popup);

        // Clic dot
        dot.addEventListener("click", (e) => {
          // Sur mobile/tablette (< 1024px), on redirige directement vers la fiche détail
          // comme demandé par l'utilisateur, au lieu d'afficher le popup.
          if (window.innerWidth < 1024) {
            e.stopPropagation();
            window.showCityDetails(city.name);
          } else {
            // Sur Desktop, on garde le comportement popup (hover ou click to toggle)
            // Le CSS gère le hover, le clic ne fait rien de spécial (ou ferme).
            e.stopPropagation();
          }
        });

        pinsContainer.appendChild(pin);
      });
    }

    // Listes textuelles
    buildVillesTable(citiesData);
    buildSondagesList(citiesData);
  }

  // 2. RENDU IMMÉDIAT
  // Charger d'éventuelles modifications locales avant le rendu
  loadSavedDataOverrides();
  renderApp();

  // 3. MISE À JOUR WIKIPÉDIA DÉSACTIVÉE
  // (Pour éviter les bugs d'affichage de texte wiki brut)
  /*
    updateCitiesCandidatesFromWikipedia().then(() => {
        // ...
    });
    */
});

// --- 4. FONCTIONS DE GESTION ---

// --- Persist / Editor utilities -------------------------------------------------
function loadSavedDataOverrides() {
  try {
    const raw = localStorage.getItem("municipale_user_edits");
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (typeof saved !== "object") return;
    Object.keys(saved).forEach((cityName) => {
      const override = saved[cityName];
      const city = citiesData.find((c) => c.name === cityName);
      if (!city) return;
      // shallow merge for known keys
      Object.keys(override).forEach((k) => {
        if (k === "candidates" || k === "results2026") {
          city[k] = override[k];
        } else {
          city[k] = override[k];
        }
      });
    });
  } catch (err) {
    console.warn("Failed to load local edits", err);
  }
}

function saveCityOverride(cityName, overrideObj) {
  try {
    const raw = localStorage.getItem("municipale_user_edits");
    const saved = raw ? JSON.parse(raw) : {};
    saved[cityName] = overrideObj;
    localStorage.setItem("municipale_user_edits", JSON.stringify(saved));
  } catch (err) {
    console.warn("Failed to save local edit", err);
  }
}

function clearCityOverride(cityName) {
  try {
    const raw = localStorage.getItem("municipale_user_edits");
    if (!raw) return;
    const saved = JSON.parse(raw);
    delete saved[cityName];
    localStorage.setItem("municipale_user_edits", JSON.stringify(saved));
  } catch (err) {
    console.warn("Failed to clear local edit", err);
  }
}

function openDataEditor(city) {
  // Avoid duplicate modal
  if (document.getElementById("data-editor-modal")) return;
  const modal = document.createElement("div");
  modal.id = "data-editor-modal";
  const card = document.createElement("div");
  card.className = "editor-card";
  modal.appendChild(card);

  const title = document.createElement("h3");
  title.textContent = `Modifier les données — ${city.name}`;
  card.appendChild(title);

  // Mayor fields
  const mayorLabel = document.createElement("label");
  mayorLabel.textContent = "Maire (texte)";
  card.appendChild(mayorLabel);
  const mayorInput = document.createElement("input");
  mayorInput.type = "text";
  mayorInput.value = city.mayor || "";
  mayorInput.style.width = "100%";
  card.appendChild(mayorInput);

  const colorLabel = document.createElement("label");
  colorLabel.textContent = "Couleur pastille maire";
  card.appendChild(colorLabel);
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.value = city.mayorColor || "#cccccc";
  card.appendChild(colorInput);

  // Candidates list
  const candTitle = document.createElement("h4");
  candTitle.textContent = "Candidats";
  card.appendChild(candTitle);

  const candContainer = document.createElement("div");
  card.appendChild(candContainer);

  function renderCandidateRows() {
    candContainer.innerHTML = "";
    (city.candidates || []).forEach((cand, idx) => {
      const row = document.createElement("div");
      row.className = "candidate-row";
      // name
      const colName = document.createElement("div");
      colName.className = "col";
      const nameInp = document.createElement("input");
      nameInp.type = "text";
      nameInp.value = cand.name || "";
      nameInp.style.width = "100%";
      colName.appendChild(nameInp);
      // party
      const colParty = document.createElement("div");
      colParty.className = "col";
      const partyInp = document.createElement("input");
      partyInp.type = "text";
      partyInp.value = cand.party || "";
      partyInp.placeholder = "Parti";
      partyInp.style.width = "100%";
      colParty.appendChild(partyInp);
      // score
      const colScore = document.createElement("div");
      colScore.className = "col";
      const scoreInp = document.createElement("input");
      scoreInp.type = "text";
      scoreInp.value = cand.score || "";
      scoreInp.placeholder = "Score";
      scoreInp.style.width = "100%";
      colScore.appendChild(scoreInp);
      // flags
      const colFlags = document.createElement("div");
      colFlags.className = "col small";
      const isMayorCb = document.createElement("input");
      isMayorCb.type = "checkbox";
      isMayorCb.checked = !!cand.isMayor;
      const isElectedCb = document.createElement("input");
      isElectedCb.type = "checkbox";
      isElectedCb.checked = !!cand.isElected;
      const isReelectedCb = document.createElement("input");
      isReelectedCb.type = "checkbox";
      isReelectedCb.checked = !!cand.isReelected;
      colFlags.appendChild(document.createTextNode("Sortant "));
      colFlags.appendChild(isMayorCb);
      colFlags.appendChild(document.createTextNode(" Élu "));
      colFlags.appendChild(isElectedCb);
      colFlags.appendChild(document.createTextNode(" Réélu "));
      colFlags.appendChild(isReelectedCb);
      // color
      const colColor = document.createElement("div");
      colColor.className = "col";
      const colorInp = document.createElement("input");
      colorInp.type = "color";
      colorInp.value = cand.color || "#cccccc";
      colColor.appendChild(colorInp);

      // delete button
      const del = document.createElement("button");
      del.textContent = "Suppr";
      del.addEventListener("click", () => {
        city.candidates.splice(idx, 1);
        renderCandidateRows();
      });

      row.appendChild(colName);
      row.appendChild(colParty);
      row.appendChild(colScore);
      row.appendChild(colColor);
      row.appendChild(colFlags);
      row.appendChild(del);
      candContainer.appendChild(row);

      // attach values back on save by closure
      row._inputs = {
        nameInp,
        partyInp,
        scoreInp,
        isMayorCb,
        isElectedCb,
        isReelectedCb,
        colorInp,
      };
    });
  }

  renderCandidateRows();

  const addBtn = document.createElement("button");
  addBtn.textContent = "Ajouter un candidat";
  addBtn.addEventListener("click", () => {
    city.candidates = city.candidates || [];
    city.candidates.push({
      name: "Nouveau",
      party: "",
      color: "#cccccc",
      score: "",
    });
    renderCandidateRows();
  });
  card.appendChild(addBtn);

  // Actions
  const actions = document.createElement("div");
  actions.className = "editor-actions";
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Enregistrer";
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Annuler";
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Réinitialiser (suppr local)";
  actions.appendChild(saveBtn);
  actions.appendChild(cancelBtn);
  actions.appendChild(resetBtn);
  card.appendChild(actions);

  cancelBtn.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
  resetBtn.addEventListener("click", () => {
    if (confirm("Supprimer les modifications locales pour cette ville ?")) {
      clearCityOverride(city.name);
      alert("Modifications locales supprimées. Recharge la page si besoin.");
      document.body.removeChild(modal);
    }
  });

  saveBtn.addEventListener("click", () => {
    // collect values
    const newCity = {};
    newCity.mayor = mayorInput.value;
    newCity.mayorColor = colorInput.value;
    // collect candidates from rows
    const rows = Array.from(candContainer.querySelectorAll(".candidate-row"));
    const newCands = rows.map((r) => {
      const ins = r._inputs;
      return {
        name: ins.nameInp.value,
        party: ins.partyInp.value,
        score: ins.scoreInp.value,
        color: ins.colorInp.value,
        isMayor: !!ins.isMayorCb.checked,
        isElected: !!ins.isElectedCb.checked,
        isReelected: !!ins.isReelectedCb.checked,
      };
    });
    newCity.candidates = newCands;
    // save override and merge into runtime
    saveCityOverride(city.name, newCity);
    // apply to runtime citiesData entry
    const target = citiesData.find((c) => c.name === city.name);
    if (target) {
      target.mayor = newCity.mayor;
      target.mayorColor = newCity.mayorColor;
      target.candidates = newCity.candidates;
    }
    // refresh UI
    document.body.removeChild(modal);
    renderApp();
    window.showCityDetails(city.name);
  });

  document.body.appendChild(modal);
}

// ---------------------------------------------------------------------------------

window.showCityDetails = function (cityName) {
  const city = citiesData.find((c) => c.name === cityName);
  if (!city) return;

  document.getElementById("detail-city-name").innerText =
    "Municipales à " + city.name;

  // Affichage de l'intercommunalité (si dispo)
  const detailInterco = document.getElementById("detail-interco");
  if (detailInterco) {
    if (city.interco) {
      let intercoText = city.interco;
      const lowerInterco = intercoText.toLowerCase();
      // Ajout du type si non précisé.
      // On détecte si le nom contient déjà "communauté", "métropole" ou "agglomération".
      // Sinon, on préfixe par "Communauté d'agglomération : ".
      if (
        !lowerInterco.includes("communauté") &&
        !lowerInterco.includes("métropole") &&
        !lowerInterco.includes("agglomération")
      ) {
        intercoText = "Communauté d'agglomération : " + intercoText;
      }
      detailInterco.innerText = intercoText;
    } else {
      detailInterco.innerText = "";
    }
  }

  // Mise à jour de la couleur de la pastille "Maire sortant"
  const mayorDot = document.getElementById("detail-mayor-dot");
  if (mayorDot) {
    mayorDot.style.backgroundColor = city.mayorColor || "#ccc";
  }

  document.getElementById("detail-mayor").innerText = city.mayor;

  const candidatesList = document.getElementById("detail-candidates");
  candidatesList.innerHTML = "";
  if (city.candidates) {
    city.candidates.forEach((cand) => {
      let li = document.createElement("li");
      const scoreTxt =
        cand.score && cand.score !== ""
          ? ` — <strong style="color:var(--primary-color)">${cand.score}</strong>`
          : "";
      // Badges pour la fiche détails : sortant + élu / réélu
      const mayorBadgeParts = [];
      if (cand.isMayor) {
        mayorBadgeParts.push(
          `<span style="background-color:#eee; color:#333; padding:2px 6px; border-radius:4px; font-size:0.75em; margin-left:6px; vertical-align:middle; border:1px solid #ccc; font-weight:normal;">Maire sortant(e)</span>`,
        );
      }
      if (cand.isReelected) {
        mayorBadgeParts.push(`<span class="mayor-reelected">réélu(e)</span>`);
      } else if (cand.isElected) {
        mayorBadgeParts.push(`<span class="mayor-elected">Maire élu(e)</span>`);
      }
      const mayorBadge = mayorBadgeParts.join(" ");

      // Statut (élu / réélu) dans la fiche détails (vide par défaut)
      // On accepte soit `cand.status` (string), soit les flags `isElected` / `isReelected`
      const statusKeyFromFlags = cand.isReelected
        ? "reelected"
        : cand.isElected
          ? "elected"
          : cand.status;
      const statusBadge = renderStatusBadgeHTML(statusKeyFromFlags);
      // Si on a déjà le badge Maire élu(e)/réélu(e) via les flags, ne pas afficher le statut standard
      const showStatusBadgeInDetails = !(cand.isElected || cand.isReelected);

      const listNameDisplay = cand.listName
        ? `<br><em style="font-size:0.9em; color:#666;">"${cand.listName}"</em>`
        : "";
      const sloganDisplay = cand.slogan
        ? `<br><span style="font-size:0.85em; color:#555; font-style:italic;">"${cand.slogan}"</span>`
        : `<br><span style="font-size:0.85em; color:#aaa; font-style:italic;">Slogan de liste</span>`; // Affichage par défaut si vide

      li.innerHTML = `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:${cand.color};margin-right:8px;"></span> 
                <b>${cand.name}</b> ${mayorBadge} ${showStatusBadgeInDetails ? statusBadge : ""} <span style="font-size:0.9em; color:#555;">(${cand.party})</span>${scoreTxt}
                            ${listNameDisplay}
                            ${sloganDisplay}`; // Ajout de l'affichage du slogan
      li.style.marginBottom = "10px";
      candidatesList.appendChild(li);
    });
  }

  const pollsContainer = document.getElementById("detail-polls");
  // CORRECTION : Sécurité sur polls (tableau vide par défaut si manquant)
  const polls = city.polls || [];

  if (polls.length > 0) {
    let tableHtml = `<table><thead><tr><th>Source</th><th>Résultats clés</th></tr></thead><tbody>`;
    polls.forEach((poll) => {
      // ...existing code...
      const sourceDisplay = poll.url
        ? `<a href="${poll.url}" target="_blank" style="color: var(--primary-color); text-decoration: underline;">${poll.source}</a>`
        : poll.source;
      tableHtml += `<tr><td>${sourceDisplay}</td><td>${poll.details}</td></tr>`;
    });
    tableHtml += `</tbody></table>`;
    pollsContainer.innerHTML = tableHtml;
  } else {
    pollsContainer.innerHTML =
      "<p><i>Aucun sondage disponible pour le moment.</i></p>";
  }

  // --- NOUVEAU : Affichage des Résultats 2020 (Tour 1 & 2) ET Résultats 2026 (sans chiffres) ---
  // On vérifie si un conteneur pour les résultats existe déjà
  let resultsWrapper = document.getElementById("results-wrapper");
  if (!resultsWrapper) {
    const pollsNode = document.getElementById("detail-polls");
    if (pollsNode) {
      const parentCard = pollsNode.closest(".card");
      if (parentCard && parentCard.parentNode) {
        resultsWrapper = document.createElement("div");
        resultsWrapper.id = "results-wrapper";
        resultsWrapper.className = "card";
        parentCard.parentNode.appendChild(resultsWrapper);
      }
    }
  }

  if (resultsWrapper) {
    // helper : génère une table HTML simple (sans chiffres si score vide)
    const makeTable = (title, data) => {
      if (!data || data.length === 0)
        return `<h4>${title}</h4><p><i>À déterminer</i></p>`;
      let h = `<h4 style="margin:8px 0 5px 0;">${title}</h4><table style="font-size:0.9em; margin-bottom:12px; width:100%;"><thead><tr><th>Candidat</th><th>Score</th></tr></thead><tbody>`;
      data.forEach((res) => {
        const scoreDisplay = res.score && res.score !== "" ? res.score : "—";
        const partyDisplay = res.party
          ? ` <span style="font-size:0.85em;color:#666">(${res.party})</span>`
          : "";
        h += `<tr><td>${res.candidate}${partyDisplay}</td><td style="font-weight:bold">${scoreDisplay}</td></tr>`;
      });
      h += `</tbody></table>`;
      return h;
    };

    let resHtml = "";

    // RÉSULTATS 2020 (si présents)
    if (city.results2020) {
      resHtml += `<h3>Résultats 2020</h3>`;
      resHtml += `<div style="display:flex; gap:20px; flex-wrap:wrap;">`;
      if (city.results2020.tour1) {
        resHtml +=
          `<div style="flex:1; min-width:250px;">` +
          makeTable("1er Tour", city.results2020.tour1) +
          `</div>`;
      }
      if (city.results2020.tour2 && city.results2020.tour2.length > 0) {
        resHtml +=
          `<div style="flex:1; min-width:250px;">` +
          makeTable("2nd Tour", city.results2020.tour2) +
          `</div>`;
      }
      resHtml += `</div>`;
    }

    // RÉSULTATS 2026 (générés si absent) - sans chiffres
    // Si la propriété existe déjà, on l'utilise ; sinon on génère à partir des candidats déclarés
    let results2026 = city.results2026;
    if (!results2026) {
      const cands = city.candidates || [];
      const tour1 = cands.map((c) => ({
        candidate: c.name,
        party: c.party || "",
        score: "",
      }));
      // Par défaut on laisse le 2nd tour à vide (inconnu) — l'UI affichera "À déterminer"
      const tour2 = [];
      results2026 = { tour1, tour2 };
    }

    resHtml += `<h3>Résultats 2026 (provisoires, sans chiffres)</h3>`;
    resHtml += `<div style="display:flex; gap:20px; flex-wrap:wrap;">`;
    resHtml +=
      `<div style="flex:1; min-width:250px;">` +
      makeTable("1er Tour — Candidats", results2026.tour1) +
      `</div>`;
    resHtml +=
      `<div style="flex:1; min-width:250px;">` +
      makeTable("2nd Tour — À déterminer", results2026.tour2) +
      `</div>`;
    resHtml += `</div>`;

    resultsWrapper.innerHTML = resHtml;
  }

  const section = document.getElementById("details-section");
  // section.classList.add("visible"); // Suppression de l'ancien système

  // NOUVEAU SYSTÈME : On change complètement de section
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));

  if (section) section.classList.add("active");

  // On remonte en haut de page
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function closeDetails() {
  // Masquer la section détails
  document.getElementById("details-section").classList.remove("active");

  // Réafficher la section carte
  const mapSection = document.getElementById("map-section");
  mapSection.classList.add("active");

  // Réactiver le bouton "Carte" dans le menu
  const mapBtn = document.querySelector('.nav-btn[data-section="map-section"]');
  if (mapBtn) mapBtn.classList.add("active");
}

// --- FONCTIONS AJOUTÉES POUR LES SECTIONS VILLES / SONDAGES ---
function buildVillesTable(data) {
  const container = document.getElementById("villes-list");
  if (!container) return;

  let html = `<table><thead><tr><th>Ville</th><th>Population</th><th>Maire</th><th>Candidats</th><th>Sondages</th></tr></thead><tbody>`;
  data.forEach((city) => {
    // CORRECTION : Sécurité si polls est undefined
    const polls = city.polls || [];
    let sondagesHtml =
      polls.length > 0 ? polls.map((p) => `${p.source}`).join("<br>") : "—";

    const candidates = city.candidates || [];
    const candidatsStr = candidates.map((c) => c.name).join(", ");

    html += `<tr>
            <td><a href="#" onclick="showCityDetails('${city.name}'); return false;" style="color:inherit; font-weight:bold; text-decoration:none">${city.name}</a></td>
            <td>${city.population.toLocaleString()}</td>
            <td>${city.mayor}</td>
            <td>${candidatsStr}</td>
            <td>${sondagesHtml}</td>
        </tr>`;
  });
  html += `</tbody></table>`;
  container.innerHTML = html;
}

(function setupVillesSearch() {
  const input = document.getElementById("villes-search");
  if (!input) return;

  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      buildVillesTable(citiesData);
      return;
    }
    const filtered = citiesData.filter((c) => c.name.toLowerCase().includes(q));
    buildVillesTable(filtered);
  });

  // Press Enter to open the first matching city details
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const q = input.value.trim().toLowerCase();
      const match = citiesData.find((c) => c.name.toLowerCase().includes(q));
      if (match) {
        e.preventDefault();
        window.showCityDetails(match.name);
      }
    }
  });
})();

function buildSondagesList(data) {
  const container = document.getElementById("sondages-list");
  if (!container) return;

  const allPolls = [];
  data.forEach((city) => {
    // CORRECTION : Sécurité si polls est undefined
    const polls = city.polls || [];
    polls.forEach((p) =>
      allPolls.push({
        city: city.name,
        source: p.source,
        details: p.details,
        url: p.url,
      }),
    );
  });

  if (allPolls.length === 0) {
    container.innerHTML =
      "<p><i>Aucun sondage répertorié pour le moment.</i></p>";
    return;
  }

  let html = `<ul class="poll-list">`;
  allPolls.forEach((p) => {
    const sourceLink = p.url
      ? `<a href="${p.url}" target="_blank">${p.source}</a>`
      : p.source;
    html += `<li><strong>${sourceLink}</strong> — ${p.city} : ${p.details}</li>`;
  });
  html += `</ul>`;
  container.innerHTML = html;
}

// --- AJOUT : mapping ville -> page Wikipédia (fr) ---
// Remplacez/complétez les titres si vous avez des pages exactes différentes.
const WIKI_PAGES = {
  Paris: "Élections_municipales_de_2026_à_Paris",
  Marseille: "Élections_municipales_de_2026_à_Marseille",
  Lyon: "Élections_municipales_de_2026_à_Lyon",
  Nice: "Élections_municipales_de_2026_à_Nice",
  Bordeaux: "Élections_municipales_de_2026_à_Bordeaux",
  Toulouse: "Élections_municipales_de_2026_à_Toulouse",
  Nantes: "Élections_municipales_de_2026_à_Nantes",
  Montpellier: "Élections_municipales_de_2026_à_Montpellier",
  Strasbourg: "Élections_municipales_de_2026_à_Strasbourg",
  Lille: "Élections_municipales_de_2026_à_Lille",
  "Le Havre": "Élections_municipales_de_2026_au_Havre",
  Limoges: "Élections_municipales_de_2026_à_Limoges",
  Niort: "Élections_municipales_de_2026_à_Niort",
  Reims: "Élections_municipales_de_2026_à_Reims",
  Rennes: "Élections_municipales_de_2026_à_Rennes",
  Grenoble: "Élections_municipales_de_2026_à_Grenoble",
  Dijon: "Élections_municipales_de_2026_à_Dijon",
  Angers: "Élections_municipales_de_2026_à_Angers",
  Poitiers: "Élections_municipales_de_2026_à_Poitiers",
  Brest: "Élections_municipales_de_2026_à_Brest",
  Perpignan: "Élections_municipales_de_2026_à_Perpignan",
  Pau: "Élections_municipales_de_2026_à_Pau",
  Béziers: "Élections_municipales_de_2026_à_Béziers",
  Orléans: "Élections_municipales_de_2026_à_Orléans",
  Tours: "Élections_municipales_de_2026_à_Tours",
  Besançon: "Élections_municipales_de_2026_à_Besançon",
  "Clermont-Ferrand": "Élections_municipales_de_2026_à_Clermont-Ferrand",
  "Aix-en-Provence": "Élections_municipales_de_2026_à_Aix-en-Provence",
  "Le Mans": "Élections_municipales_de_2026_au_Mans",
  Amiens: "Élections_municipales_de_2026_à_Amiens",
  Annecy: "Élections_municipales_de_2026_à_Annecy",
  Nîmes: "Élections_municipales_de_2026_à_Nîmes",
  Villeurbanne: "Élections_municipales_de_2026_à_Villeurbanne",
  "Boulogne-Billancourt":
    "Élections_municipales_de_2026_à_Boulogne-Billancourt",
  "Saint-Denis":
    "Élections_municipales_de_2026_à_Saint-Denis_(Seine-Saint-Denis)",
  Argenteuil: "Élections_municipales_de_2026_à_Argenteuil",
  Rouen: "Élections_municipales_de_2026_à_Rouen",
  Montreuil: "Élections_municipales_de_2026_à_Montreuil_(Seine-Saint-Denis)",
  Caen: "Élections_municipales_de_2026_à_Caen",
  Metz: "Élections_municipales_de_2026_à_Metz",
  Nancy: "Élections_municipales_de_2026_à_Nancy",
  Mulhouse: "Élections_municipales_de_2026_à_Mulhouse",
  "La Rochelle": "Élections_municipales_de_2026_à_La_Rochelle",
};

// --- AJOUT : fonction utilitaire pour chercher/parse la section candidat d'une page Wikipédia ---
async function fetchCandidatesFromWikiForPage(pageTitle) {
  try {
    const apiUrl =
      "https://fr.wikipedia.org/w/api.php?action=parse&page=" +
      encodeURIComponent(pageTitle) +
      "&prop=text&format=json&origin=*";
    const res = await fetch(apiUrl);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.parse || !data.parse.text) return null;
    const html = data.parse.text["*"];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Cherche les en-têtes contenant "Candidat", "Candidats", "Candidature"
    const headings = Array.from(doc.querySelectorAll("h2, h3, h4")).filter(
      (h) => /candidat/i.test(h.textContent),
    );
    let container = null;
    if (headings.length > 0) {
      // prend le premier bloc utile après le header
      const h = headings[0];
      let sib = h.nextElementSibling;
      while (sib) {
        // s'il s'agit d'une liste <ul> ou d'un tableau <table>, on l'utilise
        if (sib.tagName === "UL" || sib.tagName === "OL") {
          container = sib;
          break;
        }
        if (sib.tagName === "TABLE") {
          container = sib;
          break;
        }
        // parfois section est dans des <div>
        if (
          sib.querySelector &&
          (sib.querySelector("ul") || sib.querySelector("table"))
        ) {
          container = sib.querySelector("ul") || sib.querySelector("table");
          break;
        }
        // si on rencontre un autre header on stoppe
        if (/H[2-4]/i.test(sib.tagName)) break;
        sib = sib.nextElementSibling;
      }
    }

    // Si pas trouvé, essaye d'extraire premières listes présentes
    if (!container) {
      container = doc.querySelector("ul") || doc.querySelector("table");
    }
    if (!container) return null;

    const candidates = [];
    if (container.tagName === "UL" || container.tagName === "OL") {
      Array.from(container.querySelectorAll("li")).forEach((li) => {
        const text = li.textContent.trim();
        // tenter d'extraire "Nom (Parti)" ou "Nom — Parti"
        const m = text.match(/^(.+?)(?:\s*\(?[-–—]?\s*([\w\s\/\.\-&]+)\)?)?$/);
        const raw = m ? m[1].trim() : text;
        let party = "";
        // chercher un "(PS)" dans le texte
        const partyMatch = text.match(/\(([^)]+)\)/);
        if (partyMatch) party = partyMatch[1].trim();
        candidates.push({ name: raw, party: party, color: "", score: "" });
      });
    } else if (container.tagName === "TABLE") {
      // parcourir lignes du tableau (cherche colonnes contenant noms/partis)
      Array.from(container.querySelectorAll("tr")).forEach((tr, idx) => {
        if (idx === 0) return; // skip header possible
        const cells = tr.querySelectorAll("td, th");
        if (cells.length === 0) return;
        const name = cells[0].textContent.trim();
        let party = "";
        if (cells.length > 1) party = cells[1].textContent.trim();
        candidates.push({ name: name, party: party, color: "", score: "" });
      });
    }
    return candidates.length ? candidates : null;
  } catch (err) {
    console.warn("Wiki fetch error for", pageTitle, err);
    return null;
  }
}

// --- AJOUT : fonction principale pour mettre à jour citiesData depuis Wikipédia (mapping WIKI_PAGES) ---
async function updateCitiesCandidatesFromWikipedia() {
  for (const city of citiesData) {
    const page = WIKI_PAGES[city.name];
    if (!page) continue;
    const parsed = await fetchCandidatesFromWikiForPage(page);
    if (parsed && parsed.length > 0) {
      // Remplace sans inventer de scores/colors
      city.candidates = parsed;
      // ajoute source de provenance si on veut afficher ensuite
      city.source_candidates = `https://fr.wikipedia.org/wiki/${encodeURIComponent(page)}`;
    }
  }
}

// --- ÉTIQUETTES / STATUTS CANDIDAT (centralisées) ---
const CANDIDATE_STATUS = {
  // clef : { label affiché, classe CSS existante, icône }
  elected: { label: "Élu", cls: "status-elected", icon: "✓" },
  reelected: { label: "Réélu", cls: "status-reelected", icon: "⟳" },
};

// Retourne le HTML du badge à insérer (vide si pas de statut)
function renderStatusBadgeHTML(statusKey) {
  if (!statusKey) return "";
  const s = CANDIDATE_STATUS[statusKey];
  if (!s) return "";
  return `<span class="status-badge ${s.cls}"><span class="sb-icon">${s.icon}</span>${s.label}</span>`;
}

/* UTILITAIRES GLOBAUX pour définir / effacer le statut d'un candidat
   statusKey attendu : "elected" ou "reelected" (ou falsy pour effacer)
   Exemples console:
     setCandidateStatus("Paris","Emmanuel Grégoire","elected");
     clearCandidateStatus("Paris","Emmanuel Grégoire");
*/
window.setCandidateStatus = function (cityName, candidateName, statusKey) {
  const city = citiesData.find((c) => c.name === cityName);
  if (!city || !city.candidates) return false;
  const cand = city.candidates.find((cc) => cc.name === candidateName);
  if (!cand) return false;
  if (!statusKey) delete cand.status;
  else cand.status = statusKey;
  // rafraîchir UI si nécessaire
  try {
    buildVillesTable(citiesData);
    buildSondagesList(citiesData);
    const detailName = document.getElementById("detail-city-name");
    if (detailName && detailName.innerText.includes(cityName))
      showCityDetails(cityName);
  } catch (e) {}
  return true;
};

window.clearCandidateStatus = function (cityName, candidateName) {
  return window.setCandidateStatus(cityName, candidateName, "");
};
