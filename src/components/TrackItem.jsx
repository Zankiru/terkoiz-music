import React from 'react';

export default function TrackItem({ track, index, isExpanded, onToggle }) {
  return (
    <div
      className={`cyber-panel rounded-xl border transition-all duration-300 overflow-hidden ${
        isExpanded
          ? 'border-neon-cyan/50 shadow-[0_0_20px_rgba(0,242,254,0.15)]'
          : 'border-cyber-border hover:border-white/20'
      }`}
    >
      <div
        onClick={onToggle}
        className="p-4 md:p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="font-mono text-xs text-neutral-500 w-6">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="truncate">
            <h4 className="font-syne font-semibold text-sm md:text-base text-white truncate">
              {track.title}
            </h4>
            <p className="text-xs text-neutral-400 font-mono">
              {track.artist} · {track.year}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${
              track.type === 'Original'
                ? 'border-neon-purple/40 bg-neon-purple/10 text-neon-magenta'
                : 'border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan'
            }`}
          >
            {track.type}
          </span>
          <span className="font-mono text-xs text-neutral-400 hidden sm:inline">
            {track.duration}
          </span>
          <button className="text-xs font-mono text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors">
            {isExpanded ? 'CLOSE' : 'PLAY'}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 pt-0 border-t border-white/5 bg-cyber-dark/50">
          <iframe
            src={track.embedUrl}
            title={track.title}
            width="100%"
            height={track.platform === 'spotify' ? '152' : '120'}
            allow="autoplay; encrypted-media"
            className="rounded-lg mt-3"
            frameBorder="0"
          />
        </div>
      )}
    </div>
  );
}