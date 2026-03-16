// This file is auto-updated by the GitHub Action when articles are published.
// You can also edit it manually to add links/descriptions.

const articles = [
    {
        slug: "published/leve-topographique.html",
        title: "Qu'est-ce qu'un levé topographique au Maroc ?",
        description: "Guide complet sur le levé topographique : définition, étapes, coût et utilité pour vos projets fonciers.",
        date: "2026-04-07",
        readTime: "4 min"
    }
    // The GitHub Action appends new entries here automatically
];

// Render articles into the grid
const grid = document.getElementById('articles-grid');
if (grid) {
    articles
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach(article => {
            const date = new Date(article.date).toLocaleDateString('fr-MA', {
                year: 'numeric', month: 'long', day: 'numeric'
            });
            grid.innerHTML += `
                <article class="service-card">
                    <div class="service-icon" aria-hidden="true">
                        <i class="fas fa-newspaper"></i>
                    </div>
                    <div class="service-content">
                        <div style="font-size:0.85rem;color:var(--accent);font-weight:600;margin-bottom:0.5rem;">
                            <i class="fas fa-calendar"></i> ${date}
                            &nbsp;·&nbsp;
                            <i class="fas fa-clock"></i> ${article.readTime} de lecture
                        </div>
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.slug}" class="btn btn-primary" style="margin-top:1rem;display:inline-block;">
                            Lire l'article →
                        </a>
                    </div>
                </article>
            `;
        });
}