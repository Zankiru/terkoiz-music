import React from 'react';

export default function Hero() {
  return (
    <header id="hero" className="relative z-10 pt-36 md:pt-48 pb-20 px-6 md:px-16 max-w-5xl mx-auto">
      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2.5 mb-6">
        <span className="w-8 h-[1px] bg-neon-cyan" />
        <span className="text-neon-cyan text-xs font-mono tracking-[0.2em] uppercase font-semibold">
          Music · Remixes · Live
        </span>
      </div>

      {/* Main Typography */}
      <h1 className="font-syne font-extrabold text-6xl sm:text-8xl md:text-9xl tracking-tight leading-[0.9] mb-8 text-white select-none">
        TER<span className="stroke-cyber">KOIZ</span>
      </h1>

      {/* Bio lead */}
      <p className="font-inter font-light text-neutral-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
        Producer and remixer blending EDM, lo-fi, and heavy atmospheric textures.
        Stream the full catalogue across your platform of choice.
      </p>

      {/* Platform Buttons with Brand SVGs */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="https://open.spotify.com/artist/7HGOpepWDPYxAQPYqq2H21?si=hYUuXw3iT_6SJJdBtqRiUg"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg border border-[#1db954]/30 bg-[#1db954]/10 hover:bg-[#1db954]/20 text-[#1db954] text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2.5"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          Spotify
        </a>

        <a
          href="https://soundcloud.com/terkoizmusic2"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg border border-[#ff5500]/30 bg-[#ff5500]/10 hover:bg-[#ff5500]/20 text-[#ff5500] text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2.5"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M1.175 12.225c-.017 0-.034.002-.05.004a.39.39 0 00-.325.382l-.8 5.123.8 5.096c0 .22.18.4.4.4.217 0 .396-.18.396-.4l.91-5.096-.91-5.123a.397.397 0 00-.421-.386zm2.314-.742c-.025 0-.049.002-.073.006-.161.027-.282.165-.3.328L2.4 17.73l.716 4.89c.018.163.14.3.3.327.024.004.048.006.073.006.22 0 .4-.18.4-.4l.812-4.833-.812-5.037a.4.4 0 00-.4-.4zm17.51 1.55c-.196 0-.384.02-.567.057-.39-4.448-4.108-7.915-8.653-7.915-1.197 0-2.341.254-3.37.71-.38.163-.482.33-.486.478v15.37c.004.16.125.294.286.31h12.79c.77 0 1.394-.623 1.394-1.393V14.43a1.914 1.914 0 00-1.394-1.397z" />
          </svg>
          SoundCloud
        </a>

        <a
          href="https://twitch.tv/terkoizedm"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg border border-[#9146ff]/30 bg-[#9146ff]/10 hover:bg-[#9146ff]/20 text-[#9146ff] text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2.5"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
          </svg>
          Twitch
        </a>
      </div>
    </header>
  );
}