import React from 'react';
import ProjectCard from '../ui/ProjectCard';

const projectsData = [
  {
    title: "AI Yoga Trainer",
    description: "An ongoing computer vision project that monitors user posture during yoga sessions and provides real-time corrective feedback using machine learning.",
    techStack: ["Python", "TensorFlow", "OpenCV", "React"],
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    status: "Ongoing"
  },
  {
    title: "E-commerce Web App",
    description: "A full-stack e-commerce application featuring product catalog, shopping cart, user authentication, and secure checkout processing.",
    techStack: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/"
  },
  {
    title: "Voice Assistant (Jarvis)",
    description: "An AI-powered voice assistant capable of handling desktop automation tasks, answering queries, and integrating with external APIs.",
    techStack: ["Python", "SpeechRecognition", "OpenAI API", "PyAudio"],
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-dark-lighter">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A selection of my recent work in web development and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
