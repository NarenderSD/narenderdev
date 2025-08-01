"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

const BOT_NAME = "Narender's AI Assistant";

interface ChatMessage {
  from: "user" | "bot";
  text: string;
  timestamp: Date;
  intent?: string;
}

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
    "🎯 **Looking to hire Narender?** Excellent choice!\n\nHe's available for:\n• Full-time positions\n• Freelance projects\n• Consulting work\n• Technical mentoring\n\n📞 **Ready to connect?** Here are his REAL contact details:\n• 📱 **Phone/WhatsApp**: +91 8595962615\n• 💼 **LinkedIn**: https://www.linkedin.com/in/narendersingh1\n• 🌐 **GitHub**: https://github.com/NarenderSD\n\nShall I help you connect? 🤝",
    "Smart move! 💼 Narender brings 3+ years of experience, proven project delivery, and modern tech expertise. He's the developer you need!"
  ],
  freelance: [
    "🚀 **Need a freelance developer?** You've found the right person!\n\nNarender offers:\n• Custom web applications\n• Full-stack development\n• UI/UX design\n• Performance optimization\n• Technical consulting\n\n💰 **Competitive rates** | ⚡ **Fast delivery** | 🏆 **Quality guaranteed**\n\n📱 **Contact him now**: +91 8595962615\n📧 **WhatsApp**: Quick response guaranteed!\n\nReady to start your project? 📞",
    "Perfect choice! 🌟 Narender has successfully delivered numerous freelance projects with excellent client satisfaction. His expertise spans from simple websites to complex applications!"
  ],
  contact: [
    "📞 **Here are Narender's REAL contact details:**\n\n**✅ Immediate Contact:**\n• 📱 **Phone/WhatsApp**: +91 8595962615\n• 💼 **LinkedIn**: https://www.linkedin.com/in/narendersingh1\n• 🌐 **GitHub**: https://github.com/NarenderSD\n• 📧 **Email**: Available via contact form on this website\n\n⚡ **Response Time:**\n• WhatsApp: Usually within 1-2 hours\n• LinkedIn: Same day response\n• Email: Within 24 hours\n\nI'll let him know you're interested! What's your preferred way to connect? 🤝",
    "I'd be happy to facilitate the connection! 🔗 Narender is very responsive and professional. He prefers WhatsApp for quick chats or LinkedIn for professional discussions!"
  ],
  general: [
    "That's an interesting question! 🤔 As Narender's AI assistant, I can help you with:\n\n• 💼 **Career opportunities** - Job discussions\n• 🤝 **Projects** - Freelance collaborations\n• 📞 **Contact** - Real connection details\n• 🔧 **Skills** - Technical expertise\n• 🎯 **Portfolio** - Project examples\n\nWhat specific aspect interests you most? 😊",
    "Great question! 🚀 I'm here to provide comprehensive information about Narender's professional journey. Whether you're looking for technical expertise, project collaboration, or networking opportunities, I've got you covered!",
    "I love helping people discover Narender's work! 💫 He's passionate about creating exceptional digital experiences and is always excited about new opportunities. What would you like to know more about?"
  ]
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      from: "bot", 
      text: `🚀 Hi! I'm ${BOT_NAME}, powered by advanced AI. I know everything about Narender's skills, projects, and experience. I can help you:\n\n• 💼 Connect for job opportunities\n• 🤝 Arrange freelance collaborations\n• 📞 Get real contact details\n• 🔧 Learn about his technical skills\n• 🎯 See his project portfolio\n\nWhat brings you here today?`,
      timestamp: new Date(),
      intent: "greeting"
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingIndicator, setTypingIndicator] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedChats = localStorage.getItem('narender_chatbot_history');
    if (savedChats) {
      try {
        const parsed = JSON.parse(savedChats);
        if (parsed.length > 1) {
          // Convert timestamp strings back to Date objects
          const messagesWithDates = parsed.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }));
          setMessages(messagesWithDates);
        }
      } catch (error) {
        console.error('Error loading chat history:', error);
        // Clear corrupted data
        localStorage.removeItem('narender_chatbot_history');
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('narender_chatbot_history', JSON.stringify(messages));
    }
  }, [messages]);

  const detectIntent = (message: string): string => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hire') || lowerMsg.includes('job') || lowerMsg.includes('position') || lowerMsg.includes('opportunity') || lowerMsg.includes('career')) {
      return 'hiring';
    } else if (lowerMsg.includes('freelance') || lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('client') || lowerMsg.includes('collaboration')) {
      return 'freelance';
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone') || lowerMsg.includes('whatsapp') || lowerMsg.includes('linkedin') || lowerMsg.includes('connect')) {
      return 'contact';
    } else if (lowerMsg.includes('skill') || lowerMsg.includes('technology') || lowerMsg.includes('tech') || lowerMsg.includes('experience') || lowerMsg.includes('expertise')) {
      return 'skills';
    } else if (lowerMsg.includes('portfolio') || lowerMsg.includes('demo') || lowerMsg.includes('example') || lowerMsg.includes('showcase') || lowerMsg.includes('website')) {
      return 'projects';
    } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey') || lowerMsg.includes('greet')) {
      return 'greeting';
    }
    return 'general';
  };

  const getIntelligentResponse = async (userMessage: string, intent: string): Promise<string> => {
    try {
      const responses = SMART_RESPONSES[intent as keyof typeof SMART_RESPONSES];
      if (responses && intent !== 'general') {
        return responses[Math.floor(Math.random() * responses.length)];
      }

      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are Narender Singh's professional AI assistant. Answer as his personal assistant who knows everything about him.

ABOUT NARENDER:
- Full Stack Developer with expertise in React.js, Next.js, Node.js, MongoDB, TypeScript
- Available for jobs, freelance projects, and consulting
- Real Contact: +91 8595962615, LinkedIn: linkedin.com/in/narendersingh1, GitHub: github.com/NarenderSD
- Projects: Blog platform, Social media app, Healthcare website

PERSONALITY: Professional, helpful, enthusiastic about connecting people with Narender

User asks: "${userMessage}"

Respond professionally as his assistant (keep it concise and helpful):`,
          mode: 'generate'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.text && data.text.trim()) {
          return data.text;
        }
      }
      
      const fallbackResponses = SMART_RESPONSES.general;
      return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      
    } catch (error) {
      console.error('AI Response error:', error);
      const fallbackResponses = SMART_RESPONSES[intent as keyof typeof SMART_RESPONSES] || SMART_RESPONSES.general;
      return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }
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
    
    setTimeout(async () => {
      setTypingIndicator(false);
      setLoading(true);
      
      try {
        const intelligentResponse = await getIntelligentResponse(userMsg, intent);
        
        const botMessage: ChatMessage = {
          from: "bot",
          text: intelligentResponse,
          timestamp: new Date(),
          intent
        };
        
        setMessages((msgs) => [...msgs, botMessage]);
        
      } catch (error) {
        console.error('Response generation error:', error);
        
        const fallbackMessage: ChatMessage = {
          from: "bot",
          text: "I'm here to help you learn about Narender! 😊 Feel free to ask about his skills, projects, or how to connect with him. You can also use the quick action buttons below!",
          timestamp: new Date(),
          intent: 'general'
        };
        
        setMessages((msgs) => [...msgs, fallbackMessage]);
      } finally {
        setLoading(false);
        setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }, 800 + Math.random() * 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  const quickActions = [
    { 
      text: "💼 Job Opportunity", 
      action: () => setInput("I would like to discuss a job opportunity with Narender") 
    },
    { 
      text: "🤝 Project Work", 
      action: () => setInput("I have a project requirement for Narender") 
    },
    { 
      text: "📞 Get Contact", 
      action: () => {
        setMessages(msgs => [...msgs, {
          from: "bot",
          text: "📞 **Here are Narender's real contact details:**\n\n📱 **Phone**: +91 8595962615\n💼 **LinkedIn**: https://www.linkedin.com/in/narendersingh1\n📱 **WhatsApp**: wa.me/918595962615\n📧 **Email**: Available via contact form\n🌐 **GitHub**: https://github.com/NarenderSD\n\nFeel free to reach out through any of these channels! 🤝",
          timestamp: new Date(),
          intent: 'contact'
        }]);
      }
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <div
        style={{ display: open ? "none" : "flex" }}
        className="fixed bottom-6 right-6 z-[1000]"
      >
        <button
          onClick={() => setOpen(true)}
          aria-label="Open ChatBot"
          className="w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 hover:from-purple-600 hover:via-red-500 hover:to-orange-500 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl focus:outline-none group relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          <div className="absolute -top-2 -right-2 text-xs animate-bounce">💻</div>
          <div className="absolute -bottom-2 -left-2 text-xs animate-pulse">🚀</div>
          <FaRobot className="relative z-10 animate-pulse" />
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ maxWidth: "calc(100vw - 2rem)", maxHeight: "calc(100vh - 2rem)" }}
          >
            <div className="fixed bottom-6 right-6 z-[1001] w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaRobot className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{BOT_NAME}</h3>
                    <p className="text-sm opacity-90">
                      {loading ? "Thinking..." : typingIndicator ? "Typing..." : "Online"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Close ChatBot"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-3 gap-2">
                  {quickActions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={action.action}
                      className="text-xs px-2 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors font-medium"
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
                {messages.map((message, idx) => (
                  <div
                    key={idx}
                    className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.from === "user"
                          ? "bg-blue-600 text-white rounded-br-md"
                          : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-md shadow-sm"
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.text}
                      </div>
                      <div className="text-xs opacity-70 mt-1">
                        {message.timestamp instanceof Date 
                          ? message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          : new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        }
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {typingIndicator && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-md shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about Narender..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    disabled={loading}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Send Message"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <FaPaperPlane className="text-sm" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
