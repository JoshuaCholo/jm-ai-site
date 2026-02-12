
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hello! I'm the JoshuAI Assistant. Ask me anything about scaling your business with systems." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are an expert AI consultant for JoshuAIservices, an elite business automation agency. You speak with confidence, clarity, and technical authority. Joshua specializes in GHL, n8n, Make, and Retell AI Voice Agents. Your objective is to highlight the benefits of automation and drive users toward booking a 'Strategy Session' at Calendly link provided. Keep responses pithy and impressive.",
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I apologize, my systems are recalibrating. Could you repeat that?" }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Systems offline. Please try again in a moment." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[70]">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform ${
          isOpen ? 'bg-slate-900 rotate-180 scale-90' : 'bg-blue-600 hover:scale-110'
        }`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bolt-lightning'} text-2xl text-white`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-[2.5rem] shadow-[0_24px_64px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-slate-100 animate-[fadeIn_0.4s_ease-out]">
          <div className="bg-slate-900 p-8 text-white relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <i className="fas fa-robot text-6xl"></i>
            </div>
            <h3 className="font-black text-xl tracking-tight mb-1">JoshuAI Assistant</h3>
            <div className="flex items-center text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Real-time Consultant
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 no-scrollbar bg-slate-50/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-500/10' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-3xl rounded-tl-none flex space-x-1 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex items-center bg-slate-50 rounded-2xl p-2 border border-slate-100 focus-within:border-blue-500/50 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me about automation..."
                className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-sm text-slate-800"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
              >
                <i className="fas fa-arrow-up text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
