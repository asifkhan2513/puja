import GemstonesImage from "../../assets/gemstone.jpeg";
import Moonga from "../../assets/moonga.jpeg"
export const products = [
  {
    id: 1,
    slug: "mala",
    image:
      "https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF894,1000_QL80_.jpg",
    title: {
      hi: " माला",
      en: " Mala",
    },
    description: {
      hi: "ध्यान और मंत्र जाप के लिए पवित्र मालाएं।",
      en: "Sacred malas for meditation and mantra chanting.",
    },
    items: [
      {
        id: 101,
        name: { hi: "रुद्राक्ष की माला", en: "Rudraksha Mala" },
        image:
          "https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF894,1000_QL80_.jpg",
      },
      {
        id: 102,
        name: { hi: "तुलसी की माला", en: "Tulsi Mala" },
        image:
          "https://www.jyotishhelp.com/media/uploads/page_images/k/tulsi-ki-mala.png",
      },
      {
        id: 103,
        name: { hi: "स्फटिक की माला", en: "Sphatik Mala" },
        image:
          "https://m.media-amazon.com/images/I/61k8T+vPzEL._AC_UY1100_.jpg",
      },
      {
        id: 104,
        name: { hi: "चंदन की माला", en: "Chandan Mala" },
        image:
          "https://m.media-amazon.com/images/I/51+8rGg+3oL._AC_UY1100_.jpg",
      },
      {
        id: 105,
        name: { hi: "रक्त चंदन माला", en: "Rakt Chandan Mala" },
        image:
          "https://m.media-amazon.com/images/I/61y+J2y7e8L._AC_UY1100_.jpg",
      },
      {
        id: 106,
        name: { hi: "वैजयंती माला", en: "Vyajanti Mala" },
        image:
          "https://m.media-amazon.com/images/I/71wwJq+b5lL._AC_UY1100_.jpg",
      },
      {
        id: 107,
        name: { hi: "मूंगा की माला", en: "Moonga Mala" },
        image:
          "https://www.poojashop.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/red_coral_mala_1.jpg",
      },
      {
        id: 108,
        name: { hi: "कमल गट्टा", en: "Kamal Gatta" },
        image:
          "https://m.media-amazon.com/images/I/71g+YC2+tSL._AC_UY1100_.jpg",
      },
    ],
  },
  {
    id: 2,
    slug: "ratna",
    image: GemstonesImage,
    title: {
      hi: "रत्न",
      en: "Ratna (Gemstones)",
    },
    description: {
      hi: "ज्योतिष और आध्यात्मिक लाभ के लिए पवित्र रत्न।",
      en: "Sacred gemstones for astrology and spiritual benefits.",
    },
    items: [
      {
        id: 201,
        name: { hi: "मूंगा", en: "Moonga (Coral)" },
        image: Moonga,
        description: { hi: "मंगल ग्रह के लिए", en: "For Mars planet" }
      },
      {
        id: 202,
        name: { hi: "नीलम", en: "Neelam (Blue Sapphire)" },
        image: GemstonesImage,
        description: { hi: "शनि ग्रह के लिए", en: "For Saturn planet" }
      },
      {
        id: 203,
        name: { hi: "गोमेद", en: "Gomedh (Hessonite)" },
        image: GemstonesImage,
        description: { hi: "राहु ग्रह के लिए", en: "For Rahu planet" }
      },
      {
        id: 204,
        name: { hi: "लहसुनिया", en: "Lehsuniya (Cat's Eye)" },
        image: GemstonesImage,
        description: { hi: "केतु ग्रह के लिए", en: "For Ketu planet" }
      },
      {
        id: 205,
        name: { hi: "हीरा", en: "Heera (Diamond)" },
        image: GemstonesImage,
        description: { hi: "शुक्र ग्रह के लिए", en: "For Venus planet" }
      },
      {
        id: 206,
        name: { hi: "मोती", en: "Moti (Pearl)" },
        image: GemstonesImage,
        description: { hi: "चंद्र ग्रह के लिए", en: "For Moon planet" }
      },
      {
        id: 207,
        name: { hi: "पन्ना", en: "Panna (Emerald)" },
        image: GemstonesImage,
        description: { hi: "बुध ग्रह के लिए", en: "For Mercury planet" }
      },
      {
        id: 208,
        name: { hi: "पुखराज", en: "Pokhraj (Yellow Sapphire)" },
        image: GemstonesImage,
        description: { hi: "गुरु ग्रह के लिए", en: "For Jupiter planet" }
      },
      {
        id: 209,
        name: { hi: "माणिक", en: "Manik (Ruby)" },
        image: GemstonesImage,
        description: { hi: "सूर्य ग्रह के लिए", en: "For Sun planet" }
      },
      {
        id: 210,
        name: { hi: "ओपल", en: "Opal" },
        image: GemstonesImage,
        description: { hi: "शुक्र का उप रत्न", en: "Sub-gem for Venus" }
      },
      {
        id: 211,
        name: { hi: "फिरोजा", en: "Firoza (Turquoise)" },
        image: GemstonesImage,
        description: { hi: "गुरु का उप रत्न", en: "Sub-gem for Jupiter" }
      },
      {
        id: 212,
        name: { hi: "सुनहला", en: "Sunehla (Citrine)" },
        image: GemstonesImage,
        description: { hi: "गुरु का उप रत्न", en: "Sub-gem for Jupiter" }
      },
    ],
  },
  {
    id: 3,
    slug: "yantra",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DGA0xf28TJtTDUAuE-cviBd8g04SimTw-Q&s",
    title: {
      hi: "यंत्र",
      en: "Yantra",
    },
    description: {
      hi: "देवी-देवताओं की कृपा और विशेष साधना के लिए यंत्र।",
      en: "Sacred yantras for divine blessings and spiritual practices.",
    },
    items: [
      {
        id: 301,
        name: { hi: "हनुमान यंत्र", en: "Hanuman Yantra" },
        image:
          "https://m.media-amazon.com/images/I/71HanumanYantraL._AC_UY1100_.jpg",
      },
      {
        id: 302,
        name: { hi: "सूर्य यंत्र", en: "Surya Yantra" },
        image:
          "https://m.media-amazon.com/images/I/71SuryaYantraL._AC_UY1100_.jpg",
      },
      {
        id: 303,
        name: { hi: "लक्ष्मी यंत्र", en: "Laxmi Yantra" },
        image:
          "https://m.media-amazon.com/images/I/71LaxmiYantraL._AC_UY1100_.jpg",
      },
      {
        id: 304,
        name: { hi: "कुबेर यंत्र", en: "Kuber Yantra" },
        image:
          "https://m.media-amazon.com/images/I/71KuberYantraL._AC_UY1100_.jpg",
      },
      {
        id: 305,
        name: { hi: "राहू यंत्र", en: "Rahu Yantra" },
        image:
          "https://m.media-amazon.com/images/I/71RahuYantraL._AC_UY1100_.jpg",
      },
      {
        id: 306,
        name: { hi: "नवग्रह यंत्र", en: "Navgrah Yantra" },
        image:
          "https://m.media-amazon.com/images/I/71NavgrahYantraL._AC_UY1100_.jpg",
      },
    ],
  },
  {
    id: 4,
    slug: "havan-gau-products",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1MJtBqNCFLi-yMYkyawaulwnLPeSpAr-CA&s",
    title: {
      hi: "हवन और गौ उत्पाद",
      en: "Havan & Gau Products",
    },
    description: {
      hi: "पवित्र हवन सामग्री और शुद्ध गौ उत्पाद।",
      en: "Sacred Havan materials and pure cow products.",
    },
    items: [
      {
        id: 501,
        name: { hi: "गोमय भस्म", en: "Gomay Bhasma" },
        image: "https://m.media-amazon.com/images/I/41-qSgO2ZIL.jpg",
      },
      {
        id: 502,
        name: { hi: "गौ काष्ठ / गौ कंडा", en: "Gau Kasht / Gau Kanda" },
        image:
          "https://m.media-amazon.com/images/I/71wL+8qWnnL._AC_SL1500_.jpg",
      },
      {
        id: 503,
        name: { hi: "नवग्रह समिधा", en: "Navgrah Samidha" },
        image:
          "https://m.media-amazon.com/images/I/71R+9m-K7pL._AC_SL1000_.jpg",
      },
    ],
  },
  {
    id: 5,
    slug: "extraordinary-products",
    image:
      "https://www.gaukriti.com/wp-content/uploads/2022/02/Gaukriti-Cow-Dung-Product-GK-F305.2.jpg  ",
    title: {
      hi: "अन्य असाधारण उत्पाद",
      en: "Other Extraordinary Products",
    },
    description: {
      hi: "दुर्लभ और विशेष आध्यात्मिक वस्तुएं।",
      en: "Rare and exclusive spiritual artifacts.",
    },
    items: [
      {
        id: 601,
        name: { hi: "सिद्ध पारद शिवलिंग", en: "Siddh Parad Shivling" },
        image: "https://m.media-amazon.com/images/I/61+uC+y+1aL._AC_SX679_.jpg",
      },
      {
        id: 602,
        name: { hi: "दक्षिणावर्ती शंख", en: "Dakshinavarti Shankh" },
        image:
          "https://m.media-amazon.com/images/I/61dF-o7Tz3L._AC_SL1000_.jpg",
      },
      {
        id: 603,
        name: { hi: "एकाक्षी नारियल", en: "Ekalshi Nariyal" },
        image: "https://m.media-amazon.com/images/I/41T-H-Q+3lL._AC_.jpg",
      },
    ],
  },
];
