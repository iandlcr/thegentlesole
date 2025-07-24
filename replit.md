# The Gentle Sole - Professional Footcare Nursing Services

## Overview

This is a full-stack web application for The Gentle Sole, a professional footcare nursing service in Windsor, Ontario. The application serves as a marketing website with contact form functionality, built using modern web technologies with a focus on SEO optimization and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 24, 2025)

- **Brand Identity Implementation**: Updated entire website to use The Gentle Sole's exact brand colors from their logo:
  - Primary cream background: #F8F2E8
  - Dark blue text: #1C2E3B  
  - Coral pink accent: #ED7084
  - Soft green: #A2CCB8
  - Soft peach: #F8B6AB
  - Soft grey-blue: #C8D7DC
- **Logo Integration**: Added the official The Gentle Sole logo prominently throughout the site (navigation, hero section, footer)
- **Component Updates**: Applied brand colors to all sections including navigation, hero, about, services, pricing, contact, and footer
- **About Section Update**: Updated with personal introduction from Mary Rose Dula using text from provided image, with matching background color (#B5907A)
- **Services Section Overhaul**: Replaced with exact 7 services: Full Assessment, Nail Trimming & Filing, Corn & Callus reduction, Diabetic foot care, Moisturizing and gentle massage, Temporary Ingrown Removal, and Referrals to podiatrist
- **Hero Section Redesign**: Replaced brain image with company logo (rounded edges), removed top logo, added brand cream background to banner
- **Contact Form Update**: Implemented Netlify Forms integration for seamless form handling without backend dependencies
- **Navigation Enhancement**: Updated to solid cream background, removed logo clutter, improved mobile and desktop styling
- **Organic Background**: Created subtle organic shapes background using brand colors to match logo aesthetic

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful API endpoints

### Single Page Application (SPA)
The application is structured as a single-page application with sections for:
- Hero/Landing section
- About section
- Services section
- Pricing section
- Contact form section
- Footer

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing area with call-to-action buttons
- **About Section**: Professional background and credentials
- **Services Section**: Detailed service offerings with icons
- **Pricing Section**: Transparent pricing cards
- **Contact Section**: Contact form with validation
- **Footer**: Business information and quick links

### Backend Components
- **Contact API**: Handles form submissions (`/api/contact`)
- **Storage Layer**: Abstracted storage interface with memory implementation
- **Route Registration**: Centralized route management
- **Error Handling**: Global error handling middleware

### UI Components
Comprehensive set of reusable UI components from shadcn/ui including:
- Forms, inputs, buttons, cards
- Navigation menus, dialogs, tooltips
- Layout components (accordion, tabs, carousel)
- Feedback components (toast notifications)

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. React Hook Form validates data using Zod schema
3. TanStack Query sends POST request to `/api/contact`
4. Backend validates data again using shared Zod schema
5. Data is stored in database via storage abstraction layer
6. Success/error response sent back to frontend
7. Toast notification shows result to user

### SEO and Analytics
1. Structured data (Schema.org) injected for local business SEO
2. Google Analytics integration for tracking page views and events
3. Meta tags for social media sharing (Open Graph)
4. Semantic HTML structure for accessibility and SEO

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL database
- **Drizzle ORM**: Type-safe database operations
- **Connection**: Uses `@neondatabase/serverless` driver

### UI and Styling
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Google Fonts**: Inter font family

### Analytics and Tracking
- **Google Analytics**: Web analytics (requires `VITE_GA_MEASUREMENT_ID`)
- **TanStack Query**: Server state management and caching

### Development Tools
- **Vite**: Build tool with HMR and optimizations
- **TypeScript**: Type safety across the application
- **ESBuild**: Fast JavaScript bundling for production
- **Replit Integration**: Development environment support

## Deployment Strategy

### Development
- **Dev Server**: Vite development server with HMR
- **Backend**: tsx for running TypeScript server directly
- **Database**: Drizzle Kit for schema management and migrations

### Production
- **Build Process**: 
  1. Vite builds frontend to `dist/public`
  2. ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Served by Express in production
- **Database**: PostgreSQL connection via environment variable
- **Environment Variables**: 
  - `DATABASE_URL`: PostgreSQL connection string
  - `VITE_GA_MEASUREMENT_ID`: Google Analytics tracking ID

### Database Schema
- **Users Table**: Basic user management (currently unused)
- **Contact Submissions Table**: Stores form submissions with:
  - Personal information (name, email, phone)
  - Service type selection
  - Message content
  - Timestamp

The application is designed for easy deployment on platforms like Replit, Vercel, or similar services that support Node.js applications with PostgreSQL databases.