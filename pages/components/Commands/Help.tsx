import { COMMANDS, HELP_TEXT } from '@/constants';
import React from 'react';

function Help() {
  return (
    <div>
      <p className="mb-3">Available Commands</p>
      {COMMANDS.map((cmd, idx) => {
        return (
          <p className="mb-1" key={idx}>
            <span className=" inline-block  w-32">{cmd}</span>
            <span>{HELP_TEXT[cmd]}</span>
          </p>
        );
      })}
    </div>
  );
}

export default Help;
