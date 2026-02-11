import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Courses</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.certifications.map((cert) => (
          <div key={cert.name} className="card relative overflow-hidden group hover:border-blue-500 transition-colors">
            <div className="absolute -right-2 -top-2 text-gray-100 dark:text-gray-800 group-hover:text-blue-50 dark:group-hover:text-blue-900/20 transition-colors">
              <Award size={80} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-4">
                <CheckCircle2 size={18} className="mr-2" />
                <span className="text-xs font-bold uppercase tracking-widest">{cert.provider}</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 leading-tight">
                {cert.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
