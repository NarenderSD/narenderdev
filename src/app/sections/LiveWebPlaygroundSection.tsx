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
  html: `<div class="interactive-demo">
  <h1>🚀 Interactive Playground</h1>
  <div class="demo-section">
    <h2>Click Counter</h2>
    <button id="counter-btn" onclick="incrementCounter()">Click Count: <span id="count">0</span></button>
  </div>
  
  <div class="demo-section">
    <h2>Color Changer</h2>
    <button onclick="changeColor()">Change Background</button>
  </div>
  
  <div class="demo-section">
    <h2>Text Input</h2>
    <input type="text" id="text-input" placeholder="Type something..." onkeyup="updateText()">
    <p id="live-text">Your text will appear here...</p>
  </div>
  
  <div class="demo-section">
    <h2>Animation Demo</h2>
    <div id="moving-box" onclick="animateBox()">Click me to move!</div>
  </div>
</div>`,
  css: `/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  padding: 20px;
  overflow-x: hidden;
}

/* Main Container */
.interactive-demo {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 25px;
  backdrop-filter: blur(15px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Title Styling */
.interactive-demo h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  background: linear-gradient(45deg, #FFD700, #FF6B6B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Demo Sections */
.demo-section {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.demo-section:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.demo-section h2 {
  color: #FFD700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Button Styles */
button {
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 8px 8px 8px 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  min-width: 120px;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

button:active {
  transform: translateY(-1px);
  transition: all 0.1s;
}

#counter-btn {
  background: linear-gradient(45deg, #4CAF50, #45a049);
  font-size: 18px;
  padding: 15px 25px;
}

/* Input Styles */
input[type="text"] {
  padding: 15px;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  width: 300px;
  max-width: 100%;
  margin: 10px 10px 10px 0;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

input[type="text"]:focus {
  outline: none;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 1);
}

/* Text Display */
#live-text {
  font-size: 1.3rem;
  font-weight: bold;
  color: #FFD700;
  margin-top: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 15px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 215, 0, 0.3);
  min-height: 60px;
  display: flex;
  align-items: center;
}

/* Animated Box */
#moving-box {
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.6s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  user-select: none;
  font-size: 14px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin: 20px 0;
}

#moving-box:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.animate {
  transform: translateX(200px) rotate(360deg) scale(1.3) !important;
  background: linear-gradient(45deg, #4ECDC4, #45B7D1) !important;
  border-radius: 50% !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  body {
    padding: 15px;
  }
  
  .interactive-demo {
    padding: 1.5rem;
  }
  
  .interactive-demo h1 {
    font-size: 2rem;
  }
  
  .demo-section {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  .demo-section h2 {
    font-size: 1.3rem;
  }
  
  button {
    padding: 10px 20px;
    font-size: 14px;
    margin: 5px 5px 5px 0;
    min-width: 100px;
  }
  
  #counter-btn {
    font-size: 16px;
    padding: 12px 20px;
  }
  
  input[type="text"] {
    width: 100%;
    margin: 10px 0;
  }
  
  #moving-box {
    width: 100px;
    height: 100px;
    font-size: 12px;
  }
  
  .animate {
    transform: translateX(150px) rotate(360deg) scale(1.2) !important;
  }
}

@media (max-width: 480px) {
  .interactive-demo {
    padding: 1rem;
  }
  
  .interactive-demo h1 {
    font-size: 1.8rem;
  }
  
  .demo-section {
    padding: 0.8rem;
  }
  
  .demo-section h2 {
    font-size: 1.2rem;
  }
  
  button {
    padding: 8px 16px;
    font-size: 13px;
  }
  
  #counter-btn {
    font-size: 15px;
    padding: 10px 18px;
  }
  
  #moving-box {
    width: 80px;
    height: 80px;
    font-size: 11px;
  }
  
  .animate {
    transform: translateX(100px) rotate(360deg) scale(1.1) !important;
  }
}`,
  js: `// Global variables
let counter = 0;
let colors = [
  '#667eea', '#764ba2', '#FF6B6B', '#4ECDC4', 
  '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD',
  '#FF9800', '#E91E63', '#9C27B0', '#00BCD4'
];
let colorIndex = 0;

// Counter functionality
function incrementCounter() {
  try {
    counter++;
    const countElement = document.getElementById('count');
    const btn = document.getElementById('counter-btn');
    
    if (countElement) {
      countElement.textContent = counter;
    }
    
    if (btn) {
      // Visual feedback
      btn.style.transform = 'scale(0.95)';
      btn.style.background = 'linear-gradient(45deg, #45a049, #4CAF50)';
      
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
        btn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
      }, 150);
    }
    
    console.log('Counter updated:', counter);
  } catch (error) {
    console.error('Counter error:', error);
  }
}

// Color changer functionality
function changeColor() {
  try {
    colorIndex = (colorIndex + 1) % colors.length;
    const newColor = colors[colorIndex];
    const nextColor = colors[(colorIndex + 1) % colors.length];
    
    document.body.style.background = \`linear-gradient(135deg, \${newColor} 0%, \${nextColor} 100%)\`;
    
    console.log('Background changed to:', newColor);
  } catch (error) {
    console.error('Color change error:', error);
  }
}

// Text update functionality
function updateText() {
  try {
    const input = document.getElementById('text-input');
    const output = document.getElementById('live-text');
    
    if (input && output) {
      const inputValue = input.value;
      
      if (inputValue.trim() === '') {
        output.textContent = 'Your text will appear here...';
        output.style.color = '#FFD700';
        output.style.background = 'rgba(255, 215, 0, 0.1)';
      } else {
        output.innerHTML = \`<span style="color: #4ECDC4;">You typed:</span> <strong>"\${inputValue}"</strong>\`;
        output.style.background = 'rgba(78, 205, 196, 0.1)';
      }
      
      console.log('Text updated:', inputValue);
    }
  } catch (error) {
    console.error('Text update error:', error);
  }
}

// Animation functionality
function animateBox() {
  try {
    const box = document.getElementById('moving-box');
    if (!box || box.classList.contains('animate')) return;
    
    box.classList.add('animate');
    box.textContent = '🚀 Moving!';
    
    setTimeout(() => {
      box.classList.remove('animate');
      box.textContent = 'Click me to move!';
    }, 1200);
    
    console.log('Box animation triggered!');
  } catch (error) {
    console.error('Animation error:', error);
  }
}

// Initialize the playground
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Interactive Playground loaded successfully!');
  console.log('✅ All functions ready!');
  
  // Add keyboard support for text input
  const textInput = document.getElementById('text-input');
  if (textInput) {
    textInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        this.style.background = 'rgba(78, 205, 196, 0.2)';
        setTimeout(() => {
          this.style.background = 'rgba(255, 255, 255, 0.95)';
        }, 300);
      }
    });
  }
});

console.log('🎉 Welcome to the Interactive Playground!');`,
  react: `function App() {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState('🚀 Welcome to React Interactive Playground!');
  const [color, setColor] = React.useState('#4CAF50');
  const [inputText, setInputText] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');
  
  const colors = ['#4CAF50', '#2196F3', '#FF9800', '#E91E63', '#9C27B0', '#00BCD4'];
  
  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    setMessage('🎉 Great! You clicked ' + newCount + ' time' + (newCount === 1 ? '' : 's') + '!');
    
    // Change color on every 5 clicks
    if (newCount % 5 === 0) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
      setMessage('🌈 Awesome! Color changed after ' + newCount + ' clicks!');
    }
  };
  
  const handleReset = () => {
    setCount(0);
    setColor('#4CAF50');
    setMessage('🔄 Everything reset! Ready to start again?');
    setInputText('');
    setTodoList([]);
    setNewTodo('');
  };
  
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };
  
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodoList([...todoList, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodoList(todoList.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, ' + color + ' 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      padding: '20px',
      transition: 'background 0.5s ease'
    }
  }, [
    React.createElement('div', {
      key: 'main',
      style: {
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '20px',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }
    }, [
      React.createElement('h1', {
        key: 'title', 
        style: {
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          textAlign: 'center'
        }
      }, '⚛️ React Interactive Playground'),
      
      React.createElement('p', {
        key: 'message', 
        style: {
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, message),
      
      // Counter Section
      React.createElement('div', {
        key: 'counter-section',
        style: {
          background: 'rgba(255,255,255,0.1)',
          padding: '1.5rem',
          borderRadius: '15px',
          marginBottom: '2rem',
          border: '1px solid rgba(255,255,255,0.2)'
        }
      }, [
        React.createElement('h3', {key: 'counter-title', style: {color: '#FFD700', marginBottom: '1rem'}}, '🔢 Counter Demo'),
        React.createElement('div', {
          key: 'counter-display',
          style: {
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#FFD700',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
          }
        }, count),
        
        React.createElement('div', {key: 'counter-buttons', style: {display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}, [
          React.createElement('button', {
            key: 'increment',
            onClick: handleIncrement,
            style: {
              background: 'linear-gradient(45deg, #4CAF50, #45a049)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }
          }, '⬆️ Increment'),
          
          React.createElement('button', {
            key: 'reset',
            onClick: handleReset,
            style: {
              background: 'linear-gradient(45deg, #f44336, #d32f2f)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }
          }, '🔄 Reset All')
        ])
      ]),
      
      // Text Input Section
      React.createElement('div', {
        key: 'text-section',
        style: {
          background: 'rgba(255,255,255,0.1)',
          padding: '1.5rem',
          borderRadius: '15px',
          marginBottom: '2rem',
          border: '1px solid rgba(255,255,255,0.2)'
        }
      }, [
        React.createElement('h3', {key: 'text-title', style: {color: '#FFD700', marginBottom: '1rem'}}, '📝 Live Text Demo'),
        React.createElement('input', {
          key: 'text-input',
          type: 'text',
          value: inputText,
          onChange: handleTextChange,
          placeholder: 'Type something here...',
          style: {
            padding: '12px',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            width: '100%',
            maxWidth: '300px',
            marginBottom: '1rem',
            background: 'rgba(255,255,255,0.9)',
            color: '#333'
          }
        }),
        React.createElement('p', {
          key: 'text-output',
          style: {
            fontSize: '1.2rem',
            color: inputText ? '#4ECDC4' : '#FFD700',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            minHeight: '30px'
          }
        }, inputText ? 'You typed: "' + inputText + '"' : 'Start typing to see live updates...')
      ]),
      
      // Todo List Section
      React.createElement('div', {
        key: 'todo-section',
        style: {
          background: 'rgba(255,255,255,0.1)',
          padding: '1.5rem',
          borderRadius: '15px',
          border: '1px solid rgba(255,255,255,0.2)'
        }
      }, [
        React.createElement('h3', {key: 'todo-title', style: {color: '#FFD700', marginBottom: '1rem'}}, '✅ Todo List Demo'),
        React.createElement('div', {key: 'todo-input', style: {display: 'flex', gap: '10px', marginBottom: '1rem', flexWrap: 'wrap'}}, [
          React.createElement('input', {
            key: 'new-todo',
            type: 'text',
            value: newTodo,
            onChange: (e) => setNewTodo(e.target.value),
            placeholder: 'Add a new task...',
            style: {
              padding: '10px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              flex: '1',
              minWidth: '200px',
              background: 'rgba(255,255,255,0.9)',
              color: '#333'
            },
            onKeyPress: (e) => e.key === 'Enter' && addTodo()
          }),
          React.createElement('button', {
            key: 'add-btn',
            onClick: addTodo,
            style: {
              background: 'linear-gradient(45deg, #2196F3, #1976D2)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }
          }, '➕ Add')
        ]),
        
        React.createElement('div', {key: 'todo-list', style: {maxHeight: '200px', overflowY: 'auto'}}, 
          todoList.length === 0 
            ? React.createElement('p', {style: {color: '#ccc', fontStyle: 'italic', textAlign: 'center'}}, 'No tasks yet. Add one above!')
            : todoList.map(todo => 
                React.createElement('div', {
                  key: todo.id,
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    marginBottom: '5px',
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    opacity: todo.completed ? 0.6 : 1
                  }
                }, [
                  React.createElement('input', {
                    key: 'checkbox',
                    type: 'checkbox',
                    checked: todo.completed,
                    onChange: () => toggleTodo(todo.id),
                    style: {cursor: 'pointer'}
                  }),
                  React.createElement('span', {
                    key: 'text',
                    style: {flex: '1', fontSize: '14px'}
                  }, todo.text),
                  React.createElement('button', {
                    key: 'delete',
                    onClick: () => deleteTodo(todo.id),
                    style: {
                      background: '#f44336',
                      color: 'white',
                      border: 'none',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }
                  }, '🗑️')
                ])
              )
        )
      ])
    ])
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));`,
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
        finalHtml = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>React Playground</title>
              <style>
                * { box-sizing: border-box; }
                body { 
                  margin: 0; 
                  padding: 0; 
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                  background-color: #f5f5f5;
                  overflow-x: hidden;
                }
                #root { 
                  min-height: 100vh;
                  width: 100%;
                }
                .error { 
                  background: #ffebee; 
                  border: 1px solid #ffcdd2; 
                  color: #c62828; 
                  padding: 20px; 
                  border-radius: 10px; 
                  font-family: 'Courier New', monospace; 
                  white-space: pre-wrap;
                  margin: 20px;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
                .loading {
                  display: flex; 
                  justify-content: center; 
                  align-items: center; 
                  height: 100vh; 
                  font-family: Arial, sans-serif; 
                  color: #666;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  color: white;
                }
              </style>
              <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
              <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
            </head>
            <body>
              <div id="root">
                <div class="loading">
                  <div style="text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem; animation: spin 2s linear infinite;">⚛️</div>
                    <div style="font-size: 1.2rem;">Loading React App...</div>
                  </div>
                </div>
              </div>
              <style>
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              </style>
              <script>
                try {
                  console.log('🚀 Starting React application...');
                  ${react}
                  console.log('✅ React application loaded successfully!');
                } catch(e) {
                  console.error('❌ React Error:', e);
                  const rootElement = document.getElementById('root');
                  if (rootElement) {
                    rootElement.innerHTML = '<div class="error">❌ React Error: ' + e.message + '\\n\\nPlease check your React code for syntax errors.\\n\\nStack trace: ' + (e.stack || 'No stack trace available') + '</div>';
                  }
                }
              </script>
            </body>
          </html>
        `;
      } else {
        finalHtml = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Web Playground</title>
              <style>
                /* Base Reset */
                * {
                  box-sizing: border-box;
                  margin: 0;
                  padding: 0;
                }
                
                /* Error Styles */
                .error { 
                  background: #ffebee; 
                  border: 1px solid #ffcdd2; 
                  color: #c62828; 
                  padding: 20px; 
                  border-radius: 10px; 
                  font-family: 'Courier New', monospace; 
                  white-space: pre-wrap;
                  margin: 20px;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                  max-width: 90%;
                  word-wrap: break-word;
                }
                
                /* User CSS */
                ${css}
              </style>
            </head>
            <body>
              ${html}
              <script>
                console.log('🚀 Loading JavaScript...');
                
                // Error handling wrapper
                window.onerror = function(msg, url, lineNo, columnNo, error) {
                  console.error('Script Error:', msg, 'Line:', lineNo);
                  const errorDiv = document.createElement('div');
                  errorDiv.className = 'error';
                  errorDiv.innerHTML = '❌ JavaScript Error: ' + msg + '\\nLine: ' + lineNo + (error ? '\\nDetails: ' + error.message : '');
                  document.body.insertBefore(errorDiv, document.body.firstChild);
                  return true;
                };
                
                // DOM Content Loaded
                document.addEventListener('DOMContentLoaded', function() {
                  console.log('✅ DOM loaded successfully!');
                  
                  try {
                    // Execute user JavaScript
                    ${js}
                    console.log('✅ JavaScript executed successfully!');
                  } catch(e) {
                    console.error('❌ JavaScript Execution Error:', e);
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'error';
                    errorDiv.innerHTML = '❌ JavaScript Error: ' + e.message + 
                                      '\\n\\nError occurred in your JavaScript code.' +
                                      '\\nPlease check the syntax and try again.' +
                                      (e.stack ? '\\n\\nStack trace:\\n' + e.stack : '');
                    document.body.insertBefore(errorDiv, document.body.firstChild);
                  }
                });
                
                console.log('🎮 Playground ready for interaction!');
              </script>
            </body>
          </html>
        `;
      }
      setOutput(finalHtml);
    }, 200); // Faster response

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

  const loadDemo = (demoType: string) => {
    if (demoType === 'hello') {
      if (isReactMode) {
        setReact(`function App() {
  const [greeting, setGreeting] = React.useState('Hello World! 🌍');
  const [color, setColor] = React.useState('#4CAF50');
  
  const greetings = [
    { text: 'Hello World! 🌍', color: '#4CAF50' },
    { text: 'नमस्ते दुनिया! 🙏', color: '#FF5722' },
    { text: 'Hola Mundo! 🌎', color: '#2196F3' },
    { text: 'Bonjour le monde! 🇫🇷', color: '#9C27B0' },
    { text: 'こんにちは世界! 🇯🇵', color: '#FF9800' }
  ];
  
  const changeGreeting = () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting.text);
    setColor(randomGreeting.color);
  };
  
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      padding: '20px'
    }
  }, [
    React.createElement('div', {
      key: 1,
      style: {
        background: 'white',
        borderRadius: '20px',
        padding: '3rem',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%'
      }
    }, [
      React.createElement('h1', {
        key: 1,
        style: {
          fontSize: '2.5rem',
          color: color,
          marginBottom: '1rem',
          transition: 'color 0.5s ease'
        }
      }, greeting),
      React.createElement('p', {
        key: 2,
        style: {
          color: '#666',
          fontSize: '1.1rem',
          marginBottom: '2rem'
        }
      }, 'This is a simple React Hello World example!'),
      React.createElement('button', {
        key: 3,
        onClick: changeGreeting,
        style: {
          background: color,
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }
      }, '🌍 Change Language')
    ])
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));`);
      } else {
        setHtml(`<div class="hello-container">
  <div class="hello-card">
    <h1 id="greeting">👋 Hello World!</h1>
    <p>Welcome to your first web page!</p>
    <p>This is a simple HTML, CSS, and JavaScript example.</p>
    <button onclick="changeGreeting()" class="hello-btn">
      🌍 Click Me!
    </button>
    <div id="message" class="message-area">
      <p>Click the button to see magic! ✨</p>
    </div>
  </div>
</div>`);
        setCss(`body {
  margin: 0;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hello-container {
  width: 100%;
  max-width: 500px;
}

.hello-card {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.hello-card:hover {
  transform: translateY(-5px);
}

h1 {
  font-size: 2.5rem;
  color: #4CAF50;
  margin-bottom: 1rem;
  transition: all 0.5s ease;
}

p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.hello-btn {
  background: linear-gradient(45deg, #4CAF50, #45a049);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  margin: 10px;
}

.hello-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.message-area {
  margin-top: 20px;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  border-left: 4px solid #4CAF50;
  transition: all 0.3s ease;
}

.message-area.updated {
  background: #e8f5e8;
  transform: scale(1.02);
}`);
        setJs(`let clickCount = 0;
const greetings = [
  { text: '👋 Hello World!', color: '#4CAF50' },
  { text: '🙏 नमस्ते दुनिया!', color: '#FF5722' },
  { text: '🌎 Hola Mundo!', color: '#2196F3' },
  { text: '🇫🇷 Bonjour le monde!', color: '#9C27B0' },
  { text: '🇯🇵 こんにちは世界!', color: '#FF9800' },
  { text: '🌟 Hello Universe!', color: '#E91E63' }
];

function changeGreeting() {
  clickCount++;
  
  // Get random greeting
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  
  // Update greeting text and color
  const greetingElement = document.getElementById('greeting');
  const messageElement = document.getElementById('message');
  
  greetingElement.textContent = randomGreeting.text;
  greetingElement.style.color = randomGreeting.color;
  
  // Update message
  messageElement.innerHTML = \`
    <p><strong>Awesome!</strong> You've clicked \${clickCount} time\${clickCount === 1 ? '' : 's'}!</p>
    <p>Current greeting: <span style="color: \${randomGreeting.color}; font-weight: bold;">\${randomGreeting.text}</span></p>
  \`;
  
  // Add updated class for animation
  messageElement.classList.add('updated');
  setTimeout(() => {
    messageElement.classList.remove('updated');
  }, 300);
  
  console.log(\`Greeting changed to: \${randomGreeting.text}\`);
}

// Welcome message
console.log('🎉 Hello World app loaded successfully!');
console.log('👋 Welcome to web development!');

// Show that everything is working
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ DOM loaded - Ready for interaction!');
});`);
      }
    }
    if (demoType === 'card') {
      if (isReactMode) {
        setReact(`function App() {
  const [likes, setLikes] = React.useState(0);
  
  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }
  }, React.createElement('div', {
    style: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      width: '300px'
    }
  }, [
    React.createElement('div', {
      key: 1,
      style: {
        height: '200px',
        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }
    }, React.createElement('h2', {style: {margin: 0, fontSize: '2rem'}}, '😊')),
    React.createElement('div', {
      key: 2,
      style: { padding: '20px' }
    }, [
      React.createElement('h3', {key: 1, style: {margin: '0 0 10px 0', color: '#333'}}, 'Beautiful Profile'),
      React.createElement('p', {key: 2, style: {color: '#666', lineHeight: '1.6'}}, 'Interactive profile card demo!'),
      React.createElement('button', {
        key: 3,
        onClick: () => setLikes(likes + 1),
        style: {
          background: likes > 0 ? '#e74c3c' : '#ecf0f1',
          color: likes > 0 ? 'white' : '#333',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '20px',
          cursor: 'pointer'
        }
      }, '❤️ ' + likes + ' ' + (likes === 1 ? 'Like' : 'Likes'))
    ])
  ]));
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));`);
      } else {
        setHtml(`<div class="demo-container">
  <div class="profile-card" onclick="flipCard()">
    <div class="card-front">
      <div class="avatar">👨‍💻</div>
      <h2>John Developer</h2>
      <p>Full Stack Developer</p>
      <button class="flip-btn">Click to flip!</button>
    </div>
    <div class="card-back">
      <h3>Skills</h3>
      <div class="skills">
        <span class="skill">React</span>
        <span class="skill">Node.js</span>
        <span class="skill">Python</span>
      </div>
      <button class="flip-btn" onclick="flipCard()">Flip back</button>
    </div>
  </div>
</div>`);
        setCss(`.demo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.profile-card {
  width: 300px;
  height: 400px;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  backface-visibility: hidden;
  transition: transform 0.6s;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.card-back {
  transform: rotateY(180deg);
}

.profile-card.flipped .card-front {
  transform: rotateY(180deg);
}

.profile-card.flipped .card-back {
  transform: rotateY(0);
}

.avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 1rem 0;
}

.skill {
  background: #667eea;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.flip-btn {
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 0.2s;
}

.flip-btn:hover {
  transform: scale(1.05);
}`);
        setJs(`let isFlipped = false;

function flipCard() {
  const card = document.querySelector('.profile-card');
  isFlipped = !isFlipped;
  
  if (isFlipped) {
    card.classList.add('flipped');
  } else {
    card.classList.remove('flipped');
  }
}

console.log('Interactive profile card loaded!');`);
      }
    }
  };
  
  const handleGenerate = async () => {
    if (!aiPrompt.trim()) {
      alert("Please describe what you want to build!");
      return;
    }

    setIsGenerating(true);
    
    // Create custom code based on prompt keywords
    const prompt = aiPrompt.toLowerCase();
    
    try {
      if (isReactMode) {
        // Generate React code based on prompt
        if (prompt.includes('counter') || prompt.includes('click')) {
          setReact(`function App() {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState('Welcome to Custom Counter!');
  
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setMessage('You clicked ' + newCount + ' times! 🎉');
  };
  
  const reset = () => {
    setCount(0);
    setMessage('Counter Reset! Ready to start again.');
  };
  
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      padding: '20px'
    }
  }, [
    React.createElement('h1', {key: 1, style: {fontSize: '2.5rem', marginBottom: '1rem'}}, 'Custom Counter App'),
    React.createElement('p', {key: 2, style: {fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center'}}, message),
    React.createElement('div', {key: 3, style: {fontSize: '4rem', marginBottom: '2rem', color: '#FFD700'}}, count),
    React.createElement('div', {key: 4, style: {display: 'flex', gap: '15px'}}, [
      React.createElement('button', {
        key: 'inc',
        onClick: increment,
        style: {
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }
      }, '➕ Increment'),
      React.createElement('button', {
        key: 'reset',
        onClick: reset,
        style: {
          background: '#f44336',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }
      }, '🔄 Reset')
    ])
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));`);
        } else if (prompt.includes('form') || prompt.includes('login')) {
          setReact(`function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  
  const handleSubmit = () => {
    if (username && password) {
      setMessage('✅ Login successful for: ' + username);
    } else {
      setMessage('❌ Please fill all fields');
    }
  };
  
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif'
    }
  }, React.createElement('div', {
    style: {
      background: 'white',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px'
    }
  }, [
    React.createElement('h2', {key: 1, style: {textAlign: 'center', marginBottom: '2rem', color: '#333'}}, 'Login Form'),
    React.createElement('input', {
      key: 2,
      type: 'text',
      placeholder: 'Username',
      value: username,
      onChange: (e) => setUsername(e.target.value),
      style: {
        width: '100%',
        padding: '15px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '10px',
        fontSize: '16px',
        boxSizing: 'border-box'
      }
    }),
    React.createElement('input', {
      key: 3,
      type: 'password',
      placeholder: 'Password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      style: {
        width: '100%',
        padding: '15px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '10px',
        fontSize: '16px',
        boxSizing: 'border-box'
      }
    }),
    React.createElement('button', {
      key: 4,
      onClick: handleSubmit,
      style: {
        width: '100%',
        background: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '15px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '10px 0'
      }
    }, 'Login'),
    message && React.createElement('p', {
      key: 5,
      style: {
        textAlign: 'center',
        marginTop: '1rem',
        color: message.includes('✅') ? '#4CAF50' : '#f44336',
        fontWeight: 'bold'
      }
    }, message)
  ]));
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));`);
        } else {
          // Default React app
          setReact(initialCode.react);
        }
      } else {
        // Generate HTML/CSS/JS based on prompt
        if (prompt.includes('form') || prompt.includes('login')) {
          setHtml(`<div class="login-container">
  <div class="login-form">
    <h2>🔐 Login Form</h2>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" placeholder="Enter your username" onkeyup="validateForm()">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" onkeyup="validateForm()">
    </div>
    <button id="login-btn" onclick="handleLogin()" disabled>Login</button>
    <div id="message" class="message"></div>
  </div>
</div>`);
          
          setCss(`body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.login-form {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  text-align: center;
}

.login-form h2 {
  color: #333;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

.form-group input:valid {
  border-color: #4CAF50;
}

button {
  width: 100%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

button:enabled:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

.message {
  margin-top: 1rem;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  min-height: 20px;
}

.message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}`);
          
          setJs(`function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginBtn = document.getElementById('login-btn');
  
  if (username.length >= 3 && password.length >= 6) {
    loginBtn.disabled = false;
    loginBtn.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
  } else {
    loginBtn.disabled = true;
    loginBtn.style.background = '#ccc';
  }
}

function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');
  
  // Simulate login validation
  if (username === 'admin' && password === 'password') {
    messageDiv.textContent = '✅ Login successful! Welcome ' + username;
    messageDiv.className = 'message success';
  } else if (username.length >= 3 && password.length >= 6) {
    messageDiv.textContent = '✅ Login successful! Welcome ' + username;
    messageDiv.className = 'message success';
  } else {
    messageDiv.textContent = '❌ Invalid credentials. Try username: admin, password: password';
    messageDiv.className = 'message error';
  }
  
  console.log('Login attempt:', username);
}

console.log('🔐 Login form loaded successfully!');`);
        } else if (prompt.includes('counter') || prompt.includes('click')) {
          setHtml(`<div class="counter-app">
  <h1>🔢 Custom Counter</h1>
  <div class="counter-display">
    <span id="count">0</span>
  </div>
  <div class="counter-controls">
    <button onclick="decrement()" class="btn-red">➖ Decrease</button>
    <button onclick="increment()" class="btn-green">➕ Increase</button>
    <button onclick="reset()" class="btn-blue">🔄 Reset</button>
  </div>
  <div id="status" class="status">Click buttons to change counter!</div>
</div>`);
          
          setCss(`body {
  margin: 0;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.counter-app {
  text-align: center;
  background: rgba(255,255,255,0.1);
  padding: 3rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.2);
}

.counter-app h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.counter-display {
  font-size: 6rem;
  font-weight: bold;
  color: #FFD700;
  margin: 2rem 0;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
  padding: 1rem;
  background: rgba(255,215,0,0.1);
  border-radius: 20px;
  border: 2px solid rgba(255,215,0,0.3);
}

.counter-controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
}

button {
  padding: 15px 25px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  color: white;
}

.btn-green {
  background: linear-gradient(45deg, #4CAF50, #45a049);
}

.btn-red {
  background: linear-gradient(45deg, #f44336, #d32f2f);
}

.btn-blue {
  background: linear-gradient(45deg, #2196F3, #1976D2);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

button:active {
  transform: translateY(-1px);
}

.status {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #FFD700;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  padding: 1rem;
  background: rgba(255,215,0,0.1);
  border-radius: 10px;
  border: 1px solid rgba(255,215,0,0.3);
}`);
          
          setJs(`let counter = 0;

function updateDisplay() {
  document.getElementById('count').textContent = counter;
  const status = document.getElementById('status');
  
  if (counter === 0) {
    status.textContent = 'Counter is at zero!';
    status.style.color = '#FFD700';
  } else if (counter > 0) {
    status.textContent = 'Positive count: ' + counter + ' 🔥';
    status.style.color = '#4CAF50';
  } else {
    status.textContent = 'Negative count: ' + counter + ' ❄️';
    status.style.color = '#FF6B6B';
  }
}

function increment() {
  counter++;
  updateDisplay();
  console.log('Counter incremented to:', counter);
}

function decrement() {
  counter--;
  updateDisplay();
  console.log('Counter decremented to:', counter);
}

function reset() {
  counter = 0;
  updateDisplay();
  document.getElementById('status').textContent = 'Counter reset! ✨';
  console.log('Counter reset to 0');
}

// Initialize
updateDisplay();
console.log('🔢 Counter app loaded successfully!');`);
        } else {
          // Default interactive demo
          setHtml(initialCode.html);
          setCss(initialCode.css);
          setJs(initialCode.js);
        }
      }
      
      setTimeout(() => {
        setIsGenerating(false);
        setAiPrompt("");
      }, 1000);
      
    } catch (error) {
      console.error('Generation Error:', error);
      // Fallback to demo
      loadDemo('hello');
      setIsGenerating(false);
      setAiPrompt("");
    }
  };
  
  const tabs: { lang: Language; icon: React.ReactElement; tooltip: string }[] = [
    { lang: 'html', icon: <FaHtml5 />, tooltip: 'HTML' },
    { lang: 'css', icon: <FaCss3Alt />, tooltip: 'CSS' },
    { lang: 'js', icon: <FaJs />, tooltip: 'JavaScript' },
    { lang: 'react', icon: <FaReact />, tooltip: 'React (JSX) - Isolated Environment' },
  ];

  return (
    <section id="live-web-playground" className="w-full py-24 px-4 bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Live Web Playground (AI-Powered)</h2>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto">
              Write HTML, CSS, & JS together for a live preview, or switch to the isolated React environment.
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
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
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 hover:scale-105 active:scale-95 transition-transform"
            >
              {isGenerating ? "Generating..." : <><FaRobot /> Generate with AI</>}
            </button>
          </div>

          {/* Quick Demo Section */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <span className="text-sm text-gray-400 mr-2">Quick Demos:</span>
            <button
              onClick={() => loadDemo('hello')}
              className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-sm rounded-lg transition-colors"
            >
              👋 Hello World
            </button>
            <button
              onClick={() => loadDemo('card')}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
            >
              📄 Profile Card
            </button>
            <button
              onClick={() => setAiPrompt('counter app with increment decrement')}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
            >
              🔢 Counter
            </button>
            <button
              onClick={() => setAiPrompt('login form with username password')}
              className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
            >
              📝 Login Form
            </button>
            <button
              onClick={() => setAiPrompt('interactive todo list')}
              className="px-3 py-1 bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-lg transition-colors"
            >
              ✅ Todo List
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 bg-gray-900/60 p-2 rounded-xl border border-gray-700">
                  {tabs.map(({lang, icon, tooltip}) => (
                    <button
                      key={lang}
                      onClick={() => setActiveTab(lang)}
                      className={"flex items-center gap-2 px-4 py-2 rounded-lg transition-all relative group " + (activeTab === lang ? 'bg-orange-500 text-white' : 'text-gray-400 hover:bg-gray-700/50')}
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
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Live Output</h3>
                <button 
                  onClick={() => {
                    if (iframeRef.current) {
                      // Force reload iframe
                      const currentSrc = iframeRef.current.srcdoc;
                      iframeRef.current.srcdoc = '';
                      setTimeout(() => {
                        if (iframeRef.current) {
                          iframeRef.current.srcdoc = currentSrc;
                        }
                      }, 100);
                    }
                  }}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded text-sm transition-colors"
                  title="Refresh Output"
                >
                  🔄 Refresh
                </button>
              </div>
              <iframe
                ref={iframeRef}
                srcDoc={output}
                title="Live Output"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
                className="w-full h-full min-h-[450px] bg-white rounded-2xl border-4 border-gray-700 transition-all duration-300"
                style={{ 
                  border: '4px solid #374151',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}
                onLoad={() => {
                  try {
                    const iframeWindow = iframeRef.current?.contentWindow;
                    if (iframeWindow) {
                      iframeWindow.addEventListener('error', (e) => {
                        console.log('Iframe Error caught:', e.error);
                      });
                      
                      // Log successful load
                      console.log('✅ Iframe loaded successfully');
                    }
                  } catch {
                    // Handle cross-origin restrictions silently
                    console.log('Cross-origin restrictions applied');
                  }
                }}
              />
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveWebPlaygroundSection;
