import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-dark-lighter">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-dark border border-slate-800 rounded-2xl p-8 hover:border-primary/30 transition-colors shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
              <GraduationCap size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Master of Computer Applications</h3>
              <h4 className="text-primary font-medium text-lg mb-4">American College</h4>
              <p className="text-slate-400 leading-relaxed">
                Currently pursuing MCA, focusing on advanced computing concepts, artificial intelligence, and modern software engineering practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark border border-slate-800 rounded-2xl p-8 hover:border-primary/30 transition-colors shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
              <GraduationCap size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">BSc Computer Science</h3>
              <h4 className="text-primary font-medium text-lg mb-4">Graduated</h4>
              <p className="text-slate-400 leading-relaxed">
                Built a strong foundation in computer science fundamentals, data structures, algorithms, and core programming languages.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
