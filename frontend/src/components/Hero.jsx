import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Download } from 'lucide-react';
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
    alert('CV download functionality - will be connected to actual file');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Small intro text */}
          <div className="space-y-4">
            <p className="text-sm font-mono tracking-widest uppercase text-gray-400">Portfolio 2025</p>
          </div>
          
          {/* Massive typography */}
          <div className="relative">
            <h1 className="text-[10rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] font-bold leading-none tracking-tighter">
              <span className="block">{hero.name.split(' ')[0]}</span>
              <span className="block mt-[-3rem] md:mt-[-4rem] lg:mt-[-5rem]">{hero.name.split(' ')[1]}</span>
            </h1>
            
            {/* Overlaid text */}
            <div className="absolute bottom-0 right-0 md:bottom-10 md:right-10 bg-white text-black px-8 py-6 max-w-md">
              <p className="text-xs font-mono uppercase tracking-widest mb-2">Software Engineer</p>
              <p className="text-lg font-light leading-relaxed">{hero.tagline}</p>
            </div>
          </div>
          
          {/* Subtitle description */}
          <div className="max-w-2xl pt-12">
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              {hero.description}
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-6 pt-8 items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-white text-black hover:bg-gray-200 transition-all text-base px-8 py-6 font-mono uppercase tracking-wider"
            >
              View Work
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all text-base px-8 py-6 font-mono uppercase tracking-wider"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white hover:text-gray-300 transition-colors"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;