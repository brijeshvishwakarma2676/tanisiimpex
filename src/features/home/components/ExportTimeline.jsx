import { useState } from 'react';
import { Container, SectionHeader } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { EXPORT_STEPS } from '@/data';

export default function ExportTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-section bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-slate-400/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-gold-500/5 rounded-full blur-[110px] pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn>
          <SectionHeader
            badge="Global Logistics Framework"
            title="Streamlined Export Flow"
            subtitle="Our structured logistics pipeline ensures compliance, speed, and continuous tracking from our factories to your port."
          />
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-16 relative z-10">
          {/* Left Navigation (Master) */}
          <div className="lg:w-5/12 flex flex-col space-y-2 relative">
            {/* Connecting line */}
            <div className="absolute left-[34px] top-8 bottom-8 w-px bg-slate-200 hidden lg:block" />
            
            {EXPORT_STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className={`relative flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 text-left border ${
                    isActive 
                      ? 'bg-white border-gold-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] scale-[1.02]' 
                      : 'border-transparent hover:bg-white/40'
                  }`}
                >
                  {/* Node */}
                  <div className={`relative z-10 w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                    isActive 
                      ? 'bg-[#0B1522] text-gold-400 shadow-[0_0_15px_rgba(11,21,34,0.2)]' 
                      : 'bg-white text-slate-400 border border-slate-200'
                  }`}>
                    {step.step}
                  </div>
                  
                  <span className={`font-display font-bold text-lg transition-colors duration-300 ${
                    isActive ? 'text-[#0B1522]' : 'text-slate-500'
                  }`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Detail Panel (Detail) */}
          <div className="lg:w-7/12">
            <FadeIn key={activeStep} direction="up" className="h-full">
              <div className="bg-white rounded-[2rem] p-8 lg:p-14 border border-slate-100 shadow-[0_20px_60px_rgba(11,21,34,0.05)] relative overflow-hidden h-full min-h-[400px] flex flex-col justify-center">
                {/* Huge Background Number */}
                <div className="absolute -bottom-6 -right-6 text-[280px] font-black text-slate-50 opacity-70 pointer-events-none select-none font-display leading-none">
                  0{EXPORT_STEPS[activeStep].step}
                </div>
                
                <div className="relative z-10 max-w-xl">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-xs font-bold uppercase tracking-widest mb-6 border border-gold-500/20">
                    Stage {EXPORT_STEPS[activeStep].step}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-display font-extrabold text-[#0B1522] mb-6 leading-tight">
                    {EXPORT_STEPS[activeStep].title}
                  </h3>
                  <p className="text-lg text-slate-600 font-body leading-relaxed">
                    {EXPORT_STEPS[activeStep].description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
