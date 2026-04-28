import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "C"]
  },
  {
    category: "Web Development",
    skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "CouchDB"]
  },
  {
    category: "Tools & ML",
    skills: ["TensorFlow (Learning)", "Git", "GitHub"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-lighter border border-slate-800 rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-slate-700/50">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
