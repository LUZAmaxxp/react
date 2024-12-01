import React from "react";
import Img from "../../../../../assets/img/main.jpg";
import hatim2 from "../../../../../assets/img/hatim2.jpeg";
import ana from "../../../../../assets/img/ana.jpeg";
import salma2 from "../../../../../assets/img/salma2.jpeg";

function OurTeam() {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Img})`,
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    },
  };

  const teamMembers = [
    {
      name: "Ayman  ALLOUCH",
      role: "Cyber Security Researcher",
      image: ana,
    },
    {
      name: "Hatim ALLOUCH",
      role: "VR/AR Developer Researcher",
      image: hatim2,
    },
    { name: "Rachida TABRICH", role: "Front-end Developer" },
    { name: "Abderrahman ALLOUCH", role: "PhD Researcher" },
    { name: "Salma JADBA", role: "Electrical Engineer", image: salma2 },
    {
      name: "heya",
      role: "Data Scientist Researcher",
    },
    {
      name: "heya",
      role: "Data Scientist Researcher",
    },
  ];

  return (
    <div
      style={styles.paperContainer}
      className="min-h-screen py-20 px-4 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold mb-10 uppercase text-center text-white pt-20">
        Our Team
      </h1>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transition transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-24 h-24 mb-4">
              {member.image ? (
                <img
                  className="rounded-full w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-110"
                  src={member.image}
                  alt={`${member.name}`}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold text-gray-200">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>
            <h5 className="text-xl font-semibold text-white mb-2">
              {member.name}
            </h5>
            <span className="text-sm text-gray-300">{member.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
