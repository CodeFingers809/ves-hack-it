import React, { useState } from 'react';

// Array of FAQ questions and answers
const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is a hackathon?',
        answer:
          'HackMIT is a weekend-long event where thousands of students from around the world come together to work on innovative software and/or hardware projects. Websites and mobile apps are common types of hacks, but participants are encouraged to think outside the box and build anything they can imagine.',
      },
      {
        question: 'When is HackMIT?',
        answer:
          'This year, HackMIT will be extended to 36 hours. It will begin on Friday evening (Eastern Time) and conclude on Sunday morning during the weekend of September 18-20.',
      },
      {
        question: 'What is the cost?',
        answer:
          'Admission to HackMIT is free. This includes access to mentors, workshops, swag, resources, and a memorable experience.',
      },
      {
        question: 'Where is the schedule?',
        answer:
          'A detailed schedule will be released in August. For now, the opening ceremony is scheduled to begin on Friday evening at 9 PM EDT, and the closing ceremony will conclude on Sunday afternoon.',
      },
      {
        question: 'But I’ve never hacked before!',
        answer:
          "That's okay! At HackMIT, we will host beginner workshops to help you get started with hacking. Attendees of these workshops will also be eligible for the beginner prize.",
      },
      {
        question: 'I have more questions.',
        answer:
          'Please email us at <a class="link" href="mailto:help@hackmit.org">help@hackmit.org</a> with any questions or concerns. We are happy to assist you.',
      },
      {
        question: 'A question for you:',
        answer:
          'Is a hotdog a sandwich? Is cereal a soup? Help our team decide these important questions by sending your answers to <a class="link" href="mailto:idk@hackmit.org">idk@hackmit.org</a>. Our favorite response may win a prize!',
      },
    ],
  },
  {
    category: 'Virtual',
    questions: [
      {
        question: 'How does a virtual hackathon work?',
        answer:
          'Details on how the virtual HackMIT will work will be announced in the coming months. However, all essential aspects of the event will remain the same. You will still have opportunities to meet other hackers, engage with sponsors, listen to leaders in technology, and win amazing prizes.',
      },
      {
        question: 'What tech or tools should I bring?',
        answer: 'You will need a computer, a lot of enthusiasm, and some great ideas.',
      },
      {
        question: 'Will there still be swag?',
        answer:
          'If you reside in the United States, we will ship swag to you free of charge. Unfortunately, due to shipping restrictions, we are unable to ship swag internationally.',
      },
      {
        question: 'What if I have a slow internet connection?',
        answer:
          'As long as your internet connection can support standard video calls or live streams, you should have no trouble participating. Make sure to download any large SDKs or developer tools in advance.',
      },
      {
        question: 'What about hardware hacks?',
        answer:
          'Unfortunately, we are unable to provide supplies for hardware hacks this year. However, if you are passionate about building hardware projects, you are still welcome to participate.',
      },
    ],
  },
  {
    category: 'Registration',
    questions: [
      {
        question: 'Can I attend?',
        answer:
          'If you are a high school student or a college undergraduate (including MIT M.Eng students) and you are at least 13 years old, you are eligible to attend.',
      },
      {
        question: 'What if I can’t attend?',
        answer:
          'If you are not a student but still want to be involved, you can sign up to volunteer as a mentor or judge at <a class="link" href="https://go.hackmit.org/volunteer" target="_blank">this link</a>. If you have any questions, please contact us at <a class="link" href="/cdn-cgi/l/email-protection#ee9881829b809a8b8b9cae868f8d8583879ac0819c89" target="_blank">volunteers@hackmit.org</a>.',
      },
      {
        question: 'When is registration?',
        answer:
          'HackMIT 2020 registration opens in July. There will be two rounds of registration: Round 1 opens on July 8 and closes on July 24 at 11:59 PM PDT. Round 2 opens on July 25 and closes on August 7 at 11:59 PM PDT.',
      },
    ],
  },
  {
    category: 'Tracks & Teams',
    questions: [
      {
        question: 'What are tracks at a hackathon?',
        answer:
          'To help focus your ideation process, we’ve developed four tracks, or impact areas, for participants to hack in. The top project in each track will be awarded a prize.',
      },
      {
        question: 'How will tracks and prizes work?',
        answer:
          'Participants will have the opportunity to submit their project to one (and only one) track, making them eligible for that track’s prize. Each track will have its own set of ideation resources provided during the event.',
      },
      {
        question: 'Do I have to submit to a track?',
        answer:
          'It is not mandatory to submit your project to a track, but doing so will make you eligible for the track’s prizes. If you do not submit to a track, your project will still be eligible for sponsor challenges and HackMIT grand prizes.',
      },
      {
        question: 'Do I have to submit a project if I attend?',
        answer:
          'You are not required to submit a project to attend the event. However, in order to receive swag, you must submit a project.',
      },
      {
        question: 'How do teams work?',
        answer:
          'Teams can consist of up to four members. You can select your teammates during registration or register individually and be matched with others. Teams will be admitted to the event together, so you can hack alongside your friends.',
      },
    ],
  },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSection, setActiveSection]=useState("")
  const toggleAnswer = (index, section) => {
    setOpenIndex(openIndex === index ? null : index);
    setActiveSection(activeSection === section? "": section)
  };

  return (
    <div className="px-6 py-12 bg-black  text-white">
      <h1 className="text-5xl font-bold text-center justify-center text-white mb-8 ">FAQ</h1>
      <dic className="grid grid-cols-1 lg:grid-cols-2 mx-0  pl-0  lg:mx-40 lg:pl-20">
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
                    openIndex === index && activeSection===section? 'rotate-0' : '-rotate-90'
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
              {openIndex === index && activeSection===section && (
                <div className={`mt-2 pl-8 text-lg ${(openIndex === index && activeSection===section)? "max-h-screen":"max-h-0"}`}>{item.answer}</div>
               )} 
            </div>
          ))}
        </div>
      ))}
      </dic>
    </div>
  );
};

export default FAQ;
