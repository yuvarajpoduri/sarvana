import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const categories = [
    { name: 'Languages', skills: portfolioData.skills.languages },
    { name: 'Frameworks', skills: portfolioData.skills.frameworks },
    { name: 'Databases', skills: portfolioData.skills.databases },
    { name: 'Tools', skills: portfolioData.skills.tools },
    { name: 'Soft Skills', skills: portfolioData.skills.softSkills },
  ];

  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="card bg-gray-50/50 dark:bg-gray-800/20 border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="badge bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 py-1.5 px-3 hover:border-blue-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
