#!/bin/bash
# GitHub Upload Script pour Digital Product Leader

echo "🚀 Digital Product Leader - GitHub Upload Script"
echo "=================================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
  echo "📦 Initialisation du repo Git..."
  git init
  git add .
  git commit -m "Initial site mirror from Hostinger"
  echo "✅ Repo Git initialisé"
  echo ""
fi

# Prompt for GitHub username
read -p "🐙 Ton username GitHub (ex: yourusername): " github_username

if [ -z "$github_username" ]; then
  echo "❌ Erreur: Username GitHub requis"
  exit 1
fi

# Prompt for repo name
read -p "📂 Nom du repo (défaut: digitalproductleader): " repo_name
repo_name=${repo_name:-digitalproductleader}

echo ""
echo "📋 Configuration:"
echo "  - Username: $github_username"
echo "  - Repo: $repo_name"
echo "  - URL finale: https://$github_username.github.io/$repo_name/"
echo ""

read -p "🤔 Continuer? (y/n): " confirm
if [[ ! $confirm =~ ^[Yy]$ ]]; then
  echo "❌ Annulé"
  exit 1
fi

# Setup remote
echo ""
echo "🔗 Configuration du remote GitHub..."
git branch -M main

# Remove existing remote if exists
git remote remove origin 2>/dev/null

# Add new remote
git remote add origin "https://github.com/$github_username/$repo_name.git"

# Push
echo ""
echo "⬆️ Push vers GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ SUCCÈS!"
  echo ""
  echo "📍 Prochaine étape:"
  echo "1. Va sur: https://github.com/$github_username/$repo_name/settings/pages"
  echo "2. Source → Deploy from a branch"
  echo "3. Branch → main / root"
  echo "4. Save"
  echo ""
  echo "⏱️ Attends 2-3 minutes puis visite:"
  echo "🌐 https://$github_username.github.io/$repo_name/"
else
  echo ""
  echo "❌ Erreur lors du push"
  echo "💡 Assure-toi d'avoir créé le repo sur GitHub:"
  echo "   https://github.com/new"
  echo ""
  echo "💡 Si le repo existe déjà, essaye:"
  echo "   git push -u origin main --force"
fi
