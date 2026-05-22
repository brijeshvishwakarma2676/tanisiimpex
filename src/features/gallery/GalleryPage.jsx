import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container } from '@/components/ui';
import { StaggerContainer, StaggerItem } from '@/components/animations';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', title: 'Premium Spice Selection', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', title: 'Basmati Rice Processing', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80', title: 'Container Loading', category: 'Shipping' },
  { src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?auto=format&fit=crop&w=600&q=80', title: 'Port Operations', category: 'Shipping' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80', title: 'Warehouse Facility', category: 'Facility' },
  { src: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80', title: 'Indian Handicrafts', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&w=600&q=80', title: 'Premium Dry Fruits', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80', title: 'Organic Product Range', category: 'Products' },
];

const tabs = ['All', 'Products', 'Shipping', 'Facility'];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeTab === 'All' ? galleryImages : galleryImages.filter((img) => img.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Gallery — Tanisi Impex | Products, Facilities & Operations</title>
        <meta name="description" content="View our gallery of premium Indian products, export facilities, warehousing, and shipping operations." />
      </Helmet>

      <PageHero
        title="Gallery"
        subtitle="A visual showcase of our products, facilities, and export operations."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-section bg-white">
        <Container>
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-accent font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-emerald-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <StaggerItem key={i}>
                <button
                  onClick={() => setLightbox(img)}
                  className="block w-full rounded-xl overflow-hidden img-zoom aspect-square cursor-pointer group relative"
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/50 transition-all duration-300 flex items-end p-4">
                    <p className="text-white font-display font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{img.title}</p>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white/80 hover:text-white" onClick={() => setLightbox(null)}>
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox.src.replace('w=600', 'w=1200')}
              alt={lightbox.title}
              className="max-w-full max-h-[80vh] rounded-xl object-contain"
            />
            <p className="absolute bottom-8 text-white font-display text-lg">{lightbox.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
