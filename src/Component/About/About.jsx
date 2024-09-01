import React from 'react';

function About() {
  return (
    <div id='About' className="text-white bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl mx-4 md:mx-20 rounded-lg p-8 md:p-12 ">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-blue-400">About Me</h2>
      <div className="md:flex md:items-center md:gap-8">
        
        <div className="flex flex-col gap-6 text-center md:text-left">
          <p className="text-sm md:text-lg leading-relaxed text-gray-300">
            I am a passionate frontend developer and aspiring MERN stack developer with a keen eye for detail and a deep love for design.
            I create user-friendly websites that provide excellent user experiences.
            My skills include HTML, CSS, JavaScript, and modern libraries like React. I constantly learn 
            and evolve to keep up with the latest trends in web development.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default About;
