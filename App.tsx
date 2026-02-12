
import React, { useState } from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import GeminiChat from './GeminiChat';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onNavigate={setCurrentPage} />;
      case Page.About:
        return <About />;
      case Page.Services:
        return <Services />;
      case Page.Portfolio:
        return <Portfolio />;
      case Page.Reviews:
        return (
          <div className="max-w-6xl mx-auto px-6 py-12 animate-[fadeIn_0.5s_ease-out]">
            <h2 className="text-4xl font-black mb-12 text-center text-slate-900">Client Testimonials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { star: 5, text: "The automation workflows Joshua built for us saved my assistant 4 hours every single day. The ROI was instant.", author: "Marcus V., Roofing Co." },
                { star: 5, text: "GHL setup was seamless. I've worked with others who didn't understand the nuances of triggers, but JoshuAI nailed it.", author: "Elena R., Med Spa Owner" },
                { star: 5, text: "The AI voice agent handles our entire front-desk intake now. It's transformed how we handle out-of-hours calls.", author: "Dr. David K., Chiropractic Clinic" }
              ].map((rev, i) => (
                <div key={i} className="glass-card p-10 rounded-[2.5rem] bg-white border-blue-50 hover:shadow-xl transition duration-300">
                  <div className="flex text-blue-500 mb-6 space-x-1">
                    {[...Array(rev.star)].map((_, j) => <i key={j} className="fas fa-star text-xs"></i>)}
                  </div>
                  <p className="text-slate-600 italic leading-relaxed mb-8">"{rev.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
                      {rev.author.charAt(0)}
                    </div>
                    <p className="font-black text-slate-900 text-sm">{rev.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case Page.Contact:
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
      <GeminiChat />
    </>
  );
};

export default App;
