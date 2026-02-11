import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Code, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-gray-50/50 dark:bg-gray-900/30">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="card text-center hover:border-blue-500 transition-colors">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-6">
            <GraduationCap size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">Background</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {portfolioData.about.education}
          </p>
        </div>

        <div className="card text-center hover:border-blue-500 transition-colors">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Code size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">Focus Areas</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {portfolioData.about.focus}
          </p>
        </div>

        <div className="card text-center hover:border-blue-500 transition-colors">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Target size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">Career Objective</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {portfolioData.about.objective}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
