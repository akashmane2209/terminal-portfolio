import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function CommandBar() {
  return (
    <p className="font-bold">
      <span className=" text-cyan-400">terminal-portfolio</span> on{' '}
      <span className=" text-purple-400">
        <FontAwesomeIcon
          height={14}
          width={12}
          icon={faCodeBranch}
          style={{ color: '#c084fc' }}
        />
        main{' '}
      </span>
      is 📦 <span className=" text-red-400">v0.1.0</span> via{' '}
      <span className=" text-green-400"> ⬢ v18.12.1</span>
    </p>
  );
}

export default CommandBar;
