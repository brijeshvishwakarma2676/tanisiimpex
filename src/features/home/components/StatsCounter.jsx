import { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { STATS } from '@/data';

function CountUp({ end, suffix = '', duration = 2200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-[#FAF9F6] relative overflow-hidden">
      {/* Delicate grid pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Decorative luxury radial background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn>
          {/* Extremely modern light glass pane stats wrapper */}
          <div className="rounded-3xl glass-card-light border border-gold-500/10 p-8 lg:p-12 shadow-[0_12px_40px_-15px_rgba(200,168,80,0.06)] grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gold-500/10">
            {STATS.map((stat, i) => (
              <div key={i} className={`text-center space-y-2 ${i >= 2 ? 'pt-6 lg:pt-0' : ''} ${i === 1 ? 'pt-6 sm:pt-0' : ''} lg:px-6`}>
                <span className="text-[9px] uppercase font-bold tracking-widest text-gold-600 block mb-1">
                  Verified Metric
                </span>
                
                <div className="text-4xl lg:text-5xl font-display font-black text-emerald-950 tracking-tight">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                
                <p className="text-xs text-emerald-950/60 font-body max-w-[160px] mx-auto leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
