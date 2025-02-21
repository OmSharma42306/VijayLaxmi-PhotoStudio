import React, { useState, useRef, useEffect } from 'react';
import {  Shield, ShieldAlert } from 'lucide-react';

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    '[ SYSTEM INITIALIZED - SECURE CONNECTION ESTABLISHED ]',
    '[ WELCOME TO NAVEEN TELASANG\'S SECURE TERMINAL ]',
    '[ Type "help" to access available commands ]'
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  const commands = {
    help: () => `[ AVAILABLE COMMANDS ]
╔══════════════════════════════════════════════════╗
║  SECURITY CLEARANCE LEVEL: AUTHORIZED ACCESS     ║
╚══════════════════════════════════════════════════╝

[>] about         - Access biographical data
[>] contact       - Secure communication channels
[>] experience    - Professional engagement history
[>] education     - Academic credentials
[>] skills        - Technical capabilities
[>] certifications- Security clearances
[>] projects      - Classified operations
[>] clear         - Purge terminal
[>] help          - Command directory

[ END OF SECURE TRANSMISSION ]`,

    about: () => `╔══════════════════════════════════════════════════╗
║             SOC ANALYST | DFIR                    ║
║        SECURITY CLEARANCE: TOP LEVEL             ║
╚══════════════════════════════════════════════════╝

[ENCRYPTED DATA DECRYPTED SUCCESSFULLY]

OPERATIVE PROFILE
════════════════
Expert SOC Analyst and Incident Responder with 
specialized training in threat detection, analysis, 
and mitigation. Proven track record in strengthening 
organizational security posture and safeguarding 
mission-critical assets.

[END OF SECURE FILE]`,

    contact: () => `╔══════════════════════════════════════════════════╗
║         SECURE COMMUNICATION CHANNELS            ║
╚══════════════════════════════════════════════════╝

[ENCRYPTED CONTACT PROTOCOLS]

📡 SIGNAL: +91 7892376004
🔐 SECURE EMAIL: naveentelasang20@gmail.com
🌐 ENCRYPTED NETWORK: LinkedIn [CLASSIFIED]

[TRANSMISSION END]`,

    experience: () => `╔══════════════════════════════════════════════════╗
║         CLASSIFIED OPERATION HISTORY             ║
╚══════════════════════════════════════════════════╝

[ACCESS GRANTED - LEVEL 3 CLEARANCE]

🔒 OPERATION: CYBER-DEFENSE | APR 2024 - JUL 2024
   LOCATION: Internship Studio, Jamkhandi
   OBJECTIVES:
   ▸ Security audit implementation
   ▸ Framework development [CLASSIFIED]
   ▸ Network defense optimization

🔒 OPERATION: CYBER-SHIELD | NOV 2024 - FEB 2025
   LOCATION: Acmegrade
   OBJECTIVES:
   ▸ Security tool development
   ▸ Cryptographic implementation
   ▸ Network penetration assessment

[END OF CLASSIFIED DATA]`,

    education: () => `╔══════════════════════════════════════════════════╗
║         SECURITY TRAINING CREDENTIALS           ║
╚══════════════════════════════════════════════════╝

[EDUCATIONAL RECORDS ACCESSED]

🔐 KLEIT (VTU) | 2024-2026
   ADVANCED SECURITY PROTOCOLS
   ▸ Master of Computer Applications
   ▸ Specialized Security Implementation
   ▸ Advanced Defense Mechanisms

🔐 Rani Channamma University | 2021-2024
   FOUNDATIONAL SECURITY TRAINING
   ▸ Bachelors of Computer Applications
   ▸ Security Rating: 7.6

[END OF RECORDS]`,

    skills: () => `╔══════════════════════════════════════════════════╗
║         OPERATIVE SKILL ASSESSMENT              ║
╚══════════════════════════════════════════════════╝

[CAPABILITY ANALYSIS]

⚡ SECURITY ARSENAL
   ▸ Kali Tools [MASTERED]
   ▸ SOC Operations [ADVANCED]
   ▸ Digital Forensics [EXPERT]

⚡ TECHNICAL PROTOCOLS
   ▸ Operating Systems
   ▸ Network Security
   ▸ OWASP Framework
   ▸ Cryptographic Systems
   ▸ Python Implementation

[END OF ASSESSMENT]`,

    certifications: () => `╔══════════════════════════════════════════════════╗
║         SECURITY CLEARANCE DOCUMENTS           ║
╚══════════════════════════════════════════════════╝

[VERIFICATION COMPLETE]

🏴‍☠️ Advanced Aquatic Operations: 15+ Years
🏴‍☠️ Cyber Security Proficiency: VERIFIED

[DOCUMENT END]`,

    projects: () => `╔══════════════════════════════════════════════════╗
║         CLASSIFIED PROJECT FILES                ║
╚══════════════════════════════════════════════════╝

[PROJECT ACCESS GRANTED]

⚔️ OPERATION: HIRE-HIGHER
   ▸ Secure Hiring Platform
   ▸ Implementation: CLASSIFIED
   ▸ Status: ACTIVE

[END OF PROJECT FILES]`,

    clear: () => {
      setHistory([]);
      return '';
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const commandFn = commands[trimmedCmd as keyof typeof commands];
    
    if (commandFn) {
      return commandFn();
    }
    return `[ERROR] Command not found: ${cmd}
[SUGGESTION] Execute "help" for available commands.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const result = handleCommand(input);
    setHistory(prev => [...prev, `> ${input}`, result]);
    setInput('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="min-h-screen bg-[#000000] text-[#00ff00] p-4 font-mono relative overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-[#00ff00] animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="flex items-center gap-2 mb-4 bg-black/80 p-4 rounded-t-lg border border-[#00ff00]/30">
          <Shield className="w-6 h-6 animate-pulse" />
          <h1 className="text-xl font-bold">SECURE TERMINAL</h1>
          <ShieldAlert className="w-6 h-6 ml-auto animate-pulse" />
        </div>
        
        <div className="bg-black/80 rounded-b-lg p-6 min-h-[60vh] max-h-[80vh] overflow-y-auto shadow-lg border border-[#00ff00]/30">
          {history.map((line, i) => (
            <div 
              key={i} 
              className="whitespace-pre-wrap mb-3 animate-fadeIn"
              style={{
                animation: `fadeIn 0.3s ease-in-out ${i * 0.1}s`
              }}
            >
              {line}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex gap-2 bg-black/80 p-3 rounded-lg border border-[#00ff00]/30">
          <span className="text-[#00ff00]">[ROOT]</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[#00ff00] caret-[#00ff00]"
            autoFocus
          />
          <span className={`w-2 h-5 bg-[#00ff00] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}></span>
        </form>
      </div>
    </div>
  );
}

export default App;