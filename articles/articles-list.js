// articles-list.js
// Auto-updated by the GitHub Action when articles are published.
// Loaded by both the homepage (index.html) and the articles listing page (articles/index.html).

const articles = [
    {
        slug: "bornage-propriete-maroc.html",
        title: "Le bornage de propriété au Maroc : pourquoi et comment faire ?",
        description: "Tout savoir sur le bornage de propriété au Maroc : définition, déroulement, documents requis et valeur juridique. Par STOPSIT Kénitra.",
        date: "2026-04-14",
        readTime: "5 min",
        translations: {
            en: "en/bornage-propriete-maroc.html",
            ar: "ar/bornage-propriete-maroc.html"
        }
    },
    {
        slug: "leve-topographique-maroc.html",
        title: "Levé topographique au Maroc : définition, étapes et utilité",
        description: "Qu'est-ce qu'un levé topographique ? Découvrez sa définition, ses étapes clés, son coût et pourquoi il est indispensable à tout projet foncier au Maroc.",
        date: "2026-04-07",
        readTime: "5 min",
        translations: {
            en: "en/leve-topographique-maroc.html",
            ar: "ar/leve-topographique-maroc.html"
        }
    }
    // The GitHub Action prepends new entries here automatically when drafts are published
];

// ─── Shared card builder ────────────────────────────────────────────────────
// slugPrefix: '' on the articles page, 'articles/' on the homepage
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
        + '<div class="service-icon" aria-hidden="true"><i class="fas fa-newspaper"></i></div>'
        + '<div class="service-content">'
        + '<div style="font-size:0.82rem;color:var(--accent);font-weight:600;margin-bottom:0.6rem;">'
        + '<i class="fas fa-calendar" aria-hidden="true"></i> ' + date
        + ' &nbsp;&middot;&nbsp; '
        + '<i class="fas fa-clock" aria-hidden="true"></i> ' + article.readTime + ' de lecture'
        + '</div>'
        + '<h3>' + article.title + '</h3>'
        + '<p>' + article.description + '</p>'
        + '<div class="article-card-langs" style="display:flex;gap:0.5rem;margin-top:1rem;flex-wrap:wrap;">'
        + langBadges
        + '</div>'
        + '</div></article>';
}

// ─── Articles listing page (articles/index.html) ────────────────────────────
// Target element: <div id="articles-grid">
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

// ─── Homepage preview (index.html) ──────────────────────────────────────────
// Target element: <div id="articles-preview-grid">
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

    // Only the 2 most recent
    sorted.slice(0, 2).forEach(function(article) {
        grid.innerHTML += buildCard(article, 'articles/');
    });
}

// ─── Init: run whichever function applies to the current page ────────────────
function initArticles() {
    renderArticles();        // no-op if #articles-grid doesn't exist
    renderArticlesPreview(); // no-op if #articles-preview-grid doesn't exist
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArticles);
} else {
    initArticles();
}