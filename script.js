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
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset();
});

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
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset();
});

// Language switcher functionality
const translations = {
    'fr': {
        // Navigation
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-about': 'À propos',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Topographie de précision pour un développement intelligent',
        'hero-subtitle': 'Au service de Kenitra et de tout le Maroc avec une technologie de topographie de pointe et une expertise inégalée',
        'hero-cta-quote': 'Demander un devis',
        'hero-cta-services': 'Nos services',
        
        // Services Section
        'services-title': 'Nos Services',
        'services-subtitle': 'Nous fournissons des solutions complètes de topographie pour vous aider à prendre des décisions éclairées concernant votre propriété',
        'service-boundary': 'Relevés de limites',
        'service-boundary-desc': 'Détermination précise des limites de propriété pour la documentation légale et la résolution des litiges à Kenitra et dans les environs.',
        'service-topo': 'Relevés topographiques',
        'service-topo-desc': 'Cartographie détaillée des élévations pour la planification de la construction et l\'aménagement du territoire, utilisant des équipements de pointe pour des résultats précis.',
        'service-construction': 'Jalonnement de construction',
        'service-construction-desc': 'Placement précis des éléments de construction selon les plans d\'ingénierie, assurant que votre projet est construit exactement selon les spécifications.',
        'service-alta': 'Relevés ALTA/NSPS',
        'service-alta-desc': 'Relevés complets répondant aux normes nationales pour les transactions immobilières, vous donnant une confiance totale dans votre investissement.',
        
        // About Section
        'about-title': 'Les experts en topographie de confiance au Maroc',
        'about-paragraph1': 'Stopsit fournit des services professionnels de topographie à Kenitra et dans tout le Maroc depuis plus de 15 ans. Notre équipe combine les principes traditionnels de topographie avec une technologie de pointe pour fournir des résultats précis et fiables.',
        'about-paragraph2': 'Nous sommes fiers de notre attention aux détails et de notre engagement envers l\'excellence, qui ont fait de nous le partenaire privilégié des promoteurs immobiliers, des architectes, des ingénieurs et des propriétaires dans tout le pays.',
        'credential-licensed': 'Géomètres agréés',
        'credential-experience': '15+ ans d\'expérience',
        'credential-iso': 'Certifié ISO 9001',
        
        // Contact Section
        'contact-title': 'Contactez-nous',
        'contact-subtitle': 'Vous avez des questions ou êtes prêt à démarrer votre projet? Contactez notre équipe dès aujourd\'hui',
        'contact-name': 'Nom complet',
        'contact-email': 'Adresse e-mail',
        'contact-phone': 'Numéro de téléphone',
        'contact-service': 'Service requis',
        'contact-select': 'Sélectionnez un service',
        'contact-boundary': 'Relevé de limites',
        'contact-topo': 'Relevé topographique',
        'contact-construction': 'Jalonnement de construction',
        'contact-alta': 'Relevé ALTA/NSPS',
        'contact-other': 'Autres services',
        'contact-message': 'Message',
        'contact-submit': 'Envoyer la demande',
        'contact-location': 'Notre emplacement',
        'contact-phone-label': 'Numéro de téléphone',
        'contact-email-label': 'Adresse e-mail',
        'contact-hours': 'Heures d\'ouverture',
        'contact-hours-value': 'Lundi - Vendredi: 8h00 - 18h00',
        
        // Footer
        'footer-tagline': 'Services professionnels de topographie à Kenitra et dans tout le Maroc.',
        'footer-quicklinks': 'Liens rapides',
        'footer-services': 'Services',
        'footer-connect': 'Connectez-vous avec nous',
        'footer-copyright': '© 2025 Stopsit Topographie. Tous droits réservés.',
        
        // Form Alert
        'form-success': 'Merci pour votre message! Nous vous répondrons dans les plus brefs délais.'
    },
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Precision Land Surveying for Smart Development',
        'hero-subtitle': 'Serving Kenitra and all of Morocco with cutting-edge surveying technology and unmatched expertise',
        'hero-cta-quote': 'Request a Quote',
        'hero-cta-services': 'Our Services',
        
        // Services Section
        'services-title': 'Our Services',
        'services-subtitle': 'We provide comprehensive land surveying solutions to help you make informed decisions about your property',
        'service-boundary': 'Boundary Surveys',
        'service-boundary-desc': 'Accurate property line determination for legal documentation and dispute resolution throughout Kenitra and surrounding areas.',
        'service-topo': 'Topographic Surveys',
        'service-topo-desc': 'Detailed elevation mapping for construction planning and land development, utilizing state-of-the-art equipment for precision results.',
        'service-construction': 'Construction Staking',
        'service-construction-desc': 'Precise placement of construction elements according to engineered plans, ensuring your project is built exactly to specifications.',
        'service-alta': 'ALTA/NSPS Surveys',
        'service-alta-desc': 'Comprehensive surveys meeting national standards for property transactions, providing you with complete confidence in your investment.',
        
        // About Section
        'about-title': 'Morocco\'s Trusted Land Surveying Experts',
        'about-paragraph1': 'Stopsit has been providing professional land surveying services in Kenitra and throughout Morocco for over 15 years. Our team combines traditional surveying principles with cutting-edge technology to deliver accurate, reliable results.',
        'about-paragraph2': 'We take pride in our attention to detail and commitment to excellence, which has made us the preferred partner for property developers, architects, engineers, and homeowners across the country.',
        'credential-licensed': 'Licensed Surveyors',
        'credential-experience': '15+ Years Experience',
        'credential-iso': 'ISO 9001 Certified',
        
        // Contact Section
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Have questions or ready to start your project? Reach out to our team today',
        'contact-name': 'Full Name',
        'contact-email': 'Email Address',
        'contact-phone': 'Phone Number',
        'contact-service': 'Service Needed',
        'contact-select': 'Select a service',
        'contact-boundary': 'Boundary Survey',
        'contact-topo': 'Topographic Survey',
        'contact-construction': 'Construction Staking',
        'contact-alta': 'ALTA/NSPS Survey',
        'contact-other': 'Other Services',
        'contact-message': 'Message',
        'contact-submit': 'Submit Request',
        'contact-location': 'Our Location',
        'contact-phone-label': 'Phone Number',
        'contact-email-label': 'Email Address',
        'contact-hours': 'Working Hours',
        'contact-hours-value': 'Monday - Friday: 8:00 AM - 6:00 PM',
        
        // Footer
        'footer-tagline': 'Professional land surveying services in Kenitra and throughout Morocco.',
        'footer-quicklinks': 'Quick Links',
        'footer-services': 'Services',
        'footer-connect': 'Connect With Us',
        'footer-copyright': '© 2025 Stopsit Land Surveying. All Rights Reserved.',
        
        // Form Alert
        'form-success': 'Thank you for your message! We will get back to you shortly.'
    },
    'ar': {
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-services': 'الخدمات',
        'nav-about': 'من نحن',
        'nav-contact': 'اتصل بنا',
        
        // Hero Section
        'hero-title': 'مسح الأراضي بدقة للتطوير الذكي',
        'hero-subtitle': 'نخدم القنيطرة وجميع أنحاء المغرب بأحدث تقنيات المسح وخبرة لا مثيل لها',
        'hero-cta-quote': 'طلب عرض سعر',
        'hero-cta-services': 'خدماتنا',
        
        // Services Section
        'services-title': 'خدماتنا',
        'services-subtitle': 'نقدم حلول مسح الأراضي الشاملة لمساعدتك على اتخاذ قرارات مستنيرة بشأن عقارك',
        'service-boundary': 'مسح الحدود',
        'service-boundary-desc': 'تحديد دقيق لحدود الممتلكات للوثائق القانونية وحل النزاعات في جميع أنحاء القنيطرة والمناطق المحيطة بها.',
        'service-topo': 'المسح الطبوغرافي',
        'service-topo-desc': 'رسم خرائط تفصيلية للارتفاعات لتخطيط البناء وتطوير الأراضي، باستخدام أحدث المعدات للحصول على نتائج دقيقة.',
        'service-construction': 'تخطيط البناء',
        'service-construction-desc': 'وضع دقيق لعناصر البناء وفقًا للخطط الهندسية، مما يضمن بناء مشروعك وفقًا للمواصفات بالضبط.',
        'service-alta': 'مسح ALTA/NSPS',
        'service-alta-desc': 'مسوحات شاملة تلبي المعايير الوطنية لمعاملات العقارات، مما يمنحك ثقة كاملة في استثمارك.',
        
        // About Section
        'about-title': 'خبراء مسح الأراضي الموثوق بهم في المغرب',
        'about-paragraph1': 'تقدم شركة Stopsit خدمات مسح الأراضي المهنية في القنيطرة وجميع أنحاء المغرب لأكثر من 15 عامًا. يجمع فريقنا بين مبادئ المسح التقليدية والتكنولوجيا المتطورة لتقديم نتائج دقيقة وموثوقة.',
        'about-paragraph2': 'نحن نفخر باهتمامنا بالتفاصيل والتزامنا بالتميز، مما جعلنا الشريك المفضل لمطوري العقارات والمهندسين المعماريين والمهندسين وأصحاب المنازل في جميع أنحاء البلاد.',
        'credential-licensed': 'مساحون مرخصون',
        'credential-experience': 'خبرة أكثر من 15 عامًا',
        'credential-iso': 'حاصل على شهادة الأيزو 9001',
        
        // Contact Section
        'contact-title': 'تواصل معنا',
        'contact-subtitle': 'هل لديك أسئلة أو مستعد لبدء مشروعك؟ تواصل مع فريقنا اليوم',
        'contact-name': 'الاسم الكامل',
        'contact-email': 'البريد الإلكتروني',
        'contact-phone': 'رقم الهاتف',
        'contact-service': 'الخدمة المطلوبة',
        'contact-select': 'اختر خدمة',
        'contact-boundary': 'مسح الحدود',
        'contact-topo': 'المسح الطبوغرافي',
        'contact-construction': 'تخطيط البناء',
        'contact-alta': 'مسح ALTA/NSPS',
        'contact-other': 'خدمات أخرى',
        'contact-message': 'الرسالة',
        'contact-submit': 'إرسال الطلب',
        'contact-location': 'موقعنا',
        'contact-phone-label': 'رقم الهاتف',
        'contact-email-label': 'البريد الإلكتروني',
        'contact-hours': 'ساعات العمل',
        'contact-hours-value': 'الاثنين - الجمعة: 8:00 صباحًا - 6:00 مساءً',
        
        // Footer
        'footer-tagline': 'خدمات مسح الأراضي المهنية في القنيطرة وجميع أنحاء المغرب.',
        'footer-quicklinks': 'روابط سريعة',
        'footer-services': 'الخدمات',
        'footer-connect': 'تواصل معنا',
        'footer-copyright': '© 2025 Stopsit لمسح الأراضي. جميع الحقوق محفوظة.',
        
        // Form Alert
        'form-success': 'شكرًا لرسالتك! سنرد عليك في أقرب وقت ممكن.'
    }
};

// Set default language to French 
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
        
        // Force logo to maintain LTR direction with proper spacing
        const logo = document.querySelector('.logo');
        logo.style.direction = 'ltr';
        logo.style.marginLeft = '40px';
        
        // Fix navbar layout
        const navbar = document.querySelector('.navbar');
        navbar.style.justifyContent = 'flex-start';
        navbar.style.gap = '40px';
        
        // Ensure nav links have proper spacing
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.marginLeft = '40px';
        navLinks.style.marginRight = 'auto';
    } else {
        document.body.classList.remove('rtl');
        
        // Reset all custom spacing when not in RTL
        const logo = document.querySelector('.logo');
        logo.style.marginLeft = '';
        
        const navbar = document.querySelector('.navbar');
        navbar.style.justifyContent = '';
        navbar.style.gap = '';
        
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.marginLeft = '';
        navLinks.style.marginRight = '';
    }
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    
    // Force language switcher to always maintain LTR direction
    document.querySelector('.language-switcher').style.direction = 'ltr';
    
    // Navigation
    document.querySelectorAll('#navLinks li a').forEach((link, index) => {
        if (index === 0) link.textContent = translations[lang]['nav-home'];
        if (index === 1) link.textContent = translations[lang]['nav-services'];
        if (index === 2) link.textContent = translations[lang]['nav-about'];
        if (index === 3) link.textContent = translations[lang]['nav-contact'];
    });
    
    // Hero Section
    document.querySelector('.hero-content h2').textContent = translations[lang]['hero-title'];
    document.querySelector('.hero-content p').textContent = translations[lang]['hero-subtitle'];
    document.querySelector('.cta-buttons .btn-primary').textContent = translations[lang]['hero-cta-quote'];
    document.querySelector('.cta-buttons .btn-secondary').textContent = translations[lang]['hero-cta-services'];
    
    // Services Section
    document.querySelector('#services .section-title h2').textContent = translations[lang]['services-title'];
    document.querySelector('#services .section-title p').textContent = translations[lang]['services-subtitle'];
    
    // Update service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').textContent = translations[lang]['service-boundary'];
    serviceCards[0].querySelector('p').textContent = translations[lang]['service-boundary-desc'];
    serviceCards[1].querySelector('h3').textContent = translations[lang]['service-topo'];
    serviceCards[1].querySelector('p').textContent = translations[lang]['service-topo-desc'];
    serviceCards[2].querySelector('h3').textContent = translations[lang]['service-construction'];
    serviceCards[2].querySelector('p').textContent = translations[lang]['service-construction-desc'];
    serviceCards[3].querySelector('h3').textContent = translations[lang]['service-alta'];
    serviceCards[3].querySelector('p').textContent = translations[lang]['service-alta-desc'];
    
    // About Section
    document.querySelector('.about-content h2').textContent = translations[lang]['about-title'];
    const aboutParagraphs = document.querySelectorAll('.about-content p');
    aboutParagraphs[0].textContent = translations[lang]['about-paragraph1'];
    aboutParagraphs[1].textContent = translations[lang]['about-paragraph2'];
    
    const credentials = document.querySelectorAll('.credential span');
    credentials[0].textContent = translations[lang]['credential-licensed'];
    credentials[1].textContent = translations[lang]['credential-experience'];
    credentials[2].textContent = translations[lang]['credential-iso'];
    
    // Contact Section
    document.querySelector('#contact .section-title h2').textContent = translations[lang]['contact-title'];
    document.querySelector('#contact .section-title p').textContent = translations[lang]['contact-subtitle'];
    
    // Form elements
    document.querySelector('label[for="name"]').textContent = translations[lang]['contact-name'];
    document.querySelector('label[for="email"]').textContent = translations[lang]['contact-email'];
    document.querySelector('label[for="phone"]').textContent = translations[lang]['contact-phone'];
    document.querySelector('label[for="service"]').textContent = translations[lang]['contact-service'];
    document.querySelector('label[for="message"]').textContent = translations[lang]['contact-message'];
    
    // Update select options
    const selectOptions = document.querySelector('#service').options;
    selectOptions[0].textContent = translations[lang]['contact-select'];
    selectOptions[1].textContent = translations[lang]['contact-boundary'];
    selectOptions[2].textContent = translations[lang]['contact-topo'];
    selectOptions[3].textContent = translations[lang]['contact-construction'];
    selectOptions[4].textContent = translations[lang]['contact-alta'];
    selectOptions[5].textContent = translations[lang]['contact-other'];
    
    document.querySelector('#contactForm button').textContent = translations[lang]['contact-submit'];
    
    // Contact info
    const contactItems = document.querySelectorAll('.contact-item .contact-text h3');
    contactItems[0].textContent = translations[lang]['contact-location'];
    contactItems[1].textContent = translations[lang]['contact-phone-label'];
    contactItems[2].textContent = translations[lang]['contact-email-label'];
    contactItems[3].textContent = translations[lang]['contact-hours'];
    document.querySelectorAll('.contact-item .contact-text p')[3].textContent = translations[lang]['contact-hours-value'];
    
    // Footer
    document.querySelector('.footer-column p').textContent = translations[lang]['footer-tagline'];
    document.querySelectorAll('.footer-column h3')[0].textContent = translations[lang]['footer-quicklinks'];
    document.querySelectorAll('.footer-column h3')[1].textContent = translations[lang]['footer-services'];
    document.querySelectorAll('.footer-column h3')[2].textContent = translations[lang]['footer-connect'];
    document.querySelector('.copyright p').textContent = translations[lang]['footer-copyright'];
    
    // Update footer links
    const footerLinks = document.querySelectorAll('.footer-links')[0].querySelectorAll('a');
    footerLinks[0].textContent = translations[lang]['nav-home'];
    footerLinks[1].textContent = translations[lang]['nav-services'];
    footerLinks[2].textContent = translations[lang]['nav-about'];
    footerLinks[3].textContent = translations[lang]['nav-contact'];
    
    const footerServiceLinks = document.querySelectorAll('.footer-links')[1].querySelectorAll('a');
    footerServiceLinks[0].textContent = translations[lang]['service-boundary'];
    footerServiceLinks[1].textContent = translations[lang]['service-topo'];
    footerServiceLinks[2].textContent = translations[lang]['service-construction'];
    footerServiceLinks[3].textContent = translations[lang]['service-alta'];
}

// Add event listeners to language buttons
document.addEventListener('DOMContentLoaded', function() {
// Create language switcher if it doesn't exist
    if (!document.querySelector('.language-switcher-container')) {
        const navLinks = document.getElementById('navLinks');
        
        // Create container with specific class for positioning
        const container = document.createElement('li');
        container.className = 'language-switcher-container';
        
        // Create the actual language switcher with forced LTR direction
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
    document.querySelector('.language-switcher').style.direction = 'ltr';
    
    // Override the form submission alert to use the translated message
    const originalFormSubmit = document.getElementById('contactForm').onsubmit;
    document.getElementById('contactForm').onsubmit = function(e) {
        e.preventDefault();
        alert(translations[currentLang]['form-success']);
        this.reset();
    };
});