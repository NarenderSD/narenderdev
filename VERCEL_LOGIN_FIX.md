# 🔐 Vercel Admin Login Fix Guide

## 🚨 Current Issue
**Admin login showing "Invalid credentials" on Vercel deployment**

## 🛠️ Solution Steps

### 1. Vercel Environment Variables Setup
Go to your Vercel project dashboard → Settings → Environment Variables और ये add करें:

```bash
# Required Environment Variables for Vercel
ADMIN_USERNAME=admin
ADMIN_PASSWORD=Narender@2025
JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_securenarender
MONGODB_URI=mongodb+srv://narenderdev:Portfolio2025@cluster0.awanp3e.mongodb.net/
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyA0m36AKQMWHBY8WFPmRqWTzA30ptej-OM
CLOUDINARY_CLOUD_NAME=laxmi1
CLOUDINARY_API_KEY=455184869214737
CLOUDINARY_API_SECRET=6ChoZ4o1coMzmrnRi4osW5m0wRQ
NODE_ENV=production
```

### 2. Admin Login Credentials
**Username:** `admin`
**Password:** `Narender@2025`

### 3. Redeploy After Adding Variables
Vercel में environment variables add करने के बाद project को redeploy करना जरूरी है:
- Go to Deployments tab
- Click "Redeploy" on latest deployment
- Or push a new commit to trigger deployment

## ✅ Testing Login
1. Go to: `https://your-domain.vercel.app/admin`
2. Enter credentials:
   - Username: `admin`
   - Password: `Narender@2025`
3. Should successfully login to admin panel

## 🔍 Debug Steps if Still Not Working
1. Check Vercel function logs in dashboard
2. Verify all environment variables are set
3. Make sure redeploy happened after adding variables
4. Test locally first with same credentials

---
**Updated:** January 2025
