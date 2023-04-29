import { EXPERIENCES } from '@/constants';
import React from 'react';

function Experience() {
  return (
    <div className="divide-y divide-slate-400/25">
      {EXPERIENCES.map((exp, idx) => (
        <div key={idx} className="experience py-2">
          <div className="title mb-2 flex justify-between">
            <p className="text-white">
              {exp.title} @ {exp.company}
            </p>
            <p className="text-gray-500">
              {exp.duration.start} - {exp.duration.end}
            </p>
          </div>
          <div className=" text-xs text-gray-400">{exp.description()}</div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
