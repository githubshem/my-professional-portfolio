import { useEffect, useRef, useState } from 'react';

const SPOTLIGHT = (x, y) =>
  `radial-gradient(600px at ${x}px ${y}px, rgba(255, 0, 110, 0.12), rgba(139, 10, 26, 0.08) 40%, transparent 80%)`;

const TRAIL_LENGTH = 18;

const CustomCursor = () => {
  // Touch devices never fire mousemove — skip the effect entirely
  const [isTouch] = useState(() => window.matchMedia('(hover: none)').matches);
  const spotlightRef = useRef(null);
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
    let points = [];
    let hasMoved = false;
    let frameId;

    const handleMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      hasMoved = true;
    };

    const handleMouseLeave = () => {
      points = [];
      hasMoved = false;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    const tick = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = SPOTLIGHT(target.x, target.y);
      }

      if (!reduceMotion && hasMoved) {
        // Sample the cursor every frame; idle frames converge the trail into a point
        points.push({ x: target.x, y: target.y });
        if (points.length > TRAIL_LENGTH) points.shift();

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = 'rgba(255, 0, 110, 0.8)';
        ctx.shadowBlur = 8;
        for (let i = 1; i < points.length; i++) {
          const fade = i / points.length;
          ctx.strokeStyle = `rgba(255, 0, 110, ${fade * 0.8})`;
          ctx.lineWidth = fade * 3;
          ctx.beginPath();
          ctx.moveTo(points[i - 1].x, points[i - 1].y);
          ctx.lineTo(points[i].x, points[i].y);
          ctx.stroke();
        }
      }

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
      {/* Mouse-following spotlight glow */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30"
        style={{ background: SPOTLIGHT(window.innerWidth / 2, window.innerHeight / 2) }}
      />
      {/* Trailing neon line */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-30"
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
