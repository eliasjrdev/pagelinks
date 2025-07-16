import { useEffect } from 'react';

export default function Animacao() {
  useEffect(() => {
    function createSparkle() {
      const sparkle = document.createElement('span');
      const sparkleEmojis = ['💻', '⌨️', '🖱️', '🎥', '🎧'];
      sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];

      const size = Math.random() * 12 + 16;
      sparkle.style.position = 'absolute';
      sparkle.style.left = Math.random() * 100 + 'vw';
      sparkle.style.top = Math.random() * 100 + 'vh';
      sparkle.style.fontSize = `${size}px`;
      sparkle.style.opacity = 0;
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = 0;
      sparkle.style.transition = 'opacity 1s, transform 1s';

      const isWinx = document.documentElement.classList.contains('winx');
      sparkle.style.filter = isWinx
        ? 'drop-shadow(0 0 16px #fff) drop-shadow(0 0 32px #f0abfc)'
        : 'drop-shadow(0 0 6px #f0abfc)';
      sparkle.style.color = isWinx ? '#fff' : '';
      sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;

      return sparkle;
    }

    function animateSparkle(sparkle, duration = 6000) {
      const start = performance.now();
      const startTop = parseFloat(sparkle.style.top);
      const drift = (Math.random() - 0.5) * 10;

      function frame(now) {
        const t = (now - start) / duration;
        if (t < 0.1) sparkle.style.opacity = t * 10;
        else if (t > 0.8) sparkle.style.opacity = (1 - t) * 5;
        else sparkle.style.opacity = 1;

        sparkle.style.top = `calc(${startTop}vh + ${t * 10 + drift * t}vh)`;

        if (t < 1) {
          requestAnimationFrame(frame);
        } else {
          sparkle.remove();
        }
      }

      requestAnimationFrame(frame);
    }

    function spawnSparkles() {
      const bg = document.getElementById('sparkle-bg');
      if (!bg) return;

      setInterval(() => {
        if (document.hidden) return;
        const sparkle = createSparkle();
        bg.appendChild(sparkle);
        animateSparkle(sparkle, 7000 + Math.random() * 3000);
      }, 600);
    }

    spawnSparkles();
  }, []);

  return <div id="sparkle-bg" className="absolute inset-0 -z-10 w-full h-full overflow-hidden"></div>;
}
