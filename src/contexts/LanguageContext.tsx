import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a Proposal',

    // Hero
    'hero.badge': 'STRATEGIC DIGITAL PARTNERS',
    'hero.title1': 'SCALE YOUR',
    'hero.title2': 'REVENUE',
    'hero.title3': 'WITH DATA-DRIVEN',
    'hero.title4': 'STRATEGY',
    'hero.description': 'We help ambitious businesses generate qualified leads, increase conversions, and build sustainable growth through integrated digital strategies. No guesswork—just measurable results.',
    'hero.cta1': 'Explore Our Services',
    'hero.cta2': 'Request a Strategy Call',

    // About
    'about.badge': 'WHY J DIGITAL',
    'about.title1': 'Strategic partners,',
    'about.title2': 'not just vendors',
    'about.description1': 'We work exclusively with growth-focused businesses ready to invest in their digital presence.',
    'about.description2': 'Our team becomes an extension of yours—managing campaigns, optimizing funnels, and delivering insights that drive real business outcomes.',
    'about.feature1.title': 'Performance Focus',
    'about.feature1.desc': 'Every campaign optimized for leads, sales, and ROI',
    'about.feature2.title': 'Senior Team',
    'about.feature2.desc': 'Certified strategists across Google, Meta & analytics',
    'about.feature3.title': 'Full Transparency',
    'about.feature3.desc': 'Real-time dashboards and weekly performance reviews',
    'about.feature4.title': 'Agile Execution',
    'about.feature4.desc': 'Rapid testing and optimization cycles',
    'about.experience': 'YEARS DRIVING GROWTH',
    'about.cta': 'Schedule a Consultation',

    // Services
    'services.badge': 'INTEGRATED SOLUTIONS',
    'services.title1': 'Growth services for',
    'services.title2': 'ambitious',
    'services.title3': 'businesses',
    'services.description': 'We combine paid media, organic strategy, and conversion optimization to create predictable revenue growth for established companies.',
    'services.projects': 'Campaigns Managed',
    'services.satisfaction': 'Client Retention',
    'services.support': 'Dedicated Support',
    'services.learnMore': 'Learn More',
    'services.closeModal': 'Close',
    'services.requestConsultation': 'Request Consultation',
    'services.service1.title': 'Paid Media Management',
    'services.service1.desc': 'Strategic advertising across Meta, Google, and TikTok designed to maximize qualified leads and lower acquisition costs.',
    'services.service1.features': 'Campaign strategy & execution|Advanced audience targeting|Creative testing & optimization|Cross-platform attribution',
    'services.service1.detail1': 'Our paid media service goes beyond simple ad management. We develop comprehensive strategies aligned with your business objectives, whether that\'s lead generation, e-commerce sales, or brand awareness at scale.',
    'services.service1.detail2': 'We manage your entire paid ecosystem—from Meta (Facebook & Instagram) to Google Ads, YouTube, and TikTok—ensuring consistent messaging and efficient budget allocation across platforms.',
    'services.service1.detail3': 'Our approach includes rigorous A/B testing of creatives, landing pages, and audiences. We analyze performance data daily and make real-time optimizations to improve your cost per acquisition.',
    'services.service1.detail4': 'You receive detailed monthly reports with clear KPIs: cost per lead, conversion rates, ROAS, and actionable recommendations for the next period.',
    'services.service2.title': 'Content & Creative Production',
    'services.service2.desc': 'High-impact content that captures attention and drives engagement across all your marketing channels.',
    'services.service2.features': 'Video production & editing|Graphic design & branding|Social media content|Ad creative development',
    'services.service2.detail1': 'Content is the foundation of digital success. Our creative team produces scroll-stopping videos, compelling graphics, and strategic content calendars that align with your brand voice and business goals.',
    'services.service2.detail2': 'We handle everything from concept development to final production—including short-form video for TikTok and Reels, professional photography, motion graphics, and static designs optimized for each platform.',
    'services.service2.detail3': 'Our content strategy is data-informed. We analyze what performs, identify trends in your industry, and continuously refine our creative approach to maximize engagement and conversions.',
    'services.service2.detail4': 'You get a consistent content pipeline that supports both organic growth and paid campaigns, ensuring your brand stays relevant and top-of-mind with your target audience.',
    'services.service3.title': 'Social Media Management',
    'services.service3.desc': 'Professional community management that builds brand authority, fosters engagement, and nurtures customer relationships.',
    'services.service3.features': 'Strategy & content planning|Community engagement|Reputation management|Performance analytics',
    'services.service3.detail1': 'Your social presence is often the first impression for potential customers. We manage your profiles with the professionalism and responsiveness your brand deserves—building trust and driving engagement.',
    'services.service3.detail2': 'Our team creates and publishes strategic content, responds to comments and messages promptly, and actively engages with your audience to foster a genuine community around your brand.',
    'services.service3.detail3': 'We monitor brand mentions, manage your online reputation, and provide detailed monthly reports on growth metrics, engagement rates, and audience insights.',
    'services.service3.detail4': 'Whether you need support for Instagram, LinkedIn, Facebook, or TikTok, we tailor our approach to each platform while maintaining a cohesive brand voice.',
    'services.service4.title': 'Web Development & UX',
    'services.service4.desc': 'High-converting websites built for performance, user experience, and seamless integration with your marketing stack.',
    'services.service4.features': 'Custom website development|Conversion optimization|Speed & SEO performance|CMS & integrations',
    'services.service4.detail1': 'Your website is your most valuable digital asset. We build modern, responsive sites optimized for conversion—designed to turn visitors into leads and customers.',
    'services.service4.detail2': 'Every project starts with understanding your business goals and user journey. We then design and develop experiences that guide visitors toward action, with clear CTAs, fast load times, and intuitive navigation.',
    'services.service4.detail3': 'We specialize in WordPress, Webflow, and custom solutions, ensuring your site is easy to manage and scalable as your business grows. All builds include on-page SEO optimization.',
    'services.service4.detail4': 'Post-launch, we offer ongoing optimization services—A/B testing, heat mapping analysis, and conversion rate improvements based on real user data.',
    'services.service5.title': 'Mobile App Development',
    'services.service5.desc': 'Custom mobile applications that extend your digital presence and create new revenue opportunities.',
    'services.service5.features': 'iOS & Android development|UI/UX design|App store optimization|Maintenance & updates',
    'services.service5.detail1': 'A well-designed mobile app can transform customer engagement and open new business channels. We develop native and cross-platform applications tailored to your specific needs.',
    'services.service5.detail2': 'Our process begins with thorough discovery—understanding your users, business model, and technical requirements. We then design intuitive interfaces and build robust applications that perform flawlessly.',
    'services.service5.detail3': 'From concept to App Store launch, we handle every phase: wireframing, prototyping, development, testing, and deployment. We also optimize your store listings for maximum visibility.',
    'services.service5.detail4': 'After launch, we provide ongoing support including bug fixes, feature updates, and performance monitoring to ensure your app continues delivering value.',
    'services.service6.title': 'SEO & Organic Growth',
    'services.service6.desc': 'Sustainable organic visibility that drives qualified traffic and reduces your dependency on paid advertising.',
    'services.service6.features': 'Technical SEO audits|Content strategy & creation|Link building outreach|Local SEO optimization',
    'services.service6.detail1': 'SEO is a long-term investment that compounds over time. We build organic visibility strategies that drive consistent, qualified traffic without the ongoing cost of paid ads.',
    'services.service6.detail2': 'Our approach begins with a comprehensive technical audit—identifying and fixing issues that impact your rankings. We then develop content strategies targeting high-intent keywords in your industry.',
    'services.service6.detail3': 'We create authoritative content, build quality backlinks through ethical outreach, and optimize your local presence for businesses serving specific geographic areas.',
    'services.service6.detail4': 'You receive monthly reports tracking keyword rankings, organic traffic growth, and conversions attributed to SEO efforts—with clear visibility into your return on investment.',

    // CTA Section
    'cta.badge': 'READY TO SCALE?',
    'cta.title1': 'Let\'s Build Your',
    'cta.title2': 'Growth Engine',
    'cta.title3': 'Together',
    'cta.description1': 'Join established businesses that have partnered with us to',
    'cta.description2': 'achieve predictable, sustainable revenue growth.',
    'cta.feature1.title': 'Results-Driven',
    'cta.feature1.desc': 'Performance-based approach',
    'cta.feature2.title': 'Dedicated Team',
    'cta.feature2.desc': 'Your success is our priority',
    'cta.feature3.title': 'Fast Onboarding',
    'cta.feature3.desc': 'Launch within 2 weeks',
    'cta.feature4.title': 'Proven Track Record',
    'cta.feature4.desc': 'Consistent client growth',
    'cta.button': 'Schedule Your Strategy Call',
    'cta.noCard': 'Free 30-minute consultation',
    'cta.dashboard': 'Client Dashboard',
    'cta.realtime': 'Real-time performance tracking',
    'cta.monthlyRevenue': 'MONTHLY REVENUE',
    'cta.thisMonth': 'this month',
    'cta.conversions': 'Conversions',
    'cta.avgRoi': 'Average ROI',
    'cta.newSale': 'New conversion!',
    'cta.agoMinutes': 'minutes ago',
    'cta.verified': 'Secure & Transparent',
    'cta.sslCert': 'Full Data Ownership',
    'cta.satisfiedClients': 'clients trust us',

    // Portfolio
    'portfolio.title': 'PORTFOLIO',
    'portfolio.description': 'Case studies showcasing measurable business impact',
    'portfolio.filter.all': 'All',
    'portfolio.filter.uiux': 'UI/UX & Web Design',
    'portfolio.filter.dev': 'Development',
    'portfolio.filter.marketing': 'Digital Marketing',
    'portfolio.viewProject': 'View Case Study',

    // Pricing
    'pricing.badge': 'INVESTMENT OPTIONS',
    'pricing.title1': 'Partnership models',
    'pricing.title2': 'for growing businesses',
    'pricing.description': 'Flexible engagement options designed to match your growth stage and objectives',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
    'pricing.popular': 'Most Popular',
    'pricing.getStarted': 'Get Started',
    'pricing.plan1.name': 'Foundation',
    'pricing.plan1.price': '$2,500',
    'pricing.plan1.desc': 'For businesses starting to professionalize their digital presence',
    'pricing.plan2.name': 'Growth',
    'pricing.plan2.price': '$5,000',
    'pricing.plan2.desc': 'For established businesses ready to scale their marketing efforts',
    'pricing.plan3.name': 'Enterprise',
    'pricing.plan3.price': 'Custom',
    'pricing.plan3.desc': 'Full-service partnership for high-growth companies',

    // Contact
    'contact.badge': 'START A CONVERSATION',
    'contact.title1': 'Let\'s discuss',
    'contact.title2': 'your growth goals',
    'contact.description': 'Tell us about your business and objectives. We\'ll respond within 24 hours to schedule a strategy call.',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Santiago, Chile',
    'contact.info.region': 'Serving clients globally',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Business Email',
    'contact.form.subject': 'What can we help with?',
    'contact.form.message': 'Tell us about your business and goals',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message received! We\'ll be in touch within 24 hours.',
    'contact.form.error': 'Something went wrong. Please try again or email us directly.',

    // Footer
    'footer.about': 'We partner with ambitious businesses to build predictable revenue growth through integrated digital marketing strategies. Performance-focused, data-driven, results-oriented.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.service1': 'Paid Media',
    'footer.service2': 'SEO & Content',
    'footer.service3': 'Social Media',
    'footer.service4': 'Web Development',
    'footer.service5': 'Growth Strategy',
    'footer.contactUs': 'Contact Us',
    'footer.cta': 'GET A PROPOSAL',
    'footer.copyright': 'All rights reserved',
    'footer.madeWith': 'Crafted with precision by J Digital',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Inversión',
    'nav.contact': 'Contacto',
    'nav.cta': 'Solicitar Propuesta',

    // Hero
    'hero.badge': 'SOCIOS ESTRATÉGICOS DIGITALES',
    'hero.title1': 'ESCALA TUS',
    'hero.title2': 'INGRESOS',
    'hero.title3': 'CON ESTRATEGIA',
    'hero.title4': 'BASADA EN DATOS',
    'hero.description': 'Ayudamos a empresas ambiciosas a generar leads calificados, aumentar conversiones y construir crecimiento sostenible mediante estrategias digitales integradas. Sin suposiciones—solo resultados medibles.',
    'hero.cta1': 'Conoce Nuestros Servicios',
    'hero.cta2': 'Agenda una Llamada Estratégica',

    // About
    'about.badge': 'POR QUÉ J DIGITAL',
    'about.title1': 'Socios estratégicos,',
    'about.title2': 'no solo proveedores',
    'about.description1': 'Trabajamos exclusivamente con negocios enfocados en crecimiento, listos para invertir en su presencia digital.',
    'about.description2': 'Nuestro equipo se convierte en una extensión del tuyo—gestionando campañas, optimizando embudos y entregando insights que generan resultados de negocio reales.',
    'about.feature1.title': 'Enfoque en Performance',
    'about.feature1.desc': 'Cada campaña optimizada para leads, ventas y ROI',
    'about.feature2.title': 'Equipo Senior',
    'about.feature2.desc': 'Estrategas certificados en Google, Meta y analytics',
    'about.feature3.title': 'Transparencia Total',
    'about.feature3.desc': 'Dashboards en tiempo real y revisiones semanales',
    'about.feature4.title': 'Ejecución Ágil',
    'about.feature4.desc': 'Ciclos rápidos de testing y optimización',
    'about.experience': 'AÑOS IMPULSANDO CRECIMIENTO',
    'about.cta': 'Agenda una Consulta',

    // Services
    'services.badge': 'SOLUCIONES INTEGRADAS',
    'services.title1': 'Servicios de crecimiento para',
    'services.title2': 'empresas',
    'services.title3': 'ambiciosas',
    'services.description': 'Combinamos medios pagos, estrategia orgánica y optimización de conversiones para crear crecimiento de ingresos predecible para empresas establecidas.',
    'services.projects': 'Campañas Gestionadas',
    'services.satisfaction': 'Retención de Clientes',
    'services.support': 'Soporte Dedicado',
    'services.learnMore': 'Conocer Más',
    'services.closeModal': 'Cerrar',
    'services.requestConsultation': 'Solicitar Consulta',
    'services.service1.title': 'Gestión de Medios Pagos',
    'services.service1.desc': 'Publicidad estratégica en Meta, Google y TikTok diseñada para maximizar leads calificados y reducir costos de adquisición.',
    'services.service1.features': 'Estrategia y ejecución de campañas|Segmentación avanzada de audiencias|Testing y optimización creativa|Atribución cross-platform',
    'services.service1.detail1': 'Nuestro servicio de medios pagos va más allá de la simple gestión de anuncios. Desarrollamos estrategias integrales alineadas con tus objetivos de negocio, ya sea generación de leads, ventas e-commerce o reconocimiento de marca a escala.',
    'services.service1.detail2': 'Gestionamos todo tu ecosistema de publicidad paga—desde Meta (Facebook e Instagram) hasta Google Ads, YouTube y TikTok—asegurando mensajes consistentes y asignación eficiente del presupuesto entre plataformas.',
    'services.service1.detail3': 'Nuestro enfoque incluye pruebas A/B rigurosas de creativos, landing pages y audiencias. Analizamos datos de rendimiento diariamente y realizamos optimizaciones en tiempo real para mejorar tu costo por adquisición.',
    'services.service1.detail4': 'Recibes reportes mensuales detallados con KPIs claros: costo por lead, tasas de conversión, ROAS y recomendaciones accionables para el siguiente período.',
    'services.service2.title': 'Producción de Contenido y Creativos',
    'services.service2.desc': 'Contenido de alto impacto que captura atención e impulsa engagement en todos tus canales de marketing.',
    'services.service2.features': 'Producción y edición de video|Diseño gráfico y branding|Contenido para redes sociales|Desarrollo de creativos publicitarios',
    'services.service2.detail1': 'El contenido es la base del éxito digital. Nuestro equipo creativo produce videos que detienen el scroll, gráficos atractivos y calendarios de contenido estratégico alineados con la voz de tu marca y objetivos de negocio.',
    'services.service2.detail2': 'Manejamos todo desde el desarrollo del concepto hasta la producción final—incluyendo video corto para TikTok y Reels, fotografía profesional, motion graphics y diseños estáticos optimizados para cada plataforma.',
    'services.service2.detail3': 'Nuestra estrategia de contenido está informada por datos. Analizamos qué funciona, identificamos tendencias en tu industria y refinamos continuamente nuestro enfoque creativo para maximizar engagement y conversiones.',
    'services.service2.detail4': 'Obtienes un pipeline de contenido consistente que soporta tanto el crecimiento orgánico como las campañas pagadas, asegurando que tu marca se mantenga relevante y presente para tu audiencia objetivo.',
    'services.service3.title': 'Gestión de Redes Sociales',
    'services.service3.desc': 'Gestión profesional de comunidades que construye autoridad de marca, fomenta engagement y nutre relaciones con clientes.',
    'services.service3.features': 'Estrategia y planificación de contenido|Engagement con la comunidad|Gestión de reputación|Analítica de performance',
    'services.service3.detail1': 'Tu presencia social es a menudo la primera impresión para clientes potenciales. Gestionamos tus perfiles con el profesionalismo y capacidad de respuesta que tu marca merece—construyendo confianza e impulsando engagement.',
    'services.service3.detail2': 'Nuestro equipo crea y publica contenido estratégico, responde a comentarios y mensajes de forma oportuna, y se involucra activamente con tu audiencia para fomentar una comunidad genuina alrededor de tu marca.',
    'services.service3.detail3': 'Monitoreamos menciones de marca, gestionamos tu reputación online y proporcionamos reportes mensuales detallados sobre métricas de crecimiento, tasas de engagement e insights de audiencia.',
    'services.service3.detail4': 'Ya sea que necesites soporte para Instagram, LinkedIn, Facebook o TikTok, adaptamos nuestro enfoque a cada plataforma manteniendo una voz de marca cohesiva.',
    'services.service4.title': 'Desarrollo Web y UX',
    'services.service4.desc': 'Sitios web de alta conversión construidos para rendimiento, experiencia de usuario e integración perfecta con tu stack de marketing.',
    'services.service4.features': 'Desarrollo web personalizado|Optimización de conversiones|Rendimiento y SEO|CMS e integraciones',
    'services.service4.detail1': 'Tu sitio web es tu activo digital más valioso. Construimos sitios modernos y responsivos optimizados para conversión—diseñados para convertir visitantes en leads y clientes.',
    'services.service4.detail2': 'Cada proyecto comienza entendiendo tus objetivos de negocio y el journey del usuario. Luego diseñamos y desarrollamos experiencias que guían a los visitantes hacia la acción, con CTAs claros, tiempos de carga rápidos y navegación intuitiva.',
    'services.service4.detail3': 'Nos especializamos en WordPress, Webflow y soluciones personalizadas, asegurando que tu sitio sea fácil de gestionar y escalable a medida que tu negocio crece. Todos los desarrollos incluyen optimización SEO on-page.',
    'services.service4.detail4': 'Post-lanzamiento, ofrecemos servicios de optimización continua—pruebas A/B, análisis de mapas de calor y mejoras en la tasa de conversión basadas en datos reales de usuarios.',
    'services.service5.title': 'Desarrollo de Apps Móviles',
    'services.service5.desc': 'Aplicaciones móviles personalizadas que extienden tu presencia digital y crean nuevas oportunidades de ingresos.',
    'services.service5.features': 'Desarrollo iOS y Android|Diseño UI/UX|Optimización de app store|Mantenimiento y actualizaciones',
    'services.service5.detail1': 'Una app móvil bien diseñada puede transformar el engagement con clientes y abrir nuevos canales de negocio. Desarrollamos aplicaciones nativas y cross-platform adaptadas a tus necesidades específicas.',
    'services.service5.detail2': 'Nuestro proceso comienza con un descubrimiento exhaustivo—entendiendo a tus usuarios, modelo de negocio y requerimientos técnicos. Luego diseñamos interfaces intuitivas y construimos aplicaciones robustas que funcionan impecablemente.',
    'services.service5.detail3': 'Desde el concepto hasta el lanzamiento en App Store, manejamos cada fase: wireframing, prototipado, desarrollo, testing y deployment. También optimizamos tus listings en las tiendas para máxima visibilidad.',
    'services.service5.detail4': 'Después del lanzamiento, proporcionamos soporte continuo incluyendo corrección de bugs, actualizaciones de features y monitoreo de rendimiento para asegurar que tu app siga entregando valor.',
    'services.service6.title': 'SEO y Crecimiento Orgánico',
    'services.service6.desc': 'Visibilidad orgánica sostenible que genera tráfico calificado y reduce tu dependencia de la publicidad paga.',
    'services.service6.features': 'Auditorías técnicas de SEO|Estrategia y creación de contenido|Link building y outreach|Optimización de SEO local',
    'services.service6.detail1': 'El SEO es una inversión a largo plazo que se acumula con el tiempo. Construimos estrategias de visibilidad orgánica que generan tráfico consistente y calificado sin el costo continuo de los anuncios pagados.',
    'services.service6.detail2': 'Nuestro enfoque comienza con una auditoría técnica integral—identificando y corrigiendo problemas que impactan tu posicionamiento. Luego desarrollamos estrategias de contenido enfocadas en keywords de alta intención en tu industria.',
    'services.service6.detail3': 'Creamos contenido autoritativo, construimos backlinks de calidad a través de outreach ético y optimizamos tu presencia local para negocios que sirven áreas geográficas específicas.',
    'services.service6.detail4': 'Recibes reportes mensuales rastreando posiciones de keywords, crecimiento de tráfico orgánico y conversiones atribuidas a esfuerzos de SEO—con visibilidad clara de tu retorno de inversión.',

    // CTA Section
    'cta.badge': '¿LISTO PARA ESCALAR?',
    'cta.title1': 'Construyamos Tu',
    'cta.title2': 'Motor de Crecimiento',
    'cta.title3': 'Juntos',
    'cta.description1': 'Únete a empresas establecidas que se han asociado con nosotros para',
    'cta.description2': 'lograr un crecimiento de ingresos predecible y sostenible.',
    'cta.feature1.title': 'Orientado a Resultados',
    'cta.feature1.desc': 'Enfoque basado en performance',
    'cta.feature2.title': 'Equipo Dedicado',
    'cta.feature2.desc': 'Tu éxito es nuestra prioridad',
    'cta.feature3.title': 'Onboarding Rápido',
    'cta.feature3.desc': 'Lanzamiento en 2 semanas',
    'cta.feature4.title': 'Historial Probado',
    'cta.feature4.desc': 'Crecimiento consistente de clientes',
    'cta.button': 'Agenda Tu Llamada Estratégica',
    'cta.noCard': 'Consulta gratuita de 30 minutos',
    'cta.dashboard': 'Dashboard de Cliente',
    'cta.realtime': 'Seguimiento de performance en tiempo real',
    'cta.monthlyRevenue': 'INGRESOS MENSUALES',
    'cta.thisMonth': 'este mes',
    'cta.conversions': 'Conversiones',
    'cta.avgRoi': 'ROI Promedio',
    'cta.newSale': '¡Nueva conversión!',
    'cta.agoMinutes': 'hace minutos',
    'cta.verified': 'Seguro y Transparente',
    'cta.sslCert': 'Propiedad Total de Datos',
    'cta.satisfiedClients': 'clientes confían en nosotros',

    // Portfolio
    'portfolio.title': 'PORTFOLIO',
    'portfolio.description': 'Casos de estudio mostrando impacto medible en negocios',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.uiux': 'UI/UX y Diseño Web',
    'portfolio.filter.dev': 'Desarrollo',
    'portfolio.filter.marketing': 'Marketing Digital',
    'portfolio.viewProject': 'Ver Caso de Estudio',

    // Pricing
    'pricing.badge': 'OPCIONES DE INVERSIÓN',
    'pricing.title1': 'Modelos de partnership',
    'pricing.title2': 'para empresas en crecimiento',
    'pricing.description': 'Opciones de engagement flexibles diseñadas para coincidir con tu etapa de crecimiento y objetivos',
    'pricing.monthly': 'Mensual',
    'pricing.yearly': 'Anual',
    'pricing.popular': 'Más Popular',
    'pricing.getStarted': 'Comenzar',
    'pricing.plan1.name': 'Fundación',
    'pricing.plan1.price': '$2,500',
    'pricing.plan1.desc': 'Para empresas comenzando a profesionalizar su presencia digital',
    'pricing.plan2.name': 'Crecimiento',
    'pricing.plan2.price': '$5,000',
    'pricing.plan2.desc': 'Para empresas establecidas listas para escalar sus esfuerzos de marketing',
    'pricing.plan3.name': 'Enterprise',
    'pricing.plan3.price': 'Personalizado',
    'pricing.plan3.desc': 'Partnership de servicio completo para empresas de alto crecimiento',

    // Contact
    'contact.badge': 'INICIA UNA CONVERSACIÓN',
    'contact.title1': 'Hablemos de',
    'contact.title2': 'tus metas de crecimiento',
    'contact.description': 'Cuéntanos sobre tu negocio y objetivos. Responderemos en 24 horas para agendar una llamada estratégica.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.address': 'Santiago, Chile',
    'contact.info.region': 'Atendiendo clientes globalmente',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Email',
    'contact.form.name': 'Tu Nombre',
    'contact.form.email': 'Email Corporativo',
    'contact.form.subject': '¿En qué podemos ayudarte?',
    'contact.form.message': 'Cuéntanos sobre tu negocio y objetivos',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje recibido! Te contactaremos en 24 horas.',
    'contact.form.error': 'Algo salió mal. Intenta de nuevo o escríbenos directamente.',

    // Footer
    'footer.about': 'Nos asociamos con empresas ambiciosas para construir crecimiento de ingresos predecible a través de estrategias de marketing digital integradas. Enfocados en performance, orientados por datos, orientados a resultados.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.service1': 'Medios Pagos',
    'footer.service2': 'SEO y Contenido',
    'footer.service3': 'Redes Sociales',
    'footer.service4': 'Desarrollo Web',
    'footer.service5': 'Estrategia de Crecimiento',
    'footer.contactUs': 'Contáctanos',
    'footer.cta': 'SOLICITAR PROPUESTA',
    'footer.copyright': 'Todos los derechos reservados',
    'footer.madeWith': 'Creado con precisión por J Digital',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('jdigital-language');
    return (saved as Language) || 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('jdigital-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
