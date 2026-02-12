
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-[fadeIn_1s_ease-out] pt-24 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-40">
           <div>
              <div className="pill mb-10 inline-block">The Story Behind JoshuAIservices</div>
              <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight mb-12">
                We believe in <br /><span className="text-blue-600">Simplicity.</span>
              </h2>
              <p className="text-slate-600 text-xl md:text-2xl leading-relaxed mb-10 font-medium">
                Most business owners are stuck in the "Founder Trap"—doing everything themselves. We build the systems that set them free.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed mb-12">
                With expertise in AI voice, Meta Ads, and workflow automation, Joshua and his team focus on one thing: removing the manual labor from your daily operations so you can focus on strategy and growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="canvas-card p-10 text-center">
                    <div className="text-5xl font-extrabold text-slate-900 mb-2">50+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Systems</div>
                 </div>
                 <div className="canvas-card p-10 text-center">
                    <div className="text-5xl font-extrabold text-slate-900 mb-2">10k+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Hours Recouped</div>
                 </div>
              </div>
           </div>
           <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 aspect-[4/5] bg-gradient-to-b from-slate-50 to-blue-50/50 shadow-2xl">
                 <img 
                   src="joshua-profile.png" 
                   alt="Joshua" 
                   className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                   onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Joshua&background=2563eb&color=fff&size=512' }}
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/90 backdrop-blur-md border-t border-slate-50">
                    <div className="text-xl font-extrabold text-slate-900">Joshua F.</div>
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">Founder & Systems Architect</div>
                 </div>
              </div>
           </div>
        </div>

        <div className="pt-32 border-t border-slate-100 text-center">
           <h3 className="text-4xl font-extrabold text-slate-900 mb-16 tracking-tight">Our Core Principles.</h3>
           <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { t: 'Reliability First', d: 'An automation is only useful if it works every single time. We prioritize stability over "cool" features.' },
                { t: 'Human-Centered AI', d: 'Our AI agents are designed to feel natural and helpful, protecting your brand reputation.' },
                { t: 'Measurable ROI', d: 'We only build systems that either save you significant money or make you significantly more of it.' }
              ].map((item, i) => (
                <div key={i} className="canvas-card p-10">
                   <h4 className="text-xl font-bold text-slate-900 mb-4">{item.t}</h4>
                   <p className="text-slate-500 leading-relaxed text-sm">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
