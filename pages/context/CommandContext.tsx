import React, { createContext, useState } from 'react';
import { COMMANDS } from '../../constants';

interface CommandContext {
  history: string[];
  executeCommand: (cmd: string) => void;
  clearHistory: () => void;
  getMatchingCmd: (cmd: string) => string | undefined;
  commands: readonly [
    'help',
    'whoami',
    'experience',
    'education',
    'projects',
    'contact',
    'download',
    'gui',
    'clear'
  ];
}

const CommandContext = createContext<CommandContext | null>(null);

function CommandContextProvider({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<string[]>([]);
  const executeCommand = (cmd: string) => {
    setHistory([...history, cmd]);
  };
  const clearHistory = () => setHistory([]);
  const getMatchingCmd = (cmd: string) => {
    return COMMANDS.find((c) => {
      const cSplit = c.slice(0, cmd.length);
      return cSplit === cmd;
    });
  };
  return (
    <CommandContext.Provider
      value={{
        history,
        executeCommand,
        clearHistory,
        getMatchingCmd,
        commands: COMMANDS
      }}
    >
      {children}
    </CommandContext.Provider>
  );
}

const useCommandContext = (): CommandContext => {
  const ctx = React.useContext(CommandContext);
  if (!ctx) {
    throw new Error(
      'useCommandContext must be used within CommandContextProvider'
    );
  }
  return ctx;
};

export { useCommandContext };
export default CommandContextProvider;
