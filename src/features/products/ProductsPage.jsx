import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container } from '@/components/ui';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/animations';
import { CATEGORIES } from '@/data';

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Our Products — Tanisi Impex | Premium Indian Export Categories</title>
        <meta name="description" content="Explore our 11 premium product categories — Indian spices, agro products, makhana, rice, pulses, dry fruits, organic products, handicrafts & more." />
      </Helmet>

      <PageHero
        title="Our Product Categories"
        subtitle="Premium Indian products sourced and processed to meet international quality standards. Explore our diverse range of export-ready categories."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <section className="py-section bg-white">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <StaggerItem key={cat.id}>
                <Link
                  to={`/products/${cat.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover-lift"
                >
                  <div className="img-zoom aspect-[16/10]">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{cat.icon}</span>
                      <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{cat.name}</h3>
                    </div>
                    <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">{cat.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cat.products.slice(0, 4).map((p) => (
                        <span key={p} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-body">{p}</span>
                      ))}
                      {cat.products.length > 4 && (
                        <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md font-body">+{cat.products.length - 4} more</span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-accent font-semibold text-gold-600 group-hover:gap-2 transition-all">
                      View Products <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
