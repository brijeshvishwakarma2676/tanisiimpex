import { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { Globe, Package, Users, Award } from 'lucide-react';
import { STATS } from '@/data';

const statIcons = [Globe, Package, Users, Award];

function CountUp({ end, suffix = '', duration = 2000 }) {
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
            const eased = 1 - Math.pow(1 - progress, 4);
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

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/4 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="rounded-3xl bg-white border border-gold-500/12 shadow-[0_8px_40px_-12px_rgba(200,168,80,0.08)] grid grid-cols-2 lg:grid-cols-4 divide-y-[1px] lg:divide-y-0 lg:divide-x-[1px] divide-gold-500/10">
            {STATS.map((stat, i) => {
              const Icon = statIcons[i] || Award;
              return (
                <div
                  key={i}
                  className={`relative text-center py-10 px-6 group overflow-hidden ${i >= 2 ? 'pt-10 lg:pt-10' : ''} ${i === 1 ? 'pt-10 sm:pt-10' : ''}`}
                >
                  {/* Hover gold glow spot */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gold-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 space-y-2">
                    <div className="flex justify-center mb-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-950/5 border border-emerald-950/8 flex items-center justify-center group-hover:bg-emerald-950 group-hover:border-emerald-950 transition-all duration-300">
                        <Icon size={16} className="text-emerald-700 group-hover:text-gold-400 transition-colors duration-300" />
                      </div>
                    </div>

                    <span className="text-[9px] uppercase font-bold tracking-widest text-gold-600 block">
                      Verified Metric
                    </span>

                    <div className="text-4xl lg:text-5xl font-display font-black text-emerald-950 font-ticker leading-none">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>

                    <p className="text-xs text-emerald-950/50 font-body max-w-[140px] mx-auto leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
