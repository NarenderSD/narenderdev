<div align="center">

![Portfolio Banner](https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&h=400&q=80)

# 🚀 **Narender Singh - Premium Portfolio**

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=24&pause=1000&color=FF6B35&center=true&vCenter=true&width=600&lines=Full+Stack+Developer+%F0%9F%92%BB;Premium+UI%2FUX+Designer+%F0%9F%8E%A8;MERN+Stack+Expert+%E2%9A%A1;Open+Source+Enthusiast+%F0%9F%8C%9F" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://narender-portfolio.vercel.app">🌐 Live Demo</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">🛠️ Tech Stack</a> •
  <a href="#-installation">📦 Installation</a> •
  <a href="#-deployment">🚀 Deployment</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.4.2-black?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-6.0-green?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel"/>
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/NarenderSD/narenderdev?color=green&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/NarenderSD/narenderdev?style=for-the-badge"/>
  <img src="https://img.shields.io/github/forks/NarenderSD/narenderdev?style=for-the-badge"/>
</p>

---

## 🌟 **Overview**

A **premium, responsive portfolio website** built with cutting-edge technologies, featuring dynamic content management, stunning 3D animations, and professional UI/UX design. This project showcases modern web development practices with a focus on performance, accessibility, and user experience.

</div>

## ✨ **Key Features**

### 🎨 **Premium UI/UX**
- 🌈 **3D Card Animations** - Interactive hover effects with depth
- 💎 **Glass Morphism Design** - Modern transparent blur effects  
- 🎯 **Smart Navigation** - Progress indicators and smooth scrolling
- ⚡ **Micro-Interactions** - Engaging hover and click animations
- 📱 **Mobile-First Responsive** - Perfect on all screen sizes
- 🎪 **Animated SVG Icons** - Custom professional animated icons

### 🛠️ **Admin Panel**
- 🔐 **Secure Authentication** - JWT-based admin login
- � **Project Management** - Full CRUD operations for projects
- 🖼️ **Image Upload** - Cloudinary integration for media
- 📝 **Dynamic Content** - Real-time content updates
- �️ **Dashboard Interface** - Intuitive admin controls

### � **Performance & SEO**
- ⚡ **Next.js 15** - Latest features and optimizations
- 🔄 **Connection Pooling** - Optimized database connections
- 🖼️ **Image Optimization** - Automatic WebP/AVIF conversion
- 📊 **Bundle Analysis** - Code splitting and tree shaking
- 🔍 **SEO Optimized** - Meta tags, structured data, sitemap
- �️ **Security Headers** - XSS protection, CORS, CSP

## 🏗️ **Project Architecture**

```
📁 narender-singh-portfolio/
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml              # CI/CD Pipeline
├── 📁 public/
│   ├── 🖼️ images/                     # Static assets
│   ├── 📄 robots.txt                  # SEO robots
│   └── 📄 sitemap.xml                 # SEO sitemap
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 admin/                  # Admin panel
│   │   │   └── 📄 page.tsx            # Admin dashboard
│   │   ├── 📁 api/                    # API routes
│   │   │   ├── 📁 admin/              # Admin API endpoints
│   │   │   │   ├── 📁 auth/           # Authentication
│   │   │   │   ├── 📁 projects/       # Project CRUD
│   │   │   │   └── � upload/         # File upload
│   │   │   └── 📁 gemini/             # AI integration
│   │   ├── 📁 components/             # Reusable components
│   │   │   ├── 🎨 AnimatedIcons.tsx   # Custom SVG animations
│   │   │   ├── 💬 ChatBot.tsx         # AI chatbot
│   │   │   ├── � LoadingScreen.tsx   # Loading animations
│   │   │   ├── 🌙 ThemeSwitcher.tsx   # Dark/light mode
│   │   │   └── 📱 WhatsAppChat.tsx    # Contact widget
│   │   ├── 📁 sections/               # Page sections
│   │   │   ├── 🏠 HeroSection.tsx     # Landing section
│   │   │   ├── 👤 AboutSection.tsx    # About me
│   │   │   ├── 💼 ProjectsSection.tsx # Dynamic projects
│   │   │   ├── 🎓 EducationSection.tsx# Education timeline
│   │   │   ├── 💡 SkillsSection.tsx   # Technical skills
│   │   │   ├── 📧 ContactSection.tsx  # Contact form
│   │   │   └── 🧭 Navbar.tsx          # Navigation
│   │   ├── 📄 layout.tsx              # Root layout
│   │   ├── 📄 page.tsx                # Homepage
│   │   ├── 📄 not-found.tsx           # 404 page
│   │   └── 📄 globals.css             # Global styles
│   └── 📁 lib/
│       ├── 🗄️ mongodb.ts              # Database connection
│       └── ⚠️ errors.ts               # Error handling
├── 📄 .env.example                    # Environment template
├── 📄 .gitignore                      # Git ignore rules
├── 📄 next.config.ts                  # Next.js configuration
├── 📄 package.json                    # Dependencies
├── 📄 tailwind.config.js              # Tailwind CSS config
├── 📄 tsconfig.json                   # TypeScript config
├── 📄 vercel.json                     # Deployment config
└── 📄 README.md                       # Project documentation
```

## 🛠️ **Tech Stack**

<div align="center">

### **Frontend**
![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-pink?style=for-the-badge&logo=framer&logoColor=white)

### **Backend**
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-purple?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-orange?style=for-the-badge&logo=cloudinary&logoColor=white)

### **DevOps & Deployment**
![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-blue?style=for-the-badge&logo=github-actions&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-Code_Quality-purple?style=for-the-badge&logo=eslint&logoColor=white)

</div>

## � **Installation & Setup**

### **Prerequisites**
- 📦 **Node.js** (v18 or higher)
- 🗄️ **MongoDB** (Atlas or local)
- 🖼️ **Cloudinary** account
- 🛠️ **Git**

### **Quick Start**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/NarenderSD/narenderdev.git
cd narenderdev

# 2️⃣ Install dependencies
npm install

# 3️⃣ Set up environment variables
cp .env.example .env.local

# 4️⃣ Configure your .env.local file
# Add your MongoDB URI, Cloudinary keys, JWT secret, etc.

# 5️⃣ Run development server
npm run dev

# 🌐 Open http://localhost:3000
```

### **Environment Variables**

Create a `.env.local` file in the root directory:

```bash
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Authentication
JWT_SECRET=your-super-secure-jwt-secret-key-here

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password

# Optional: AI Integration
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
```

## 🚀 **Deployment Guide**

### **Deploy to Vercel** ⚡

```bash
# 1️⃣ Install Vercel CLI
npm i -g vercel

# 2️⃣ Login to Vercel
vercel login

# 3️⃣ Deploy to production
vercel --prod

# 4️⃣ Set environment variables in Vercel dashboard
# Go to Vercel Dashboard → Project → Settings → Environment Variables
```

### **GitHub Integration**

```bash
# 1️⃣ Push to GitHub
git add .
git commit -m "Initial commit: Production-ready portfolio"
git push origin main

# 2️⃣ Connect to Vercel
# Vercel will automatically deploy on every push to main branch
```

### **Available Scripts**

```bash
npm run dev          # 🚀 Start development server
npm run build        # 🏗️ Build for production
npm run start        # ▶️ Start production server
npm run lint         # 🔍 Run ESLint
npm run lint:fix     # 🔧 Fix ESLint errors
npm run type-check   # 📝 TypeScript type checking
npm run deploy       # 🚀 Deploy to Vercel
npm run preview      # 👀 Preview deployment
```

## 🎨 **Design System**

### **Color Palette**
- 🟠 **Primary**: `#FF6B35` (Orange)
- 🔵 **Secondary**: `#0066CC` (Blue)
- ⚫ **Dark**: `#1F2937` (Gray-800)
- ⚪ **Light**: `#F9FAFB` (Gray-50)

### **Typography**
- **Headings**: Inter, system-ui, sans-serif
- **Body**: Inter, system-ui, sans-serif
- **Code**: 'Fira Code', monospace

### **Animations**
- **Duration**: 0.3s for interactions, 0.7s for page transitions
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **3D Effects**: CSS transforms with perspective

## 🧪 **Testing & Quality**

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build verification
npm run build

# Performance testing
npm run build:analyze
```

## 📊 **Performance Metrics**

<div align="center">

| Metric | Score | Status |
|--------|-------|--------|
| 🚀 Performance | 95+ | ✅ Excellent |
| ♿ Accessibility | 100 | ✅ Perfect |
| 🔍 SEO | 100 | ✅ Perfect |
| 💡 Best Practices | 100 | ✅ Perfect |

</div>

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔄 Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- 🎨 Design inspiration from modern UI/UX trends
- 📦 Built with amazing open-source libraries
- 🌟 Thanks to the developer community for continuous support

## 📞 **Contact & Support**

<div align="center">

**Narender Singh**

[![Portfolio](https://img.shields.io/badge/Portfolio-FF6B35?style=for-the-badge&logo=firefox&logoColor=white)](https://narender-portfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/narendersingh1)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NarenderSD)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:narendersingh2028@gmai.com)

</div>

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

<img src="https://raw.githubusercontent.com/BEPb/BEPb/5c63fa170d1cbbb0b1974f05a3dda00fcf1d5330/assets/Bottom_up.svg" width="100%" />

**Made with ❤️ by [Narender Singh](https://github.com/NarenderSD)**

![Profile Views](https://komarev.com/ghpvc/?username=NarenderSD&color=orange&style=for-the-badge)

</div>
   
   # Deploy
   vercel --prod
   ```

4. **Configure Environment Variables in Vercel**
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add all variables from `.env.example`

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables Required

```env
# Database
MONGODB_URI=mongodb+srv://...

# Image Storage  
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Admin Access
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret_min_32_chars

# AI Integration
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key

# App Configuration
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your_nextauth_secret
```

---

```bash
# Clone
$ git clone https://github.com/NarenderSD/narenderdev.git
$ cd narenderdev

# Install dependencies
$ npm install

# Run the development server
$ npm run dev

# Open http://localhost:3000 in your browser
```

### 🍴 Fork this repo
1. Click the <b>Fork</b> button at the top right of this page.
2. Clone your forked repo:
   ```bash
   git clone https://github.com/<your-username>/narenderdev.git
   cd narenderdev
   ```
3. Follow the install and run steps above.

---

## 📁 Folder Structure

```
portfolio/
├── public/               # Static assets (images, icons, etc.)
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── components/   # Reusable UI components
│   │   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   │   ├── api/          # API routes
│   │   ├── globals.css   # Global styles
│   │   └── layout.tsx    # App layout
├── .gitignore            # Git ignore rules
├── LICENSE               # License file
├── package.json          # Project metadata and scripts
├── README.md             # This file
└── ...
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!<br/>
Feel free to check [issues page](https://github.com/NarenderSD/narenderdev/issues) if you want to contribute.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is [MIT](LICENSE) licensed.

---

## 📬 Contact & Socials

<p align="left">
  <a href="mailto:narender.singh@email.com"><img src="https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white"/></a>
  <a href="https://www.linkedin.com/in/narender-singh/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white"/></a>
  <a href="https://twitter.com/NarenderSD"><img src="https://img.shields.io/badge/Twitter-1DA1F2?logo=twitter&logoColor=white"/></a>
  <a href="https://github.com/NarenderSD"><img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white"/></a>
</p>

---

## ❓ FAQ

<details>
<summary><b>How can I deploy this portfolio?</b></summary>
<p>Just connect your GitHub repo to <a href="https://vercel.com/">Vercel</a> and deploy. No extra config needed!</p>
</details>

<details>
<summary><b>Can I use this template for my own portfolio?</b></summary>
<p>Yes! Just fork, customize, and deploy. Please keep the license info intact.</p>
</details>

<details>
<summary><b>How do I add new sections or animations?</b></summary>
<p>Check the <code>src/app/sections/</code> and <code>src/app/components/</code> folders. Add or edit components as needed. For animations, use <a href="https://www.framer.com/motion/">Framer Motion</a> or Tailwind CSS transitions.</p>
</details>

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=24&pause=1000&color=36BCF7&center=true&vCenter=true&width=435&lines=Thank+You+for+visiting!;Star+this+repo+if+you+like+it!"/>
</div>
