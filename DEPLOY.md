# 🚀 Guide de Déploiement

## ✅ Site mirroré avec succès!

**Contenu:**
- 7 pages HTML (home + 6 pages)
- 171 assets (images, CSS, JS, fonts)
- 7.3 MB total

---

## 📍 Option 1: Visualisation Locale

Le site est déjà fonctionnel localement:
```bash
open index.html
```

---

## 🐙 Option 2: GitHub Pages (Recommandé)

### Étape 1: Créer un repo GitHub

1. Va sur https://github.com/new
2. Nom du repo: `digitalproductleader` (ou ce que tu veux)
3. **Public** (obligatoire pour GitHub Pages gratuit)
4. Ne coche **rien** (pas de README, .gitignore, licence)
5. Clique "Create repository"

### Étape 2: Upload depuis terminal

```bash
# 1. Navigue dans le dossier
cd ~/Desktop/digitalproductleader_mirror

# 2. Initialise git
git init
git add .
git commit -m "Initial site mirror from Hostinger"

# 3. Ajoute le remote (REMPLACE YOUR_USERNAME)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/digitalproductleader.git

# 4. Push
git push -u origin main
```

### Étape 3: Activer GitHub Pages

1. Va dans ton repo GitHub
2. **Settings** → **Pages** (menu gauche)
3. **Source:** Deploy from a branch
4. **Branch:** main / root
5. **Save**
6. Attends 2-3 minutes → Site live sur `https://YOUR_USERNAME.github.io/digitalproductleader/`

---

## 🌐 Option 3: Netlify (Drag & Drop - Le plus rapide!)

1. Va sur https://app.netlify.com/drop
2. Connecte-toi (GitHub, Google, ou email)
3. **Glisse-dépose** le dossier `digitalproductleader_mirror/` sur la page
4. Attends 30 secondes → Site live!
5. URL générée automatiquement (ex: `random-name-12345.netlify.app`)
6. **Optionnel:** Change le nom dans Settings → Domain management

---

## 🔧 Option 4: Vercel (Similaire à Netlify)

1. Va sur https://vercel.com/new
2. Connecte-toi avec GitHub
3. Glisse-dépose le dossier `digitalproductleader_mirror/`
4. Attends 30 secondes → Site live!

---

## ⚠️ Limitations du Mirror

- **Page protégée:** `/ai-agent-tooling` n'est pas incluse (protégée par mot de passe)
- **Formulaire de contact:** Ne fonctionnera plus (backend Hostinger)
- **Analytics:** Les scripts analytics Hostinger ne fonctionneront plus

Pour réactiver le formulaire, tu devras:
- Utiliser un service comme Formspree, Basin, ou Netlify Forms
- Ou reconstruire avec un backend (Firebase, Supabase, etc.)

---

## 🆘 Besoin d'Aide?

**Problème:** Les images ne s'affichent pas en local
**Solution:** Ouvre avec un serveur local:
```bash
cd ~/Desktop/digitalproductleader_mirror
python3 -m http.server 8000
# Puis ouvre: http://localhost:8000
```

**Problème:** Les liens internes ne fonctionnent pas
**Raison:** C'est normal si tu navigues avec `file://`. Utilise un serveur local ou déploie sur GitHub/Netlify.

---

## 📧 Contact Original

- **Email:** nicolas@digitalproductleader.com
- **LinkedIn:** https://www.linkedin.com/in/nlimare/
