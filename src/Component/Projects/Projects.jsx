import React, { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'GitHub Scout',
      description: 'A web application for searching and exploring GitHub profiles using GitHub API.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1607799632518-da91dd151b38?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      githubLink: 'https://github.com/pranayaaaa/GitHub-Scout'
    },
    {
      title: 'Portfolio',
      description: 'A personal portfolio website showcasing my skills, projects, and experiences.',
      tech: ['React JS', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      githubLink: 'https://github.com/pranayaaaa/Portfolio'
    },
    {
      title: 'Weather Application',
      description: 'A web-based weather application that provides real-time weather updates and forecasts using APIs.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://media.istockphoto.com/id/477902875/photo/weather-forecast-on-a-digital-display.jpg?s=1024x1024&w=is&k=20&c=dh6G856Z1WFRE8S-qq_SnO0gR4qVCLcF5ROxxLbm2EI=',
      githubLink: 'https://github.com/pranayaaaa/Weather-Application'
    },
    {
      title: 'Password Generator',
      description: 'A secure and customizable password generator that creates strong and random passwords based on user-defined criteria.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://media.istockphoto.com/id/1271787791/photo/login-and-password-cyber-security-concept-data-protection-and-secured-internet-access.jpg?s=1024x1024&w=is&k=20&c=crHT05H3tOztECZRtAVlGcxW3VQ3NdaS8KyYYkkb_QI=',
      githubLink: 'https://github.com/pranayaaaa/Password-Generator'
    },
    {
      title: 'Blog Website',
      description: 'A static blog site crafted with HTML and CSS, focusing on simplicity and readability.',
      tech: ['HTML', 'CSS'],
      image: 'https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      githubLink: 'https://github.com/pranayaaaa/Blog-Website'
    },
  ];

  
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true });  

  return (
    <motion.div 
      ref={ref}  
      id='Projects' 
      className="bg-gray-800 text-white p-8 md:p-12 rounded-lg shadow-lg mx-4 md:mx-20 mt-10"
      initial={{ opacity: 0 }} 
      animate={isInView ? { opacity: 1 } : {}} 
      transition={{ duration: 2 }} 
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-400 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}} 
            transition={{
              delay: index * 0.3, 
              duration: 1.5, 
              type: "spring", 
              stiffness: 80, 
              damping: 20, 
            }}
            whileHover={{ scale: 1.05 }} 
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <div key={techIndex} className="bg-blue-800 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-md">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 font-semibold flex items-center transition-colors duration-300"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
