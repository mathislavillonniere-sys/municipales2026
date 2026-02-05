(function () {
  // Contenu du footer (modifiable si vous voulez changer les textes/contacts)
  const siteName = "Observatoire Municipale";
  const companyInfo = "Travail indépendant";

  // Détection basique du contexte (racine vs sous-dossier /html/)
  const isHtmlSubDir = window.location.pathname.includes('/html/') || window.location.pathname.includes('\\html\\');

  // Préfixe pour les liens statiques HTML (Mentions, Méthodologie)
  const linkPrefix = isHtmlSubDir ? '' : 'municipales2026/html/';

  // Préfixe pour le retour à l'accueil
  const indexPrefix = isHtmlSubDir ? '../../index.html' : '';

  const legalHref = linkPrefix + "mentions-legales.html";
  const methodHref = linkPrefix + "sondages-methodologie.html";

  function buildFooterHTML() {
    const year = new Date().getFullYear();

    // Helper pour générer les boutons de nav
    const makeNav = (label, section) => {
      const href = isHtmlSubDir ? `${indexPrefix}#${section}` : '#';
      return `<a href="${href}" class="nav-btn" data-section="${section}">${label}</a>`;
    };

    return `
      <div class="footer-inner">
        <div class="footer-col footer-left">
          <h3>${siteName}</h3>
          <p class="footer-desc">Notre site a pour objectif d'informer le lecteur sur les élections municipales 2026, comme les candidats, les sondages et les résultats locaux. Il n'y a pas de parti pris, tous les sondages, candidats sont sourcés par des instituts de sondage nationaux et compétents, les listes par le ministère de l'intérieur</p>
        </div>

        <div class="footer-col footer-center">
          <!-- Menu répliqué dans le footer -->
          <nav class="footer-nav" role="navigation" aria-label="Navigation site">
            ${makeNav('Accueil', 'accueil')}
            ${makeNav('Carte', 'map-section')}
            ${makeNav('Villes', 'villes')}
            ${makeNav('Partis', 'partis')}
            ${makeNav('Sondages', 'sondages')}
          </nav>
          
        </div>

        <div class="footer-col footer-right">
          <p>${companyInfo}</p>
          <p>Conforme RGPD — Vos données sont protégées  <a href="${legalHref}">Mentions légales</a></p>
          <p><a href="${methodHref}">Méthodologie détaillée des sondages</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${year} ${siteName} - Tous droits réservés.</p>
        <p id="last-update" style="color: grey; font-size: 0.85em; margin-top: 5px; font-style: italic;"></p>
      </div>
    `;
  }

  // Fonction pour récupérer la date de dernière modification parmi plusieurs fichiers
  async function updateLastModified() {
    const output = document.getElementById('last-update');
    if (!output) return;

    // Liste des fichiers à surveiller pour la date
    let files = [];
    // Réutilisation de isHtmlSubDir (déclaré en haut, scope global du module)
    // Mais isHtmlSubDir est dans la closure du haut, il faut le rendre accessible ou le recalculer.
    // Comme tout est dans (function(){ ... })(), la variable est accessible.
    const pathIsHtml = window.location.pathname.includes('/html/') || window.location.pathname.includes('\\html\\');

    if (pathIsHtml) {
      files = [
        window.location.href,
        '../app.js',
        '../css/style.css',
        '../js/footer.js'
      ];
    } else {
      files = [
        window.location.href,
        'municipales2026/app.js',
        'municipales2026/css/style.css',
        'municipales2026/js/footer.js'
      ];
    }

    let latestDate = new Date(document.lastModified); // Par défaut : date du HTML

    // Si on est en HTTP/HTTPS (Live Server), on peut vérifier les dates des fichiers liés
    if (window.location.protocol.startsWith('http')) {
      try {
        const checks = files.map(file =>
          fetch(file, { method: 'HEAD', cache: 'no-cache' })
            .then(res => {
              const lastMod = res.headers.get('Last-Modified');
              return lastMod ? new Date(lastMod) : null;
            })
            .catch(() => null)
        );

        const results = await Promise.all(checks);
        results.forEach(date => {
          if (date && date > latestDate) {
            latestDate = date;
          }
        });
      } catch (e) {
        console.warn("Impossible de récupérer les dates précises (mode local ou erreur)", e);
      }
    }

    // Formatage de la date : JJ/MM/AAAA HH:mm:ss
    const formatted = latestDate.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    output.textContent = `Dernière actualisation : ${formatted}`;
  }

  function insertFooter() {
    const placeholder = document.getElementById("site-footer");
    const footerEl = placeholder || document.createElement("footer");
    footerEl.className = "site-footer";
    footerEl.setAttribute("role", "contentinfo");
    footerEl.innerHTML = buildFooterHTML();

    if (!placeholder) {
      const container = document.querySelector(".container");
      if (container && container.parentNode) container.parentNode.appendChild(footerEl);
      else document.body.appendChild(footerEl);
    } else {
      placeholder.replaceWith(footerEl);
    }

    // Mise à jour de la date
    updateLastModified();

    // --- Wiring : synchroniser les clics du footer-nav avec l'affichage des sections ---
    try {
      const footerBtns = footerEl.querySelectorAll('.footer-nav .nav-btn');
      footerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = btn.getAttribute('data-section');
          if (!target) return;

          // On vérifie si la section existe sur cette page (SPA behavior)
          const section = document.getElementById(target);
          if (section) {
            e.preventDefault();
            // Retire active partout (header + footer)
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

            // Active le bouton header correspondant (s'il existe) + celui du footer
            const headerBtn = document.querySelector(`.main-nav .nav-btn[data-section="${target}"]`);
            if (headerBtn) headerBtn.classList.add('active');
            btn.classList.add('active');

            // Affiche la section
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            section.classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      });

      // Optionnel : si une section est active au chargement, refléter dans le footer
      const current = document.querySelector('.section.active');
      if (current) {
        const id = current.id;
        const fbtn = footerEl.querySelector(`.footer-nav .nav-btn[data-section="${id}"]`);
        if (fbtn) fbtn.classList.add('active');
      }
    } catch (e) { }
  }

  // Insérer après DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertFooter);
  } else {
    insertFooter();
  }
})();
