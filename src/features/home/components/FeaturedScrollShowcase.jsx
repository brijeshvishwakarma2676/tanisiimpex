import { motion } from 'framer-motion';
import { CATEGORIES } from '@/data';
import { Container, SectionHeader } from '@/components/ui';

export default function FeaturedScrollShowcase() {
    return (
        <section className="py-section relative overflow-hidden bg-emerald-950 noise">
            <Container>
                <SectionHeader 
                    badge="Featured Exports" 
                    title="Premium Export Quality" 
                    subtitle="Explore our top exported commodities sourced directly from the finest regions of India." 
                    dark 
                />
                
                <div className="flex flex-col items-center gap-16 md:gap-32 relative z-10 max-w-4xl mx-auto py-12">
                    {CATEGORIES.slice(0, 4).map((cat, i) => (
                        <Card i={i} cat={cat} key={cat.id} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

function Card({ cat, i }) {
    return (
        <motion.div
            className="sticky top-24 md:top-32 w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-card border border-white/10 will-change-transform transform-gpu"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3, once: true }}
            variants={{
                offscreen: { y: 80, opacity: 0, scale: 0.95 },
                onscreen: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { type: "spring", bounce: 0.3, duration: 0.8 }
                }
            }}
        >
            <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover pointer-events-none" 
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 pointer-events-none">
                <span className="text-gold-400 font-accent uppercase tracking-widest text-xs font-bold block mb-2">{cat.id}</span>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{cat.name}</h3>
                <p className="text-white/80 max-w-lg text-sm md:text-base leading-relaxed">{cat.tagline}</p>
            </div>
        </motion.div>
    )
}
