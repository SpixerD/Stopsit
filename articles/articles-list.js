// articles-list.js
// Auto-updated by the GitHub Action when articles are published.
// Loaded by both the homepage () and the articles listing page (articles/).

const articles = [
    {
        slug: "lotissement-maroc-etapes/",
        title: "Les étapes d'un lotissement au Maroc : du terrain brut au titre foncier",
        description: "Découvrez toutes les étapes d'un lotissement au Maroc : études préalables, autorisations, bornage, viabilisation et obtention du titre foncier. Guide complet par STOPSIT.",
        date: "2026-03-21",
        readTime: "7 min",
        translations: {
            en: "en/lotissement-maroc-etapes/",
            ar: "ar/lotissement-maroc-etapes/"
        }
    },
    {
        slug: "immatriculation-fonciere-ancfcc-maroc/",
        title: "Immatriculation foncière à l'ANCFCC : guide complet pour le Maroc",
        description: "Tout comprendre sur l'immatriculation foncière au Maroc : procédure complète, documents requis, délais et rôle de l'ANCFCC. Guide pratique par STOPSIT Kénitra.",
        date: "2026-03-17",
        readTime: "6 min",
        translations: {
            en: "en/immatriculation-fonciere-ancfcc-maroc/",
            ar: "ar/immatriculation-fonciere-ancfcc-maroc/"
        }
    },
    {
        slug: "bornage-propriete-maroc/",
        title: "Le bornage de propriété au Maroc : pourquoi et comment faire ?",
        description: "Tout savoir sur le bornage de propriété au Maroc : définition, déroulement, documents requis et valeur juridique. Par STOPSIT Kénitra.",
        date: "2026-03-14",
        readTime: "5 min",
        translations: {
            en: "en/bornage-propriete-maroc/",
            ar: "ar/bornage-propriete-maroc/"
        }
    },
    {
        slug: "leve-topographique-maroc/",
        title: "Levé topographique au Maroc : définition, étapes et utilité",
        description: "Qu'est-ce qu'un levé topographique ? Découvrez sa définition, ses étapes clés, son coût et pourquoi il est indispensable à tout projet foncier au Maroc.",
        date: "2026-03-09",
        readTime: "5 min",
        translations: {
            en: "en/leve-topographique-maroc/",
            ar: "ar/leve-topographique-maroc/"
        }
    }
    // The GitHub Action prepends new entries here automatically when drafts are published
];

// ─── Shared card builder ────────────────────────────────────────────────────
function buildCard(article, slugPrefix) {
    const date = new Date(article.date).toLocaleDateString('fr-MA', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const href = slugPrefix + article.slug;

    // Language badges
    let langBadges = '<a href="' + href + '" class="lang-badge lang-badge--active">FR</a>';
    if (article.translations) {
        if (article.translations.en) {
            langBadges += '<a href="' + slugPrefix + article.translations.en + '" class="lang-badge">EN</a>';
        }
        if (article.translations.ar) {
            langBadges += '<a href="' + slugPrefix + article.translations.ar + '" class="lang-badge" lang="ar">عربي</a>';
        }
    }

    return '<article class="service-card">'
        // Fixed: The anchor now behaves as a flex container to keep the icon centered
        + '<a href="' + href + '" class="service-icon" aria-hidden="true" style="display: flex; align-items: center; justify-content: center; text-decoration: none; color: inherit;">'
        + '<i class="fas fa-newspaper"></i>'
        + '</a>'
        + '<div class="service-content">'
        + '<div style="font-size:0.82rem;color:var(--accent);font-weight:600;margin-bottom:0.6rem;">'
        + '<i class="fas fa-calendar" aria-hidden="true"></i> ' + date
        + ' &nbsp;&middot;&nbsp; '
        + '<i class="fas fa-clock" aria-hidden="true"></i> ' + article.readTime + ' de lecture'
        + '</div>'
        + '<h3><a href="' + href + '" style="color:inherit;text-decoration:none;">' + article.title + '</a></h3>'
        + '<p>' + article.description + '</p>'
        + '<div class="article-card-langs" style="display:flex;gap:0.5rem;margin-top:1rem;flex-wrap:wrap;">'
        + langBadges
        + '</div>'
        + '</div></article>';
}
// ─── Articles listing page (articles/) ────────────────────────────
function renderArticles() {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;

    if (articles.length === 0) {
        grid.innerHTML = '<p style="text-align:center;opacity:0.6;grid-column:1/-1;">Aucun article disponible pour le moment.</p>';
        return;
    }

    const sorted = articles.slice().sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    sorted.forEach(function(article) {
        grid.innerHTML += buildCard(article, '');
    });
}

// ─── Homepage preview () ──────────────────────────────────────────
// Shows only the 2 most recent articles; slugs prefixed with 'articles/'
function renderArticlesPreview() {
    const grid = document.getElementById('articles-preview-grid');
    if (!grid) return;

    if (articles.length === 0) {
        grid.style.display = 'none';
        return;
    }

    const sorted = articles.slice().sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    sorted.slice(0, 2).forEach(function(article) {
        grid.innerHTML += buildCard(article, 'articles/');
    });
}

// ─── Init ────────────────────────────────────────────────────────────────────
function initArticles() {
    if (!window.ARTICLES_LANG) renderArticles();
    renderArticlesPreview();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArticles);
} else {
    initArticles();
}
