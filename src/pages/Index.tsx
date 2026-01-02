import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CTASection from '@/components/sections/CTASection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>J Digital - {language === 'es' ? 'Agencia de Marketing Digital en Chile' : 'Digital Marketing Agency in Chile'}</title>
        <meta 
          name="description" 
          content={language === 'es' 
            ? 'J Digital - Agencia de marketing digital en Chile. SEO, publicidad digital, redes sociales y diseño web. Transformamos ideas en resultados reales.'
            : 'J Digital - Digital marketing agency in Chile. SEO, digital advertising, social media and web design. We transform ideas into real results.'
          } 
        />
        <meta name="keywords" content="marketing digital, SEO, publicidad digital, redes sociales, diseño web, Chile, Santiago" />
        <link rel="canonical" href="https://jdigital.cl" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <CTASection />
          <PortfolioSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
