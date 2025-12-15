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
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Grid layout - similar to reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          
          {/* Left side - Info */}
          <div className="relative flex flex-col justify-between p-8 lg:p-12 bg-white text-black order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-xs font-mono tracking-widest uppercase text-gray-500">Portfolio 2025</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">{hero.name}</h2>
                <p className="text-base lg:text-lg text-gray-600 mb-4">{hero.tagline}</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-black text-white">
                  Software Engineer
                </span>
                <span className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-black text-white">
                  Full Stack
                </span>
              </div>
            </div>
            
            {/* Bottom left - Large text overlay */}
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
              <h1 className="text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black leading-none tracking-tighter opacity-10 pointer-events-none select-none">
                {hero.name.split(' ')[0]}
              </h1>
            </div>
          </div>
          
          {/* Right side - Photo with overlay text */}
          <div className="relative bg-gray-200 flex items-center justify-center overflow-hidden order-1 lg:order-2">
            {/* Portrait photo */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces"
              alt="Portrait"
              className="w-full h-full object-cover grayscale"
            />
            
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Massive overlaid text - center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-black leading-none tracking-tighter text-white mix-blend-difference">
                Create
              </h1>
            </div>
            
            {/* Bottom right corner - Descriptive text */}
            <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12">
              <p className="text-xs font-mono uppercase tracking-widest text-white">
                Inspired By
              </p>
              <p className="text-sm text-white mt-1">Bold Design</p>
            </div>
          </div>
          
        </div>
        
        {/* CTAs - Floating */}
        <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex flex-wrap gap-4 z-20">
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-black text-white hover:bg-gray-800 transition-all text-sm px-6 py-5 font-mono uppercase tracking-wider"
          >
            View Work
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={handleDownloadCV}
            className="border-2 border-black text-black hover:bg-black hover:text-white transition-all text-sm px-6 py-5 font-mono uppercase tracking-wider"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('projects')}
          className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 text-black hover:text-gray-600 transition-colors z-20"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;