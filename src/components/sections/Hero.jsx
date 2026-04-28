import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-primary font-medium tracking-wide mb-4 uppercase text-sm md:text-base">
            Welcome to my portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Girdhar Aparajith J</span>
          </h1>
          
          <h3 className="text-2xl md:text-3xl text-slate-300 font-medium mb-6 h-12">
            Aspiring AI Developer <span className="text-primary mx-2">|</span> Web Developer
          </h3>
          
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            I build modern web applications and have a deep passion for Artificial Intelligence. Fast learner, problem solver, and tech enthusiast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              View Projects
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center justify-center gap-2 bg-transparent border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
