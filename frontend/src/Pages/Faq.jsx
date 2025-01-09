
import React, { useState } from "react";

// Array of FAQ questions and answers
const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: "What is VES-HACK-IT?",
        answer: "VES-HACK-IT is an electrifying 30-hour Hackathon organized at VESIT College where innovation meets sustainability! It brings together students to tackle real-world challenges with eco-friendly and energy-efficient solutions. Hosted in association with the Rotary Club of Mumbai, Ghatkopar West, this event is a perfect blend of innovation and impact."
      },
      {
        question: 'When and where is VES-HACK-IT?',
        answer:
          'VES-HACK-IT will be held on February 15-16, 2025, at VESIT, Chembur, Mumbai. Mark your calendars for an unforgettable experience!',
      },
      {
        question: 'What is the cost?',
        answer:
          'The entry fee for the Hardware Track is ₹400 per team or ₹100 for individuals. Fees are non-refundable. The Software Track participation is free.',
      },
      {
        question: 'Where can I find the schedule?',
        answer:
          'The detailed schedule has been announced in timeline section! Key dates include Hardware Training and Mentoring Workshops on January 20-22, Presentation Rounds on January 21 and 31, and the final Hackathon Round on February 15-16.',
      },
      {
        question: 'I have never participated in a hackathon before!',
        answer:
          'No worries! VES-HACK-IT will feature workshops and mentoring sessions to help you get started, especially for the Hardware Track. Everyone is encouraged to participate, learn, and innovate!',
      },
      {
        question: 'Where can I get more details or ask questions?',
        answer:
          'You can contact the coordinators directly or email us with your queries. For regular updates, follow us on Instagram at <a class="link" href="https://www.instagram.com/ves_hack_it" target="_blank">@ves_hack_it</a>.',
      },
    ],
  },
  {
    category: 'Virtual',
    questions: [
      {
        question: "Is VES-HACK-IT a virtual event?",
        answer: "No, the final round of VES-HACK-IT will be held in person at VESIT, Chembur, Mumbai. However, other rounds, such as PPT submissions, will be conducted online to ensure flexibility and wider participation."
      },
      {
        question: 'What resources should I bring?',
        answer:
          'For the Software Track, bring a laptop and your enthusiasm. For the Hardware Track, you may bring your own tools or use the resources provided during the workshops.',
      },
      // {
      //   question: 'Will there be any goodies or swag?',
      //   answer:
      //     'Yes! Exciting swag awaits all participants along with a prize pool worth over ₹1,50,000 for the top projects.',
      // },
      {
        question: 'What if I need assistance during the event?',
        answer:
          'Mentors will be available throughout the hackathon for guidance. Dedicated help desks will also be set up for immediate support.',
      },
    ],
  },
  {
    category: 'Registration',
    questions: [
      {
        question: 'Who can participate?',
        answer:
          'The hackathon is open to students of B.E., B.Tech, Diploma, and Management colleges from Mumbai Suburban and all over Maharashtra. Participants must be at least 13 years old.',
      },
      {
        question: "When is registration open?",
        answer: "Registration for VES-HACK-IT is live now and closes on January 20, 2025. Don’t miss out on this thrilling event!"
      },
    ],
  },
  {
    category: 'Tracks & Teams',
    questions: [
      {
        question: 'What are the tracks for VES-HACK-IT?',
        answer:
          'There are two tracks:\n🔹 Software – Build innovative, sustainable software solutions.\n🔹 Hardware – Create impactful, energy-efficient prototypes ',
      },
      {
        question: "How will tracks and prizes work?",
        answer: "Participants can choose one track for submission. Each track, Hardware and Software, will have two winners. The 1st place winners of both tracks will receive ₹50,000 each, and the 2nd place winners will receive ₹25,000 each, adding up to the ₹1,50,000 prize pool. Check the Prizes section for more details."
      },
      {
        question: 'Do I need a team?',
        answer:
          'Teams can have up to four members. Individual registrations are also allowed, especially for the Hardware Track. If you don’t have a team, we can help match you with others.'
      },
      // {
      //   question: 'Is project submission mandatory?',
      //   answer:
      //     'Submitting a project is not mandatory to participate, but it is required if you want to be eligible for swag and prizes.',
      // },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  const toggleAnswer = (index, section) => {
    if (openIndex === index && activeSection === section) {
      setOpenIndex(null);
      setActiveSection("");
    } else {
      setOpenIndex(index);
      setActiveSection(section);
    }
  };

  return (
    <div className="px-6 py-12 bg-transparent z-0 text-white" id="faq">
      <h1 className="text-5xl font-bold text-center justify-center text-white mb-8">
        FAQ
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-0 pl-0 lg:mx-40 lg:pl-20">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-10">
            <h2 className="text-4xl font-semibold mb-4">{section.category}</h2>
            {section.questions.map((item, index) => (
              <div key={index} className="mb-6">
                <div
                  onClick={() => toggleAnswer(index, section)}
                  className="cursor-pointer flex items-center space-x-2"
                >
                  <svg
                    className={`w-6 h-6 transform transition-all duration-300 ${
                      openIndex === index && activeSection === section
                        ? "rotate-0"
                        : "-rotate-90"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                  <span className="text-xl">{item.question}</span>
                </div>
                {openIndex === index && activeSection === section && (
                  <div className="mt-2 pl-8 text-lg">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
