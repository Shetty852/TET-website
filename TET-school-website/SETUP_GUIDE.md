# Quick Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## ✅ What's Already Configured

### ✓ React Router DOM
- Already installed and configured
- Routes set up for Home, About, and Contact pages
- Deep linking with query parameters

### ✓ Tailwind CSS
- Fully configured with custom color palette
- Content paths set for all JSX files
- Custom utilities and base styles

### ✓ Component Structure
All components are created and ready:
- ✅ Navbar with dropdown menus
- ✅ Footer with links and contact info
- ✅ Home page with hero section
- ✅ About page with sub-components
- ✅ Contact page with sub-components

---

## 📁 Complete File Structure

```
TET-school-website/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx          ✅ Created
│   │   └── Footer.jsx          ✅ Created
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx        ✅ Created
│   │   ├── About/
│   │   │   ├── About.jsx       ✅ Created
│   │   │   ├── OurSchool.jsx   ✅ Created
│   │   │   └── VisionMission.jsx ✅ Created
│   │   └── Contact/
│   │       ├── Contact.jsx     ✅ Created
│   │       ├── Phone.jsx       ✅ Created
│   │       ├── Email.jsx       ✅ Created
│   │       └── Location.jsx    ✅ Created
│   ├── App.jsx                 ✅ Configured with routing
│   ├── main.jsx                ✅ Entry point ready
│   ├── index.css               ✅ Tailwind directives added
│   └── App.css                 ✅ Cleaned up
├── index.html
├── package.json
├── tailwind.config.js          ✅ Configured
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
├── README.md
└── PROJECT_DOCUMENTATION.md    ✅ Full documentation

```

---

## 🎯 Navigation Structure

### Navbar (appears on all pages)
```
Logo - TET Excellence School
├── Home (/)
├── About Us ▾
│   ├── Our School (/about?section=our-school)
│   └── Vision & Mission (/about?section=vision-mission)
└── Contact Us ▾
    ├── Phone (/contact?section=phone)
    ├── Email (/contact?section=email)
    └── Location (/contact?section=location)
```

---

## 🎨 Key Features Implemented

### 1. Custom Dropdown Menus
- Implemented with React `useState`
- No external libraries
- Hover and click functionality
- Mobile-responsive

### 2. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu for mobile
- Flexible grid layouts

### 3. Professional Styling
- Educational institution color scheme
- Consistent spacing and typography
- Smooth transitions and hover effects
- Shadow and border utilities

### 4. Smooth Navigation
- React Router for client-side routing
- Smooth scroll to sections
- Query parameter deep linking
- No page reloads

---

## 👥 Team Workflow

### Creating Your Feature Branch

```bash
# Get latest code
git pull origin main

# Create your branch
git checkout -b feature/home-page       # Developer 1
git checkout -b feature/about-page      # Developer 2
git checkout -b feature/contact-page    # Developer 3
```

### Working on Your Branch

```bash
# Make changes to your assigned files
# Test thoroughly

# Stage and commit
git add .
git commit -m "Add: Hero section for home page"

# Push to remote
git push origin feature/your-branch-name
```

### Creating a Pull Request

1. Go to your Git platform (GitHub/GitLab)
2. Click "New Pull Request"
3. Select your branch → main
4. Add description of changes
5. Assign reviewers
6. Submit PR

### Code Review Process

1. Team member reviews code
2. Comments and suggestions
3. Make requested changes
4. Re-push to same branch
5. Get approval
6. Merge to main

---

## 🔍 Testing Your Work

### Before Committing

- [ ] Test on desktop (large screen)
- [ ] Test on tablet (md breakpoint)
- [ ] Test on mobile (sm breakpoint)
- [ ] Check all links work
- [ ] Verify dropdown menus function
- [ ] Check console for errors
- [ ] Test navigation between pages
- [ ] Verify smooth scrolling to sections

### Browser Testing

Test in at least:
- Chrome
- Firefox
- Safari (if on Mac)
- Edge

---

## 🛠️ Common Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Install new package (if needed)
npm install package-name

# Check for errors
# Open browser DevTools (F12) and check Console tab
```

---

## 📱 Responsive Design Tips

### Using Tailwind Breakpoints

```jsx
// Mobile first - this applies to all sizes
<div className="text-sm">

// Then add larger breakpoints
<div className="text-sm md:text-base lg:text-lg">
```

### Common Responsive Patterns

```jsx
// Stack on mobile, grid on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Hide on mobile, show on desktop
<div className="hidden md:block">

// Different padding for different sizes
<div className="px-4 sm:px-6 lg:px-8">
```

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will use next available port (5174, etc.)

### Tailwind Styles Not Working
1. Check `tailwind.config.js` has correct content paths
2. Verify `@tailwind` directives in `index.css`
3. Restart dev server

### Routing Issues
1. Make sure components are imported in `App.jsx`
2. Check route paths match exactly
3. Verify `BrowserRouter` wraps the app

### Import Errors
1. Check file paths and extensions (.jsx)
2. Verify component exports (`export default`)
3. Check for typos in import statements

---

## 📞 Need Help?

1. **Check Documentation**: Read PROJECT_DOCUMENTATION.md
2. **Console Errors**: Look at browser console (F12)
3. **Team Chat**: Ask your team members
4. **Git Issues**: Review Git workflow in documentation

---

## ✨ You're All Set!

The project is **fully configured** and **ready for development**. Each team member can now:

1. Create their feature branch
2. Work on assigned pages independently
3. Test locally
4. Submit pull requests
5. Review team members' code
6. Merge to main when approved

**Happy Coding! 🚀**

---

*Last Updated: February 7, 2026*
