import React from 'react';
import CommandBar from './CommandBar';
import { useCommandContext } from '../context/CommandContext';
import Help from './Commands/Help';
import WhoAmI from './Commands/WhoAmI';
import Experience from './Commands/Experience';
import Education from './Commands/Education';
import Contact from './Commands/Contact';
import Projects from './Commands/Projects';

function CommandHistoryItem({ command }: { command: string }) {
  const { history,clearHistory } = useCommandContext();
  const isLatest = history[history.length - 1] === command;
  const getCommandComponent = () => {
    switch (command) {
      case 'help':
        return <Help />;
      case 'whoami':
        return <WhoAmI />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <Projects />;
      case 'gui':
        if (isLatest) {
          window.open('https://akashmane-gui.vercel.app/', '_blank');
        }
        break;
      case 'download':
        if (isLatest) {
          window.open('/akash_mane_resume.pdf', '_blank');
        }
        break;
      case 'clear':
        clearHistory()
        break;  
      default:
        return <p>zsh: command not found: {command}</p>;
    }
  };
  const component = getCommandComponent();
  return (
    <div className="mb-6">
      <CommandBar />
      <div className="input relative flex">
        <span className="text-red-400">➜</span>
        <p className="ml-2 font-medium">{command}</p>
      </div>
      {component && <div className=" px-3">{component}</div>}
    </div>
  );
}

function CommandHistory() {
  const { history } = useCommandContext();
  return (
    <div className="command-history">
      {history.map((cmd, idx) => (
        <CommandHistoryItem key={idx} command={cmd} />
      ))}
    </div>
  );
}

export default CommandHistory;
