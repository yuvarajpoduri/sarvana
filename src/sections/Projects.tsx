import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, Database, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="bg-gray-50/50 dark:bg-gray-900/30">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project) => (
          <div key={project.title} className="card group hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                {project.title.includes('IPL') ? <Database size={20} /> : <Globe size={20} />}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 dark:text-blue-400 font-bold">Impact:</span> {project.impact}
              </p>
            </div>
            
            <div className="mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Repository <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
