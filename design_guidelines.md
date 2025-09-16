# Design Guidelines for Le Tre Forchette Restaurant Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from elegant restaurant websites like those of upscale trattorias, focusing on warmth, authenticity, and Italian culinary tradition while maintaining modern web standards.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Burgundy: 350 65% 25% (from logo, for headers and accents)
- Warm Orange: 25 85% 55% (from logo, for call-to-action elements)
- Cream White: 45 25% 95% (elegant neutral background)

**Supporting Colors:**
- Dark Charcoal: 220 10% 15% (body text)
- Light Gray: 220 5% 85% (section dividers)
- Soft Beige: 40 15% 90% (card backgrounds)

### B. Typography
**Primary Font**: Playfair Display (Google Fonts) - for headings and elegant emphasis
**Secondary Font**: Source Sans Pro (Google Fonts) - for body text and navigation
**Accent Font**: Dancing Script (Google Fonts) - sparingly for Italian phrases

**Hierarchy:**
- H1: 3rem, Playfair Display, bold
- H2: 2.25rem, Playfair Display, semibold
- H3: 1.5rem, Source Sans Pro, medium
- Body: 1rem, Source Sans Pro, regular

### C. Layout System
**Spacing Units**: Tailwind spacing of 4, 8, 12, and 16 (p-4, m-8, gap-12, py-16)
**Container**: Max-width of 1200px with responsive padding
**Grid**: CSS Grid for menu items, Flexbox for navigation and cards

### D. Component Library

**Navigation:**
- Fixed header with transparent-to-solid transition on scroll
- Horizontal navigation with smooth scrolling anchors
- "Prenota ora" button with warm orange background and cream text
- Mobile hamburger menu with slide-in animation

**Hero Section:**
- Full viewport height with restaurant ambiance background image
- Centered logo and tagline overlay
- Subtle dark overlay (40% opacity) for text readability
- Call-to-action button with outline variant on blurred background

**Content Sections:**
- Alternating background colors (cream and soft beige)
- Generous padding (py-16) for breathing room
- Card-based layout for reviews and menu items
- Subtle drop shadows for depth

**Interactive Elements:**
- Smooth scroll behavior for all anchor links
- Hover effects on navigation items
- Gentle fade-in animations on scroll (IntersectionObserver)

### E. Animations
**Minimal and Purposeful:**
- Smooth scrolling navigation (CSS scroll-behavior)
- Subtle fade-in effects for content sections
- Navigation background transition on scroll
- No distracting hover animations

## Images Section

**Hero Image**: Large full-width hero image showcasing the restaurant's warm interior or signature dishes. Should capture the intimate trattoria atmosphere with warm lighting and traditional Italian elements.

**About Section**: Medium-sized image of the restaurant exterior or dining room to establish location and ambiance.

**Menu Section**: High-quality food photography of signature dishes like Chianina beef and antipasti platters. Images should be consistent in style with warm, appetizing lighting.

**Background Elements**: Subtle texture overlays or patterns inspired by Italian design elements, used sparingly to add visual interest without overwhelming content.

## Special Considerations

**Italian Authenticity**: Incorporate subtle Italian design elements like serif typography for elegance and warm color temperatures that evoke Italian countryside aesthetics.

**Mobile-First**: Ensure all elements scale beautifully on mobile devices, with special attention to the Google Maps integration and contact information accessibility.

**Performance**: Optimize images for web delivery and implement lazy loading for below-the-fold content to maintain fast loading times.