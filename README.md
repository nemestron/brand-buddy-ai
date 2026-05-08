# 🚀 Brand Buddy - AI-Powered Logo Generator

<div align="center">

![Brand Buddy Banner](https://img.shields.io/badge/Brand-Buddy-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)

**Transform your brand identity with AI-generated professional logos in seconds**

[🌐 Live Demo](https://brand-buddy-ai.vercel.app/) • [📋 Documentation](#-documentation) • [🔧 Tech Stack](#-tech-stack) • [👨‍💻 Author](#-author)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Architecture](#-architecture)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Development Roadmap](#-development-roadmap)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🎯 Overview

**Brand Buddy** is a cutting-edge, AI-powered logo generation platform that empowers businesses and creators to design professional, unique logos in minutes. Leveraging the power of Google Gemini for intelligent prompt refinement and Hugging Face's state-of-the-art image generation models, Brand Buddy transforms simple brand descriptions into stunning visual identities.

Built with modern web technologies and best practices, the application features a seamless multi-step wizard, secure authentication, credit-based usage system, and an intuitive dashboard for managing your brand assets.

---

## 🌐 Live Demo

✨ **Experience Brand Buddy in action:** [https://brand-buddy-ai.vercel.app/](https://brand-buddy-ai.vercel.app/)

---

## 🏗️ Architecture

<img width="1693" height="929" alt="image" src="https://github.com/user-attachments/assets/a7328e8e-7b2c-4bf2-bc98-f175158cfe6b" />


*Figure 1: Brand Buddy System Architecture - Showing the complete flow from frontend to AI generation and persistence*



**Architecture Highlights:**
- **Frontend Foundation**: Next.js 14 with App Router for optimal performance
- **Secure Access**: Clerk authentication with middleware protection
- **Wizard Logic**: React state management for seamless user experience
- **Generative Core**: Google Gemini + Hugging Face/Replicate for AI-powered logo synthesis
- **Persistence**: Firebase Firestore for user data and logo history
- **User Experience**: Intuitive dashboard with download capabilities

---

## ✨ Features

### 🎨 Core Features
- **AI-Powered Logo Generation**: Leverage Google Gemini and Hugging Face models for professional results
- **Multi-Step Creation Wizard**: Intuitive 5-step process (Title → Description → Colors → Style → Generation)
- **Smart Prompt Refinement**: AI enhances your brand description into detailed image prompts
- **Color Palette Selection**: Curated color schemes for brand consistency
- **Style Preferences**: Choose from Modern, Vintage, Minimalist, and more design styles

### 🔐 User Management
- **Secure Authentication**: OAuth-powered sign-in via Clerk
- **Credit System**: 5 free credits per user with usage tracking
- **Personal Dashboard**: View, manage, and download all generated logos
- **History Tracking**: Automatic storage of all generated designs with metadata

### 💾 Data & Storage
- **Cloud Database**: Firebase Firestore for reliable data persistence
- **Base64 Image Storage**: Logos stored directly in database for instant access
- **Metadata Rich**: Each logo includes title, prompt, timestamp, and preferences

### 🎯 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **One-Click Download**: Instant PNG download of generated logos
- **Real-time Feedback**: Loading states and progress indicators
- **Modern UI/UX**: Built with ShadCN UI components and Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![ShadCN UI](https://img.shields.io/badge/ShadCN-UI-black?style=flat-square)](https://ui.shadcn.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide-Icons-green?style=flat-square)](https://lucide.dev/)

### Backend & Authentication
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=flat-square&logo=clerk)](https://clerk.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)

### AI & Machine Learning
[![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
[![Hugging Face](https://img.shields.io/badge/Hugging-Face-FFD21E?style=flat-square&logo=huggingface)](https://huggingface.co/)
[![Replicate](https://img.shields.io/badge/Replicate-API-000000?style=flat-square)](https://replicate.com/)

### Deployment & DevOps
[![Vercel](https://img.shields.io/badge/Vercel-Platform-000000?style=flat-square&logo=vercel)](https://vercel.com/)
[![Git](https://img.shields.io/badge/Git-Version-F05032?style=flat-square&logo=git)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=flat-square&logo=github)](https://github.com/)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for version control
- **VS Code** (recommended) - [Download](https://code.visualstudio.com/)

### Required API Keys & Accounts

1. **Google Gemini API Key** - [Get from Google AI Studio](https://makersuite.google.com/app/apikey)
2. **Hugging Face Access Token** - [Get from Hugging Face](https://huggingface.co/settings/tokens)
3. **Clerk Account** - [Sign up at Clerk.com](https://clerk.com/)
4. **Firebase Project** - [Create at Firebase Console](https://console.firebase.google.com/)
5. **Replicate API Token** (Optional, for premium images) - [Get from Replicate](https://replicate.com/account/api-tokens)

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/nemestron/brand-buddy-ai.git

# Navigate to project directory
cd brand-buddy-ai
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install

# Or using yarn
yarn install
```

### Step 3: Initialize ShadCN UI

```bash
# Initialize ShadCN with recommended settings
npx shadcn-ui@latest init

# Settings to choose:
# - Style: New York
# - Color: Neutral
# - CSS Variables: Yes

# Install required components
npx shadcn-ui@latest add button input
```

### Step 4: Install Additional Dependencies

```bash
# Install Lucide Icons
npm install lucide-react

# Install Clerk
npm install @clerk/nextjs

# Install Firebase
npm install firebase
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Gemini API Key
GOOGLE_GEMINI_API_KEY=your_gemini_api_key

# Hugging Face Access Token
HUGGING_FACE_API_TOKEN=your_huggingface_token

# Replicate API Token (Optional)
REPLICATE_API_TOKEN=your_replicate_token

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> ⚠️ **Security Note**: Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

---

## 📖 Usage

### Development Mode

```bash
# Start the development server
npm run dev

# The app will be available at
# http://localhost:3000
```

### Building for Production

```bash
# Create a production build
npm run build

# Start the production server
npm start
```

### User Flow

1. **Landing Page**: Enter your brand name and click "Get Started"
2. **Authentication**: Sign in/Create account via Clerk
3. **Creation Wizard**:
   - **Step 1**: Enter/modify your brand name
   - **Step 2**: Provide a brand description
   - **Step 3**: Select your preferred color palette
   - **Step 4**: Choose a design style (Modern, Vintage, etc.)
   - **Step 5**: AI generates your logo
4. **Dashboard**: View all generated logos
5. **Download**: Click download to save your logo as PNG

---

## 📁 Project Structure

```
brand-buddy-ai/
├── .env.local                    # Environment variables (API keys)
├── middleware.ts                 # Clerk authentication middleware
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── package.json                  # Dependencies and scripts
├── README.md                     # Project documentation
│
├── app/                          # Main application (App Router)
│   ├── layout.jsx                # Root layout (Fonts, Providers)
│   ├── page.jsx                  # Landing Page
│   ├── provider.jsx              # Context Providers Wrapper
│   │
│   ├── api/                      # Backend API routes
│   │   └── users/
│   │       └── route.jsx         # User creation/management
│   │
│   ├── create/                   # Logo Creation Wizard
│   │   ├── page.jsx              # Main wizard page
│   │   └── _components/          # Wizard step components
│   │       ├── LogoTitle.jsx     # Step 1: Brand name
│   │       ├── LogoDesc.jsx      # Step 2: Description
│   │       ├── ColorPalette.jsx  # Step 3: Color selection
│   │       ├── LogoDesign.jsx    # Step 4: Style selection
│   │       └── LogoIdea.jsx      # Step 5: AI generation
│   │
│   └── dashboard/                # User Dashboard
│       └── page.jsx              # Logo history & management
│
├── components/                   # Shared UI components
│   ├── Header.jsx                # Navigation header
│   └── Hero.jsx                  # Landing page hero
│
├── configs/                      # Configuration files
│   └── FirebaseConfig.js         # Firebase initialization
│
└── public/                       # Static assets
    ├── images/                   # Images and icons
    └── favicon.ico               # Favicon
```

---

## 🗺️ Development Roadmap

### ✅ Phase 1: Project Initialization & UI Foundation
- [x] Next.js 14 setup with App Router
- [x] Tailwind CSS & ShadCN UI integration
- [x] Responsive landing page with Header and Hero
- [x] Custom theme configuration (Host Grotesk font, primary colors)
- [x] GitHub repository initialization

### ✅ Phase 2: The Creation Wizard (Frontend Logic)
- [x] Multi-step form implementation
- [x] React state management with useState
- [x] Dynamic routing (/create?title={input})
- [x] Form components (Title, Description, Color, Style)
- [x] Navigation logic (Previous/Continue)

### ✅ Phase 3: Authentication & Backend Setup
- [x] Clerk OAuth integration
- [x] Middleware protection for /create route
- [x] Firebase Firestore setup
- [x] User document creation with credit system
- [x] API route for user management

### ✅ Phase 4: AI Integration (The Brains)
- [x] Google Gemini API for prompt refinement
- [x] Hugging Face integration (Flux-Midjourney model)
- [x] Base64 image conversion and handling
- [x] Credit system implementation
- [x] UserDetailContext for credit tracking

### ✅ Phase 5: Dashboard & Finalizing
- [x] Logo persistence in Firestore
- [x] Dashboard with grid layout
- [x] Logo history retrieval
- [x] Download functionality (PNG export)
- [x] Metadata storage (title, prompt, date)

### 🔄 Phase 6: Deployment
- [x] Vercel deployment
- [x] Environment variables configuration
- [x] Production build optimization
- [x] Live demo at https://brand-buddy-ai.vercel.app/

### 🔮 Future Enhancements (Planned)
- [ ] Premium tier with unlimited generations
- [ ] Logo editing and customization tools
- [ ] Brand kit generation (colors, fonts, guidelines)
- [ ] Social media template exports
- [ ] Team collaboration features
- [ ] Vector format (SVG) exports
- [ ] A/B testing for logo variations
- [ ] Integration with domain registrars

---

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your `brand-buddy-ai` repository
   - Configure environment variables (copy from `.env.local`)
   - Click "Deploy"

3. **Environment Variables in Vercel**
   
   Add all variables from `.env.local` in Vercel's dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_FIREBASE_*` (all Firebase vars)
   - `GOOGLE_GEMINI_API_KEY`
   - `HUGGING_FACE_API_TOKEN`
   - `REPLICATE_API_TOKEN`

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

### Alternative: Deploy to Other Platforms

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Railway:**
```bash
npm install -g @railway/cli
railway login
railway deploy
```

---

## 🤝 Contributing

We welcome contributions to Brand Buddy! Please follow these guidelines:

### How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button on GitHub
   - Clone your fork locally

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Write clear, concise commit messages
   - Test your changes thoroughly

4. **Commit Your Changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes in detail

### Code Style Guidelines
- Use functional components with React hooks
- Follow ESLint and Prettier configurations
- Write meaningful variable and function names
- Comment complex logic
- Ensure responsive design

### Reporting Bugs
- Use GitHub Issues
- Provide detailed steps to reproduce
- Include screenshots if applicable
- Mention your environment (OS, browser, Node version)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Dhiraj Malwade

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍ Author

### Dhiraj Malwade

**Full-Stack Developer | AI Enthusiast | Building the Future of Branding**

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dhiraj-malwade-6a8385399/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nemestron)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://brand-buddy-ai.vercel.app/)

</div>

<p align="center">
  <strong>Connect with me:</strong><br>
  🔗 LinkedIn: <a href="https://www.linkedin.com/in/dhiraj-malwade-6a8385399/">linkedin.com/in/dhiraj-malwade</a><br>
  💼 Live Project: <a href="https://brand-buddy-ai.vercel.app/">brand-buddy-ai.vercel.app</a>
</p>

---

## 🙏 Acknowledgments

- **Google Gemini** - For powerful prompt engineering capabilities
- **Hugging Face** - For state-of-the-art image generation models
- **Clerk** - For seamless authentication
- **Firebase** - For reliable cloud database
- **Vercel** - For excellent deployment platform
- **ShadCN UI** - For beautiful, accessible components
- **Next.js Team** - For the amazing React framework

---

## 📞 Support

If you have any questions, suggestions, or need help:

- **Open an Issue**: [GitHub Issues](https://github.com/nemestron/brand-buddy-ai/issues)
- **LinkedIn**: [Message me on LinkedIn](https://www.linkedin.com/in/dhiraj-malwade-6a8385399/)
- **Live Demo**: Try the app at [brand-buddy-ai.vercel.app](https://brand-buddy-ai.vercel.app/)

---

<div align="center">

**Made with ❤️ by Dhiraj Malwade**

⭐ **Star this repo if you find it helpful!**

[⬆ Back to Top](#-brand-buddy---ai-powered-logo-generator)

</div>
