import { Container } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { CERTIFICATIONS } from '@/data';

export default function TrustStrip() {
  return (
    <section className="py-10 bg-[#FAF9F6] border-b border-gold-500/10">
      <Container>
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            <span className="text-[10px] text-emerald-950/40 font-accent uppercase tracking-widest font-bold shrink-0">
              Approved Trade Credentials
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white border border-gold-500/10 shadow-[0_4px_20px_rgba(200,168,80,0.04)] hover:border-gold-500/30 transition-all duration-300 group"
                  title={cert.full}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-gold-500 transition-colors" />
                  <span className="text-xs font-bold text-emerald-950/80 font-accent uppercase tracking-wider">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
