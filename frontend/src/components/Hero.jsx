import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { hero } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Mock CV download
    alert('CV download functionality - will be connected to actual file');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-5xl w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-mono text-gray-600 tracking-wider uppercase">Software Engineer</p>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-black leading-none">
              {hero.name.split(' ')[0]}<br />
              {hero.name.split(' ')[1]}
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed">
            {hero.tagline}
          </p>
          
          <p className="text-base md:text-lg text-gray-600 max-w-xl">
            {hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-black text-white hover:bg-gray-800 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;