import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { social } = portfolioData;

  const handleDownloadCV = () => {
    alert('CV download functionality - will be connected to actual file');
  };

  const socialLinks = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: social.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Large text */}
          <div className="lg:col-span-2">
            <h3 className="text-6xl md:text-7xl font-bold leading-tight mb-8">Let's create something amazing together</h3>
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="bg-white text-black hover:bg-gray-200 transition-all text-base px-8 py-6 font-mono uppercase tracking-wider"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-4">Email</h4>
              <a href={`mailto:${social.email}`} className="text-xl hover:text-gray-300 transition-colors">
                {social.email}
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-4">Social</h4>
              <div className="flex gap-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-mono text-gray-400">
              © {new Date().getFullYear()} Alex Rivera. All rights reserved.
            </p>
            <p className="text-sm font-mono text-gray-400">
              Designed & Built with React + FastAPI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;