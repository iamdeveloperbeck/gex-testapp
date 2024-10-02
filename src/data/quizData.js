const quizData = [
    {
        id: 1,
        question: "Yangi tugilgan chakalokni Apgar shkalasi bo'yicha baholash belgilarini ko'rsating?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "asfiksiya darajasi;", 
            "nafas olish;", 
            "chaqaloq harakatlari faolligi;", 
            "mekoniy ajralishi;"
        ],
        correctAnswer: "nafas olish;",
    },
    {
        id: 2,
        question: "Pielonefritni rivojlanishida infeksiya qanday tarqaladi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "endogen yo'l;", 
            "uretra orqali yuqoriga chiquvchi yo'l;", 
            "limfogen;", 
            "ekzogen;"
        ],
        correctAnswer: "uretra orqali yuqoriga chiquvchi yo'l;",
    },
    {
        id: 3,
        question: "Pielonefrit bilan tug'ruqni olib borish?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "tabiy tug'ruq yo'llari orqali;", 
            "kesar kesish orqali;", 
            "vakuum bilan;", 
            "akusherlik kisqich bilan;"
        ],
        correctAnswer: "tabiy tug'ruq yo'llari orqali;",
    },
    {
        id: 4,
        question: "DVS (DKI) sindromida qanaqa testlar qo'llaniladi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "glyukoza testi;", 
            "geparinli testi;", 
            "krovat oldidagi test;", 
            "magniy sulfat testi;"
        ],
        correctAnswer: "krovat oldidagi test;",
    },
    {
        id: 5,
        question: "Eklampsiyada birinchi yordam ko'rsatish nimalardan iborat?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "Tutqanoqqa qarshi vosita berish (magniy sulfat);", 
            "Sedativ dorilarni qo'llash (valeriana pustirnik trioksazin);", 
            "Krovat oyoq tomonini ko'tarish;", 
            "Bemorni ushlab turish;"
        ],
        correctAnswer: "Tutqanoqqa qarshi vosita berish (magniy sulfat);",
    },
    {
        id: 6,
        question: "Erta chilla davrida qon ketishining sababini ayting?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "kam suvlik;", 
            "ko'p suvlik;", 
            "bachadon atoniyasi;", 
            "ozg'inlik;"
        ],
        correctAnswer: "bachadon atoniyasi;",
    },
    {
        id: 7,
        question: "Erta toksikozga qanday belgi xos?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "vazining kamayishi;", 
            "semizlik;", 
            "og'iz qurushi;", 
            "chanqash;"
        ],
        correctAnswer: "vazining kamayishi;",
    },
    {
        id: 8,
        question: "Og'ir preeklampsiyaga qanday klinik belgi hos?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "so'lak oqish;", 
            "AQB 110 mm s.u. va undan oshishi;", 
            "ozish;", 
            "semirish;"
        ],
        correctAnswer: "AQB 110 mm s.u. va undan oshishi;",
    },
    {
        id: 9,
        question: "Og'ir preeklampsiyada tug'ruq taktikasini ko'rsating?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "Tug'ruq tutqanoqdan keyin shu zahotida tugatilishi kerak;", 
            "Tug'rukni homila yetilishigacha qoldirish kerak;", 
            "Ogir preeklampsiya simptomlarida tugruq 24 soat ichida tugatilishi kerak;", 
            "Kutish taktikasi qo'llaniladi;"
        ],
        correctAnswer: "Ogir preeklampsiya simptomlarida tugruq 24 soat ichida tugatilishi kerak;",
    },
    {
        id: 10,
        question: "Ogir preeklampsiya va eklampsiyada kesar kesish operatsiyasiga ko'rsatma?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "Akusherlik asoratlar bilan keluvchi og'ir preeklampsiya va eklampsiyada;", 
            "Proteinuriya;", 
            "Gematuriya;", 
            "Shish;"
        ],
        correctAnswer: "Akusherlik asoratlar bilan keluvchi og'ir preeklampsiya va eklampsiyada;",
    },
    {
        id: 11,
        question: "Bachadon miomasining qanday bitta asosrati kuzatiladi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "gipermenoreya;", 
            "miomatoz tuguncha nekrozi;", 
            "polimenoreya;", 
            "gipomenoreya;"
        ],
        correctAnswer: "miomatoz tuguncha nekrozi;",
    },
    {
        id: 12,
        question: "Maxsus akusher-ginekolog tekshirishlarning bitta usulini ko'rsating?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "homila oldi suvini tekshirish;", 
            "perkussiya;", 
            "taxometriya;", 
            "homila orka suvini tekshirish;"
        ],
        correctAnswer: "taxometriya;",
    },
    {
        id: 13,
        question: "Organizmning gormonal to'yingganligini aniqlash usullarini ko'rsating?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "Qorachiq fenomeni aniqlash;", 
            "Laparoskopiya;", 
            "Ultratovush;", 
            "Laparotomiya;"
        ],
        correctAnswer: "Qorachiq fenomeni aniqlash;",
    },
    {
        id: 14,
        question: "Qorachiq fenomeni aniqlash;",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "Sarkoma;", 
            "Psevdomutsinoz kistomasi;", 
            "Horionepitelioma;", 
            "Bachadon raki;"
        ],
        correctAnswer: "Psevdomutsinoz kistomasi;",
    },
    {
        id: 15,
        question: "Ovulyator qon ketish bu?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "bir fazali qon ketish;", 
            "ikki fazali bachadondan qon ketish;", 
            "uch fazali qon ketish;", 
            "turt fazali qon ketish;"
        ],
        correctAnswer: "ikki fazali bachadondan qo‘n ketish;",
    },
    {
        id: 16,
        question: "Anovulyator bachadondan qon ketish bu?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "bir va ikki fazali qon ketish;", 
            "bir fazali qon ketish;", 
            "ovulyatsiyasiz;", 
            "ovulyatsiyali;"
        ],
        correctAnswer: "bir fazali qon ketish;",
    },
    {
        id: 17,
        question: "Yuvenil qon ketish ko'proq qaysi yoshda uchraydi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "20 – 21;", 
            "14 – 15;", 
            "13 – 14;", 
            "17 – 19;"
        ],
        correctAnswer: "14 – 15;",
    },
    {
        id: 18,
        question: "Bachadondan tashqari homiladorlikning klinikasini himoya qilish?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "bachadonning kattalashishi homiladorlik muddatiga to'g'ri kelmaydi;", 
            "bachadon naylarining birida qattiq o'smasimon konsistentsiya paypaslanadi;", 
            "terining quruqligi;", 
            "terining namligi;"
        ],
        correctAnswer: "bachadonning kattalashishi homiladorlik muddatiga to'g'ri kelmaydi;",
    },
    {
        id: 19,
        question: "Qinning eng katta bezining yallig'lanishi bu?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "bartolinit;", 
            "vulvit;", 
            "bartolin bezi absessi;", 
            "kolpit;"
        ],
        correctAnswer: "bartolinit;",
    },
    {
        id: 20,
        question: "Laktatsion amenoreya amenoreyaning qaysi formasiga kiradi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "patologik;", 
            "fiziologik;", 
            "tug'ruqdan keyin;", 
            "tug'ruqdan oldingi;"
        ],
        correctAnswer: "fiziologik;",
    },
    {
        id: 21,
        question: "Bachadon naylarida seroz va yiring suyuqlik yig'ilishi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "gidrosalpinks;", 
            "piosalpinks;", 
            "xolosalpinks;", 
            "giposalpinks;"
        ],
        correctAnswer: "gidrosalpinks;",
    },
    {
        id: 22,
        question: "Hayz tsiklning kechishida qaysi gormon ishtirok etadi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "estrogen;", 
            "TTG;", 
            "FSG, LG, LTG;", 
            "progesteron;"
        ],
        correctAnswer: "FSG, LG, LTG;",
    },
    {
        id: 23,
        question: "Oilani rejalashtirish uchun qo'llanadigan kontratseptsiyaning qaysi usuli anemiya rivojlantirish xavfini kamaytiradi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "KOKlar;", 
            "spermitsidlar;", 
            "BIVlar;", 
            "IJK;"
        ],
        correctAnswer: "KOKlar;",
    },
    {
        id: 24,
        question: "SPTga kiradi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "eksklyuton, mikronor, ovret;", 
            "diane-35, mikronor, logest;", 
            "mikronor, regulon, eksklyuton;", 
            "hamma javob to'g'ri;"
        ],
        correctAnswer: "eksklyuton, mikronor, ovret;",
    },
    {
        id: 25,
        question: "SPIK qachon ishlatsa bo'ladi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "agar tug'ruqdan so'ng LAU qo'llasa, 6 haftadan so'ng;", 
            "xoxlagan vaqt, agar homiladorlik bo'lmasa, abortdan so'ng;", 
            "abortdan so'ng 2 hafta o'tgach;", 
            "abortdan so'ng 6 hafta o'tgach;"
        ],
        correctAnswer: "xoxlagan vaqt, agar homiladorlik bo'lmasa, abortdan so'ng;",
    },
    {
        id: 26,
        question: "Copper T 380A BIVni qo'llashning maksimal muddatini ko'rsating?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "7 yil;", 
            "10 yil;", 
            "3 yil;", 
            "6 yil;"
        ],
        correctAnswer: "10 yil;",
    },
    {
        id: 27,
        question: "Tservikal shilliqning 5-6 smgacha cho'zilish simptomi normal xayz tsiklining qaysi kunlariga to'g'ri keladi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "xayz tsiklning 1 fazasida;", 
            "xazin siklining 13-15 kuniga;", 
            "xazin siklining 6-5 kuniga;", 
            "xazin siklining 14-12 kuniga;"
        ],
        correctAnswer: "xayz tsiklning 1 fazasida;",
    },
    {
        id: 28,
        question: "Bazal harorat testi asoslangan?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "hammasi to'g'ri;", 
            "progesteronning gipotalamusni termoregulyatsiya markaziga ta'siri;", 
            "progestronlarning hipotalamusga ta'siri;", 
            "hammasi to'g'ri;"
        ],
        correctAnswer: "progesteronning gipotalamusni termoregulyatsiya markaziga ta'siri;",
    },
    {
        id: 29,
        question: "Hayz tsiklning 24 kuni tservikal shiliqning 10-12 smgacha cho'zilishi nimani ko'rsatadi?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "1 chi fazaning qisqarishi;", 
            "1 chi fazaning uzayishi;", 
            "2 chi fazaning qisqarishi;", 
            "anovulyator tsikl;"
        ],
        correctAnswer: "anovulyator tsikl;",
    },
    {
        id: 30,
        question: "Surunkali gipertenziyani belgilarini ayting?",
        category: "DPMlarda akusherlik va ginekologik yordam ko'rsatish",
        choices: [
            "Diastolik bosim 90 mm s.u va yuqori homiladorlik birinchi 20 haftasida;", 
            "Yurak soxasida og'riq;", 
            "Vaznni yo'qotishi;", 
            "Qon bosimini homiladorlik bilan oshishi;"
        ],
        correctAnswer: "Diastolik bosim 90 mm s.u va yuqori homiladorlik birinchi 20 haftasida;",
    },
];

export default quizData;