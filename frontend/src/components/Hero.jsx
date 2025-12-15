import React from 'react';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { hero } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative w-full h-screen">
        
        {/* Portrait photo with halftone effect */}
        <div className="relative w-full h-full bg-white flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&h=1600&fit=crop&crop=faces"
            alt="Portrait"
            className="w-full h-full object-cover grayscale"
            style={{
              filter: 'contrast(1.2) brightness(1.1)',
              mixBlendMode: 'multiply'
            }}
          />
          
          {/* Massive overlaid serif text - Exactly like reference */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
            <h1 className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] font-serif font-bold leading-none tracking-tight text-black mix-blend-multiply">
              WE<br/>CREATE
            </h1>
          </div>
          
          {/* Top left - Name */}
          <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-10">
            <h2 className="text-base lg:text-lg font-bold text-black tracking-widest uppercase">{hero.name}</h2>
          </div>
          
          {/* Bottom left - Description */}
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10 space-y-1">
            <p className="text-xs lg:text-sm text-black">Graphic Designer</p>
            <p className="text-xs lg:text-sm text-black">Content Creator</p>
            <p className="text-xs lg:text-sm text-black">Addicted to the Office</p>
          </div>
          
          {/* Bottom right - Credits */}
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 text-right z-10">
            <p className="text-xs text-black/60 mb-1">Inspired By</p>
            <p className="text-xs lg:text-sm text-black">Doorva .P. Jinnevnakr</p>
          </div>
          
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('projects')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black hover:text-gray-600 transition-colors z-20"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;