# Overview

This is a restaurant website for "Le Tre Forchette," an Italian trattoria located in Porto San Giorgio, Italy. The application is a single-page website built with React and TypeScript that showcases the restaurant's story, menu, reviews, and contact information. It features a modern, elegant design with Italian culinary aesthetics, including warm colors (burgundy, orange, cream) and traditional typography. The site is fully responsive and includes sections for hero/landing, about us, customer reviews, menu display, and contact information with reservation capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React 18 with TypeScript and Vite as the build tool. The application follows a component-based architecture with a single-page application (SPA) pattern using smooth scrolling navigation between sections rather than routing.

**Key Design Patterns:**
- **Component Composition**: Each major section (Hero, About, Reviews, Menu, Contact, Footer) is built as a separate reusable component
- **Design System**: Uses shadcn/ui component library with Radix UI primitives for consistent, accessible UI components
- **Responsive Design**: Tailwind CSS with mobile-first approach and responsive breakpoints
- **State Management**: Uses React hooks for local state management and TanStack Query for server state (though minimal server interaction in current implementation)

**Styling Approach:**
- **CSS Framework**: Tailwind CSS with custom CSS variables for theming
- **Color System**: HSL color values stored in CSS variables for dynamic theming
- **Typography**: Google Fonts integration (Playfair Display, Source Sans Pro, Dancing Script) for Italian restaurant aesthetic
- **Component Library**: shadcn/ui components with custom theming and consistent design tokens

## Backend Architecture
The backend uses Express.js with TypeScript in a minimal configuration. Currently implements a basic server structure with:

**Storage Layer:**
- **In-Memory Storage**: Uses a `MemStorage` class implementing `IStorage` interface for user management
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema definitions ready for database integration
- **Scalable Design**: Storage interface allows easy switching from in-memory to database implementation

**API Structure:**
- **RESTful Design**: Express routes configured for `/api` prefix
- **Type Safety**: Shared TypeScript schemas between frontend and backend using Drizzle-Zod integration
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
**Current Implementation:**
- **In-Memory Storage**: Temporary storage for development and prototyping
- **User Management**: Basic user schema with username/password fields using UUID primary keys

**Production Ready:**
- **PostgreSQL Integration**: Drizzle ORM configured for PostgreSQL with migrations support
- **Schema Management**: Type-safe database schemas with automatic TypeScript type generation
- **Migration System**: Drizzle Kit configured for database schema versioning

## External Dependencies

**Core Framework Dependencies:**
- **React Ecosystem**: React 18, TypeScript, Vite for modern frontend development
- **UI Components**: Radix UI primitives with shadcn/ui component system for accessibility and consistency
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **State Management**: TanStack React Query for server state management and caching

**Backend Dependencies:**
- **Server Framework**: Express.js with TypeScript for type-safe backend development
- **Database ORM**: Drizzle ORM with PostgreSQL adapter for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Validation**: Drizzle-Zod integration for runtime type validation

**Development Tools:**
- **Build System**: Vite with React plugin for fast development and optimized builds
- **Database Tooling**: Drizzle Kit for migrations and schema management
- **Code Quality**: TypeScript strict mode with comprehensive type checking

**Third-Party Services:**
- **Database Provider**: Neon Database (serverless PostgreSQL) for production deployment
- **Font Loading**: Google Fonts CDN for typography (Playfair Display, Source Sans Pro, Dancing Script)
- **Development Platform**: Replit integration for cloud-based development environment

**Asset Management:**
- **Images**: Local asset storage in `attached_assets` directory with Vite alias configuration
- **Generated Content**: AI-generated images for menu items and restaurant ambiance stored locally