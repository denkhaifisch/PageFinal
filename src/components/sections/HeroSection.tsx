import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-navy pt-24 md:pt-32 pb-14 md:pb-20"
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background opacity-40"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%230d1b2a' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source
            src="src/assets/hero.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      {/* Animated particles/shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating shapes that respond to mouse */}
        <div 
          className="absolute w-48 md:w-96 h-48 md:h-96 rounded-full bg-primary/5 blur-3xl animate-float"
          style={{
            top: '20%',
            right: '10%',
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-36 md:w-64 h-36 md:h-64 rounded-full bg-primary/10 blur-2xl"
          style={{
            bottom: '30%',
            left: '5%',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-28 md:w-48 h-28 md:h-48 rounded-full bg-white/5 blur-xl"
          style={{
            top: '60%',
            right: '30%',
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            transition: 'transform 0.3s ease-out',
            animation: 'float 10s ease-in-out infinite',
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 md:pt-32 pb-14 md:pb-20 px-4 sm:px-6 lg:px-0">
        <div className="max-w-md md:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-8 animate-fade-in-up border border-white/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t('hero.badge')}
          </div>

          {/* Title */}
          <h1 className="text-white mb-6">
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up animation-delay-100">
              {t('hero.title1')}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary animate-fade-in-up animation-delay-200">
              {t('hero.title2')}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up animation-delay-300">
              {t('hero.title3')}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary animate-fade-in-up animation-delay-400">
              {t('hero.title4')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-md md:max-w-2xl animate-fade-in-up animation-delay-500">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection('#services')}
              className="group btn-hover-glow px-4 py-2 md:px-6 md:py-3 w-full sm:w-auto"
            >
              {t('hero.cta1')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="group text-white border-white/30 hover:border-primary hover:bg-white/10 px-4 py-2 md:px-6 md:py-3 w-full sm:w-auto"
            >
              {t('hero.cta2')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative frame with animation */}
      <div 
        className="absolute right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 w-[260px] md:w-[320px] lg:w-[400px] h-[320px] md:h-[420px] lg:h-[500px] border-2 border-white/10 hidden lg:block transition-all duration-500"
        style={{
          transform: `translateY(-50%) rotate(${mousePosition.x * 2 - 1}deg)`,
        }}
      />
      <div 
        className="absolute right-[6%] lg:right-[12%] top-[52%] -translate-y-1/2 w-[220px] md:w-[280px] lg:w-[350px] xl:w-[400px] h-[280px] md:h-[340px] lg:h-[450px] border border-primary/20 hidden lg:block transition-all duration-700"
        style={{
          transform: `translateY(-50%) rotate(${mousePosition.x * -3 + 1.5}deg)`,
        }}
      />
    </section>
  );
};

export default HeroSection;