"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

const opacityMap = {
  subtle: 0.7,
  medium: 0.85,
  strong: 1,
};

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle,
    speed: 60 + Math.random() * 60,
    opacity: 0.1 + Math.random() * 0.15,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 1 + Math.random(),
  };
}


/* fixed speed of the background */
export function BeamsBackground({
  className,
  intensity = "strong",
}: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  const resizeCanvas = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    beamsRef.current = Array.from({ length: 30 }, () =>
      createBeam(width, height)
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resizeCanvas(canvas, ctx);
    window.addEventListener("resize", () => resizeCanvas(canvas, ctx));

    const animate = (now: number) => {
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = "blur(25px)";

      const beams = beamsRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let i = 0; i < beams.length; i++) {
        const beam = beams[i];

        beam.y -= beam.speed * delta;
        beam.pulse += beam.pulseSpeed * delta;

        if (beam.y + beam.length < -100) {
          const column = i % 3;
          const spacing = width / 3;
          beam.y = height + 100;
          beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
        }

        ctx.save();
        ctx.translate(beam.x, beam.y);
        ctx.rotate((beam.angle * Math.PI) / 180);

        const pulseOpacity =
          beam.opacity *
          (0.8 + Math.sin(beam.pulse) * 0.2) *
          opacityMap[intensity];

        const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
        gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
        gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulseOpacity * 0.5})`);
        gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulseOpacity})`);
        gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulseOpacity})`);
        gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulseOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
        ctx.restore();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", () => resizeCanvas(canvas, ctx));
    };
  }, [intensity]);

  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden bg-black", className)}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}