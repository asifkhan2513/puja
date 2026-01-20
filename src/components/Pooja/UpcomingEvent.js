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
    poojaNameEn: "Hanuman poojan and Mangal Vedic Mantra Jaap",

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
    descriptionEn: "Hanuman poojan and Mangal Vedic Mantra Jaap",

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
      "https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2019/12/31033604/BY-GODS-GANESH-PUJA-600x900.jpg",
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
  {
    id: 3,
    date: "2026-01-22T18:00:00",
    day: "Thursday",
    dayHi: "गुरुवार",

    // Lunar date details
    tithi: "चतुर्थी",
    tithiEn: "Chaturthi",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "22/01/26",
    dateHindi: "22 जनवरी 2026",

    category: ["संतुलन", "शांति", "स्थिरता", "धर्म"],
    categoryEn: ["Balance", "Peace", "Stability", "Dharma"],
    deity: ["Lord Vishnu"],
    deityHi: ["भगवान विष्णु"],
    poojaName: "विष्णु पूजा एवं विष्णु सहस्त्रनाम पाठ",
    poojaNameEn: "Vishnu Pooja and Vishnu Sahastranama Path",

    // Mantra details
    mantra: "ॐ नमो भगवते वासुदेवाय",
    mantraEn: "Om Namo Bhagavate Vasudevaya",
    specificMantra: "विष्णु सहस्त्रनाम मंत्र",
    specificMantraEn: "Vishnu Sahastranama Mantra",
    mantraMeaning: "जीवन में संतुलन, शांति और सुरक्षा प्रदान करने का मंत्र",
    mantraMeaningEn:
      "Mantra for providing balance, peace and protection in life",
    jaapSankhya: 108,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title: "जब परिश्रम मौन हो जाए और आशाएँ धुंध में खोती प्रतीत हों",
        titleEn: "When effort falls silent and hopes seem lost in the mist",
        content:
          "जब परिश्रम मौन हो जाए और आशाएँ धुंध में खोती प्रतीत हों,तब श्रीहरि विष्णु की अनुकम्पा जीवन-पथ को प्रकाश और संतुलन प्रदान करती है। विष्णु पूजा एवं विष्णु सहस्त्रनाम पाठ मन में अडिग धैर्य, धर्म की चेतना और आत्मबल का संचार कर मानव जीवन को शांति, स्थिरता और कल्याण की ओर अग्रसर करते हैं।",
        contentEn:
          "When effort falls silent and hopes seem lost in the mist, then Srihari Vishnu's grace provides light and balance to the path of life. Vishnu Pooja and Vishnu Sahastranama Path instill unwavering patience, awareness of dharma and inner strength in the mind, leading human life towards peace, stability and welfare.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title:
          "पवित्र अनुष्ठान से हमें किन दिव्य आशीर्वादों की प्राप्ति होती है?",
        titleEn: "Which divine blessings do we receive from the sacred ritual?",
        blessings: [
          "शिक्षा, ज्ञान एवं स्मरण शक्ति में वृद्धि",
          "व्यापार, नौकरी एवं कार्यक्षेत्र में स्थायित्व और उन्नति",
          "आध्यात्मिक, पारिवारिक एवं मानसिक अशांति से मुक्ति",
        ],
        blessingsEn: [
          "Increase in education, knowledge and memory power",
          "Stability and progress in business, job and work field",
          "Freedom from spiritual, family and mental restlessness",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों समर्पित करें श्रद्धा इस पावन विष्णु उपासना में",
        titleEn: "Why dedicate your devotion in this sacred Vishnu worship",
        content:
          "भगवान विष्णु को जगत का पालनकर्ता माना गया है, जो भक्तों के जीवन में संतुलन, शांति और सुरक्षा प्रदान करते हैं। जो भी श्रद्धा, नियम और विश्वास से श्रीहरि की आराधना करता है, उसे धर्म, अर्थ, काम और मोक्ष—चारों पुरुषार्थों की प्राप्ति होती है।",
        contentEn:
          "Lord Vishnu is considered the sustainer of the world, who provides balance, peace and security in the lives of devotees. Whoever worships Srihari with devotion, discipline and faith, attains all four Purusharthas - Dharma, Artha, Kama and Moksha.",
      },
    ],

    laabh: [
      "जीवन में स्थिरता और संरक्षण",
      "धर्म और विवेक की वृद्धि",
      "धन, ऐश्वर्य एवं लक्ष्मी कृपा",
      "मानसिक शांति और भय से मुक्ति",
    ],
    laabhEn: [
      "Stability and protection in life",
      "Increase in Dharma and discretion",
      "Wealth, opulence and Lakshmi's grace",
      "Mental peace and freedom from fear",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "विष्णु मंदिर, प्रयागराज",
    placeEn: "Vishnu Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image:
      "https://d3pc1xvrcw35tl.cloudfront.net/sm/images/1200x900/vishnu-shastranaam_202403288249.jpg",
    description: "विष्णु पूजा एवं सहस्त्रनाम पाठ से जीवन में संतुलन और शांति",
    descriptionEn:
      "Vishnu Pooja and Sahastranama Path for balance and peace in life",

    // Pooja details section
    poojaDetails: {
      title: "🔥 जीवन को संतुलन और शांति देने का दिव्य अवसर! 🔥",
      titleEn: "🔥 Divine opportunity to give balance and peace to life! 🔥",
      questions: [
        "क्या आपके जीवन में अस्थिरता, मानसिक तनाव या रुकावटें बनी हुई हैं?",
        "क्या प्रयासों के बाद भी अपेक्षित फल नहीं मिल पा रहा है?",
      ],
      questionsEn: [
        "Is there instability, mental stress or obstacles in your life?",
        "Are you not getting the expected results even after efforts?",
      ],
      opportunity: "✨ अब समय है भगवान विष्णु की कृपा प्राप्त करने का। ✨",
      opportunityEn:
        "✨ Now is the time to receive the grace of Lord Vishnu. ✨",
      benefits: [
        "मानसिक शांति और धैर्य प्राप्त करेंगे",
        "जीवन में स्थिरता, सुरक्षा और सकारात्मक ऊर्जा अनुभव करेंगे",
        "धर्म मार्ग पर दृढ़ होकर हर संकट का समाधान पाएँगे",
      ],
      benefitsEn: [
        "Will attain mental peace and patience",
        "Will experience stability, security and positive energy in life",
        "Will become firm on the path of Dharma and find solution to every crisis",
      ],
      callToAction:
        "🙏 भाग लें और श्रीहरि नारायण की कृपा से जीवन में संतुलन अनुभव करें।",
      callToActionEn:
        "🙏 Participate and experience balance in life through the grace of Srihari Narayan.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह पावन विष्णु मंदिर आध्यात्मिक शांति और विष्णु भक्ति का प्रमुख केंद्र है।",
      locationEn:
        "This sacred Vishnu temple of Prayagraj is a major center of spiritual peace and Vishnu devotion.",

      deityForm:
        "यहाँ विराजमान भगवान विष्णु शांत, सौम्य एवं कल्याणकारी स्वरूप में सभी भक्तों को दर्शन देते हैं।",
      deityFormEn:
        "The present Lord Vishnu here gives darshan to all devotees in a peaceful, gentle and benevolent form.",

      selfManifested:
        "इस मंदिर में स्थापित विष्णु प्रतिमा स्वयंभू मानी जाती है जिसमें साक्षात नारायण का वास है।",
      selfManifestedEn:
        "The Vishnu idol installed in this temple is considered self-manifested, containing the direct residence of Narayan.",

      importance:
        "गुरुवार, जो विष्णु जी का प्रिय दिवस माना जाता है, इस दिन यहाँ दर्शन-पूजन और विष्णु सहस्त्रनाम पाठ करने से विशेष फल की प्राप्ति होती है।",
      importanceEn:
        "Thursday, which is considered the favorite day of Vishnu Ji, performing darshan-worship and Vishnu Sahastranama Path here on this day yields special results.",

      combinedBenefits:
        "विशेषकर त्रिवेणी स्नान के पश्चात गुरुवार को विष्णु जी के दर्शन करने से जीवन में स्थिरता, मानसिक शांति और कर्मों का शुद्धिकरण होता है।",
      combinedBenefitsEn:
        "Especially after Triveni bath, having darshan of Vishnu Ji on Thursday leads to stability in life, mental peace and purification of actions.",

      sahastranamaConnection:
        "इसी पावन स्थल से विष्णु सहस्त्रनाम पाठ का गहरा संबंध माना जाता है।",
      sahastranamaConnectionEn:
        "Vishnu Sahastranama Path is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "विष्णु सहस्त्रनाम में भगवान विष्णु के एक हजार नामों का स्मरण किया जाता है, जो स्वयं महाभारत के अनुशासन पर्व में भीष्म पितामह द्वारा युधिष्ठिर को उपदेश रूप में प्रदान किया गया था।",
      scripturalReferenceEn:
        "Vishnu Sahastranama contains the remembrance of one thousand names of Lord Vishnu, which was given by Bhishma Pitamaha to Yudhishthira in the form of teaching in the Anushasan Parva of Mahabharata itself.",

      chantingBenefits:
        "शास्त्रों में कहा गया है— 'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्'। अर्थात भगवान विष्णु का स्मरण करने से मन शांति, भयमुक्ति और स्थिरता प्राप्त करता है।",
      chantingBenefitsEn:
        "It is said in scriptures— 'Shantakaram Bhujagashayanam Padmanabham Suresham'. Meaning, by remembering Lord Vishnu, the mind attains peace, freedom from fear and stability.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और विष्णु आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Vishnu worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, विष्णु जी की कृपा, गुरुवार की विशेष उपासना तथा विष्णु सहस्त्रनाम पाठ आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Vishnu Ji, special worship on Thursday and Vishnu Sahastranama Path organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "जीवन में स्थिरता और संरक्षण",
        titleEn: "Stability and protection in life",
        description:
          "भगवान विष्णु सृष्टि के पालनकर्ता हैं। उनकी पूजा से जीवन में चल रही अस्थिरता, भय और अनिश्चितता समाप्त होती है। विष्णु सहस्त्रनाम पाठ से व्यक्ति को मानसिक संतुलन, सुरक्षा और जीवन में स्थायित्व की अनुभूति होती है।",
        descriptionEn:
          "Lord Vishnu is the sustainer of creation. His worship eliminates ongoing instability, fear and uncertainty in life. Through Vishnu Sahastranama Path, a person experiences mental balance, security and a sense of permanence in life.",
      },
      {
        title: "धर्म और विवेक की वृद्धि",
        titleEn: "Increase in Dharma and discretion",
        description:
          "विष्णु जी धर्म के अधिष्ठाता हैं। उनकी आराधना से सही-गलत का बोध जाग्रत होता है, निर्णय शक्ति प्रबल होती है और जीवन धर्ममय दिशा में अग्रसर होता है। इससे व्यक्ति कर्मों में शुद्धता और विचारों में स्पष्टता प्राप्त करता है।",
        descriptionEn:
          "Vishnu Ji is the presiding deity of Dharma. His worship awakens awareness of right-wrong, strengthens decision-making power and life progresses in a Dharmic direction. Through this, a person attains purity in actions and clarity in thoughts.",
      },
      {
        title: "धन, ऐश्वर्य एवं लक्ष्मी कृपा",
        titleEn: "Wealth, opulence and Lakshmi's grace",
        description:
          "भगवान विष्णु लक्ष्मीपति हैं। विष्णु सहस्त्रनाम पाठ से आर्थिक बाधाएँ दूर होती हैं, आय के साधनों में वृद्धि होती है और घर में सुख-समृद्धि का वास होता है। यह पूजा धन के अपव्यय को रोककर स्थिर समृद्धि प्रदान करती है।",
        descriptionEn:
          "Lord Vishnu is Lakshmipati. Through Vishnu Sahastranama Path, economic obstacles are removed, sources of income increase and happiness-prosperity resides in the home. This worship prevents wasteful expenditure of wealth and provides stable prosperity.",
      },
      {
        title: "मानसिक शांति और भय से मुक्ति",
        titleEn: "Mental peace and freedom from fear",
        description:
          "'शान्ताकारं भुजगशयनं…' स्वरूप वाले श्रीहरि की उपासना से चित्त शांत होता है। विष्णु सहस्त्रनाम का नियमित पाठ चिंता, तनाव, भय और मानसिक अशांति को दूर करता है।",
        descriptionEn:
          "Worship of Srihari in the form of 'Shantakaram Bhujagashayanam...' pacifies the mind. Regular recitation of Vishnu Sahastranama removes worry, stress, fear and mental restlessness.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "विष्णु पूजन एवं आवाहन",
      "विष्णु सहस्त्रनाम पाठ",
      "108 बार मंत्र जाप",
      "हवन एवं आहुति",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Vishnu Poojan and Invocation",
      "Vishnu Sahastranama Path",
      "108 times Mantra Jaap",
      "Havan and Ahuti",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "विष्णु सहस्त्रनाम पाठ",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Vishnu Sahastranama Path",
      "All worship materials",
      "Havan materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/vishnu-temple.jpg",
      "https://example.com/vishnu-idol.jpg",
      "https://example.com/sahastranama-book.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "विष्णु पूजा",
        "सहस्त्रनाम",
        "गुरुवार",
        "शांति",
        "स्थिरता",
        "संतुलन",
        "प्रयागराज",
        "नारायण",
      ],
      keywordsEn: [
        "Vishnu Pooja",
        "Sahastranama",
        "Thursday",
        "Peace",
        "Stability",
        "Balance",
        "Prayagraj",
        "Narayan",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["सभी आयु वर्ग", "गृहस्थ", "साधक", "व्यापारी"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 4,
    date: "2026-01-23T18:00:00",
    day: "Friday",
    dayHi: "शुक्रवार",

    // Lunar date details
    tithi: "पंचमी",
    tithiEn: "Panchami",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "23/01/26",
    dateHindi: "23 जनवरी 2026",

    category: ["विद्या", "बुद्धि", "वाणी", "ज्ञान", "आध्यात्मिक उन्नति"],
    categoryEn: [
      "Knowledge",
      "Wisdom",
      "Speech",
      "Learning",
      "Spiritual Progress",
    ],
    deity: ["Goddess Neel Saraswati"],
    deityHi: ["माँ नील सरस्वती"],
    poojaName: "नील सरस्वती पूजा एवं नील सरस्वती स्तोत्र पाठ",
    poojaNameEn: "Neel Saraswati Pooja and Neel Saraswati Stotra Path",

    // Mantra details
    mantra: "ॐ ऐं नील सरस्वत्यै नमः",
    mantraEn: "Om Aim Neel Saraswatyai Namah",
    specificMantra: "नील सरस्वती स्तोत्र मंत्र",
    specificMantraEn: "Neel Saraswati Stotra Mantra",
    mantraMeaning: "विद्या, बुद्धि और वाणी की शक्ति प्रदान करने का मंत्र",
    mantraMeaningEn:
      "Mantra for providing power of knowledge, wisdom and speech",
    jaapSankhya: 108,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title: "जब बुद्धि भ्रमित हो जाए, वाणी में प्रभाव क्षीण पड़ने लगे",
        titleEn: "When intellect gets confused, speech starts losing impact",
        content:
          "जब बुद्धि भ्रमित हो जाए, वाणी में प्रभाव क्षीण पड़ने लगे और ज्ञान का प्रकाश धुंध में खोता प्रतीत हो, तब माँ नील सरस्वती की करुणा मानव चेतना को दिव्य प्रज्ञा, विवेक और आत्मबल से आलोकित करती है। माँ नील सरस्वती पूजा एवं नील सरस्वती स्तोत्र पाठ मन, बुद्धि और वाणी को शुद्ध कर जीवन में विद्या, स्थिरता और आध्यात्मिक उन्नति का संचार करती है।",
        contentEn:
          "When intellect gets confused, speech starts losing impact And the light of knowledge seems lost in the mist, then Mother Neel Saraswati's compassion illuminates human consciousness with divine wisdom, discretion and inner strength. Mother Neel Saraswati Pooja and Neel Saraswati Stotra Path purify mind, intellect and speech, infusing life with knowledge, stability and spiritual progress.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title: "माँ नील सरस्वती उपासना से प्राप्त होने वाले दिव्य आशीर्वाद",
        titleEn: "Divine blessings received from Mother Neel Saraswati worship",
        blessings: [
          "शिक्षा, विद्या, स्मरण शक्ति एवं बौद्धिक क्षमता में वृद्धि",
          "वाणी में प्रभाव, तर्कशक्ति और निर्णय क्षमता का विकास",
          "मानसिक भ्रम, भय, अवसाद एवं नकारात्मक विचारों से मुक्ति",
        ],
        blessingsEn: [
          "Increase in education, knowledge, memory power and intellectual capacity",
          "Development of impact in speech, reasoning power and decision-making ability",
          "Freedom from mental confusion, fear, depression and negative thoughts",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों समर्पित करें श्रद्धा माँ नील सरस्वती की आराधना में",
        titleEn:
          "Why dedicate your devotion in Mother Neel Saraswati's worship",
        content:
          "माँ सरस्वती विद्या, बुद्धि और वाणी की अधिष्ठात्री देवी हैं। नील सरस्वती उनका उग्र एवं रहस्यमय स्वरूप है, जो अज्ञान, तामसिक प्रवृत्तियों और मानसिक अवरोधों का नाश करती है। जो साधक श्रद्धा, नियम और शुद्ध आचरण से माँ नील सरस्वती की उपासना करती है, उसे विद्या, विवेक, आत्मबल और आध्यात्मिक संरक्षण प्राप्त होता है।",
        contentEn:
          "Mother Saraswati is the presiding goddess of knowledge, wisdom and speech. Neel Saraswati is her fierce and mysterious form, which destroys ignorance, tamasic tendencies and mental obstacles. The seeker who worships Mother Neel Saraswati with devotion, discipline and pure conduct, attains knowledge, discretion, inner strength and spiritual protection.",
      },
    ],

    laabh: [
      "विद्या और बौद्धिक स्थिरता",
      "वाणी एवं अभिव्यक्ति की शक्ति",
      "मानसिक शांति और भय से मुक्ति",
      "आध्यात्मिक संरक्षण और विवेक",
      "विद्यार्थियों के लिए विशेष लाभ",
    ],
    laabhEn: [
      "Knowledge and intellectual stability",
      "Power of speech and expression",
      "Mental peace and freedom from fear",
      "Spiritual protection and discretion",
      "Special benefits for students",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "सरस्वती मंदिर, प्रयागराज",
    placeEn: "Saraswati Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjkWQHZYASV33zIWY8Jv_Mr32qNLdfjHVipi3HcgY8vPI8wSH-lmkrZZEibK6ru3BGVgFIhus9jXm7c9ARjv4NhTkKhykeIYTtLBSUQMQvGfuMFkhCXMIM7HCwSQev_kXLPojNIOJs8QM2fzoY_6c3rKriL_gretWOp0ZDol4TQ0TUrUIyY5pfv-O2P=w640-h374",
    description:
      "नील सरस्वती पूजा एवं स्तोत्र पाठ से विद्या, बुद्धि और वाणी की प्राप्ति",
    descriptionEn:
      "Neel Saraswati Pooja and Stotra Path for attainment of knowledge, wisdom and speech",

    // Pooja details section
    poojaDetails: {
      title: "🔥 विद्या, विवेक और वाणी को जाग्रत करने का दिव्य अवसर! 🔥",
      titleEn:
        "🔥 Divine opportunity to awaken knowledge, discretion and speech! 🔥",
      questions: [
        "क्या पढ़ाई में बार-बार बाधाएँ आ रही हैं?",
        "क्या निर्णय लेने में भ्रम या आत्मविश्वास की कमी अनुभव हो रही है?",
        "क्या वाणी या अभिव्यक्ति में प्रभाव नहीं बन पा रहा है?",
      ],
      questionsEn: [
        "Are obstacles coming repeatedly in studies?",
        "Are you experiencing confusion or lack of confidence in decision-making?",
        "Is impact not being created in speech or expression?",
      ],
      opportunity:
        "✨ बसंत पंचमी के पावन दिन माँ नील सरस्वती की कृपा प्राप्त करें। ✨",
      opportunityEn:
        "✨ Receive the grace of Mother Neel Saraswati on the auspicious day of Basant Panchami. ✨",
      benefits: [
        "बुद्धि, स्मरण शक्ति और एकाग्रता में वृद्धि पाएँगे",
        "वाणी में मधुरता, प्रभाव और आत्मविश्वास अनुभव करेंगे",
        "नकारात्मकता, भय और मानसिक जड़ता से मुक्ति पाएँगे",
      ],
      benefitsEn: [
        "Will attain increase in intellect, memory power and concentration",
        "Will experience sweetness, impact and confidence in speech",
        "Will get freedom from negativity, fear and mental inertia",
      ],
      callToAction:
        "🙏 भाग लें और माँ नील सरस्वती की कृपा से जीवन में ज्ञान और संतुलन अनुभव करें।",
      callToActionEn:
        "🙏 Participate and experience knowledge and balance in life through Mother Neel Saraswati's grace.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह प्राचीन सरस्वती मंदिर विद्या, कला और ज्ञान का पवित्र केंद्र है।",
      locationEn:
        "This ancient Saraswati temple of Prayagraj is a sacred center of knowledge, art and wisdom.",

      deityForm:
        "यहाँ विराजमान माँ नील सरस्वती का विशेष रूप विद्या, बुद्धि और वाणी की सिद्धि के लिए पूजनीय है।",
      deityFormEn:
        "The special form of Mother Neel Saraswati present here is worshipable for accomplishment of knowledge, wisdom and speech.",

      selfManifested:
        "इस मंदिर में स्थापित नील सरस्वती प्रतिमा स्वयंभू मानी जाती है जो तंत्र साधना के लिए विशेष फलदायी है।",
      selfManifestedEn:
        "The Neel Saraswati idol installed in this temple is considered self-manifested, which is especially fruitful for tantric sadhana.",

      importance:
        "शुक्रवार, विशेषकर बसंत पंचमी के दिन माँ नील सरस्वती की पूजा-अर्चना और स्तोत्र पाठ करने से विद्या, बुद्धि और वाणी में अद्भुत वृद्धि होती है।",
      importanceEn:
        "On Friday, especially on Basant Panchami day, worshiping Mother Neel Saraswati and reciting her stotra leads to amazing increase in knowledge, wisdom and speech.",

      combinedBenefits:
        "विशेषकर बसंत पंचमी के दिन त्रिवेणी स्नान के पश्चात माँ नील सरस्वती के दर्शन करने से अध्ययन, संगीत, कला और आध्यात्मिक साधना में सिद्धि प्राप्त होती है।",
      combinedBenefitsEn:
        "Especially on Basant Panchami day, after Triveni bath, having darshan of Mother Neel Saraswati leads to accomplishment in studies, music, art and spiritual sadhana.",

      stotraConnection:
        "इसी पावन स्थल से नील सरस्वती स्तोत्र पाठ का गहरा संबंध माना जाता है।",
      stotraConnectionEn:
        "Neel Saraswati Stotra Path is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "शास्त्रों में कहा गया है— 'या देवी सर्वभूतेषु बुद्धिरूपेण संस्थिता'। अर्थात माँ सरस्वती सभी प्राणियों में बुद्धि रूप में विद्यमान हैं।",
      scripturalReferenceEn:
        "It is said in scriptures— 'Ya Devi Sarvabhuteshu Buddhirupena Samsthita'. Meaning, Mother Saraswati exists in all beings in the form of intellect.",

      chantingBenefits:
        "बसंत पंचमी के दिन नील सरस्वती स्तोत्र पाठ करने से विद्या, विवेक और तर्क शक्ति में तीव्र वृद्धि, स्मरण शक्ति एवं एकाग्रता का विकास, साधना, अध्ययन एवं निर्णयों में स्पष्टता प्राप्त होती है।",
      chantingBenefitsEn:
        "Reciting Neel Saraswati Stotra on Basant Panchami day leads to rapid increase in knowledge, discretion and reasoning power, development of memory power and concentration, and clarity in sadhana, studies and decisions.",

      basantPanchamiSignificance:
        "बसंत पंचमी को माँ सरस्वती का प्राकट्य दिवस माना गया है। यह दिन विद्या, कला, संगीत, लेखन और आध्यात्मिक साधना के लिए अत्यंत शुभ होता है।",
      basantPanchamiSignificanceEn:
        "Basant Panchami is considered the manifestation day of Mother Saraswati. This day is extremely auspicious for knowledge, art, music, writing and spiritual sadhana.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और नील सरस्वती आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Neel Saraswati worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, माँ नील सरस्वती की कृपा, बसंत पंचमी की विशेष उपासना तथा नील सरस्वती स्तोत्र पाठ आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Mother Neel Saraswati, special worship on Basant Panchami and Neel Saraswati Stotra Path organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "विद्या और बौद्धिक स्थिरता",
        titleEn: "Knowledge and intellectual stability",
        description:
          "माँ नील सरस्वती की पूजा से अध्ययन में आने वाली बाधाएँ दूर होती हैं। बुद्धि स्थिर होती है और ज्ञान ग्रहण करने की क्षमता बढ़ती है। विद्यार्थियों, शोधकर्ताओं और ज्ञान-साधकों के लिए यह पूजा विशेष लाभकारी है।",
        descriptionEn:
          "Worship of Mother Neel Saraswati removes obstacles coming in studies. Intellect becomes stable and capacity to acquire knowledge increases. This worship is especially beneficial for students, researchers and knowledge seekers.",
      },
      {
        title: "वाणी एवं अभिव्यक्ति की शक्ति",
        titleEn: "Power of speech and expression",
        description:
          "इस उपासना से वाणी में प्रभाव, आत्मविश्वास और स्पष्टता आती है। शिक्षक, विद्यार्थी, वक्ता, लेखक, कवि और कलाकार विशेष लाभ प्राप्त करते हैं। नील सरस्वती स्तोत्र का नियमित पाठ वाक् सिद्धि प्रदान करता है।",
        descriptionEn:
          "This worship brings impact, confidence and clarity in speech. Teachers, students, speakers, writers, poets and artists receive special benefits. Regular recitation of Neel Saraswati Stotra provides speech accomplishment.",
      },
      {
        title: "मानसिक शांति और भय से मुक्ति",
        titleEn: "Mental peace and freedom from fear",
        description:
          "नील सरस्वती स्तोत्र का पाठ मानसिक भ्रम, भय, तनाव, अवसाद और नकारात्मक विचारों को नष्ट कर चित्त को शांत करता है। यह साधना मानसिक स्थिरता और भावनात्मक संतुलन प्रदान करती है।",
        descriptionEn:
          "Recitation of Neel Saraswati Stotra destroys mental confusion, fear, stress, depression and negative thoughts, pacifying the mind. This sadhana provides mental stability and emotional balance.",
      },
      {
        title: "आध्यात्मिक संरक्षण और विवेक",
        titleEn: "Spiritual protection and discretion",
        description:
          "यह साधना व्यक्ति को तामसिक प्रवृत्तियों, अज्ञान और भौतिक मोह से ऊपर उठाकर धर्म, ज्ञान और आत्मिक उन्नति के मार्ग पर अग्रसर करती है। माँ नील सरस्वती की कृपा से साधक को आध्यात्मिक संरक्षण और दिव्य विवेक प्राप्त होता है।",
        descriptionEn:
          "This sadhana elevates a person above tamasic tendencies, ignorance and material attachment, leading them on the path of dharma, knowledge and spiritual progress. Through Mother Neel Saraswati's grace, the seeker attains spiritual protection and divine discretion.",
      },
      {
        title: "विद्यार्थियों के लिए विशेष लाभ",
        titleEn: "Special benefits for students",
        description:
          "माँ नील सरस्वती विद्या-बुद्धि-विवेक की अधिष्ठात्री देवी हैं। उनकी आराधना से विद्यार्थी को प्रज्ञा, एकाग्रता एवं ज्ञान-सिद्धि प्राप्त होती है। परीक्षाओं, प्रतियोगिताओं और अध्ययन में सफलता के लिए यह पूजा अत्यंत शुभ है।",
        descriptionEn:
          "Mother Neel Saraswati is the presiding goddess of knowledge-wisdom-discretion. Through her worship, students attain wisdom, concentration and accomplishment of knowledge. This worship is extremely auspicious for success in exams, competitions and studies.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "नील सरस्वती पूजन एवं आवाहन",
      "नील सरस्वती स्तोत्र पाठ",
      "108 बार मंत्र जाप",
      "हवन एवं आहुति",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Neel Saraswati Poojan and Invocation",
      "Neel Saraswati Stotra Path",
      "108 times Mantra Jaap",
      "Havan and Ahuti",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "नील सरस्वती स्तोत्र पाठ",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Neel Saraswati Stotra Path",
      "All worship materials",
      "Havan materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/saraswati-temple.jpg",
      "https://example.com/neel-saraswati-idol.jpg",
      "https://example.com/basant-panchami.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "नील सरस्वती",
        "सरस्वती पूजा",
        "बसंत पंचमी",
        "विद्या",
        "बुद्धि",
        "वाणी",
        "प्रयागराज",
        "स्तोत्र पाठ",
      ],
      keywordsEn: [
        "Neel Saraswati",
        "Saraswati Pooja",
        "Basant Panchami",
        "Knowledge",
        "Wisdom",
        "Speech",
        "Prayagraj",
        "Stotra Path",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["विद्यार्थी", "शिक्षक", "कलाकार", "लेखक", "सभी आयु वर्ग"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 5,
    date: "2026-01-24T18:00:00",
    day: "Saturday",
    dayHi: "शनिवार",

    // Lunar date details
    tithi: "षष्ठी",
    tithiEn: "Shashthi",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "24/01/26",
    dateHindi: "24 जनवरी 2026",

    category: [
      "शनि दोष निवारण",
      "कर्म शुद्धि",
      "स्थिरता",
      "न्याय",
      "ग्रह शांति",
    ],
    categoryEn: [
      "Shani Dosh Removal",
      "Karma Purification",
      "Stability",
      "Justice",
      "Planetary Peace",
    ],
    deity: ["Lord Shani"],
    deityHi: ["शनिदेव"],
    poojaName: "शनि दोष निवारण पूजा एवं शनि वैदिक मंत्र जाप",
    poojaNameEn: "Shani Dosh Nivaran Pooja and Shani Vedic Mantra Jaap",

    // Mantra details
    mantra: "ॐ शं शनैश्चराय नमः",
    mantraEn: "Om Sham Shanaishcharaya Namah",
    specificMantra: "शनि वैदिक मंत्र",
    specificMantraEn: "Shani Vedic Mantra",
    mantraMeaning: "कर्म शुद्धि और शनि दोष निवारण का मंत्र",
    mantraMeaningEn: "Mantra for karma purification and Shani dosh removal",
    jaapSankhya: 23000,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title:
          "जब जीवन में निरंतर संघर्ष बढ़ने लगे, कर्म करने के बाद भी फल में विलंब हो",
        titleEn:
          "When continuous struggle increases in life, even after performing karma, there is delay in results",
        content:
          "“जब जीवन में निरंतर संघर्ष बढ़ने लगे,कर्म करने के बाद भी फल में विलंब हो,मेहनत व्यर्थ प्रतीत हो और भाग्य साथ न दे, तब न्यायप्रिय शनिदेव की कृपा मानव जीवन को धैर्य, अनुशासन और स्थिरता प्रदान करती है। शनि दोष निवारण पूजा एवं शनि वैदिक मंत्र जाप कर्मों की शुद्धि कर, दुःख, बाधा और कष्टों का नाश कर जीवन में संतुलन, सुरक्षा और उन्नति का मार्ग प्रशस्त करता है।",
        contentEn:
          "When continuous struggle increases in life, even after performing karma, there is delay in results Hard work seems futile and luck doesn't support, then the grace of justice-loving Lord Shani provides patience, discipline and stability to human life. Shani Dosh Nivaran Pooja and Shani Vedic Mantra Jaap purifies karmas, destroys sorrow, obstacles and troubles, paving the way for balance, protection and progress in life.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title: "शनि दोष निवारण पूजा से प्राप्त होने वाले दिव्य आशीर्वाद",
        titleEn: "Divine blessings received from Shani Dosh Nivaran Pooja",
        blessings: [
          "शनि दोष, साढ़ेसाती, ढैय्या एवं ग्रह बाधाओं से मुक्ति",
          "कर्मों के दुष्प्रभाव में कमी और जीवन में स्थिर प्रगति",
          "मानसिक तनाव, भय, आर्थिक रुकावट एवं संघर्षों से राहत",
        ],
        blessingsEn: [
          "Freedom from Shani dosh, Sade Sati, Dhaiya and planetary obstacles",
          "Reduction in bad effects of karmas and stable progress in life",
          "Relief from mental stress, fear, economic obstacles and struggles",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों करें पूजा शनिदेव की",
        titleEn: "Why worship Lord Shani",
        content:
          "शनिदेव कर्मफल दाता हैं। वे मनुष्य को उसके किए गए कर्मों के अनुसार फल प्रदान करते हैं। जब शनि अशुभ स्थिति में होते हैं, तब जीवन में विलंब, बाधा, रोग, भय और मानसिक दबाव उत्पन्न होता है। जो भक्त श्रद्धा, नियम और शुद्ध भाव से शनि दोष निवारण पूजा एवं शनि वैदिक मंत्र जाप करता है, उसे शनिदेव की कृपा से कर्म शुद्धि, आत्मबल, धैर्य और स्थायी सफलता प्राप्त होती है।",
        contentEn:
          "Lord Shani is the giver of karmic results. He provides results to humans according to their performed karmas. When Shani is in an inauspicious position, then delay, obstacles, diseases, fear and mental pressure arise in life. The devotee who performs Shani Dosh Nivaran Pooja and Shani Vedic Mantra Jaap with devotion, discipline and pure feelings, attains karma purification, inner strength, patience and permanent success through Lord Shani's grace.",
      },
    ],

    laabh: [
      "शनि दोष निवारण एवं कर्म शुद्धि",
      "आर्थिक एवं कार्यक्षेत्र में स्थिरता",
      "मानसिक शांति और आत्मबल",
      "आध्यात्मिक संरक्षण और अनुशासन",
    ],
    laabhEn: [
      "Shani Dosh Removal and Karma Purification",
      "Economic and work field stability",
      "Mental peace and inner strength",
      "Spiritual protection and discipline",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "शनि मंदिर, प्रयागराज",
    placeEn: "Shani Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image:
      "https://www.jagranimages.com/images/newimg/23062023/23_06_2023-shani_mantra_23449616.jpg",
    description:
      "शनि दोष निवारण पूजा एवं वैदिक मंत्र जाप से ग्रह शांति और कर्म शुद्धि",
    descriptionEn:
      "Shani Dosh Nivaran Pooja and Vedic Mantra Jaap for planetary peace and karma purification",

    // Pooja details section
    poojaDetails: {
      title:
        "🔥 कर्म बाधाओं से मुक्ति और जीवन में स्थिरता प्राप्त करने का दिव्य अवसर! 🔥",
      titleEn:
        "🔥 Divine opportunity to get freedom from karmic obstacles and attain stability in life! 🔥",
      questions: [
        "क्या जीवन में बार-बार रुकावटें आ रही हैं?",
        "क्या मेहनत के अनुसार फल नहीं मिल पा रहा?",
        "क्या साढ़ेसाती, ढैय्या या शनि दोष से पीड़ित हैं?",
      ],
      questionsEn: [
        "Are obstacles coming repeatedly in life?",
        "Are results not being received according to hard work?",
        "Are you suffering from Sade Sati, Dhaiya or Shani dosh?",
      ],
      opportunity:
        "✨ शनि दोष निवारण पूजा एवं शनि वैदिक मंत्र जाप में सम्मिलित होकर आप—",
      opportunityEn:
        "✨ By participating in Shani Dosh Nivaran Pooja and Shani Vedic Mantra Jaap, you—",
      benefits: [
        "शनि दोष एवं ग्रह बाधाओं से राहत पाएँगे",
        "जीवन में अनुशासन, स्थिरता और सुरक्षा अनुभव करेंगे",
        "आर्थिक, मानसिक और पारिवारिक कष्टों से मुक्ति पाएँगे",
      ],
      benefitsEn: [
        "Will get relief from Shani dosh and planetary obstacles",
        "Will experience discipline, stability and security in life",
        "Will get freedom from economic, mental and family troubles",
      ],
      callToAction: "🙏 शनिदेव की कृपा से अपने जीवन को संतुलित और सफल बनाएं।",
      callToActionEn:
        "🙏 Make your life balanced and successful through Lord Shani's grace.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह प्राचीन शनि मंदिर कर्म शुद्धि और ग्रह शांति के लिए प्रसिद्ध है।",
      locationEn:
        "This ancient Shani temple of Prayagraj is famous for karma purification and planetary peace.",

      deityForm:
        "यहाँ विराजमान शनिदेव का विशेष रूप कर्मफल देने और न्याय करने वाले स्वरूप में पूजनीय है।",
      deityFormEn:
        "The special form of Lord Shani present here is worshipable in the form of giving karmic results and delivering justice.",

      selfManifested:
        "इस मंदिर में स्थापित शनि प्रतिमा स्वयंभू मानी जाती है जो साढ़ेसाती और शनि दोष निवारण के लिए विशेष फलदायी है।",
      selfManifestedEn:
        "The Shani idol installed in this temple is considered self-manifested, which is especially fruitful for Sade Sati and Shani dosh removal.",

      importance:
        "शनिवार का दिन शनिदेव का प्रिय दिवस माना जाता है। इस दिन शनि दोष निवारण पूजा एवं शनि वैदिक मंत्र जाप करने से जीवन की बाधाएँ दूर होती हैं और कर्मों का शुद्धिकरण होता है।",
      importanceEn:
        "Saturday is considered the favorite day of Lord Shani. Performing Shani Dosh Nivaran Pooja and Shani Vedic Mantra Jaap on this day removes life's obstacles and purifies karmas.",

      combinedBenefits:
        "विशेषकर शनिवार के दिन त्रिवेणी स्नान के पश्चात शनिदेव के दर्शन करने से साढ़ेसाती, ढैय्या और शनि दोष का शमन होता है तथा जीवन में स्थिरता आती है।",
      combinedBenefitsEn:
        "Especially on Saturday, after Triveni bath, having darshan of Lord Shani pacifies Sade Sati, Dhaiya and Shani dosh, and stability comes in life.",

      vedicMantraConnection:
        "इसी पावन स्थल से शनि वैदिक मंत्र जाप का गहरा संबंध माना जाता है।",
      vedicMantraConnectionEn:
        "Shani Vedic Mantra Jaap is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "शास्त्रों में कहा गया है— 'शनैश्चरः शनैः शनैः फलदः'। अर्थात शनिदेव धीरे-धीरे किंतु स्थायी फल प्रदान करते हैं।",
      scripturalReferenceEn:
        "It is said in scriptures— 'Shanaishcharah Shanaih Shanaih Phaladah'. Meaning, Lord Shani provides results slowly but permanently.",

      chantingBenefits:
        "शनि वैदिक मंत्र जाप से विशेष फल: शनि दोष, साढ़ेसाती एवं ढैय्या का शमन, जीवन में स्थायित्व, धैर्य और न्यायबोध, भय, रोग, दरिद्रता एवं मानसिक दबाव में कमी।",
      chantingBenefitsEn:
        "Special results from Shani Vedic Mantra Jaap: Pacification of Shani dosh, Sade Sati and Dhaiya, permanence, patience and sense of justice in life, reduction in fear, diseases, poverty and mental pressure.",

      sadeSatiSignificance:
        "शनि की साढ़ेसाती एवं ढैय्या अवधि में यह पूजा विशेष रूप से फलदायी होती है और जीवन के संघर्षों को कम करती है।",
      sadeSatiSignificanceEn:
        "During the period of Shani's Sade Sati and Dhaiya, this worship is especially fruitful and reduces life's struggles.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और शनि आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Shani worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, शनिदेव की कृपा, शनिवार की विशेष उपासना तथा शनि वैदिक मंत्र जाप आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Lord Shani, special worship on Saturday and Shani Vedic Mantra Jaap organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "शनि दोष निवारण एवं कर्म शुद्धि",
        titleEn: "Shani Dosh Removal and Karma Purification",
        description:
          "इस पूजा से कुंडली के शनि दोष शांत होते हैं और जीवन की बाधाएँ दूर होती हैं। साढ़ेसाती, ढैय्या और शनि की महादशा-अंतर्दशा के दुष्प्रभाव कम होते हैं। शनि वैदिक मंत्र जाप से पूर्व जन्म के कर्मों का शुद्धिकरण होता है और नए शुभ कर्मों का संचय होता है।",
        descriptionEn:
          "This worship pacifies Shani dosh in the horoscope and removes life's obstacles. The bad effects of Sade Sati, Dhaiya and Shani's Mahadasha-Antardasha are reduced. Shani Vedic Mantra Jaap purifies karmas of previous births and accumulates new auspicious karmas.",
      },
      {
        title: "आर्थिक एवं कार्यक्षेत्र में स्थिरता",
        titleEn: "Economic and work field stability",
        description:
          "रोज़गार, व्यापार और धन संबंधी समस्याओं में सुधार होता है। नौकरी में प्रमोशन, व्यापार में वृद्धि और आर्थिक स्थिरता प्राप्त होती है। शनिदेव की कृपा से धन का अपव्यय रुकता है और संसाधनों का सदुपयोग होता है।",
        descriptionEn:
          "Improvement occurs in employment, business and money-related problems. Promotion in job, growth in business and economic stability are attained. Through Lord Shani's grace, wasteful expenditure of wealth stops and resources are utilized properly.",
      },
      {
        title: "मानसिक शांति और आत्मबल",
        titleEn: "Mental peace and inner strength",
        description:
          "शनि मंत्र जाप से भय, तनाव, अनिश्चितता, अवसाद और मानसिक दबाव कम होता है। चित्त को शांति मिलती है और आत्मविश्वास बढ़ता है। शनिदेव की कृपा से व्यक्ति जीवन के संघर्षों का सामना करने का साहस प्राप्त करता है।",
        descriptionEn:
          "Shani mantra jaap reduces fear, stress, uncertainty, depression and mental pressure. The mind attains peace and confidence increases. Through Lord Shani's grace, a person gains courage to face life's struggles.",
      },
      {
        title: "आध्यात्मिक संरक्षण और अनुशासन",
        titleEn: "Spiritual protection and discipline",
        description:
          "यह साधना व्यक्ति को धर्म, सत्य, न्याय और कर्मयोग के मार्ग पर अग्रसर करती है। शनिदेव की कृपा से व्यक्ति अनुशासित जीवन जीना सीखता है और आध्यात्मिक संरक्षण प्राप्त करता है। यह पूजा अहंकार को दूर कर विनम्रता विकसित करती है।",
        descriptionEn:
          "This sadhana leads a person on the path of dharma, truth, justice and karmayoga. Through Lord Shani's grace, a person learns to live a disciplined life and attains spiritual protection. This worship removes ego and develops humility.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "शनि पूजन एवं आवाहन",
      "शनि वैदिक मंत्र जाप",
      "तेल अभिषेक",
      "हवन एवं आहुति",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Shani Poojan and Invocation",
      "Shani Vedic Mantra Jaap",
      "Oil Abhishek",
      "Havan and Ahuti",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "शनि वैदिक मंत्र जाप",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "तेल अभिषेक सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Shani Vedic Mantra Jaap",
      "All worship materials",
      "Havan materials",
      "Oil Abhishek materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/shani-temple.jpg",
      "https://example.com/shani-idol.jpg",
      "https://example.com/shanivar-vrat.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "शनि दोष निवारण",
        "शनि पूजा",
        "साढ़ेसाती",
        "ढैय्या",
        "कर्म शुद्धि",
        "ग्रह शांति",
        "प्रयागराज",
        "वैदिक मंत्र",
      ],
      keywordsEn: [
        "Shani Dosh Nivaran",
        "Shani Pooja",
        "Sade Sati",
        "Dhaiya",
        "Karma Purification",
        "Planetary Peace",
        "Prayagraj",
        "Vedic Mantra",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["सभी आयु वर्ग", "व्यापारी", "नौकरीपेशा", "गृहस्थ"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 6,
    date: "2026-01-25T18:00:00",
    day: "Sunday",
    dayHi: "रविवार",

    // Lunar date details
    tithi: "सप्तमी",
    tithiEn: "Saptami",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "25/01/26",
    dateHindi: "25 जनवरी 2026",

    category: ["आत्मबल", "स्वास्थ्य", "तेज", "यश", "ऊर्जा", "सफलता"],
    categoryEn: [
      "Self-confidence",
      "Health",
      "Radiance",
      "Fame",
      "Energy",
      "Success",
    ],
    deity: ["Lord Surya"],
    deityHi: ["सूर्यदेव"],
    poojaName: "सूर्य पूजा एवं आदित्य हृदय स्तोत्र पाठ",
    poojaNameEn: "Surya Pooja and Aditya Hridaya Stotra Path",

    // Mantra details
    mantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः",
    mantraEn: "Om Hram Hrim Hraum Sah Suryaya Namah",
    specificMantra: "आदित्य हृदय स्तोत्र मंत्र",
    specificMantraEn: "Aditya Hridaya Stotra Mantra",
    mantraMeaning: "आत्मबल, तेज और स्वास्थ्य प्रदान करने का मंत्र",
    mantraMeaningEn:
      "Mantra for providing self-confidence, radiance and health",
    jaapSankhya: 108,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title:
          "निर्णय लेने की शक्ति कमजोर पड़ जाए, मान-सम्मान, स्वास्थ्य और तेज में कमी अनुभव हो",
        titleEn:
          "When decision-making power weakens, decrease is experienced in respect, health and radiance",
        content:
          "निर्णय लेने की शक्ति कमजोर पड़ जाए,मान-सम्मान, स्वास्थ्य और तेज में कमी अनुभव हो,और निरंतर प्रयासों के बाद भी सफलता दूर प्रतीत हो, तब जगत के प्रत्यक्ष देव सूर्यदेव की कृपा मानव जीवन में ऊर्जा, आत्मविश्वास और स्पष्टता का संचार करती है। सूर्य पूजा एवं आदित्य हृदय स्तोत्र पाठ आत्मबल को जाग्रत कर, रोग, भय और नकारात्मकता का नाश कर जीवन में तेज, यश, स्वास्थ्य और सफलता का मार्ग प्रशस्त करता है।",
        contentEn:
          "When decision-making power weakens, decrease is experienced in respect, health and radiance. And even after continuous efforts, success seems distant, then the grace of the visible god of the world, Lord Surya, infuses human life with energy, self-confidence and clarity. Surya Pooja and Aditya Hridaya Stotra Path awakens inner strength, destroys diseases, fear and negativity, paving the way for radiance, fame, health and success in life.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title:
          "सूर्य पूजा एवं आदित्य हृदय स्तोत्र पाठ से प्राप्त होने वाले दिव्य आशीर्वाद",
        titleEn:
          "Divine blessings received from Surya Pooja and Aditya Hridaya Stotra Path",
        blessings: [
          "आत्मबल, आत्मविश्वास एवं तेज में वृद्धि",
          "रोग, मानसिक दुर्बलता एवं नकारात्मक प्रभावों से मुक्ति",
          "मान-सम्मान, नेतृत्व क्षमता एवं कार्यसफलता में वृद्धि",
        ],
        blessingsEn: [
          "Increase in self-confidence, self-belief and radiance",
          "Freedom from diseases, mental weakness and negative effects",
          "Increase in respect, leadership ability and work success",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों करें सूर्यदेव की पूजा",
        titleEn: "Why worship Lord Surya",
        content:
          "सूर्यदेव समस्त ग्रहों के राजा, आत्मा के कारक और जीवन के आधार हैं। उनके प्रकाश से ही संसार में चेतना, ऊर्जा और जीवन का संचालन होता है। जब सूर्य कमजोर या अशुभ प्रभाव में होते हैं, तब व्यक्ति में आत्मविश्वास की कमी, स्वास्थ्य समस्याएँ, मान-प्रतिष्ठा में गिरावट और निर्णय क्षमता में भ्रम उत्पन्न होता है। जो भक्त श्रद्धा, नियम और शुद्ध भाव से सूर्य पूजा एवं आदित्य हृदय स्तोत्र पाठ कराता है, उसे सूर्यदेव की कृपा से आरोग्य, तेज, साहस, यश और स्थायी सफलता प्राप्त होती है।",
        contentEn:
          "Lord Surya is the king of all planets, the indicator of soul and the basis of life. It is through his light that consciousness, energy and life operate in the world. When Surya is weak or under inauspicious influence, then lack of self-confidence, health problems, decline in respect-prestige and confusion in decision-making capacity arise in a person. The devotee who performs Surya Pooja and Aditya Hridaya Stotra Path with devotion, discipline and pure feelings, attains health, radiance, courage, fame and permanent success through Lord Surya's grace.",
      },
    ],

    laabh: [
      "आत्मबल एवं ऊर्जा की प्राप्ति",
      "स्वास्थ्य एवं रोग निवारण",
      "मान-सम्मान एवं कार्यसफलता",
      "आध्यात्मिक तेज एवं संरक्षण",
    ],
    laabhEn: [
      "Attainment of self-confidence and energy",
      "Health and disease relief",
      "Respect and work success",
      "Spiritual radiance and protection",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "सूर्य मंदिर, प्रयागराज",
    placeEn: "Surya Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image:
      "https://www.jagranimages.com/images/newimg/04082024/07_03_2021-surya-108-names_21437139%20(1)%20(2).jpg",
    description:
      "सूर्य पूजा एवं आदित्य हृदय स्तोत्र पाठ से आत्मबल, तेज और स्वास्थ्य की प्राप्ति",
    descriptionEn:
      "Surya Pooja and Aditya Hridaya Stotra Path for attainment of self-confidence, radiance and health",

    // Pooja details section
    poojaDetails: {
      title:
        "🔥 सूर्यदेव—समस्त ग्रहों के अधिपति—की कृपा से आत्मबल, तेज, आरोग्य और जीवन में दिव्य प्रकाश जाग्रत करने का पावन पवित्र अनुष्ठान! 🔥",
      titleEn:
        "🔥 Sacred pure ritual to awaken self-confidence, radiance, health and divine light in life through the grace of Lord Surya—the lord of all planets! 🔥",
      questions: [
        "क्या आत्मविश्वास की कमी महसूस हो रही है?",
        "क्या बार-बार रोग, थकान या मानसिक कमजोरी रहती है?",
        "क्या कार्यक्षेत्र में मान-सम्मान और सफलता में बाधा आ रही है?",
      ],
      questionsEn: [
        "Are you feeling lack of self-confidence?",
        "Are there frequent diseases, fatigue or mental weakness?",
        "Is there obstacle in respect and success in work field?",
      ],
      opportunity:
        "✨ सूर्य पूजा एवं आदित्य हृदय स्तोत्र पाठ में सम्मिलित होकर आप—",
      opportunityEn:
        "✨ By participating in Surya Pooja and Aditya Hridaya Stotra Path, you—",
      benefits: [
        "आत्मबल, साहस और नेतृत्व क्षमता प्राप्त करेंगे",
        "स्वास्थ्य, तेज और मानसिक स्पष्टता अनुभव करेंगे",
        "जीवन में यश, सम्मान और सकारात्मक ऊर्जा का संचार पाएँगे",
      ],
      benefitsEn: [
        "Will attain self-confidence, courage and leadership ability",
        "Will experience health, radiance and mental clarity",
        "Will get infusion of fame, respect and positive energy in life",
      ],
      callToAction:
        "🙏 सूर्यदेव की कृपा से अपने जीवन को तेजस्वी, स्वस्थ और सफल बनाएं।",
      callToActionEn:
        "🙏 Make your life radiant, healthy and successful through Lord Surya's grace.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह प्राचीन सूर्य मंदिर आत्मबल, तेज और स्वास्थ्य के लिए प्रसिद्ध है।",
      locationEn:
        "This ancient Surya temple of Prayagraj is famous for self-confidence, radiance and health.",

      deityForm:
        "यहाँ विराजमान सूर्यदेव का विशेष रूप सात घोड़ों के रथ पर आरूढ़, दिव्य प्रकाश से युक्त स्वरूप में पूजनीय है।",
      deityFormEn:
        "The special form of Lord Surya present here is worshipable in the form riding a chariot with seven horses, endowed with divine light.",

      selfManifested:
        "इस मंदिर में स्थापित सूर्य प्रतिमा स्वयंभू मानी जाती है जो आत्मबल और तेज वृद्धि के लिए विशेष फलदायी है।",
      selfManifestedEn:
        "The Surya idol installed in this temple is considered self-manifested, which is especially fruitful for self-confidence and radiance increase.",

      importance:
        "रविवार का दिन सूर्यदेव का प्रिय दिवस माना जाता है। इस दिन सूर्य पूजा एवं आदित्य हृदय स्तोत्र पाठ करने से आत्मविश्वास, स्वास्थ्य और तेज में अद्भुत वृद्धि होती है।",
      importanceEn:
        "Sunday is considered the favorite day of Lord Surya. Performing Surya Pooja and Aditya Hridaya Stotra Path on this day leads to amazing increase in self-confidence, health and radiance.",

      combinedBenefits:
        "विशेषकर रविवार के दिन त्रिवेणी स्नान के पश्चात सूर्यदेव के दर्शन करने से आत्मबल, शारीरिक स्वास्थ्य और मानसिक स्पष्टता प्राप्त होती है।",
      combinedBenefitsEn:
        "Especially on Sunday, after Triveni bath, having darshan of Lord Surya leads to attainment of self-confidence, physical health and mental clarity.",

      adityaHridayaConnection:
        "इसी पावन स्थल से आदित्य हृदय स्तोत्र पाठ का गहरा संबंध माना जाता है।",
      adityaHridayaConnectionEn:
        "Aditya Hridaya Stotra Path is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "शास्त्रों में कहा गया है— 'आदित्यं नमस्कृत्य सर्वपापैः प्रमुच्यते'। अर्थात सूर्यदेव को प्रणाम करने से समस्त पाप एवं बाधाएँ नष्ट हो जाती हैं।",
      scripturalReferenceEn:
        "It is said in scriptures— 'Adityam Namaskritya Sarvapapaih Pramuchyate'. Meaning, by bowing to Lord Surya, all sins and obstacles are destroyed.",

      chantingBenefits:
        "आदित्य हृदय स्तोत्र पाठ से विशेष फल: आत्मबल, साहस और तेज में वृद्धि, रोग, भय एवं मानसिक दुर्बलता का नाश, मान-सम्मान, नेतृत्व और कार्यसिद्धि की प्राप्ति।",
      chantingBenefitsEn:
        "Special results from Aditya Hridaya Stotra Path: Increase in self-confidence, courage and radiance, destruction of diseases, fear and mental weakness, attainment of respect, leadership and work accomplishment.",

      ramayanaConnection:
        "आदित्य हृदय स्तोत्र रामायण में वर्णित अत्यंत प्रभावशाली स्तोत्र है, जिसके पाठ से भगवान श्रीराम ने भी युद्ध में विजय प्राप्त की थी।",
      ramayanaConnectionEn:
        "Aditya Hridaya Stotra is an extremely powerful stotra described in Ramayana, by reciting which even Lord Shri Ram attained victory in war.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और सूर्य आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Surya worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, सूर्यदेव की कृपा, रविवार की विशेष उपासना तथा आदित्य हृदय स्तोत्र पाठ आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Lord Surya, special worship on Sunday and Aditya Hridaya Stotra Path organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "आत्मबल एवं ऊर्जा की प्राप्ति",
        titleEn: "Attainment of self-confidence and energy",
        description:
          "सूर्य पूजा से जीवन में सकारात्मक ऊर्जा और आत्मविश्वास का संचार होता है। व्यक्ति में निर्णय लेने की क्षमता बढ़ती है, मानसिक स्पष्टता आती है और जीवन के प्रति उत्साह जाग्रत होता है। आदित्य हृदय स्तोत्र पाठ से अंदरूनी शक्ति प्रकट होती है।",
        descriptionEn:
          "Surya Pooja infuses life with positive energy and self-confidence. A person's decision-making capacity increases, mental clarity comes and enthusiasm towards life awakens. Aditya Hridaya Stotra Path reveals inner strength.",
      },
      {
        title: "स्वास्थ्य एवं रोग निवारण",
        titleEn: "Health and disease relief",
        description:
          "आदित्य हृदय स्तोत्र पाठ से शारीरिक और मानसिक रोगों में राहत मिलती है। नेत्र रोग, हृदय रोग, त्वचा रोग, थकान, कमजोरी और मानसिक दुर्बलता दूर होती है। सूर्य पूजा से रोग प्रतिरोधक क्षमता बढ़ती है और शरीर में नई ऊर्जा का संचार होता है।",
        descriptionEn:
          "Aditya Hridaya Stotra Path provides relief in physical and mental diseases. Eye diseases, heart diseases, skin diseases, fatigue, weakness and mental debility are removed. Surya Pooja increases disease resistance capacity and infuses new energy in the body.",
      },
      {
        title: "मान-सम्मान एवं कार्यसफलता",
        titleEn: "Respect and work success",
        description:
          "सरकारी कार्य, पद-प्रतिष्ठा और नेतृत्व से जुड़े क्षेत्रों में उन्नति होती है। सूर्यदेव की कृपा से व्यक्ति का सम्मान बढ़ता है, कार्यक्षेत्र में सफलता मिलती है और सामाजिक प्रतिष्ठा में वृद्धि होती है। यह पूजा यश और कीर्ति प्रदान करती है।",
        descriptionEn:
          "Progress occurs in government work, position-prestige and leadership-related fields. Through Lord Surya's grace, a person's respect increases, success is attained in work field and social prestige grows. This worship provides fame and glory.",
      },
      {
        title: "आध्यात्मिक तेज एवं संरक्षण",
        titleEn: "Spiritual radiance and protection",
        description:
          "यह साधना व्यक्ति को धर्म, सत्य, प्रकाश और आत्मविकास के मार्ग पर अग्रसर करती है। सूर्यदेव की कृपा से व्यक्ति का आध्यात्मिक तेज बढ़ता है और वह नकारात्मक शक्तियों से संरक्षित रहता है। यह पूजा अंधकार को दूर कर प्रकाश का मार्ग दिखाती है।",
        descriptionEn:
          "This sadhana leads a person on the path of dharma, truth, light and self-development. Through Lord Surya's grace, a person's spiritual radiance increases and they remain protected from negative powers. This worship removes darkness and shows the path of light.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "सूर्य पूजन एवं आवाहन",
      "आदित्य हृदय स्तोत्र पाठ",
      "108 बार मंत्र जाप",
      "अर्घ्य प्रदान",
      "हवन एवं आहुति",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Surya Poojan and Invocation",
      "Aditya Hridaya Stotra Path",
      "108 times Mantra Jaap",
      "Arghya Offering",
      "Havan and Ahuti",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "आदित्य हृदय स्तोत्र पाठ",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "अर्घ्य सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Aditya Hridaya Stotra Path",
      "All worship materials",
      "Havan materials",
      "Arghya materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/surya-temple.jpg",
      "https://example.com/surya-chariot.jpg",
      "https://example.com/aditya-hridaya.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "सूर्य पूजा",
        "आदित्य हृदय स्तोत्र",
        "रविवार",
        "आत्मबल",
        "स्वास्थ्य",
        "तेज",
        "यश",
        "प्रयागराज",
      ],
      keywordsEn: [
        "Surya Pooja",
        "Aditya Hridaya Stotra",
        "Sunday",
        "Self-confidence",
        "Health",
        "Radiance",
        "Fame",
        "Prayagraj",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["सभी आयु वर्ग", "सरकारी कर्मचारी", "नेता", "अध्यात्म साधक"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 7,
    date: "2026-01-26T18:00:00",
    day: "Monday",
    dayHi: "सोमवार",

    // Lunar date details
    tithi: "अष्टमी",
    tithiEn: "Ashtami",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "26/01/26",
    dateHindi: "26 जनवरी 2026",

    category: ["शक्ति", "सौंदर्य", "सौभाग्य", "शांति", "सिद्धि", "संतुलन"],
    categoryEn: [
      "Power",
      "Beauty",
      "Good Fortune",
      "Peace",
      "Accomplishment",
      "Balance",
    ],
    deity: ["Goddess Lalita Tripurasundari"],
    deityHi: ["माता ललिता त्रिपुरसुंदरी"],
    poojaName: "माता ललिता उपासना एवं श्री ललिता सहस्त्रनाम पाठ",
    poojaNameEn: "Mata Lalita Upasana and Sri Lalita Sahastranama Path",

    // Mantra details
    mantra: "ॐ ह्रीं श्रीं ललिताम्बिकायै नमः",
    mantraEn: "Om Hreem Shreem Lalitambikayai Namah",
    specificMantra: "श्री ललिता सहस्त्रनाम मंत्र",
    specificMantraEn: "Sri Lalita Sahastranama Mantra",
    mantraMeaning: "शक्ति, सौंदर्य और सौभाग्य प्रदान करने का मंत्र",
    mantraMeaningEn: "Mantra for providing power, beauty and good fortune",
    jaapSankhya: 108,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title:
          "जब जीवन में आत्मबल डगमगाने लगे, मन अस्थिर हो जाए और निर्णय शक्ति कमजोर पड़ने लगे",
        titleEn:
          "When self-confidence starts wavering in life, mind becomes unstable and decision-making power weakens",
        content:
          "जब जीवन में आत्मबल डगमगाने लगे, मन अस्थिर हो जाए और निर्णय शक्ति कमजोर पड़ने लगे मानसिक शांति, सौभाग्य और आकर्षण में कमी अनुभव हो, और प्रयासों के बावजूद जीवन में संतुलन व संतोष न मिले, तब जगतजननी माता ललिता त्रिपुरसुंदरी की कृपा मानव जीवन में शक्ति, सौंदर्य, विवेक और पूर्णता का संचार करती है। माता ललिता की उपासना एवं श्री ललिता सहस्त्रनाम पाठ अंतःकरण को शुद्ध कर, भय, बाधा और नकारात्मकता का नाश कर जीवन में शांति, सौभाग्य, यश और सिद्धि का मार्ग प्रशस्त करता है।",
        contentEn:
          "When self-confidence starts wavering in life, mind becomes unstable and decision-making power weakens When decrease is experienced in mental peace, good fortune and attraction, and despite efforts, balance and satisfaction are not found in life, then the grace of Mother Lalita Tripurasundari, mother of the universe, infuses human life with power, beauty, discretion and completeness. Mata Lalita's worship and Sri Lalita Sahastranama Path purifies the inner being, destroys fear, obstacles and negativity, paving the way for peace, good fortune, fame and accomplishment in life.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title:
          "माता ललिता की उपासना एवं ललिता सहस्त्रनाम पाठ से प्राप्त दिव्य आशीर्वाद",
        titleEn:
          "Divine blessings received from Mata Lalita worship and Lalita Sahastranama Path",
        blessings: [
          "आत्मबल, मानसिक स्थिरता एवं आंतरिक सौंदर्य में वृद्धि",
          "भय, तनाव, मानसिक दुर्बलता एवं नकारात्मक प्रभावों से मुक्ति",
          "सौभाग्य, आकर्षण, मान-सम्मान एवं कार्यसिद्धि की प्राप्ति",
        ],
        blessingsEn: [
          "Increase in self-confidence, mental stability and inner beauty",
          "Freedom from fear, stress, mental weakness and negative effects",
          "Attainment of good fortune, attraction, respect and work accomplishment",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों करें माता ललिता की पूजा",
        titleEn: "Why worship Mata Lalita",
        content:
          "माता ललिता त्रिपुरसुंदरी संपूर्ण सृष्टि की अधिष्ठात्री, शक्ति, ज्ञान और आनंद का पूर्ण स्वरूप हैं। वे श्रीविद्या की अधिदेवता हैं, जिनकी कृपा से जीवन में संतुलन, सौंदर्य, समृद्धि और आत्मिक उन्नति प्राप्त होती है। जब जीवन में मानसिक अशांति, संबंधों में कड़वाहट, आत्मविश्वास की कमी या सौभाग्य में अवरोध आता है, तब माता ललिता की उपासना से जीवन पुनः मधुर, स्थिर और तेजस्वी बनता है। जो साधक श्रद्धा, नियम और शुद्ध भाव से श्री ललिता सहस्त्रनाम पाठ करता है, उसे माता की कृपा से सुख, सौभाग्य, आकर्षण, शांति और स्थायी सफलता प्राप्त होती है।",
        contentEn:
          "Mother Lalita Tripurasundari is the presiding deity of entire creation, the complete form of power, knowledge and bliss. She is the supreme goddess of Sri Vidya, whose grace leads to attainment of balance, beauty, prosperity and spiritual progress in life. When mental restlessness, bitterness in relationships, lack of self-confidence or obstacle in good fortune comes in life, then through Mata Lalita's worship, life becomes sweet, stable and radiant again. The seeker who performs Sri Lalita Sahastranama Path with devotion, discipline and pure feelings, attains happiness, good fortune, attraction, peace and permanent success through Mother's grace.",
      },
    ],

    laabh: [
      "मनोवांछित फल एवं कार्यों में शीघ्र सिद्धि",
      "आंतरिक एवं बाह्य सौंदर्य में वृद्धि",
      "भय, शंका एवं भ्रम से मुक्ति",
      "श्रीविद्या की सूक्ष्म कृपा एवं बुद्धि प्रखरता",
      "संबंधों में सामंजस्य एवं प्रेम का विस्तार",
    ],
    laabhEn: [
      "Swift accomplishment of desired results and works",
      "Increase in internal and external beauty",
      "Freedom from fear, doubt and confusion",
      "Subtle grace of Sri Vidya and sharpness of intellect",
      "Harmony in relationships and expansion of love",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "देवी मंदिर, प्रयागराज",
    placeEn: "Devi Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image:
      "https://shrilalitasahasranama.com/wp-content/uploads/2025/10/lalita-sahasranama.jpg",
    description:
      "माता ललिता उपासना एवं सहस्त्रनाम पाठ से शक्ति, सौंदर्य और सौभाग्य की प्राप्ति",
    descriptionEn:
      "Mata Lalita worship and Sahastranama Path for attainment of power, beauty and good fortune",

    // Pooja details section
    poojaDetails: {
      title:
        "🔥 जगतजननी माता ललिता त्रिपुरसुंदरी — शक्ति, सौंदर्य और करुणा की साक्षात् मूर्ति — की कृपा से जीवन में शांति, सौभाग्य और सिद्धि जाग्रत करने का दिव्य अनुष्ठान! 🔥",
      titleEn:
        "🔥 Divine ritual to awaken peace, good fortune and accomplishment in life through the grace of Mother Lalita Tripurasundari—the visible form of power, beauty and compassion! 🔥",
      questions: [
        "क्या मन में निरंतर अशांति या भय बना रहता है?",
        "क्या संबंधों, विवाह या पारिवारिक जीवन में बाधाएँ आ रही हैं?",
        "क्या जीवन में सौभाग्य, आकर्षण और संतुलन की कमी अनुभव हो रही है?",
      ],
      questionsEn: [
        "Does restlessness or fear remain constantly in the mind?",
        "Are there obstacles in relationships, marriage or family life?",
        "Are you experiencing lack of good fortune, attraction and balance in life?",
      ],
      opportunity:
        "✨ माता ललिता की उपासना एवं ललिता सहस्त्रनाम पाठ में सम्मिलित होकर आप—",
      opportunityEn:
        "✨ By participating in Mata Lalita worship and Lalita Sahastranama Path, you—",
      benefits: [
        "मानसिक शांति, आत्मबल और भावनात्मक संतुलन पाएँगे",
        "सौभाग्य, आकर्षण और जीवन में मधुरता अनुभव करेंगे",
        "कार्यों में सिद्धि, यश और सकारात्मक ऊर्जा का संचार पाएँगे",
      ],
      benefitsEn: [
        "Will attain mental peace, self-confidence and emotional balance",
        "Will experience good fortune, attraction and sweetness in life",
        "Will get accomplishment in works, fame and infusion of positive energy",
      ],
      callToAction:
        "🙏 माता ललिता की कृपा से अपने जीवन को सौंदर्य, शांति और पूर्णता से भरें।",
      callToActionEn:
        "🙏 Fill your life with beauty, peace and completeness through Mata Lalita's grace.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह प्राचीन देवी मंदिर शक्ति, सौंदर्य और सौभाग्य के लिए प्रसिद्ध है।",
      locationEn:
        "This ancient Devi temple of Prayagraj is famous for power, beauty and good fortune.",

      deityForm:
        "यहाँ विराजमान माता ललिता त्रिपुरसुंदरी का विशेष रूप श्रीविद्या की अधिष्ठात्री देवी के रूप में पूजनीय है।",
      deityFormEn:
        "The special form of Mother Lalita Tripurasundari present here is worshipable as the presiding goddess of Sri Vidya.",

      selfManifested:
        "इस मंदिर में स्थापित ललिता प्रतिमा स्वयंभू मानी जाती है जो शक्ति और सौंदर्य की साधना के लिए विशेष फलदायी है।",
      selfManifestedEn:
        "The Lalita idol installed in this temple is considered self-manifested, which is especially fruitful for power and beauty sadhana.",

      importance:
        "सोमवार का दिन माता ललिता का प्रिय दिवस माना जाता है। इस दिन ललिता उपासना एवं ललिता सहस्त्रनाम पाठ करने से सौभाग्य, आकर्षण और मानसिक शांति में अद्भुत वृद्धि होती है।",
      importanceEn:
        "Monday is considered the favorite day of Mata Lalita. Performing Lalita worship and Lalita Sahastranama Path on this day leads to amazing increase in good fortune, attraction and mental peace.",

      combinedBenefits:
        "विशेषकर सोमवार के दिन त्रिवेणी स्नान के पश्चात माता ललिता के दर्शन करने से शक्ति, सौंदर्य और सौभाग्य की प्राप्ति होती है।",
      combinedBenefitsEn:
        "Especially on Monday, after Triveni bath, having darshan of Mata Lalita leads to attainment of power, beauty and good fortune.",

      lalitaSahastranamaConnection:
        "इसी पावन स्थल से ललिता सहस्त्रनाम पाठ का गहरा संबंध माना जाता है।",
      lalitaSahastranamaConnectionEn:
        "Lalita Sahastranama Path is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "शास्त्रों में कहा गया है— 'ललितां भजते यो हि स मुक्तः सर्वबन्धनात्'। अर्थात जो माता ललिता की उपासना करता है, वह समस्त बंधनों से मुक्त हो जाता है।",
      scripturalReferenceEn:
        "It is said in scriptures— 'Lalitam Bhajate Yo Hi Sa Muktah Sarvabandhanat'. Meaning, whoever worships Mata Lalita, becomes free from all bonds.",

      chantingBenefits:
        "ललिता सहस्त्रनाम पाठ से विशेष फल: मानसिक शांति, आत्मबल एवं सौंदर्य में वृद्धि, भय, तनाव एवं नकारात्मक शक्तियों का नाश, सौभाग्य, वैवाहिक सुख, मान-सम्मान एवं कार्यसिद्धि।",
      chantingBenefitsEn:
        "Special results from Lalita Sahastranama Path: Increase in mental peace, self-confidence and beauty, destruction of fear, stress and negative powers, good fortune, marital happiness, respect and work accomplishment.",

      sriVidyaSignificance:
        "माता ललिता श्रीविद्या की अधिदेवता हैं। उनकी उपासना से साधक को सूक्ष्म ज्ञान, बुद्धि की प्रखरता और आध्यात्मिक उन्नति प्राप्त होती है।",
      sriVidyaSignificanceEn:
        "Mother Lalita is the supreme goddess of Sri Vidya. Through her worship, the seeker attains subtle knowledge, sharpness of intellect and spiritual progress.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और ललिता आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Lalita worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, माता ललिता की कृपा, सोमवार की विशेष उपासना तथा ललिता सहस्त्रनाम पाठ आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Mata Lalita, special worship on Monday and Lalita Sahastranama Path organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "मनोवांछित फल एवं कार्यों में शीघ्र सिद्धि",
        titleEn: "Swift accomplishment of desired results and works",
        description:
          "माता ललिता की कृपा से रुके हुए कार्य गति पकड़ते हैं और साधक को मनचाहा फल प्राप्त होता है। ललिता सहस्त्रनाम पाठ से बाधाएँ दूर होती हैं और कार्यों में सफलता मिलती है। यह उपासना मनोरथ पूर्ति के लिए अत्यंत शुभ है।",
        descriptionEn:
          "Through Mata Lalita's grace, stalled works gain momentum and the seeker attains desired results. Lalita Sahastranama Path removes obstacles and brings success in works. This worship is extremely auspicious for fulfillment of desires.",
      },
      {
        title: "आंतरिक एवं बाह्य सौंदर्य में वृद्धि",
        titleEn: "Increase in internal and external beauty",
        description:
          "यह उपासना व्यक्तित्व में आकर्षण, तेज और सौम्यता का विकास करती है। स्त्री-पुरुष दोनों के लिए आंतरिक एवं बाह्य सौंदर्य में वृद्धि होती है। माता ललिता की कृपा से चेहरे पर तेज, शरीर में सुंदरता और व्यक्तित्व में आकर्षण आता है।",
        descriptionEn:
          "This worship develops attraction, radiance and gentleness in personality. Increase in internal and external beauty occurs for both women and men. Through Mata Lalita's grace, radiance comes on the face, beauty in the body and attraction in personality.",
      },
      {
        title: "भय, शंका एवं भ्रम से मुक्ति",
        titleEn: "Freedom from fear, doubt and confusion",
        description:
          "ललिता सहस्त्रनाम पाठ से चित्त स्थिर होता है और नकारात्मक विचारों का क्षय होता है। मानसिक अशांति, भय, शंका और भ्रम दूर होते हैं। यह साधना मन को शांत और स्पष्ट बनाती है।",
        descriptionEn:
          "Lalita Sahastranama Path stabilizes the mind and destroys negative thoughts. Mental restlessness, fear, doubt and confusion are removed. This sadhana makes the mind peaceful and clear.",
      },
      {
        title: "श्रीविद्या की सूक्ष्म कृपा एवं बुद्धि प्रखरता",
        titleEn: "Subtle grace of Sri Vidya and sharpness of intellect",
        description:
          "बुद्धि, विवेक और निर्णय क्षमता में दिव्य स्पष्टता आती है। माता ललिता श्रीविद्या की अधिदेवता हैं, उनकी कृपा से सूक्ष्म ज्ञान और आध्यात्मिक बुद्धि प्राप्त होती है। यह उपासना बौद्धिक क्षमता को बढ़ाती है।",
        descriptionEn:
          "Divine clarity comes in intellect, discretion and decision-making capacity. Mother Lalita is the supreme goddess of Sri Vidya, through her grace subtle knowledge and spiritual intellect are attained. This worship increases intellectual capacity.",
      },
      {
        title: "संबंधों में सामंजस्य एवं प्रेम का विस्तार",
        titleEn: "Harmony in relationships and expansion of love",
        description:
          "परिवार, दांपत्य और सामाजिक संबंधों में मधुरता एवं विश्वास बढ़ता है। माता ललिता की कृपा से वैवाहिक जीवन सुखमय होता है और पारिवारिक संबंधों में प्रेम बढ़ता है। यह पूजा संबंधों की मधुरता के लिए विशेष फलदायी है।",
        descriptionEn:
          "Sweetness and trust increase in family, marital and social relationships. Through Mata Lalita's grace, marital life becomes happy and love increases in family relationships. This worship is especially fruitful for sweetness in relationships.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "माता ललिता पूजन एवं आवाहन",
      "श्री ललिता सहस्त्रनाम पाठ",
      "108 बार मंत्र जाप",
      "हवन एवं आहुति",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Mata Lalita Poojan and Invocation",
      "Sri Lalita Sahastranama Path",
      "108 times Mantra Jaap",
      "Havan and Ahuti",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "श्री ललिता सहस्त्रनाम पाठ",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Sri Lalita Sahastranama Path",
      "All worship materials",
      "Havan materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/lalita-temple.jpg",
      "https://example.com/lalita-sri-chakra.jpg",
      "https://example.com/sri-vidya.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "माता ललिता",
        "त्रिपुरसुंदरी",
        "ललिता सहस्त्रनाम",
        "सोमवार",
        "शक्ति",
        "सौंदर्य",
        "सौभाग्य",
        "प्रयागराज",
      ],
      keywordsEn: [
        "Mata Lalita",
        "Tripurasundari",
        "Lalita Sahastranama",
        "Monday",
        "Power",
        "Beauty",
        "Good Fortune",
        "Prayagraj",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["स्त्री-पुरुष दोनों", "गृहस्थ", "साधक", "कला प्रेमी"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 8,
    date: "2026-01-27T18:00:00",
    day: "Tuesday",
    dayHi: "मंगलवार",

    // Lunar date details
    tithi: "नवमी",
    tithiEn: "Navami",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "27/01/26",
    dateHindi: "27 जनवरी 2026",

    category: [
      "केतु शांति",
      "ग्रह दोष निवारण",
      "मानसिक स्थिरता",
      "आध्यात्मिक उन्नति",
      "सुरक्षा",
    ],
    categoryEn: [
      "Ketu Peace",
      "Planetary Dosh Removal",
      "Mental Stability",
      "Spiritual Progress",
      "Protection",
    ],
    deity: ["Lord Ketu"],
    deityHi: ["केतु देव"],
    poojaName: "केतु देव पूजा एवं केतु वैदिक मंत्र जाप",
    poojaNameEn: "Ketu Dev Pooja and Ketu Vedic Mantra Jaap",

    // Mantra details
    mantra: "ॐ केतवे नमः",
    mantraEn: "Om Ketave Namah",
    specificMantra: "केतु वैदिक मंत्र",
    specificMantraEn: "Ketu Vedic Mantra",
    mantraMeaning: "ग्रह दोष शांति और मानसिक स्थिरता प्रदान करने का मंत्र",
    mantraMeaningEn:
      "Mantra for providing planetary dosh peace and mental stability",
    jaapSankhya: 17000,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title:
          "जब जीवन में अचानक अवरोध आने लगें, निर्णय शक्ति भ्रमित हो जाए, मन में वैराग्य, असंतोष या अनजाना भय उत्पन्न हो",
        titleEn:
          "When sudden obstacles start coming in life, decision-making power gets confused, detachment, dissatisfaction or unknown fear arises in mind",
        content:
          "जब जीवन में अचानक अवरोध आने लगें, निर्णय शक्ति भ्रमित हो जाए, मन में वैराग्य, असंतोष या अनजाना भय उत्पन्न हो बार-बार प्रयास के बाद भी कार्य पूर्ण न हों, स्वास्थ्य, संबंध या मानसिक स्थिरता प्रभावित होने लगे, तब छाया ग्रह केतु देव की शांति मानव जीवन में विवेक, आत्मज्ञान और सूक्ष्म संतुलन प्रदान करती है। केतु देव की पूजा एवं केतु वैदिक मंत्र जाप अदृश्य बाधाओं का नाश कर, नकारात्मक ग्रह प्रभावों से रक्षा करते हुए जीवन में स्थिरता, आध्यात्मिक उन्नति और शांति का मार्ग प्रशस्त करता है।",
        contentEn:
          "When sudden obstacles start coming in life, decision-making power gets confused, detachment, dissatisfaction or unknown fear arises in mind Even after repeated efforts, works don't get completed, health, relationships or mental stability start getting affected, then the peace of shadow planet Ketu Dev provides discretion, self-knowledge and subtle balance to human life. Ketu Dev Pooja and Ketu Vedic Mantra Jaap destroys invisible obstacles, while protecting from negative planetary effects, paving the way for stability, spiritual progress and peace in life.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title: "केतु देव की पूजा एवं केतु वैदिक मंत्र जाप से प्राप्त आशीर्वाद",
        titleEn:
          "Blessings received from Ketu Dev Pooja and Ketu Vedic Mantra Jaap",
        blessings: [
          "मानसिक भ्रम, भय एवं अनावश्यक वैराग्य से मुक्ति",
          "अचानक आने वाली बाधाओं, दुर्घटनाओं एवं गुप्त शत्रुओं से रक्षा",
          "आध्यात्मिक चेतना, विवेक शक्ति एवं सूक्ष्म बुद्धि में वृद्धि",
        ],
        blessingsEn: [
          "Freedom from mental confusion, fear and unnecessary detachment",
          "Protection from suddenly coming obstacles, accidents and hidden enemies",
          "Increase in spiritual consciousness, discretion power and subtle intellect",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों करें केतु देव की पूजा",
        titleEn: "Why worship Ketu Dev",
        content:
          "केतु देव ज्योतिष शास्त्र में मोक्षकारक ग्रह माने गए हैं। वे पूर्व जन्मों के कर्म, रहस्यमय अनुभव, वैराग्य और आध्यात्मिक चेतना के कारक हैं। जब जीवन में बिना कारण भय, अस्थिरता, बार-बार रुकावट, मानसिक उलझन या अचानक हानि का योग बनता है, तब केतु देव की शांति से जीवन में संतुलन एवं दिशा प्राप्त होती है। जो साधक श्रद्धा एवं नियमपूर्वक केतु वैदिक मंत्र जाप करता है, उसे ग्रहजनित दोषों से राहत, आंतरिक स्थिरता तथा आध्यात्मिक सुरक्षा प्राप्त होती है।",
        contentEn:
          "Ketu Dev is considered the salvation-giving planet in astrology. He is the indicator of past life karmas, mysterious experiences, detachment and spiritual consciousness. When the combination of fear without reason, instability, repeated obstacles, mental confusion or sudden loss is formed in life, then through Ketu Dev's peace, balance and direction are attained in life. The seeker who performs Ketu Vedic Mantra Jaap with devotion and discipline, gets relief from planetary defects, internal stability and spiritual protection.",
      },
    ],

    laabh: [
      "ग्रहदोष शांति एवं बाधा निवारण",
      "मानसिक स्थिरता एवं वैराग्य का संतुलन",
      "दुर्घटना, शत्रु एवं नकारात्मक ऊर्जा से रक्षा",
      "विवेक, अंतर्ज्ञान एवं आध्यात्मिक चेतना में वृद्धि",
      "पूर्व जन्म कर्म दोषों में शमन",
    ],
    laabhEn: [
      "Planetary dosh peace and obstacle removal",
      "Mental stability and balance of detachment",
      "Protection from accidents, enemies and negative energy",
      "Increase in discretion, intuition and spiritual consciousness",
      "Pacification of past life karma defects",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "केतु मंदिर, प्रयागराज",
    placeEn: "Ketu Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image: "https://i.timesnowhindi.com/stories/rahu_ketu_mantra.jpg",
    description:
      "केतु देव पूजा एवं वैदिक मंत्र जाप से ग्रह शांति और मानसिक स्थिरता",
    descriptionEn:
      "Ketu Dev Pooja and Vedic Mantra Jaap for planetary peace and mental stability",

    // Pooja details section
    poojaDetails: {
      title:
        "🔥 केतु देव — रहस्यमय ग्रह, मोक्ष व विवेक के अधिष्ठाता — की कृपा से ग्रहदोष शांति एवं मानसिक संतुलन हेतु विशेष अनुष्ठान! 🔥",
      titleEn:
        "🔥 Special ritual for planetary dosh peace and mental balance through the grace of Ketu Dev—mysterious planet, presiding deity of salvation and discretion! 🔥",
      questions: [
        "क्या जीवन में अचानक बाधाएँ आ रही हैं?",
        "क्या बार-बार भय, भ्रम या असंतोष बना रहता है?",
        "क्या बिना स्पष्ट कारण कार्य रुक जाते हैं या हानि हो जाती है?",
      ],
      questionsEn: [
        "Are sudden obstacles coming in life?",
        "Does fear, confusion or dissatisfaction remain repeatedly?",
        "Do works stop without clear reason or loss occurs?",
      ],
      opportunity:
        "✨ केतु देव की पूजा एवं वैदिक मंत्र जाप में सम्मिलित होकर आप—",
      opportunityEn:
        "✨ By participating in Ketu Dev Pooja and Vedic Mantra Jaap, you—",
      benefits: [
        "मानसिक शांति एवं स्थिरता प्राप्त करेंगे",
        "ग्रहजनित नकारात्मक प्रभावों से रक्षा पाएँगे",
        "आध्यात्मिक उन्नति एवं विवेक शक्ति का अनुभव करेंगे",
      ],
      benefitsEn: [
        "Will attain mental peace and stability",
        "Will get protection from planetary negative effects",
        "Will experience spiritual progress and discretion power",
      ],
      callToAction:
        "🙏 केतु देव की कृपा से अपने जीवन को संतुलन, सुरक्षा और स्पष्टता प्रदान करें।",
      callToActionEn:
        "🙏 Provide your life with balance, protection and clarity through Ketu Dev's grace.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह प्राचीन केतु मंदिर ग्रह शांति और आध्यात्मिक सुरक्षा के लिए प्रसिद्ध है।",
      locationEn:
        "This ancient Ketu temple of Prayagraj is famous for planetary peace and spiritual protection.",

      deityForm:
        "यहाँ विराजमान केतु देव का विशेष रूप रहस्यमय ग्रह और मोक्षकारक स्वरूप में पूजनीय है।",
      deityFormEn:
        "The special form of Ketu Dev present here is worshipable in the form of mysterious planet and salvation-giving form.",

      selfManifested:
        "इस मंदिर में स्थापित केतु प्रतिमा स्वयंभू मानी जाती है जो अदृश्य बाधाओं के निवारण के लिए विशेष फलदायी है।",
      selfManifestedEn:
        "The Ketu idol installed in this temple is considered self-manifested, which is especially fruitful for removal of invisible obstacles.",

      importance:
        "मंगलवार का दिन केतु देव के लिए विशेष माना जाता है। इस दिन केतु पूजा एवं केतु वैदिक मंत्र जाप करने से ग्रह दोष शांति और मानसिक स्थिरता प्राप्त होती है।",
      importanceEn:
        "Tuesday is considered special for Ketu Dev. Performing Ketu Pooja and Ketu Vedic Mantra Jaap on this day leads to planetary dosh peace and mental stability.",

      combinedBenefits:
        "विशेषकर मंगलवार के दिन त्रिवेणी स्नान के पश्चात केतु देव के दर्शन करने से अचानक बाधाओं और अदृश्य संकटों से मुक्ति मिलती है।",
      combinedBenefitsEn:
        "Especially on Tuesday, after Triveni bath, having darshan of Ketu Dev leads to freedom from sudden obstacles and invisible crises.",

      vedicMantraConnection:
        "इसी पावन स्थल से केतु वैदिक मंत्र जाप का गहरा संबंध माना जाता है।",
      vedicMantraConnectionEn:
        "Ketu Vedic Mantra Jaap is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "शास्त्रों में कहा गया है— 'केतुं शान्तिं भजेत् नित्यं स याति परमां गतिम्'। अर्थात जो नित्य केतु की शांति करता है, वह उच्च आध्यात्मिक स्थिति को प्राप्त करता है।",
      scripturalReferenceEn:
        "It is said in scriptures— 'Ketum Shantim Bhajet Nityam Sa Yati Paramam Gatim'. Meaning, whoever regularly worships Ketu's peace, attains the highest spiritual state.",

      chantingBenefits:
        "केतु मंत्र जाप से विशेष फल: अचानक आने वाली बाधाओं एवं संकटों से मुक्ति, मानसिक भ्रम, भय एवं अनिश्चितता का नाश, आध्यात्मिक प्रगति, विवेक एवं सूक्ष्म बुद्धि में वृद्धि।",
      chantingBenefitsEn:
        "Special results from Ketu Mantra Jaap: Freedom from suddenly coming obstacles and crises, destruction of mental confusion, fear and uncertainty, increase in spiritual progress, discretion and subtle intellect.",

      shadowPlanetSignificance:
        "केतु छाया ग्रह होने के कारण अदृश्य प्रभाव डालता है। उनकी शांति से सूक्ष्म बाधाएँ दूर होती हैं और जीवन में स्पष्टता आती है।",
      shadowPlanetSignificanceEn:
        "Being a shadow planet, Ketu exerts invisible influence. Through his peace, subtle obstacles are removed and clarity comes in life.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और केतु आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Ketu worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, केतु देव की कृपा, मंगलवार की विशेष उपासना तथा केतु वैदिक मंत्र जाप आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Ketu Dev, special worship on Tuesday and Ketu Vedic Mantra Jaap organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "ग्रहदोष शांति एवं बाधा निवारण",
        titleEn: "Planetary dosh peace and obstacle removal",
        description:
          "केतु की कृपा से अचानक रुकावटें एवं अदृश्य दोष शांत होते हैं। ज्योतिषीय दृष्टि से केतु दोष, केतु की महादशा-अंतर्दशा के दुष्प्रभाव कम होते हैं। केतु वैदिक मंत्र जाप से अचानक आने वाली समस्याओं और बाधाओं से मुक्ति मिलती है।",
        descriptionEn:
          "Through Ketu's grace, sudden obstacles and invisible defects are pacified. From astrological perspective, Ketu dosh, bad effects of Ketu's Mahadasha-Antardasha are reduced. Ketu Vedic Mantra Jaap provides freedom from suddenly coming problems and obstacles.",
      },
      {
        title: "मानसिक स्थिरता एवं वैराग्य का संतुलन",
        titleEn: "Mental stability and balance of detachment",
        description:
          "अत्यधिक उदासी, भ्रम या अनिर्णय की स्थिति में सुधार आता है। केतु देव की कृपा से मन स्थिर होता है और अनावश्यक वैराग्य या असंतोष दूर होता है। यह पूजा मानसिक संतुलन बनाए रखने में सहायक है।",
        descriptionEn:
          "Improvement occurs in conditions of excessive sadness, confusion or indecision. Through Ketu Dev's grace, mind becomes stable and unnecessary detachment or dissatisfaction is removed. This worship is helpful in maintaining mental balance.",
      },
      {
        title: "दुर्घटना, शत्रु एवं नकारात्मक ऊर्जा से रक्षा",
        titleEn: "Protection from accidents, enemies and negative energy",
        description:
          "केतु देव की शांति से अदृश्य संकटों से सुरक्षा मिलती है। दुर्घटनाओं, गुप्त शत्रुओं, नकारात्मक ऊर्जा और हानिकारक प्रभावों से बचाव होता है। यह उपासना सुरक्षा कवच प्रदान करती है।",
        descriptionEn:
          "Through Ketu Dev's peace, protection is received from invisible crises. Protection from accidents, hidden enemies, negative energy and harmful effects occurs. This worship provides a protective shield.",
      },
      {
        title: "विवेक, अंतर्ज्ञान एवं आध्यात्मिक चेतना में वृद्धि",
        titleEn:
          "Increase in discretion, intuition and spiritual consciousness",
        description:
          "निर्णय क्षमता स्पष्ट होती है और आत्मज्ञान का मार्ग खुलता है। केतु देव की कृपा से अंतर्ज्ञान जाग्रत होता है और विवेक शक्ति बढ़ती है। यह साधना आध्यात्मिक चेतना को विकसित करती है।",
        descriptionEn:
          "Decision-making capacity becomes clear and the path of self-knowledge opens. Through Ketu Dev's grace, intuition awakens and discretion power increases. This sadhana develops spiritual consciousness.",
      },
      {
        title: "पूर्व जन्म कर्म दोषों में शमन",
        titleEn: "Pacification of past life karma defects",
        description:
          "केतु पूर्व जन्म के कर्मों के कारक हैं। उनकी पूजा से पूर्व जन्म के कर्म दोषों का शमन होता है और कर्मबंधनों से मुक्ति मिलती है। यह अनुष्ठान पुराने संस्कारों के निवारण में सहायक है।",
        descriptionEn:
          "Ketu is the indicator of past life karmas. Through his worship, past life karma defects are pacified and freedom from karmic bonds is attained. This ritual is helpful in removal of old impressions.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "केतु देव पूजन एवं आवाहन",
      "केतु वैदिक मंत्र जाप",
      "हवन एवं आहुति",
      "धूप-दीप प्रज्वलन",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Ketu Dev Poojan and Invocation",
      "Ketu Vedic Mantra Jaap",
      "Havan and Ahuti",
      "Incense-lamp lighting",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "केतु वैदिक मंत्र जाप",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Ketu Vedic Mantra Jaap",
      "All worship materials",
      "Havan materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/ketu-temple.jpg",
      "https://example.com/ketu-yantra.jpg",
      "https://example.com/graha-shanti.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "केतु देव",
        "केतु शांति",
        "ग्रह दोष",
        "वैदिक मंत्र",
        "मंगलवार",
        "अदृश्य बाधा",
        "आध्यात्मिक सुरक्षा",
        "प्रयागराज",
      ],
      keywordsEn: [
        "Ketu Dev",
        "Ketu Peace",
        "Planetary Dosh",
        "Vedic Mantra",
        "Tuesday",
        "Invisible Obstacle",
        "Spiritual Protection",
        "Prayagraj",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["सभी आयु वर्ग", "ज्योतिष अनुयायी", "साधक", "गृहस्थ"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 9,
    date: "2026-01-28T18:00:00",
    day: "Wednesday",
    dayHi: "बुधवार",

    // Lunar date details
    tithi: "दशमी",
    tithiEn: "Dashami",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "28/01/26",
    dateHindi: "28 जनवरी 2026",

    category: [
      "बुध शांति",
      "बुद्धि विकास",
      "वाणी शुद्धि",
      "व्यापार उन्नति",
      "मानसिक स्पष्टता",
    ],
    categoryEn: [
      "Budh Peace",
      "Intellect Development",
      "Speech Purification",
      "Business Progress",
      "Mental Clarity",
    ],
    deity: ["Lord Budh"],
    deityHi: ["बुध देव"],
    poojaName: "बुध देव पूजा एवं बुध वैदिक मंत्र जाप",
    poojaNameEn: "Budh Dev Pooja and Budh Vedic Mantra Jaap",

    // Mantra details
    mantra: "ॐ बुधाय नमः",
    mantraEn: "Om Budhaya Namah",
    specificMantra: "बुध वैदिक मंत्र",
    specificMantraEn: "Budh Vedic Mantra",
    mantraMeaning: "बुद्धि, वाणी और व्यापारिक सफलता प्रदान करने का मंत्र",
    mantraMeaningEn:
      "Mantra for providing intellect, speech and business success",
    jaapSankhya: 9000,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title:
          "बुद्धि भ्रमित हो जाए, वाणी में कटुता या गलतफहमी उत्पन्न होने लगे, बार-बार प्रयास के बाद भी कार्य अधूरे रह जाएँ",
        titleEn:
          "When intellect gets confused, bitterness or misunderstanding starts arising in speech, even after repeated efforts works remain incomplete",
        content:
          "बुद्धि भ्रमित हो जाए, वाणी में कटुता या गलतफहमी उत्पन्न होने लगे, बार-बार प्रयास के बाद भी कार्य अधूरे रह जाएँ शिक्षा, व्यापार, करियर या संवाद से जुड़े विषय प्रभावित होने लगें, तब बुद्ध ग्रह देव की शांति मानव जीवन में विवेक, स्पष्टता और बौद्धिक संतुलन प्रदान करती है। बुध देव की पूजा एवं बुध वैदिक मंत्र जाप मानसिक भ्रम का नाश कर, नकारात्मक ग्रह प्रभावों से रक्षा करते हुए जीवन में बुद्धि, वाणी, व्यापारिक सफलता और मानसिक स्थिरता का मार्ग प्रशस्त करता है।",
        contentEn:
          "When intellect gets confused, bitterness or misunderstanding starts arising in speech, even after repeated efforts works remain incomplete When education, business, career or communication-related subjects start getting affected, then the peace of intellect planet Budh Dev provides discretion, clarity and intellectual balance to human life. Budh Dev Pooja and Budh Vedic Mantra Jaap destroys mental confusion, while protecting from negative planetary effects, paving the way for intellect, speech, business success and mental stability in life.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title: "बुध देव की पूजा एवं बुध वैदिक मंत्र जाप से प्राप्त आशीर्वाद",
        titleEn:
          "Blessings received from Budh Dev Pooja and Budh Vedic Mantra Jaap",
        blessings: [
          "बुद्धि भ्रम, मानसिक चंचलता एवं गलत निर्णयों से मुक्ति",
          "वाणी दोष, संवाद की समस्याओं एवं व्यापारिक बाधाओं से राहत",
          "स्मरण शक्ति, विवेक, तार्किक क्षमता एवं सूक्ष्म बुद्धि में वृद्धि",
        ],
        blessingsEn: [
          "Freedom from intellectual confusion, mental restlessness and wrong decisions",
          "Relief from speech defects, communication problems and business obstacles",
          "Increase in memory power, discretion, logical ability and subtle intellect",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों करें बुध देव की पूजा",
        titleEn: "Why worship Budh Dev",
        content:
          "बुध देव को ज्योतिष शास्त्र में बुद्धि, वाणी, व्यापार, शिक्षा एवं तर्क शक्ति के कारक ग्रह माना गया है। वे विचारों की स्पष्टता, संवाद कौशल और मानसिक संतुलन प्रदान करते हैं। जब जीवन में बार-बार गलत निर्णय, पढ़ाई या व्यापार में रुकावट, वाणी से विवाद, या मानसिक अस्थिरता उत्पन्न होने लगे, तब बुध देव की शांति से जीवन में स्पष्टता, संतुलन एवं उन्नति प्राप्त होती है। जो साधक श्रद्धा एवं नियमपूर्वक बुध वैदिक मंत्र जाप करता है, उसे ग्रहजनित दोषों से राहत, बौद्धिक विकास, एवं मानसिक स्थिरता प्राप्त होती है।",
        contentEn:
          "Budh Dev is considered in astrology as the planet indicator of intellect, speech, business, education and reasoning power. He provides clarity of thoughts, communication skills and mental balance. When wrong decisions repeatedly, obstacles in studies or business, disputes from speech, or mental instability start arising in life, then through Budh Dev's peace, clarity, balance and progress are attained in life. The seeker who performs Budh Vedic Mantra Jaap with devotion and discipline, gets relief from planetary defects, intellectual development, and mental stability.",
      },
    ],

    laabh: [
      "ग्रहदोष शांति एवं बुद्धि विकास",
      "मानसिक स्थिरता एवं संवाद में सुधार",
      "व्यापार, शिक्षा एवं करियर में उन्नति",
      "विवेक, तर्क शक्ति एवं स्मरण क्षमता में वृद्धि",
      "पूर्व जन्म एवं वर्तमान कर्म दोषों में शमन",
    ],
    laabhEn: [
      "Planetary dosh peace and intellect development",
      "Mental stability and improvement in communication",
      "Progress in business, education and career",
      "Increase in discretion, reasoning power and memory capacity",
      "Pacification of past and present karma defects",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "बुध मंदिर, प्रयागराज",
    placeEn: "Budh Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image:
      "https://qqcdnpictest.mxplay.com/pic/313ae82e931749c7065006c99c9e792a/en/16x9/640x360/ae0c5716e2b1e65275ce06eccee27bb7_1920x1080.jpg",
    description:
      "बुध देव पूजा एवं वैदिक मंत्र जाप से बुद्धि, वाणी और व्यापारिक सफलता",
    descriptionEn:
      "Budh Dev Pooja and Vedic Mantra Jaap for intellect, speech and business success",

    // Pooja details section
    poojaDetails: {
      title:
        "🔥 बुध देव — बुद्धि, वाणी, व्यापार और विवेक के अधिष्ठाता — की कृपा से ग्रहदोष शांति एवं मानसिक स्पष्टता हेतु विशेष अनुष्ठान! 🔥",
      titleEn:
        "🔥 Special ritual for planetary dosh peace and mental clarity through the grace of Budh Dev—presiding deity of intellect, speech, business and discretion! 🔥",
      questions: [
        "क्या निर्णय लेने में भ्रम होता है?",
        "क्या पढ़ाई, व्यापार या करियर में बार-बार रुकावट आती है?",
        "क्या संवाद की कमी या वाणी दोष से समस्याएँ बढ़ रही हैं?",
      ],
      questionsEn: [
        "Is there confusion in decision-making?",
        "Are there repeated obstacles in studies, business or career?",
        "Are problems increasing due to lack of communication or speech defects?",
      ],
      opportunity:
        "✨ बुध देव की पूजा एवं वैदिक मंत्र जाप में सम्मिलित होकर आप—",
      opportunityEn:
        "✨ By participating in Budh Dev Pooja and Vedic Mantra Jaap, you—",
      benefits: [
        "मानसिक स्पष्टता एवं एकाग्रता प्राप्त करेंगे",
        "ग्रहजनित नकारात्मक प्रभावों से रक्षा पाएँगे",
        "बुद्धि, वाणी एवं व्यापारिक उन्नति का अनुभव करेंगे",
      ],
      benefitsEn: [
        "Will attain mental clarity and concentration",
        "Will get protection from planetary negative effects",
        "Will experience intellect, speech and business progress",
      ],
      callToAction:
        "🙏 बुध देव की कृपा से अपने जीवन को विवेक, संतुलन और सफलता प्रदान करें।",
      callToActionEn:
        "🙏 Provide your life with discretion, balance and success through Budh Dev's grace.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह प्राचीन बुध मंदिर बुद्धि, वाणी और व्यापारिक सफलता के लिए प्रसिद्ध है।",
      locationEn:
        "This ancient Budh temple of Prayagraj is famous for intellect, speech and business success.",

      deityForm:
        "यहाँ विराजमान बुध देव का विशेष रूप बुद्धि, विवेक और संवाद के देवता के रूप में पूजनीय है।",
      deityFormEn:
        "The special form of Budh Dev present here is worshipable as the deity of intellect, discretion and communication.",

      selfManifested:
        "इस मंदिर में स्थापित बुध प्रतिमा स्वयंभू मानी जाती है जो बौद्धिक विकास और मानसिक स्पष्टता के लिए विशेष फलदायी है।",
      selfManifestedEn:
        "The Budh idol installed in this temple is considered self-manifested, which is especially fruitful for intellectual development and mental clarity.",

      importance:
        "बुधवार का दिन बुध देव का प्रिय दिवस माना जाता है। इस दिन बुध पूजा एवं बुध वैदिक मंत्र जाप करने से बुद्धि, वाणी और व्यापार में अद्भुत वृद्धि होती है।",
      importanceEn:
        "Wednesday is considered the favorite day of Budh Dev. Performing Budh Pooja and Budh Vedic Mantra Jaap on this day leads to amazing increase in intellect, speech and business.",

      combinedBenefits:
        "विशेषकर बुधवार के दिन त्रिवेणी स्नान के पश्चात बुध देव के दर्शन करने से बौद्धिक क्षमता, संवाद कौशल और व्यापारिक सफलता प्राप्त होती है।",
      combinedBenefitsEn:
        "Especially on Wednesday, after Triveni bath, having darshan of Budh Dev leads to attainment of intellectual capacity, communication skills and business success.",

      vedicMantraConnection:
        "इसी पावन स्थल से बुध वैदिक मंत्र जाप का गहरा संबंध माना जाता है।",
      vedicMantraConnectionEn:
        "Budh Vedic Mantra Jaap is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "शास्त्रों में कहा गया है— 'बुधं शान्तिं भजेत् नित्यं स लभेत् बुद्धि वैभवम्'। अर्थात जो नित्य बुध की शांति करता है, वह बुद्धि, विवेक और जीवन में उन्नति प्राप्त करता है।",
      scripturalReferenceEn:
        "It is said in scriptures— 'Budham Shantim Bhajet Nityam Sa Labhet Buddhi Vaibhavam'. Meaning, whoever regularly worships Budh's peace, attains intellect, discretion and progress in life.",

      chantingBenefits:
        "बुध मंत्र जाप से विशेष फल: पढ़ाई, व्यापार एवं करियर में आने वाली बाधाओं से मुक्ति, मानसिक भ्रम, वाणी दोष एवं गलत निर्णयों का नाश, बुद्धि, विवेक, स्मरण शक्ति एवं तार्किक क्षमता में वृद्धि।",
      chantingBenefitsEn:
        "Special results from Budh Mantra Jaap: Freedom from obstacles coming in studies, business and career, destruction of mental confusion, speech defects and wrong decisions, increase in intellect, discretion, memory power and logical ability.",

      intellectPlanetSignificance:
        "बुध को बुद्धि ग्रह कहा जाता है। उनकी शांति से मानसिक स्पष्टता आती है और बौद्धिक क्षमता में वृद्धि होती है।",
      intellectPlanetSignificanceEn:
        "Budh is called the intellect planet. Through his peace, mental clarity comes and intellectual capacity increases.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और बुध आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Budh worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, बुध देव की कृपा, बुधवार की विशेष उपासना तथा बुध वैदिक मंत्र जाप आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Budh Dev, special worship on Wednesday and Budh Vedic Mantra Jaap organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "ग्रहदोष शांति एवं बुद्धि विकास",
        titleEn: "Planetary dosh peace and intellect development",
        description:
          "बुध की कृपा से बौद्धिक कमजोरी एवं मानसिक भ्रम शांत होते हैं। ज्योतिषीय दृष्टि से बुध दोष, बुध की महादशा-अंतर्दशा के दुष्प्रभाव कम होते हैं। बुध वैदिक मंत्र जाप से बौद्धिक क्षमता में वृद्धि होती है और मानसिक स्पष्टता आती है।",
        descriptionEn:
          "Through Budh's grace, intellectual weakness and mental confusion are pacified. From astrological perspective, Budh dosh, bad effects of Budh's Mahadasha-Antardasha are reduced. Budh Vedic Mantra Jaap increases intellectual capacity and brings mental clarity.",
      },
      {
        title: "मानसिक स्थिरता एवं संवाद में सुधार",
        titleEn: "Mental stability and improvement in communication",
        description:
          "वाणी में मधुरता, निर्णय क्षमता एवं आत्मविश्वास बढ़ता है। बुध देव की कृपा से संवाद कौशल विकसित होता है और वाणी दोष दूर होते हैं। यह पूजा मानसिक स्थिरता और संवाद सुधार में सहायक है।",
        descriptionEn:
          "Sweetness in speech, decision-making capacity and confidence increase. Through Budh Dev's grace, communication skills develop and speech defects are removed. This worship is helpful in mental stability and communication improvement.",
      },
      {
        title: "व्यापार, शिक्षा एवं करियर में उन्नति",
        titleEn: "Progress in business, education and career",
        description:
          "बुध देव की शांति से आर्थिक एवं व्यावसायिक बाधाएँ दूर होती हैं। व्यापार में सफलता, शिक्षा में उन्नति और करियर में प्रगति होती है। यह उपासना व्यापारिक सफलता के लिए विशेष लाभकारी है।",
        descriptionEn:
          "Through Budh Dev's peace, economic and business obstacles are removed. Success in business, progress in education and advancement in career occur. This worship is especially beneficial for business success.",
      },
      {
        title: "विवेक, तर्क शक्ति एवं स्मरण क्षमता में वृद्धि",
        titleEn: "Increase in discretion, reasoning power and memory capacity",
        description:
          "निर्णय स्पष्ट होते हैं और जीवन में प्रगति का मार्ग खुलता है। बुध देव की कृपा से विवेक शक्ति बढ़ती है, तार्किक क्षमता विकसित होती है और स्मरण शक्ति में वृद्धि होती है।",
        descriptionEn:
          "Decisions become clear and the path of progress opens in life. Through Budh Dev's grace, discretion power increases, logical ability develops and memory power increases.",
      },
      {
        title: "पूर्व जन्म एवं वर्तमान कर्म दोषों में शमन",
        titleEn: "Pacification of past and present karma defects",
        description:
          "बुध पूजा एवं मंत्र जाप से मानसिक एवं बौद्धिक कर्म दोषों का निवारण होता है। पूर्व जन्म के बौद्धिक कर्म दोषों का शमन होता है और वर्तमान में सही निर्णय लेने की क्षमता विकसित होती है।",
        descriptionEn:
          "Through Budh worship and mantra jaap, mental and intellectual karma defects are remedied. Intellectual karma defects of past lives are pacified and ability to make right decisions in present develops.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "बुध देव पूजन एवं आवाहन",
      "बुध वैदिक मंत्र जाप",
      "हवन एवं आहुति",
      "हरीतकी (हरड़) पूजन",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Budh Dev Poojan and Invocation",
      "Budh Vedic Mantra Jaap",
      "Havan and Ahuti",
      "Haritaki (Harad) Poojan",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "बुध वैदिक मंत्र जाप",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "हरीतकी (हरड़) सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Budh Vedic Mantra Jaap",
      "All worship materials",
      "Havan materials",
      "Haritaki (Harad) materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/budh-temple.jpg",
      "https://example.com/budh-yantra.jpg",
      "https://example.com/communication-skills.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "बुध देव",
        "बुध शांति",
        "बुद्धि विकास",
        "वाणी शुद्धि",
        "व्यापार उन्नति",
        "बुधवार",
        "वैदिक मंत्र",
        "प्रयागराज",
      ],
      keywordsEn: [
        "Budh Dev",
        "Budh Peace",
        "Intellect Development",
        "Speech Purification",
        "Business Progress",
        "Wednesday",
        "Vedic Mantra",
        "Prayagraj",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["विद्यार्थी", "व्यापारी", "शिक्षक", "लेखक", "सभी आयु वर्ग"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 10,
    date: "2026-01-29T18:00:00",
    day: "Thursday",
    dayHi: "गुरुवार",

    // Lunar date details
    tithi: "एकादशी",
    tithiEn: "Ekadashi",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "29/01/26",
    dateHindi: "29 जनवरी 2026",

    category: [
      "गुरु शांति",
      "ज्ञान विकास",
      "भाग्य वृद्धि",
      "धर्मबोध",
      "आध्यात्मिक उन्नति",
    ],
    categoryEn: [
      "Guru Peace",
      "Knowledge Development",
      "Fortune Increase",
      "Dharma Awareness",
      "Spiritual Progress",
    ],
    deity: ["Lord Guru (Brihaspati)"],
    deityHi: ["गुरु देव (बृहस्पति)"],
    poojaName: "गुरु पूजा एवं गुरु वैदिक मंत्र जाप",
    poojaNameEn: "Guru Pooja and Guru Vedic Mantra Jaap",

    // Mantra details
    mantra: "ॐ गुरवे नमः",
    mantraEn: "Om Gurave Namah",
    specificMantra: "गुरु वैदिक मंत्र",
    specificMantraEn: "Guru Vedic Mantra",
    mantraMeaning: "ज्ञान, विवेक और भाग्य वृद्धि प्रदान करने का मंत्र",
    mantraMeaningEn:
      "Mantra for providing knowledge, discretion and fortune increase",
    jaapSankhya: 19000,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title:
          "जब जीवन में मार्गदर्शन का अभाव महसूस होने लगे, निर्णय क्षमता कमजोर हो जाए, आस्था डगमगाने लगे और आत्मविश्वास कम हो जाए",
        titleEn:
          "When lack of guidance starts being felt in life, decision-making capacity weakens, faith starts wavering and self-confidence decreases",
        content:
          "बार-बार प्रयास के बाद भी सफलता न मिले, शिक्षा, विवाह, संतान, करियर या आध्यात्मिक उन्नति में बाधाएँ आने लगें, तब देवगुरु बृहस्पति (गुरु देव) की शांति मानव जीवन में ज्ञान, विवेक, आस्था और धर्मबोध प्रदान करती है। गुरु पूजा एवं गुरु वैदिक मंत्र जाप अज्ञान एवं नकारात्मक ग्रह प्रभावों का नाश कर, दैवी कृपा से जीवन में सद्बुद्धि, सौभाग्य, स्थिरता और आध्यात्मिक उन्नति का मार्ग प्रशस्त करता है।",
        contentEn:
          "Even after repeated efforts, success is not attained, obstacles start coming in education, marriage, children, career or spiritual progress, then the peace of Devguru Brihaspati (Guru Dev) provides knowledge, discretion, faith and dharma awareness to human life. Guru Pooja and Guru Vedic Mantra Jaap destroys ignorance and negative planetary effects, through divine grace, paving the way for good intellect, good fortune, stability and spiritual progress in life.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title: "गुरु देव की पूजा एवं गुरु वैदिक मंत्र जाप से प्राप्त आशीर्वाद",
        titleEn:
          "Blessings received from Guru Dev Pooja and Guru Vedic Mantra Jaap",
        blessings: [
          "अज्ञान, भ्रम, नकारात्मक सोच एवं आत्मविश्वास की कमी से मुक्ति",
          "शिक्षा, विवाह, संतान, करियर एवं भाग्य से जुड़ी बाधाओं का निवारण",
          "ज्ञान, विवेक, धर्मबोध एवं आध्यात्मिक चेतना में वृद्धि",
        ],
        blessingsEn: [
          "Freedom from ignorance, confusion, negative thinking and lack of self-confidence",
          "Removal of obstacles related to education, marriage, children, career and fortune",
          "Increase in knowledge, discretion, dharma awareness and spiritual consciousness",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों करें गुरु देव की पूजा",
        titleEn: "Why worship Guru Dev",
        content:
          "गुरु देव को ज्योतिष शास्त्र में ज्ञान, धर्म, भाग्य, संतान, विवाह और आध्यात्मिक उन्नति के कारक ग्रह माना गया है। वे जीवन को सही दिशा, नैतिकता और उच्च आदर्श प्रदान करते हैं। जब जीवन में भाग्य साथ न दे, मार्गदर्शन का अभाव हो, शिक्षा या संतान से संबंधित समस्याएँ हों, या बार-बार असफलता और निराशा घेर ले, तब गुरु देव की शांति से जीवन में आशा, स्थिरता और उन्नति प्राप्त होती है। जो साधक श्रद्धा एवं नियमपूर्वक गुरु वैदिक मंत्र जाप करता है, उसे ग्रहजनित दोषों से राहत, दैवी संरक्षण, एवं जीवन में सकारात्मक परिवर्तन प्राप्त होता है।",
        contentEn:
          "Guru Dev is considered in astrology as the planet indicator of knowledge, dharma, fortune, children, marriage and spiritual progress. He provides right direction, ethics and high ideals to life. When fortune doesn't support, there is lack of guidance, problems related to education or children exist, or repeated failure and despair surround, then through Guru Dev's peace, hope, stability and progress are attained in life. The seeker who performs Guru Vedic Mantra Jaap with devotion and discipline, gets relief from planetary defects, divine protection, and positive transformation in life.",
      },
    ],

    laabh: [
      "गुरु ग्रह दोष शांति एवं भाग्य वृद्धि",
      "ज्ञान, विवेक एवं आत्मविश्वास में वृद्धि",
      "शिक्षा, संतान, विवाह एवं करियर में उन्नति",
      "आध्यात्मिक चेतना एवं धर्म मार्ग की प्राप्ति",
      "पूर्व जन्म एवं वर्तमान कर्म दोषों में शमन",
    ],
    laabhEn: [
      "Guru planet dosh peace and fortune increase",
      "Increase in knowledge, discretion and self-confidence",
      "Progress in education, children, marriage and career",
      "Attainment of spiritual consciousness and dharma path",
      "Pacification of past and present karma defects",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "गुरु मंदिर, प्रयागराज",
    placeEn: "Guru Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMWFRUWFRUVFRcYGBUXFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA9EAABAgMGAgcGBQMFAQEAAAABAAIDBBEFEiExQVFhcQYTFCKBkaEyQlKxwdEHFWKS8CNy4RZDU4LxojP/xAAbAQACAwEBAQAAAAAAAAAAAAACBAABAwUGB//EAC0RAAICAQMDAwIGAwEAAAAAAAABAgMRBBIhEzFBBSJRFTIGFEJhcZFSU4EW/9oADAMBAAIRAxEAPwDz90q5uYw9FLDa04Fek9H+gsxGoZhrYTCK1BBeaioo2mHigOknQowHkAOLPdiAZ73gMl7KOvplPZnk47hYo7sGQgB8PLvs+E6f2lXdnvDh3cRqD7TeY2QfYYkPS8OX0REtCBN4Va4LWxJrgzjY/IbEsmtHw89v58lZWUy+Qw4O04f4SkIxB7wofiHsnnsVey0m1zg8d13z4rn2zx3GIyyAWlYAB61gx94cd1ZS8q2LDFWgluB3VzLNr3XDHLmEyHKdU/8ASUjK5vhmyjzkGgSlAERMS1S08vRSRGFrqDI48FNEvENoAsnJhoqbdhf0Lmr3AeFQT6BVTLOMCC6K6lXVp45LQT0oX3G8/XBNtGSLrsOuDPU6LSuzHAMkYqSse9nr3nnhoFatlGtyAApQfRaBshdbTxPFDOlKmp8AtndkDaUb7NDzecMP5goZmzRS9S6wafUrSvaBnifhGipLQgxo3dYw/RHXY2+XwY2SUf5MtaU8G91mA318Nuap4UnEjHutNP5rqtZD6PNZ3oxqdRkBzJT5idhwxdYAeAwb/ldGFqS9iyJzsa5kyps7o0wHvmpGJAy8Sj5uNDhigoae63AeJ1QMace44mg2GSa2CX+yC7kicZN5mxeWq5xFFXNTTnE07o2GCrXy9StR+SOPtENHmUKZJjXfFTfXwW8bIpcBxskykbLVyFV18g7OlFoy9oGGHIISOa4AYKdRsNSfkpWyA5rplaZBWjYaIhywu11KmQpXYKiFIucaIg2eW5D7q6s+XGPgijL8EPUwxWzVPJlTBTXS60M1I1xHioTKBGrEylqjMxpWnJRGEtBOyoDahV/VcFplMYhfuRX9SuKx7O7YpKwusfRTXk5LsStCCAQcChpaY03RoiBeIksM7aeTz7pFY8OXAiMeSC4AQ3YjjR+arIEnDiYuF3j/AJC31r2PCmA2/Xumood0FF6NMDQIRLSNDiHc6ldGnWJQ2ybyI20S3ZRQQLPczIBzf5qrCTZTL9pwI/tKIZZ0SGcR5H6I6BALs2/QqrLlJdyQi0Ty4vDiPMIi4XC67A/PiFHCg/zIjxR0AVwP/iSnIbiBQZYkXTm35I1skKU4qu6W9IoNnSzpmLifZhsHtRXnJo+ZOgC+d+knTienXl0SO9jKm7ChOLGNG2Bq7mUvO59hiNWT6bdKit7YIR0pTHVfMNndIJqC4OhTUdhGX9RxHi1xIPkvbfw0/EPt9ZSYAbMtbVrh7MZozIHuuGo4qoWskqjZwpUEYoCcGN1gq44KzjQydaDbUoa44EBgFNUxCXkXmvAH+XgYuPh90NN2i1gutCso8oT7TvJQdjY3JtTuVtCa88itkJfp4MtNwokcULSdth4qoFiuqQ8htPFb6Kw7gclmZ1t57jnjnX6Lo0Xt8Lsc6yiMeZPJVCQhN0qeOKe59MGjywRndGnoVDFeD7qZTb7i7shHsV72udgTmozZzaZklSxgWm8Mttk10xreWyT8AO/4AYktQ0UT4Q3RD3XiniEAt1x3Bd7KxwRMu8EUpiFPEgUxonwJQuxGHFRtYAndlDIEQtdWiPGOIQ8aXc0VpXl9kKJkj2cEG3d2F5Znyg2INFH1CF7S7h5JsSM45lWq2Uq2TXGurwRMOSAFKVVdAJDgVckkhSeUVZuj2ZUugYrqsxKrirqIrqs9Ds+znuIdeo2vnyV1GkgfZNPUFdv7J0KIvIznKTye4hGKWCuiQIgwAr8l1jXjMK0vrj8RQqdR+SOH7gIqcwp4AoKUXIctQ1J8F17CDhX7KnIiTJDBB0WO6a9P5WzmuhhwizIHdgg5HQxHD2B6q+tmaiiE9ku5ojEUaXYtYTqaajZeL2n+Ec7Fe6I6YhPc9xc4m9VxOJJKUlqIp7cjUKW1kxXSnpZHn4vXTDwSBRrW1EOGNmN33OZVjGs2BBs5kWIy9HmD/TxNQNCAOCurK/D6DL34s7EvdTUuhgUaaYgknEgrJvtt0SdZNuYHNZEYWw8LoY1wusaNMPVDuUuxuouK9xobJ/CmbiBjo0SFAa4A0c6sQA/p38VqbE/C+YlbQlo0vHESHDeHRC7uuY3UcajRaqStCHaFWmXisIyERmBrs4VC3VlWcyXhiG2uGZJJJPElZVTsnPnsXaoRjx3JIgGyFiORrm1T2wwE+pbRBxyVLopyIKEiRaaH0VnMQiCaDBVcfE+yUzW0xS1tFZPRXuqA2njigIUo+hoB6qxnWBupCr2zFPe+a6FT9vtORqJLPuOzMJ13Iba0VaZJ38CPmImGfqhsdz5pmvckc6TgDmRO/oq58hjqrjHSpKHfBdqCmK7Ggd0V2K+HI80/sY4p7WmqfdK13NkckQulgj5eCLooENcK6ARqUEsvyZyaYTFhABUroA0COjEnMnzUcFmIVwbiu5IvCHy9lVzUkSzgNvJWUI4JsY6LLqyz3M3N5KSNI/zRNgRSO6R91edhe5pcBh6qrjS5rktYWqXDZo849yCBFbxSTWsOxSQZRntPShETobsaKCprSiTIZJqTQeq840sHtN7yGgpwcoXtPu+tVLAaRiSs2apsmY2qy3SvpBciskoRo9//AOjh7jdgdHFXlu2s2WgPju90YD4nHIBeOyE04zAmYhq5zr7jteJA8BgFyddqNi2LudbQ6Xqe5rhHqkowURlFTSM5WgVxCOCSrkmje2LizzX8YZd3ZIsRpoW3GRP1MLgR5LA/hl0LiWlFvYMl4L2da45uOfVsA1NMToCvaOlErDiQpmHFFWGEKjLEA0+iN/DSz4UCzpdsJobeZefuYh9ok71XQ00ljaLXp4TNLChtY0NaAABQAZABIlOJXHJ1JISkzoKV5QkpIsA7hz3KviwaYhGkpjgtI8GU1uRSTUwKd6o5j6qtjwWHG4DyV3asKrCOCoo7i1oA4J6h5XBxtUtrwwT8vrkHLj7JdufT6K8lYgAAKIujNbPUTRgtLXNZKBlmOblRcdKv2V9Hg0NRqoC1RXt8gT0UUZiblSDWlKqEQythAs4RTjgB8060rBaaGGKHKmnNGtdFPayfTpuOUY9sInAAknbEoyHYsZwvCG6nkfIq+sWynMjFzhg0fPZaSqzu18k8QN9N6WprNnBnrF6MsYWxIuLqVukCgKKt2wYcRpe0XXtBIIFAeBGqti5K8kHdY5b88nVWlqVfTxweesl3ClWkVyqFYQLOw72q1k1LCI0g56HYqiLiDTY0TkdVKxfucizQRpll8pjH9wUyVbNS4ea5K5fBL8KVKrnspgc0dU+f3Aur45XAO2zQRqkrmVigMAouIXdLIa0sMFgY6c16Da1Pqltg/wBZhoipdoQTWkqO0ZjqITomuTeLjgFla4wi5Pwa0ynZJRXkx34hWoYkQQAe5Dq53FwGPlgFQw2hvVuIq17Ax3PMFR2i+t9xNSXBtd8auPmipJocwwnaHDkciF4++1zk5s+h6TTqqpQLqxJlwiBhNRTA64aFbqUPdC8xs1j4UZhJvNrSuuO69MkXVaEenlkQ9QhtMn0yinrSwuoy4HOb8RBwqdlffh5GrIs/viD/AOj91k+msNz5q43K40OOwqVq+g8K7JsFM3PI4i8ndFzexPWpR0sWaW8unFQgJ7V22jhqRwrgKc9qhqrQLeBxKaXrjlE4IkgJSGxBoVX/AJeC4VyVg/EJQWE40yWqk4oXlWpvkGmpMUqBkh2VCuXBBxIGyuFnhgWafDzEgdFBABXYcK8aIa0IdKBFWWwhtTqfRE+I5QEcuWGHwoYaKBOJUd5dqsMDqaQ+q6HqOqcGFVgtM6XptVxwouAqyZCFUzUgQ683EEq1XQqjJx5RVlasWGRSkvdAwQ1o2WHm+MD81ZApwQqck8oN0wlHayqgyZDQEla3UlfVkD+WiijAUzIO6q2dIZYf7gUv+pZUZxQEy4z+BKMV5LUMWS6ZTveDK4Q2lx2vEYeQ+at/9Typ/wB0eqxvSaOxz3uhxWvbEeCcaOaMMCDmMM1yvVK7uj7Yv9/4Ov6PKr8wt7/goZwYQ65Vqf8AsipZhIw9tmB4jRRRIPXOuj+0f3HI+ATmXmuoe7Ebga5OC8u+Vg93GSzwFiMSKHwOxC3PRydvsbXMj1WFE3vDNeFCPNG2FaphP7wownfI7q6JbJci2tq6kOCy6XwXQ4pjUqHtAB2cK4eK2lgSZhS0GGc2sbXmcT6oV1yMyhANCD4g1CNfbEFuDn0OoxwXc0MF1HJHmtdc+nGEvAaGpzWoBttQDgIgT/zaD8YXVcZfBzFOHyHEIKIMVKyfhnAOTIlNwpHKJPDXAyq4IZOSmYGkDEKRgA1V7gVDIPAl64lFsaAKBNvBcaULbZpGKiRxBQprmqdzAcdVA6GT4K0wJRIOrB71OSV1TXTsuFh2Wm4ycP2IV0FOLE0hXlA4aJIYUqjhJ5eNwgZrHg5EGChaFMYjdx5hDmM34m+YVoGWMhS6FBDmmfG39wT+1Q8r7f3D7oWg1KOO5ME5rkKZuGP9xn7h91wT0P8A5Gfub91W1kVkfkOquoPt8L/kZ+5v3SVbWF1I/J59/pqX2f8AvKZE6Myxwuv/AHuR5mSmOmCvny9W9Q/2y/s9MvS6P8EAs6Ny7cg/97kj0fgVB7+H6iizHK4YxRfVde+HbL+wl6Vp++xAECVa2OQ0YUJ8ckbOWYyKKEYjIjMeKCL7r2v+IuafHJXUCLUJe+2xSU88jizBYiZ6JYcQZRARxBr6JjrHdSr3Fw+EClfFaqiij5IY62x8BK6T4KywrZdBf1L8RoduB4K9t8scxsUOANQKZl4OgAOJWTgtvRb25J8KgfRXUFoa/rKVOlcm/wBo0XXo9Slp5JnO1mhjqItMIlQKglrWjycOYp9UeYZpUH1FfVR/mTT7UMFCxpiHXAFvyXY/9FLGcJnBX4fSfEmi2lhQ3jWhGNaY+CPhOHumvDuhZpkfCgJoiYU64ZEeSCP4kol98WjVej3QXDTLsxmjDXn9AimOqMKjw+6o4dqHItH/AFwKmg2mAca02zPmmoes6Of68fyC9FfHui7BOtD5JzWcVXQp9hPt04a+dEZCLTjer5JuOpqn9sk/+mbhNd0EtUgKGe/gusijehWuMlb8BFU0lRmIlWqmCbjpKgef/f8AxdfFAwqQoIsXDEkhGkBKaFXgD4lRPZX3MNiRTzKY5xGbK8dfRRRy4mouCm9a+qNIxc0Iwhtd279PQKsn2NBN8+pNfkj4jC7vOoTpQ1B8CFWzF4vHc02FBTmmKlyJaifAC9rCADDIG9cPKtULMSLW1iAHLQV9PsrWYjPaKuDRplX5KsixHuxDXEc3U8gnIJnHuk8lM2FfOQIGVKtr/cD91E+WY11S0jSoVlHHxB9Ng0U9VEWMpVwdyOPpRNRwJWTeSvfCZXCG+n/b7pI6634D5geiS04A6si4M3D0h18Uu1t/42psOSdsB4qdkidx5L4W3BH219NEPaBoxvku9b+lvki2yXE+QUjZNu5Q9SIDsh8Geiexe2N7yKtpVoICrphtGPbteHqU+zJv+m0HMBMWRcoZRo+VwW5VbakzRt0ZnAcypI82A0klCysEuPWv27o2H3WVVePdIqMcdyCCykW6PdawfOqtOrP8CrrJ78dxOV8DwDSVqhKs2RauzbJZMp3bXgpbruC5V2wV32Rm3qudibxSv5iIP5lfBS9YR7pSEcaghXDpAblMNnDf0U60GWtRArBHbuniMN0Y6zOShfZZ2Hmi3wYXVrfka2JxT2xFC6zXDIFRGWeNSiWPDJiuXksoc64ZOI8UXCtZ41aeYCoKvGoXRGdt5JiGp1EPsm/7MpaSuXhGkNqk5tpyNFKy027EeP2CzAm+BClZOjfzT1frWth5z/IrP0ut9kaVs005EeJ+6lDhqK8v8BZps0E9swOKer/Etq++H9Cc/SPhl7HcNPLGqGfEd+nka/dAiZ/UfNceb2dPIfNdKn8S6V8TTQhf6XevtCO1jItoeBFUPFmi83Wg4akD6qIwBmp4Zwxd4XcPOq61XrWgn9s1/wBOXb6fqvMSNzA7A0rvn6BDRWAAgvpsReBSmZep7tRywTYEmMy5wPNdWrU0TWYzTOVbprV90WBuhgYi87wcV0FjhQkV+GlD4hFRoB3c7ghmyzwKgNbzAr805GafZiM6CLsTP1jkTRJNuPON9vl/hJaZfyZ9FlyHJwcmiCV3qyvia0Nr8H2BziPDk4OUV0roqtI+mTfdmbkiitH/AHG6l1B/2XIdlFvsuw2IrTkp51v9doPvEO/aCFZNV3ylTiKGY2e1YAIFlgG84lx0rkOQUk9EuNJ8kYXKsmTfdwGJ5rCEpWSW4KLbfIywIVImJyJPiG/5Wm6wLNWM68S/e8fAmg+St6LoS0UbvdIUt+4O60brnXjdBUXKIfpdX7mYf2gbrrYoOAxTZWzScXYBW0KA1ooBROU/h6M+W8Ixlal2A2y7jwUolOKIe6ibBiXl16fRNJWvtz/Jm5yZCZPihYsMtzVsoZqEHChWGs9C09kM1rDJC155KpzQcwFE+XZsFDFYWkhNvndedl6XZF4UhtSHPkmnUhQRLOGh8wphEO66IpQfkr12ZrG2S8gD7NOlPkonSrxv81a9al1ip03x7xNFqH5KUl4z9QkJtw0+auLyY5oOYHkhxJfdE1V0X3RXC0jxUjbVGv1U75Zh90KB8gw7hViHlBZqfdErbSYdlI2cYVXvs1u5ULrNIycrioL7ZNEdNMi561p1C5dGf2VGZKIMnepTDDjDL5puvUXw+y1/2Yz9L00+6X9F8WcfQfZJUHXRtkk19T1/+1mH0DS/4o1HWlIxl0tXLiayZnOu4JdeNkjDXDDUIVtruAfBi6BxaeTtfNGgpk7LX4bmbj10VZZ8/QBkQ0IwB0PjuuZrqXLEkMU88FjFaTgqu14txl0ZnD/KNmbQY0VvDkMSqllYjy92QxI2+FvNL6euWcsZWS3sSGGtIOl1vkKn1Ksg9qGk4BDBXM4nmcU+MWsFXOa0buIA9V2qk9pz5vLbJ77VYyEmMHnHZUNnz0CMaQorIl0i9ccHU50WvhZLpaOjdLdJdhe2WFwODUik4oeM9dUXSyBzkxif0ip56KSz3d0csUBMNybuauKOld1ENOOIFg1MiIaZLqsDTQk+BwyK6yYrUEXXDNv14hTIslyBzsMe14FB3W7omfi4Xd1Xli4es29T2jkexPcCXVKEQ024liwjq0uqUFCljuqITdUl1Shqd12p3ULJeqXeqUF47pGqpxT7onJMYATezt/hUVFxA6oPwWpP5HmWZuo3S7PiK6EghdFfwErJLyR9nbu7yCSlSQ/lq/gLrT+SURwnCOFVMiKZsREpguJYdcEuuCCD04PR7wdoV1w2VDPS46xwaQL3eukVaa58la3kQ2zWRmY1BBwcMxyKGUXYsR7hwnseWZ9kgR8DeIqT4IqXlxUMaMBRzjvtXiUe6wI2QitpuWm95VopmSBhClK7uzqdysI6e1PM+xpLURkuGUfTbpGZKWMVoBiOIZDByvHU8hUrwu07QiRnGJGe6I4nNxr5DIBew/iZZL5qU/pC8+E8PDRi5wycABrivHp2xppovOlozRqTDdT5L0eg2dPPk5eo3KRYdCZ+ZhTTTKhziSA9oFQ5lca7c19QSkW8xrhqAV4n+G0WOWMZEhQ4cKhDInsRTTUD3hXUr02UtMQ3XRVzTmBiWnU4aLeV8YTwwo1NwyjSuVTHmrpId4cQjoU21wBBzQdqy9RfGnyRXTarcoFV8PDKvrC5wruryWbRUjAAQTlVWrJto1WGhslOLcmb2vjAVEwdDP6vmCqa0Zq9FLxl7I5BWjSYhaA11K1JoQKUIzKsIMhDbkxvlVM3VSsjhPBz5WKE89zLw3Pdk0nwJRkCz4zjixrW0zJxrtdGi0eDeHouCIFhD02PeTyVPWyfYz81KGG4BxBDgaEYYjMIWZcGnLAhWHSmIRDa4CpD6+FDVUUGebEbWvFI6yuFctsRzSzdkcsnEcbFdEVv8CjvN3SqNwkhgmvN3S7p1UPd3SoN/VWQIDRul1YQ10bpEcVCBPVJdUhPFOrxUIE9Ul1SGqd/Vcx3UIFdWuIXHf1SUIUkOWi/D6j7qZkKN8PqPuiWxFI1yVRqDjrPh9Qpm3/h9QpQ9PvIuCiEB/w+oT4cWK32ajyopA9OvK0kiMey0I/A+ATn2hFIoWj+eKivLhRqcvkHavgrBBew5j+eCL7WaU/8UFqRKFvIoLtCXlqJxlhGyWUa6VsmA5jaw2nAYkYqeFY8FvstpXYlZeHbkRopgpW9IH/CPNdmHqGmlFKSF3TP5NfAl2tyyUkalDyWQHSRw931Qk50je4FtQAcMM/NaT9Sp2NRM/y8s9wkzFHYHI4eBWjg9IoVBeF08hReembKjMc7rm6fWTpftCu08bO56M/pNC+L0Q0bpU3QLz582BqhnzpTv1O59khT6fXnls2cz0ic44nw0Q77fiHJ1FkDMFNdOUzKylrLpfqNY6SqPg1Ee0nvFHPJ/miElmBnvErOutDZN7ad1jJObyzaOILCNZ2sbpdtCygnOK72w7q9pNxqu2ppnVl+3ndcNo8Qr2k3Go7el+YrLfmY3XPzRu6vYybjVdvXO38VlfzQbpfmreKnTZW5GpM+d1ztx3WW/NhxTTa/BX02Teavtx3SWT/N0lOkyt5tbx3UjXHdJJFFLATY9rjupAUkkaSBHtKeCuJKYRSO1XapJKNIsq7acat5H5oFpSSSs0shp8Dkx5XUkOEXkCe41zTQUklrFIzbO1Qsw47pJI0kC2DkrhKSS1SRSYyIcDyQLnFJJGkgZDAU+qSSPCAGhx3THuO64kiSRUuxE9xTCUkkSSBY2q4CkkixwU2dXSkkrwWcJSqkkrIdqkkkpgh//9k=",
    description:
      "गुरु पूजा एवं वैदिक मंत्र जाप से ज्ञान, विवेक और भाग्य वृद्धि",
    descriptionEn:
      "Guru Pooja and Vedic Mantra Jaap for knowledge, discretion and fortune increase",

    // Pooja details section
    poojaDetails: {
      title:
        "🔥 देवगुरु बृहस्पति — ज्ञान, धर्म, भाग्य एवं सद्बुद्धि के अधिष्ठाता — की कृपा से ग्रहदोष शांति एवं जीवन उन्नति हेतु विशेष अनुष्ठान! 🔥",
      titleEn:
        "🔥 Special ritual for planetary dosh peace and life progress through the grace of Devguru Brihaspati—presiding deity of knowledge, dharma, fortune and good intellect! 🔥",
      questions: [
        "क्या जीवन में मार्गदर्शन की कमी महसूस हो रही है?",
        "क्या शिक्षा, विवाह, संतान या करियर में बाधाएँ आ रही हैं?",
        "क्या भाग्य साथ नहीं दे रहा या बार-बार असफलता मिल रही है?",
      ],
      questionsEn: [
        "Is lack of guidance being felt in life?",
        "Are there obstacles in education, marriage, children or career?",
        "Is fortune not supporting or repeated failure being received?",
      ],
      opportunity:
        "✨ गुरु पूजा एवं गुरु वैदिक मंत्र जाप में सम्मिलित होकर आप—",
      opportunityEn:
        "✨ By participating in Guru Pooja and Guru Vedic Mantra Jaap, you—",
      benefits: [
        "ज्ञान, विवेक एवं आत्मविश्वास प्राप्त करेंगे",
        "भाग्य एवं ग्रहजनित नकारात्मक प्रभावों से रक्षा पाएँगे",
        "आध्यात्मिक एवं सांसारिक उन्नति का अनुभव करेंगे",
      ],
      benefitsEn: [
        "Will attain knowledge, discretion and self-confidence",
        "Will get protection from fortune and planetary negative effects",
        "Will experience spiritual and worldly progress",
      ],
      callToAction:
        "🙏 गुरु देव की कृपा से अपने जीवन को दिशा, स्थिरता और सफलता प्रदान करें।",
      callToActionEn:
        "🙏 Provide your life with direction, stability and success through Guru Dev's grace.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह प्राचीन गुरु मंदिर ज्ञान, विवेक और भाग्य वृद्धि के लिए प्रसिद्ध है।",
      locationEn:
        "This ancient Guru temple of Prayagraj is famous for knowledge, discretion and fortune increase.",

      deityForm:
        "यहाँ विराजमान गुरु देव (बृहस्पति) का विशेष रूप ज्ञान और धर्म के गुरु के रूप में पूजनीय है।",
      deityFormEn:
        "The special form of Guru Dev (Brihaspati) present here is worshipable as the guru of knowledge and dharma.",

      selfManifested:
        "इस मंदिर में स्थापित गुरु प्रतिमा स्वयंभू मानी जाती है जो ज्ञान प्राप्ति और भाग्य वृद्धि के लिए विशेष फलदायी है।",
      selfManifestedEn:
        "The Guru idol installed in this temple is considered self-manifested, which is especially fruitful for knowledge attainment and fortune increase.",

      importance:
        "गुरुवार का दिन गुरु देव का प्रिय दिवस माना जाता है। इस दिन गुरु पूजा एवं गुरु वैदिक मंत्र जाप करने से ज्ञान, विवेक और भाग्य में अद्भुत वृद्धि होती है।",
      importanceEn:
        "Thursday is considered the favorite day of Guru Dev. Performing Guru Pooja and Guru Vedic Mantra Jaap on this day leads to amazing increase in knowledge, discretion and fortune.",

      combinedBenefits:
        "विशेषकर गुरुवार के दिन त्रिवेणी स्नान के पश्चात गुरु देव के दर्शन करने से जीवन में सही मार्गदर्शन, विवेक और आध्यात्मिक प्रगति प्राप्त होती है।",
      combinedBenefitsEn:
        "Especially on Thursday, after Triveni bath, having darshan of Guru Dev leads to attainment of right guidance, discretion and spiritual progress in life.",

      vedicMantraConnection:
        "इसी पावन स्थल से गुरु वैदिक मंत्र जाप का गहरा संबंध माना जाता है।",
      vedicMantraConnectionEn:
        "Guru Vedic Mantra Jaap is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "शास्त्रों में कहा गया है— 'गुरुं शान्तिं भजेत् नित्यं स लभेत् ज्ञान वैभवम्'। अर्थात जो नित्य गुरु की शांति करता है, वह ज्ञान, विवेक और जीवन में उन्नति प्राप्त करता है।",
      scripturalReferenceEn:
        "It is said in scriptures— 'Gurum Shantim Bhajet Nityam Sa Labhet Gyan Vaibhavam'. Meaning, whoever regularly worships Guru's peace, attains knowledge, discretion and progress in life.",

      chantingBenefits:
        "गुरु मंत्र जाप से विशेष लाभ: शिक्षा, विवाह, संतान एवं करियर की बाधाओं से मुक्ति, भाग्य वृद्धि एवं नकारात्मक ग्रह प्रभावों का नाश, ज्ञान, विवेक, धर्मबोध एवं आध्यात्मिक प्रगति।",
      chantingBenefitsEn:
        "Special benefits from Guru Mantra Jaap: Freedom from obstacles in education, marriage, children and career, fortune increase and destruction of negative planetary effects, knowledge, discretion, dharma awareness and spiritual progress.",

      guruPlanetSignificance:
        "गुरु को ज्ञान और भाग्य का ग्रह कहा जाता है। उनकी शांति से जीवन में सही मार्गदर्शन मिलता है और भाग्य में वृद्धि होती है।",
      guruPlanetSignificanceEn:
        "Guru is called the planet of knowledge and fortune. Through his peace, right guidance is received in life and fortune increases.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और गुरु आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Guru worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, गुरु देव की कृपा, गुरुवार की विशेष उपासना तथा गुरु वैदिक मंत्र जाप आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Guru Dev, special worship on Thursday and Guru Vedic Mantra Jaap organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "गुरु ग्रह दोष शांति एवं भाग्य वृद्धि",
        titleEn: "Guru planet dosh peace and fortune increase",
        description:
          "गुरु की कृपा से जीवन में अटके कार्य पूर्ण होने लगते हैं। ज्योतिषीय दृष्टि से गुरु दोष, गुरु की महादशा-अंतर्दशा के दुष्प्रभाव कम होते हैं। गुरु वैदिक मंत्र जाप से भाग्य में वृद्धि होती है और जीवन में सौभाग्य प्राप्त होता है।",
        descriptionEn:
          "Through Guru's grace, stalled works in life start getting completed. From astrological perspective, Guru dosh, bad effects of Guru's Mahadasha-Antardasha are reduced. Guru Vedic Mantra Jaap increases fortune and good fortune is attained in life.",
      },
      {
        title: "ज्ञान, विवेक एवं आत्मविश्वास में वृद्धि",
        titleEn: "Increase in knowledge, discretion and self-confidence",
        description:
          "निर्णय क्षमता मजबूत होती है और सही मार्गदर्शन मिलता है। गुरु देव की कृपा से ज्ञान प्राप्ति में सहायता मिलती है, विवेक विकसित होता है और आत्मविश्वास बढ़ता है। यह पूजा बौद्धिक विकास में सहायक है।",
        descriptionEn:
          "Decision-making capacity becomes strong and right guidance is received. Through Guru Dev's grace, help is received in knowledge attainment, discretion develops and self-confidence increases. This worship is helpful in intellectual development.",
      },
      {
        title: "शिक्षा, संतान, विवाह एवं करियर में उन्नति",
        titleEn: "Progress in education, children, marriage and career",
        description:
          "गुरु देव की शांति से जीवन के महत्वपूर्ण क्षेत्रों में सफलता मिलती है। शिक्षा में सफलता, संतान सुख, वैवाहिक जीवन में सुधार और करियर में प्रगति होती है। यह उपासना जीवन के मूलभूत सुखों के लिए विशेष लाभकारी है।",
        descriptionEn:
          "Through Guru Dev's peace, success is attained in important areas of life. Success in education, happiness of children, improvement in marital life and progress in career occur. This worship is especially beneficial for basic happiness of life.",
      },
      {
        title: "आध्यात्मिक चेतना एवं धर्म मार्ग की प्राप्ति",
        titleEn: "Attainment of spiritual consciousness and dharma path",
        description:
          "आस्था सुदृढ़ होती है और जीवन उद्देश्य स्पष्ट होता है। गुरु देव की कृपा से आध्यात्मिक चेतना जाग्रत होती है और धर्म मार्ग पर चलने की प्रेरणा मिलती है।",
        descriptionEn:
          "Faith becomes strong and life purpose becomes clear. Through Guru Dev's grace, spiritual consciousness awakens and inspiration to walk on the path of dharma is received.",
      },
      {
        title: "पूर्व जन्म एवं वर्तमान कर्म दोषों में शमन",
        titleEn: "Pacification of past and present karma defects",
        description:
          "गुरु पूजा एवं गुरु वैदिक मंत्र जाप से कर्म दोष शांत होते हैं। पूर्व जन्म के ज्ञान संबंधी कर्म दोषों का शमन होता है और वर्तमान में धर्म मार्ग पर चलने की शक्ति प्राप्त होती है।",
        descriptionEn:
          "Through Guru worship and Guru Vedic Mantra Jaap, karma defects are pacified. Knowledge-related karma defects of past lives are pacified and power to walk on dharma path in present is attained.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "गुरु देव पूजन एवं आवाहन",
      "गुरु वैदिक मंत्र जाप",
      "हवन एवं आहुति",
      "पीले पुष्प एवं पीत वस्त्र पूजन",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Guru Dev Poojan and Invocation",
      "Guru Vedic Mantra Jaap",
      "Havan and Ahuti",
      "Yellow flowers and yellow cloth worship",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "गुरु वैदिक मंत्र जाप",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "पीले पुष्प एवं पीत वस्त्र",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Guru Vedic Mantra Jaap",
      "All worship materials",
      "Havan materials",
      "Yellow flowers and yellow cloth",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/guru-temple.jpg",
      "https://example.com/guru-yantra.jpg",
      "https://example.com/guidance.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "गुरु देव",
        "बृहस्पति",
        "गुरु शांति",
        "ज्ञान विकास",
        "भाग्य वृद्धि",
        "गुरुवार",
        "वैदिक मंत्र",
        "प्रयागराज",
      ],
      keywordsEn: [
        "Guru Dev",
        "Brihaspati",
        "Guru Peace",
        "Knowledge Development",
        "Fortune Increase",
        "Thursday",
        "Vedic Mantra",
        "Prayagraj",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["विद्यार्थी", "गृहस्थ", "साधक", "शिक्षक", "सभी आयु वर्ग"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 11,
    date: "2026-01-30T18:00:00",
    day: "Friday",
    dayHi: "शुक्रवार",

    // Lunar date details
    tithi: "द्वादशी",
    tithiEn: "Dwadashi",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "30/01/26",
    dateHindi: "30 जनवरी 2026",

    category: [
      "श्री सूक्त",
      "सौभाग्य",
      "समृद्धि",
      "मानसिक शांति",
      "दैवी कृपा",
      "वैदिक अनुष्ठान",
    ],
    categoryEn: [
      "Shri Sukt",
      "Good Fortune",
      "Prosperity",
      "Mental Peace",
      "Divine Grace",
      "Vedic Ritual",
    ],
    deity: ["Goddess Lakshmi"],
    deityHi: ["माता लक्ष्मी"],
    poojaName: "श्री सूक्त पाठ",
    poojaNameEn: "Shri Sukt Path",

    // Mantra details
    mantra:
      "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः",
    mantraEn:
      "Om Shreem Hreem Shreem Kamale Kamalalaye Praseed Praseed Om Shreem Hreem Shreem Mahalakshmyai Namah",
    specificMantra: "श्री सूक्त मंत्र",
    specificMantraEn: "Shri Sukt Mantra",
    mantraMeaning:
      "सौभाग्य, समृद्धि और मानसिक शांति प्रदान करने का वैदिक मंत्र",
    mantraMeaningEn:
      "Vedic mantra for providing good fortune, prosperity and mental peace",
    jaapSankhya: 1,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title:
          "निर्णय क्षमता शिथिल होने लगे, आत्मविश्वास में कमी प्रतीत हो, जब बार-बार प्रयास करने पर भी इच्छित फल की प्राप्ति न हो",
        titleEn:
          "When decision-making capacity starts weakening, decrease seems in self-confidence, even when desired results are not attained despite repeated efforts",
        content:
          "निर्णय क्षमता शिथिल होने लगे, आत्मविश्वास में कमी प्रतीत हो, जब बार-बार प्रयास करने पर भी इच्छित फल की प्राप्ति न हो जब शिक्षा, विवाह, संतान, करियर अथवा आर्थिक प्रगति में बाधाएँ उत्पन्न होने लगें, तब श्री सूक्त पाठ मानव जीवन में दैवी कृपा, स्थिरता और समृद्धि का संचार करता है। श्री सूक्त पाठ नकारात्मक प्रभावों का शमन कर, चित्त को शुद्ध एवं शांत करता है और जीवन में सौभाग्य, सद्बुद्धि, शांति तथा आध्यात्मिक उन्नति का मार्ग प्रशस्त करता है।",
        contentEn:
          "When decision-making capacity starts weakening, decrease seems in self-confidence, even when desired results are not attained despite repeated efforts When obstacles start arising in education, marriage, children, career or economic progress, then Shri Sukt Path infuses human life with divine grace, stability and prosperity. Shri Sukt Path pacifies negative effects, purifies and pacifies the mind, paving the way for good fortune, good intellect, peace and spiritual progress in life.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title: "श्री सूक्त पाठ से प्राप्त आशीर्वाद",
        titleEn: "Blessings received from Shri Sukt Path",
        blessings: [
          "अभाव, मानसिक अस्थिरता एवं आत्मविश्वास की कमी से मुक्ति",
          "शिक्षा, विवाह, संतान, करियर एवं धन से जुड़ी बाधाओं का निवारण",
          "सद्बुद्धि, विवेक, सौभाग्य एवं आध्यात्मिक चेतना में वृद्धि",
        ],
        blessingsEn: [
          "Freedom from lack, mental instability and lack of self-confidence",
          "Removal of obstacles related to education, marriage, children, career and wealth",
          "Increase in good intellect, discretion, good fortune and spiritual consciousness",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों करें श्री सूक्त पाठ",
        titleEn: "Why perform Shri Sukt Path",
        content:
          "श्री सूक्त वैदिक शास्त्रों में माता लक्ष्मी की उपासना का अत्यंत पवित्र एवं प्रभावशाली स्तोत्र माना गया है। यह जीवन में धन, विद्या, यश, स्थिरता और दैवी संरक्षण प्रदान करता है। जब जीवन में अभाव बना रहता है, परिश्रम का पूर्ण फल प्राप्त नहीं होता, आर्थिक अस्थिरता बनी रहती है, या निराशा और रुकावटें बढ़ने लगती हैं, तब श्री सूक्त पाठ से जीवन में संतुलन, आशा और प्रगति प्राप्त होती है। जो साधक श्रद्धा एवं नियमपूर्वक श्री सूक्त पाठ करता है, उसे दैवी कृपा, सौभाग्य वृद्धि एवं जीवन में सकारात्मक परिवर्तन प्राप्त होता है।",
        contentEn:
          "Shri Sukt is considered in Vedic scriptures as an extremely pure and powerful hymn for worship of Mother Lakshmi. It provides wealth, knowledge, fame, stability and divine protection in life. When lack remains in life, full fruits of hard work are not attained, economic instability remains, or despair and obstacles start increasing, then through Shri Sukt Path, balance, hope and progress are attained in life. The seeker who performs Shri Sukt Path with devotion and discipline, attains divine grace, increase in good fortune and positive transformation in life.",
      },
    ],

    laabh: [
      "सौभाग्य एवं समृद्धि में वृद्धि",
      "मानसिक शांति एवं आत्मविश्वास का विकास",
      "शिक्षा, विवाह, संतान एवं करियर में अनुकूलता",
      "आध्यात्मिक चेतना एवं दैवी कृपा की प्राप्ति",
      "पूर्व एवं वर्तमान कर्म दोषों में शमन",
    ],
    laabhEn: [
      "Increase in good fortune and prosperity",
      "Development of mental peace and self-confidence",
      "Favorability in education, marriage, children and career",
      "Attainment of spiritual consciousness and divine grace",
      "Pacification of past and present karma defects",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "लक्ष्मी मंदिर, प्रयागराज",
    placeEn: "Lakshmi Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image:
      "https://i.pinimg.com/originals/37/26/98/3726983c1c377c5236b3027672c19a88.jpg",
    description:
      "श्री सूक्त पाठ से सौभाग्य, समृद्धि और मानसिक शांति की प्राप्ति",
    descriptionEn:
      "Shri Sukt Path for attainment of good fortune, prosperity and mental peace",

    // Pooja details section
    poojaDetails: {
      title:
        "🔥 श्री सूक्त पाठ — माता लक्ष्मी की कृपा से सौभाग्य, शांति एवं समृद्धि हेतु विशेष वैदिक अनुष्ठान! 🔥",
      titleEn:
        "🔥 Special Vedic ritual for good fortune, peace and prosperity through the grace of Mother Lakshmi! 🔥",
      questions: [
        "क्या जीवन में बार-बार आर्थिक या मानसिक बाधाएँ आ रही हैं?",
        "क्या परिश्रम के अनुरूप फल प्राप्त नहीं हो रहा?",
        "क्या जीवन में स्थिरता और शांति की कामना है?",
      ],
      questionsEn: [
        "Are there repeated economic or mental obstacles in life?",
        "Are results not being received according to hard work?",
        "Is there desire for stability and peace in life?",
      ],
      opportunity: "✨ श्री सूक्त पाठ में सम्मिलित होकर आप—",
      opportunityEn: "✨ By participating in Shri Sukt Path, you—",
      benefits: [
        "सौभाग्य एवं सकारात्मक ऊर्जा का अनुभव करेंगे",
        "नकारात्मक प्रभावों से रक्षा पाएँगे",
        "आध्यात्मिक एवं सांसारिक उन्नति की अनुभूति करेंगे",
      ],
      benefitsEn: [
        "Will experience good fortune and positive energy",
        "Will get protection from negative effects",
        "Will feel spiritual and worldly progress",
      ],
      callToAction:
        "🙏 माता लक्ष्मी की कृपा से अपने जीवन को शांति, स्थिरता और समृद्धि प्रदान करें।",
      callToActionEn:
        "🙏 Provide your life with peace, stability and prosperity through Mother Lakshmi's grace.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह प्राचीन लक्ष्मी मंदिर सौभाग्य, समृद्धि और शांति के लिए प्रसिद्ध है।",
      locationEn:
        "This ancient Lakshmi temple of Prayagraj is famous for good fortune, prosperity and peace.",

      deityForm:
        "यहाँ विराजमान माता लक्ष्मी का विशेष रूप श्री विद्या की देवी के रूप में पूजनीय है।",
      deityFormEn:
        "The special form of Mother Lakshmi present here is worshipable as the goddess of Sri Vidya.",

      selfManifested:
        "इस मंदिर में स्थापित लक्ष्मी प्रतिमा स्वयंभू मानी जाती है जो सौभाग्य और समृद्धि प्रदान करने के लिए विशेष फलदायी है।",
      selfManifestedEn:
        "The Lakshmi idol installed in this temple is considered self-manifested, which is especially fruitful for providing good fortune and prosperity.",

      importance:
        "शुक्रवार का दिन माता लक्ष्मी का प्रिय दिवस माना जाता है। इस दिन श्री सूक्त पाठ करने से सौभाग्य, समृद्धि और मानसिक शांति में अद्भुत वृद्धि होती है।",
      importanceEn:
        "Friday is considered the favorite day of Mother Lakshmi. Performing Shri Sukt Path on this day leads to amazing increase in good fortune, prosperity and mental peace.",

      combinedBenefits:
        "विशेषकर शुक्रवार के दिन त्रिवेणी स्नान के पश्चात माता लक्ष्मी के दर्शन करने से जीवन में अभाव दूर होता है और समृद्धि प्राप्त होती है।",
      combinedBenefitsEn:
        "Especially on Friday, after Triveni bath, having darshan of Mother Lakshmi leads to removal of lack in life and attainment of prosperity.",

      shriSuktConnection:
        "इसी पावन स्थल से श्री सूक्त पाठ का गहरा संबंध माना जाता है।",
      shriSuktConnectionEn:
        "Shri Sukt Path is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "वैदिक शास्त्रों में वर्णित है कि नियमपूर्वक श्री सूक्त पाठ करने से सौभाग्य, समृद्धि एवं दैवी संरक्षण प्राप्त होता है।",
      scripturalReferenceEn:
        "It is described in Vedic scriptures that by performing Shri Sukt Path regularly, good fortune, prosperity and divine protection are attained.",

      chantingBenefits:
        "श्री सूक्त पाठ से विशेष लाभ: आर्थिक, पारिवारिक एवं व्यावसायिक बाधाओं से मुक्ति, सौभाग्य वृद्धि एवं नकारात्मक प्रभावों का शमन, मानसिक शांति, स्थिरता एवं आध्यात्मिक प्रगति।",
      chantingBenefitsEn:
        "Special benefits from Shri Sukt Path: Freedom from economic, family and business obstacles, increase in good fortune and pacification of negative effects, mental peace, stability and spiritual progress.",

      vedicSuktSignificance:
        "श्री सूक्त ऋग्वेद का अत्यंत पवित्र सूक्त है जो सभी प्रकार के अभावों को दूर कर समृद्धि प्रदान करता है।",
      vedicSuktSignificanceEn:
        "Shri Sukt is an extremely pure hymn from Rigveda which removes all types of lacks and provides prosperity.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और श्री सूक्त पाठ—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Shri Sukt Path—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, माता लक्ष्मी की कृपा, शुक्रवार की विशेष उपासना तथा श्री सूक्त पाठ आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Mother Lakshmi, special worship on Friday and Shri Sukt Path organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "सौभाग्य एवं समृद्धि में वृद्धि",
        titleEn: "Increase in good fortune and prosperity",
        description:
          "श्री सूक्त पाठ से जीवन में सौभाग्य और समृद्धि का प्रवाह बढ़ता है। आर्थिक स्थिति में सुधार होता है, धन प्राप्ति के नए साधन खुलते हैं और जीवन में भौतिक सुखों की प्राप्ति होती है। यह पाठ संपत्ति और समृद्धि के लिए अत्यंत शुभ है।",
        descriptionEn:
          "Through Shri Sukt Path, flow of good fortune and prosperity increases in life. Economic condition improves, new means of wealth attainment open and attainment of material comforts occurs in life. This path is extremely auspicious for wealth and prosperity.",
      },
      {
        title: "मानसिक शांति एवं आत्मविश्वास का विकास",
        titleEn: "Development of mental peace and self-confidence",
        description:
          "मानसिक शांति और आत्मविश्वास में वृद्धि होती है। चिंता, तनाव और अशांति दूर होती है। माता लक्ष्मी की कृपा से मन शांत होता है और आत्मविश्वास बढ़ता है। यह पाठ मानसिक स्थिरता के लिए विशेष लाभकारी है।",
        descriptionEn:
          "Increase occurs in mental peace and self-confidence. Worry, stress and restlessness are removed. Through Mother Lakshmi's grace, mind becomes peaceful and self-confidence increases. This path is especially beneficial for mental stability.",
      },
      {
        title: "शिक्षा, विवाह, संतान एवं करियर में अनुकूलता",
        titleEn: "Favorability in education, marriage, children and career",
        description:
          "शिक्षा में सफलता, विवाह में सुख, संतान प्राप्ति और करियर में उन्नति होती है। श्री सूक्त पाठ से जीवन के महत्वपूर्ण क्षेत्रों में अनुकूलता बढ़ती है और बाधाएँ दूर होती हैं।",
        descriptionEn:
          "Success in education, happiness in marriage, attainment of children and progress in career occur. Through Shri Sukt Path, favorability increases in important areas of life and obstacles are removed.",
      },
      {
        title: "आध्यात्मिक चेतना एवं दैवी कृपा की प्राप्ति",
        titleEn: "Attainment of spiritual consciousness and divine grace",
        description:
          "आध्यात्मिक चेतना जाग्रत होती है और दैवी कृपा प्राप्त होती है। श्री सूक्त पाठ से माता लक्ष्मी की विशेष कृपा मिलती है और जीवन में दिव्य संरक्षण प्राप्त होता है।",
        descriptionEn:
          "Spiritual consciousness awakens and divine grace is attained. Through Shri Sukt Path, special grace of Mother Lakshmi is received and divine protection is attained in life.",
      },
      {
        title: "पूर्व एवं वर्तमान कर्म दोषों में शमन",
        titleEn: "Pacification of past and present karma defects",
        description:
          "श्री सूक्त पाठ से पूर्व जन्म के कर्म दोषों का शमन होता है और वर्तमान में सकारात्मक कर्मों का संचय होता है। यह अनुष्ठान कर्म शुद्धि में सहायक है।",
        descriptionEn:
          "Through Shri Sukt Path, karma defects of past lives are pacified and accumulation of positive karmas occurs in present. This ritual is helpful in karma purification.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "माता लक्ष्मी पूजन एवं आवाहन",
      "श्री सूक्त पाठ",
      "लक्ष्मी यंत्र पूजन",
      "हवन एवं आहुति",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Mother Lakshmi Poojan and Invocation",
      "Shri Sukt Path",
      "Lakshmi Yantra Poojan",
      "Havan and Ahuti",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "श्री सूक्त पाठ",
      "सभी पूजा सामग्री",
      "लक्ष्मी यंत्र",
      "हवन सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Shri Sukt Path",
      "All worship materials",
      "Lakshmi Yantra",
      "Havan materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/lakshmi-temple.jpg",
      "https://example.com/shri-sukt-book.jpg",
      "https://example.com/prosperity-symbols.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "श्री सूक्त",
        "माता लक्ष्मी",
        "सौभाग्य",
        "समृद्धि",
        "मानसिक शांति",
        "शुक्रवार",
        "वैदिक पाठ",
        "प्रयागराज",
      ],
      keywordsEn: [
        "Shri Sukt",
        "Mother Lakshmi",
        "Good Fortune",
        "Prosperity",
        "Mental Peace",
        "Friday",
        "Vedic Path",
        "Prayagraj",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["सभी आयु वर्ग", "गृहस्थ", "व्यापारी", "साधक", "गृहिणी"],
      restrictions: ["कोई विशेष प्रतिबंध नहीं"],
    },
  },
  {
    id: 12,
    date: "2026-01-31T18:00:00",
    day: "Saturday",
    dayHi: "शनिवार",

    // Lunar date details
    tithi: "त्रयोदशी",
    tithiEn: "Trayodashi",
    paksha: "शुक्ल पक्ष",
    pakshaEn: "Shukla Paksha",
    nakshatra: "",
    nakshatraEn: "",
    dateFormatted: "31/01/26",
    dateHindi: "31 जनवरी 2026",

    category: [
      "राहु दोष निवारण",
      "मानसिक शुद्धि",
      "आकस्मिक संकट निवारण",
      "भय मुक्ति",
      "ग्रह शांति",
    ],
    categoryEn: [
      "Rahu Dosh Removal",
      "Mental Purification",
      "Sudden Crisis Removal",
      "Freedom from Fear",
      "Planetary Peace",
    ],
    deity: ["Lord Rahu"],
    deityHi: ["राहुदेव"],
    poojaName: "राहु दोष निवारण पूजा एवं राहु वैदिक मंत्र जाप",
    poojaNameEn: "Rahu Dosh Nivaran Pooja and Rahu Vedic Mantra Jaap",

    // Mantra details
    mantra: "ॐ रां राहवे नमः",
    mantraEn: "Om Ram Raahave Namah",
    specificMantra: "राहु वैदिक मंत्र",
    specificMantraEn: "Rahu Vedic Mantra",
    mantraMeaning: "राहु दोष शांति और भय मुक्ति का मंत्र",
    mantraMeaningEn: "Mantra for Rahu dosh peace and freedom from fear",
    jaapSankhya: 18000,
    pathCount: 1,

    // Page content
    detailedPages: [
      {
        pageNumber: 1,
        title:
          "अचानक उतार–चढ़ाव बढ़ने लगें, मन भ्रमित होने लगें, मेहनत के बाद भी अस्थिरता बनी रहे",
        titleEn:
          "When sudden ups and downs start increasing, mind starts getting confused, instability remains even after hard work",
        content:
          "अचानक उतार–चढ़ाव बढ़ने लगें, मन भ्रमित होने लगें, मेहनत के बाद भी अस्थिरता बनी रहे भय, चिंता, नकारात्मक विचार और असफलता घेरने लगे, तब छाया ग्रह राहुदेव की शांति मानव जीवन को विवेक, स्थिरता और सुरक्षा प्रदान करती है। राहु दोष निवारण पूजा एवं राहु वैदिक मंत्र जाप कर्मों की अशुद्धि को शांत कर, भ्रम, भय, बाधा और आकस्मिक संकटों का नाश कर जीवन में स्पष्टता, उन्नति और संतुलन का मार्ग प्रशस्त करता है।",
        contentEn:
          "When sudden ups and downs start increasing, mind starts getting confused, instability remains even after hard work When fear, worry, negative thoughts and failure start surrounding, then the peace of shadow planet Rahudev provides discretion, stability and security to human life. Rahu Dosh Nivaran Pooja and Rahu Vedic Mantra Jaap pacifies impurity of karmas, destroys confusion, fear, obstacles and sudden crises, paving the way for clarity, progress and balance in life.",
        showImage: true,
        imagePosition: "center",
      },
      {
        pageNumber: 2,
        title: "राहु दोष निवारण पूजा से प्राप्त होने वाले दिव्य आशीर्वाद",
        titleEn: "Divine blessings received from Rahu Dosh Nivaran Pooja",
        blessings: [
          "राहु दोष, कालसर्प दोष एवं आकस्मिक बाधाओं से मुक्ति",
          "नकारात्मक विचार, भ्रम, भय और मानसिक अस्थिरता में कमी",
          "करियर, धन, स्वास्थ्य एवं पारिवारिक जीवन में संतुलन",
        ],
        blessingsEn: [
          "Freedom from Rahu dosh, Kalsarpa dosh and sudden obstacles",
          "Reduction in negative thoughts, confusion, fear and mental instability",
          "Balance in career, wealth, health and family life",
        ],
      },
      {
        pageNumber: 3,
        title: "क्यों करें पूजा राहुदेव की",
        titleEn: "Why worship Lord Rahu",
        content:
          "राहुदेव छाया ग्रह हैं, जो मनुष्य के जीवन में अचानक परिवर्तन, भ्रम, भय, आकांक्षा और अस्थिरता का कारण बनते हैं। जब राहु अशुभ स्थिति में होते हैं, तब व्यक्ति गलत निर्णय, मानसिक तनाव, धोखा, भय और अप्रत्याशित समस्याओं से ग्रस्त हो जाता है। जो भक्त श्रद्धा, नियम और शुद्ध भाव से राहु दोष निवारण पूजा एवं राहु वैदिक मंत्र जाप करता है, उसे राहुदेव की कृपा से मानसिक स्पष्टता, आत्मविश्वास, सुरक्षा और स्थिर प्रगति प्राप्त होती है।",
        contentEn:
          "Rahudev are shadow planets, which cause sudden changes, confusion, fear, ambition and instability in human life. When Rahu is in inauspicious position, then a person becomes afflicted with wrong decisions, mental stress, deception, fear and unexpected problems. The devotee who performs Rahu Dosh Nivaran Pooja and Rahu Vedic Mantra Jaap with devotion, discipline and pure feelings, attains mental clarity, self-confidence, security and stable progress through Rahudev's grace.",
      },
    ],

    laabh: [
      "राहु दोष निवारण एवं मानसिक शुद्धि",
      "करियर एवं आर्थिक जीवन में संतुलन",
      "भय, तनाव और भ्रम से मुक्ति",
      "आध्यात्मिक संरक्षण एवं आत्मबल",
    ],
    laabhEn: [
      "Rahu Dosh Removal and Mental Purification",
      "Balance in career and economic life",
      "Freedom from fear, stress and confusion",
      "Spiritual Protection and Self-confidence",
    ],

    cost: {
      single: 511,
      twoPersons: 711,
      familyOf4: 1011,
      familyOf6: 1261,
    },

    place: "राहु मंदिर, प्रयागराज",
    placeEn: "Rahu Temple, Prayagraj",
    time: "10:00 AM to 12:00 PM",
    timeHi: "सुबह 10:00 से दोपहर 12:00 तक",

    image: "https://vaikunth.co/uploads/god/raha-garaha1690521393vaikunth.png ",
    description:
      "राहु दोष निवारण पूजा एवं वैदिक मंत्र जाप से ग्रह शांति और मानसिक स्पष्टता",
    descriptionEn:
      "Rahu Dosh Nivaran Pooja and Vedic Mantra Jaap for planetary peace and mental clarity",

    // Pooja details section
    poojaDetails: {
      title: "🔥 भ्रम, भय और आकस्मिक बाधाओं से मुक्ति का दिव्य अवसर! 🔥",
      titleEn:
        "🔥 Divine opportunity for freedom from confusion, fear and sudden obstacles! 🔥",
      questions: [
        "क्या जीवन में अचानक समस्याएँ बढ़ गई हैं?",
        "क्या बार-बार गलत निर्णय हो रहे हैं?",
        "क्या राहु दोष या मानसिक अस्थिरता से परेशान हैं?",
      ],
      questionsEn: [
        "Have sudden problems increased in life?",
        "Are wrong decisions happening repeatedly?",
        "Are you troubled by Rahu dosh or mental instability?",
      ],
      opportunity:
        "✨ राहु दोष निवारण पूजा एवं राहु वैदिक मंत्र जाप में सम्मिलित होकर आप—",
      opportunityEn:
        "✨ By participating in Rahu Dosh Nivaran Pooja and Rahu Vedic Mantra Jaap, you—",
      benefits: [
        "राहु दोष एवं नकारात्मक ग्रह प्रभावों से राहत पाएँगे",
        "जीवन में स्पष्टता, संतुलन और सुरक्षा अनुभव करेंगे",
        "मानसिक, आर्थिक और पारिवारिक समस्याओं से मुक्ति पाएँगे",
      ],
      benefitsEn: [
        "Will get relief from Rahu dosh and negative planetary effects",
        "Will experience clarity, balance and security in life",
        "Will get freedom from mental, economic and family problems",
      ],
      callToAction:
        "🙏 राहुदेव की कृपा से अपने जीवन को भय-मुक्त और स्थिर बनाएं।",
      callToActionEn:
        "🙏 Make your life fear-free and stable through Rahudev's grace.",
    },

    // Temple significance
    templeSignificance: {
      location:
        "प्रयागराज का यह प्राचीन राहु मंदिर ग्रह शांति और मानसिक स्पष्टता के लिए प्रसिद्ध है।",
      locationEn:
        "This ancient Rahu temple of Prayagraj is famous for planetary peace and mental clarity.",

      deityForm:
        "यहाँ विराजमान राहुदेव का विशेष रूप छाया ग्रह और भ्रम के देवता के रूप में पूजनीय है।",
      deityFormEn:
        "The special form of Rahudev present here is worshipable as the shadow planet and deity of confusion.",

      selfManifested:
        "इस मंदिर में स्थापित राहु प्रतिमा स्वयंभू मानी जाती है जो राहु दोष निवारण के लिए विशेष फलदायी है।",
      selfManifestedEn:
        "The Rahu idol installed in this temple is considered self-manifested, which is especially fruitful for Rahu dosh removal.",

      importance:
        "शनिवार का दिन राहुदेव के लिए विशेष माना जाता है। इस दिन राहु पूजा एवं राहु वैदिक मंत्र जाप करने से भ्रम, भय और आकस्मिक बाधाओं से मुक्ति मिलती है।",
      importanceEn:
        "Saturday is considered special for Rahudev. Performing Rahu Pooja and Rahu Vedic Mantra Jaap on this day leads to freedom from confusion, fear and sudden obstacles.",

      combinedBenefits:
        "विशेषकर शनिवार के दिन त्रिवेणी स्नान के पश्चात राहुदेव के दर्शन करने से मानसिक स्पष्टता और भय मुक्ति प्राप्त होती है।",
      combinedBenefitsEn:
        "Especially on Saturday, after Triveni bath, having darshan of Rahudev leads to attainment of mental clarity and freedom from fear.",

      vedicMantraConnection:
        "इसी पावन स्थल से राहु वैदिक मंत्र जाप का गहरा संबंध माना जाता है।",
      vedicMantraConnectionEn:
        "Rahu Vedic Mantra Jaap is also considered to have a deep connection with this sacred site.",

      scripturalReference:
        "शास्त्रों में कहा गया है— 'राहुः छायाग्रहः, भोगदाता भयहरः'। अर्थात राहुदेव भय देने वाले भी हैं और शांति देने वाले भी—यह सब साधक के कर्म और साधना पर निर्भर करता है।",
      scripturalReferenceEn:
        "It is said in scriptures— 'Rahuh Chhayagrahah, Bhogdatta Bhayaharah'. Meaning, Rahudev are both fear-giving and peace-giving—all this depends on the seeker's karma and sadhana.",

      chantingBenefits:
        "राहु वैदिक मंत्र जाप से विशेष फल: राहु दोष एवं कालसर्प दोष का शमन, मानसिक स्थिरता, विवेक और निर्णय क्षमता, भय, दुर्घटना, रोग एवं नकारात्मक ऊर्जा में कमी।",
      chantingBenefitsEn:
        "Special results from Rahu Vedic Mantra Jaap: Pacification of Rahu dosh and Kalsarpa dosh, mental stability, discretion and decision-making capacity, reduction in fear, accidents, diseases and negative energy.",

      kalsarpaSignificance:
        "कालसर्प दोष में राहु की भूमिका प्रमुख होती है। इस पूजा से कालसर्प दोष का भी शमन होता है।",
      kalsarpaSignificanceEn:
        "Rahu's role is major in Kalsarpa dosh. Through this worship, Kalsarpa dosh is also pacified.",

      combinedResult:
        "यहाँ त्रिवेणी स्नान, दान-पुण्य और राहु आराधना—तीनों का संयुक्त एवं अक्षय फल प्राप्त होता है।",
      combinedResultEn:
        "Here, Triveni bath, charity-punishment and Rahu worship—all three yield combined and imperishable results.",

      conclusion:
        "इस प्रकार त्रिवेणी की पावन धारा, राहुदेव की कृपा, शनिवार की विशेष उपासना तथा राहु वैदिक मंत्र जाप आयोजन भगवान पूजा द्वारा",
      conclusionEn:
        "Thus, through the holy stream of Triveni, the grace of Rahudev, special worship on Saturday and Rahu Vedic Mantra Jaap organization",
    },

    // Detailed benefits with explanations
    detailedBenefits: [
      {
        title: "राहु दोष निवारण एवं मानसिक शुद्धि",
        titleEn: "Rahu Dosh Removal and Mental Purification",
        description:
          "इस पूजा से कुंडली के राहु दोष शांत होते हैं और नकारात्मक प्रभाव कम होते हैं। राहु की महादशा-अंतर्दशा के दुष्प्रभावों में कमी आती है। राहु वैदिक मंत्र जाप से मानसिक शुद्धि होती है और नकारात्मक विचार दूर होते हैं।",
        descriptionEn:
          "Through this worship, Rahu dosh in the horoscope is pacified and negative effects are reduced. Bad effects of Rahu's Mahadasha-Antardasha decrease. Rahu Vedic Mantra Jaap leads to mental purification and negative thoughts are removed.",
      },
      {
        title: "करियर एवं आर्थिक जीवन में संतुलन",
        titleEn: "Balance in career and economic life",
        description:
          "नौकरी, व्यापार और धन संबंधी अनिश्चितता में सुधार होता है। राहुदेव की कृपा से करियर में स्थिरता आती है और आर्थिक उतार-चढ़ाव कम होते हैं। यह पूजा व्यावसायिक सफलता के लिए लाभकारी है।",
        descriptionEn:
          "Improvement occurs in uncertainty related to job, business and wealth. Through Rahudev's grace, stability comes in career and economic fluctuations reduce. This worship is beneficial for business success.",
      },
      {
        title: "भय, तनाव और भ्रम से मुक्ति",
        titleEn: "Freedom from fear, stress and confusion",
        description:
          "राहु मंत्र जाप से मानसिक दबाव, भय और अनिद्रा में कमी आती है। अकारण भय, चिंता और मानसिक भ्रम दूर होते हैं। यह साधना मानसिक शांति और स्पष्टता प्रदान करती है।",
        descriptionEn:
          "Through Rahu mantra jaap, mental pressure, fear and insomnia decrease. Reasonless fear, worry and mental confusion are removed. This sadhana provides mental peace and clarity.",
      },
      {
        title: "आध्यात्मिक संरक्षण एवं आत्मबल",
        titleEn: "Spiritual Protection and Self-confidence",
        description:
          "यह साधना व्यक्ति को सही मार्ग, विवेक और आत्मविश्वास प्रदान करती है। राहुदेव की कृपा से आध्यात्मिक संरक्षण मिलता है और आत्मबल में वृद्धि होती है। यह पूजा अंधविश्वास और गलत मार्ग से बचाती है।",
        descriptionEn:
          "This sadhana provides right path, discretion and self-confidence to a person. Through Rahudev's grace, spiritual protection is received and self-confidence increases. This worship protects from superstition and wrong path.",
      },
    ],

    // Pooja procedure
    poojaProcedure: [
      "राहुदेव पूजन एवं आवाहन",
      "राहु वैदिक मंत्र जाप",
      "हवन एवं आहुति",
      "नीले पुष्प पूजन",
      "आरती एवं प्रसाद वितरण",
    ],
    poojaProcedureEn: [
      "Rahudev Poojan and Invocation",
      "Rahu Vedic Mantra Jaap",
      "Havan and Ahuti",
      "Blue flowers worship",
      "Aarti and Prasad Distribution",
    ],

    // What's included
    inclusions: [
      "पंडित जी द्वारा विधिवत पूजन",
      "राहु वैदिक मंत्र जाप",
      "सभी पूजा सामग्री",
      "हवन सामग्री",
      "नीले पुष्प सामग्री",
      "प्रसाद पैकेट",
      "पूजा फोटो (विकल्प के अनुसार)",
    ],
    inclusionsEn: [
      "Proper worship by Pandit Ji",
      "Rahu Vedic Mantra Jaap",
      "All worship materials",
      "Havan materials",
      "Blue flowers materials",
      "Prasad packet",
      "Pooja photo (as per option)",
    ],

    // Additional images
    additionalImages: [
      "https://example.com/rahu-temple.jpg",
      "https://example.com/rahu-yantra.jpg",
      "https://example.com/planetary-peace.jpg",
    ],

    // Meta information
    meta: {
      keywords: [
        "राहु दोष निवारण",
        "राहु पूजा",
        "कालसर्प दोष",
        "भय मुक्ति",
        "मानसिक शुद्धि",
        "शनिवार",
        "वैदिक मंत्र",
        "प्रयागराज",
      ],
      keywordsEn: [
        "Rahu Dosh Nivaran",
        "Rahu Pooja",
        "Kalsarpa Dosh",
        "Freedom from Fear",
        "Mental Purification",
        "Saturday",
        "Vedic Mantra",
        "Prayagraj",
      ],
      duration: "2-3 घंटे",
      difficulty: "सरल",
      suitableFor: ["सभी आयु वर्ग", "व्यापारी", "नौकरीपेशा", "गृहस्थ", "साधक"],
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
