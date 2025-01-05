import React, { useState } from 'react';

// Array of FAQ questions and answers
const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is a hackathon?',
        answer:
          'HackMIT is a weekend-long event where thousands of students from around the world 🌎 come together to work on cool new software 🕹 and/or hardware 🛠 projects. Websites 🖥 and mobile apps 📱 are common types of hacks, but you can build anything! Think outside of the box! 📦',
      },
      {
        question: 'When is HackMIT?',
        answer:
          'This year, we will be extending HackMIT to 3️⃣6️⃣ hours! It will start on Friday evening in the east coast, and end Sunday morning on the weekend of September 1️⃣8️⃣-2️⃣0️⃣ :)',
      },
      {
        question: "What's the cost 💰?",
        answer:
          'Admission is free and includes mentors, workshops, $wag, resources, and a memorable experience!',
      },
      {
        question: "Where’s the schedule?",
        answer:
          "We'll release a more detailed 🗓 schedule in August. For now, know that we’re planning for opening ceremony to start Friday at 9pm EDT and for closing ceremony to end Sunday mid-afternoon.",
      },
      {
        question: "But I’ve never hacked!",
        answer:
          "That's totally okay! This year at HackMIT we'll be hosting a series of beginner workshops where you can start getting your hands 🤝 dirty with all things hackathon-y. Those who attend the beginner workshops are also eligible for the beginner prize! 🏅",
      },
      {
        question: "I have more questions⁉️",
        answer:
          'Please email us at <a class="link" href="help@hackmit.org"> [email protected] </a> if you\'ve got any questions or concerns! We’d love to help you out :)',
      },
      {
        question: "A question for you:",
        answer:
          'Is a hotdog 🌭 a sandwich 🥪? Is cereal 🥣 a soup 🍲? Help our team decide on these cRiTIcAL questions by sending your answers to <a class="link" href="idk@hackmit.org"> [email protected] </a> (and any other memes you want to share). Our favorite response may win a prize! Bonus points for sending us a floppy disk!',
      },
    ],
  },
  {
    category: 'Virtual',
    questions: [
      {
        question: 'How does a virtual 🌐 hackathon work?',
        answer:
          "We will 🅱️e announcing more details in the coming months, 🅱️ut all of the essential parts of our event will remain the same! You'll still get to meet other hackers, talk to our sponsors 💸, listen to prominent leaders 🧑‍💼 in tech, and win amazing prizes 🎖!",
      },
      {
        question: "What tech or tools should I 🅱️ring?",
        answer: 'Probably a computer 💻, some cool ideas 💡, and a lot of enthusiasm 💪',
      },
      {
        question: 'Will there $till be $wag? 🤑',
        answer:
          'If you reside in the United States 🇺🇸, then we\'ll 🚢 ship 📬 $wag to you free of charge! Unfortunately, due to shipping restrictions we aren\'t able to ship $wag internationally 😢',
      },
      {
        question: 'What if I have a slow Internet connection?',
        answer:
          "You should have no issues participating in our event as long as your Internet connection can handle the bandwidth of a standard video 🎥 call or livestream. Just make sure to download large SDKs or developer tools in advance!",
      },
      {
        question: 'What about hardware hacks?',
        answer:
          "Unfortunately, we aren't able to provide supplies for hardware hacks this year 😢, but if you're really passionate, that shouldn't stop you from building them!",
      },
    ],
  },
  {
    category: 'Registration',
    questions: [
      {
        question: 'Can I attend?',
        answer:
          'If you are a high school 🏫 student or a college 🎓 undergraduate (MIT M.Eng included) AND you are at least 13 years old, then yes!',
      },
      {
        question: "What if I can't attend?",
        answer:
          'If you\'re not currently a student and you want to help 🤝 out, <a class="link" href="https://go.hackmit.org/volunteer" target="_blank">sign up here</a> to help mentor 👨‍🏫👩‍🏫 and/or judge 👩‍⚖️ our hackers! If you have any questions, let us know at <a class="link" href="/cdn-cgi/l/email-protection#ee9881829b809a8b8b9cae868f8d8583879ac0819c89" target="_blank"> [email protected] </a>!',
      },
      {
        question: 'When is registration?',
        answer:
          'Look out for the opening of HackMIT 2020 registration in July! This year, we\'ll have two rounds of admissions: Round 1️⃣ opens July 8th and closes July 24th, 🕛 11:59pm PDT. Round 2️⃣ opens July 25th and closes August 7th, 🕛 11:59pm PDT.',
      },
    ],
  },
  {
    category: 'Tracks & Teams',
    questions: [
      {
        question: 'What are tracks at a hackathon? 🛤',
        answer:
          'To help focus your ideation 🧠 process, we’ve developed four tracks, or impact areas, for you to hack in. The top project within each track will be awarded a prize 🏆.',
      },
      {
        question: 'How will tracks and prizes 🥇 work?',
        answer:
          'You\'ll have the opportunity to submit your project to 1️⃣ (and only one!) of our tracks, making you eligible for that track prize! During our event, we\'ll also be providing each track with its own set of ideation resources.',
      },
      {
        question: 'Do I have to submit to a track?',
        answer:
          "You're not required to submit your hack to a track, but you will need to in order to be considered for our track prizes. Tracks are meant to enhance the hacker experience, but if there truly isn't a track for you, don't worry! Projects submitted without a track are still eligible for sponsor challenges and HackMIT grand prizes 🏆🏆🏆.",
      },
      {
        question: 'Do I have to submit a project if I attend?',
        answer:
          'If you don\'t submit a project, you can still attend our workshops and listen 👂 to our awesome speakers! However, in order to receive $wag, you must submit a project.',
      },
      {
        question: 'How do teams work?',
        answer:
          'Your team can have up to 4️⃣ people! You can select teammates 🤼 when you register, or you can register individually without specified teammates. We’ll admit by teams, so rest assured you’ll be able to hack with your friends!',
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
      <h1 className="text-4xl font-semibold text-center mb-8 underline ">FAQ</h1>
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
