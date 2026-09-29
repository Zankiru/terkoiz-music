import React from "react";

export default function About() {
  const socials = [
    {
      name: "Spotify",
      desc: "Listen on Spotify",
      url: "https://open.spotify.com/artist/7HGOpepWDPYxAQPYqq2H21?si=hYUuXw3iT_6SJJdBtqRiUg",
      color: "#1db954",
      badge: "ARTIST",
    },
    {
      name: "SoundCloud",
      desc: "Stream free on SoundCloud",
      url: "https://soundcloud.com/terkoizmusic2",
      color: "#ff5500",
      badge: "AUDIO",
    },
    {
      name: "Twitch",
      desc: "Live sets and production streams",
      url: "https://twitch.tv/terkoizedm",
      color: "#9146ff",
      badge: "LIVE",
    },
  ];

  return (
    <section
      id="about"
      className="px-6 md:px-16 max-w-5xl mx-auto py-16 relative z-10 border-t border-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bio */}
        <div>
          <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest block mb-1">
            Identity
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-6">
            The Sound of Terkoiz
          </h2>
          <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-4">
            Terkoiz is an EDM producer working across bass music, lo-fi, and
            heavy atmospheric textures — blending driving energy with deep sonic
            grit.
          </p>
          <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-6">
            Catch live modular experiments and set streams directly on Twitch,
            or dig into the discography on Spotify and SoundCloud.
          </p>

          <div className="flex flex-wrap gap-2">
            {["EDM", "Lo-fi", "Wave", "Heavy Bass", "Originals"].map(
              (genre) => (
                <span
                  key={genre}
                  className="text-xs font-mono text-neutral-300 border border-white/10 bg-cyber-surface px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Social Cards */}
        <div className="flex flex-col gap-4">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="cyber-panel p-4 rounded-xl flex items-center justify-between group hover:border-white/20 transition-all hover:translate-x-1"
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-10 px-3 min-w-[70px] rounded-lg flex items-center justify-center font-mono font-bold text-[10px] tracking-wider leading-none shrink-0"
                  style={{
                    backgroundColor: `${item.color}20`,
                    color: item.color,
                  }}
                >
                  {item.badge}
                </div>
                <div>
                  <span className="font-syne font-bold text-sm text-white group-hover:text-neon-cyan transition-colors block">
                    {item.name}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              </div>
              <span className="text-neutral-500 group-hover:text-white transition-colors">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
