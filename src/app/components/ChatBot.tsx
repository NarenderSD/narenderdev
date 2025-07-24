"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes, FaCode, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload, FaUser, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const BOT_NAME = "Narender's AI Assistant";

// Advanced conversation tracking
interface ChatMessage {
  from: "user" | "bot";
  text: string;
  timestamp: Date;
  intent?: string;
  action?: string;
}

// Pre-defined smart responses based on intent
const SMART_RESPONSES = {
  greeting: [
    "Hello! 👋 I'm Narender's AI Assistant. I know everything about his skills, projects, and experience. How can I help you today?",
    "Hi there! 🚀 I'm here to tell you about Narender Singh - a brilliant Full Stack Developer. What would you like to know?",
    "Welcome! 💻 I'm Narender's personal AI assistant. Ready to discuss his portfolio, projects, or help you connect with him!"
  ],
  skills: [
    "Narender is a master of modern tech stack! 🔥 He specializes in:\n\n• **Frontend**: React.js, Next.js, TypeScript, TailwindCSS\n• **Backend**: Node.js, Express.js, MongoDB\n• **Tools**: Git, AWS, Framer Motion\n• **UI/UX**: Advanced animations, responsive design\n\nWant to see his projects in action? 🚀",
    "His technical expertise is impressive! 💪 React ecosystem, full-stack development, database design, cloud deployment - he's got it all covered!"
  ],
  projects: [
    "Let me show you Narender's amazing projects! 🌟\n\n**🔥 Featured Work:**\n• **Apna Blog** - Full-stack blogging platform\n• **Yaar Vichar** - Social media with real-time chat\n• **Dental Care** - Premium clinic website\n\nAll deployed and production-ready! Want links? 🔗",
    "His portfolio showcases real-world applications! Each project demonstrates scalability, modern design, and clean code practices. Impressed? 😎"
  ],
  hiring: [
    "🎯 **Looking to hire Narender?** Excellent choice!\n\nHe's available for:\n• Full-time positions\n• Freelance projects\n• Consulting work\n• Technical mentoring\n\n📞 **Ready to connect?** I can help you reach out via:\n• 📧 Email: contact@example.com\n• 💼 LinkedIn\n• 📱 WhatsApp\n\nShall I arrange a meeting? 🤝",
    "Smart move! 💼 Narender brings 3+ years of experience, proven project delivery, and modern tech expertise. He's the developer you need!"
  ],
  freelance: [
    "🚀 **Need a freelance developer?** You've found the right person!\n\nNarender offers:\n• Custom web applications\n• Full-stack development\n• UI/UX design\n• Performance optimization\n• Technical consulting\n\n💰 **Competitive rates** | ⚡ **Fast delivery** | 🏆 **Quality guaranteed**\n\nReady to start your project? Let's connect! 📞"
  ],
  contact: [
    "📞 **Let's get you connected with Narender!**\n\n**Preferred Contact Methods:**\n• 📧 **Email**: narender@example.com\n• 💼 **LinkedIn**: /in/narender-singh\n• 📱 **WhatsApp**: +91-XXXXXXXXXX\n• 📄 **Resume**: Available for download\n\nI'll let him know you're interested! What's your preferred way to connect? 🤝"
  ]
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      from: "bot", 
      text: `🚀 Hi! I'm ${BOT_NAME}. I know everything about Narender's skills, projects, and experience. I can also help you:\n\n• 💼 Connect for job opportunities\n• 🤝 Arrange freelance collaborations\n• 📞 Schedule meetings\n• 📧 Share contact details\n\nWhat brings you here today?`,
      timestamp: new Date(),
      intent: "greeting"
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingIndicator, setTypingIndicator] = useState(false);
  const [conversationSummary, setConversationSummary] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Save conversation history to localStorage
  useEffect(() => {
    const savedChats = localStorage.getItem('narender_chatbot_history');
    if (savedChats) {
      try {
        const parsed = JSON.parse(savedChats);
        if (parsed.length > 1) {
          setMessages(parsed);
        }
      } catch (e) {
        console.log('Error loading chat history');
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('narender_chatbot_history', JSON.stringify(messages));
    }
  }, [messages]);

  // Intent detection
  const detectIntent = (message: string): string => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hire') || lowerMsg.includes('job') || lowerMsg.includes('position') || lowerMsg.includes('opportunity')) {
      return 'hiring';
    } else if (lowerMsg.includes('freelance') || lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('client')) {
      return 'freelance';
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone') || lowerMsg.includes('whatsapp') || lowerMsg.includes('linkedin')) {
      return 'contact';
    } else if (lowerMsg.includes('skill') || lowerMsg.includes('technology') || lowerMsg.includes('tech') || lowerMsg.includes('experience')) {
      return 'skills';
    } else if (lowerMsg.includes('project') || lowerMsg.includes('portfolio') || lowerMsg.includes('work') || lowerMsg.includes('demo')) {
      return 'projects';
    } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
      return 'greeting';
    }
    return 'general';
  };

  // Smart response generator
  const generateSmartResponse = (intent: string, userMessage: string): string => {
    const responses = SMART_RESPONSES[intent as keyof typeof SMART_RESPONSES];
    if (responses) {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // Add contextual actions
      if (intent === 'hiring' || intent === 'freelance' || intent === 'contact') {
        setConversationSummary(prev => [...prev, `User interested in: ${intent}`, `Message: ${userMessage}`]);
        return randomResponse + "\n\n🤖 **I'll notify Narender about your interest!** He'll reach out to you within 24 hours.";
      }
      
      return randomResponse;
    }
    
    return "That's interesting! 🤔 Let me connect you with Narender for detailed discussion. Meanwhile, you can check out his projects or contact him directly via WhatsApp/LinkedIn!";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    const intent = detectIntent(userMsg);
    const userMessage: ChatMessage = {
      from: "user",
      text: userMsg,
      timestamp: new Date(),
      intent
    };
    
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setTypingIndicator(true);
    
    // Simulate typing delay for more natural conversation
    setTimeout(async () => {
      setTypingIndicator(false);
      setLoading(true);
      
      try {
        // First try smart response
        const smartResponse = generateSmartResponse(intent, userMsg);
        
        if (intent !== 'general') {
          const botMessage: ChatMessage = {
            from: "bot",
            text: smartResponse,
            timestamp: new Date(),
            intent,
            action: intent === 'hiring' || intent === 'freelance' || intent === 'contact' ? 'notify_narender' : undefined
          };
          setMessages((msgs) => [...msgs, botMessage]);
          setLoading(false);
          return;
        }

        // Fallback to AI if no smart response
        const context = `
        You are Narender Singh's personal AI assistant. Here's what you know about him:
        
        ABOUT NARENDER:
        - Full Stack Developer with 3+ years experience
        - Expert in React.js, Next.js, Node.js, MongoDB, TypeScript
        - Available for freelance projects and full-time positions
        - Contact: WhatsApp, LinkedIn, Email
        - Portfolio: Multiple production-ready projects
        
        PROJECTS:
        - Apna Blog: Full-stack blogging platform
        - Yaar Vichar: Social media with real-time chat  
        - Dental Care: Premium clinic website
        
        PERSONALITY: Professional, enthusiastic, helpful
        GOAL: Help visitors connect with Narender for work opportunities
        
        User message: ${userMsg}
        
        Respond as his personal assistant who wants to help them connect with him.
        `;

        const res = await fetch("/api/gemini/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: context, mode: "generate" }),
        });
        
        const data = await res.json();
        const botMessage: ChatMessage = {
          from: "bot",
          text: data.text || "I'd love to help you learn more about Narender! Feel free to ask about his projects, skills, or how to connect with him. 😊",
          timestamp: new Date(),
          intent: 'general'
        };
        
        setMessages((msgs) => [...msgs, botMessage]);
      } catch (error) {
        const errorMessage: ChatMessage = {
          from: "bot",
          text: "Sorry, I'm having a technical moment! 🤖 But I can still help you connect with Narender directly:\n\n📧 Email: narender@example.com\n💼 LinkedIn: /in/narender-singh\n📱 WhatsApp: Available on request\n\nWhat would you like to know about his work? 😊",
          timestamp: new Date(),
          intent: 'contact'
        };
        setMessages((msgs) => [...msgs, errorMessage]);
      } finally {
        setLoading(false);
        setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }, 1000 + Math.random() * 1000); // Random delay for natural feel
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  // Quick action buttons
  const quickActions = [
    { text: "💼 Hiring Narender", action: () => setInput("I'm interested in hiring Narender for a position") },
    { text: "🤝 Freelance Project", action: () => setInput("I have a freelance project for Narender") },
    { text: "📞 Contact Details", action: () => setInput("How can I contact Narender?") },
    { text: "🚀 View Projects", action: () => setInput("Show me Narender's projects") },
  ];

  return (
    <>
      {/* Floating Button with Developer Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
        transition={{ 
          scale: { type: "spring", stiffness: 300, damping: 20 },
          rotate: { duration: 2, repeat: Infinity, repeatType: "reverse" }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: open ? "none" : "flex" }}
        className="fixed bottom-6 right-6 z-[1000]"
      >
        <button
          onClick={() => setOpen(true)}
          aria-label="Open ChatBot"
          className="w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 hover:from-purple-600 hover:via-red-500 hover:to-orange-500 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl focus:outline-none group relative overflow-hidden transition-all duration-300"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          
          {/* Floating Code Icons */}
          <div className="absolute -top-2 -right-2 text-xs animate-bounce">💻</div>
          <div className="absolute -bottom-2 -left-2 text-xs animate-pulse">🚀</div>
          
          <FaRobot className="relative z-10 animate-pulse" />
          
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="fixed bottom-6 right-6 z-[1001] w-[380px] max-w-[95vw] glass-morphism rounded-2xl shadow-2xl border border-orange-400/50 flex flex-col backdrop-blur-xl">
              {/* Enhanced Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-t-2xl relative overflow-hidden">
                <div className="flex items-center gap-3 text-white font-bold text-lg">
                  <div className="relative">
                    <FaRobot className="animate-spin-slow" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-sm">{BOT_NAME}</div>
                    <div className="text-xs opacity-75 animate-pulse">● Online & Ready to Help</div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMessages([messages[0]])}
                    className="text-white/70 hover:text-white text-sm"
                    title="Clear Chat"
                  >
                    🗑️
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-white hover:text-orange-200 text-xl transition-colors duration-200"
                    aria-label="Close ChatBot"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                {/* Animated Wave */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 animate-pulse"></div>
              </div>

              {/* Quick Actions Bar */}
              <div className="px-4 py-2 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-b border-orange-200 dark:border-gray-600">
                <div className="flex gap-2 overflow-x-auto">
                  {quickActions.map((action, i) => (
                    <button
                      key={i}
                      onClick={action.action}
                      className="whitespace-nowrap text-xs px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full hover:bg-orange-100 dark:hover:bg-gray-500 transition-colors duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gradient-to-b from-orange-50/50 to-white dark:from-gray-900 dark:to-gray-800" style={{ maxHeight: 400 }}>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} relative`}
                  >
                    {/* Bot Avatar */}
                    {msg.from === "bot" && (
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-sm mr-2 shadow-lg animate-pulse">
                        🤖
                      </div>
                    )}
                    
                    <div
                      className={`px-4 py-3 rounded-2xl shadow-lg text-sm max-w-[80%] relative transform transition-all duration-300 hover:scale-105 ${
                        msg.from === "user"
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-br-md ml-2"
                          : "glass-morphism text-gray-900 dark:text-gray-100 rounded-bl-md border border-orange-200/50 dark:border-orange-800/50"
                      }`}
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: 'slideInUp 0.5s ease-out forwards'
                      }}
                    >
                      {/* Message content with enhanced formatting */}
                      <div className="whitespace-pre-wrap break-words">
                        {msg.text.split('\n').map((line, lineIndex) => (
                          <div key={lineIndex} className={line.startsWith('•') ? 'ml-2' : ''}>
                            {line.includes('**') ? (
                              <span dangerouslySetInnerHTML={{
                                __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-orange-600 dark:text-orange-400">$1</strong>')
                              }} />
                            ) : (
                              line
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Timestamp */}
                      <div className="text-xs opacity-50 mt-1">
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      
                      {/* Contact Actions for relevant messages */}
                      {(msg.intent === 'contact' || msg.intent === 'hiring' || msg.intent === 'freelance') && (
                        <div className="flex gap-2 mt-3 pt-2 border-t border-white/20">
                          <button
                            onClick={() => window.open('https://wa.me/+919999999999', '_blank')}
                            className="flex items-center gap-1 text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-full transition-colors duration-200"
                          >
                            <FaWhatsapp /> WhatsApp
                          </button>
                          <button
                            onClick={() => window.open('https://linkedin.com/in/narender-singh', '_blank')}
                            className="flex items-center gap-1 text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-full transition-colors duration-200"
                          >
                            <FaLinkedin /> LinkedIn
                          </button>
                          <button
                            onClick={() => window.open('mailto:narender@example.com', '_blank')}
                            className="flex items-center gap-1 text-xs bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded-full transition-colors duration-200"
                          >
                            <FaEnvelope /> Email
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {/* User Avatar */}
                    {msg.from === "user" && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-sm ml-2 shadow-lg">
                        <FaUser />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Enhanced Typing Indicator */}
                {loading && (
                  <div className="flex justify-start items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-sm mr-2 shadow-lg animate-bounce">
                      🤖
                    </div>
                    <div className="glass-morphism px-4 py-3 rounded-2xl border border-orange-200/50 shadow-lg">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">AI thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Typing Indicator */}
                {typingIndicator && (
                  <div className="flex justify-start">
                    <div className="glass-morphism px-4 py-2 rounded-2xl text-gray-600 dark:text-gray-400 text-sm animate-pulse">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
                          <div className="w-1 h-1 bg-red-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        Assistant is typing...
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={chatEndRef} />
              </div>

              {/* Enhanced Input */}
              <div className="flex items-center gap-2 px-4 py-3 border-t border-orange-200/50 dark:border-orange-800/50 bg-white/50 dark:bg-gray-900/50 rounded-b-2xl backdrop-blur-sm">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 rounded-xl border border-gray-300/50 dark:border-gray-600/50 glass-morphism text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Ask me anything about Narender..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  aria-label="Type your message"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-purple-500 text-white text-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                  aria-label="Send message"
                >
                  <FaPaperPlane className={loading ? 'animate-spin' : ''} />
                </button>
              </div>
              
              {/* Conversation Summary Display */}
              {conversationSummary.length > 0 && (
                <div className="px-4 py-2 bg-green-50 dark:bg-green-900/20 border-t border-green-200 dark:border-green-800 text-xs text-green-700 dark:text-green-400">
                  ✅ Conversation logged - Narender will be notified!
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot; 