import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollAnimation } from '@/hooks/useScrollAnimation';

const PricingSection = () => {
  const { t, language } = useLanguage();

  const plans = [
    {
      name: t('pricing.plan1.name'),
      price: t('pricing.plan1.price'),
      period: '/mo',
      periodEs: '/mes',
      description: t('pricing.plan1.desc'),
      features: [
        'Social media management (2 platforms)',
        'Monthly content calendar',
        'Basic analytics reports',
        'Email support',
        'Monthly strategy call',
      ],
      featuresEs: [
        'Gestión de redes sociales (2 plataformas)',
        'Calendario de contenido mensual',
        'Reportes de análisis básicos',
        'Soporte por email',
        'Llamada de estrategia mensual',
      ],
      popular: false,
    },
    {
      name: t('pricing.plan2.name'),
      price: t('pricing.plan2.price'),
      period: '/mo',
      periodEs: '/mes',
      description: t('pricing.plan2.desc'),
      features: [
        'Social media management (4 platforms)',
        'Paid media management',
        'Advanced analytics & insights',
        'Priority support',
        'Bi-weekly strategy calls',
        'Content production included',
        'A/B testing & optimization',
      ],
      featuresEs: [
        'Gestión de redes sociales (4 plataformas)',
        'Gestión de medios pagos',
        'Análisis avanzado e insights',
        'Soporte prioritario',
        'Llamadas de estrategia quincenales',
        'Producción de contenido incluida',
        'Testing A/B y optimización',
      ],
      popular: true,
    },
    {
      name: t('pricing.plan3.name'),
      price: t('pricing.plan3.price'),
      period: '',
      periodEs: '',
      description: t('pricing.plan3.desc'),
      features: [
        'All Growth features',
        'Unlimited platforms',
        'Custom integrations',
        'Dedicated account team',
        'Weekly strategy sessions',
        'Priority development',
        'Custom reporting',
        'SLA guarantee',
      ],
      featuresEs: [
        'Todas las características Growth',
        'Plataformas ilimitadas',
        'Integraciones personalizadas',
        'Equipo de cuenta dedicado',
        'Sesiones de estrategia semanales',
        'Desarrollo prioritario',
        'Reportes personalizados',
        'Garantía SLA',
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container-custom">
        {/* Header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {t('pricing.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              {t('pricing.title1')}
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('pricing.title2')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('pricing.description')}
            </p>
          </div>
        </ScrollAnimation>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <div
                className={`relative rounded-2xl p-8 transition-all duration-500 h-full flex flex-col ${
                  plan.popular
                    ? 'bg-navy text-white shadow-xl scale-105 z-10 hover:shadow-2xl hover:-translate-y-2'
                    : 'bg-card border border-border hover:border-primary/30 hover:shadow-card hover:-translate-y-2'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full shadow-lg shadow-primary/30">
                    {t('pricing.popular')}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-white/70' : 'text-muted-foreground'}>
                    {language === 'es' ? plan.periodEs : plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {(language === 'es' ? plan.featuresEs : plan.features).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 transition-transform group-hover:scale-110 ${plan.popular ? 'text-primary' : 'text-primary'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'cta' : 'outline'}
                  className={`w-full group ${plan.popular ? 'btn-hover-glow' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
                  onClick={scrollToContact}
                >
                  {t('pricing.getStarted')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
