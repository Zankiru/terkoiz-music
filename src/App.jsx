import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Visualizer from './components/Visualizer';
import TrackList from './components/TrackList';
import BeatPad from './components/BeatPad';
import About from './components/About';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-neon-cyan selection:text-black">
      <Visualizer />

      {/* Cyber Glow Ambient Spheres */}
      <div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-neon-purple/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-10 right-[-100px] w-80 h-80 bg-neon-cyan/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Component Tree Flow */}
      <Navbar />
      <Hero />
      <TrackList />
      <BeatPad />
      <About />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-6 md:px-16 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <p>© 2026 Terkoiz. All music & brand rights reserved.</p>
        <p>
          Built & designed by{' '}
          <a
            href="https://github.com/Zankiru"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-neon-cyan transition-colors"
          >
            Zankiru
          </a>
        </p>
      </footer>
    </div>
  );
}