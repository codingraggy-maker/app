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
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="relative w-full h-screen">
        
        {/* Full screen image with centered text overlay */}
        <div className="relative w-full h-full bg-gray-200">
          {/* Portrait photo - Full screen */}
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1600&fit=crop&crop=faces"
            alt="Portrait"
            className="w-full h-full object-cover grayscale"
          />
          
          {/* Massive overlaid text - Centered on face */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-[10rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-black leading-none tracking-tighter text-white mix-blend-difference uppercase">
              {hero.title.split(' ')[0]}
            </h1>
          </div>
          
          {/* Top left - Name & Role */}
          <div className="absolute top-8 left-8 lg:top-12 lg:left-12 z-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1">{hero.name}</h2>
            <p className="text-xs font-mono uppercase tracking-widest text-white/80">Portfolio 2025</p>
          </div>
          
          {/* Top right - Navigation links (on larger screens) */}
          <div className="hidden lg:flex absolute top-12 right-12 gap-8 z-10">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm font-mono uppercase tracking-wider text-white hover:text-gray-300 transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-mono uppercase tracking-wider text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* Bottom left - Description box (like reference) */}
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 bg-white text-black px-6 py-4 max-w-sm z-10">
            <p className="text-xs font-mono uppercase tracking-widest mb-2">Software Engineer</p>
            <p className="text-sm lg:text-base leading-relaxed">Content Creator</p>
            <p className="text-sm lg:text-base leading-relaxed">Addicted to the Office</p>
          </div>
          
          {/* Bottom right - Credits */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 text-right z-10">
            <p className="text-xs font-mono uppercase tracking-widest text-white/80 mb-1">
              Inspired By
            </p>
            <p className="text-sm text-white">Donna .P. Jimenwater</p>
          </div>
          
        </div>
        
        {/* Floating CTAs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 flex flex-wrap gap-4 z-20">
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-black text-white hover:bg-gray-800 transition-all text-sm px-8 py-6 font-mono uppercase tracking-wider shadow-xl"
          >
            View Projects
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={handleDownloadCV}
            className="border-2 border-white bg-white/90 text-black hover:bg-white transition-all text-sm px-8 py-6 font-mono uppercase tracking-wider shadow-xl"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('projects')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300 transition-colors z-20"
        >
          <ArrowDown className="h-8 w-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;