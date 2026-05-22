import { Helmet } from 'react-helmet-async';
import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';
import CategoriesShowcase from './components/CategoriesShowcase';
import StatsCounter from './components/StatsCounter';
import WhyChooseUs from './components/WhyChooseUs';
import ExportTimeline from './components/ExportTimeline';
import TestimonialsSection from './components/TestimonialsSection';
import IndustriesServed from './components/IndustriesServed';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';

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
      <CategoriesShowcase />
      <StatsCounter />
      <WhyChooseUs />
      <ExportTimeline />
      <TestimonialsSection />
      <IndustriesServed />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
