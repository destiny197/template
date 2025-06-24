# BizzBuyNow - E-commerce Platform

## Overview

BizzBuyNow is a modern e-commerce platform designed for vendors and dropshippers. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a clean, dark-themed UI with modern glass-morphism design elements.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for server state management
- **Routing**: React Router for client-side navigation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for API routes
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Shared schema definitions between client and server

## Key Components

### Frontend Structure
```
client/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/        # Base UI components from shadcn/ui
│   │   ├── features/  # Feature-specific components
│   │   └── pricing/   # Pricing-related components
│   ├── pages/         # Page components
│   ├── config/        # Configuration files
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utility functions
```

### Backend Structure
```
server/
├── index.ts           # Main server entry point
├── routes.ts          # API route definitions
├── storage.ts         # Data access layer with in-memory storage
└── vite.ts           # Vite development server integration
```

### Shared Resources
```
shared/
└── schema.ts          # Database schema definitions
```

## Data Flow

1. **Client Requests**: React frontend makes API calls through TanStack Query
2. **API Layer**: Express.js server handles requests at `/api/*` endpoints
3. **Storage Layer**: Currently uses in-memory storage (MemStorage class) for development
4. **Database**: Schema defined for PostgreSQL with user authentication structure
5. **Response**: JSON responses sent back to client with proper error handling

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Framer Motion**: Animation library for React

### Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Express Session**: Session management with PostgreSQL storage

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the entire stack
- **Drizzle Kit**: Database migrations and introspection

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Port Configuration**: Internal port 5000, external port 80
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Served by Express in production
- **Deployment Target**: Autoscale deployment on Replit

### Build Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 24, 2025. Initial setup