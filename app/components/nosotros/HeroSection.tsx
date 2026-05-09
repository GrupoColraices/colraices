"use client";
 
import Link from "next/link";
import { useEffect, useRef } from "react";
 
type MovingCircle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};
 
const circleClass =
  "pointer-events-none absolute z-[1] rounded-full bg-[#FFC107]/[0.08] will-change-transform";
 
export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const circleRefs = useRef<Array<HTMLDivElement | null>>([]);
 
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
 
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
 
    const getSize = () => {
      const rect = section.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    };
 
    let { width, height } = getSize();
 
    const getRadius = () => {
      if (width < 640) return 70;
      if (width < 1024) return 88;
      return 110;
    };
 
    const safeSpeed = (v: number, min = 0.26) => {
      const sign = v >= 0 ? 1 : -1;
      return Math.abs(v) < min ? sign * min : v;
    };
 
    const createCircles = (): MovingCircle[] => {
      const r = getRadius();
      const cx = width / 2;
      const cy = height / 2;
      return [
        // Arriba-izquierda  (0.44 * 0.8 = 0.35 | 0.36 * 0.8 = 0.29)
        { x: cx * 0.35, y: cy * 0.35, vx:  0.35, vy:  0.29, r },
        // Arriba-derecha    (0.40 * 0.8 = 0.32 | 0.40 * 0.8 = 0.32)
        { x: cx * 1.65, y: cy * 0.35, vx: -0.32, vy:  0.32, r },
        // Abajo-izquierda   (0.38 * 0.8 = 0.30 | 0.42 * 0.8 = 0.34)
        { x: cx * 0.35, y: cy * 1.65, vx:  0.30, vy: -0.34, r },
        // Abajo-derecha     (0.42 * 0.8 = 0.34 | 0.38 * 0.8 = 0.30)
        { x: cx * 1.65, y: cy * 1.65, vx: -0.34, vy: -0.30, r },
      ];
    };
 
    let circles = createCircles();
 
    const keepInside = (circle: MovingCircle) => {
      const minX = circle.r;
      const maxX = width - circle.r;
      const minY = circle.r;
      const maxY = height - circle.r;
 
      if (circle.x < minX) { circle.x = minX; circle.vx =  Math.abs(circle.vx); }
      if (circle.x > maxX) { circle.x = maxX; circle.vx = -Math.abs(circle.vx); }
      if (circle.y < minY) { circle.y = minY; circle.vy =  Math.abs(circle.vy); }
      if (circle.y > maxY) { circle.y = maxY; circle.vy = -Math.abs(circle.vy); }
 
      circle.vx = safeSpeed(circle.vx);
      circle.vy = safeSpeed(circle.vy);
    };
 
    const paintCircles = () => {
      circles.forEach((circle, index) => {
        const el = circleRefs.current[index];
        if (!el) return;
        const size = circle.r * 2;
        el.style.width  = `${size}px`;
        el.style.height = `${size}px`;
        el.style.transform = `translate3d(${circle.x - circle.r}px, ${circle.y - circle.r}px, 0)`;
      });
    };
 
    circles.forEach(keepInside);
    paintCircles();
 
    const resizeObserver = new ResizeObserver(() => {
      const size = getSize();
      width  = size.width;
      height = size.height;
      circles = createCircles();
      circles.forEach(keepInside);
      paintCircles();
    });
 
    resizeObserver.observe(section);
 
    if (prefersReducedMotion) {
      return () => resizeObserver.disconnect();
    }
 
    let animationFrame = 0;
    let lastTime = performance.now();
 
    const animate = (now: number) => {
      const delta = Math.min((now - lastTime) / 16.67, 2);
      lastTime = now;
 
      for (const circle of circles) {
        circle.x += circle.vx * delta;
        circle.y += circle.vy * delta;
        keepInside(circle);
      }
 
      for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
          const a = circles[i];
          const b = circles[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          const minDist = a.r + b.r;
 
          if (dist > 0 && dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = (minDist - dist) / 2;
 
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;
 
            const tx = -ny;
            const ty =  nx;
 
            const aTangent = a.vx * tx + a.vy * ty;
            const bTangent = b.vx * tx + b.vy * ty;
            const aNormal  = a.vx * nx + a.vy * ny;
            const bNormal  = b.vx * nx + b.vy * ny;
 
            a.vx = tx * aTangent + nx * bNormal;
            a.vy = ty * aTangent + ny * bNormal;
            b.vx = tx * bTangent + nx * aNormal;
            b.vy = ty * bTangent + ny * aNormal;
 
            a.vx = safeSpeed(a.vx);
            a.vy = safeSpeed(a.vy);
            b.vx = safeSpeed(b.vx);
            b.vy = safeSpeed(b.vy);
 
            keepInside(a);
            keepInside(b);
          }
        }
      }
 
      paintCircles();
      animationFrame = requestAnimationFrame(animate);
    };
 
    animationFrame = requestAnimationFrame(animate);
 
    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);
 
  return (
    <section
      ref={heroRef}
      id="ecosistema"
      className="relative flex h-[681.6px] w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#192440_0%,#293F77_100%)] font-['Montserrat',system-ui,sans-serif]"
    >
      {[0, 1, 2, 3].map((item) => (
        <div
          key={item}
          ref={(node) => { circleRefs.current[item] = node; }}
          className={circleClass}
          style={{ top: 0, left: 0 }}
        />
      ))}
 
      <div className="relative z-10 mx-auto flex w-full max-w-[1152px] flex-col items-center px-4 text-center">
        <h1 className="mb-[22px] w-full max-w-[1012px] text-center text-[48px] font-black leading-[52.8px] tracking-[-0.96px] max-lg:text-[42px] max-lg:leading-[46px] max-md:text-[34px] max-md:leading-[39px] max-sm:text-[30px] max-sm:leading-[35px]">
          <span className="text-white">
            Estás en el exterior. Trabajas, respondes
          </span>
          <br />
          <span className="text-[#FFC107]">
            y sigues presente en Colombia.
          </span>
        </h1>
 
        <p className="mb-[40px] max-w-[800px] text-center text-[16.8px] font-normal leading-[30.2px] tracking-[0px] text-white/70 max-md:text-[15px] max-md:leading-[26px]">
          <span className="font-bold text-white/75">
            Ese esfuerzo merece convertirse en tu patrimonio,
          </span>{" "}
          Por eso existimos: un ecosistema que te acompaña a cumplir tu meta de
          inversión en Colombia.
        </p>
 
        <div className="flex items-center justify-center gap-[16px] max-sm:w-full max-sm:flex-col">
          <Link
            href="#que-es"
            className="flex h-[56.24px] w-[236.86px] items-center justify-center rounded-full bg-[#FFC107] text-center text-[15.2px] font-bold leading-[25.8px] text-[#192440] transition duration-200 hover:scale-[1.02] max-sm:w-full"
          >
            Conoce el ecosistema
          </Link>
 
          <Link
            href="https://wa.me/15136479405?text=Hola%2C%20Colraices%20%F0%9F%91%8B%0AVengo%20desde%20la%20p%C3%A1gina%20%E2%80%9CConoce%20el%20Ecosistema%E2%80%9D%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20colombianos%20en%20el%20exterior."
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[56.24px] w-[236.86px] items-center justify-center rounded-full border border-white/55 bg-transparent text-center text-[15.2px] font-bold leading-[25.8px] text-white transition duration-200 hover:bg-white hover:text-[#192440] max-sm:w-full"
          >
            Habla con un asesor
          </Link>
        </div>
      </div>
    </section>
  );
}
