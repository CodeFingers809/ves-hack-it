import React from "react";

const teams = [
  {
    id: 1,
    name: "Indian Society for Technical Education",
    shortName:"ISTE",
    imgSrc: "../../Teams/ISTE.png",
    w:"52"
  },
  {
    id: 2,
    name: "Computer Society of India",
    shortName:"CSI",
    imgSrc: "../../Teams/CSI.png",
    w:"52"
  },
  {
    id: 3,
    name: "Institute of Electrical and Electronics Engineers",
    shortName:"IEEE",
    imgSrc: "../../Teams/IEEE.png",
    w:"72"
  },
  {
    id: 4,
    name: "International Society of Automation",
    shortName:"ISA",
    imgSrc: "../../Teams/ISA.png",
    w:"[10px]"
  },
];

const Teams = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black items-center ">
      <h1 className="text-white text-center mb-6 text-5xl font-bold">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 mx px-6 md:px-16">
        {teams.map((team) => (
          <div key={team.id} className="flex flex-col items-center justify-center">
            <img
              className={`w-72  bg-transparent hover:scale-110 transition-all mb-4`}
              src={team.imgSrc}
              alt={team.name} // Optional: add alt text for accessibility
            />
            <p className="text-white font-bold text-2xl">{team.shortName}</p>
            <p className="text-gray-500 font-bold text-md lg:text-sm">{team.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
