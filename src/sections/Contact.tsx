import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
              Feel free to reach out for collaborations, opportunities, or just to say hi! I'm always open to discussing new projects and ideas.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                {portfolioData.contact.email}
              </a>
            </div>

            <div className="flex items-center group">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">{portfolioData.contact.mobile}</span>
            </div>

            <div className="flex items-center group">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center group">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Github size={20} />
              </div>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                required
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Topic"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button
              type="submit"
              disabled={formState !== 'idle'}
              className="w-full btn-primary disabled:opacity-70"
            >
              {formState === 'idle' && (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
              {formState === 'submitting' && 'Sending...'}
              {formState === 'success' && (
                <>
                  <CheckCircle size={18} className="mr-2" />
                  Sent!
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
