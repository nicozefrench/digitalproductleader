# Digital Product Leader - Site Mirror

Mirror complet du site https://digitalproductleader.com/

## 🚀 Installation & Exécution

### Prérequis
```bash
pip install -r requirements.txt
```

### Lancer le scraping
```bash
python mirror_site.py
```

Le script va :
- ✅ Télécharger toutes les pages (7 pages totales)
- ✅ Télécharger tous les assets (images, CSS, JS, fonts)
- ✅ Corriger tous les liens pour fonctionnement local
- ✅ Créer une structure propre et navigable

## 📁 Structure générée

```
digitalproductleader_mirror/
├── index.html              # Page d'accueil
├── assets/                 # Tous les assets (images, CSS, JS, fonts)
│   ├── logo.png
│   ├── hero-image.jpg
│   └── ...
└── pages/                  # Pages internes
    ├── digital-product-leaders-and-cpo-thought-leadership.html
    ├── about-nicolas-limare-ux-design-innovation-leadership.html
    └── [articles...]
```

## 🌐 Déploiement

### Option 1: Visualisation locale
```bash
open index.html
```

### Option 2: GitHub Pages
```bash
cd digitalproductleader_mirror
git init
git add .
git commit -m "Initial site mirror"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/digitalproductleader.git
git push -u origin main

# Activer GitHub Pages dans Settings → Pages → Source: main branch
```

### Option 3: Netlify / Vercel
Glisse-dépose le dossier `digitalproductleader_mirror/` directement sur:
- https://app.netlify.com/drop
- https://vercel.com/new

## ⚠️ Limitations

- **Page protégée:** `/ai-agent-tooling` est protégée par mot de passe (non incluse)
- **Formulaire de contact:** Ne fonctionnera plus (géré par Hostinger backend)
- **Analytics:** Les scripts analytics Hostinger ne fonctionneront plus

## 🛠️ Migration vers autre plateforme

Pour migrer vers un autre builder (Webflow, WordPress, etc.):
1. Utilise ce mirror comme référence visuelle
2. Reconstruit la structure dans le nouveau builder
3. Réintègre les assets depuis le dossier `assets/`

## 📊 Statistiques

- **Pages:** 7 (home + 4 articles + 2 pages statiques)
- **Assets:** ~170+ fichiers (images, CSS, JS, fonts)
- **Size:** ~15-20 MB total

## 🤝 Support

Pour toute question sur le site original:
- Email: nicolas@digitalproductleader.com
- LinkedIn: https://www.linkedin.com/in/nlimare/
