import React from "react";
import type { Project } from "@/types";

export function ProjectImagePlaceholder({ project }: { project: Project }) {
  return (
    <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-surface-2 to-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden transition-colors duration-500">
      
      {/* Premium Diagonal Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] rotate-[-12deg] pointer-events-none select-none">
        <span className="text-[120px] font-black whitespace-nowrap tracking-tighter text-text">NAVNA</span>
      </div>

      {/* Subtle border ring */}
      <div className="absolute inset-3 border border-border/40 rounded-xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Label */}
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-md border border-accent/20">
          {project.type === "client" ? "Client Project" : project.type === "demo" ? "Demo" : "Experiment"}
        </span>

        {/* Project Name */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text capitalize mt-2">
          {project.title.replace(/-/g, ' ')}
        </h3>

        {/* Category */}
        <p className="text-sm font-semibold text-text-muted mt-1">
          {project.category}
        </p>
      </div>

    </div>
  );
}
