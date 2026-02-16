// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.getElementById('navLinks').classList.remove('active');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Comprehensive translations object
const translations = {
    'fr': {
        // Navigation
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-about': 'À propos',
        'nav-portfolio': 'Réalisations',
        'nav-testimonials': 'Témoignages',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Topographie de précision pour un développement intelligent',
        'hero-subtitle': 'Au service de Kenitra et de tout le Maroc avec une technologie de topographie de pointe et une expertise inégalée depuis 2005',
        'hero-cta-quote': 'Demander un devis',
        'hero-cta-services': 'Nos services',
        
        // Who We Serve Section
        'who-title': 'Qui Nous Servons',
        'who-subtitle': 'Nous servons aussi bien les institutions que les particuliers',
        'who-institutional': 'Clients Institutionnels',
        'who-inst-1': 'Agences gouvernementales',
        'who-inst-2': 'Promoteurs immobiliers',
        'who-inst-3': 'Architectes & Ingénieurs',
        'who-inst-4': 'Entreprises de construction',
        'who-inst-5': 'Bureaux d\'études',
        'who-individuals': 'Particuliers',
        'who-ind-1': 'Propriétaires de terrains',
        'who-ind-2': 'Propriétaires de maisons',
        'who-ind-3': 'Investisseurs privés',
        'who-ind-4': 'Futurs acquéreurs',
        'who-ind-5': 'Héritiers en succession',
        
        // Services Section
        'services-title': 'Nos Services',
        'services-subtitle': 'Solutions complètes de topographie pour tous vos projets fonciers et cadastraux',
        'service-1-title': 'Dossiers Techniques Cadastrales',
        'service-1-desc': 'Constitution complète de dossiers pour l\'ANCFCC incluant levés, plans et documents administratifs.',
        'service-2-title': 'Levés Topographiques',
        'service-2-desc': 'Cartographie détaillée des élévations pour planification de construction et aménagement du territoire.',
        'service-3-title': 'Délimitation de Propriété',
        'service-3-desc': 'Détermination précise des limites pour documentation légale et résolution de litiges.',
        'service-4-title': 'Implantation de Construction',
        'service-4-desc': 'Placement précis des éléments de construction selon les plans d\'ingénierie.',
        'service-5-title': 'Copropriétés',
        'service-5-desc': 'Expertise en division et gestion technique des biens en copropriété.',
        'service-6-title': 'Mise en Concordance',
        'service-6-desc': 'Mise en concordance des immeubles avec les registres fonciers.',
        'service-7-title': 'Lotissements',
        'service-7-desc': 'Subdivision de terrains pour projets de développement résidentiel ou commercial.',
        'service-8-title': 'Immatriculation Foncière d\'Ensemble',
        'service-8-desc': 'Procédures complètes d\'immatriculation pour grands ensembles fonciers.',
        'service-9-title': 'Plans Cotés',
        'service-9-desc': 'Plans détaillés avec dimensions précises pour vos projets.',
        'service-10-title': 'Plans de Situation',
        'service-10-desc': 'Localisation précise de votre propriété dans son environnement.',
        'service-11-title': 'ALTA/NSPS Surveys',
        'service-11-desc': 'Relevés standards internationaux pour clients internationaux.',
        'service-12-title': 'SIG & Géomatique',
        'service-12-desc': 'Analyse géospatiale et systèmes d\'information géographique.',
        
        // About Section
        'about-title': 'Les experts en topographie de confiance au Maroc',
        'about-paragraph1': 'Fondée en 2005, STOPSIT est une société professionnelle de topographie basée à Kenitra. Avec plus de 2 900 levés cadastraux réalisés, nous sommes devenus un partenaire de confiance pour l\'ANCFCC (Agence Nationale de la Conservation Foncière, du Cadastre et de la Cartographie) et l\'Agence Nationale des Eaux et Forêts.',
        'about-paragraph2': 'Notre équipe d\'ingénieurs géomètres topographes et de techniciens spécialisés combine les principes traditionnels de topographie avec une technologie de pointe pour fournir des résultats précis et fiables. Notre engagement envers l\'excellence nous a permis de servir efficacement Kenitra, Sidi Slimane, Fquih Ben Saleh et l\'ensemble du Maroc.',
        'stat-founded': 'Année de création',
        'stat-projects': 'Projets réalisés',
        'stat-years': 'Années d\'expérience',
        'credential-iso': 'Certification ISO 9001 en cours',
        'credential-ancfcc': 'Prestataire Agréé ANCFCC',
        'credential-licensed': 'Topographes Agréés',
        'credential-experience': '20+ ans d\'expérience',
        
        // Portfolio Section
        'portfolio-title': 'Nos Réalisations',
        'portfolio-subtitle': 'Projets majeurs réalisés pour des institutions nationales',
        'portfolio-ancfcc': 'Partenaire principal depuis 2006',
        'portfolio-forests': 'Agence Eaux et Forêts',
        'portfolio-forests-desc': 'Projets environnementaux',
        'project-recent-desc': '4,346 hectares immatriculés - Commune Rurale de TAMCHACHAT (3,192 Ha) et SEBT JAHJOUH (1,154 Ha) - Réceptionnés juin 2024',
        'project-chefchaouen-desc': '5,959 hectares - Canton forestier de Taïnza et BabBerred - Projet en cours',
        'project-alomrane-desc': 'Travaux de bornage et dossiers techniques cadastraux - Lotissement Jnane TR 2, Kenitra',
        'project-azilal-desc': '14,500 hectares - Dossiers cadastraux des cantons de Ighir N\'Tmich, Jbel Iskt et Sidi Meskour',
        'project-khenifra-desc': '3,667 hectares - Forêt domaniale d\'Azrou N\'Ait Lahcen à El Kbab - Réceptionné décembre 2025',
        'project-1-desc': '335 affaires cadastrales traitées',
        'project-2-desc': '197 affaires cadastrales traitées',
        'project-3-desc': '2,025 affaires cadastrales traitées - Notre plus grand projet',
        'project-4-desc': '404 affaires cadastrales traitées',
        
        // Technical Capabilities
        'tech-title': 'Moyens Techniques',
        'tech-subtitle': 'Équipements de pointe pour des résultats précis',
        'tech-1-title': 'GNSS/GPS',
        'tech-1-desc': '14 récepteurs de positionnement par satellite (Kolida, Trimble, CHC HUACE) pour une précision centimétrique',
        'tech-2-title': 'Stations Totales',
        'tech-2-desc': '2 stations totales SOKKIA pour mesures topographiques de haute précision',
        'tech-3-title': 'Logiciels CAO/DAO',
        'tech-3-desc': 'AutoCAD 2012 et Geomedia COVADIS V.12 pour conception assistée par ordinateur',
        'tech-4-title': 'Traitement GNSS',
        'tech-4-desc': 'Trimble Business Center (TBC) pour post-traitement professionnel des données satellitaires',
        'tech-5-title': 'Flotte de Véhicules',
        'tech-5-desc': '3 véhicules professionnels 4x4 pour opérations sur terrain',
        'tech-6-title': 'Équipement Bureau',
        'tech-6-desc': '13 ordinateurs, traceurs format A0, scanners et imprimantes professionnelles',
        
        // Testimonials Section
        'testimonials-title': 'Témoignages Clients',
        'testimonials-subtitle': 'Ce que nos clients disent de nous',
        
        // Contact Section
        'contact-title': 'Contactez-nous',
        'contact-subtitle': 'Vous avez des questions ou êtes prêt à démarrer votre projet? Contactez notre équipe dès aujourd\'hui',
        'contact-name': 'Nom complet',
        'contact-email': 'Adresse e-mail',
        'contact-phone': 'Numéro de téléphone',
        'contact-service': 'Service requis',
        'contact-select': 'Sélectionnez un service',
        'contact-opt-1': 'Dossier Technique Cadastral',
        'contact-opt-2': 'Levé Topographique',
        'contact-opt-3': 'Délimitation de Propriété',
        'contact-opt-4': 'Implantation de Construction',
        'contact-opt-5': 'Copropriété',
        'contact-opt-6': 'Mise en Concordance',
        'contact-opt-7': 'Lotissement',
        'contact-opt-8': 'Immatriculation Foncière',
        'contact-opt-9': 'Autre Service',
        'contact-message': 'Message',
        'contact-submit': 'Envoyer la demande',
        'contact-location': 'Notre emplacement',
        'contact-phone-label': 'Numéros de téléphone',
        'contact-email-label': 'Adresse e-mail',
        'contact-hours': 'Heures d\'ouverture',
        'contact-hours-mon-fri': 'Lundi - Vendredi: 8h00 - 18h00',
        'contact-hours-sat': 'Samedi: 8h00 - 12h00',
        
        // Footer
        'footer-tagline': 'Services professionnels de topographie à Kenitra et dans tout le Maroc depuis 2005.',
        'footer-quicklinks': 'Liens rapides',
        'footer-services': 'Services Principaux',
        'footer-connect': 'Connectez-vous avec nous',
        'footer-copyright': '© 2025 STOPSIT Topographie. Tous droits réservés.',
        
        // Form Alert
        'form-success': 'Merci pour votre message! Nous vous répondrons dans les plus brefs délais.'
    },
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-testimonials': 'Testimonials',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Precision Land Surveying for Smart Development',
        'hero-subtitle': 'Serving Kenitra and all of Morocco with cutting-edge surveying technology and unmatched expertise since 2005',
        'hero-cta-quote': 'Request a Quote',
        'hero-cta-services': 'Our Services',
        
        // Who We Serve Section
        'who-title': 'Who We Serve',
        'who-subtitle': 'We serve both institutions and individuals',
        'who-institutional': 'Institutional Clients',
        'who-inst-1': 'Government agencies',
        'who-inst-2': 'Property developers',
        'who-inst-3': 'Architects & Engineers',
        'who-inst-4': 'Construction companies',
        'who-inst-5': 'Engineering firms',
        'who-individuals': 'Individuals',
        'who-ind-1': 'Land owners',
        'who-ind-2': 'Home owners',
        'who-ind-3': 'Private investors',
        'who-ind-4': 'Future buyers',
        'who-ind-5': 'Inheritance heirs',
        
        // Services Section
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive surveying solutions for all your land and cadastral projects',
        'service-1-title': 'Cadastral Technical Files',
        'service-1-desc': 'Complete file preparation for ANCFCC including surveys, plans and administrative documents.',
        'service-2-title': 'Topographic Surveys',
        'service-2-desc': 'Detailed elevation mapping for construction planning and land development.',
        'service-3-title': 'Boundary Surveys',
        'service-3-desc': 'Precise boundary determination for legal documentation and dispute resolution.',
        'service-4-title': 'Construction Staking',
        'service-4-desc': 'Precise placement of construction elements according to engineering plans.',
        'service-5-title': 'Co-ownership Surveys',
        'service-5-desc': 'Expertise in division and technical management of co-owned properties.',
        'service-6-title': 'Building Concordance',
        'service-6-desc': 'Alignment of buildings with land registry records.',
        'service-7-title': 'Land Subdivision',
        'service-7-desc': 'Land subdivision for residential or commercial development projects.',
        'service-8-title': 'Comprehensive Land Registration',
        'service-8-desc': 'Complete registration procedures for large land ensembles.',
        'service-9-title': 'Dimensioned Plans',
        'service-9-desc': 'Detailed plans with precise dimensions for your projects.',
        'service-10-title': 'Site Plans',
        'service-10-desc': 'Precise location of your property in its environment.',
        'service-11-title': 'ALTA/NSPS Surveys',
        'service-11-desc': 'International standard surveys for international clients.',
        'service-12-title': 'GIS & Geomatics',
        'service-12-desc': 'Geospatial analysis and geographic information systems.',
        
        // About Section
        'about-title': 'Morocco\'s Trusted Land Surveying Experts',
        'about-paragraph1': 'Founded in 2005, STOPSIT is a professional surveying company based in Kenitra. With over 2,900 cadastral surveys completed, we have become a trusted partner for ANCFCC (National Agency for Land Conservation, Cadastre and Cartography) and the National Agency for Water and Forests.',
        'about-paragraph2': 'Our team of professional surveying engineers and specialized technicians combines traditional surveying principles with cutting-edge technology to deliver accurate, reliable results. Our commitment to excellence has enabled us to effectively serve Kenitra, Sidi Slimane, Fquih Ben Saleh and all of Morocco.',
        'stat-founded': 'Year founded',
        'stat-projects': 'Projects completed',
        'stat-years': 'Years of experience',
        'credential-iso': 'ISO 9001 Certified',
        'credential-ancfcc': 'ANCFCC Approved Contractor',
        'credential-licensed': 'Licensed Surveyors',
        'credential-experience': '20+ years experience',
        
        // Portfolio Section
        'portfolio-title': 'Our Portfolio',
        'portfolio-subtitle': 'Major projects completed for national institutions',
        'portfolio-ancfcc': 'Main partner since 2006',
        'portfolio-forests': 'Water and Forests Agency',
        'portfolio-forests-desc': 'Environmental projects',
        'project-recent-desc': '4,346 hectares registered - Rural Commune of TAMCHACHAT (3,192 Ha) and SEBT JAHJOUH (1,154 Ha) - Completed June 2024',
        'project-khenifra-desc': '3,667 hectares - State forest of Azrou N\'Ait Lahcen in El Kbab - Completed December 2025',
        'project-1-desc': '335 cadastral cases processed',
        'project-2-desc': '197 cadastral cases processed',
        'project-3-desc': '2,025 cadastral cases processed - Our largest project',
        'project-4-desc': '404 cadastral cases processed',
        
        // Technical Capabilities
        'tech-title': 'Technical Capabilities',
        'tech-subtitle': 'State-of-the-art equipment for precise results',
        'tech-1-title': 'GNSS/GPS',
        'tech-1-desc': '14 satellite positioning receivers (Kolida, Trimble, CHC HUACE) for centimeter-level precision',
        'tech-2-title': 'Total Stations',
        'tech-2-desc': '2 SOKKIA total stations for high-precision topographic measurements',
        'tech-3-title': 'CAD Software',
        'tech-3-desc': 'AutoCAD 2012 and Geomedia COVADIS V.12 for computer-aided design',
        'tech-4-title': 'GNSS Processing',
        'tech-4-desc': 'Trimble Business Center (TBC) for professional satellite data post-processing',
        'tech-5-title': 'Vehicle Fleet',
        'tech-5-desc': '3 professional 4x4 vehicles for field operations',
        'tech-6-title': 'Office Equipment',
        'tech-6-desc': '13 computers, A0 format plotters, scanners and professional printers',
        
        // Testimonials Section
        'testimonials-title': 'Client Testimonials',
        'testimonials-subtitle': 'What our clients say about us',
        
        // Contact Section
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Have questions or ready to start your project? Reach out to our team today',
        'contact-name': 'Full Name',
        'contact-email': 'Email Address',
        'contact-phone': 'Phone Number',
        'contact-service': 'Service Needed',
        'contact-select': 'Select a service',
        'contact-opt-1': 'Cadastral Technical File',
        'contact-opt-2': 'Topographic Survey',
        'contact-opt-3': 'Boundary Survey',
        'contact-opt-4': 'Construction Staking',
        'contact-opt-5': 'Co-ownership',
        'contact-opt-6': 'Building Concordance',
        'contact-opt-7': 'Land Subdivision',
        'contact-opt-8': 'Land Registration',
        'contact-opt-9': 'Other Service',
        'contact-message': 'Message',
        'contact-submit': 'Submit Request',
        'contact-location': 'Our Location',
        'contact-phone-label': 'Phone Numbers',
        'contact-email-label': 'Email Address',
        'contact-hours': 'Working Hours',
        'contact-hours-mon-fri': 'Monday - Friday: 8:00 AM - 6:00 PM',
        'contact-hours-sat': 'Saturday: 8:00 AM - 12:00 PM',
        
        // Footer
        'footer-tagline': 'Professional land surveying services in Kenitra and throughout Morocco since 2005.',
        'footer-quicklinks': 'Quick Links',
        'footer-services': 'Main Services',
        'footer-connect': 'Connect With Us',
        'footer-copyright': '© 2025 STOPSIT Land Surveying. All Rights Reserved.',
        
        // Form Alert
        'form-success': 'Thank you for your message! We will get back to you shortly.'
    },
    'ar': {
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-services': 'الخدمات',
        'nav-about': 'من نحن',
        'nav-portfolio': 'إنجازاتنا',
        'nav-testimonials': 'الشهادات',
        'nav-contact': 'اتصل بنا',
        
        // Hero Section
        'hero-title': 'مسح الأراضي بدقة للتطوير الذكي',
        'hero-subtitle': 'نخدم القنيطرة وجميع أنحاء المغرب بأحدث تقنيات المسح وخبرة لا مثيل لها منذ عام 2005',
        'hero-cta-quote': 'طلب عرض سعر',
        'hero-cta-services': 'خدماتنا',
        
        // Who We Serve Section
        'who-title': 'من نخدم',
        'who-subtitle': 'نخدم المؤسسات والأفراد على حد سواء',
        'who-institutional': 'العملاء المؤسسيون',
        'who-inst-1': 'الوكالات الحكومية',
        'who-inst-2': 'مطوري العقارات',
        'who-inst-3': 'المهندسون المعماريون والمدنيون',
        'who-inst-4': 'شركات البناء',
        'who-inst-5': 'مكاتب الدراسات',
        'who-individuals': 'الأفراد',
        'who-ind-1': 'أصحاب الأراضي',
        'who-ind-2': 'أصحاب المنازل',
        'who-ind-3': 'المستثمرون الخاصون',
        'who-ind-4': 'المشترون المستقبليون',
        'who-ind-5': 'الورثة في حالات الميراث',
        
        // Services Section
        'services-title': 'خدماتنا',
        'services-subtitle': 'حلول مسح شاملة لجميع مشاريعك العقارية والعقارية',
        'service-1-title': 'الملفات التقنية المساحية',
        'service-1-desc': 'إعداد ملف كامل للوكالة الوطنية للمحافظة العقارية بما في ذلك المسوحات والخطط والوثائق الإدارية.',
        'service-2-title': 'المسوحات الطبوغرافية',
        'service-2-desc': 'رسم خرائط تفصيلية للارتفاعات لتخطيط البناء وتطوير الأراضي.',
        'service-3-title': 'تحديد الحدود',
        'service-3-desc': 'تحديد دقيق للحدود للوثائق القانونية وحل النزاعات.',
        'service-4-title': 'تخطيط البناء',
        'service-4-desc': 'وضع دقيق لعناصر البناء وفقًا للخطط الهندسية.',
        'service-5-title': 'الملكية المشتركة',
        'service-5-desc': 'خبرة في تقسيم وإدارة العقارات المشتركة تقنيًا.',
        'service-6-title': 'مطابقة المباني',
        'service-6-desc': 'مواءمة المباني مع سجلات الملكية العقارية.',
        'service-7-title': 'تقسيم الأراضي',
        'service-7-desc': 'تقسيم الأراضي لمشاريع التطوير السكنية أو التجارية.',
        'service-8-title': 'التسجيل العقاري الشامل',
        'service-8-desc': 'إجراءات تسجيل كاملة للأراضي الكبيرة.',
        'service-9-title': 'الخطط المقاسة',
        'service-9-desc': 'خطط مفصلة بأبعاد دقيقة لمشاريعك.',
        'service-10-title': 'خطط الموقع',
        'service-10-desc': 'موقع دقيق لممتلكاتك في بيئتها.',
        'service-11-title': 'مسوحات ALTA/NSPS',
        'service-11-desc': 'مسوحات معايير دولية للعملاء الدوليين.',
        'service-12-title': 'نظم المعلومات الجغرافية',
        'service-12-desc': 'التحليل الجغرافي المكاني ونظم المعلومات الجغرافية.',
        
        // About Section
        'about-title': 'خبراء مسح الأراضي الموثوق بهم في المغرب',
        'about-paragraph1': 'تأسست شركة STOPSIT في عام 2005، وهي شركة مسح مهنية مقرها القنيطرة. مع أكثر من 2900 مسح عقاري منجز، أصبحنا شريكًا موثوقًا به للوكالة الوطنية للمحافظة العقارية والمسح والخرائط والوكالة الوطنية للمياه والغابات.',
        'about-paragraph2': 'يجمع فريقنا من المهندسين المساحين المحترفين والفنيين المتخصصين بين مبادئ المسح التقليدية والتكنولوجيا المتطورة لتقديم نتائج دقيقة وموثوقة. لقد مكننا التزامنا بالتميز من خدمة القنيطرة وسيدي سليمان والفقيه بن صالح وكل المغرب بفعالية.',
        'stat-founded': 'سنة التأسيس',
        'stat-projects': 'المشاريع المنجزة',
        'stat-years': 'سنوات الخبرة',
        'credential-iso': 'معتمد ISO 9001',
        'credential-ancfcc': 'مقاول معتمد من الوكالة الوطنية',
        'credential-licensed': 'مساحون مرخصون',
        'credential-experience': 'أكثر من 20 عامًا من الخبرة',
        
        // Portfolio Section
        'portfolio-title': 'إنجازاتنا',
        'portfolio-subtitle': 'مشاريع رئيسية منجزة للمؤسسات الوطنية',
        'portfolio-ancfcc': 'شريك رئيسي منذ 2006',
        'portfolio-forests': 'وكالة المياه والغابات',
        'portfolio-forests-desc': 'مشاريع بيئية',
        'project-recent-desc': '4,346 هكتارًا مسجلًا - جماعة TAMCHACHAT القروية (3,192 هكتار) و SEBT JAHJOUH (1,154 هكتار) - اكتملت في يونيو 2024',
        'project-khenifra-desc': '3,667 هكتار - غابة ولاية أزرو نايت لحسن في الكباب - اكتملت في ديسمبر 2025',
        'project-1-desc': '335 قضية عقارية معالجة',
        'project-2-desc': '197 قضية عقارية معالجة',
        'project-3-desc': '2,025 قضية عقارية معالجة - أكبر مشروع لنا',
        'project-4-desc': '404 قضية عقارية معالجة',
        
        // Technical Capabilities
        'tech-title': 'الوسائل التقنية',
        'tech-subtitle': 'معدات متطورة لنتائج دقيقة',
        'tech-1-title': 'GNSS/GPS',
        'tech-1-desc': '14 جهاز استقبال تحديد المواقع بالأقمار الصناعية (كوليدا، تريمبل، CHC HUACE) بدقة سنتيمترية',
        'tech-2-title': 'المحطات الشاملة',
        'tech-2-desc': 'محطتان شاملتان SOKKIA للقياسات الطبوغرافية عالية الدقة',
        'tech-3-title': 'برامج CAD',
        'tech-3-desc': 'AutoCAD 2012 و Geomedia COVADIS V.12 للتصميم بمساعدة الكمبيوتر',
        'tech-4-title': 'معالجة GNSS',
        'tech-4-desc': 'Trimble Business Center (TBC) لمعالجة بيانات الأقمار الصناعية المهنية',
        'tech-5-title': 'أسطول المركبات',
        'tech-5-desc': '3 مركبات مهنية 4x4 للعمليات الميدانية',
        'tech-6-title': 'معدات المكتب',
        'tech-6-desc': '13 جهاز كمبيوتر، راسمات بتنسيق A0، ماسحات ضوئية وطابعات مهنية',
        
        // Testimonials Section
        'testimonials-title': 'شهادات العملاء',
        'testimonials-subtitle': 'ما يقوله عملاؤنا عنا',
        
        // Contact Section
        'contact-title': 'تواصل معنا',
        'contact-subtitle': 'هل لديك أسئلة أو مستعد لبدء مشروعك؟ تواصل مع فريقنا اليوم',
        'contact-name': 'الاسم الكامل',
        'contact-email': 'البريد الإلكتروني',
        'contact-phone': 'رقم الهاتف',
        'contact-service': 'الخدمة المطلوبة',
        'contact-select': 'اختر خدمة',
        'contact-opt-1': 'ملف تقني عقاري',
        'contact-opt-2': 'مسح طبوغرافي',
        'contact-opt-3': 'تحديد الحدود',
        'contact-opt-4': 'تخطيط البناء',
        'contact-opt-5': 'ملكية مشتركة',
        'contact-opt-6': 'مطابقة المباني',
        'contact-opt-7': 'تقسيم الأراضي',
        'contact-opt-8': 'التسجيل العقاري',
        'contact-opt-9': 'خدمة أخرى',
        'contact-message': 'الرسالة',
        'contact-submit': 'إرسال الطلب',
        'contact-location': 'موقعنا',
        'contact-phone-label': 'أرقام الهاتف',
        'contact-email-label': 'البريد الإلكتروني',
        'contact-hours': 'ساعات العمل',
        'contact-hours-mon-fri': 'الاثنين - الجمعة: 8:00 صباحًا - 6:00 مساءً',
        'contact-hours-sat': 'السبت: 8:00 صباحًا - 12:00 ظهرًا',
        
        // Footer
        'footer-tagline': 'خدمات مسح الأراضي المهنية في القنيطرة وجميع أنحاء المغرب منذ 2005.',
        'footer-quicklinks': 'روابط سريعة',
        'footer-services': 'الخدمات الرئيسية',
        'footer-connect': 'تواصل معنا',
        'footer-copyright': '© 2025 STOPSIT لمسح الأراضي. جميع الحقوق محفوظة.',
        
        // Form Alert
        'form-success': 'شكرًا لرسالتك! سنرد عليك في أقرب وقت ممكن.'
    }
};

// Set default language to French - CRITICAL FIX
let currentLang = localStorage.getItem('selectedLanguage') || 'fr';

// Function to update all text content on the page
function updatePageLanguage(lang) {
    // Save user preference
    localStorage.setItem('selectedLanguage', lang);
    currentLang = lang;
    
    // Update lang attribute on HTML
    document.documentElement.setAttribute('lang', lang);
    
    // Toggle RTL for Arabic
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        
        // Force logo to maintain LTR direction
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.direction = 'ltr';
            logo.style.marginLeft = '40px';
        }
        
        // Fix navbar layout
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.justifyContent = 'flex-start';
            navbar.style.gap = '40px';
        }
        
        // Ensure nav links have proper spacing
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.style.marginLeft = '40px';
            navLinks.style.marginRight = 'auto';
        }
    } else {
        document.body.classList.remove('rtl');
        
        // Reset all custom spacing when not in RTL
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.marginLeft = '';
        }
        
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.justifyContent = '';
            navbar.style.gap = '';
        }
        
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.style.marginLeft = '';
            navLinks.style.marginRight = '';
        }
    }
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Force language switcher to always maintain LTR direction
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        languageSwitcher.style.direction = 'ltr';
    }
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Create language switcher if it doesn't exist
    if (!document.querySelector('.language-switcher-container')) {
        const navLinks = document.getElementById('navLinks');
        
        // Create container
        const container = document.createElement('li');
        container.className = 'language-switcher-container';
        
        // Create the actual language switcher
        const langSwitcher = document.createElement('div');
        langSwitcher.className = 'language-switcher';
        langSwitcher.style.direction = 'ltr'; // Force LTR direction
        langSwitcher.innerHTML = `
            <button class="lang-btn" data-lang="fr">FR</button>
            <button class="lang-btn" data-lang="en">EN</button>
            <button class="lang-btn" data-lang="ar">عربي</button>
        `;
        
        container.appendChild(langSwitcher);
        navLinks.appendChild(container);
    }
    
    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updatePageLanguage(lang);
        });
    });
    
    // Initialize the page with saved language or default to French
    updatePageLanguage(currentLang);
    
    // Force language switcher direction after initialization
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        languageSwitcher.style.direction = 'ltr';
    }
        
    // Form submission handler - show confirmation but still submit
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Show a quick alert (optional)
            // Note: Alert will pause submission briefly
            const message = translations[currentLang]['form-success'] || 
                        'Thank you for your message! We will respond soon.';
            
            // Don't prevent default - form will submit after alert
            setTimeout(() => {
                alert(message);
            }, 100);
        });
    }
});
