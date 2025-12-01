# Rakestar Group - Portfolio Website

A modern, responsive portfolio website showcasing the comprehensive services offered by **Rakestar Group**, a multi-sector enterprise delivering excellence across various industries.

## 🌟 About Rakestar Group

Rakestar Group is a diversified company that seamlessly integrates multiple business sectors to provide comprehensive solutions:

- **Logistics & Supply Chain Management** - Efficient transportation and supply chain solutions
- **Financial Consulting** - Strategic financial advisory and consulting services
- **Legal Counsel** - Robust legal services and corporate counsel
- **Information & Communication Technology (ICT)** - Cutting-edge technology solutions
- **Agriculture** - Innovative agricultural practices and solutions
- **Mining Operations** - Responsible and sustainable mining operations
- **Translation Services** - Professional language translation and localization

## 🚀 Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Service Pages** - Dedicated pages for each business sector
- **Interactive Components** - Engaging user interface with modern React components
- **Fast Performance** - Built with Vite for lightning-fast development and production builds
- **Type-Safe** - Full TypeScript support for robust code quality

## 🛠️ Technologies Used

This project is built with modern web technologies:

- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[React 18](https://react.dev/)** - Modern React with hooks and concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, accessible UI components
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons
- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** or **bun** - Package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd fluid-brand-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
fluid-brand-showcase/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
├── src/
│   ├── assets/            # Images and media files
│   │   ├── rakestar-logo.png
│   │   ├── logistics-hero.jpg
│   │   ├── financial-hero.jpg
│   │   ├── legal-hero.jpg
│   │   ├── ict-hero.jpg
│   │   ├── agriculture-hero.jpg
│   │   ├── mining-hero.jpg
│   │   └── translation-hero.jpg
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Page components
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   └── services/     # Service-specific pages
│   │       ├── LogisticsPage.tsx
│   │       ├── FinancialPage.tsx
│   │       ├── LegalPage.tsx
│   │       ├── ICTPage.tsx
│   │       ├── AgriculturePage.tsx
│   │       ├── MiningPage.tsx
│   │       └── TranslationPage.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🎨 Customization

### Adding New Services

1. Create a new page component in `src/pages/services/`
2. Add the route in `src/App.tsx`
3. Update the services section in `src/components/Services.tsx`
4. Add corresponding hero image in `src/assets/`

### Styling

- Global styles: `src/index.css`
- Component styles: Use Tailwind CSS utility classes
- Theme configuration: `tailwind.config.ts`

### Components

All UI components are built with shadcn/ui and can be customized in `src/components/ui/`

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

This project can be deployed to various platforms:

- **Vercel** - Recommended for React applications
- **Netlify** - Simple deployment with continuous integration
- **GitHub Pages** - Free hosting for static sites
- **AWS S3 + CloudFront** - Scalable cloud hosting
- **Any static hosting service**

## 🔧 Configuration Files

- `vite.config.ts` - Vite bundler configuration
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.ts` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins
- `eslint.config.js` - ESLint rules
- `components.json` - shadcn/ui configuration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Rakestar Group.

## 📞 Contact

For inquiries about Rakestar Group services, please visit our website or contact us through the contact form.

---

**Built with ❤️ for Rakestar Group**
