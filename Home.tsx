
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const faqs = [
    {
      q: "How long does a typical implementation take?",
      a: "Standard CRM setups and core workflow automations take 7-14 days. More complex deployments involving custom AI Voice Receptionists or multi-platform \"Make\" logic typically require up to 21 days for full testing and optimization."
    },
    {
      q: "Will I own the systems you build for my business?",
      a: "Absolutely. Every system is built directly inside YOUR accounts (GoHighLevel, Zapier, Make). If we ever stop working together, you retain 100% ownership, access, and control of your infrastructure."
    },
    {
      q: "Do you offer ongoing support after the project ends?",
      a: "Yes. Every build comes with a 30-day \"Hyper-Care\" period where I provide priority support to fix any bugs and ensure your team is comfortable using the new system."
    },
    {
      q: "What third-party tool costs should I expect?",
      a: "You are responsible for the monthly subscriptions of the software we use (like GHL or Zapier). I focus on selecting the most cost-efficient tools that meet your technical needs without bloating your overhead."
    },
    {
      q: "Can you automate my current manual spreadsheets?",
      a: "Yes. We specialize in migrating legacy spreadsheet data into centralized CRM systems and creating real-time syncs so your data is always accurate and actionable across all platforms."
    }
  ];

  return (
    <div className="animate-[fadeIn_1s_ease-out]">
      {/* Friendly Hero */}
      <section className="pt-24 pb-32 px-6 flex flex-col items-center justify-center text-center hero-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="pill mb-8 inline-block">
            Trusted by 50+ Modern Businesses
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8 tracking-tight text-balance">
            Stop Doing Manual Work. <br />
            <span className="text-blue-600">Start Growing Your Business.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We build custom AI and automation systems that handle your repetitive tasks, save you dozens of hours every week, and increase your profits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://calendly.com/joshuafasanya/30min" target="_blank" className="btn-primary text-lg shadow-lg">
              Book a Free 30-Min Strategy Call
            </a>
            <button 
              onClick={() => onNavigate(Page.Portfolio)} 
              className="px-8 py-4 rounded-2xl border-2 border-slate-200 font-bold text-slate-700 hover:bg-white transition-all"
            >
              See Real Results
            </button>
          </div>
        </div>

        {/* Simple Metric Grid */}
        <div className="mt-24 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: 'Time Saved Weekly', value: '30+ Hours', color: 'text-blue-600' },
             { label: 'System Accuracy', value: '99.9%', color: 'text-emerald-600' },
             { label: 'Response Time', value: 'Instant', color: 'text-indigo-600' },
             { label: 'ROI Timeline', color: 'text-orange-600', value: '< 60 Days' },
           ].map((stat, i) => (
             <div key={i} className="canvas-card p-8 text-center">
                <div className={`text-3xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Simplified Benefits */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">
                Imagine a business that runs <br /><span className="text-blue-600">without your constant attention.</span>
              </h2>
              <div className="space-y-10 mt-12">
                 {[
                   { 
                     title: 'Respond to Customers Instantly', 
                     desc: 'Our AI answers emails and books appointments in seconds, not hours. Never lose a lead to slow follow-up again.',
                     icon: 'fa-bolt'
                   },
                   { 
                     title: 'Connect All Your Tools', 
                     desc: 'We make your software talk to each other. No more copying data between spreadsheets, CRMs, and email.',
                     icon: 'fa-link'
                   },
                   { 
                     title: 'Save 2 Days Every Week', 
                     desc: 'We automate the boring, repetitive work that eats up your time, so you can focus on making big decisions.',
                     icon: 'fa-clock'
                   }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                         <i className={`fas ${item.icon} text-xl`}></i>
                      </div>
                      <div>
                         <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                         <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="canvas-card p-12 bg-slate-50 border-2 border-blue-100">
                 <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                    Live System Example
                 </h4>
                 <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-100">
                       <p className="text-xs font-bold text-slate-400 mb-2">NEW LEAD RECEIVED (2:00 PM)</p>
                       <p className="text-slate-800 font-medium">"I need an appointment for tomorrow morning."</p>
                    </div>
                    <div className="flex justify-center">
                       <i className="fas fa-arrow-down text-blue-200"></i>
                    </div>
                    <div className="bg-blue-600 p-6 rounded-xl text-white">
                       <p className="text-xs font-bold opacity-70 mb-2">AI RESPONSE (2:00 PM)</p>
                       <p className="font-medium">"I've booked you for 9:00 AM tomorrow and updated the team's calendar. See you then!"</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-xl text-emerald-700 text-center font-bold text-sm">
                       SYSTEM SUCCESS: 0 Seconds to Lead Response
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding px-6 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="pill mb-4 inline-block">Frequently Asked Questions</div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Everything you need to know</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="canvas-card p-8 bg-white border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 mt-1">Q:</span>
                  {faq.q}
                </h4>
                <div className="flex items-start gap-3 text-slate-600 leading-relaxed pl-7">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easy CTA */}
      <section className="section-padding px-6 text-center">
        <div className="max-w-3xl mx-auto bg-slate-900 rounded-[3rem] p-16 text-white shadow-2xl">
           <h2 className="text-4xl font-extrabold mb-6">Ready to fix your business bottlenecks?</h2>
           <p className="text-slate-400 text-lg mb-10">
              Book a free call. We'll find exactly where you're losing time and tell you how to automate it.
           </p>
           <a href="https://calendly.com/joshuafasanya/30min" target="_blank" className="btn-primary inline-block text-lg px-12 py-5 shadow-lg shadow-blue-600/20">
              Let's Talk About Your Business
           </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
