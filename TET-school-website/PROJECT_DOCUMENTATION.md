# TET Excellence School Website

A professional, client-ready React application built for a school website using modern web development practices and team-based development workflow.

## 🚀 Project Overview

This project is an internship client project developed by a team of 3 developers working in parallel using Git branches. The application is built with React, Tailwind CSS, and React Router DOM, following clean code principles and scalable architecture.

## 📋 Tech Stack

- **React 19.2.0** - UI Framework (Functional Components)
- **React Router DOM 7.13.0** - Client-side routing
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Vite 7.2.4** - Build tool and development server
- **ESLint** - Code linting and quality

## 🏗️ Project Structure

```
src/
├── pages/
│   ├── Home/
│   │   └── Home.jsx                 # Home page with hero section
│   ├── About/
│   │   ├── About.jsx                # About page main component
│   │   ├── OurSchool.jsx            # Sub-component: School information
│   │   └── VisionMission.jsx        # Sub-component: Vision & Mission
│   └── Contact/
│       ├── Contact.jsx              # Contact page main component
│       ├── Phone.jsx                # Sub-component: Phone contacts
│       ├── Email.jsx                # Sub-component: Email contacts
│       └── Location.jsx             # Sub-component: Location & directions
├── components/
│   ├── Navbar.jsx                   # Navigation bar with dropdowns
│   └── Footer.jsx                   # Footer component
├── App.jsx                          # Main app with routing configuration
├── main.jsx                         # Application entry point
├── index.css                        # Global styles and Tailwind directives
└── App.css                          # Custom component styles
```

## 🌐 Routes

| Route      | Component | Description                 |
|------------|-----------|----------------------------|
| `/`        | Home      | Landing page with hero section |
| `/about`   | About     | About Us with sub-sections |
| `/contact` | Contact   | Contact information        |

### Query Parameters for Deep Linking

**About Page:**
- `/about?section=our-school` - Scroll to Our School section
- `/about?section=vision-mission` - Scroll to Vision & Mission section

**Contact Page:**
- `/contact?section=phone` - Scroll to Phone section
- `/contact?section=email` - Scroll to Email section
- `/contact?section=location` - Scroll to Location section

## 🎨 Design Features

- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Professional UI** - Clean, modern design suitable for educational institutions
- **Custom Dropdowns** - Navbar dropdowns implemented with React state (no external libraries)
- **Smooth Scrolling** - Smooth navigation to page sections
- **Tailwind Color Palette** - Custom primary color scheme for brand consistency

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

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
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 👥 Team Development Workflow

### Branch Strategy

This project follows a feature-branch workflow:

```
main
├── feature/home-page
├── feature/about-page
└── feature/contact-page
```

### Developer Assignments

**Developer 1 - Home Page**
- `src/pages/Home/Home.jsx`
- Hero section, features, call-to-action

**Developer 2 - About Page**
- `src/pages/About/About.jsx`
- `src/pages/About/OurSchool.jsx`
- `src/pages/About/VisionMission.jsx`

**Developer 3 - Contact Page**
- `src/pages/Contact/Contact.jsx`
- `src/pages/Contact/Phone.jsx`
- `src/pages/Contact/Email.jsx`
- `src/pages/Contact/Location.jsx`

### Git Workflow

1. **Create your feature branch**
   ```bash
   git checkout -b feature/your-page-name
   ```

2. **Make your changes and commit**
   ```bash
   git add .
   git commit -m "Add: Home page hero section"
   ```

3. **Push to remote**
   ```bash
   git push origin feature/your-page-name
   ```

4. **Create Pull Request**
   - Go to GitHub/GitLab
   - Create PR from your branch to `main`
   - Request code review from team members

5. **Code Review**
   - Team members review the code
   - Address feedback
   - Merge when approved

### Commit Message Convention

Use clear, descriptive commit messages:

```
Add: [feature] - When adding new features
Update: [feature] - When updating existing features
Fix: [issue] - When fixing bugs
Refactor: [code] - When refactoring code
Style: [changes] - When making style changes
Docs: [documentation] - When updating documentation
```

## 🎯 Code Quality Standards

### Component Best Practices

1. **Functional Components**
   - Use functional components with hooks
   - Keep components focused and single-purpose

2. **Props and State**
   - Use descriptive prop names
   - Implement proper prop validation when needed
   - Keep state localized when possible

3. **Styling**
   - Use Tailwind utility classes
   - Follow mobile-first responsive design
   - Maintain consistent spacing and colors

4. **File Organization**
   - One component per file
   - Group related components in folders
   - Use index files for cleaner imports

### Code Review Checklist

- [ ] Code follows project structure
- [ ] Component is responsive on all screen sizes
- [ ] No console errors or warnings
- [ ] Code is readable and well-commented
- [ ] Follows Tailwind CSS conventions
- [ ] No hardcoded values (use Tailwind theme)
- [ ] Proper semantic HTML
- [ ] Accessibility considerations (alt text, ARIA labels)

## 🎨 Tailwind Configuration

Custom color palette defined in `tailwind.config.js`:

**Primary Colors** (Blue theme for education)
- primary-50 to primary-900

**Usage Example:**
```jsx
<div className="bg-primary-600 text-white">
  Content
</div>
```

## 📱 Responsive Breakpoints

Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📦 Dependencies

### Production
- `react`: UI library
- `react-dom`: React DOM rendering
- `react-router-dom`: Routing functionality

### Development
- `vite`: Build tool
- `@vitejs/plugin-react-swc`: React plugin for Vite
- `tailwindcss`: CSS framework
- `autoprefixer`: CSS vendor prefixing
- `postcss`: CSS processing
- `eslint`: Code linting

## 🌟 Features

### Navbar
- Responsive mobile menu
- Dropdown menus using React state
- Smooth transitions and hover effects
- Sticky positioning
- Logo and branding

### Home Page
- Hero section with gradient background
- Call-to-action buttons
- Feature showcase grid
- Responsive layout

### About Page
- OurSchool sub-component with school information
- VisionMission sub-component with goals
- Smooth scroll navigation
- Professional content layout

### Contact Page
- Phone contacts with office hours
- Email directory by department
- Location with maps and directions
- Accessibility and parking information

### Footer
- Site links and quick navigation
- Contact information
- Responsive grid layout
- Copyright and branding

## 🚧 Future Enhancements

- [ ] Add image gallery
- [ ] Implement contact form with validation
- [ ] Add Google Maps integration
- [ ] Create admin dashboard
- [ ] Add student/parent portal
- [ ] Implement news/announcements section
- [ ] Add faculty directory
- [ ] Create events calendar

## 📝 Notes for Developers

1. **Before Starting Work**
   - Pull latest changes from main
   - Create a new feature branch
   - Install dependencies

2. **During Development**
   - Test responsive design on multiple screen sizes
   - Check for console errors
   - Follow component structure
   - Write clean, readable code

3. **Before Committing**
   - Test all functionality
   - Review your code
   - Run linter
   - Write descriptive commit messages

4. **During Code Review**
   - Be constructive and respectful
   - Explain reasoning for changes
   - Test the PR locally
   - Check for conflicts

## 🤝 Contributing

This is a team project. Please follow the established patterns and conventions. When in doubt, discuss with your team members.

## 📄 License

This project is for educational purposes as part of an internship program.

## 👨‍💻 Team

- Developer 1: Home Page
- Developer 2: About Page
- Developer 3: Contact Page

---

**Built with ❤️ for TET Excellence School**
