# TET Excellence School Website 🎓

> A professional, client-ready React application for a school website built with team-based development practices.

[![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-7.13.0-ca4245?style=flat&logo=reactrouter)](https://reactrouter.com)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?style=flat&logo=vite)](https://vitejs.dev)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

**That's it!** The application is fully configured and ready to run.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Team Workflow](#-team-workflow)
- [Documentation](#-documentation)
- [Scripts](#-scripts)
- [Contributing](#-contributing)

---

## 🎯 Overview

This is a **complete, production-ready** school website application designed for:

✅ **Client projects** - Professional quality, ready for client delivery  
✅ **Team development** - 3 developers working in parallel on Git branches  
✅ **Learning** - Clean code structure, well-documented, easy to understand  
✅ **Scalability** - Modular architecture, easy to extend and maintain  

### Project Context

- **Type:** Internship client project
- **Team Size:** 3 developers
- **Workflow:** Git feature branches with code review
- **Approach:** Clean code, scalable architecture, professional delivery

---

## ✨ Features

### 🧭 Navigation
- **Sticky navbar** on all pages
- **Custom dropdown menus** (React state - no external libraries)
- **Mobile-responsive** hamburger menu
- **Smooth transitions** and hover effects

### 📄 Pages
- **Home** - Hero section with features and call-to-action
- **About** - School information with sub-sections (Our School, Vision & Mission)
- **Contact** - Contact details with sub-sections (Phone, Email, Location)

### 🎨 Design
- **Fully responsive** - Desktop, tablet, and mobile
- **Professional UI** - Clean, modern design for educational institutions
- **Custom Tailwind theme** - Education-focused color palette
- **Smooth scrolling** - Navigation to page sections

### 🛠️ Developer Experience
- **Modular components** - Easy to understand and maintain
- **Clean file structure** - Organized by feature/page
- **Well-documented** - Comprehensive guides and comments
- **No errors** - Clean build, no warnings

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI framework (functional components) |
| **React Router DOM** | 7.13.0 | Client-side routing |
| **Tailwind CSS** | 4.1.18 | Utility-first styling |
| **Vite** | 7.2.4 | Build tool & dev server |
| **ESLint** | 9.39.1 | Code quality |

**No UI libraries or templates** - All components custom-built with React and Tailwind.

---

## 📁 Project Structure

```
src/
├── components/          # Shared components
│   ├── Navbar.jsx      # Navigation with dropdowns
│   └── Footer.jsx      # Footer with links
├── pages/              # Page components
│   ├── Home/
│   │   └── Home.jsx    # Landing page
│   ├── About/
│   │   ├── About.jsx   # About main page
│   │   ├── OurSchool.jsx
│   │   └── VisionMission.jsx
│   └── Contact/
│       ├── Contact.jsx # Contact main page
│       ├── Phone.jsx
│       ├── Email.jsx
│       └── Location.jsx
├── App.jsx             # Routing configuration
├── main.jsx            # Application entry
└── index.css           # Global styles
```

---

## 🏃 Getting Started

### Prerequisites
- Node.js v14 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TET-school-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 👥 Team Workflow

This project supports **3 developers** working simultaneously on different pages.

### Developer Assignments

| Developer | Branch | Files |
|-----------|--------|-------|
| **Developer 1** | `feature/home-page` | `src/pages/Home/Home.jsx` |
| **Developer 2** | `feature/about-page` | All files in `src/pages/About/` |
| **Developer 3** | `feature/contact-page` | All files in `src/pages/Contact/` |

### Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-page-name
   ```

2. **Make changes and commit**
   ```bash
   git add .
   git commit -m "Add: Hero section for home page"
   ```

3. **Push and create PR**
   ```bash
   git push origin feature/your-page-name
   # Then create Pull Request on GitHub/GitLab
   ```

4. **Code review and merge**
   - Team reviews code
   - Address feedback
   - Merge when approved

For detailed Git workflow, see [GIT_WORKFLOW.md](./GIT_WORKFLOW.md)

---

## 📚 Documentation

We have **comprehensive documentation** for all aspects of the project:

### Quick Reference
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Quick start guide (5 min read)
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project completion status

### Detailed Guides
- **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** - Complete project documentation
- **[GIT_WORKFLOW.md](./GIT_WORKFLOW.md)** - Git commands and team workflow

### Visual Diagrams
- Component architecture diagram
- Routing flow diagram

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 🌐 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero and features |
| `/about` | About | About page with school info |
| `/contact` | Contact | Contact information and location |

### Deep Links (Query Parameters)

Navigate directly to specific sections:

**About Page:**
- `/about?section=our-school`
- `/about?section=vision-mission`

**Contact Page:**
- `/contact?section=phone`
- `/contact?section=email`
- `/contact?section=location`

---

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Main brand color
    600: '#0284c7',  // Darker shade
    // ... other shades
  }
}
```

### Content

Update content in the respective page component files:
- Home: `src/pages/Home/Home.jsx`
- About: `src/pages/About/*.jsx`
- Contact: `src/pages/Contact/*.jsx`

### Styling

All styling uses **Tailwind CSS utility classes**. Examples:

```jsx
// Blue background with white text
<div className="bg-primary-600 text-white">

// Responsive padding
<div className="px-4 md:px-6 lg:px-8">

// Grid layout
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
```

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Test all routes
- [ ] Test navigation dropdowns
- [ ] Test mobile responsive design
- [ ] Test on different browsers
- [ ] Verify smooth scrolling
- [ ] Check for console errors

### Responsive Testing

Test at these breakpoints:
- Mobile: 375px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

---

## 🤝 Contributing

This is a team project. Please:

1. Follow the established code structure
2. Use descriptive commit messages
3. Test thoroughly before creating PR
4. Review team members' code constructively
5. Keep code clean and well-commented

### Code Style

- Use functional components with hooks
- Follow existing naming conventions
- Keep components focused and modular
- Use Tailwind classes (avoid custom CSS)
- Comment complex logic

---

## 📊 Project Status

✅ **Complete and ready for team development**

- [x] All components created
- [x] Routing configured
- [x] Responsive design implemented
- [x] Documentation complete
- [x] No errors or warnings
- [x] Development server running
- [x] Git workflow documented

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)

---

## 📝 Notes

- **Components**: All use functional components with React hooks
- **Styling**: 100% Tailwind CSS, no custom CSS files needed
- **Routing**: Client-side routing with React Router v7
- **State**: Local component state using `useState`
- **No external UI libraries**: All components custom-built

---

## 📄 License

This project is for educational purposes as part of an internship program.

---

## 👨‍💻 Team

- **Developer 1:** Home Page Team
- **Developer 2:** About Page Team
- **Developer 3:** Contact Page Team

---

## 🙏 Acknowledgments

Built with modern web development best practices for client delivery and team collaboration.

---

## 📞 Support

For questions or issues:
1. Check the documentation files
2. Review the code comments
3. Ask your team members
4. Check the browser console for errors

---

<div align="center">

**Built with ❤️ for TET Excellence School**

[Documentation](./PROJECT_DOCUMENTATION.md) • [Setup Guide](./SETUP_GUIDE.md) • [Git Workflow](./GIT_WORKFLOW.md)

</div>

## How to Run This Project

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation & Running

1. **Navigate to the project directory**:
   ```bash
   cd TET-school-website
   ```

2. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
