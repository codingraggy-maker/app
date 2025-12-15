import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { social } = portfolioData;

  const handleDownloadCV = () => {
    // Mock CV download
    alert('CV download functionality - will be connected to actual file');
  };

  const socialLinks = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: social.twitter, label: 'Twitter' },
    { icon: Mail, url: `mailto:${social.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Let's Connect</h3>
            <p className="text-gray-400 max-w-md">
              Open to new opportunities and interesting projects. Feel free to reach out.
            </p>
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="bg-white text-black hover:bg-gray-200 transition-colors mt-4"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-mono uppercase tracking-wider">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-mono">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} Alex Rivera. Built with React & FastAPI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;