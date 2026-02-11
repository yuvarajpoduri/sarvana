import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="font-bold text-xl tracking-tight">
              SARVANA<span className="text-blue-600">.</span>
            </a>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Personal Portfolio of {portfolioData.name}
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
