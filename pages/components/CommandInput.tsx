import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import React, {
  useEffect,
  useRef,
  KeyboardEvent,
  ChangeEvent,
  useState
} from 'react';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import { useCommandContext } from '../context/CommandContext';
import CommandBar from './CommandBar';

function CommandInput() {
  const commandInputRef = useRef<HTMLInputElement>(null);
  const [isExecutable, setIsExecutable] = useState(false);
  const [suggestion, setSuggestion] = useState<string | undefined>('');
  useOutsideAlerter(commandInputRef, () => {
    focusInput();
  });
  const { getMatchingCmd, executeCommand, clearHistory, history } =
    useCommandContext();
  const [commandIndex, setCommandIndex] = useState<number>(history.length);
  useEffect(() => {
    focusInput();
  }, []);
  const focusInput = () => {
    if (commandInputRef?.current) {
      commandInputRef.current.focus();
    }
  };
  useEffect(() => {
    if (commandInputRef.current) {
      commandInputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && commandInputRef.current?.value) {
      executeCommand(commandInputRef.current.value);
      commandInputRef.current.value = '';
      setSuggestion(undefined);
      setCommandIndex(history.length + 1);
    } else if (
      e.code === 'ArrowRight' &&
      commandInputRef.current?.value &&
      suggestion?.length
    ) {
      commandInputRef.current.value = suggestion;
      setIsExecutable(true);
    } else if (e.code === 'KeyK' && e.metaKey) {
      clearHistory();
      setCommandIndex(0);
      setSuggestion(undefined);
    } else if (e.code === 'ArrowUp') {
      const newIdx = commandIndex - 1 <= 0 ? 0 : commandIndex - 1;

      setCommandByIndex(newIdx);
    } else if (e.code === 'ArrowDown') {
      setCommandByIndex(commandIndex + 1);
    }
  };
  const setCommandByIndex = (idx: number) => {
    if (idx > history.length - 1 && commandInputRef.current) {
      setCommandIndex(history.length);
      return (commandInputRef.current.value = '');
    }

    setCommandIndex(idx);
    const cmd = history[idx];
    if (cmd && commandInputRef.current) commandInputRef.current.value = cmd;
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    if (!value.length) return setSuggestion(undefined);
    const suggestion = getMatchingCmd(value);
    if (suggestion === value) setIsExecutable(true);
    else setIsExecutable(false);
    setSuggestion(suggestion);
  };
  return (
    <div>
      <CommandBar />
      <div className="input relative flex">
        <span className=" text-green-400">➜</span>
        <input
          aria-label="command input"
          onKeyDown={handleKeyDown}
          ref={commandInputRef}
          onChange={handleOnChange}
          type="text"
          className={`z-10 ml-2 flex-1 border-none bg-transparent ${
            isExecutable ? 'text-green-300' : 'text-white'
          } outline-none`}
        />
        {suggestion && (
          <p className="sugesstion absolute left-4 opacity-30">{suggestion}</p>
        )}
      </div>
    </div>
  );
}

export default CommandInput;
