
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const industries = [
    { 
      icon: 'clinic-medical', 
      title: 'Clinics & Med Practices', 
      d: 'Automated HIPAA-compliant patient intake, follow-ups, and appointment management.' 
    },
    { 
      icon: 'calculator', 
      title: 'Tax Consultants', 
      d: 'Automated document collection, deadline reminders, and client onboarding workflows.' 
    },
    { 
      icon: 'dumbbell', 
      title: 'Gym Owners', 
      d: 'Membership sign-up automation, class attendance tracking, and member re-engagement campaigns.' 
    },
    { 
      icon: 'home', 
      title: 'Real Estate', 
      d: 'Lead nurturing systems for agents and brokers. Automated property alerts and viewing bookings.' 
    },
    { 
      icon: 'dog', 
      title: 'Pet Stores', 
      d: 'Inventory alerts, automated grooming bookings, and personalized pet-parent marketing cycles.' 
    },
    { 
      icon: 'building', 
      title: 'Property Management', 
      d: 'Tenant intake automation, maintenance request routing, and automated payment reminders.' 
    }
  ];

  return (
    <div className="animate-[fadeIn_0.8s_ease-out] pt-24 pb-60 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 max-w-4xl">
           <div className="pill mb-8 inline-block">Our Capabilities</div>
           <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
             Everything you need to <br /><span className="text-blue-600">run on autopilot.</span>
           </h2>
           <p className="text-slate-500 text-xl md:text-2xl leading-relaxed">
             We don't just build tools; we build systems. Every deployment is designed to solve a specific problem and yield measurable ROI within weeks.
           </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {SERVICES.map((service, i) => (
            <div key={i} className="canvas-card p-10 flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
                <i className={`${service.icon} text-xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-tight">{service.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed mb-8">{service.description}</p>
              <div className="mt-auto w-full pt-6 border-t border-slate-50 flex justify-between items-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                 <span>Operational Ready</span>
                 <i className="fas fa-arrow-right text-blue-600"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-32 border-t border-slate-100">
           <div className="mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Industry-Specific Solutions</h2>
              <p className="text-slate-500 text-lg">Custom-built systems tailored for your specific business model.</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((item, i) => (
                <div key={i} className="canvas-card p-10 hover:border-blue-600 transition-colors cursor-pointer group">
                   <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <i className={`fas fa-${item.icon} text-3xl`}></i>
                   </div>
                   <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
