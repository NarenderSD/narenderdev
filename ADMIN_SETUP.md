# Admin Panel Setup Instructions

## 🚀 Admin Panel Features

Your portfolio now includes a comprehensive admin panel with the following features:

- **Project Management**: Add, edit, delete projects dynamically
- **Image Upload**: Cloudinary integration for optimized image hosting
- **Authentication**: Secure JWT-based admin authentication
- **Real-time Updates**: Projects update instantly on the main site
- **Category Management**: Organize projects by technology stack
- **Responsive Design**: Works perfectly on all devices

## 📋 Required Setup Steps

### 1. MongoDB Database Setup

You have two options:

#### Option A: MongoDB Atlas (Recommended - Free)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Update `.env.local` with your MongoDB URI:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

#### Option B: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Keep the current URI: `mongodb://localhost:27017/portfolio`

### 2. Cloudinary Setup (For Image Upload)

1. Go to [Cloudinary](https://cloudinary.com/)
2. Create a free account
3. Get your credentials from the dashboard
4. Update `.env.local`:
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

### 3. Admin Credentials

Update your admin credentials in `.env.local`:
```
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_very_long_and_secure_jwt_secret_key
```

### 4. Access Admin Panel

1. Start your development server: `npm run dev`
2. Go to: `http://localhost:3001/admin`
3. Login with your admin credentials
4. Start managing your projects!

## 🎯 Admin Panel Features

### Project Management
- **Add Projects**: Create new projects with images, descriptions, tech stack
- **Edit Projects**: Update existing project details
- **Delete Projects**: Remove projects you no longer want to showcase
- **Featured Toggle**: Mark important projects as featured
- **Category Filter**: Organize by React, Next.js, MERN, Django, etc.

### Image Management
- **Upload Images**: Drag & drop or click to upload
- **Auto Optimization**: Cloudinary automatically optimizes images
- **Preview**: See images before saving
- **Delete**: Remove images from Cloudinary

### Real-time Updates
- Projects appear instantly on your portfolio
- No need to redeploy or restart server
- Database-driven content management

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based authentication
- **HTTP-Only Cookies**: Prevent XSS attacks
- **Password Hashing**: bcrypt for secure password storage
- **Protected Routes**: Admin panel accessible only after login

## 📁 File Structure

```
src/
├── app/
│   ├── admin/
│   │   └── page.tsx           # Admin panel UI
│   └── api/
│       └── admin/
│           ├── auth/
│           │   └── route.ts   # Authentication API
│           ├── projects/
│           │   └── route.ts   # Projects CRUD API
│           └── upload/
│               └── route.ts   # Image upload API
└── sections/
    ├── ProjectsSection.tsx        # Dynamic projects (database)
    └── ProjectsSection_static.tsx # Backup static version
```

## 🔧 Environment Variables Explained

```bash
# Database
MONGODB_URI=                 # Your MongoDB connection string

# Image Storage
CLOUDINARY_CLOUD_NAME=       # Cloudinary cloud name
CLOUDINARY_API_KEY=          # Cloudinary API key
CLOUDINARY_API_SECRET=       # Cloudinary API secret

# Admin Security
ADMIN_USERNAME=              # Your admin username
ADMIN_PASSWORD=              # Your admin password (use strong password)
JWT_SECRET=                  # Long random string for JWT signing

# App Configuration
NEXTAUTH_URL=                # Your app URL (http://localhost:3001 for dev)
NEXTAUTH_SECRET=             # Random string for NextAuth
```

## 🚨 Important Security Notes

1. **Never commit .env.local to git**
2. **Use strong passwords for admin account**
3. **Use long, random JWT_SECRET**
4. **Enable MongoDB Atlas IP whitelist in production**
5. **Use HTTPS in production**

## 🎨 Customization

The admin panel is fully customizable. You can:

- Modify the UI in `/admin/page.tsx`
- Add new API endpoints in `/api/admin/`
- Extend project schema in API routes
- Add new categories or tech stacks

## 🐛 Troubleshooting

**MongoDB Connection Issues:**
- Check your connection string
- Verify network access in MongoDB Atlas
- Ensure database user has proper permissions

**Cloudinary Upload Issues:**
- Verify API credentials
- Check file size limits
- Ensure proper CORS settings

**Authentication Issues:**
- Clear browser cookies
- Check JWT_SECRET configuration
- Verify admin credentials

## 🎉 You're All Set!

Your portfolio now has a powerful admin panel. Visit `/admin` to start managing your projects dynamically!
