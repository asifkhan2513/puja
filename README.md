# 🕉️ Divine Pooja - Online Temple Services Platform

A modern, responsive web application for booking authentic Poojas and spiritual services from sacred temples across India.

## ✨ Features

- 🌙 **Dark Mode** - Toggle between light and dark themes with persistent storage
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Lazy Loading** - Images and components load on demand for better performance
- 🎨 **Modern UI** - Beautiful gradients, animations, and hover effects
- 🎯 **Icon Library** - Lucide React + Radix UI icons
- 🎨 **Custom Colors** - Tailwind CSS with custom color palette
- 📝 **Typography** - PT Serif + Inter fonts for elegant design
- 🔄 **Smooth Animations** - Fade, slide, and scale animations
- 🧩 **Reusable Components** - Template-based architecture
- 🛣️ **Centralized Routing** - PATH configuration for easy navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
├── components/
│   ├── Home/           # Home page components
│   ├── OnlinePooja/     # Pooja service components
│   ├── config/         # Configuration files (PATH)
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── LazyImage.jsx   # Lazy loading image component
├── context/
│   └── ThemeContext.jsx # Dark mode context
├── redux/              # Redux store
├── App.jsx             # Main app with routes
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Tech Stack

- **React 19** - UI library
- **React Router v7** - Routing
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **Lucide React** - Icons
- **Radix UI** - UI primitives and icons
- **React Hot Toast** - Notifications

## 📚 Documentation

- **[PROJECT_SETUP.md](PROJECT_SETUP.md)** - Complete project documentation
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Common patterns and examples
- **[COMPONENT_LIBRARY.md](COMPONENT_LIBRARY.md)** - Component reference
- **[COLOR_PALETTE.md](COLOR_PALETTE.md)** - Color system guide
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Implementation details
- **[CHECKLIST.md](CHECKLIST.md)** - Testing and development checklist

## 🎯 Key Components

### Navbar

Responsive navigation with dropdown menus, dark mode toggle, and mobile menu.

### Footer

Multi-column footer with links, social media, and contact information.

### HomePage

Landing page with hero section, features, Pooja categories, temples, and testimonials.

### PoojaTemplate

Reusable template for creating Pooja category pages.

### LazyImage

Custom image component with lazy loading and fade-in animation.

## 🎨 Color Palette

- **Primary**: Amber/Orange (#f59e0b → #d97706)
- **Secondary**: Teal/Green (#10b981)
- **Accent**: Orange (#d97706)
- **Background**: White/Gray-900
- **Text**: Gray-900/White

## 🌙 Dark Mode

Dark mode is implemented using Context API with localStorage persistence. Toggle the theme using the moon/sun icon in the navbar.

```jsx
import { useTheme } from "./context/ThemeContext";

const { theme, toggleTheme } = useTheme();
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Icons

### Lucide React

```jsx
import { Sparkles, Heart, Users } from "lucide-react";
```

### Radix UI

```jsx
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
```

## 🛣️ Routing

All routes are centralized in `src/components/config/Path.js`:

```jsx
import { PATH } from "./components/config/Path";

<Link to={PATH.PoojaS_DEVI_MAA}>Devi Maa Poojas</Link>;
```

## 🖼️ Lazy Loading Images

```jsx
import LazyImage from "./components/LazyImage";
import temple from "./assets/temple.jpg";

<LazyImage src={temple} alt="Temple" className="w-full h-64 rounded-lg" />;
```

## 🎨 Custom Styles

### Buttons

```jsx
// Primary gradient button
<button className="btn-primary">Book Now</button>

// Secondary outlined button
<button className="btn-secondary">Learn More</button>
```

### Cards

```jsx
<div className="card p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Animations

```jsx
<div className="animate-fadeIn">Fade in</div>
<div className="animate-slideDown">Slide down</div>
<div className="animate-slideUp">Slide up</div>
<div className="animate-scaleIn">Scale in</div>
```

## 🧪 Testing

```bash
# Run linter
npm run lint
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev) and [Radix UI](https://www.radix-ui.com)
- Fonts by [Google Fonts](https://fonts.google.com)
- Built with [Vite](https://vitejs.dev) and [React](https://react.dev)

## 📞 Support

For support, email  bhagwanpoojalive@gmail.com or join our Slack channel.

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**
