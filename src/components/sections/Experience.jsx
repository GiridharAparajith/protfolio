import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line (Hidden on mobile, visible on desktop center) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2"></div>
            
            {/* Timeline Line (Mobile left) */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-slate-800"></div>

            {/* Experience Item */}
            <div className="relative mb-12 md:w-1/2 md:pr-12 md:ml-0 md:text-right">
              {/* Timeline Dot */}
              <div className="absolute top-6 -left-10 md:-right-14 md:left-auto w-6 h-6 rounded-full bg-dark border-4 border-primary z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              <div className="bg-dark-lighter border border-slate-800 rounded-2xl p-6 hover:border-primary/30 transition-colors shadow-lg">
                <div className="flex items-center gap-3 md:justify-end mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary md:hidden">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Frontend Development Internship</h3>
                  <div className="hidden md:flex p-2 bg-primary/10 rounded-lg text-primary">
                    <Briefcase size={20} />
                  </div>
                </div>
                <h4 className="text-primary font-medium mb-4">Company Name</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Developed and maintained responsive web applications using React.js and modern CSS frameworks. 
                  Collaborated with the design team to implement pixel-perfect user interfaces and improved overall site performance.
                </p>
                <div className="mt-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Month Year - Month Year
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
