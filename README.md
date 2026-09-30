# Terkoiz — Official Artist & Promotional Hub

[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-00f2fe?style=flat&logo=github)](https://zankiru.github.io/terkoiz-web/)

A cyber-electronic promotional portfolio and discography web application designed and built for EDM producer and DJ **Terkoiz**. 

The application blends interactive audio engineering with modern web development, featuring dynamic music streaming embeds, an interactive Web Audio API synthesizer rig, and real-time audio-reactive canvas visualizers.

---

## 🎧 About the Artist

**Terkoiz** is an EDM producer crafting tracks across heavy bass music, wave, lo-fi, and atmospheric soundscapes. 

* **Spotify:** [Terkoiz on Spotify](https://open.spotify.com/artist/7HGOpepWDPYxAQPYqq2H21?si=hYUuXw3iT_6SJJdBtqRiUg)
* **SoundCloud:** [terkoizmusic2](https://soundcloud.com/terkoizmusic2)
* **Twitch:** [terkoizedm](https://twitch.tv/terkoizedm)

---

## ✨ Features

* **Real-Time Canvas Visualizer:** Dynamic multi-tiered sine wave visualizer rendered on an HTML5 `<canvas>` using ambient mathematical drift and live waveform reaction.
* **Studio Mini-Rig (Web Audio API):** Browser-native sound synthesis engine delivering real-time sound effects (808 Sub Kick, Cyber Reese Bass, Neon Pluck, and Laser Noise Sweeps) without external audio files. 
  * Playable via mouse clicks or hardware keyboard shortcuts (`1` - `4`).
  * Signals route directly through a shared `AnalyserNode` to drive visualizer displacement.
* **Interactive Discography Deck:** Filterable track listing (`All`, `Originals`, `Remixes`) with responsive on-demand embedded streaming players from SoundCloud and Spotify.
* **Cyber-Dark Aesthetic:** Designed with a dark neon interface using **Tailwind CSS v4** `@theme` variables, glassmorphism panel backdrops, and typography powered by *Syne*, *Inter*, and *JetBrains Mono*.
* **Automated CI/CD:** Fully automated build and deployment pipelines configured with **GitHub Actions** deploying directly to GitHub Pages.

---

## 🛠️ Tech Stack

* **Framework:** [React 19](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Audio Engine:** Web Audio API (`AudioContext`, `AnalyserNode`, `BiquadFilterNode`, `OscillatorNode`)
* **Graphics:** HTML5 Canvas (`2D Context`, `requestAnimationFrame`)
* **Deployment:** GitHub Pages & GitHub Actions
