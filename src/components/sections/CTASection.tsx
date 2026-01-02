import { Shield, Clock, Rocket, TrendingUp, ArrowRight, CheckCircle, CreditCard, Star, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollAnimation } from '@/hooks/useScrollAnimation';

const CTASection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('cta.feature1.title'),
      description: t('cta.feature1.desc'),
    },
    {
      icon: Clock,
      title: t('cta.feature2.title'),
      description: t('cta.feature2.desc'),
    },
    {
      icon: Rocket,
      title: t('cta.feature3.title'),
      description: t('cta.feature3.desc'),
    },
    {
      icon: TrendingUp,
      title: t('cta.feature4.title'),
      description: t('cta.feature4.desc'),
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <ScrollAnimation animation="fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                {t('cta.badge')}
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {t('cta.title1')}
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {t('cta.title2')}
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                {t('cta.title3')}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100}>
              {/* Description */}
              <p className="text-lg text-muted-foreground mb-2">
                {t('cta.description1')}
              </p>
              <p className="text-muted-foreground mb-8">
                {t('cta.description2')}
              </p>
            </ScrollAnimation>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={150 + index * 75}>
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 transition-all duration-300 hover:bg-primary/10 hover:border-primary/20 hover:-translate-y-1 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* CTA */}
            <ScrollAnimation animation="fade-up" delay={450}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="cta"
                  onClick={scrollToContact}
                  className="group btn-hover-glow"
                >
                  {t('cta.button')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-sm">{t('cta.noCard')}</span>
                </div>
              </div>
            </ScrollAnimation>

            {/* Social Proof */}
            <ScrollAnimation animation="fade-up" delay={500}>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center text-xs font-medium text-primary"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">+150</span> {t('cta.satisfiedClients')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Dashboard Mock */}
          <ScrollAnimation animation="slide-right" delay={200}>
            <div className="relative group">
              <div className="bg-card rounded-2xl shadow-card p-6 border border-border transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cta.dashboard')}</h3>
                    <p className="text-sm text-muted-foreground">{t('cta.realtime')}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <BarChart3 className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Revenue */}
                <div className="bg-muted/50 rounded-xl p-4 mb-4 transition-all duration-300 hover:bg-muted/70">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    {t('cta.monthlyRevenue')}
                  </p>
                  <p className="text-3xl font-bold text-primary">$127,450</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-500 font-medium">+87.3% {t('cta.thisMonth')}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-xl p-4 transition-all duration-300 hover:bg-muted/50">
                    <p className="text-xs text-muted-foreground mb-1">{t('cta.conversions')}</p>
                    <p className="text-2xl font-bold text-foreground">8,547</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4 transition-all duration-300 hover:bg-muted/50">
                    <p className="text-xs text-muted-foreground mb-1">{t('cta.avgRoi')}</p>
                    <p className="text-2xl font-bold text-foreground">245%</p>
                    <p className="text-xs text-green-500">↑ 156%</p>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center gap-3 mt-4 p-3 bg-muted/30 rounded-xl transition-all duration-300 hover:bg-muted/50">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t('cta.verified')}</p>
                    <p className="text-xs text-muted-foreground">{t('cta.sslCert')}</p>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-3 border border-border animate-fade-in transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t('cta.newSale')}</p>
                    <p className="text-xs text-muted-foreground">2 {t('cta.agoMinutes')}</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-xl -z-10" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
