import React, { useRef, useEffect } from 'react';

const LetterGlitch = ({
  glitchSpeed = 35,
  smooth = true,
  centerVignette = true,
  outerVignette = true,
  glitchColors = ["#00E5FF", "#8A5CFF", "#FFFFFF"]
}) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Characters pool
    const chars = '0101010101ABCDEFGHJKLMNPQRSTUVWXYZ<>[]{}/\\*+=#@$%&~OMDIVEKAR_AI_MERN_AWS_';
    const fontSize = 16;
    let columns = Math.ceil(width / fontSize);
    let rows = Math.ceil(height / fontSize);

    // Grid matrix state
    let grid = [];

    const initGrid = () => {
      columns = Math.ceil(width / fontSize);
      rows = Math.ceil(height / fontSize);
      grid = [];
      for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c = 0; c < columns; c++) {
          row.push({
            char: chars[Math.floor(Math.random() * chars.length)],
            color: glitchColors[Math.floor(Math.random() * glitchColors.length)],
            opacity: Math.random() * 0.4 + 0.05,
            glitchTimer: Math.random() * 100
          });
        }
        grid.push(row);
      }
    };

    initGrid();

    let lastTime = performance.now();
    const updateInterval = 1000 / glitchSpeed;

    const render = (now) => {
      animationFrameId = requestAnimationFrame(render);

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;

      const delta = now - lastTime;
      const shouldGlitch = delta > updateInterval;

      if (shouldGlitch) {
        lastTime = now;
      }

      ctx.clearRect(0, 0, width, height);

      // Background base
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize - 2}px 'JetBrains Mono', monospace`;
      ctx.textBaseline = 'top';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
          const cell = grid[r][c];
          const x = c * fontSize;
          const y = r * fontSize;

          // Mouse proximity effect
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const isNearMouse = dist < 120;

          if (shouldGlitch) {
            cell.glitchTimer += 1;
            if (Math.random() < 0.08 || isNearMouse) {
              cell.char = chars[Math.floor(Math.random() * chars.length)];
              cell.color = isNearMouse 
                ? '#00E5FF' 
                : glitchColors[Math.floor(Math.random() * glitchColors.length)];
            }
          }

          let opacity = cell.opacity;
          if (isNearMouse) {
            opacity = Math.min(1, (1 - dist / 120) * 0.8 + 0.2);
          }

          ctx.fillStyle = cell.color;
          ctx.globalAlpha = opacity;
          ctx.fillText(cell.char, x, y);
        }
      }

      ctx.globalAlpha = 1;

      // Vignette effects
      if (centerVignette) {
        const centerGradient = ctx.createRadialGradient(
          width / 2, height / 2, 50,
          width / 2, height / 2, Math.max(width, height) * 0.5
        );
        centerGradient.addColorStop(0, 'rgba(5, 5, 5, 0.2)');
        centerGradient.addColorStop(1, 'rgba(5, 5, 5, 0.85)');
        ctx.fillStyle = centerGradient;
        ctx.fillRect(0, 0, width, height);
      }

      if (outerVignette) {
        const outerGradient = ctx.createRadialGradient(
          width / 2, height / 2, Math.max(width, height) * 0.3,
          width / 2, height / 2, Math.max(width, height) * 0.75
        );
        outerGradient.addColorStop(0, 'rgba(5, 5, 5, 0)');
        outerGradient.addColorStop(1, 'rgba(5, 5, 5, 0.95)');
        ctx.fillStyle = outerGradient;
        ctx.fillRect(0, 0, width, height);
      }
    };

    render(performance.now());

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [glitchSpeed, smooth, centerVignette, outerVignette, glitchColors]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default LetterGlitch;
