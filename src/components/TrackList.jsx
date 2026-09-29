import React, { useState } from 'react';
import { TRACKS_DATA } from '../data/tracks';
import TrackItem from './TrackItem';

export default function TrackList() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const filteredTracks =
    activeFilter === 'All'
      ? TRACKS_DATA
      : TRACKS_DATA.filter((t) => t.type === activeFilter);

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tracks" className="px-6 md:px-16 max-w-5xl mx-auto py-16 relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div>
          <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest block mb-1">
            Discography
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
            Tracks
          </h2>
        </div>

        <div className="flex gap-2">
          {['All', 'Original', 'Remix'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-neon-purple/20 border-neon-purple text-neon-magenta shadow-[0_0_15px_rgba(123,108,255,0.3)]'
                  : 'bg-cyber-surface border-cyber-border text-neutral-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {filteredTracks.map((track, index) => (
          <TrackItem
            key={track.id}
            track={track}
            index={index}
            isExpanded={expandedId === track.id}
            onToggle={() => toggle(track.id)}
          />
        ))}
      </div>
    </section>
  );
}