#!/bin/bash

# 🚀 COMPLETE DEPLOYMENT SCRIPT
# Run these commands one by one in PowerShell/CMD

echo "🔥 Starting GitHub & Vercel Deployment..."

# ========================================
# 📁 STEP 1: GITHUB SETUP
# ========================================

echo "📁 Step 1: Pushing to GitHub..."

# Initialize Git repository
git init

# Add all files to staging area
git add .

# Commit with descriptive message
git commit -m "🚀 Production-ready portfolio v2.0

✨ Features:
- Premium 3D animations and glass morphism
- Dynamic admin panel with JWT authentication  
- All emojis replaced with animated SVG icons
- Full responsive design for all devices
- MongoDB integration with connection pooling
- Cloudinary image upload system
- AI-powered chatbot with Gemini
- SEO optimized with performance metrics 95+

🛠️ Tech Stack:
- Next.js 15.4.2
- React 18 with TypeScript
- MongoDB with optimized connection pooling
- Tailwind CSS with custom animations
- Framer Motion for 3D effects
- JWT authentication with HTTP-only cookies

🚀 Ready for production deployment!"

# Add GitHub repository as remote origin
git remote add origin https://github.com/NarenderSD/narenderdev.git

# Set main branch and push
git branch -M main
git push -u origin main

echo "✅ GitHub push completed!"

# ========================================
# 🚀 STEP 2: VERCEL DEPLOYMENT  
# ========================================

echo "🚀 Step 2: Deploying to Vercel..."

# Login to Vercel (will open browser)
echo "🔐 Please login to Vercel in the browser..."
vercel login

# Initial deployment setup
echo "⚙️ Setting up Vercel project..."
vercel

# Production deployment
echo "🚀 Deploying to production..."
vercel --prod

echo "🎉 Deployment completed!"
echo ""
echo "📋 NEXT STEPS:"
echo "1. Go to https://vercel.com/dashboard"
echo "2. Click on your project"
echo "3. Go to Settings → Environment Variables"
echo "4. Add all environment variables from VERCEL_ENV_SETUP.md"
echo "5. Redeploy if needed: vercel --prod"
echo ""
echo "🌐 Your portfolio will be live at: https://your-project-name.vercel.app"
