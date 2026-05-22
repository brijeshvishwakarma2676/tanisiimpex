import { Helmet } from 'react-helmet-async';
import { lazy } from 'react';
import { LazySection } from '@/components/ui';
import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';

const CategoriesShowcase = lazy(() => import('./components/CategoriesShowcase'));
const FeaturedScrollShowcase = lazy(() => import('./components/FeaturedScrollShowcase'));
const StatsCounter = lazy(() => import('./components/StatsCounter'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const ExportTimeline = lazy(() => import('./components/ExportTimeline'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const IndustriesServed = lazy(() => import('./components/IndustriesServed'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Tanisi Impex — Premium Indian Exports | From India to the World</title>
        <meta name="description" content="Tanisi Impex — India's trusted export company. Premium spices, agro products, makhana, handicrafts & more for global buyers. ISO certified. 50+ countries." />
        <link rel="canonical" href="https://tanisiimpex.com" />
      </Helmet>

      <HeroSection />
      <TrustStrip />
      <LazySection minHeight="800px"><CategoriesShowcase /></LazySection>
      <LazySection minHeight="600px"><FeaturedScrollShowcase /></LazySection>
      <LazySection minHeight="300px"><StatsCounter /></LazySection>
      <LazySection minHeight="600px"><WhyChooseUs /></LazySection>
      <LazySection minHeight="800px"><ExportTimeline /></LazySection>
      <LazySection minHeight="600px"><TestimonialsSection /></LazySection>
      <LazySection minHeight="500px"><IndustriesServed /></LazySection>
      <LazySection minHeight="600px"><FAQSection /></LazySection>
      <LazySection minHeight="400px"><FinalCTA /></LazySection>
    </>
  );
}
