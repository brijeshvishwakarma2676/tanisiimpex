import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Container } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1';

const expandedTestimonials = [
  {
    quote: "Tanisi Impex has been our trusted partner for Indian spices. Their quality consistency and professional approach make them stand out in global logistics.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    author: "Ahmed Al-Rashid",
    role: "Procurement Director",
    company: "Gulf Foods Trading LLC"
  },
  {
    quote: "We've been sourcing Makhana and dry fruits from Tanisi Impex for 3 years. Exceptional quality, competitive pricing, and incredibly reliable delivery.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    author: "Sarah Mitchell",
    role: "Import Manager",
    company: "EuroHealth Foods"
  },
  {
    quote: "The team understands international standards perfectly. Their export documentation is flawless and shipments arrive precisely on schedule.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    author: "James Okonkwo",
    role: "CEO",
    company: "AfriTrade Distributors"
  },
  {
    quote: "Their custom OEM packaging solutions saved us thousands in repackaging fees. They deliver retail-ready products directly to our European warehouses.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    author: "Marcus Van Der Berg",
    role: "Supply Chain Lead",
    company: "Nordic Retail Network"
  },
  {
    quote: "The finest Basmati rice we've imported this decade. Tanisi Impex ensures strict QA frameworks that our premium customers demand.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    author: "Mei Lin",
    role: "Sourcing Executive",
    company: "Pacific Rim Grocers"
  },
  {
    quote: "From initial quotation to final port delivery, their communication is transparent. A highly professional Indian exporter.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    author: "Carlos Mendez",
    role: "Director of Operations",
    company: "LatAm Distributors"
  },
  {
    quote: "Their certifications (ISO, FSSAI, APEDA) gave us the confidence to place a container-load order. They delivered exactly as promised.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=150&q=80",
    author: "Elena Rostov",
    role: "Purchasing Manager",
    company: "Global Spice Corp"
  },
  {
    quote: "Tanisi Impex is scaling our household products category single-handedly. Best-in-class pricing without ever compromising on quality.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    author: "William Carter",
    role: "Category Manager",
    company: "NorthAm Essentials"
  },
  {
    quote: "A remarkably stable B2B portal and team. They handle complex Incoterms and multi-port shipments with complete ease.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    author: "Hassan Ali",
    role: "Global Logistics VP",
    company: "Mena Trade Alliance"
  }
];

const firstColumn = expandedTestimonials.slice(0, 3);
const secondColumn = expandedTestimonials.slice(3, 6);
const thirdColumn = expandedTestimonials.slice(6, 9);

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-slate-200">
      {/* Delicate background patterns */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Modern High-End Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[#0B1522]/10 shadow-sm text-[#0B1522] text-[10px] font-bold uppercase tracking-widest">
              International Recognition
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0B1522] tracking-tight">
            What Our Global Partners Say
          </h2>
          <p className="mt-5 text-[#0B1522]/60 font-body leading-relaxed max-w-lg mx-auto">
            Discover why leading supermarket networks, agricultural importers, and distributors across 50+ countries prefer Tanisi Impex.
          </p>
          
          {/* Gold Stars Rating Indicator */}
          <div className="flex items-center justify-center gap-1 pt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
            ))}
            <span className="text-xs font-bold text-[#0B1522]/80 ml-2 font-accent uppercase tracking-wider">
              5.0 Trade Rating
            </span>
          </div>
        </motion.div>

        {/* Marquee Columns */}
        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden relative">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={25} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </div>
      </Container>
    </section>
  );
}
