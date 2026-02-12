
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Business Automation',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const payload = {
      name: formData.name,
      email: formData.email,
      category: formData.service,
      description: formData.message
    };

    try {
      // Using a standard POST request as requested. 
      // Note: Google Apps Script webhooks often require a redirect to be followed.
      await fetch("https://script.google.com/macros/s/AKfycbxWAizik3MoWmbDXJ-YxzdU-zIwOH8qX_FPvRnxJr_ZD4aHOpxUu00r-Bz7v4ch2Cz7/exec", {
        method: 'POST',
        mode: 'no-cors', // Standard for GAS webhooks to bypass CORS issues while still sending data
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Since we use 'no-cors', we assume success if the fetch doesn't throw.
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        service: 'Full Business Automation',
        message: ''
      });
      
      // Reset status back to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black mb-4 text-slate-900">Inquiry & Systems Audit</h2>
        <p className="text-slate-500">Reach out directly via email or use the audit request form below.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <a href="mailto:Joshuafasanya100@gmail.com" className="glass-card p-8 rounded-[2rem] bg-white text-center hover:border-blue-500 transition-all group">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
            <i className="fas fa-envelope"></i>
          </div>
          <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest mb-2">Email Me</h4>
          <p className="text-blue-600 font-bold text-xs break-all">Joshuafasanya100@gmail.com</p>
        </a>
        <a href="https://wa.me/2349074989290" target="_blank" rel="noopener noreferrer" className="glass-card p-8 rounded-[2rem] bg-white text-center hover:border-green-500 transition-all group">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition">
            <i className="fab fa-whatsapp"></i>
          </div>
          <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest mb-2">WhatsApp</h4>
          <p className="text-green-600 font-bold text-xs">Chat with Joshua</p>
        </a>
        <a href="https://www.linkedin.com/in/joshua-fasanya-a947b8217/" target="_blank" rel="noopener noreferrer" className="glass-card p-8 rounded-[2rem] bg-white text-center hover:border-blue-700 transition-all group">
          <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 group-hover:text-white transition">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest mb-2">LinkedIn</h4>
          <p className="text-blue-700 font-bold text-xs">Professional Profile</p>
        </a>
      </div>

      <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
        {status === 'success' && (
          <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-10 text-center animate-[fadeIn_0.3s_ease-out]">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 text-3xl">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Audit Request Received!</h3>
            <p className="text-slate-500 max-w-sm">Thank you. Joshua will review your bottlenecks and get back to you within 24-48 hours.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-8 text-blue-600 font-bold text-sm uppercase tracking-widest hover:text-blue-700"
            >
              Send another request
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">Name</label>
              <input 
                type="text" 
                required
                disabled={status === 'loading'}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 bg-slate-50 text-slate-800 disabled:opacity-50" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">Your Email</label>
              <input 
                type="email" 
                required
                disabled={status === 'loading'}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 bg-slate-50 text-slate-800 disabled:opacity-50" 
                placeholder="john@company.com" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">Primary Service Interest</label>
            <select 
              disabled={status === 'loading'}
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 bg-slate-50 text-slate-800 appearance-none disabled:opacity-50"
            >
              <option>Meta Ads Integration</option>
              <option>CRM Architecture (GHL)</option>
              <option>AI Receptionist Deployment</option>
              <option>AI Video Outreach</option>
              <option>Full Business Automation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">Tell me about your business bottleneck</label>
            <textarea 
              rows={4} 
              required
              disabled={status === 'loading'}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 bg-slate-50 text-slate-800 disabled:opacity-50" 
              placeholder="What manual task is killing your growth?"
            ></textarea>
          </div>
          
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold flex items-center gap-3 animate-[shake_0.5s_ease-in-out]">
              <i className="fas fa-exclamation-circle"></i>
              Something went wrong. Please try again or email Joshua directly.
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl text-lg shadow-xl hover:bg-slate-800 transition transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
          >
            {status === 'loading' ? (
              <>
                <i className="fas fa-circle-notch animate-spin"></i>
                DEPLOYING REQUEST...
              </>
            ) : (
              'SUBMIT AUDIT REQUEST'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
