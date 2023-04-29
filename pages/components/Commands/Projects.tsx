import { PROJECTS } from '@/constants';
import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
function Projects() {
  return (
    <div className="divide-y divide-slate-400/25 ">
      {PROJECTS.map((proj, idx) => (
        <div key={idx} className="contact py-2 text-gray-400">
          <p className="text-white">
            <a
              className="font-medium underline"
              href={proj.link}
              target="_blank"
              rel="noreferrer"
            >
              <p className="flex items-center">
                {proj.label} <VscLinkExternal className="ml-3" />
              </p>
            </a>
          </p>
          <p>{proj.description}</p>
          <p>Stack: {proj.stack}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
