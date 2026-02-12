
import React from 'react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const navLinks = [
    { label: 'Home', value: Page.Home },
    { label: 'What We Do', value: Page.Services },
    { label: 'Our Results', value: Page.Portfolio },
    { label: 'About', value: Page.About },
    { label: 'Contact', value: Page.Contact },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100">
      {/* Sticky Navigation - Stays at the top of the screen */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-5 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate(Page.Home)}
          >
            <span className="text-2xl font-extrabold text-slate-900 tracking-tighter hover:text-blue-600 transition-colors">
              JoshuAIservices
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => onNavigate(link.value)}
                className={`text-sm font-bold transition-all ${
                  currentPage === link.value ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <a 
            href="https://calendly.com/joshuafasanya/30min" 
            target="_blank" 
            className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10"
          >
            Free Audit
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Simple Professional Footer */}
      <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-xl font-extrabold tracking-tighter text-slate-900">JoshuAIservices</span>
            </div>
            <p className="text-slate-500 text-lg max-w-sm mb-8 leading-relaxed">
              We help business owners reclaim their time through reliable AI systems and custom automation.
            </p>
            <div className="flex gap-6">
               <a href="https://www.linkedin.com/in/joshua-fasanya-a947b8217/" className="text-slate-400 hover:text-blue-600 transition-all text-xl"><i className="fab fa-linkedin"></i></a>
               <a href="#" className="text-slate-400 hover:text-blue-600 transition-all text-xl"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Explore</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><button onClick={() => onNavigate(Page.Services)} className="hover:text-blue-600">Services</button></li>
              <li><button onClick={() => onNavigate(Page.Portfolio)} className="hover:text-blue-600">Case Studies</button></li>
              <li><button onClick={() => onNavigate(Page.About)} className="hover:text-blue-600">Our Story</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Contact</h5>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li>Joshuafasanya100@gmail.com</li>
              <li>WhatsApp: +234 907 498 9290</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-slate-50 text-slate-400 text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2024 JoshuAIservices. Built for Business Owners.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
