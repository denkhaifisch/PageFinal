import { useState } from 'react';
import { Megaphone, Palette, Users, Code, Smartphone, Search, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceModal from '@/components/ui/ServiceModal';
import { ScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Megaphone,
      title: t('services.service1.title'),
      description: t('services.service1.desc'),
      features: t('services.service1.features').split('|'),
      details: [
        t('services.service1.detail1'),
        t('services.service1.detail2'),
        t('services.service1.detail3'),
        t('services.service1.detail4'),
      ],
    },
    {
      icon: Palette,
      title: t('services.service2.title'),
      description: t('services.service2.desc'),
      features: t('services.service2.features').split('|'),
      details: [
        t('services.service2.detail1'),
        t('services.service2.detail2'),
        t('services.service2.detail3'),
        t('services.service2.detail4'),
      ],
    },
    {
      icon: Users,
      title: t('services.service3.title'),
      description: t('services.service3.desc'),
      features: t('services.service3.features').split('|'),
      details: [
        t('services.service3.detail1'),
        t('services.service3.detail2'),
        t('services.service3.detail3'),
        t('services.service3.detail4'),
      ],
    },
    {
      icon: Code,
      title: t('services.service4.title'),
      description: t('services.service4.desc'),
      features: t('services.service4.features').split('|'),
      details: [
        t('services.service4.detail1'),
        t('services.service4.detail2'),
        t('services.service4.detail3'),
        t('services.service4.detail4'),
      ],
    },
    {
      icon: Smartphone,
      title: t('services.service5.title'),
      description: t('services.service5.desc'),
      features: t('services.service5.features').split('|'),
      details: [
        t('services.service5.detail1'),
        t('services.service5.detail2'),
        t('services.service5.detail3'),
        t('services.service5.detail4'),
      ],
    },
    {
      icon: Search,
      title: t('services.service6.title'),
      description: t('services.service6.desc'),
      features: t('services.service6.features').split('|'),
      details: [
        t('services.service6.detail1'),
        t('services.service6.detail2'),
        t('services.service6.detail3'),
        t('services.service6.detail4'),
      ],
    },
  ];

  return (
    <>
      <section id="services" className="py-12 lg:py-20 bg-navy text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-0">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
            <ScrollAnimation animation="fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t('services.badge')}
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {t('services.title1')}
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                {t('services.title2')}
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {t('services.title3')}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="flex flex-col justify-end">
                <p className="text-white/70 text-base md:text-lg mb-6 md:mb-8 max-w-md">
                  {t('services.description')}
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="group">
                    <span className="text-3xl sm:text-4xl font-bold text-primary transition-transform group-hover:scale-110 inline-block">500+</span>
                    <p className="text-white/60 text-sm">{t('services.projects')}</p>
                  </div>
                  <div className="group">
                    <span className="text-3xl sm:text-4xl font-bold text-primary transition-transform group-hover:scale-110 inline-block">96%</span>
                    <p className="text-white/60 text-sm">{t('services.satisfaction')}</p>
                  </div>
                  <div className="group">
                    <span className="text-3xl sm:text-4xl font-bold text-primary transition-transform group-hover:scale-110 inline-block">24/7</span>
                    <p className="text-white/60 text-sm">{t('services.support')}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Services Grid - 6 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div
                  className="bg-navy-light rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 group h-full flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    onClick={() => setSelectedService(index)}
                    className="text-primary hover:text-white hover:bg-primary/20 p-0 h-auto group/btn w-full sm:w-fit"
                  >
                    {t('services.learnMore')}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          service={services[selectedService]}
        />
      )}
    </>
  );
};

export default ServicesSection;
