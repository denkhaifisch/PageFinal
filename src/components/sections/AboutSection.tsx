import { TrendingUp, Users, Shield, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollAnimation } from '@/hooks/useScrollAnimation';
import teamImage from '@/assets/team-working.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      title: t('about.feature1.title'),
      description: t('about.feature1.desc'),
    },
    {
      icon: Users,
      title: t('about.feature2.title'),
      description: t('about.feature2.desc'),
    },
    {
      icon: Shield,
      title: t('about.feature3.title'),
      description: t('about.feature3.desc'),
    },
    {
      icon: Zap,
      title: t('about.feature4.title'),
      description: t('about.feature4.desc'),
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <ScrollAnimation animation="fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t('about.badge')}
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {t('about.title1')}
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                {t('about.title2')}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100}>
              {/* Description */}
              <p className="text-lg text-muted-foreground mb-2">
                {t('about.description1')}
              </p>
              <p className="text-muted-foreground mb-8">
                {t('about.description2')}
              </p>
            </ScrollAnimation>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={150 + index * 75}>
                  <div
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-primary/30 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* CTA */}
            <ScrollAnimation animation="fade-up" delay={450}>
              <Button
                variant="cta"
                onClick={scrollToContact}
                className="group btn-hover-glow"
              >
                {t('about.cta')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </ScrollAnimation>
          </div>

          {/* Right Image */}
          <ScrollAnimation animation="slide-right" delay={200}>
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-card transition-all duration-500 group-hover:shadow-2xl">
                <img
                  src={teamImage}
                  alt="J Digital Team"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Experience Badge */}
                <div className="absolute bottom-6 left-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <span className="block text-4xl font-bold">10+</span>
                  <span className="text-sm font-medium uppercase tracking-wide">
                    {t('about.experience')}
                  </span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-xl -z-10 transition-all duration-500 group-hover:top-0 group-hover:right-0" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-xl -z-10 transition-all duration-500 group-hover:bottom-0 group-hover:left-0" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
