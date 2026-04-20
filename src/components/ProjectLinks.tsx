"use client";

import { track } from "../lib/analytics";

interface Props {
  projectTitle: string;
  live?: string;
  github?: string;
}

export default function ProjectLinks({ projectTitle, live, github }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track.livePreviewClick(projectTitle)}
          className="text-white hover:text-[#a3ff33] transition-colors text-lg font-bold flex items-center justify-between group"
        >
          Live Preview <span className="group-hover:translate-x-2 transition-transform opacity-50 group-hover:opacity-100">→</span>
        </a>
      )}
      {live && github && <div className="h-[1px] w-full bg-white/10" />}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track.githubClick(projectTitle)}
          className="text-white hover:text-[#a3ff33] transition-colors text-lg font-bold flex items-center justify-between group"
        >
          Source Code <span className="group-hover:translate-x-2 transition-transform opacity-50 group-hover:opacity-100">→</span>
        </a>
      )}
    </div>
  );
}
