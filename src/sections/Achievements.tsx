import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Code2, CheckCircle } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <SectionWrapper id="achievements">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Competitive Programming</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="card border-none bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
          <Trophy className="text-yellow-500 mb-6" size={32} />
          <h3 className="text-xl font-bold mb-4">Milestones</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700 dark:text-gray-300 font-medium">{portfolioData.achievements.cp}</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700 dark:text-gray-300 font-medium">{portfolioData.achievements.fcc}</span>
            </li>
          </ul>
        </div>

        <div className="card md:col-span-2">
          <div className="flex items-center mb-6">
            <Code2 className="text-blue-600 dark:text-blue-400 mr-4" size={32} />
            <h3 className="text-xl font-bold">Coding Practice</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {portfolioData.achievements.coding}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">300+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Problems</div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">80%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">SDE Sheet</div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">Gold</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Badge</div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">Top 10%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Rank</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
