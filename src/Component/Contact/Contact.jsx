import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCoffee  } from 'react-icons/fa';
import { SiLeetcode, SiCodingninjas } from 'react-icons/si';

function Contact() {
  const contacts = [
    {
      name: 'Gmail',
      link: 'mailto:pranayapounikar24@gmail.com',
      icon: <FaEnvelope />,
      color: 'text-red-500'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/pranaya-pounikar-85b972243/',
      icon: <FaLinkedin />,
      color: 'text-blue-700'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/pranayaaaa',
      icon: <FaGithub />,
      color: 'text-gray-400'
    },
    {
        name: 'Buy Me a Coffee',
        link: 'https://buymeacoffee.com/pranaya',
        icon: <FaCoffee />,
        color: 'text-yellow-300'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/pranayaah/', 
      icon: <FaInstagram />,
      color: 'text-pink-500'
    },
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/u/pranayapounikar24/', 
      icon: <SiLeetcode />,
      color: 'text-yellow-600'
    },
    {
      name: 'CodingNinjas',
      link: 'https://www.naukri.com/code360/profile/pranayaaa',
      icon: <SiCodingninjas />,
      color: 'text-green-500'
    },
  ];

  return (
    <div id='Contact' className="bg-gray-800 text-white p-8 md:p-12 rounded-lg shadow-lg mx-4 md:mx-20 mt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-400 mb-8">Contact</h2>
      <div className="flex flex-wrap justify-center gap-5 ">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-3 p-4 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 ${contact.color}`}
          >
            <div className="text-3xl">{contact.icon}</div>
            <span className="text-lg font-semibold">{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
