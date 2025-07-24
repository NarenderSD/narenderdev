# Vercel Deployment Configuration

# Environment Variables needed for Vercel:
# 1. MONGODB_URI - Your MongoDB Atlas connection string
# 2. CLOUDINARY_CLOUD_NAME - Cloudinary cloud name
# 3. CLOUDINARY_API_KEY - Cloudinary API key  
# 4. CLOUDINARY_API_SECRET - Cloudinary API secret
# 5. ADMIN_USERNAME - Admin panel username
# 6. ADMIN_PASSWORD - Admin panel password (use strong password)
# 7. JWT_SECRET - JWT secret key (minimum 32 characters)
# 8. NEXT_PUBLIC_GEMINI_API_KEY - Gemini AI API key
# 9. NEXTAUTH_URL - Your deployed URL (https://your-app.vercel.app)
# 10. NEXTAUTH_SECRET - NextAuth secret key

# Build Settings:
# Framework Preset: Next.js
# Build Command: npm run build
# Output Directory: .next
# Install Command: npm install
# Development Command: npm run dev

# Important: 
# - Don't commit .env.local to git
# - Add all environment variables in Vercel dashboard
# - Use MongoDB Atlas for production database
# - Enable Cloudinary for image hosting
