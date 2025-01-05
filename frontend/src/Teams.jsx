import React from "react";

const teams = [
  {
    id: 1,
    name: "Indian Society for Technical Education",
    shortName:"ISTE",
    imgSrc: "../../Teams/ISTE.png",
  },
  {
    id: 2,
    name: "Computer Society of India",
    shortName:"CSI",
    imgSrc: "../../Teams/CSI.png",
  },
  {
    id: 3,
    name: "Institute of Electrical and Electronics Engineers",
    shortName:"IEEE",
    imgSrc: "../../Teams/ieee.png",
  },
  {
    id: 4,
    name: "International Society of Automation",
    shortName:"ISA",
    imgSrc: "../../Teams/ISA.png",
  },
];

const Teams = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black items-center ">
      <h1 className="text-white text-center mb-6 text-5xl font-bold">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mx-4 md:mx-12 lg:mx-24 px-6 md:px-16">
        {teams.map((team) => (
          <div key={team.id} className="flex flex-col items-center justify-center">
            <img
              className="w-72 h-auto bg-transparent rounded-full hover:scale-110 transition-all"
              src={team.imgSrc}
              alt={team.name} // Optional: add alt text for accessibility
            />
            <p className="text-white font-bold text-2xl">{team.shortName}</p>
            <p className="text-gray-500 font-bold text-lg">{team.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
