import React, { useState, useEffect } from 'react';
import { audioEngine } from '../audio/audioEngine';

export default function BeatPad() {
  const [activePad, setActivePad] = useState(null);
  const [volume, setVolume] = useState(0.5);

  const pads = [
    { id: 1, key: '1', label: 'KICK 808', action: () => audioEngine.triggerKick(), tag: 'SUB' },
    { id: 2, key: '2', label: 'CYBER BASS', action: () => audioEngine.triggerBass(), tag: 'SAW' },
    { id: 3, key: '3', label: 'NEON PLUCK', action: () => audioEngine.triggerPluck(), tag: 'LEAD' },
    { id: 4, key: '4', label: 'LASER FX', action: () => audioEngine.triggerLaser(), tag: 'NOISE' },
  ];

  const triggerPad = (id, action) => {
    setActivePad(id);
    action();
    setTimeout(() => setActivePad(null), 180);
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    audioEngine.setVolume(newVol);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const match = pads.find((p) => p.key === e.key);
      if (match) { 
        triggerPad(match.id, match.action);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="studio" className="px-6 md:px-16 max-w-5xl mx-auto py-16 relative z-10 border-t border-white/5">
      <div className="cyber-panel p-6 rounded-2xl shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest block mb-1">
              Audio-Reactive Synthesizer
            </span>
            <h3 className="font-syne font-bold text-2xl text-white">
              Studio Mini-Rig
            </h3>
          </div>

          {/* Volume Control Bar */}
          <div className="flex items-center gap-3 bg-cyber-surface px-4 py-2 rounded-xl border border-white/10">
            <span className="text-xs font-mono text-neutral-400">VOL</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 md:w-32 accent-neon-cyan cursor-pointer"
            />
            <span className="text-xs font-mono text-neon-cyan min-w-[32px] text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {pads.map((pad) => {
            const isActive = activePad === pad.id;
            return (
              <button
                key={pad.id}
                onClick={() => triggerPad(pad.id, pad.action)}
                className={`relative h-24 rounded-xl flex flex-col justify-between p-4 text-left transition-all duration-150 border cursor-pointer select-none active:scale-95 ${
                  isActive
                    ? 'bg-neon-cyan/25 border-neon-cyan shadow-[0_0_30px_rgba(0,242,254,0.45)]'
                    : 'bg-cyber-surface border-cyber-border hover:border-neon-purple/50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono tracking-wider text-neutral-400">
                    {pad.tag}
                  </span>
                  <span className="text-[10px] font-mono border border-white/10 bg-white/5 px-1.5 py-0.5 rounded text-neutral-300">
                    {pad.key}
                  </span>
                </div>
                <span className="font-syne font-bold text-sm tracking-wide text-white">
                  {pad.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}