import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ScrollAnimation } from '@/hooks/useScrollAnimation';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    titleEs: 'Plataforma E-Commerce',
    category: 'dev',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    client: 'TechStore',
    description: 'Complete online store with payment integration',
    descriptionEs: 'Tienda online completa con integración de pagos',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    titleEs: 'Diseño de Identidad de Marca',
    category: 'uiux',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    client: 'Flora Studio',
    description: 'Complete brand redesign and visual identity',
    descriptionEs: 'Rediseño completo de marca e identidad visual',
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    titleEs: 'Campaña de Redes Sociales',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    client: 'Artisan Coffee',
    description: 'Viral marketing campaign with 500% engagement increase',
    descriptionEs: 'Campaña de marketing viral con 500% de aumento en engagement',
  },
  {
    id: 4,
    title: 'Corporate Website',
    titleEs: 'Sitio Web Corporativo',
    category: 'dev',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    client: 'FinanceHub',
    description: 'Modern corporate website with CMS',
    descriptionEs: 'Sitio web corporativo moderno con CMS',
  },
  {
    id: 5,
    title: 'Mobile App UI/UX',
    titleEs: 'UI/UX de App Móvil',
    category: 'uiux',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    client: 'FitLife',
    description: 'Fitness tracking app design',
    descriptionEs: 'Diseño de app de seguimiento fitness',
  },
  {
    id: 6,
    title: 'Google Ads Campaign',
    titleEs: 'Campaña Google Ads',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
    client: 'LegalPro',
    description: 'PPC campaign with 300% ROI',
    descriptionEs: 'Campaña PPC con 300% de ROI',
  },
  {
    id: 7,
    title: 'Restaurant Website',
    titleEs: 'Sitio Web Restaurante',
    category: 'dev',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    client: 'Sabor Latino',
    description: 'Restaurant website with online reservations',
    descriptionEs: 'Sitio web de restaurante con reservas online',
  },
  {
    id: 8,
    title: 'Product Photography',
    titleEs: 'Fotografía de Productos',
    category: 'uiux',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
    client: 'LuxWatch',
    description: 'Premium product photography and styling',
    descriptionEs: 'Fotografía de productos premium y estilismo',
  },
];

export { portfolioItems };

const PortfolioSection = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('portfolio.filter.all') },
    { id: 'uiux', label: t('portfolio.filter.uiux') },
    { id: 'dev', label: t('portfolio.filter.dev') },
    { id: 'marketing', label: t('portfolio.filter.marketing') },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-navy text-white">
      <div className="container-custom">
        {/* Header */}
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('portfolio.title')}</h2>
            <p className="text-white/70 text-lg">
              {t('portfolio.description')}
            </p>
          </div>
        </ScrollAnimation>

        {/* Filters */}
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollAnimation key={item.id} animation="fade-up" delay={index * 75}>
              <Link
                to={`/portfolio/${item.id}`}
                target="_blank"
                className="group relative rounded-2xl overflow-hidden bg-navy-light aspect-[4/3] block transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              >
                <img
                  src={item.image}
                  alt={language === 'es' ? item.titleEs : item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {language === 'es' ? item.titleEs : item.title}
                  </h3>
                  <p className="text-white/70 text-sm">{item.client}</p>
                  <div className="flex items-center gap-2 mt-3 text-primary text-sm font-medium">
                    {t('portfolio.viewProject')}
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
