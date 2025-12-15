import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-full px-6 py-4 lg:px-10 lg:py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm md:text-base font-bold text-black hover:text-gray-600 transition-colors tracking-widest uppercase"
          >
            {/* Hidden on mobile in hero, shows on scroll */}
          </button>
          
          {/* Desktop Navigation - Right aligned like reference */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <span className="text-xs text-black">2025</span>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-xs text-black hover:text-gray-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-xs text-black hover:text-gray-600 transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-xs text-black hover:text-gray-600 transition-colors"
            >
              Contact
            </button>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs text-black hover:text-gray-600 transition-colors">
                IG
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-xs text-black hover:text-gray-600 transition-colors">
                TT
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xs text-black hover:text-gray-600 transition-colors">
                YT
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-black hover:text-gray-700 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => { scrollToSection('projects'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left text-sm text-black hover:text-gray-600 transition-colors py-2"
            >
              Work
            </button>
            <button
              onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left text-sm text-black hover:text-gray-600 transition-colors py-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;