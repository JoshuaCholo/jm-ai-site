
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import CaseStudyModal from '../components/CaseStudyModal';
import { Project } from '../types';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-8 py-24 animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-24">
        <div className="pill mb-6 inline-block">Real Results for Real Businesses</div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">System Deployments</h2>
        <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {PROJECTS.map((project) => (
          <div key={project.id} className="flex flex-col">
             <ProjectCard 
               project={project} 
               onClick={setSelectedProject} 
             />
             <div className="mt-4 px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-300">
                <span>Verified Impact</span>
                <span className="text-emerald-600"><i className="fas fa-check-circle mr-1"></i> ROI Verified</span>
             </div>
          </div>
        ))}
        {/* The "Reserve" Card */}
        <div className="canvas-card bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-12 text-center text-slate-400 group hover:border-blue-300 transition-all cursor-pointer">
           <i className="fas fa-lock text-3xl mb-4 group-hover:text-blue-400"></i>
           <p className="text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Project #482 (NDA)</p>
           <p className="text-xs text-slate-400">Scaling a 7-figure real estate firm...</p>
        </div>
      </div>

      {/* Case Study Meta Info */}
      <div className="bg-white border border-slate-100 p-16 rounded-[3rem] text-center max-w-4xl mx-auto shadow-sm">
         <h3 className="text-3xl font-bold mb-6 text-slate-900">Confidentiality & Precision</h3>
         <p className="text-slate-500 leading-relaxed text-lg">
           Due to the high-stakes nature of the operations we manage, several of our largest implementations are under strict NDA. Detailed architectural breakdowns are available during private strategy calls for qualified businesses.
         </p>
      </div>

      <CaseStudyModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Portfolio;
