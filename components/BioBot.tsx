import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const BioBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o BioBot, assistente virtual da Prof. Janielly. Posso te ajudar com dúvidas de biologia, desde a célula até os ecossistemas. O que você quer aprender hoje?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const prompt = `Você é o BioBot, um assistente virtual educacional da Professora Janielly Oliveira. 
      Seu objetivo é ajudar estudantes com dúvidas de biologia.
      Responda de forma didática, amigável e encorajadora. 
      Use emojis ocasionalmente para tornar a conversa leve.
      Se a pergunta fugir totalmente do tema biologia/ciências, gentilmente traga o foco de volta para a biologia.
      Mantenha as respostas concisas e fáceis de ler (máximo de 3 parágrafos curtos, a menos que seja uma explicação complexa solicitada).
      
      Pergunta do aluno: ${userMessage}`;

      const result = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });

      const responseText = result.text || "Desculpe, tive um pequeno problema ao processar sua pergunta. Tente novamente!";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Erro ao chamar Gemini:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Ops! Tive um problema de conexão. Por favor, tente novamente em alguns instantes." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="biobot" className="py-12 md:py-16 bg-bio-900 text-white relative overflow-hidden">
       {/* Decorative elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-bio-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
       </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
           <div className="inline-flex items-center justify-center p-2.5 bg-white/10 rounded-xl mb-3 backdrop-blur-sm border border-white/20">
              <Bot className="w-6 h-6 text-bio-300" />
           </div>
          <h2 className="text-2xl font-bold sm:text-3xl">BioBot Inteligente</h2>
          <p className="mt-2 text-bio-100 max-w-xl mx-auto text-sm sm:text-base">
            Tire suas dúvidas instantaneamente com nossa IA treinada em biologia.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-2xl flex flex-col h-[400px] md:h-[500px]">
           {/* Chat Header */}
           <div className="bg-bio-800/50 p-3 border-b border-white/10 flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-bio-100">Online • Respondendo sobre Biologia</span>
           </div>

           {/* Messages Area */}
           <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-bio-700 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                 <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-3 sm:p-4 ${
                       msg.role === 'user' 
                          ? 'bg-bio-600 text-white rounded-br-none' 
                          : 'bg-white text-slate-800 rounded-bl-none shadow-lg'
                    }`}>
                       {msg.role === 'model' && (
                          <div className="flex items-center gap-1.5 mb-1 opacity-50 text-[10px] font-bold uppercase tracking-wider text-bio-800">
                             <Sparkles className="w-3 h-3" /> BioBot
                          </div>
                       )}
                       <p className="leading-relaxed whitespace-pre-wrap text-sm">{msg.text}</p>
                    </div>
                 </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-white/80 text-slate-800 rounded-2xl rounded-bl-none p-3 shadow-lg flex items-center gap-2">
                       <Loader2 className="w-3.5 h-3.5 animate-spin text-bio-600" />
                       <span className="text-xs text-slate-500">Digitando...</span>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
           </div>

           {/* Input Area */}
           <div className="p-3 bg-bio-800/30 border-t border-white/10">
              <form onSubmit={handleSendMessage} className="relative">
                 <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Pergunte sobre biologia..."
                    className="w-full bg-white/10 text-white placeholder-bio-200/50 border border-white/20 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-bio-400 focus:bg-white/20 transition-all"
                 />
                 <button 
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="absolute right-1.5 top-1.5 p-1.5 bg-bio-500 hover:bg-bio-400 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                    <Send className="w-4 h-4" />
                 </button>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default BioBot;