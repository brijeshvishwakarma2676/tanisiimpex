import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from '@/data';
import { Container, SectionHeader } from '@/components/ui';
import { X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// Vibrant tailored color profiles for each category splash background
const CARD_PROFILES = {
  'indian-spices': { hueA: 340, hueB: 10, icon: '🌶️' },
  'agro-products': { hueA: 100, hueB: 140, icon: '🌾' },
  'makhana': { hueA: 60, hueB: 90, icon: '🥜' },
  'rice-grains': { hueA: 20, hueB: 40, icon: '🍚' }
};

export default function FeaturedScrollShowcase() {
    // Filter first 4 premium categories
    const featuredCats = CATEGORIES.filter(cat => CARD_PROFILES[cat.id]).slice(0, 4);
    
    // Lift state up so only one card is open at a time
    const [openCardIndex, setOpenCardIndex] = useState(null);

    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-emerald-950/95 noise">
            <Container>
                <SectionHeader 
                    badge="Featured Exports" 
                    title="Premium Export Quality" 
                    subtitle="Explore our top exported commodities sourced directly from the finest regions of India." 
                    dark 
                />
                
                <div className="mx-auto max-w-[1050px] pb-[80px] md:pb-[120px] w-full mt-12 md:mt-16">
                    {featuredCats.map((cat, i) => {
                        const profile = CARD_PROFILES[cat.id] || { hueA: 205, hueB: 245, icon: '📦' };
                        return (
                            <Card 
                                key={cat.id} 
                                i={i} 
                                cat={cat} 
                                hueA={profile.hueA} 
                                hueB={profile.hueB} 
                                icon={profile.icon}
                                isOpen={openCardIndex === i}
                                onToggle={() => setOpenCardIndex(openCardIndex === i ? null : i)}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

function Card({ cat, i, hueA, hueB, icon, isOpen, onToggle }) {
    const background = `linear-gradient(306deg, ${hueColor(hueA)}, ${hueColor(hueB)})`;

    return (
        <motion.div
            className={`card-container-${i} w-full flex justify-center items-center relative pt-8 md:pt-[60px] mb-12 md:mb-[100px] overflow-visible`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.35, once: true }} // Early viewport trigger + once-lock for flawless scrolling speed
        >
            {/* The responsive geometric background splash */}
            <div 
                className="absolute bottom-[-15px] md:bottom-[-30px] w-[88%] sm:w-[95%] md:w-[100%] max-w-[960px] h-[85%] md:h-[80%] opacity-85 rounded-[32px] md:rounded-[40px] origin-center will-change-transform"
                style={{ background, transform: "rotate(-6deg)" }} 
            />
            
            {/* The spring-animated corporate export product card */}
            <motion.div 
                style={{ transformOrigin: "10% 60%", zIndex: 10, willChange: "transform" }}
                variants={cardVariants} 
                className="w-[78%] sm:w-[85%] md:w-[90%] max-w-[920px] h-[460px] sm:h-[500px] md:h-[560px] flex flex-col overflow-hidden bg-white shadow-2xl border border-stone-200/50 transform-gpu relative rounded-[20px] md:rounded-[24px]"
            >
                {/* Product Image Section */}
                <div className="h-[200px] sm:h-[240px] md:h-[320px] w-full relative overflow-hidden bg-stone-100 shrink-0">
                    <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105" 
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Floating Premium Category Icon */}
                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur shadow-lg flex items-center justify-center text-lg md:text-xl select-none">
                        {icon}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-between bg-stone-50/50">
                    <div>
                        <span className="text-[9px] md:text-[11px] tracking-[0.2em] font-accent uppercase text-amber-700/80 font-bold block mb-1 md:mb-1.5">
                            Premium Sourcing
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900 leading-tight mb-2 md:mb-3">
                            {cat.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed font-body">
                            {cat.description}
                        </p>
                    </div>

                    <div className="pt-3 md:pt-4 mt-2 md:mt-4 border-t border-stone-200/60 flex items-center justify-between">
                        <button 
                            onClick={onToggle}
                            className="text-[10px] md:text-xs font-accent font-semibold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer flex items-center gap-1.5 group bg-transparent border-0 outline-none"
                        >
                            Explore Collection 
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                        <span className="text-[10px] md:text-xs font-mono text-stone-400 font-medium">
                            0{i + 1}
                        </span>
                    </div>
                </div>

                {/* Expanded Slide-up Overlay detailing sub-products */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                            className="absolute inset-0 bg-stone-950/95 backdrop-blur-md text-white p-6 md:p-8 z-20 flex flex-col justify-between"
                        >
                            <div className="overflow-y-auto no-scrollbar pb-4">
                                <div className="flex justify-between items-start mb-4 md:mb-6">
                                    <div>
                                        <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-accent text-gold-400 uppercase font-bold block mb-1">
                                            Product Lineup
                                        </span>
                                        <h4 className="text-xl md:text-2xl font-display font-bold text-stone-100">
                                            {cat.name}
                                        </h4>
                                    </div>
                                    <button 
                                        onClick={onToggle}
                                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer border-0 outline-none shrink-0"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-3.5 my-2 md:my-4">
                                    {cat.products.slice(0, 8).map((product, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5">
                                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                                                <Check size={10} className="text-amber-400 md:w-3 md:h-3" />
                                            </div>
                                            <span className="text-xs md:text-sm text-stone-200 font-body truncate">
                                                {product}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 md:pt-6 border-t border-white/10 flex items-center justify-between gap-4 md:gap-6 shrink-0 bg-stone-950/95">
                                <Link 
                                    to="/bulk-inquiry"
                                    className="flex-1 py-2.5 md:py-3 px-4 md:px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-stone-950 font-accent font-bold text-[10px] md:text-xs tracking-wider text-center transition-colors uppercase"
                                >
                                    Bulk Inquiry
                                </Link>
                                <button 
                                    onClick={onToggle}
                                    className="py-2.5 md:py-3 px-4 md:px-6 rounded-xl border border-white/15 hover:bg-white/5 text-stone-200 hover:text-white font-accent font-bold text-[10px] md:text-xs tracking-wider text-center transition-colors uppercase bg-transparent"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

/**
 * Spring-triggered viewport variants matching user specification
 */
const cardVariants = {
    offscreen: {
        y: 280,
    },
    onscreen: {
        y: 20, // Slide up perfectly centered on the splash
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.35,
            duration: 0.85,
        },
    },
};

const hueColor = (h) => `hsl(${h}, 100%, 50%)`;
