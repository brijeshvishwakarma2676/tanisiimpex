import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container, Badge } from '@/components/ui';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/animations';
import { BLOG_POSTS } from '@/data';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog & Insights — Tanisi Impex | Export Industry News & Guides</title>
        <meta name="description" content="Stay updated with export industry insights, product spotlights, and sourcing guides from Tanisi Impex." />
      </Helmet>

      <PageHero
        title="Blog & Insights"
        subtitle="Expert perspectives on Indian exports, industry trends, and practical guides for international buyers."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="py-section bg-white">
        <Container>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <StaggerItem key={post.slug}>
                <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover-lift group h-full flex flex-col">
                  <div className="img-zoom aspect-[16/10]">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <Badge variant="gold" className="mb-3 w-fit">{post.category}</Badge>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 font-body text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-4 text-xs text-gray-400 font-body">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      </div>
                      <span className="text-sm font-accent font-semibold text-gold-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
