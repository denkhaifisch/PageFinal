import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const portfolioData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    titleEs: 'Plataforma E-Commerce',
    category: 'Development',
    categoryEs: 'Desarrollo',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    ],
    client: 'TechStore',
    date: 'December 2024',
    dateEs: 'Diciembre 2024',
    description: 'A complete e-commerce solution built with React and Node.js. Features include product catalog, shopping cart, secure checkout, and admin dashboard.',
    descriptionEs: 'Una solución e-commerce completa construida con React y Node.js. Incluye catálogo de productos, carrito de compras, checkout seguro y panel de administración.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    results: [
      { label: 'Sales Increase', labelEs: 'Aumento de Ventas', value: '+180%' },
      { label: 'Load Time', labelEs: 'Tiempo de Carga', value: '0.8s' },
      { label: 'Conversion Rate', labelEs: 'Tasa de Conversión', value: '+45%' },
    ],
    link: 'https://techstore.example.com',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    titleEs: 'Diseño de Identidad de Marca',
    category: 'UI/UX Design',
    categoryEs: 'Diseño UI/UX',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    ],
    client: 'Flora Studio',
    date: 'November 2024',
    dateEs: 'Noviembre 2024',
    description: 'Complete brand redesign including logo, color palette, typography, and brand guidelines for a boutique flower shop.',
    descriptionEs: 'Rediseño completo de marca incluyendo logo, paleta de colores, tipografía y guías de marca para una floristería boutique.',
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    results: [
      { label: 'Brand Recognition', labelEs: 'Reconocimiento de Marca', value: '+200%' },
      { label: 'Customer Trust', labelEs: 'Confianza del Cliente', value: '+85%' },
      { label: 'Social Followers', labelEs: 'Seguidores Sociales', value: '+5K' },
    ],
    link: 'https://florastudio.example.com',
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    titleEs: 'Campaña de Redes Sociales',
    category: 'Digital Marketing',
    categoryEs: 'Marketing Digital',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop',
    ],
    client: 'Artisan Coffee',
    date: 'October 2024',
    dateEs: 'Octubre 2024',
    description: 'Viral marketing campaign across Instagram and TikTok that dramatically increased brand awareness and customer engagement.',
    descriptionEs: 'Campaña de marketing viral en Instagram y TikTok que aumentó dramáticamente el reconocimiento de marca y el engagement del cliente.',
    technologies: ['Meta Ads', 'TikTok Ads', 'Canva', 'Hootsuite'],
    results: [
      { label: 'Engagement', labelEs: 'Engagement', value: '+500%' },
      { label: 'Reach', labelEs: 'Alcance', value: '2M+' },
      { label: 'New Customers', labelEs: 'Nuevos Clientes', value: '+1.2K' },
    ],
    link: 'https://artisancoffee.example.com',
  },
  {
    id: 4,
    title: 'Corporate Website',
    titleEs: 'Sitio Web Corporativo',
    category: 'Development',
    categoryEs: 'Desarrollo',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop',
    ],
    client: 'FinanceHub',
    date: 'September 2024',
    dateEs: 'Septiembre 2024',
    description: 'Modern corporate website with CMS integration, multi-language support, and advanced analytics.',
    descriptionEs: 'Sitio web corporativo moderno con integración CMS, soporte multiidioma y análisis avanzado.',
    technologies: ['React', 'Next.js', 'Sanity CMS', 'Vercel'],
    results: [
      { label: 'Page Views', labelEs: 'Vistas de Página', value: '+320%' },
      { label: 'Lead Generation', labelEs: 'Generación de Leads', value: '+150%' },
      { label: 'Bounce Rate', labelEs: 'Tasa de Rebote', value: '-40%' },
    ],
    link: 'https://financehub.example.com',
  },
  {
    id: 5,
    title: 'Mobile App UI/UX',
    titleEs: 'UI/UX de App Móvil',
    category: 'UI/UX Design',
    categoryEs: 'Diseño UI/UX',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=500&fit=crop',
    ],
    client: 'FitLife',
    date: 'August 2024',
    dateEs: 'Agosto 2024',
    description: 'Complete UI/UX design for a fitness tracking mobile application with gamification elements.',
    descriptionEs: 'Diseño UI/UX completo para una aplicación móvil de seguimiento fitness con elementos de gamificación.',
    technologies: ['Figma', 'Principle', 'Lottie', 'User Testing'],
    results: [
      { label: 'User Satisfaction', labelEs: 'Satisfacción del Usuario', value: '4.8/5' },
      { label: 'Daily Active Users', labelEs: 'Usuarios Activos Diarios', value: '+75%' },
      { label: 'Session Time', labelEs: 'Tiempo de Sesión', value: '+12min' },
    ],
    link: 'https://fitlife.example.com',
  },
  {
    id: 6,
    title: 'Google Ads Campaign',
    titleEs: 'Campaña Google Ads',
    category: 'Digital Marketing',
    categoryEs: 'Marketing Digital',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop',
    ],
    client: 'LegalPro',
    date: 'July 2024',
    dateEs: 'Julio 2024',
    description: 'High-converting PPC campaign targeting legal services keywords with optimized landing pages.',
    descriptionEs: 'Campaña PPC de alta conversión dirigida a palabras clave de servicios legales con landing pages optimizadas.',
    technologies: ['Google Ads', 'Google Analytics', 'Unbounce', 'Hotjar'],
    results: [
      { label: 'ROI', labelEs: 'ROI', value: '+300%' },
      { label: 'Cost per Lead', labelEs: 'Costo por Lead', value: '-55%' },
      { label: 'Quality Score', labelEs: 'Puntuación de Calidad', value: '9/10' },
    ],
    link: 'https://legalpro.example.com',
  },
  {
    id: 7,
    title: 'Restaurant Website',
    titleEs: 'Sitio Web Restaurante',
    category: 'Development',
    categoryEs: 'Desarrollo',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=500&fit=crop',
    ],
    client: 'Sabor Latino',
    date: 'June 2024',
    dateEs: 'Junio 2024',
    description: 'Restaurant website with online reservations, menu display, and delivery integration.',
    descriptionEs: 'Sitio web de restaurante con reservas online, visualización de menú e integración de delivery.',
    technologies: ['React', 'Supabase', 'Stripe', 'Google Maps API'],
    results: [
      { label: 'Online Reservations', labelEs: 'Reservas Online', value: '+250%' },
      { label: 'Delivery Orders', labelEs: 'Pedidos Delivery', value: '+180%' },
      { label: 'Customer Reviews', labelEs: 'Reseñas de Clientes', value: '4.9/5' },
    ],
    link: 'https://saborlatino.example.com',
  },
  {
    id: 8,
    title: 'Product Photography',
    titleEs: 'Fotografía de Productos',
    category: 'UI/UX Design',
    categoryEs: 'Diseño UI/UX',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=500&fit=crop',
    ],
    client: 'LuxWatch',
    date: 'May 2024',
    dateEs: 'Mayo 2024',
    description: 'Premium product photography and styling for luxury watch brand e-commerce.',
    descriptionEs: 'Fotografía de productos premium y estilismo para marca de relojes de lujo e-commerce.',
    technologies: ['Adobe Lightroom', 'Adobe Photoshop', 'Capture One'],
    results: [
      { label: 'Conversion Rate', labelEs: 'Tasa de Conversión', value: '+65%' },
      { label: 'Product Returns', labelEs: 'Devoluciones', value: '-30%' },
      { label: 'Average Order Value', labelEs: 'Valor Promedio de Orden', value: '+25%' },
    ],
    link: 'https://luxwatch.example.com',
  },
];

const PortfolioDetailContent = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  
  const project = portfolioData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const title = language === 'es' ? project.titleEs : project.title;
  const category = language === 'es' ? project.categoryEs : project.category;
  const date = language === 'es' ? project.dateEs : project.date;
  const description = language === 'es' ? project.descriptionEs : project.description;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy text-white">
        <div className="container-custom">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'es' ? 'Volver al Portfolio' : 'Back to Portfolio'}
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              {category}
            </span>
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          
          <div className="flex items-center gap-2 text-white/70">
            <User className="w-4 h-4" />
            <span>{language === 'es' ? 'Cliente' : 'Client'}: {project.client}</span>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={project.image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === 'es' ? 'Sobre el Proyecto' : 'About the Project'}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {description}
              </p>

              {/* Gallery */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {language === 'es' ? 'Galería' : 'Gallery'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden">
                    <img
                      src={img}
                      alt={`${title} - ${idx + 1}`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  {language === 'es' ? 'Tecnologías' : 'Technologies'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {language === 'es' ? 'Resultados' : 'Results'}
                </h3>
                <div className="space-y-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">
                        {language === 'es' ? result.labelEs : result.label}
                      </span>
                      <span className="text-xl font-bold text-primary">
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visit Site */}
              <Button
                variant="cta"
                className="w-full"
                onClick={() => window.open(project.link, '_blank')}
              >
                {language === 'es' ? 'Visitar Sitio' : 'Visit Site'}
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const PortfolioDetail = () => (
  <ThemeProvider>
    <LanguageProvider>
      <PortfolioDetailContent />
    </LanguageProvider>
  </ThemeProvider>
);

export default PortfolioDetail;
