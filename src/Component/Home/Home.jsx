import React from 'react';
import avatarImg from '../../assets/p-removebg.png';
import Text from '../Text';

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:px-20">
      <div className="md:w-2/4 md:pt-10 text-center md:text-left"> 
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <Text />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-3">Aspiring MERN Stack Developer</p>
        <a
          href="#Contact"
          className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 
          font-semibold rounded-sm bg-blue-800 inline-block" 
        >
          Contact Me
        </a>
      </div>
      <div className="flex justify-center items-center md:w-2/4 mt-10 md:mt-0"> 
        <img
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover"
          src={avatarImg}
          alt="Pranaya Pounikar"
        />
      </div>
    </div>
  );
};

export default Home;
