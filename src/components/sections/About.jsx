import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-dark-lighter">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I am currently pursuing my <span className="text-white font-medium">Master of Computer Applications (MCA)</span>. 
                My core passions lie at the intersection of Artificial Intelligence and modern Web Development.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                As a fast learner and avid problem solver, I enjoy tackling complex challenges and building 
                applications that provide real value. Whether it's training machine learning models or crafting 
                responsive user interfaces, I'm always eager to learn and adapt to new technologies.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark border border-slate-800">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">AI Enthusiast</h4>
                  <p className="text-slate-400 text-sm">Passionate about exploring neural networks, NLP, and computer vision.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark border border-slate-800">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Web Developer</h4>
                  <p className="text-slate-400 text-sm">Building responsive and performant full-stack applications.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Problem Solver</h4>
                  <p className="text-slate-400 text-sm">Approaching challenges with a logical and optimized mindset.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
