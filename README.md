# 🚀 Modern Portfolio Website

A stunning, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring glassmorphism design, smooth animations, and modern UI/UX.

## 📚 Table of Contents

- [✨ Features](#-features)
  - [🎨 Design & UI](#-design--ui)
  - [📱 Pages & Navigation](#-pages--navigation)
  - [⚡ Technical Features](#-technical-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Build for Production](#build-for-production)
  - [Preview Production Build](#preview-production-build)
- [📁 Project Structure](#-project-structure)
- [🎨 Customization](#-customization)
  - [Colors & Theme](#colors--theme)
  - [Content](#content)
  - [Images](#images)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Available Scripts](#-available-scripts)
- [🌟 Key Features Explained](#-key-features-explained)
  - [Glassmorphism Effect](#glassmorphism-effect)
  - [Custom Animations](#custom-animations)
  - [Responsive Navigation](#responsive-navigation)
- [🚀 Deployment](#-deployment)
  - [Vercel (Recommended)](#vercel-recommended)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📞 Contact](#-contact)

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism Effects** - Modern frosted glass design with backdrop blur
- **Gradient Backgrounds** - Beautiful animated gradient backgrounds
- **Smooth Animations** - Custom CSS animations and transitions
- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark Theme** - Professional dark color scheme
- **Custom Scrollbar** - Styled scrollbar with gradient effects

### 📱 Pages & Navigation
**Main Pages:**
- 🏠 **Home** - Hero section with call-to-action
- 👤 **About** - Personal story, skills, and experience
- 💼 **Projects** - Featured and regular project showcases
- 📧 **Contact** - Contact form with social links

**Additional Pages** (accessible via footer):
- 📝 **Blogs** - Featured and recent blog posts
- 🏆 **Certifications** - Professional certifications
- 🛠️ **Tech Stack** - Detailed skills with proficiency levels

### ⚡ Technical Features
- **React 18** with TypeScript for type safety
- **React Router** for client-side routing
- **Tailwind CSS** with custom animations
- **Lucide React** icons
- **Mobile-first** responsive design
- **SEO optimized** structure
- **Accessibility** compliant

## 🛠️ Tech Stack

**Frontend:**
- React 18.3.1 - Component-based UI library
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first CSS framework
- React Router DOM - Client-side routing
- Lucide React - Beautiful icon library

**Build Tools:**
- Vite - Fast build tool and dev server
- PostCSS - CSS processing
- Autoprefixer - CSS vendor prefixing
- ESLint - Code linting
- TypeScript Compiler - Type checking

**Styling & Animation:**
- Tailwind CSS Animate - Animation utilities
- Custom CSS Animations - Float, glow, slide effects
- Glassmorphism - Backdrop blur effects
- Gradient Backgrounds - Dynamic color schemes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   ├── Blogs.tsx       # Blog posts
│   ├── Certifications.tsx # Certifications
│   └── TechStack.tsx   # Skills and technologies
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions
├── App.tsx             # Main app component
├── main.tsx           # App entry point
├── index.css          # Global styles
└── App.css            # Component styles
```

## 🎨 Customization

### Colors & Theme
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      secondary: {
        // Your secondary colors
      }
    }
  }
}
```

### Content
1. **Personal Information** - Update content in each page component
2. **Projects** - Modify the projects array in `Projects.tsx`
3. **Skills** - Update the tech stack in `TechStack.tsx`
4. **Social Links** - Change social media links in `Footer.tsx`

### Images
Replace placeholder images with your actual content:
- Project screenshots
- Profile photos
- Certification images

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Explained

### Glassmorphism Effect
Achieved using Tailwind's backdrop blur utilities:
```css
backdrop-blur-md bg-white/5 border border-white/10
```

### Custom Animations
Defined in `tailwind.config.js` and used throughout:
- `animate-float` - Floating elements
- `animate-glow` - Glowing effects
- `animate-slide-up` - Slide up transitions
- `animate-fade-in` - Fade in effects

### Responsive Navigation
Mobile-first navigation with hamburger menu and smooth transitions.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set
- **Vite** - For the fast build tool

## 📞 Contact

- **Email**: nathijanimantha10@gmail.com
- **LinkedIn**: [Nathija Nimantha](https://linkedin.com/in/nathija-nimantha)
- **GitHub**: [Nathija Nimantha](https://github.com/nathija-nimantha)
- **Website**: [Portfolio](https://yourportfolio.com)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and React