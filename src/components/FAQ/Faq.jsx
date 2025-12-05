import React from "react";

const Faq = () => {
  const faqList = [
    {
      question: "What is Daan and why is it important?",
      answer:
        "Daan is a sacred act of giving in Sanatan Dharma. It helps purify the mind, remove obstacles, and support spiritual growth.",
    },
    {
      question: "How do I book a Puja or Seva?",
      answer:
        "You can book any puja or seva directly through our app or website by selecting your desired ritual and completing the form.",
    },
    {
      question: "Will I receive confirmation after booking?",
      answer:
        "Yes, you will receive an instant confirmation along with booking details and updates on your registered email or mobile number.",
    },
    {
      question: "Is online payment secure?",
      answer:
        "Yes, all payments are encrypted and processed through trusted and secure gateways.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-amber-100 shadow p-6"
            >
              <h3 className="text-lg font-semibold text-amber-800">
                {item.question}
              </h3>
              <p className="text-gray-700 mt-2">{item.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;

