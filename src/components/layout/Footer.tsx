import { Facebook, Instagram, Linkedin, Twitter, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const services = [
    t('footer.service1'),
    t('footer.service2'),
    t('footer.service3'),
    t('footer.service4'),
    t('footer.service5'),
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About Column */}
          <ScrollAnimation animation="fade-up" className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="w-5 h-5 rounded-full border-2 border-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">J DIGITAL</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t('footer.about')}
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </ScrollAnimation>

          {/* Quick Links */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <h3 className="text-lg font-semibold text-primary mb-6">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-all duration-200 text-sm link-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </ScrollAnimation>

          {/* Services */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <h3 className="text-lg font-semibold text-primary mb-6">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 text-sm hover:text-white transition-colors cursor-default">{service}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>

          {/* Contact */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <h3 className="text-lg font-semibold text-primary mb-6">
              {t('footer.contactUs')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                <div>
                  <p className="text-white text-sm">Santiago, Chile</p>
                  <p className="text-white/70 text-sm">Región Metropolitana</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                <div>
                  <span className="text-white/70 text-sm">{t('contact.info.phone')}: </span>
                  <span className="text-white text-sm">+56 9 1234 5678</span>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                <div>
                  <span className="text-white/70 text-sm">Email: </span>
                  <span className="text-white text-sm">hola@jdigital.cl</span>
                </div>
              </li>
            </ul>
            <Button
              variant="footerCta"
              onClick={() => scrollToSection('#contact')}
              className="mt-6 w-full group btn-hover-lift"
            >
              {t('footer.cta')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </ScrollAnimation>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} <span className="text-primary">J Digital</span> {t('footer.copyright')}
            </p>
            <p className="text-white/50 text-sm">
              {t('footer.madeWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
