import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-dark rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 group flex flex-col"
    >
      {/* Decorative Image Placeholder/Gradient */}
      <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-dark-lighter relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
        {/* We can use a pattern or actual image here, keeping it abstract for now */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-dark-lighter text-primary rounded-md border border-slate-700/50">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800/50">
          <a
            href={githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-primary transition-colors ml-auto"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
