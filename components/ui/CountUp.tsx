"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  // Valor tal como se muestra al final, por ejemplo "+7000", "+500M" o "5".
  value: string;
  durationMs?: number;
};

// Separa el número del texto que lo rodea: "+500M" → ["+", 500, "M"].
function parse(value: string) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return null;
  return { prefix: match[1], target: Number(match[2]), suffix: match[3] };
}

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

// Cuenta desde 0 hasta el valor cuando el número entra en pantalla, una sola vez.
// - El HTML del servidor ya trae el valor final (sirve sin JavaScript y para buscadores).
// - Los lectores de pantalla leen siempre el valor final.
// - Con "reducir movimiento" activado en el sistema, no se anima.
// El número se actualiza directo en el DOM en cada cuadro, sin volver a renderizar React.
export function CountUp({ value, durationMs = 1400 }: CountUpProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = numberRef.current;
    const parsed = parse(value);
    if (!element || !parsed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const render = (n: number) => {
      element.textContent = `${parsed.prefix}${n}${parsed.suffix}`;
    };

    let frame = 0;
    render(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          render(Math.round(easeOutCubic(progress) * parsed.target));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      render(parsed.target);
    };
  }, [value, durationMs]);

  return (
    <span className="inline-grid">
      {/* El valor final invisible reserva el ancho, así el número no "salta" mientras cuenta. */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {value}
      </span>
      <span ref={numberRef} aria-hidden="true" className="col-start-1 row-start-1">
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
