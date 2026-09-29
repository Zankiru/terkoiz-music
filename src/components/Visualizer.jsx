import React, { useEffect, useRef } from 'react';
import { audioEngine } from '../audio/audioEngine';

export default function Visualizer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let idleStep = 0;

    // Generate floating background cyber dust
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      idleStep += 0.015;

      const audioData = audioEngine.getWaveformData();

      // 1. Draw floating particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `rgba(0, 242, 254, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw 3-layer tiered electric waveforms
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        ctx.lineWidth = layer === 0 ? 2 : 1;
        ctx.strokeStyle =
          layer === 0
            ? 'rgba(0, 242, 254, 0.5)'
            : layer === 1
            ? 'rgba(123, 108, 255, 0.3)'
            : 'rgba(192, 132, 252, 0.15)';

        const stepSize = Math.ceil(canvas.width / 140);

        for (let x = 0; x < canvas.width; x += stepSize) {
          let waveOffset =
            Math.sin(x * 0.003 + idleStep + layer * 1.5) * 22 +
            Math.cos(x * 0.007 + idleStep) * 14;

          if (audioData) {
            const dataIndex = Math.floor((x / canvas.width) * audioData.length);
            const byteValue = audioData[dataIndex] - 128;
            waveOffset += byteValue * (layer === 0 ? 1.6 : 0.9);
          }

          const y = canvas.height * 0.52 + waveOffset;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}