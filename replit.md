# UrbanUplink 360 Vision - Project Documentation

## Overview

UrbanUplink 360 Vision is a marketing website for an automotive 360° photography platform. The application showcases a SaaS solution that enables dealerships, auto auctions, fleet managers, and detailing businesses to capture and display vehicles using real 360-degree photography instead of expensive 3D modeling. The website is built as a multi-page React application with a focus on modern design, smooth animations, and responsive layouts to effectively communicate the product's value proposition.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18.3.1 with TypeScript for type safety and better developer experience
- Vite as the build tool and dev server for fast hot module replacement and optimized production builds
- React Router DOM for client-side routing across multiple pages (Home, Features, Use Cases, Pricing, Team, and legal pages)

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens defined in CSS variables
- Component structure follows atomic design principles with reusable UI components in `src/components/ui/`
- Page-level components in `src/components/` (Hero, Features, CTA, etc.) compose the UI components

**State Management & Data Fetching**
- TanStack Query (React Query) v5 for server state management and caching
- React hooks for local component state
- No global state management library (Redux/Zustand) - application is primarily presentational

**Styling Strategy**
- CSS-in-JS approach using Tailwind with HSL color system for theme consistency
- Custom design tokens defined in `src/index.css` including color palettes, gradients, and shadows
- Dark mode support via `next-themes` package with class-based theme switching
- Responsive breakpoints configured in Tailwind config (mobile-first approach)

**Design Patterns**
- Component composition pattern for building complex UIs from simple components
- Custom hooks (e.g., `use-mobile.tsx`, `use-toast.ts`) for reusable logic
- Forwarded refs pattern in UI components for better composability
- Controlled vs uncontrolled components where appropriate (forms use react-hook-form)

### Routing Architecture

**Multi-Page Application Structure**
- Client-side routing with React Router DOM
- Main routes: `/` (home), `/features`, `/use-cases`, `/pricing`, `/team`
- Legal pages: `/privacy-policy`, `/terms-of-service`, `/refund-policy`
- 404 catch-all route for non-existent pages with error logging
- No authentication or protected routes - all content is publicly accessible

### Form Handling

**Form Strategy**
- React Hook Form with Zod resolvers for validation (indicated by @hookform/resolvers dependency)
- Form components built with Radix UI primitives (labels, inputs, selects, etc.)
- Accessible form controls with proper ARIA attributes
- Toast notifications for user feedback on form submissions

### Asset Management

**Static Assets**
- Images stored in `src/assets/` directory (hero-car.jpg, dealership.jpg, 360-tech.jpg, logo images)
- Custom alias `@assets` configured in Vite for clean imports
- External images from Unsplash CDN for team photos and use case imagery
- No image optimization pipeline currently implemented

### Code Quality & Development

**TypeScript Configuration**
- Strict mode disabled for flexibility (noImplicitAny: false)
- Bundler module resolution for modern import patterns
- Path aliases configured (@/ for src directory)
- Separate configs for app and node environments

**Linting & Code Standards**
- ESLint with TypeScript and React plugins
- React Hooks rules enforced
- Unused variables/parameters warnings disabled for development flexibility
- React Refresh plugin for fast refresh during development

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, hover-card, navigation-menu, popover, progress, select, slider, tabs, toast, tooltip, etc.)
- **Shadcn/ui**: Pre-built component system on top of Radix UI
- **Lucide React**: Icon library for consistent iconography throughout the application
- **class-variance-authority**: For managing component variants and conditional styling
- **clsx & tailwind-merge**: Utility functions for conditional class name management

### Form & Validation
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Integration layer for validation schemas
- **Zod** (implied by resolvers): Schema validation library

### UI Enhancements
- **embla-carousel-react**: Carousel/slider functionality
- **cmdk**: Command palette component
- **input-otp**: OTP input component
- **react-day-picker**: Date picker component with date-fns for date manipulation
- **vaul** (drawer component): Mobile-friendly drawer/modal implementation

### Data & State
- **@tanstack/react-query**: Server state management, caching, and data synchronization
- **next-themes**: Theme switching (light/dark mode) support

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer plugin
- **Autoprefixer**: Automatic vendor prefix addition for cross-browser compatibility

### Development Tools
- **Vite**: Build tool and dev server
- **@vitejs/plugin-react-swc**: Fast React refresh using SWC compiler
- **lovable-tagger**: Development component tagging (only in dev mode)
- **TypeScript**: Type checking and enhanced developer experience
- **ESLint**: Code linting with React and TypeScript support

### Third-Party Services
- **Unsplash**: CDN for team member photos and stock imagery
- **Lovable.dev**: Project hosting and deployment platform (indicated by README)

### Notable Absences
- No backend/API integration currently implemented
- No database layer (future implementation may use Drizzle ORM as suggested)
- No authentication/authorization system
- No payment processing integration (despite pricing page)
- No analytics or tracking services configured
- No email service integration for contact forms
- No CMS or content management system