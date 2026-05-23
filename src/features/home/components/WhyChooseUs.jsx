import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export default function WhyChooseUs() {
  return (
    <FlowArt aria-label="Why Choose Tanisi Impex">
      {/* SECTION 1 */}
      <FlowSection aria-label="Institutional Trust" style={{ backgroundColor: '#0B1522', color: '#fff' }}>
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl lg:rounded-none m-[2vw] lg:m-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&w=2000&q=80" 
            alt="Global Shipping Port" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1522] via-[#0B1522]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1522] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">01 — Institutional Strengths</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h1 className="text-[clamp(3.5rem,10vw,12rem)] font-display font-bold leading-[0.85] uppercase tracking-tight drop-shadow-lg">
              Sovereign
              <br />
              Grade
              <br />
              Trust
            </h1>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-slate-300">
            We guarantee premium, reliable global operations by combining deep Indian production heritage with modern QA frameworks. No compromises.
          </p>
        </div>
      </FlowSection>

      {/* SECTION 2 */}
      <FlowSection aria-label="Certified Quality & Logistics" style={{ backgroundColor: '#FAF9F6', color: '#0B1522' }}>
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl lg:rounded-none m-[2vw] lg:m-0">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2000&q=80" 
            alt="Premium Indian Spices" 
            className="w-full h-full object-cover opacity-[0.15] mix-blend-multiply scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">02 — Compliance & Delivery</p>
          <hr className="my-[2vw] border-none border-t border-[#0B1522]/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-display font-bold leading-[0.85] uppercase tracking-tight text-[#0B1522]">
              Global
              <br />
              Scale.
              <br />
              Local
              <br />
              Roots.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-[#0B1522]/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 shadow-sm">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0B1522]">Certified Quality</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-slate-600">
                ISO, FSSAI, APEDA, and international certifications ensuring the highest product standards.
              </p>
            </div>
            <div className="min-w-[180px] flex-1 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 shadow-sm">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0B1522]">Reliable Logistics</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-slate-600">
                Partnered with top shipping lines for timely, safe delivery to any port worldwide.
              </p>
            </div>
            <div className="min-w-[180px] flex-1 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 shadow-sm">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0B1522]">Scalable Supply</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-slate-600">
                From sample orders to full container loads — we scale with your business growth.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* SECTION 3 */}
      <FlowSection aria-label="Economics & Support" style={{ backgroundColor: '#D5C4A1', color: '#0B1522' }}>
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl lg:rounded-none m-[2vw] lg:m-0">
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=2000&q=80" 
            alt="Global Export Logistics" 
            className="w-full h-full object-cover opacity-20 mix-blend-color-burn scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#D5C4A1] via-[#D5C4A1]/90 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B1522]">03 — Value Proposition</p>
          <hr className="my-[2vw] border-none border-t border-[#0B1522]/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-display font-bold leading-[0.85] uppercase tracking-tight text-[#0B1522]">
              Beyond
              <br />
              Borders.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-[#0B1522]/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1 bg-white/30 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-sm">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0B1522]">Competitive Pricing</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-[#0B1522]/80">
                Direct sourcing from farmers and manufacturers eliminates middlemen, offering best-in-class pricing.
              </p>
            </div>
            <div className="min-w-[180px] flex-1 bg-white/30 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-sm">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0B1522]">Custom Packaging</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-[#0B1522]/80">
                Private label and OEM packaging solutions tailored to your brand and market requirements.
              </p>
            </div>
            <div className="min-w-[180px] flex-1 bg-white/30 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-sm">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0B1522]">Dedicated Support</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-[#0B1522]/80">
                24/7 export advisory and after-sales support with a dedicated account manager.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>
    </FlowArt>
  );
}



