# Imperial Form - Toronto Concrete Contractor Website

A modern, high-performance landing page for Imperial Form, a Toronto-based concrete contractor specializing in slabs, footings, foundations, and decorative finishes.

## Features

- **Modern Tech Stack**: Built with Astro, React, TypeScript, and Tailwind CSS
- **Shadcn UI Components**: Custom-built UI components for consistency
- **Quick Estimator**: Interactive concrete cost calculator based on 2025 GTA pricing
- **SEO Optimized**: Complete with structured data, meta tags, and semantic HTML
- **OBC 2024 Compliant**: Content aligned with Ontario Building Code 2024 standards
- **Responsive Design**: Mobile-first approach with sticky CTAs
- **Performance Focused**: Optimized for Core Web Vitals

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
imperial-form/
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Permits.tsx
│   │   ├── TechnicalSpecs.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   └── QuickEstimator.tsx
│   ├── layouts/         # Astro layouts
│   ├── pages/           # Page routes
│   ├── styles/          # Global styles
│   └── lib/             # Utilities
├── public/              # Static assets
└── dist/                # Production build

```

## Key Components

### Quick Estimator
- Real-time concrete cost calculation
- Based on 2025 GTA ready-mix prices (CBM)
- Factors in season, access, finish type
- Shows transparent material costs and installed ranges

### Services Grid
- 9 core concrete services
- Icon-based visual hierarchy
- Expandable details for each service

### Process Section
- 8-step visual workflow
- Ontario One Call integration
- Permit and inspection coordination

### Technical Specifications
- Ontario-specific concrete specs
- Winter care guidelines
- Municipal compliance details

## SEO Features

- Structured data (LocalBusiness, FAQPage)
- Optimized meta tags
- Semantic HTML structure
- Fast page load times
- Mobile-responsive design

## Compliance & Standards

- Ontario Building Code 2024 compliant content
- WSIB coverage references
- Toronto noise by-law adherence
- ROW permit guidance
- Municipal specifications

## Performance

- Lighthouse Score targets:
  - Performance: 95+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

## Deployment

The site is static and can be deployed to any static hosting service:

```bash
# Build for production
npm run build

# Deploy the dist/ folder to your hosting service
```

Recommended hosting options:
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront

## Environment Variables

No environment variables required for basic setup. For production, you may want to add:

- Analytics tracking codes
- Form submission endpoints
- API keys for third-party services

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - All rights reserved

## Contact

For questions about this project, contact the development team.