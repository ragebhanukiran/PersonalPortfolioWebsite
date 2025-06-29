# Portfolio Website for Rage BhanuKiran

## Overview

This is a modern, responsive portfolio website built for Rage BhanuKiran, a Computer Science student at VIT-AP. The application showcases his projects, skills, education, work experience, and achievements in a professionally designed interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with custom GitHub-inspired dark theme
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth page transitions and scroll animations

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Build System**: ESBuild for production bundling

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured via Neon serverless)
- **Schema**: User authentication system (though not actively used in current implementation)
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Key Components

### UI Components
- Comprehensive component library based on Radix UI primitives
- Custom styling with CSS variables for consistent theming
- Responsive design patterns with mobile-first approach
- Accessible components following ARIA guidelines

### Portfolio Sections
- **Hero Section**: Introduction with call-to-action buttons
- **About**: Personal background and interests
- **Experience**: Current DRDO internship details
- **Projects**: Featured projects with technology badges and links
- **Skills**: Technical skills with icons
- **Education**: Academic background with GPA
- **Certifications**: IBM AI certification
- **Achievements**: LeetCode and HackerRank accomplishments
- **Contact**: Contact form and social media links

### Navigation
- Fixed navbar with smooth scrolling navigation
- Mobile-responsive hamburger menu
- Active section highlighting

## Data Flow

1. **Static Content**: Portfolio content is hardcoded in React components for simplicity and performance
2. **Contact Form**: Basic form validation with toast notifications (no backend processing currently)
3. **Navigation**: Client-side smooth scrolling between sections
4. **Responsive Design**: CSS breakpoints handle different screen sizes

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI components, Tailwind CSS
- **Development Tools**: Vite, TypeScript, ESBuild
- **Database**: Drizzle ORM, Neon PostgreSQL driver
- **Styling**: Class Variance Authority, CLSX for conditional classes
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation

### Development Tools
- **Runtime**: TSX for TypeScript execution
- **Linting**: TypeScript compiler for type checking
- **Building**: Vite for client build, ESBuild for server build
- **Database**: Drizzle Kit for schema management

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend development
- Express server with middleware for API routes
- TSX for running TypeScript server code directly
- Replit-specific plugins for development environment

### Production Build
- Vite builds static assets to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Express serves static files and API routes
- PostgreSQL connection via environment variables

### Environment Configuration
- Development uses in-memory storage
- Production connects to PostgreSQL via `DATABASE_URL`
- Separate build scripts for client and server
- Environment-specific configurations

The application follows a modern full-stack architecture with clear separation between frontend presentation and backend API structure, though currently operates primarily as a static portfolio site with minimal backend functionality.

## Changelog
```
Changelog:
- June 29, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```