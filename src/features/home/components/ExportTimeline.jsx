import { Container, SectionHeader } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { EXPORT_STEPS } from '@/data';

export default function ExportTimeline() {
  return (
    <section className="py-section bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-gold-500/5 rounded-full blur-[110px] pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn>
          <SectionHeader
            badge="Global Logistics Framework"
            title="Streamlined Export Flow"
            subtitle="Our structured logistics pipeline ensures compliance, speed, and continuous tracking from our factories to your port."
          />
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line with premium micro gradients */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-900/10 via-gold-500/40 to-emerald-900/10 lg:-translate-x-px" />

          {EXPORT_STEPS.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'right' : 'left'}>
              <div className={`relative flex items-start gap-6 mb-12 lg:mb-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Step number bubble - extremely modern style */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-950 border-2 border-gold-500/35 shadow-[0_0_15px_rgba(200,168,80,0.15)] flex items-center justify-center z-10 hover:border-gold-500 transition-colors duration-300">
                  <span className="text-gold-400 font-display font-black text-xs">{step.step}</span>
                </div>

                {/* Content card with premium modern layout */}
                <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'lg:pr-0' : 'lg:pl-0'}`}>
                  <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 hover:border-gold-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(200,168,80,0.08)] transition-all duration-500 group">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600 block mb-2">
                      Stage {step.step}
                    </span>
                    <h3 className="text-lg font-display font-extrabold text-gray-900 mb-2 tracking-wide group-hover:text-emerald-950 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
