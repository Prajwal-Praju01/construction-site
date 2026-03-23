# Khushi Construction & Land Developers — Next.js 14 Website

A production-ready, full-featured construction company website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Shadcn UI.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Images | Next.js Image Optimization |
| Deployment | Vercel |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
construction-site/
├── app/                        # Next.js App Router pages
│   ├── about/
│   │   ├── page.tsx            # About page (server)
│   │   └── AboutContent.tsx   # About content (client)
│   ├── contact/
│   │   └── page.tsx
│   ├── process/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services page (server)
│   │   └── ServicesContent.tsx # Services content (client)
│   ├── testimonials/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx              # Root layout with Navbar/Footer
│   └── page.tsx                # Home page
│
├── components/
│   ├── sections/               # Full-width page sections
│   │   ├── Navbar.tsx          # Sticky navbar with scroll detection
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx     # Full-screen hero with animations
│   │   ├── StatsSection.tsx    # Animated count-up stats
│   │   ├── ServicesSection.tsx # Services grid
│   │   ├── ProjectsGrid.tsx    # Projects with modal
│   │   ├── ProcessTimeline.tsx # 9-step alternating timeline
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── ContactForm.tsx     # Validated contact form
│   │
│   └── ui/                     # Reusable UI primitives
│       ├── Button.tsx          # Multi-variant button
│       ├── SectionHeader.tsx   # Consistent section headers
│       ├── ServiceCard.tsx
│       ├── ProjectCard.tsx
│       ├── ProjectModal.tsx
│       ├── TestimonialCard.tsx
│       └── WhatsAppButton.tsx  # Floating WhatsApp CTA
│
├── hooks/
│   ├── useCountUp.ts           # Animated number counter
│   └── useScrollAnimation.ts  # Scroll-triggered visibility
│
├── lib/
│   ├── data.ts                 # All site content (services, projects, etc.)
│   └── utils.ts                # cn() and helpers
│
├── types/
│   └── index.ts                # TypeScript interfaces
│
├── public/
│   └── images/                 # Static assets
│
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Customization

### Update company info
Edit `lib/data.ts` to change:
- Company stats (years, projects, clients)
- Services (title, description, images, features)
- Projects portfolio
- Team testimonials
- Process steps

### Update branding
Edit `tailwind.config.ts` colors:
```ts
primary: "#0B3C5D",  // Deep Construction Blue
accent:  "#FF8C00",  // Construction Orange
```

### Update contact info
- Phone: Search for `9845447449` across components
- Email: Search for `info@khushiconstruction.com`
- Address: Search for `123 Construction Ave`
- WhatsApp: Update `phoneNumber` prop in `app/layout.tsx`

### Update Google Maps
Replace the `src` in the iframe inside `app/contact/page.tsx` with your own Google Maps embed URL.

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com).

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky navbar with scroll detection
- ✅ Smooth Framer Motion animations throughout
- ✅ Animated count-up statistics
- ✅ Project modal with details
- ✅ 9-step alternating process timeline
- ✅ Contact form with validation
- ✅ Floating WhatsApp button with pulse animation
- ✅ SEO meta tags on every page
- ✅ Next.js Image optimization
- ✅ Code splitting via App Router
- ✅ TypeScript throughout
- ✅ Google Maps embed on contact page
