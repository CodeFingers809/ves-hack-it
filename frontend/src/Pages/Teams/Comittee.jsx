'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronUp, Linkedin } from 'lucide-react';

const CommitteeSection = () => {
  const [expandedSection, setExpandedSection] = useState('');

  const websiteTeam = {
    title: "Technical Team",
    members: [
      { name: "Aadil Shah , Website Developer", linkedin: "https://www.linkedin.com/in/adilns786/" },
      { name: "Ayush Bohra , Website Developer", linkedin: "https://www.linkedin.com/in/ayush-bohra7/" },
      { name: "Parth Takale , Website Developer", linkedin: "https://www.linkedin.com/in/parth-takale-514188264/" },
      { name: "Dhairyash Jain , Website Developer", linkedin: "https://www.linkedin.com/in/dhairyash-jain-9799831a3/" },
      { name: "Gaurang Mapuskar , CSI Chairperson", linkedin: "https://www.linkedin.com/in/gaurang-mapuskar/" },
      { name: "Shashwat Tripathi , ISTE Chairperson", linkedin: "https://www.linkedin.com/in/shashwat-tripathi-1b8972290/" },
      { name: "Pranav Sukali , Technical Coordinator", linkedin: "https://www.linkedin.com/in/pranav-sukali-9269a0249" },
      { name: "Shivani Nikam , Technical Coordinator", linkedin: "https://www.linkedin.com/in/shivani-nikam-a28b29288" }
    ]
  };

  const committees = {
    coordinator: {
      title: "CO-ORDINATOR",
      members: ["Dr. Anjali Yeole, Deputy HOD, AI&DS Department, VESIT"]
    },
    organizing: {
      title: "ORGANIZING COMMITTEE",
      members: [
        "Mrs. Abha Tewari, VESIT", "Mr. Amit Singh, VESIT", "Mr. Mrugendra Vasmatkar, VESIT",
        "Mrs. Monali Chaudhari, VESIT", "Mr. Abhishek Chaudhary, VESIT", "Mr. Abhijet Shete, VESIT",
        "Dr. Rohini Temkar, VESIT", "Mrs. Indira B, VESIT", "Mr. Kader BT Shaikh, VESIT",
        "Dr. Keya Doshi, VESIT", "Mrs. Sukanya Roychowdhury, VESIT", "Rtn Arun Ganapathy, Rotary Club"
      ]
    },
    patrons: {
      title: "PATRONS",
      members: [
        "Shri. B. L. Boolani, Managing Trustee, VES", "Shri. Suresh Malkani, President, VES",
        "Shri. Rajesh Gehani, Secretory, VES", "Shri. Prakash Lulla, Treasurer, VES",
        "Shri. Bharat Ajwani, Member, VES", "Shri. Vijay Talreja, Member, VES",
        "Shri. Deepak Nehlani, Member, VES"
      ]
    },
    advisory: {
      title: "ADVISORY COMMITTEE",
      members: [
        "Dr. Prasad Ramanathan, Sr. Director, Capgemini",
        "Shri. Pankaj Doke, Senior Scientist, Tata Consultancy Services",
        "Mrs. Asha Ahuja, Head of Digital Engineering, Cognizant",
        "Shri. Amit Rambhia, MD, Panache Digilife Ltd.",
        "Dr. Archana Sharma, Distinguished Scientist, BARC",
        "Dr.Anita Kanwar, Principal, VES College of Arts, Science & Commerce",
        "Shri. Devesh Rajadhyaksha, Founder & CEO, CereLabs Pvt Ltd.",
        "Dr. Prasad Ramanathan, Sr. Advisor, Capgemini, Mumbai",
        "Shri. Ajit Ambekar, Software Engineer III, JP Morgan Chase",
        "Dr. Amar Banerjee, Ex-Senior Scientist, BARC",
        "Shri. Suhas Bhide, Director, Emerson Automation Solutions",
        "Dr. Sanjay Thakur, Head, R & D, Suyog Telematics Ltd",
        "Shri. Milap Shah, Co-founder, Print Stop & Hokey Pokey",
        "Rtn Kumar Pillai, Rotary Club"
      ]
    },
    chairperson: {
      title: "CHAIRPERSON",
      members: ["Dr.(Mrs.) J.M.Nair, Principal, VESIT"]
    },
    coChairperson: {
      title: "CO-CHAIRPERSON",
      members: ["Dr.(Mrs.) M.VijayLakshmi, Vice-Principal, VESIT"]
    },
    executive: {
      title: "EXECUTIVE COMMITTEE",
      members: [
        "Dr. Nupur Giri, HOD, Computer Engineering",
        "Dr. Kavita Tewari, HOD, Electronics & Computer Science",
        "Dr. C. D. Rawat, HOD, Electronics & Telecommunication",
        "Dr. Shalu Chopra, HOD, Information Technology",
        "Dr. Sangeetha Prasanna Ram, HOD, Automation & Robotics",
        "Dr. ShivKumar Goel, HOD, Master of Computer Applications",
        "Mr. Vivek Umrikar, HOD, Humanities & Applied Sciences"
      ]
    },
    student: {
      title: "STUDENT COMMITTEE",
      members: ["CSI, IEEE, ISA and ISTE, VESIT"]
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="py-8 text-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-500 to-green-600">
          Our Committee
        </h2>

        {/* Website Team Section */}
        <div className="mb-4 bg-gray-900 rounded-lg">
          <button
            onClick={() => toggleSection('websiteTeam')}
            className="w-full px-3 py-2 flex justify-between items-center text-white"
          >
            <h3 className="text-base font-semibold">{websiteTeam.title}</h3>
            {expandedSection === 'websiteTeam' ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {expandedSection === 'websiteTeam' && (
  <div className="px-3 py-2 bg-gray-900 rounded-b-lg">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <ul className="space-y-1 text-xs">
        {websiteTeam.members.map((member, index) => (
          <li
            key={index}
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
          >
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group space-x-2"
            >
              <span className="truncate">{member.name}</span>
              <div className="flex items-center space-x-1">
                {/* Chevron Right (Optional, as an indicator for interaction) */}
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-300 transition-colors duration-200" />
                {/* LinkedIn Icon (Visible only on hover) */}
                <Linkedin className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

        </div>

        {/* Other Committees */}
        <div className="space-y-1">
          {Object.entries(committees).map(([key, committee]) => (
            <div key={key} className="bg-gray-900 rounded transition-all duration-300">
              <button
                onClick={() => toggleSection(key)}
                className="w-full px-3 py-2 flex justify-between items-center hover:bg-gray-800"
              >
                <h3 className="text-sm font-semibold text-blue-300">{committee.title}</h3>
                {expandedSection === key ? (
                  <ChevronUp className="w-4 h-4 text-blue-300" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-blue-300" />
                )}
              </button>

              {expandedSection === key && (
                <div className="px-3 py-2 bg-gray-800">
                  <ul className="space-y-1 text-xs">
                    {committee.members.map((member, index) => (
                      <li key={index} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteeSection;

