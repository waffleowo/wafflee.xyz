import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [typedCommand, setTypedCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const command = 'echo waffle.txt';
  const output = (
<div style={{ whiteSpace: 'pre-line' }}>
    <span className="text-white">Haii im waffle!</span>{"\n"}
    <span className="text-white">im Femboy Furry and good boy ;3 android dev and kinda web dev ;3</span>{"\n"}
    {"\n"}
    <span className="text-white">Homelab:</span>{"\n"}
    <span className="text-white">├─ HPE ProLiant DL380p</span>{"\n"}
    <span className="text-white">├─ Xeon E5-2690 v2</span>{"\n"}
    <span className="text-white">├─ 128GB RAM ECC DDR3</span>{"\n"}
    <span className="text-white">└─ 1x Lexar 480GB SSD 2x HDD 1TB and 2TB</span>{"\n"}
    {"\n"}
      <div style={{ marginTop: 12 }}>
        <a href="https://cutiepaws.org/@waffle" className="link-cutiepaws" target="_blank" rel="noopener noreferrer">[ cutiepaws ]</a>
        <a href="https://github.com/waffleowo" className="link-github" target="_blank" rel="noopener noreferrer">[ github ]</a>
        <a href="https://t.me/wafflemeowowo" className="link-telegram" target="_blank" rel="noopener noreferrer">[ telegram ]</a>
      </div>
    </div>
  );

  useEffect(() => {
    let i = 0;
    setTypedCommand('');
    setShowOutput(false);
    const typeInterval = setInterval(() => {
      setTypedCommand(command.slice(0, i + 1));
      i++;
      if (i === command.length) {
        clearInterval(typeInterval);
        setTimeout(() => setShowOutput(true), 500);
      }
    }, 70);
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="terminal-bg">
      <div className="terminal-window big-terminal liquid-glass">
        <div className="terminal-body terminal-left" style={{ fontFamily: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', minHeight: '60vh', paddingTop: 32 }}>
          <div style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span className="prompt text-green">waffle@owo</span>
            <span className="text-purple" style={{ marginLeft: 6 }}>~</span>
            <span className="text-blue" style={{ marginLeft: 6 }}>&gt;</span>
            <span className="text-white" style={{ marginLeft: 6 }}>{typedCommand}</span>
            <span className="text-" style={{ marginLeft: 6, animation: typedCommand.length === command.length ? 'none' : 'blink 1s steps(1) infinite' }}>&#9608;</span>
          </div>
          {showOutput && (
            <div style={{ fontSize: '1.15rem', fontWeight: 600, textAlign: 'left', marginBottom: 8 }}>{output}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
