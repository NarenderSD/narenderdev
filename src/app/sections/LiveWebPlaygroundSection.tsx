"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCopy, FaTrash, FaRobot } from "react-icons/fa";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";

type Language = "html" | "css" | "js" | "react";

const initialCode = {
  html: `<!-- Write your HTML here -->\n<div id="root"></div>`,
  css: `/* Write your CSS here */\nbody { \n  background-color: #f0f2f5;\n  color: #1a202c;\n  font-family: sans-serif; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}`,
  js: `// Write your JavaScript here\nconst root = document.getElementById('root');\nroot.innerHTML = '<h1>Hello, World!</h1>';`,
  react: `// Write your React (JSX) code here\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction App() {\n  return <h1>Hello from React!</h1>;\n}\n\nReactDOM.render(<App />, document.getElementById('root'));`,
};

const LiveWebPlaygroundSection = () => {
  const [html, setHtml] = useState(initialCode.html);
  const [css, setCss] = useState(initialCode.css);
  const [js, setJs] = useState(initialCode.js);
  const [react, setReact] = useState(initialCode.react);
  const [activeTab, setActiveTab] = useState<Language>("html");
  const [output, setOutput] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isReactMode = activeTab === 'react';

  const codeMap = { html, css, js, react };
  const setCodeMap = { html: setHtml, css: setCss, js: setJs, react: setReact };

  useEffect(() => {
    const timeout = setTimeout(() => {
      let finalHtml;
      if (isReactMode) {
        // React Mode: Only use React code
        finalHtml = `
          <html>
            <head>
              <style>${initialCode.css}</style> <!-- Basic styles for React mode -->
              <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
              <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
              <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            </head>
            <body>
              <div id="root"></div>
              <script type="text/babel">
                try {
                  ${react}
                } catch(e) {
                  document.getElementById('root').innerHTML = '<pre style="color:red;">' + e + '</pre>';
                }
              </script>
            </body>
          </html>
        `;
      } else {
        // Standard Mode: Combine HTML, CSS, JS
        finalHtml = `
          <html>
            <head>
              <style>${css}</style>
            </head>
            <body>
              ${html}
              <script type="module">
                try {
                  ${js}
                } catch(e) {
                  document.body.innerHTML = '<pre style="color:red;">' + e + '</pre>';
                }
              </script>
            </body>
          </html>
        `;
      }
      setOutput(finalHtml);
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js, react, isReactMode]);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(codeMap[activeTab]);
  };
  
  const handleClear = () => {
    if (isReactMode) {
      setReact(initialCode.react);
    } else {
      setHtml(initialCode.html);
      setCss(initialCode.css);
      setJs(initialCode.js);
    }
  };
  
  const handleGenerate = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (isReactMode) {
        setReact(`function App() { return <div style={{padding: '2rem', background: '#333', borderRadius: '1rem', color: 'white'}}>AI Generated React Card</div>; }\nReactDOM.render(<App />, document.getElementById('root'));`);
      } else {
        setHtml(`<h1>AI Generated Card</h1>\n<div class="card">A beautiful card!</div>`);
        setCss(`body { display:flex; flex-direction: column; justify-content:center; align-items:center; height:100vh; gap: 1rem; }\n.card { background: #333; color: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 0 20px #f59e42; }`);
        setJs(`console.log("AI Generated!");`);
      }
      setIsGenerating(false);
    }, 1500);
  };
  
  const tabs: { lang: Language; icon: JSX.Element; tooltip: string }[] = [
    { lang: 'html', icon: <FaHtml5 />, tooltip: 'HTML' },
    { lang: 'css', icon: <FaCss3Alt />, tooltip: 'CSS' },
    { lang: 'js', icon: <FaJs />, tooltip: 'JavaScript' },
    { lang: 'react', icon: <FaReact />, tooltip: 'React (JSX) - Isolated Environment' },
  ];

  return (
    <section id="live-web-playground" className="w-full py-24 px-4 bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Live Web Playground (AI-Powered)</h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto">
            Write HTML, CSS, & JS together for a live preview, or switch to the isolated React environment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
        >
          {/* AI Prompt Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Describe what you want to build (e.g., A login form)"
              className="w-full bg-gray-900/50 text-white p-4 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <motion.button
              onClick={handleGenerate}
              disabled={isGenerating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isGenerating ? "Generating..." : <><FaRobot /> Generate with AI</>}
            </motion.button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 bg-gray-900/60 p-2 rounded-xl border border-gray-700">
                  {tabs.map(({lang, icon, tooltip}) => (
                    <button
                      key={lang}
                      onClick={() => setActiveTab(lang)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all relative group ${activeTab === lang ? 'bg-orange-500 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
                      type="button"
                    >
                      {icon}
                      <span className="hidden md:inline">{lang.toUpperCase()}</span>
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2.2rem] bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">{tooltip}</span>
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300" title="Copy Code"><FaCopy/></button>
                  <button onClick={handleClear} className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300" title="Clear All Code"><FaTrash/></button>
                </div>
              </div>
              
              <Editor
                value={codeMap[activeTab]}
                onValueChange={code => setCodeMap[activeTab](code)}
                highlight={code => highlight(code, languages[isReactMode ? 'jsx' : activeTab], isReactMode ? 'jsx' : activeTab)}
                padding={16}
                className="bg-gray-900 font-mono text-sm rounded-2xl border border-gray-700 h-[400px] overflow-auto"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Live Output</h3>
              <iframe
                ref={iframeRef}
                srcDoc={output}
                title="Live Output"
                sandbox="allow-scripts"
                className="w-full h-full min-h-[450px] bg-white rounded-2xl border-4 border-gray-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveWebPlaygroundSection; 