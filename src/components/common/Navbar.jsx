import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';
import { cn } from '@/lib/cn';
import { NAV_LINKS, SITE } from '@/data';
import { Button } from '@/components/ui';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location]);

  return (
    <>
      {/* Exquisite minimal top ticker bar */}
      <div className="hidden lg:block bg-[#022c22] text-white/60 text-xs py-2.5 border-b border-white/5 relative z-50 w-full">
        <div className="max-w-7xl w-full mx-auto px-12 flex justify-between items-center font-accent uppercase tracking-wider font-semibold">
          <div className="flex items-center gap-2 text-emerald-400">
            <Globe size={13} className="animate-spin-slow" />
            <span>APEDA & ISO Certified Premium Exporter</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Mail size={12} /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors font-body">
              <Phone size={12} /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main glass navbar */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-500 w-full',
          scrolled
            ? 'bg-emerald-950/90 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] py-3 lg:py-4'
            : 'bg-emerald-950/95 backdrop-blur-md py-4 lg:py-5'
        )}
      >
        <nav className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between w-full gap-4 lg:gap-8 xl:gap-12">
            {/* Elegant luxury Logo */}
            <Link to="/" className="flex items-center gap- shrink-0 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src="/images/logo.png" alt="Tanisi Impex" className="h-12 lg:h-14 w-auto relative z-10 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-display font-black text-lg tracking-wide leading-tight group-hover:text-gold-400 transition-colors duration-300">
                  TANISI IMPEX
                </h1>
                <p className="text-gold-500 text-[9px] font-accent tracking-widest font-bold uppercase">
                  Global Trade Excellence
                </p>
              </div>
            </Link>

            {/* Desktop modular modern links - centered and flexible */}
            <div className="hidden lg:flex items-center gap-x-1.5 xl:gap-x-2">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-full text-[11px] xl:text-xs font-semibold uppercase tracking-wider font-accent transition-all duration-300 whitespace-nowrap border border-transparent',
                        location.pathname.startsWith('/products')
                          ? 'text-gold-400'
                          : 'text-white/80 hover:text-white'
                      )}
                    >
                      {link.label}
                      <ChevronDown size={12} className={cn('transition-transform duration-300', productsOpen && 'rotate-180 text-gold-400')} />
                    </Link>

                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#022c22] border border-gold-500/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden p-2.5 z-50"
                        >
                          <div className="space-y-1">
                            {link.children.map((child) => {
                              const isActive = location.pathname === child.path;
                              return (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={cn(
                                    "block px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-accent font-semibold transition-all duration-200 whitespace-nowrap",
                                    isActive
                                      ? "text-gold-400 bg-white/10 font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                                      : "text-white/70 hover:text-gold-400 hover:bg-white/5"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={cn(
                      'px-3 py-2 rounded-full text-[11px] xl:text-xs font-semibold uppercase tracking-wider font-accent transition-all duration-300 border whitespace-nowrap',
                      location.pathname === link.path
                        ? 'text-gold-400'
                        : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Premium CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4 shrink-0">
              <Link to="/bulk-inquiry" className="hidden lg:block">
                <Button size="sm" className="btn-glow">RFQ Portal</Button>
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors border border-white/10"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modern glass-sheet mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-[#022c22] border-b border-white/10 overflow-hidden lg:hidden"
          >
            <div className="px-6 py-6 max-h-[70vh] overflow-y-auto space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="space-y-1">
                  <Link
                    to={link.path}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider font-accent text-white/80 hover:text-gold-400 hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-6 border-l border-white/5 ml-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-xs uppercase tracking-wider font-accent font-medium text-white/55 hover:text-gold-400 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Link to="/bulk-inquiry">
                  <Button className="w-full btn-glow">Get a Quote</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
