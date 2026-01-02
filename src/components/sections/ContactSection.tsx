import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: t('contact.form.success'),
        description: '',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: t('contact.form.error'),
        description: '',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div>
            <ScrollAnimation animation="fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t('contact.badge')}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {t('contact.title1')}
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('contact.title2')}
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                {t('contact.description')}
              </p>
            </ScrollAnimation>

            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                { icon: MapPin, title: t('contact.info.address'), subtitle: t('contact.info.region') },
                { icon: Phone, title: t('contact.info.phone'), subtitle: '+56 9 1234 5678' },
                { icon: Mail, title: t('contact.info.email'), subtitle: 'hola@jdigital.cl' },
              ].map((item, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={100 + index * 75}>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-primary/30 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Map */}
            <ScrollAnimation animation="fade-up" delay={325}>
              <div className="mt-8 rounded-2xl overflow-hidden h-[200px] bg-muted relative shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106459.4759950966!2d-70.69348679999999!3d-33.4488897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Chile!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="J Digital Location"
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Right - Contact Form */}
          <ScrollAnimation animation="slide-right" delay={200}>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card transition-all duration-500 hover:shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    placeholder="Paid media strategy"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your business goals..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  className="w-full btn-hover-glow group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
