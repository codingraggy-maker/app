import React from 'react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks & Libraries', items: skills.frameworks },
    { title: 'Tools & Technologies', items: skills.tools },
    { title: 'Practices', items: skills.practices },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl">Technologies and methodologies I work with to build robust software solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-mono text-black font-semibold uppercase tracking-wider border-b-2 border-black pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-4 py-2 text-sm font-mono bg-gray-100 text-black border border-gray-300 hover:border-black transition-colors duration-200"
                  >
                    {item}
                  </span>
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