import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { DiPython, DiJava } from 'react-icons/di';
import { SiC, SiTailwindcss } from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";

function Skills() {
  const skills = [
    { icon: <SiC />, name: 'C', color: 'text-blue-600' },
    { icon: <DiPython />, name: 'Python', color: 'text-yellow-400' },
    { icon: <DiJava />, name: 'Java', color: 'text-red-600' },
    { icon: <FaHtml5 />, name: 'HTML', color: 'text-orange-500' },
    { icon: <FaCss3Alt />, name: 'CSS', color: 'text-blue-500' },
    { icon: <FaJs />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <FaReact />, name: 'React JS', color: 'text-blue-400' },
    { icon: <DiMsqlServer />, name: 'SQL', color: 'text-blue-700' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-teal-400' },
  ];

  return (
    <div id='Skills' className="bg-gray-800 text-white p-8 md:p-12 rounded-lg shadow-lg mx-4 md:mx-20 mt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-400 mb-8">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <div className={`text-6xl ${skill.color} mb-4`}>{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
