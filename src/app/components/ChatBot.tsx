"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

const BOT_NAME = "Narender's AI Assistant";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: `Hi! 👋 I'm ${BOT_NAME}. Ask me anything about Narender, his work, or tech!` },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((msgs) => [...msgs, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/gemini/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMsg, mode: "generate" }),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: data.text || "Sorry, I couldn't understand that." },
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, there was an error. Please try again." },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-[1000] bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl p-4 flex items-center justify-center text-2xl focus:outline-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setOpen(true)}
        aria-label="Open ChatBot"
        style={{ display: open ? "none" : "flex" }}
      >
        <FaRobot className="animate-bounce" />
      </motion.button>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-6 right-6 z-[1001] w-[350px] max-w-[95vw] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-orange-400 flex flex-col"
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-orange-500 rounded-t-2xl">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <FaRobot /> {BOT_NAME}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-orange-200 text-xl"
                aria-label="Close ChatBot"
              >
                <FaTimes />
              </button>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-orange-50 dark:bg-gray-950" style={{ maxHeight: 400 }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`px-4 py-2 rounded-2xl shadow text-sm max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-orange-500 text-white rounded-br-md"
                        : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md border border-orange-200 dark:border-orange-900"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-orange-200 dark:border-orange-900 shadow text-sm animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-orange-200 dark:border-orange-900 bg-white dark:bg-gray-900 rounded-b-2xl">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                aria-label="Type your message"
              />
              <button
                onClick={sendMessage}
                className="p-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xl focus:outline-none disabled:opacity-50"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot; 