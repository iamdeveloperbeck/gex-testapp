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
    {
        id: 31,
        question: "Psixiatriyada bo'limida boshqa bo'limlardan farqli qanday cheagaralanishlar mavjud?",
        category: "Psixologiya",
        choices: [
            "Jismoniy qisilish, psixologik qisilish, psixiatriyada parvarish", 
            "Psixologik qisilish, psixiatriyada parvarish", 
            "Ilmiy qisilish, psixologik qisilish, psixiatriyada parvarish", 
            "Jismoniy qisilish, psixologik qisilish, ilmiy qisilish"
        ],
        correctAnswer: "Jismoniy qisilish, psixologik qisilish, psixiatriyada parvarish",
    },
    {
        id: 32,
        question: "Shifokorning bemorga munosabatlarining ilmga asoslangan tizimi:",
        category: "Psixologiya",
        choices: [
            "Terapiya", 
            "Psixoterapiya", 
            "Fizioterpiya", 
            "Autogemoterapiya"
        ],
        correctAnswer: "Psixoterapiya",
    },
    {
        id: 33,
        question: "Uyg'oqlik bilan uyquga o'tish orasidagi chala uyqu holati:",
        category: "Psixologiya",
        choices: [
            "Psixoterapiya", 
            "Fizioterapiya", 
            "Futogemoterapiya", 
            "Giptonik holat"
        ],
        correctAnswer: "Giptonik holat",
    },
    {
        id: 34,
        question: "Muhit yoki mikromuhit deb nimaga va kimlarga aytiladi?",
        category: "Psixologiya",
        choices: [
            "Oilasi, yaqin do'stlari, ishxonadagi o'rtoqlari, kasalxonada esa boshqa kasallar", 
            "Bemorni davolashda bevosita ishtirok etadigan shifokorlar, tibbiyot hamshiralariga", 
            "Bemorni turmushda va davo muassasasida bo'lgan paytida atrofini o'rab olgan vaziyatga", 
            "Hamma javoblar to'g'ri"
        ],
        correctAnswer: "Bemorni turmushda va davo muassasasida bo'lgan paytida atrofini o'rab olgan vaziyatga",
    },
    {
        id: 35,
        question: "Insonlardagi psixika quyidagi ruhiy hodisa sifatida namoyon bo'ladi:?",
        category: "Psixologiya",
        choices: [
            "Shaxsning ruhiy xususiyatlari", 
            "Psixik holatlar", 
            "Psixik jarayonlar", 
            "Hamma javoblar to'g'ri"
        ],
        correctAnswer: "Hamma javoblar to'g'ri",
    },
    {
        id: 36,
        question: "Tibbiy psixologiya quyidagi mavzularni o'rganadi:",
        category: "Psixologiya",
        choices: [
            "Bemor shaxsini, tibbiyot xodimlarining shaxsini", 
            "Tibbiyot xodimlari bilan bemorlar o'rtasidagi munosabatalarni", 
            "Tibbiyot xodimlarining o'zaro munosabatlarini", 
            "Hamma javoblar to'g'ri"
        ],
        correctAnswer: "Hamma javoblar to'g'ri",
    },
    {
        id: 37,
        question: "Psixologiya fanining 'ota'sini aniqlang?",
        category: "Psixologiya",
        choices: [
            "Abu Ali ibn Sino", 
            "Aristotel", 
            "G. Gekkel", 
            "Lukretsiy"
        ],
        correctAnswer: "Aristotel",
    },
    {
        id: 38,
        question: "Dispanserda qanday davolash usullaridan keng foydalaniladi?",
        category: "Psixologiya",
        choices: [
            "Dori-darmon bilan davolash", 
            "Psixoterapiya bilan davolash usullari", 
            "Fizioterapiya va mehant bilan davolash usullari", 
            "Hamma javoblar to'g'ri"
        ],
        correctAnswer: "Hamma javoblar to'g'ri",
    },
    {
        id: 39,
        question: "Psixiatrik yordamining hammasi kasalxoandan tashqarida ko'rsatilayotgan joylarning noto'g'risini ko'rsating",
        category: "Psixologiya",
        choices: [
            "Psixonevrologiya dispanserlar", 
            "Psixiatriya, shifoxonalarining dispanser bo'limlari", 
            "Umumsomatik shifoxonalar (poliklinika)", 
            "Poliklinikadagi okulistlarning xonalari"
        ],
        correctAnswer: "Poliklinikadagi okulistlarning xonalari",
    },
    {
        id: 40,
        question: "O'zbekiston Respublikasining 'Psixiatriya yordami to'g'risidagi' qonuni qaysi yili chiqarilgan?",
        category: "Psixologiya",
        choices: [
            "2002", 
            "2000", 
            "1998", 
            "1996"
        ],
        correctAnswer: "2000",
    },
    {
        id: 41,
        question: "Tibbiy psixologiya bemor psixikasini chuqurroq o'rganish maqsadida quyidagilardan foydalanadi:",
        category: "Psixologiya",
        choices: [
            "Kuzatish, eksperiment", 
            "Suhbat, tarjimayi holini o'rganish", 
            "Test tizimlari", 
            "Hamma javoblar to'g'ri"
        ],
        correctAnswer: "Hamma javoblar to'g'ri",
    },
    {
        id: 42,
        question: "Umurtqa pog'onasi ichidagi o'simtalar va boshqa o'zgarishlarni kontrast rentgen usullari orqali tekshirish:",
        category: "Psixologiya",
        choices: [
            "Kraniogramma", 
            "Miyelografiya", 
            "Kompyuter tomografiya", 
            "Neyrosonografiya"
        ],
        correctAnswer: "Miyelografiya",
    },
    {
        id: 43,
        question: "Kristall va gazli detektorli skanner qurilmasi yordamida miyadagi kasallangan joyni o'rganish usuli:",
        category: "Psixologiya",
        choices: [
            "Kraniogramma", 
            "Miyelografiya", 
            "Kompyuter tomografiyasi", 
            "Neyrosonografiya"
        ],
        correctAnswer: "Kompyuter tomografiyasi",
    },
    {
        id: 44,
        question: "Kompyuter tomografiya usuli yordamida qanday ma'lumotlarni aniqlash mumkin?",
        category: "Psixologiya",
        choices: [
            "Tug'ma qiyshayishlar, o'smali jarayonlar", 
            "Qon quyulish o'choqlari, yiringli jarayonlar", 
            "Miya qorinchalarining kengayishi, gidrotsefaliya haqida", 
            "Hamma javoblar to'g'ri"
        ],
        correctAnswer: "Hamma javoblar to'g'ri",
    },
    {
        id: 45,
        question: "Gallyusinatsiya deb nimaga aytiladi?",
        category: "Psixologiya",
        choices: [
            "Barchada real mavjud bo'lmagan obyektlarni idrok etish", 
            "Ruhiy bemorlarda real mavjud bo'lmagan obyektlarni idrok etish", 
            "Barchada real mavjud obyektni noto'g'ri idrok etish", 
            "Ruhiy bemorlarda o'z shaxsini idrok etishning buzulishi"
        ],
        correctAnswer: "Barchada real mavjud bo'lmagan obyektlarni idrok etish",
    },
    {
        id: 46,
        question: "Paramneziya - bu...",
        category: "Psixologiya",
        choices: [
            "Xotiraning yo'qolishi", 
            "Ongli ruhiy faollik", 
            "Soxta xotira", 
            "Hayotga moslashmaganlik"
        ],
        correctAnswer: "Soxta xotira",
    },
    {
        id: 47,
        question: "Psixosensor buzilishlariga nimalar kiradi?",
        category: "Psixologiya",
        choices: [
            "Tana tuzilishining buzilishi, derealizatsiya, illuziyalar", 
            "Psevdogallyutsinatsiyalar, illuziyalar", 
            "Metamorfopsiyalar, depersonalizatsiya, gallyusinatsiyalar", 
            "Tana tuzilishining buzilishi, derealizatsiya, metamorfopsiyalar, depersonalizatsiya"
        ],
        correctAnswer: "Psevdogallyutsinatsiyalar, illuziyalar",
    },
    {
        id: 48,
        question: "Idrok bu - ?",
        category: "Psixologiya",
        choices: [
            "Predmetning sezgi a'zolarimizga ta'sir etishi orqali uning biron bir xususiyati ongimizga namoyon bo'lishi", 
            "Predmet yoki hodisaning sezgi a'zolarimizga ta'sir qilishi orqali barcha jihatlari bilan ongimizda to'liq namoyon bo'lishi", 
            "Subyektiv ruhiy faoliyatining hozirgi vaqtda qandaydir real yoki ideal obyektga yo'naltirikganligi", 
            "Ilgargi tajribani tashkil etish va saqlash jarayoni"
        ],
        correctAnswer: "Predmet yoki hodisaning sezgi a'zolarimizga ta'sir qilishi orqali barcha jihatlari bilan ongimizda to'liq namoyon bo'lishi",
    },
    {
        id: 49,
        question: "Insoning ruhiy faoliyati nechiga bo'linadi va uning ketma-ketligini toping?",
        category: "Psixologiya",
        choices: [
            "5 ta - diqqat, xotira, intellekt, iroda, ong", 
            "9 ta - ong, emotsiya, iroda, intellekt, xotira, tafakkur, idrok, diqqat, faollik", 
            "8 ta - idrok, diqqat, xotira, tafakkur, intellekt, emotsiya, iroda, ong", 
            "7 ta - idrok, xotira, diqqat tafakkur, emotsiya, ong, intellekt"
        ],
        correctAnswer: "9 ta - ong, emotsiya, iroda, intellekt, xotira, tafakkur, idrok, diqqat, faollik",
    },
    {
        id: 50,
        question: "Debillik, Imbesil, Idiotiya ruhiy faoliyatning qaysi qismi buzilishiga kiradi?",
        category: "Psixologiya",
        choices: [
            "Tafakkur", 
            "Ong", 
            "Intellekt", 
            "Idrok"
        ],
        correctAnswer: "Tafakkur",
    },
    {
        id: 51,
        question: "O'z shaxsini, mo'ljalini saqlagan holda joy, vaqt va atrof sharoitdagi mo'ljalning buzilishi?",
        category: "Psixologiya",
        choices: [
            "Delirioz holati", 
            "Ambulator automatizm hoalri", 
            "Depersonalizatsiya holati", 
            "Somnolensiya"
        ],
        correctAnswer: "Delirioz holati",
    },
    {
        id: 52,
        question: "Bir lahzada paydo bo'lib, odam ba'zan buning uchun nobop sharoitda odatlanib qolgan qator harakatlarni qilish:",
        category: "Psixologiya",
        choices: [
            "Delirioz holati", 
            "Ambulator avtomatizm holati", 
            "Depersonalizatsiya holati", 
            "Somnolensiya"
        ],
        correctAnswer: "Ambulator avtomatizm holati",
    },
    {
        id: 53,
        question: "Bu holatda bemor kimligini biladi, ammo o'zini o'zgarganday sezadi, bu ham hamma vaqt bo'lavermaydi va nimasi o'zgarganini aniq aytolmasligi:",
        category: "Psixologiya",
        choices: [
            "Delirioz holati", 
            "Ambulator avtomatizm holati", 
            "Depersonalizatsiya holati", 
            "Somnolensiya"
        ],
        correctAnswer: "Depersonalizatsiya holati",
    },
    {
        id: 54,
        question: "Bemorlar atrofidagi ta'sirotlarga kuchsiz reaksiya ko'rsatishi:",
        category: "Psixologiya",
        choices: [
            "Ambulator avtomatizm holati", 
            "Somnolensiya", 
            "Depersonalizatsiya holati", 
            "Karaxtlik holati"
        ],
        correctAnswer: "Karaxtlik holati",
    },
    {
        id: 55,
        question: "Es-hush aynishining juda borib turgan darajasi:",
        category: "Psixologiya",
        choices: [
            "Depersonalizatsiya holati", 
            "Somnolensiya", 
            "Karaxtlik holati", 
            "Komatoz holati"
        ],
        correctAnswer: "Komatoz holati",
    },
    {
        id: 56,
        question: "Bulut ma'nosini bildiradigan holat?",
        category: "Psixologiya",
        choices: [
            "Somnolensiya", 
            "Karaxtlik holati", 
            "Komatoz holati", 
            "Obnubilyatsiya"
        ],
        correctAnswer: "Obnubilyatsiya",
    },
    {
        id: 57,
        question: "Uyquchanlik ma'nosini bildiradigan holat?",
        category: "Psixologiya",
        choices: [
            "Depersonalizatsiya holati", 
            "Somnolensiya", 
            "Karaxtlik holati", 
            "Komatoz holati"
        ],
        correctAnswer: "Somnolensiya",
    },
    {
        id: 58,
        question: "Ruhiy bemorlar qanday hollarda ovqat yeyishdan bosh tortishi mumkin?",
        category: "Psixologiya",
        choices: [
            "Depressiya holatining uzoq vaqt cho'zilishi", 
            "Issiq ovqat tufayli", 
            "Gallyutsinatsiya vaqtida ovaqtdan zaharlanish vasvasasi kuzatilganda", 
            "Ruhiy bemorlar doimiy ovqat yeyishdan bosh tortishadi"
        ],
        correctAnswer: "Gallyutsinatsiya vaqtida ovaqtdan zaharlanish vasvasasi kuzatilganda",
    },
    {
        id: 59,
        question: "Bemorlarda zaharlanib qolish vasvasasi qanday holatda kuzatiladi?",
        category: "Psixologiya",
        choices: [
            "Bezovtalanish", 
            "Ovqatdan bosh tortish", 
            "Ich qotishi", 
            "Ko'p suyuqlik iste'mol qilish"
        ],
        correctAnswer: "Ovqatdan bosh tortish",
    },
    {
        id: 60,
        question: "Ko'pincha ruhiy bemorlar nimalarga e'tibor bermaydi?",
        category: "Psixologiya",
        choices: [
            "O'z tashqi ko'rinishiga", 
            "Ozodalikka", 
            "Kiyinishga", 
            "Hamma javoblar to'g'ri"
        ],
        correctAnswer: "Hamma javoblar to'g'ri",
    },
];

export default quizData;
