import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Bold section header */}
        <div className="mb-20">
          <h2 className="text-8xl md:text-9xl font-bold text-black leading-none mb-6">Selected<br/>Work</h2>
          <div className="w-24 h-1 bg-black"></div>
        </div>
        
        {/* Projects grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image placeholder */}
              <div 
                className={`lg:col-span-7 bg-gray-900 min-h-[400px] md:min-h-[500px] relative overflow-hidden group ${
                  index % 2 === 1 ? 'lg:col-start-6' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white opacity-10">0{project.id}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className={`lg:col-span-5 space-y-6 ${
                index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                <div>
                  <span className="text-sm font-mono text-gray-400 tracking-widest uppercase">Project 0{project.id}</span>
                  <h3 className="text-4xl md:text-5xl font-bold text-black mt-2 leading-tight">{project.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 text-xs font-mono bg-black text-white uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-white transition-all font-mono uppercase tracking-wider"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  
                  {project.live && (
                    <Button
                      className="bg-black text-white hover:bg-gray-800 transition-all font-mono uppercase tracking-wider"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;