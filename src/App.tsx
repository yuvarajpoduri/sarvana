import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import SectionWrapper from './components/SectionWrapper';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Achievements />

        {/* Placeholder Sections */}
        <SectionWrapper id="open-source" className="bg-gray-50/50 dark:bg-gray-900/30 border-y border-gray-100 dark:border-gray-800">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Open Source Contributions</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8" />
            <p className="text-gray-500 italic">Exploring the open-source ecosystem. Contributions coming soon!</p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="blog">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Blog & Technical Writing</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8" />
            <p className="text-gray-500 italic">I love sharing what I learn. Technical blog posts are on the way!</p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="research" className="bg-gray-50/50 dark:bg-gray-900/30 border-y border-gray-100 dark:border-gray-800">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Research Publication / Patent</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8" />
            <p className="text-gray-500 italic">Actively exploring research opportunities in ML and Web Technologies.</p>
          </div>
        </SectionWrapper>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
