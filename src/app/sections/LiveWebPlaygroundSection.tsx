"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCopy, FaTrash, FaRobot } from "react-icons/fa";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";

type Language = "html" | "css" | "js" | "react";

const initialCode = {
  html: `<div class="playground-container">
  <div class="card">
    <h1>🎮 Interactive Playground</h1>
    <p class="subtitle">Click buttons to see the magic!</p>
    
    <div class="button-group">
      <button onclick="changeColor()" class="btn btn-primary">Change Color</button>
      <button onclick="addC        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Live Web Playground (AI-Powered)
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto">
            Write HTML, CSS, & JS together for a live preview, or switch to the isolated React environment.
          </p>
        </div> btn-secondary">Add Content</button>
      <button onclick="animate()" class="btn btn-success">Animate</button>
    </div>
    
    <div id="dynamic-content" class="content-area">
      <p>✨ Dynamic content will appear here</p>
    </div>
    
    <div class="counter-section">
      <p>Button clicks: <span id="counter">0</span></p>
    </div>
  </div>
</div>`,
  css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.playground-container {
  width: 100%;
  max-width: 600px;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

h1 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  min-width: 120px;
}

.btn-primary {
  background: linear-gradient(45deg, #FF6B6B, #FF8E53);
  color: white;
}

.btn-secondary {
  background: linear-gradient(45deg, #4ECDC4, #44A08D);
  color: white;
}

.btn-success {
  background: linear-gradient(45deg, #A8E6CF, #7FCDCD);
  color: white;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(0);
}

.content-area {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ddd;
  transition: all 0.3s ease;
}

.counter-section {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 15px;
  border-radius: 15px;
  font-weight: 600;
}

#counter {
  color: #FFD700;
  font-size: 1.5rem;
  font-weight: bold;
}

.animate-bounce {
  animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
  0%, 20%, 60%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  80% { transform: translateY(-10px); }
}

.highlight {
  background: linear-gradient(45deg, #FFD700, #FFA500) !important;
  color: #333 !important;
  border: none !important;
}`,
  js: `let clickCount = 0;
let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
let currentColorIndex = 0;

function updateCounter() {
  clickCount++;
  document.getElementById('counter').textContent = clickCount;
}

function changeColor() {
  updateCounter();
  const card = document.querySelector('.card');
  const newColor = colors[currentColorIndex % colors.length];
  
  card.style.background = \`linear-gradient(135deg, \${newColor}, rgba(255,255,255,0.9))\`;
  card.style.transition = 'background 0.5s ease';
  
  currentColorIndex++;
  
  // Add bounce animation
  card.classList.add('animate-bounce');
  setTimeout(() => card.classList.remove('animate-bounce'), 600);
  
  console.log(\`Color changed to: \${newColor}\`);
}

function addContent() {
  updateCounter();
  const contentArea = document.getElementById('dynamic-content');
  const messages = [
    '🚀 Welcome to the playground!',
    '🎨 Code is like art - creative and beautiful!',
    '⚡ JavaScript makes everything interactive!',
    '🌟 You are doing great!',
    '🎯 Practice makes perfect!',
    '💡 Keep learning and growing!',
    '🔥 Your coding skills are improving!'
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  contentArea.innerHTML = \`<p style="color: #333; font-weight: 600; font-size: 1.1rem;">\${randomMessage}</p>\`;
  contentArea.classList.add('highlight');
  
  setTimeout(() => {
    contentArea.classList.remove('highlight');
  }, 2000);
  
  console.log('Content updated:', randomMessage);
}

function animate() {
  updateCounter();
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.style.transform = 'scale(1.1) rotate(5deg)';
      btn.style.transition = 'transform 0.3s ease';
      
      setTimeout(() => {
        btn.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
    }, index * 100);
  });
  
  // Animate the entire card
  const card = document.querySelector('.card');
  card.style.transform = 'rotateY(10deg) scale(1.02)';
  setTimeout(() => {
    card.style.transform = 'rotateY(0deg) scale(1)';
  }, 500);
  
  console.log('Animation triggered!');
}

// Initialize the playground
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎮 Live Web Playground loaded successfully!');
  console.log('Try clicking the buttons to see the interactive features!');
  
  // Add some initial sparkle
  setTimeout(() => {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
      subtitle.style.color = '#667eea';
      subtitle.textContent = '✨ Everything is working perfectly! Try the buttons below ✨';
    }
  }, 1000);
});`,
  react: `function App() {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState('Welcome to React Playground! 🚀');
  const [bgColor, setBgColor] = React.useState('#667eea');
  const [tasks, setTasks] = React.useState(['Learn React', 'Build awesome apps']);
  const [newTask, setNewTask] = React.useState('');
  
  const colors = ['#667eea', '#764ba2', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
  
  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    setMessage(\`Amazing! You clicked \${newCount} time\${newCount === 1 ? '' : 's'}! 🎉\`);
    
    // Change background color every 5 clicks
    if (newCount % 5 === 0) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }
  };
  
  const handleReset = () => {
    setCount(0);
    setMessage('Counter reset! Ready for more clicks? 🔄');
    setBgColor('#667eea');
  };
  
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
      setMessage(\`Task "\${newTask}" added! You have \${tasks.length + 1} tasks now 📝\`);
    }
  };
  
  const removeTask = (index) => {
    const taskToRemove = tasks[index];
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setMessage(\`Task "\${taskToRemove}" completed! Well done! ✅\`);
  };

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      background: \`linear-gradient(135deg, \${bgColor} 0%, \${bgColor}90 100%)\`,
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
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '2rem',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }
    }, [
      React.createElement('h1', {
        key: 'title',
        style: {fontSize: '2.5rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}
      }, '⚛️ React Interactive Playground'),
      
      React.createElement('p', {
        key: 'message',
        style: {fontSize: '1.2rem', marginBottom: '2rem', minHeight: '30px'}
      }, message),
      
      React.createElement('div', {
        key: 'counter-section',
        style: {
          background: 'rgba(255,255,255,0.2)',
          padding: '2rem',
          borderRadius: '15px',
          marginBottom: '2rem'
        }
      }, [
        React.createElement('div', {
          key: 'counter-display',
          style: {
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#FFD700',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }
        }, count),
        
        React.createElement('div', {key: 'buttons'}, [
          React.createElement('button', {
            key: 'increment',
            onClick: handleIncrement,
            style: {
              background: 'linear-gradient(45deg, #4CAF50, #45a049)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              margin: '0 10px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            },
            onMouseOver: (e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
            },
            onMouseOut: (e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }
          }, '🚀 Increment'),
          
          React.createElement('button', {
            key: 'reset',
            onClick: handleReset,
            style: {
              background: 'linear-gradient(45deg, #f44336, #d32f2f)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              margin: '0 10px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            },
            onMouseOver: (e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
            },
            onMouseOut: (e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }
          }, '🔄 Reset')
        ])
      ]),
      
      React.createElement('div', {
        key: 'todo-section',
        style: {
          background: 'rgba(255,255,255,0.1)',
          padding: '1.5rem',
          borderRadius: '15px',
          textAlign: 'left'
        }
      }, [
        React.createElement('h3', {
          key: 'todo-title',
          style: {textAlign: 'center', marginBottom: '1rem', color: '#FFD700'}
        }, '📋 Task Manager'),
        
        React.createElement('div', {
          key: 'todo-input',
          style: {display: 'flex', gap: '10px', marginBottom: '1rem'}
        }, [
          React.createElement('input', {
            key: 'input',
            type: 'text',
            value: newTask,
            onChange: (e) => setNewTask(e.target.value),
            placeholder: 'Enter a new task...',
            style: {
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '14px'
            },
            onKeyPress: (e) => e.key === 'Enter' && addTask()
          }),
          React.createElement('button', {
            key: 'add-btn',
            onClick: addTask,
            style: {
              background: '#2196F3',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px'
            }
          }, '➕ Add')
        ]),
        
        React.createElement('ul', {
          key: 'task-list',
          style: {listStyle: 'none', padding: 0}
        }, tasks.map((task, index) => 
          React.createElement('li', {
            key: index,
            style: {
              background: 'rgba(255,255,255,0.2)',
              margin: '5px 0',
              padding: '10px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }
          }, [
            React.createElement('span', {key: 'task-text'}, task),
            React.createElement('button', {
              key: 'remove-btn',
              onClick: () => removeTask(index),
              style: {
                background: '#ff4444',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '12px'
              }
            }, '✅ Done')
          ])
        ))
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
        // React Mode: Only use React code
        finalHtml = `
          <html>
            <head>
              <style>${css}</style>
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
                  const errorDiv = document.getElementById('root');
                  if (errorDiv) {
                    errorDiv.innerHTML = '<pre style="color:red; padding: 20px; background: #ffe6e6; border-radius: 5px;">React Error: ' + e.message + '</pre>';
                  }
                  console.error('React Error:', e);
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
              <script>
                // Wait for DOM to be ready
                document.addEventListener('DOMContentLoaded', function() {
                  try {
                    ${js}
                  } catch(e) {
                    console.error('JavaScript Error:', e);
                    document.body.innerHTML += '<pre style="color:red; padding: 20px; background: #ffe6e6; border-radius: 5px; margin-top: 20px;">JavaScript Error: ' + e.message + '</pre>';
                  }
                });
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
    if (!aiPrompt.trim()) {
      alert("Please enter a description of what you want to build!");
      return;
    }

    setIsGenerating(true);
    
    try {
      let fullPrompt = "";
      
      if (isReactMode) {
        fullPrompt = `Generate React JSX code for: ${aiPrompt}
        
Requirements:
- Create a functional React component called App
- Use inline styles with style objects
- Use React.createElement syntax or JSX
- Return proper JSX elements
- Make it visually appealing with good styling
- End with ReactDOM.render(<App />, document.getElementById('root'));

Example format:
function App() {
  return React.createElement('div', {
    style: { padding: '2rem', background: '#333', color: 'white' }
  }, 'Content here');
}
ReactDOM.render(React.createElement(App), document.getElementById('root'));

Generate complete working React code:`;
      } else {
        fullPrompt = `Generate HTML, CSS, and JavaScript code for: ${aiPrompt}

Please provide:
1. Clean HTML structure
2. Beautiful CSS styling with modern design
3. Interactive JavaScript functionality
4. Make it responsive and visually appealing
5. Use modern CSS features like flexbox, gradients, shadows

Return the code in this format:
HTML:
[html code here]

CSS:
[css code here]

JavaScript:
[javascript code here]`;
      }

      console.log('Sending request to Gemini API...', { prompt: aiPrompt, mode: isReactMode ? 'react' : 'html' });

      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mode: 'generate',
          prompt: fullPrompt,
          language: isReactMode ? 'react' : 'html'
        })
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Gemini API Response:', data);
      
      if (data.error) {
        console.error('API Error:', data.error);
        throw new Error(data.error);
      }

      const generatedText = data.text || '';
      console.log('Generated text:', generatedText);
      
      if (!generatedText.trim()) {
        throw new Error('Empty response from AI');
      }
      
      if (isReactMode) {
        // Extract React code and set it
        let reactCode = generatedText.replace(/```jsx|```javascript|```js|```react|```/g, '').trim();
        
        // If code doesn't have ReactDOM.render, add it
        if (!reactCode.includes('ReactDOM.render')) {
          reactCode += '\nReactDOM.render(React.createElement(App), document.getElementById("root"));';
        }
        
        console.log('Setting React code:', reactCode);
        setReact(reactCode);
      } else {
        // Parse the generated text to extract HTML, CSS, and JS
        const htmlMatch = generatedText.match(/HTML:\s*([\s\S]*?)(?=CSS:|JavaScript:|$)/i);
        const cssMatch = generatedText.match(/CSS:\s*([\s\S]*?)(?=JavaScript:|HTML:|$)/i);
        const jsMatch = generatedText.match(/JavaScript:\s*([\s\S]*?)(?=HTML:|CSS:|$)/i);
        
        console.log('Matches found:', { htmlMatch: !!htmlMatch, cssMatch: !!cssMatch, jsMatch: !!jsMatch });
        
        if (htmlMatch) {
          const htmlCode = htmlMatch[1].replace(/```html|```/g, '').trim();
          console.log('Setting HTML:', htmlCode);
          setHtml(htmlCode);
        }
        
        if (cssMatch) {
          const cssCode = cssMatch[1].replace(/```css|```/g, '').trim();
          console.log('Setting CSS:', cssCode);
          setCss(cssCode);
        }
        
        if (jsMatch) {
          const jsCode = jsMatch[1].replace(/```javascript|```js|```/g, '').trim();
          console.log('Setting JS:', jsCode);
          setJs(jsCode);
        }
        
        // If parsing fails, try to extract any HTML/CSS/JS from code blocks
        if (!htmlMatch && !cssMatch && !jsMatch) {
          console.log('Parsing failed, trying code blocks...');
          const codeBlocks = generatedText.match(/```[\s\S]*?```/g);
          console.log('Found code blocks:', codeBlocks?.length || 0);
          
          if (codeBlocks && codeBlocks.length >= 1) {
            const htmlCode = codeBlocks[0]?.replace(/```html|```/g, '').trim() || `<div class="ai-result"><h1>AI Generated: ${aiPrompt}</h1><p>Generated content here</p></div>`;
            setHtml(htmlCode);
            
            if (codeBlocks[1]) {
              const cssCode = codeBlocks[1]?.replace(/```css|```/g, '').trim() || 'body { font-family: Arial, sans-serif; padding: 20px; }';
              setCss(cssCode);
            } else {
              setCss('body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; } .ai-result { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 600px; margin: 50px auto; text-align: center; }');
            }
            
            if (codeBlocks[2]) {
              const jsCode = codeBlocks[2]?.replace(/```javascript|```js|```/g, '').trim() || 'console.log("Generated with AI");';
              setJs(jsCode);
            } else {
              setJs('console.log("AI generated content loaded successfully!");');
            }
          } else {
            // If no code blocks found, use the whole response as HTML and add basic styling
            setHtml(`<div class="ai-content">
  <h1>AI Generated: ${aiPrompt}</h1>
  <div class="content">${generatedText.replace(/\n/g, '<br/>')}</div>
</div>`);
            setCss(`body { 
  font-family: Arial, sans-serif; 
  padding: 20px; 
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
} 
.ai-content { 
  max-width: 800px; 
  margin: 0 auto; 
  background: rgba(255,255,255,0.1); 
  padding: 2rem; 
  border-radius: 15px; 
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
  text-align: center;
} 
.content { 
  margin-top: 1rem; 
  line-height: 1.6; 
}`);
            setJs('console.log("AI generated content loaded successfully!");');
          }
        }
      }
      
      console.log('Code generation completed successfully!');
      
    } catch (error) {
      console.error('AI Generation Error:', error);
      alert(`AI Generation failed: ${error instanceof Error ? error.message : 'Unknown error'}. Using fallback demo code.`);
      
      // Fallback to demo code if API fails
      if (isReactMode) {
        setReact(`function App() { 
  return React.createElement('div', {
    style: {
      padding: '2rem', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      borderRadius: '1rem', 
      color: 'white',
      textAlign: 'center',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }, [
    React.createElement('h2', {key: 1, style: {marginBottom: '1rem'}}, \`AI Generated: \${aiPrompt}\`),
    React.createElement('p', {key: 2}, 'This is a demo component generated for your request.'),
    React.createElement('button', {
      key: 3,
      style: {
        background: '#ff6b35',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '1rem'
      },
      onClick: () => alert('Hello from AI generated React!')
    }, 'Click Me!')
  ]);
}
ReactDOM.render(React.createElement(App), document.getElementById('root'));`);
      } else {
        setHtml(`<div class="ai-generated">
  <h1>AI Generated: \${aiPrompt}</h1>
  <p>This is a demo generated for your request.</p>
  <button onclick="handleClick()">Try Me!</button>
</div>`);
        setCss(`body { 
  margin: 0; 
  padding: 20px; 
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.ai-generated {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

button {
  background: #ff6b35;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

button:hover {
  background: #e55a2e;
  transform: translateY(-2px);
}`);
        setJs(`function handleClick() {
  const button = event.target;
  button.textContent = 'Generated! ✨';
  button.style.background = '#4CAF50';
  
  setTimeout(() => {
    button.textContent = 'Try Me!';
    button.style.background = '#ff6b35';
  }, 2000);
}

console.log('AI generated code for: \${aiPrompt}');`);
      }
    } finally {
      setIsGenerating(false);
      setAiPrompt(""); // Clear the prompt after generation
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
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Live Web Playground (AI-Powered)
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto">
            Write HTML, CSS, & JS together for a live preview, or switch to the isolated React environment.
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
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
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {isGenerating ? "Generating..." : <><FaRobot /> Generate with AI</>}
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
        </div>
      </div>
    </section>
  );
};

export default LiveWebPlaygroundSection; 