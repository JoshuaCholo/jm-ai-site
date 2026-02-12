
import React from 'react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-[fadeIn_0.3s_ease-out]">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg border border-slate-100 transition-all"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="w-full h-72 bg-slate-200 overflow-hidden border-b border-slate-100">
          <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">{project.category}</span>
            <span className="px-4 py-1.5 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full">Year: {project.year}</span>
            <span className="px-4 py-1.5 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full">Timeline: {project.timeline}</span>
          </div>

          <h2 className="text-4xl font-black text-slate-900 mb-2 leading-tight">{project.title}</h2>
          <p className="text-slate-400 font-bold text-sm mb-10 uppercase tracking-widest">Client: {project.client}</p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">The Challenge</h4>
              <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">The Solution</h4>
              <p className="text-slate-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl mb-12 border border-slate-100">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Before & After</h4>
            <p className="text-slate-600">{project.beforeAfter}</p>
          </div>

          <div className="mb-12">
            <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">Key Results</h4>
            <div className="flex flex-wrap gap-3">
              {project.keyResults.split('. ').map((result, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white border border-slate-100 px-5 py-3 rounded-xl shadow-sm">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-slate-700 font-bold text-sm">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-4 border-blue-600 pl-8 mb-12 italic text-lg text-slate-600 bg-blue-50/30 py-4 pr-4 rounded-r-xl">
            "{project.clientReview}"
          </div>

          <div className="mb-12">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-md uppercase tracking-wider">{tool}</span>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-12 text-center">
            <h3 className="text-2xl font-black text-slate-900 mb-6">Want similar results?</h3>
            <a 
              href="https://calendly.com/joshuafasanya/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-blue-600/30 transition hover:scale-105"
            >
              Book Strategy Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
