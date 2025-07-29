"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  FaRobot, 
  FaPaperPlane, 
  FaTimes, 
  FaWhatsapp, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaHandshake
} from "react-icons/fa";

const BOT_NAME = "Narender's AI Assistant";

// Real contact information
const CONTACT_INFO = {
  whatsapp: {
    number: "+91-8595962615",
    url: "https://wa.me/918595962615",
    icon: <FaWhatsapp />
  },
  email: {
    address: "narendersingh2028@gmail.com",
    url: "mailto:narendersingh2028@gmail.com",
    icon: <FaEnvelope />
  },
  linkedin: {
    profile: "https://www.linkedin.com/in/narender-singh-b93496195/",
    url: "https://www.linkedin.com/in/narender-singh-b93496195/",
    icon: <FaLinkedin />
  },
  github: {
    profile: "https://github.com/narendersingh2428",
    url: "https://github.com/narendersingh2428",
    icon: <FaGithub />
  }
};

interface Message {
  text: string;
  from: 'user' | 'bot';
  timestamp: Date;
}

const SMART_RESPONSES = {
  english: {
    greetings: [
      "Hello! I'm Narender's AI assistant. How can I help you today?",
      "Hi there! I'm here to help you learn more about Narender Singh. What would you like to know?",
      "Welcome! I'm Narender's personal assistant. Feel free to ask me anything about his work or skills."
    ],
    about: [
      "Narender Singh is a passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies. He loves creating innovative solutions and has experience in both frontend and backend development.",
      "He's a dedicated developer who specializes in creating responsive web applications using React, Next.js, and various other technologies. Narender is always eager to learn new technologies and solve complex problems."
    ],
    skills: [
      "Narender's technical skills include:\n• Frontend: React, Next.js, JavaScript, TypeScript, HTML5, CSS3\n• Backend: Node.js, Express.js, MongoDB, MySQL\n• Tools: Git, VS Code, Postman, Figma\n• Other: Responsive Design, RESTful APIs, UI/UX Design",
      "His expertise covers a wide range of technologies including modern JavaScript frameworks, database management, and full-stack development. He's particularly strong in React ecosystem and backend API development."
    ],
    experience: [
      "Narender has worked on various projects ranging from e-commerce platforms to portfolio websites. He has experience in both individual and team-based development projects.",
      "His professional journey includes working with modern web technologies, creating responsive applications, and implementing efficient backend solutions. He's always focused on writing clean, maintainable code."
    ],
    projects: [
      "Some of Narender's notable projects include:\n• Portfolio websites with modern UI/UX\n• E-commerce applications with payment integration\n• Blog platforms with content management\n• Real-time chat applications\n\nEach project showcases his ability to work with different technologies and solve real-world problems."
    ],
    contact: [
      `You can reach Narender Singh through:\n• WhatsApp: ${CONTACT_INFO.whatsapp.number}\n• Email: ${CONTACT_INFO.email.address}\n• LinkedIn: Professional networking\n• GitHub: View his code repositories`,
      "Narender is always open to discussing new opportunities, collaboration, or just having a technical conversation. Feel free to reach out through any of the provided contact methods!"
    ],
    hire: [
      "Narender is available for freelance projects and full-time opportunities! He brings:\n• Strong technical skills in modern web development\n• Problem-solving mindset\n• Commitment to quality code\n• Excellent communication skills\n\nFeel free to contact him to discuss your project requirements!",
      "Looking to hire a skilled developer? Narender would love to hear about your project! He specializes in creating efficient, scalable web applications and is always excited about new challenges."
    ]
  },
  hindi: {
    greetings: [
      "नमस्ते! मैं नरेंद्र का AI असिस्टेंट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
      "हैलो! मैं यहां नरेंद्र सिंह के बारे में जानकारी देने के लिए हूं। आप क्या जानना चाहते हैं?",
      "स्वागत है! मैं नरेंद्र का व्यक्तिगत असिस्टेंट हूं। उनके काम के बारे में बेझिझक पूछें।"
    ],
    about: [
      "नरेंद्र सिंह एक passionate Full Stack Developer हैं जो React, Node.js और modern web technologies में expertise रखते हैं। वे innovative solutions बनाना पसंद करते हैं।",
      "वे एक dedicated developer हैं जो React, Next.js और अन्य technologies का उपयोग करके responsive web applications बनाने में specialize करते हैं।"
    ],
    contact: [
      `आप नरेंद्र सिंह से संपर्क कर सकते हैं:\n• WhatsApp: ${CONTACT_INFO.whatsapp.number}\n• Email: ${CONTACT_INFO.email.address}\n• LinkedIn: Professional networking के लिए\n• GitHub: Code repositories देखने के लिए`,
      "नरेंद्र हमेशा नए opportunities, collaboration या technical बातचीत के लिए available हैं। किसी भी contact method से बेझिझक संपर्क करें!"
    ]
  },
  hinglish: {
    greetings: [
      "Hey! Main Narender ka AI assistant hun. Aaj main aapki kaise help kar sakta hun?",
      "Hi there! Main yahan Narender Singh ke baare mein jaankari dene ke liye hun. Aap kya jaanna chahte hain?",
      "Welcome! Main Narender ka personal assistant hun. Unke work ke baare mein freely pooch sakte hain."
    ],
    about: [
      "Narender Singh ek passionate Full Stack Developer hain jo React, Node.js aur modern web technologies mein expertise rakhte hain. Unhe innovative solutions banana pasand hai.",
      "Ye ek dedicated developer hain jo React, Next.js aur other technologies ka use karke responsive web applications banane mein specialize karte hain."
    ],
    contact: [
      `Aap Narender Singh se contact kar sakte hain:\n• WhatsApp: ${CONTACT_INFO.whatsapp.number}\n• Email: ${CONTACT_INFO.email.address}\n• LinkedIn: Professional networking ke liye\n• GitHub: Code repositories dekhne ke liye`,
      "Narender hamesha new opportunities, collaboration ya technical discussion ke liye available hain. Kisi bhi contact method se freely contact kariye!"
    ]
  }
};

const QUICK_ACTIONS = [
  { action: "about", label: "About", icon: <FaUser /> },
  { action: "skills", label: "Skills", icon: <FaCode /> },
  { action: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { action: "contact", label: "Contact", icon: <FaHandshake /> },
];

const detectLanguage = (text: string): 'english' | 'hindi' | 'hinglish' => {
  const hindiWords = ['क्या', 'कैसे', 'कौन', 'कहाँ', 'कब', 'नमस्ते', 'धन्यवाद', 'जी', 'हाँ', 'नहीं'];
  const hinglishWords = ['kya', 'kaise', 'kaun', 'kahan', 'kab', 'hai', 'hun', 'aap', 'main', 'narender'];
  
  const lowerText = text.toLowerCase();
  
  const hindiMatches = hindiWords.some(word => lowerText.includes(word));
  const hinglishMatches = hinglishWords.some(word => lowerText.includes(word));
  
  if (hindiMatches) return 'hindi';
  if (hinglishMatches) return 'hinglish';
  return 'english';
};

const getSmartResponse = (userMessage: string, language: 'english' | 'hindi' | 'hinglish'): string => {
  const lowerMessage = userMessage.toLowerCase();
  const responses = SMART_RESPONSES[language];
  
  // Greeting patterns
  if (lowerMessage.match(/(hi|hello|hey|namaste|नमस्ते|helo)/)) {
    return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
  }
  
  // About patterns
  if (lowerMessage.match(/(about|बारे|narender|नरेंद्र|who|कौन)/)) {
    return responses.about[Math.floor(Math.random() * responses.about.length)];
  }
  
  // Skills patterns
  if (lowerMessage.match(/(skill|react|javascript|technology|तकनीक|programming)/)) {
    return responses.skills?.[Math.floor(Math.random() * responses.skills.length)] || responses.about[0];
  }
  
  // Experience patterns
  if (lowerMessage.match(/(experience|work|job|काम|अनुभव|project)/)) {
    return responses.experience?.[Math.floor(Math.random() * responses.experience.length)] || responses.about[0];
  }
  
  // Projects patterns
  if (lowerMessage.match(/(project|portfolio|work|github|code)/)) {
    return responses.projects?.[Math.floor(Math.random() * responses.projects.length)] || responses.about[0];
  }
  
  // Contact patterns
  if (lowerMessage.match(/(contact|phone|email|whatsapp|linkedin|संपर्क|फोन)/)) {
    return responses.contact[Math.floor(Math.random() * responses.contact.length)];
  }
  
  // Hire patterns
  if (lowerMessage.match(/(hire|freelance|job|opportunity|work|काम|नौकरी)/)) {
    return responses.hire?.[Math.floor(Math.random() * responses.hire.length)] || responses.contact[0];
  }
  
  // Default response
  return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm Narender's AI assistant. How can I help you today?",
      from: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      text: inputMessage,
      from: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const language = detectLanguage(inputMessage);
      const botResponse = getSmartResponse(inputMessage, language);
      
      const botMessage: Message = {
        text: botResponse,
        from: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (action: string) => {
    const actionMessages = {
      about: "Tell me about Narender Singh",
      skills: "What are Narender's technical skills?",
      projects: "Show me Narender's projects",
      contact: "How can I contact Narender?"
    };

    const message = actionMessages[action as keyof typeof actionMessages] || "Hello";
    setInputMessage(message);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} className="md:w-6 md:h-6" /> : <FaRobot size={20} className="md:w-6 md:h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 w-80 h-96 md:w-80 md:h-96 sm:w-72 sm:h-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden max-w-[calc(100vw-2rem)] animate-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot size={16} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{BOT_NAME}</h3>
                <p className="text-xs opacity-80">AI Assistant</p>
              </div>
            </div>
            <button
              className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={14} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50 dark:bg-gray-800">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.from === "user" ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl shadow-sm ${
                    message.from === "user"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                  }`}
                >
                  <p className="text-xs leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-xs mt-1 opacity-70 ${
                    message.from === "user" ? "text-white/70" : "text-gray-500 dark:text-gray-400"
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-3 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-4 gap-2 mb-3">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.action}
                  className="p-2 text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200 hover:scale-105 flex flex-col items-center gap-1"
                  onClick={() => handleQuickAction(action.action)}
                >
                  <span className="text-sm">{action.icon}</span>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input Section */}
          <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
