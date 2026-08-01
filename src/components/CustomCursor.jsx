import { useEffect, useRef, useState } from 'react';

/* --- Cursor spotlight: disabled 2026-08-01, kept for possible restore ---
   Four pieces move together — this constant, `spotlightRef`, the assignment
   at the top of tick(), and the <div> in the returned markup. Uncomment all
   four to bring the glow back.

const SPOTLIGHT = (x, y) =>
  `radial-gradient(600px at ${x}px ${y}px, rgba(255, 0, 110, 0.12), rgba(139, 10, 26, 0.08) 40%, transparent 80%)`;

--- end spotlight --- */

const HEX = '0123456789ABCDEF';
const MAX_PARTICLES = 140;
const SPAWN_SPEED = 1.5;
const DECAY = 0.014;
const GLYPH_GLOW = 10;

// Elements that want the cursor effect out of the way — e.g. the AWS card,
// whose torch beam reads better without glyphs falling across it.
const QUIET_SELECTOR = '[data-cursor-quiet]';

const CustomCursor = () => {
  // Touch devices never fire mousemove — skip the effect entirely
  const [isTouch] = useState(() => window.matchMedia('(hover: none)').matches);
  // const spotlightRef = useRef(null); // spotlight disabled — see note at top
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isTouch) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const prev = { x: target.x, y: target.y };
    let particles = [];
    let hasMoved = false;
    let quiet = false;
    let frameId;

    const handleMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      quiet = e.target instanceof Element && !!e.target.closest(QUIET_SELECTOR);
      hasMoved = true;
    };

    const handleMouseLeave = () => {
      particles = [];
      hasMoved = false;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    const tick = () => {
      // if (spotlightRef.current) {
      //   spotlightRef.current.style.background = quiet ? 'none' : SPOTLIGHT(target.x, target.y);
      // }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Over a quiet element, drop everything so the card's own effect reads alone
      if (quiet) {
        particles = [];
        prev.x = target.x;
        prev.y = target.y;
        frameId = requestAnimationFrame(tick);
        return;
      }

      if (!reduceMotion && hasMoved) {
        // Faster movement sheds more bytes; standing still sheds none
        const speed = Math.hypot(target.x - prev.x, target.y - prev.y);
        if (speed > SPAWN_SPEED && particles.length < MAX_PARTICLES) {
          particles.push({
            x: target.x + (Math.random() - 0.5) * 10,
            y: target.y + (Math.random() - 0.5) * 10,
            ch: HEX[(Math.random() * 16) | 0],
            vy: 0.35 + Math.random() * 0.5,
            life: 1,
            cyan: Math.random() > 0.55,
          });
        }

        ctx.font = '12px "JetBrains Mono", ui-monospace, monospace';
        ctx.shadowBlur = GLYPH_GLOW;
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.y += p.vy;
          p.life -= DECAY;
          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }
          const rgb = p.cyan ? '5, 217, 232' : '255, 0, 110';
          ctx.shadowColor = `rgba(${rgb}, 0.7)`;
          ctx.fillStyle = `rgba(${rgb}, ${p.life * 0.9})`;
          ctx.fillText(p.ch, p.x, p.y);
        }
        ctx.shadowBlur = 0;
      }

      prev.x = target.x;
      prev.y = target.y;
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Mouse-following spotlight glow — disabled, see note at top of file
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30"
        style={{ background: SPOTLIGHT(window.innerWidth / 2, window.innerHeight / 2) }}
      />
      */}
      {/* Trailing hex-byte exhaust */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-30"
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
