import PujaTemplate from "./PujaTemplate";
import dummy7 from "../../../assets/dummy7.jpg";
import dummy8 from "../../../assets/dummy8.jpg";
import dummy9 from "../../../assets/dummy9.jpg";
import dummy10 from "../../../assets/dummy10.jpg";
import dummy11 from "../../../assets/dummy11.jpg";
import dummy12 from "../../../assets/dummy12.jpg";
import chhadhava from "../../../assets/chhadhava.webp";

const DeviMaaPujasExample = () => {
  const pujas = [
    {
      name: "Durga Puja",
      description:
        "Invoke the divine mother's blessings for strength, protection, and victory over obstacles",
      image: dummy7,
      duration: "2-3 hours",
      pandits: 2,
      price: "5,100",
      originalPrice: "7,500",
      rating: 4.9,
      popular: true,
    },
    {
      name: "Lakshmi Puja",
      description:
        "Attract wealth, prosperity, and abundance into your life with Goddess Lakshmi's grace",
      image: dummy8,
      duration: "1.5-2 hours",
      pandits: 1,
      price: "3,500",
      originalPrice: "5,000",
      rating: 4.8,
      popular: true,
    },
    {
      name: "Saraswati Puja",
      description:
        "Seek blessings for knowledge, wisdom, and success in education and arts",
      image: dummy9,
      duration: "1-1.5 hours",
      pandits: 1,
      price: "2,500",
      rating: 4.7,
    },
    {
      name: "Kali Puja",
      description:
        "Remove negative energies and seek protection from the fierce form of divine mother",
      image: dummy10,
      duration: "2-3 hours",
      pandits: 2,
      price: "6,500",
      rating: 4.9,
    },
    {
      name: "Navratri Special Puja",
      description:
        "Nine-day special puja celebrating all forms of the divine feminine",
      image: dummy11,
      duration: "9 days",
      pandits: 3,
      price: "21,000",
      originalPrice: "30,000",
      rating: 5.0,
      popular: true,
    },
    {
      name: "Vaishno Devi Puja",
      description:
        "Experience the divine blessings of Mata Vaishno Devi from the sacred shrine",
      image: dummy12,
      duration: "2 hours",
      pandits: 2,
      price: "4,500",
      rating: 4.8,
    },
  ];

  const benefits = [
    "Receive divine protection and blessings from the Mother Goddess",
    "Remove obstacles and negative energies from your life",
    "Attract prosperity, wealth, and abundance",
    "Gain strength, courage, and confidence",
    "Enhance spiritual growth and inner peace",
    "Protect your family from harm and evil forces",
    "Achieve success in personal and professional endeavors",
    "Experience emotional healing and mental clarity",
    "Fulfill wishes and desires with divine grace",
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The Durga Puja was performed with such devotion. I felt the divine presence and received immense blessings!",
    },
    {
      name: "Anjali Verma",
      text: "After the Lakshmi Puja, I noticed positive changes in my financial situation. Highly recommended!",
    },
    {
      name: "Meera Patel",
      text: "The pandits were very knowledgeable and performed the Saraswati Puja beautifully. My daughter's studies have improved!",
    },
  ];

  return (
    <PujaTemplate
      title="Devi Maa Pujas"
      description="Invoke the divine feminine energy and receive blessings from the Mother Goddess"
      heroImage={chhadhava}
      pujas={pujas}
      benefits={benefits}
      testimonials={testimonials}
    />
  );
};

export default DeviMaaPujasExample;
