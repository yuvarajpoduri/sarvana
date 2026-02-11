import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="bg-gray-50/50 dark:bg-gray-900/30">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience / Training</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.experience.map((exp) => (
          <div key={exp.title} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900 ml-4 py-4">
            <div className="absolute -left-[11px] top-6 w-5 h-5 bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-full" />
            
            <div className="card">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    <Briefcase size={14} className="mr-1.5" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm font-medium">
                  <Calendar size={14} className="mr-1.5" />
                  {exp.period}
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((s) => (
                  <span key={s} className="badge bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-none">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
