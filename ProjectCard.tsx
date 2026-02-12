
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="canvas-card group overflow-hidden cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute top-4 left-4">
           <span className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-widest text-blue-600 shadow-sm">
             {project.category}
           </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.challenge}
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
           <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
              <i className="fas fa-check-circle"></i> ROI Verified
           </div>
           <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
              View Case <i className="fas fa-arrow-right ml-1"></i>
           </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
