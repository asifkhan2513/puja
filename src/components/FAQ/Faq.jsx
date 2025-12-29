import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      question: "What is Daan and why is it important?",
      answer:
        "Daan is a sacred act of giving in Sanatan Dharma. It purifies the mind, removes karmic obstacles, and helps devotees grow spiritually while supporting noble causes.",
    },
    {
      question: "How do I book a Pooja or Seva?",
      answer:
        "You can easily book any Pooja or seva through our website by selecting your desired ritual, filling in the required details, and completing the booking process.",
    },
    {
      question: "Will I receive confirmation after booking?",
      answer:
        "Yes, once your booking is completed, you will receive instant confirmation along with Pooja details via your registered email and mobile number.",
    },
    {
      question: "Is online payment secure?",
      answer:
        "Absolutely. All online payments are encrypted and processed through trusted and secure payment gateways to ensure complete safety.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-14 pt-serif-bold">
          Frequently Asked <span className="text-amber-600">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  group rounded-3xl
                  bg-white/90 backdrop-blur-md
                  border border-amber-200
                  shadow-md hover:shadow-xl
                  transition-all duration-500
                "
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="
                    w-full flex items-center justify-between
                    px-6 py-5 text-left
                    focus:outline-none
                  "
                >
                  <h3 className="text-lg sm:text-xl font-bold text-black">
                    {item.question}
                  </h3>

                  <ChevronDown
                    className={`
                      w-6 h-6 text-amber-600
                      transform transition-transform duration-500
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500
                    ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="px-6 pb-6 text-gray-700 leading-relaxed font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
