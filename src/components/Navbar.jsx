import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 cyber-panel border-b border-cyber-border z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-200">
      <a
        href="#hero"
        className="font-syne font-extrabold text-lg md:text-xl tracking-widest text-white hover:text-neon-cyan transition-colors"
      >
        TERKOIZ
      </a>

      <div className="flex items-center gap-6 md:gap-8 text-xs font-mono uppercase tracking-wider text-neutral-400">
        <a href="#tracks" className="hover:text-neon-cyan transition-colors">
          Tracks
        </a>
        <a href="#studio" className="hover:text-neon-cyan transition-colors">
          Studio Rig
        </a>
        <a href="#about" className="hover:text-neon-cyan transition-colors">
          About
        </a>
        <a
          href="https://twitch.tv/terkoizedm"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-neon-magenta hover:bg-purple-500/20 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Twitch Live
        </a>
      </div>
    </nav>
  );
}