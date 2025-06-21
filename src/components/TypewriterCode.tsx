"use client"

import { useState, useEffect, type JSX } from "react"

const TypewriterCode = () => {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const codeString = `class NathijaNimantha:
    def __init__(self):
        self.name = "Nathija Nimantha"
        self.role = "Full-Stack Developer in Training"
        self.location = "Sri Lanka 🇱🇰"
        self.education = "Institute of Computer Engineering Technology (iCET)"
        self.current_focus = ["React", "Mobile App Development", "Full-Stack Magic"]
        self.fun_fact = "I debug code like Sherlock Holmes solves mysteries 🕵️‍♂️"
        
    def say_hello(self):
        print("Thanks for dropping by! Let's build something amazing together! 🚀")
    
    def get_daily_routine(self):
        return {
            "morning": "☕ Coffee + Code",
            "afternoon": "🐛 Debug like a detective", 
            "evening": "📚 Learn new tech",
            "night": "🌙 Dream in code"
        }
    
    def current_status(self):
        return "Turning coffee into code, one commit at a time ⚡"

# Initialize the developer
dev = NathijaNimantha()
dev.say_hello()`

  useEffect(() => {
    if (currentIndex < codeString.length) {
      // Calculate dynamic delay with random pauses
      let delay = 25 // Base typing speed
      
      const char = codeString[currentIndex]
      const prevChar = currentIndex > 0 ? codeString[currentIndex - 1] : ''
      
      // Add natural pauses at certain points
      if (char === '\n') {
        delay = 150 // Pause at end of lines
      } else if (char === ':') {
        delay = 200 // Pause after colons
      } else if (char === '=' && codeString[currentIndex + 1] === ' ') {
        delay = 100 // Pause after assignments
      } else if (char === ',' && codeString[currentIndex + 1] === ' ') {
        delay = 80 // Pause after commas
      } else if (char === '"' && prevChar !== '\\') {
        delay = 120 // Pause when starting/ending strings
      } else if (char === '(' || char === ')' || char === '{' || char === '}') {
        delay = 90 // Pause at brackets
      } else if (Math.random() < 0.08) {
        // Random thinking pauses (8% chance)
        delay = Math.random() * 300 + 200 // 200-500ms pause
      }

      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeString[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, codeString])

  // New function to render code with inline cursor
  const renderCodeWithCursor = () => {
    const beforeCursor = displayedCode
    const lines = beforeCursor.split('\n')
    
    return lines.map((line: string, lineIndex: number) => {
      const isLastLine = lineIndex === lines.length - 1
      
      return (
        <div key={lineIndex} className="leading-relaxed min-h-[1.5rem] flex">
          {/* Render the line content */}
          <span className="whitespace-pre">
            {line === '' ? '\u00A0' : renderLineWithHighlighting(line)}
          </span>
          
          {/* Show cursor at the end of the last line if not complete */}
          {isLastLine && !isComplete && (
            <span 
              className="inline-block w-2 h-5 bg-white ml-0.5"
              style={{ 
                animation: 'blink 1s infinite'
              }}
            />
          )}
        </div>
      )
    })
  }

  // Helper function to highlight a single line
  const renderLineWithHighlighting = (line: string) => {
    if (line.trim() === '') return '\u00A0'
    
    const parts: JSX.Element[] = []
    let i = 0
    
    while (i < line.length) {
      let matched = false
      const remaining = line.substring(i)
      
      // Handle spaces first
      if (line[i] === ' ') {
        parts.push(
          <span key={i} className="text-white">
            {' '}
          </span>
        )
        i++
        continue
      }
      
      // Define patterns for syntax highlighting
      const patterns = [
        { regex: /^#.*$/, className: 'text-gray-400 italic' },
        { regex: /^"[^"]*"/, className: 'text-green-400' },
        { regex: /^(class|def|return|print|import|from|if|else|elif|for|while|try|except|with|as)\b/, className: 'text-purple-400 font-semibold' },
        { regex: /^self\b/, className: 'text-blue-400' },
        { regex: /^[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/, className: 'text-yellow-400' },
        { regex: /^__[a-zA-Z_][a-zA-Z0-9_]*__/, className: 'text-cyan-400' },
      ]
      
      // Try to match patterns
      for (const pattern of patterns) {
        const match = remaining.match(pattern.regex)
        if (match) {
          parts.push(
            <span key={i} className={pattern.className}>
              {match[0]}
            </span>
          )
          i += match[0].length
          matched = true
          break
        }
      }
      
      // If no pattern matched, add single character
      if (!matched) {
        parts.push(
          <span key={i} className="text-white">
            {line[i]}
          </span>
        )
        i++
      }
    }
    
    return parts
  }

  return (
    <div className="relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <div className="backdrop-blur-md bg-black/20 rounded-2xl p-6 border border-white/10 font-mono text-sm overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/10">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-xs ml-4">nathija_nimantha.py</span>
        </div>

        {/* Code Content */}
        <div className="text-white min-h-[400px]">
          {renderCodeWithCursor()}
        </div>
      </div>

      {/* Floating elements around the code */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm animate-bounce"></div>
      <div
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full blur-sm animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 -right-6 w-4 h-4 bg-green-500/20 rounded-full blur-sm animate-bounce"
        style={{ animationDelay: "4s", animationDuration: "4s" }}
      ></div>
    </div>
  )
}

export default TypewriterCode