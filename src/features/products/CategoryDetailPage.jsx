import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Package, Globe, CheckCircle, MessageCircle } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container, Button, Badge } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { CATEGORIES, SITE } from '@/data';

export default function CategoryDetailPage() {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Category Not Found</h2>
          <Link to="/products" className="text-emerald-700 font-accent hover:underline">← Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category.name} — Tanisi Impex | Premium {category.name} Exporter from India</title>
        <meta name="description" content={`${category.description} Export-grade quality. Contact Tanisi Impex for bulk orders.`} />
      </Helmet>

      <PageHero
        title={category.name}
        subtitle={category.description}
        breadcrumbs={[
          { label: 'Products', path: '/products' },
          { label: category.name },
        ]}
      />

      {/* Category overview */}
      <section className="py-section bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn direction="right">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img src={category.image} alt={category.name} className="w-full h-[400px] object-cover" loading="lazy" />
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div>
                <Badge variant="gold" className="mb-4">{category.icon} {category.tagline}</Badge>
                <h2 className="text-h3 font-display text-gray-900 mb-4">{category.name} — Export Quality from India</h2>
                <p className="text-gray-600 font-body leading-relaxed mb-6">{category.description}</p>

                <div className="space-y-3 mb-8">
                  {['ISO & FSSAI certified products', 'Custom packaging & private labeling', 'Competitive MOQ for first-time buyers', 'Samples available on request', 'Door-to-port delivery worldwide'].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-body text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/bulk-inquiry">
                    <Button>Request Quote <ArrowRight size={16} /></Button>
                  </Link>
                  <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${category.name} from Tanisi Impex.`)}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary"><MessageCircle size={16} /> WhatsApp</Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Products grid */}
      <section className="py-section bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-h3 font-display text-gray-900 mb-2">Available Products</h2>
              <div className="section-divider mx-auto" />
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {category.products.map((product) => (
              <StaggerItem key={product}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover-lift text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors">
                    <Package size={28} className="text-emerald-700" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-1">{product}</h3>
                  <p className="text-xs text-gray-400 font-body mb-3">Export Ready</p>
                  <Link
                    to="/bulk-inquiry"
                    className="text-xs font-accent font-semibold text-gold-600 hover:text-gold-700 inline-flex items-center gap-1"
                  >
                    Inquire <ArrowRight size={12} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Other categories */}
      <section className="py-section-sm bg-white border-t border-gray-100">
        <Container>
          <FadeIn>
            <h3 className="text-h3 font-display text-gray-900 text-center mb-8">Explore More Categories</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.filter((c) => c.id !== category.id).slice(0, 6).map((c) => (
                <Link
                  key={c.id}
                  to={`/products/${c.slug}`}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm font-body text-gray-600 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
                >
                  {c.icon} {c.name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
