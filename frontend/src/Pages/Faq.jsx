import React, { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState({});

  const handleClick = (id) => {
    setIsOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
  };
const faqs = [
  {
    id: 1,
    question: "Who can participate?",
    answer: `VES-IT-HACK is close to a diverse range of participants, including students, professionals, and individuals with varying skill levels. Whether you are a beginner or an experienced developer, despite the field of academic discipline chosen, you are eligible to join us! 🚀`,
  },
  {
    id: 2,
    question: "Are there any registration fees?",
    answer: `No. There is no registration fee for participating in the hackathon. This approach ensures that creativity and innovation can flourish without restrictions, allowing participants to immerse themselves in a collaborative and dynamic environment.`,
  },
];
  return (
    <div className="min-w-screen min-h-screen pt-2 px-8 md:px-52">
      {faqs.map((faq) => (
        <div key={faq.id} className="border-b border-b-gray-300 mx-4">
          <h3 className="flex">
            <button
              type="button"
              onClick={() => handleClick(faq.id)}
              className="flex flex-1 items-center text-left py-4 text-sm md:text-md font-medium transition-all hover:underline"
              aria-expanded={isOpen[faq.id]}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span className="ml-2 text-black">{faq.question}</span>
              <ChevronIcon isOpen={isOpen[faq.id]} />
            </button>
          </h3>
          <div
            id={`faq-answer-${faq.id}`}
            className={`overflow-hidden text-sm transition-[max-height] ${isOpen[faq.id]?"duration-500":"duration-200"} ${
              isOpen[faq.id] ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="ml-2 pb-4 text-black">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ChevronIcon = ({ isOpen }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 ml-2 transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
    aria-hidden="true"
  >
    <path
      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
      fill="currentColor"
    />
  </svg>
);

export default Faq;
