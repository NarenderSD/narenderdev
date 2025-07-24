"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaRobot, FaLightbulb, FaCode, FaArrowRight, FaCopy, FaTrash } from "react-icons/fa";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";

const initialCode = {
  javascript: `// Write your JavaScript code here\nfunction greet(name) {\n  return 'Hello, ' + name + '!';\n}\n\nconsole.log(greet('World'));`,
  python: `# Write your Python code here\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))`,
  cpp: `// Write your C++ code here\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
  java: `// Write your Java code here\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`
};

const languageOptions = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
];

const runCode = (lang, code) => {
  if (lang === "javascript") {
    try {
       
      // Only for demo! Never use eval in production!
       
      const result = Function(`"use strict";${code}`)();
      return String(result ?? "(No output, check console.log)");
    } catch (e) {
      return String(e);
    }
  }
  // For other languages, simulate output
  if (lang === "python") return "Hello, World! (Python output simulated)";
  if (lang === "cpp") return "Hello, World! (C++ output simulated)";
  if (lang === "java") return "Hello, World! (Java output simulated)";
  return "Output not available.";
};

const AI_CODE_FEEDBACK = {
  javascript: "// AI Feedback Example\n- Use 'const' and 'let' instead of 'var'\n- Prefer arrow functions for callbacks\n- Use template literals for string interpolation",
  python: `# AI Feedback Example\n- Use f-strings for formatting\n- Follow PEP8 for indentation\n- Use list comprehensions where possible`,
  cpp: `// AI Feedback Example\n- Use std::cout for output\n- Remember to return 0 in main\n- Use modern C++ features (auto, range-based for)`,
  java: `// AI Feedback Example\n- Use System.out.println for output\n- Class names should be PascalCase\n- Use proper access modifiers`
};

const AI_CODE_EXPLANATION = {
  javascript: "This JavaScript code defines a function 'greet' that returns a greeting string. It then logs the result to the console.",
  python: "This Python code defines a function 'greet' that returns a greeting string and prints it.",
  cpp: `This C++ code prints \"Hello, World!\" to the console using std::cout.`,
  java: `This Java code prints \"Hello, World!\" to the console using System.out.println.`
};

const AICodeLabSection = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(initialCode[language]);
  const [output, setOutput] = useState("");
  const [aiFeedback, setAIFeedback] = useState("");
  const [aiExplanation, setAIExplanation] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setCode(initialCode[e.target.value]);
    setOutput("");
    setAIFeedback("");
    setAIExplanation("");
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput(runCode(language, code));
      setAIFeedback(AI_CODE_FEEDBACK[language]);
      setAIExplanation(AI_CODE_EXPLANATION[language]);
      setIsRunning(false);
    }, 800);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (language === "javascript") setCode("function sum(a, b) { return a + b; }\nconsole.log(sum(2, 3));");
      if (language === "python") setCode("def sum(a, b):\n    return a + b\n\nprint(sum(2, 3))");
      if (language === "cpp") setCode("#include <iostream>\nusing namespace std;\n\nint sum(int a, int b) { return a + b; }\n\nint main() {\n    cout << sum(2, 3) << endl;\n    return 0;\n}");
      if (language === "java") setCode("public class Main {\n  public static void main(String[] args) {\n    System.out.println(sum(2, 3));\n  }\n  static int sum(int a, int b) { return a + b; }\n}");
      setIsGenerating(false);
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleClear = () => {
    setCode(initialCode[language]);
    setOutput("");
    setAIFeedback("");
    setAIExplanation("");
  };

  return (
    <section id="ai-code-lab" className="w-full py-24 px-4 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-2xl">
            <FaRobot className="text-xl" />
            AI Code Lab
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Live Coding Playground
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Select your language, write your code, run it, and get instant output and AI-powered feedback!
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
              placeholder="Describe what you want to build (e.g., sum function in Python)"
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
          <div className="flex flex-col md:flex-row gap-8">
            {/* Code Editor Panel */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center">
                  <FaCode className="text-orange-400 text-2xl" />
                  <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold"
                  >
                    {languageOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2">
                  <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors" title="Copy Code"><FaCopy/></button>
                  <button onClick={handleClear} className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors" title="Clear Code"><FaTrash/></button>
                </div>
              </div>
              <Editor
                value={code}
                onValueChange={setCode}
                highlight={code => highlight(code, languages[language === 'cpp' ? 'clike' : language], language === 'cpp' ? 'clike' : language)}
                padding={16}
                className="bg-gray-900 font-mono text-sm rounded-2xl border border-gray-700 h-full min-h-[300px] max-h-[400px] overflow-auto"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRun}
                disabled={isRunning}
                className="mt-6 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Running...
                  </>
                ) : (
                  <>
                    <FaPlay />
                    Run
                  </>
                )}
              </motion.button>
              <div className="mt-6">
                <h4 className="text-lg font-bold text-white mb-2">Output</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded-xl border border-gray-700 min-h-[60px] font-mono text-sm">
                  {output || <span className="text-gray-500">Output will appear here.</span>}
                </div>
              </div>
            </div>
            {/* AI Feedback Panel */}
            <div className="flex-1 flex flex-col">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4"><FaLightbulb className="text-yellow-400" /> AI Feedback & Explanation</h3>
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 flex-1 flex flex-col gap-6">
                <div>
                  <h5 className="text-lg font-semibold text-blue-200 mb-2">AI Feedback</h5>
                  <pre className="bg-gray-800 p-3 rounded-lg text-gray-200 text-sm overflow-x-auto whitespace-pre-wrap">{aiFeedback || "Run your code to get AI feedback."}</pre>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-blue-200 mb-2">AI Explanation</h5>
                  <pre className="bg-gray-800 p-3 rounded-lg text-gray-200 text-sm overflow-x-auto whitespace-pre-wrap">{aiExplanation || "Run your code to get an explanation."}</pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AICodeLabSection; 