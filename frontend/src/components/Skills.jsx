import React from 'react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Tools', items: skills.tools },
    { title: 'Practices', items: skills.practices },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Bold section header */}
        <div className="mb-20">
          <h2 className="text-8xl md:text-9xl font-bold leading-none mb-6">Expertise</h2>
          <div className="w-24 h-1 bg-white"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {categories.map((category, index) => (
            <div key={index} className="space-y-8">
              <h3 className="text-3xl font-bold uppercase tracking-wider border-b-2 border-white pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    <span className="text-sm font-mono uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;