const UpcomingEvent = [
  {
    id: 1,
    date: "2026-01-20T18:00:00",
    day: "Tuesday",
    dayHi: "मंगलवार",
    category: ["विवाह बंध", "नवग्रह शांति"],
    categoryEn: ["Marriage Bond", "Navgraha Peace"],
    deity: ["Lord Hanuman", "Navgrah"],
    deityHi: ["हनुमान जी", "नवग्रह"],
    poojaName: "हनुमान पूजन व मंगल वैदिक मंत्र जाप",
    poojaNameEn: "Hanuman Pujan and Mangal Vedic Mantra Jaap",

    // Mantra details
    mantra: "मंगल वैदिक मंत्र",
    mantraEn: "Mangal Vedic Mantra",
    // jaapSankhya removed

    // Additional mantra details
    specificMantra: "ॐ हं हनुमते रुद्रात्मकाय हुं फट्",
    specificMantraEn: "Om Ham Hanumate Rudratmakaya Hum Phat",
    mantraMeaning: "शक्ति, सुरक्षा और नकारात्मक ऊर्जा के निवारण का मंत्र",
    mantraMeaningEn:
      "Mantra for power, protection and removal of negative energy",

    // Detailed lunar date information
    tithi: "द्वितीया",
    tithiEn: "Dwitiya",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "मृगशिरा",
    nakshatraEn: "Mrigashira",

    // Detailed date formats
    dateHindi: "20 जनवरी 2026",
    dateFormatted: "20/01/26",

    laabh: [
      "वैवाहिक समस्या से समाधान",
      "दुर्घटना से बचाव",
      "साहस में वृद्धि",
      "क्रोध पर नियंत्रण",
    ],
    laabhEn: [
      "Solution to marital problems",
      "Protection from accidents",
      "Increase in courage",
      "Control over anger",
    ],

    cost: {
      single: 501,
      twoPersons: 701,
      familyOf4: 1001,
      familyOf6: 1251,
    },

    place: "संकटमोचन हनुमान मंदिर संगम दरागंज प्रयागराज",
    placeEn: "Sankatmochan Hanuman Mandir Sangam Daraganj Prayagraj",
    time: "11:00 AM to 01:00 PM",
    timeHi: "सुबह 11:00 से दोपहर 01:00 तक",
    image:
      "https://cuddlygurus.com/cdn/shop/articles/images_af0af966-b91a-48a1-a9db-8731cc17d04f.jpg?v=1745421176",

    // Main description
    description: "हनुमान पूजन व मंगल वैदिक मंत्र जाप",
    descriptionEn: "Hanuman Pujan and Mangal Vedic Mantra Jaap",

    // Detailed sections for page content
    detailedPages: [
      {
        pageNumber: 1,
        title: "हनुमान पूजन व मंगल वैदिक मंत्र जाप",
        titleEn: "Hanuman Worship and Mangal Vedic Mantra Jaap",
        content:
          "परिवार की रक्षा के लिए पूजन करें उस रामभक्त संकटहरण हनुमान का, जिन्होंने अनगिनत बार हमारी रक्षा की है।",
        contentEn:
          "Worship the devoted Hanuman for family protection, who has protected us countless times.",
        imagePosition: "side",
        showImage: true,
      },
      {
        pageNumber: 2,
        title:
          "हनुमान पूजन व मंगल वैदिक मंत्र जाप से क्या आशीर्वाद प्राप्त होता है?",
        titleEn:
          "What blessings are obtained from Hanuman worship and Mangal Vedic Mantra Jaap?",
        blessings: [
          "संकटों से मुक्ति",
          "नकारात्मक शक्तियों से रक्षा",
          "सकारात्मक ऊर्जा का संचार",
        ],
        blessingsEn: [
          "Freedom from troubles",
          "Protection from negative energies",
          "Flow of positive energy",
        ],
      },
      {
        pageNumber: 3,
        title: "इस मंदिर में क्यों किया जाता है पूजन व जाप",
        titleEn: "Why is worship and jaap performed in this temple?",
        content:
          "ऐसी मान्यता है कि प्रयागराज विराजमान श्री संकट मोचन हनुमान जी स्वयं गंगा मैया की गोद में स्थित होकर भक्तों के जीवन के सभी संकट, भय, बाधा और ग्रह दोषों को शीघ्र नष्ट करते हैं तथा मनोकामनाओ की पूर्ति करते है।",
        contentEn:
          "It is believed that Shri Sankat Mochan Hanuman Ji, seated in the lap of Mother Ganga in Prayagraj, quickly destroys all troubles, fears, obstacles and planetary defects of devotees' lives and fulfills their wishes.",
      },
    ],

    // Ritual procedure details
    ritualDetails: {
      duration: "2 hours",
      materialsProvided: [
        "फूल",
        "फल",
        "प्रसाद",
        "चुनरी",
        "सिंदूर",
        "हवन सामग्री",
      ],
      materialsProvidedEn: [
        "Flowers",
        "Fruits",
        "Prasad",
        "Chunri",
        "Sindoor",
        "Havan materials",
      ],
      priestCount: 1,
      includesHavan: true,
      includesPrasadDistribution: true,
    },

    // Why choose this pooja
    whyChoose: [
      "क्या जीवन में संकट, भय नकरात्मक बढ़ती जा रही है?",
      "मंगलवार को माँ गंगा की गोद में स्थित श्री संकट मोचन में दिव्य आराधना व जाप का अवसर।",
      "जब मन में हो कलह , विचारों का आकाश हो धुधला , हर दिशा में भय संसय और चिंता के बादल घिरे हो!",
      "आपका मन शांति, सम्मान और समझ ढुढ़ रहा हो।",
      "बाधाओ को अपने आप से दूर करने के लिए, घर के सदस्यों में एकता लाने के लिए।",
      "हनुमान जी महाराज की कृपा से सकारात्मकता के संचार के लिए श्री संकट मोचन मंदिर में यह विशेष पूजा होगी।",
      "इसमें पंडित जी द्वारा श्री हनुमत पूजन एवं मंगल वैदिक मंत्र का जाप होगा।",
    ],
    whyChooseEn: [
      "Is trouble, fear and negativity increasing in life?",
      "Opportunity for divine worship at Shri Sankat Mochan temple situated in the lap of Mother Ganga on Tuesday",
      "When there is strife in mind, the sky of thoughts is hazy",
      "Clouds of fear, doubt and worry surround in every direction",
      "To remove obstacles from yourself",
      "To bring unity among family members",
      "For the flow of positivity through the grace of Hanuman Ji Maharaj",
    ],

    // Detailed benefits sections
    detailedBenefits: [
      {
        title: "क्रोध पर नियंत्रण",
        titleEn: "Control over Anger",
        description:
          "क्रोध मनुष्य की स्वाभाविक भावना है, परंतु इसका असंयम जीवन में तनाव, संबंधों में कटुता और निर्णय-क्षमता की हानि करता है और अंतर्मन में नकरात्मकता बढ़ने लगती है  मंगलवार को आयोजित होने वाले इस अनुष्ठान में सकारात्मकता की प्रेरणा मिलती है।",
        descriptionEn:
          "Anger is a natural emotion of humans, but its lack of control causes stress in life, bitterness in relationships and loss of decision-making ability, and negativity begins to increase in the inner self. This ritual organized on Tuesday inspires positivity.",
      },
      {
        title: "वैवाहिक समस्या से समाधान",
        titleEn: "Solution to Marital Problems",
        description:
          "वैवाहिक जीवन में कलह, विलंब या दूरी का प्रमुख कारण ग्रहदोष, मनोबल की कमी और आपसी संवाद का अभाव माना जाता है। हनुमान जी बल, संयम और निष्ठा के प्रतीक हैं। उनकी कृपा से वैवाहिक बाधाएँ दूर होती।",
        descriptionEn:
          "The main causes of strife, delay or distance in marital life are considered to be planetary defects, lack of morale and lack of mutual communication. Hanuman Ji is a symbol of strength, restraint and devotion. His grace removes marital obstacles.",
      },
      {
        title: "दुर्घटना से बचाव",
        titleEn: "Protection from Accidents",
        description:
          "हनुमान जी बल, सतर्कता और रक्षक शक्ति के प्रतीक हैं। शास्त्रों व लोकमान्यता के अनुसार उनकी कृपा से अकस्मात् दुर्घटनाओं, भय और अनिष्ट से रक्षा होती है, विशेषकर यात्रा, वाहन और जोखिमपूर्ण कार्यों में।",
        descriptionEn:
          "Hanuman Ji is a symbol of strength, vigilance and protective power. According to scriptures and popular belief, his grace protects from sudden accidents, fear and evil, especially in travel, vehicles and risky tasks.",
      },
      {
        title: "साहस में वृद्धि",
        titleEn: "Increase in Courage",
        description:
          "हनुमान जी अपरिमित साहस, बल और आत्मविश्वास के प्रतीक हैं। उनकी कृपा से भय, संकोच और मानसिक दुर्बलता दूर होती है तथा व्यक्ति कठिन परिस्थितियों का सामना निर्भीक होकर करता है।",
        descriptionEn:
          "Hanuman Ji is a symbol of immense courage, strength and self-confidence. His grace removes fear, hesitation and mental weakness, and the person faces difficult situations fearlessly.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "श्री हनुमत पूजन",
      "मंगल वैदिक मंत्र का जाप",
      "हवन",
      "आरती",
      "प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Shri Hanumat Worship",
      "Mangal Vedic Mantra Jaap",
      "Havan",
      "Aarti",
      "Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा पूजन",
      "सभी पूजा सामग्री",
      "हवन",
      "प्रसाद",
      "फोटो/वीडियो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Worship by Pandit Ji",
      "All worship materials",
      "Havan",
      "Prasad",
      "Photo/Video (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://temple.yatradham.org/public/Product/pooja-rituals/pooja-rituals_2nbk7AFt_202310091711160.jpg",
      "https://temple.yatradham.org/public/Product/pooja-rituals/pooja-rituals_2nbk7AFt_202310091711160.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "मंगल दोष",
        "हनुमान पूजा",
        "विवाह समस्या",
        "नवग्रह",
        "संकट मोचन",
      ],
      keywordsEn: [
        "Mangal Dosh",
        "Hanuman Pooja",
        "Marriage Problem",
        "Navgraha",
        "Sankat Mochan",
      ],
      duration: "120 मिनट",
      difficulty: "मध्यम",
      suitableFor: ["सभी आयु वर्ग", "पुरुष और महिला"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 2,
    date: "2026-01-21T18:00:00",
    day: "Wednesday",
    dayHi: "बुधवार",

    // Lunar date details
    tithi: "तृतीया",
    tithiEn: "Tritiya",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "मृगशिरा",
    nakshatraEn: "Mrigashira",
    dateFormatted: "21/01/26",
    dateHindi: "21 जनवरी 2026",

    category: ["विघ्न नाश", "बुद्धि वृद्धि", "समृद्धि"],
    categoryEn: ["Obstacle Removal", "Intelligence Enhancement", "Prosperity"],
    deity: ["Lord Ganesha"],
    deityHi: ["गणेश जी"],
    poojaName: "गणेश पूजा एवं अथर्वशीर्ष पाठ",
    poojaNameEn: "Ganesh Pooja and Atharvashirsha Path",

    // Mantra details
    mantra: "ॐ गं गणपतये नमः",
    mantraEn: "Om Gam Ganapataye Namah",
    specificMantra: "गणेश अथर्वशीर्ष मंत्र",
    specificMantraEn: "Ganesh Atharvashirsha Mantra",
    mantraMeaning: "सभी बाधाओं के निवारण और बुद्धि प्राप्ति का मंत्र",
    mantraMeaningEn: "Mantra for removing all obstacles and gaining wisdom",
    jaapSankhya: 108,
    pathCount: 11,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title: "जहाँ प्रयास अपूर्ण लगें और भविष्य धुंधला हो",
        titleEn: "Where efforts seem incomplete and the future is hazy",
        content:
          "जहाँ प्रयास अपूर्ण लगें और भविष्य धुंधला हो वहाँ गणपति की अनुकम्पा नई शुरुआत का संकेत देती है। गणेश पूजा एवं गणेश अथर्वशीर्ष पाठ आत्मबल को जाग्रत करता है।",
        contentEn:
          "There, Ganesha's grace signals a new beginning. Ganesh Pooja and Ganesh Atharvashirsha Path awaken inner strength.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title:
          "पवित्र अनुष्ठान से हमें किन दिव्य आशीर्वादों की प्राप्ति होती है?",
        titleEn: "Which divine blessings do we receive from the sacred ritual?",
        blessings: [
          "शिक्षा और अध्ययन में बाधा दूर होना",
          "व्यापार और कार्य में रुकावटें दूर होना",
          "आध्यात्मिक और पारिवारिक विघ्न नाश",
        ],
        blessingsEn: [
          "Removal of obstacles in education and studies",
          "Elimination of hurdles in business and work",
          "Destruction of spiritual and family obstacles",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों समर्पित करें श्रद्धा इस मंदिर में",
        titleEn: "Why dedicate your devotion in this temple",
        content:
          "भक्तों के हर संकट को हरने वाला माना जाता है। यहाँ जो भी शुद्ध मन से आते हैं, उनकी बुद्धि, सफलता और जीवन में सुख-समृद्धि की प्राप्ति होती है।",
        contentEn:
          "It is considered to remove every crisis of devotees. Whoever comes here with a pure mind, they attain wisdom, success and happiness-prosperity in life.",
      },
    ],

    laabh: [
      "वैवाहिक समस्या से समाधान",
      "दुर्घटना से बचाव",
      "साहस में वृद्धि",
      "क्रोध पर नियंत्रण",
      // Additional benefits
      "विघ्नों का नाश",
      "धन की समृद्धि",
      "राहु-केतु के नकारात्मक प्रभाव से रक्षा",
    ],
    laabhEn: [
      "Solution to marital problems",
      "Protection from accidents",
      "Increase in courage",
      "Control over anger",
      // Additional benefits
      "Destruction of obstacles",
      "Prosperity of wealth",
      "Protection from negative effects of Rahu-Ketu",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "ओंकारेश्वर गणपति मंदिर, दशाश्वमेध घाट, प्रयागराज",
    placeEn: "Onkareshwar Ganpati Temple, Dashashwamedh Ghat, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image:
      "https://images.bhaskarassets.com/webp/thumb/512x0/web2images/521/2019/06/19/0521_ganesh_ji_puja_vidhi.jpg",
    description:
      "गणेश पूजा एवं अथर्वशीर्ष पाठ से विघ्नों का नाश एवं बुद्धि वृद्धि",
    descriptionEn:
      "Ganesh Pooja and Atharvashirsha Path for obstacle removal and wisdom enhancement",

    // Pooja details section
    poojaDetails: {
      title: "🔥 हर बाधा मिटाने का अद्भुत अवसर! 🔥",
      titleEn: "🔥 Amazing opportunity to remove every obstacle! 🔥",
      questions: [
        "क्या आपकी ज़िंदगी में मुश्किलें लगातार बढ़ रही हैं?",
        "राहें बंद लग रही हैं और आप असहाय महसूस कर रहे हैं?",
      ],
      questionsEn: [
        "Are difficulties constantly increasing in your life?",
        "Are paths appearing blocked and you're feeling helpless?",
      ],
      opportunity: "अब समय है भगवान ओंकार गणेश की कृपा पाने का।",
      opportunityEn:
        "Now is the time to receive the grace of Lord Omkar Ganesha.",
      benefits: [
        "संकट और अड़चनों से मुक्ति पाएँ",
        "मन की शांति और जीवन में सकारात्मक ऊर्जा महसूस करें",
        "हर बाधा के सामने निडर बनें",
      ],
      benefitsEn: [
        "Get freedom from crises and obstacles",
        "Experience peace of mind and positive energy in life",
        "Become fearless in front of every obstacle",
      ],
      callToAction: "भाग लें और अपने जीवन में चमत्कार महसूस करें!",
      callToActionEn: "Participate and feel the miracle in your life!",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह पावन क्षेत्र आध्यात्मिक ऊर्जा से परिपूर्ण एवं विशेष आस्था का केंद्र है।",
      locationEn:
        "This sacred area of Prayagraj is full of spiritual energy and is a center of special faith.",

      deityForm:
        "माँ गंगा के पवित्र तट पर स्थित ओंकारेश्वर गणपति यहाँ की आध्यात्मिक चेतना के मुख्य आधार माने जाते हैं।",
      deityFormEn:
        "Onkareshwar Ganpati, situated on the holy banks of Mother Ganga, is considered the main basis of spiritual consciousness here.",

      selfManifested:
        "यहाँ विराजमान ओंकारेश्वर गणपति भगवान गणेश के ॐ (ओंकार) स्वरूप में स्वयंभू माने जाते हैं।",
      selfManifestedEn:
        "The present Onkareshwar Ganpati is considered self-manifested in the form of Om (Omkar) of Lord Ganesha.",

      importance:
        "बुधवार, जो गणपति जी का प्रिय दिवस माना जाता है, इस दिन यहाँ दर्शन-पूजन और उपासना करने से विशेष फल की प्राप्ति होती है।",
      importanceEn:
        "Wednesday, which is considered the favorite day of Ganpati Ji, performing darshan-worship and devotion here on this day yields special results.",

      combinedBenefits:
        "विशेषकर गंगा स्नान के पश्चात बुधवार को गणेश जी के दर्शन करने से कार्य-सिद्धि, बुद्धि-विकास और जीवन की बाधाओं का नाश होता है।",
      combinedBenefitsEn:
        "Especially after Ganga bath, having darshan of Ganesh Ji on Wednesday leads to accomplishment of work, development of intellect and destruction of life's obstacles.",

      atharvashirshaConnection:
        "इसी पावन स्थल से गणेश अथर्वशीर्ष पाठ का भी गहरा संबंध माना जाता है।",
      atharvashirshaConnectionEn:
        "Ganesh Atharvashirsha Path is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "अथर्वशीर्ष में गणपति को ही साक्षात् ओंकार, ब्रह्मा, विष्णु और महेश कहा गया है— 'त्वमेव प्रत्यक्षं तत्त्वमसि'।",
      scripturalReferenceEn:
        "In Atharvashirsha, Ganpati himself is called the visible Omkar, Brahma, Vishnu and Mahesh— 'You alone are the visible truth'.",

      chantingBenefits:
        "माँ गंगा के सान्निध्य में बुधवार के दिन गणेश अथर्वशीर्ष का पाठ करने से विद्या, वाणी, विवेक और सौभाग्य में वृद्धि होती है।",
      chantingBenefitsEn:
        "Reciting Ganesh Atharvashirsha on Wednesday in the presence of Mother Ganga increases knowledge, speech, discretion and good fortune.",

      ashwamedhSignificance:
        "इसी क्षेत्र में स्थित दशाश्वमेध घाट, जहाँ ब्रह्मा जी द्वारा दस अश्वमेध यज्ञ किए जाने की मान्यता है, इस स्थान की आध्यात्मिक महिमा को और भी बढ़ा देता है।",
      ashwamedhSignificanceEn:
        "Dashashwamedh Ghat located in this same area, where it is believed that Lord Brahma performed ten Ashwamedh Yajnas, further enhances the spiritual glory of this place.",

      combinedResult:
        "यहाँ गंगा स्नान, दान-पुण्य और गणपति आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Ganga bath, charity-punishment and Ganpati worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार माँ गंगा की पावन धारा, ओंकारेश्वर गणपति की कृपा, बुधवार की विशेष उपासना तथा गणेश अथर्वशीर्ष पाठ आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Mother Ganga, the grace of Onkareshwar Ganpati, special worship on Wednesday and Ganesh Atharvashirsha Path organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "विघ्नों का नाश",
        titleEn: "Destruction of Obstacles",
        description:
          "विघ्नों का नाश गणेश जी का प्रमुख गुण है। उन्हें 'विघ्नहर्ता' कहा जाता है, यानी वे सभी बाधाओं और कठिनाइयों को दूर करते हैं। उनके दर्शन और पूजा से जीवन में आने वाली समस्याएँ, रोग, मानसिक तनाव और कार्य में अड़चनें समाप्त होती हैं।",
        descriptionEn:
          "Destruction of obstacles is the main quality of Ganesh Ji. He is called 'Vighnaharta', meaning he removes all obstacles and difficulties. Through his darshan and worship, problems, diseases, mental stress and work obstacles that come in life are eliminated.",
      },
      {
        title: "धन की समृद्धि",
        titleEn: "Prosperity of Wealth",
        description:
          "प्राचीन समय में, देवताओं ने देखा कि पृथ्वी पर लोग धन और सुख की कमी से परेशान हैं। तब भगवान गणेश ने धन और समृद्धि का वरदान देने का निर्णय लिया।",
        descriptionEn:
          "In ancient times, the gods saw that people on earth were troubled by lack of wealth and happiness. Then Lord Ganesha decided to give the boon of wealth and prosperity.",
      },
      {
        title: "राहु एवं केतु के नकारात्मक प्रभाव से रक्षा",
        titleEn: "Protection from Negative Effects of Rahu and Ketu",
        description:
          "श्री गणेश भगवान, जो विघ्नहर्ता और बुद्धि के स्वामी हैं, राहु एवं केतु के नकारात्मक प्रभाव से रक्षा करते हैं। उनकी कृपा से जीवन में बाधाएँ दूर होती हैं, मानसिक शांति मिलती है और सभी कार्य सफल होते हैं।",
        descriptionEn:
          "Shri Ganesh Bhagwan, who is the remover of obstacles and lord of wisdom, protects from the negative effects of Rahu and Ketu. Through his grace, obstacles in life are removed, mental peace is attained and all work becomes successful.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "गणेश पूजन एवं आवाहन",
      "गणेश अथर्वशीर्ष पाठ",
      "108 बार मंत्र जाप",
      "हवन एवं आहुति",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Ganesh Poojan and Invocation",
      "Ganesh Atharvashirsha Path",
      "108 times Mantra Jaap",
      "Havan and Ahuti",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "गणेश अथर्वशीर्ष पाठ",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Ganesh Atharvashirsha Path",
      "All worship materials",
      "Havan materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://cuddlygurus.com/cdn/shop/articles/images_af0af966-b91a-48a1-a9db-8731cc17d04f.jpg?v=1745421176",
      "https://example.com/temple-image.jpg",
      "https://example.com/ganesh-murti.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "गणेश पूजा",
        "अथर्वशीर्ष",
        "बुधवार",
        "विघ्न नाश",
        "बुद्धि",
        "समृद्धि",
        "प्रयागराज",
        "ओंकारेश्वर",
      ],
      keywordsEn: [
        "Ganesh Pooja",
        "Atharvashirsha",
        "Wednesday",
        "Obstacle Removal",
        "Wisdom",
        "Prosperity",
        "Prayagraj",
        "Onkareshwar",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["सभी आयु वर्ग", "विद्यार्थी", "व्यापारी", "गृहिणी"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
];

// Common "How it Works" data for all poojas
export const howItWorksData = {
  heading: "How it works?",
  headingHi: "यह कैसे काम करता है?",
  steps: [
    {
      id: 1,
      title: "Choose Your pooja",
      titleHi: "अपनी पूजा चुनें",
      description:
        "Select the pooja you wish to perform and seek divine blessings. Every pooja consists of Vedic Name chant, Mantras, Aarti, Bhog as applicable, and took ~2 hours.",
      descriptionHi:
        "वह पूजा चुनें जिसे आप करना चाहते हैं और दिव्य आशीर्वाद प्राप्त करना चाहते हैं। प्रत्येक पूजा में वैदिक नाम जाप, मंत्र, आरती, भोग शामिल है और लगभग 2 घंटे का समय लगता है।",
      image:
        "https://lp-cms-production.imgix.net/2025-04/Shutterstock374175955.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
    },
    {
      id: 2,
      title: "Offer Dakshina and Sankalp",
      titleHi: "दक्षिणा और संकल्प अर्पित करें",
      description:
        "Offer Dakshina, Bhog/Seva, and share your sankalp with name and gotra.",
      descriptionHi:
        "दक्षिणा, भोग/सेवा अर्पित करें और अपना नाम और गोत्र के साथ संकल्प साझा करें।",
      image:
        "https://images.pexels.com/photos/15893245/pexels-photo-15893245.jpeg",
    },
    {
      id: 3,
      title: "Receive Blessings & pooja Video",
      titleHi: "आशीर्वाद और पूजा वीडियो प्राप्त करें",
      description:
        "Pandit ji performs the sacred pooja in your name and gotra, and shares a video of the ceremony as a divine blessing.",
      descriptionHi:
        "पंडित जी आपके नाम और गोत्र में पवित्र पूजा करते हैं, और दिव्य आशीर्वाद के रूप में समारोह का वीडियो साझा करते हैं।",
      image:
        "https://lp-cms-production.imgix.net/2025-04/Shutterstock374175955.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
    },
  ],
};

export default UpcomingEvent;
