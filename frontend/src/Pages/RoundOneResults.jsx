"use client"

import { useState } from "react"

const softwareTeams = {
  "SW-01": ["Syntax Squad", "Codechamps", "The Code of Duty", "Bournvita Smugglers", "Tech Simp"],
  "SW-02": ["Team INSPIRE", "Techtectians", "Neural_Networkers", "Team Rocket", "ErrorOverflow"],
  "SW-03": ["Nomads", "GitWinIt", "Terminators", "MangoDB", "Hack-oonaMatata"],
  "SW-04": ["Bit Please", "Coding Gurus", "Maas", "Chaos coders", "BinaryBrains"],
  "SW-05": ["Stranger Strings", "DataDynamos", "CodeCare", "Init.io", "Null Pointers"],
  "SW-06": ["Hackie Chan", "TechWizard", "Nagshakti", "Reverse_CowBoys", "runtimeTerror"],
}

const hardwareTeams = {
  "HW-01": ["VisionCreator", "Core Creators "],
  "HW-02": ["Kurama", "Coded Chaos", "Eco-tronics"],
  "HW-03": ["Healthtronics", "AgriDrip", "alt F4"],
  "HW-04": ["Team Elexyz"],
  "HW-05": ["StarLITE"],
  "HW-07": ["Chip Wizards", "Synergy Squad"],
  "HW-08": ["ElectroWizards"],
  "HW-09": ["Wired_Wizard"],
  "HW-11": ["Project vengeance", "Fabricators"],
  "HW-12": ["Alt_24"],
}

const RoundOneResults = () => {
  const [selectedCategory, setSelectedCategory] = useState("Software")

  return (
    <div className="flex flex-col">
      <h2
        className="text-7xl font-black workbench-font text-center text-white mb-10"
        style={{
          textShadow: "-5px 0 12px green, 5px 0 12px blue",
        }}
      >
        Round 1 Results
      </h2>
      <div className="mb-8 flex flex-wrap justify-center gap-4 text-xl">
        <button
          className={`px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 ${
            selectedCategory === "Hardware" ? "bg-green-700" : "bg-gray-700"
          }`}
          onClick={() => setSelectedCategory("Hardware")}
        >
          Hardware
        </button>
        <button
          className={`px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 ${
            selectedCategory === "Software" ? "bg-green-700" : "bg-gray-700"
          }`}
          onClick={() => setSelectedCategory("Software")}
        >
          Software
        </button>
      </div>
      <div className={`grid grid-cols-2 mx-5 md:grid-cols-3 xl:grid-cols-${selectedCategory=="Hardware"?5:6} md:mx-auto gap-6`}>
        {Object.entries(selectedCategory === "Hardware" ? hardwareTeams : softwareTeams).map(([ps, teams]) => (
          <div
            key={ps}
            className={`${
              selectedCategory === "Hardware" ? "bg-orange-800" : "bg-sky-900"
            } backdrop-blur-sm rounded-lg shadow-lg min-h-48 shadow-gray-900/50 border-gray-700 border p-6 w-full transition-all duration-300 hover:shadow-xl hover:scale-102`}
          >
            <h2 className="text-3xl font-bold text-white mb-4 border-b border-white/20 pb-2">{ps}</h2>
            <ul className="space-y-2">
              {teams.map((team, key) => (
                <li key={key} className="text-white font-light hover:font-medium transition-all duration-200">
                  {team}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoundOneResults

