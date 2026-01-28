# Digital Product Leader - Next.js Migration

Complete migration of https://digitalproductleader.com/ from Hostinger proprietary builder to Next.js 15 + shadcn/ui v2.

## Live Demo

- **Next.js Version:** Coming soon (deploying to Vercel)
- **Original Site:** https://digitalproductleader.com/
- **GitHub Repo:** https://github.com/nicozefrench/digitalproductleader

## Tech Stack

- **Next.js 16.1.6** (latest) with App Router and Turbopack
- **React 19.2.3**
- **TypeScript 5**
- **Tailwind CSS v4** with complete design system
- **shadcn/ui v2** (New York style)
- **Lucide Icons**
- **next-mdx-remote** for blog
- **gray-matter** for frontmatter parsing

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
digitalproductleader-nextjs/
├── app/
│   ├── (marketing)/              # Marketing pages with header/footer
│   │   ├── page.tsx              # Homepage (18 sections)
│   │   ├── about/                # About Nicolas Limare
│   │   ├── contact/              # Contact page with form
│   │   ├── thought-leadership/   # Thought leadership
│   │   └── layout.tsx            # Marketing layout
│   ├── blog/
│   │   ├── page.tsx              # Blog index
│   │   └── [slug]/page.tsx       # Blog detail (SSG)
│   ├── globals.css               # Tailwind v4 config + design system
│   └── layout.tsx                # Root layout with fonts
│
├── components/
│   ├── ui/                       # shadcn/ui v2 components (8 total)
│   ├── layout/                   # Header, Footer, MobileNav
│   └── sections/                 # 14 homepage sections
│
├── content/
│   └── blog/                     # 4 blog articles (MDX)
│
├── lib/
│   ├── blog.ts                   # Blog utilities
│   └── utils.ts                  # cn() utility
│
└── public/
    └── assets/                   # 171 migrated assets
```

## Features

### Homepage (18 Sections)
- **Hero** - Gradient background with CTAs
- **Blog Carousel** - 4 articles with pagination
- **Industries Nav** - Media & Telco, Smart Home, Digital Pharma, Cross-industry
- **Services** - 7 service offerings grid
- **Case Studies** - Wiztivi, LG, Technicolor, Deltadore, ONSEN, Univadis
- **Cross-Industry** - Experience timeline (Axance, Opodo, Sapient, IBM)
- **Quotes** - Inspirational quotes (Malcolm X)
- **Contact** - Form with social links

### Blog System
- Blog index with article grid
- Dynamic routing with SSG
- 4 articles with frontmatter metadata
- Categories, author info, read time

### Design System
- 29 semantic colors with CSS variables
- Complete typography scale (H1-H6, body sizes)
- 4px-based spacing system
- Border radius scale (0-20px, full)
- Shadow elevation system
- Responsive breakpoints (760px, 920px, 1224px)

### Components (shadcn/ui v2)
- Button, Card, Badge
- Sheet (mobile navigation)
- Input, Textarea, Label
- Separator

## Migration Status

### Completed ✅
- Complete design system extraction
- Next.js 15 + App Router setup
- Tailwind CSS v4 configuration
- shadcn/ui v2 components
- Google Fonts (DM Sans, Noto Serif)
- Header/Footer layout
- Homepage (18 sections)
- Blog system with SSG
- Additional pages (About, Contact, Thought Leadership)
- 171 assets migrated
- Responsive design
- TypeScript types
- Zero build errors

### Pending ⏳
- Full article content migration
- Images in case study sections
- YouTube video embeds
- Image carousels
- Contact form backend
- Analytics integration
- Performance optimization
- Visual pixel comparison testing

## Design Tokens

### Color Palette
```css
/* Primary Brand */
--color-primary-50: #ebe4ff
--color-primary-600: #673de6
--color-primary-900: #1F1346

/* Semantic */
--color-danger: #fc5185
--color-warning: #ffcd35
--color-success: #00b090

/* Neutrals */
--color-dark: #1d1e20
--color-gray: #727586
--color-light: #fff

/* Accent */
--color-azure: #357df9
```

### Typography Scale
```css
/* Headings */
H1: 56px → 32px (mobile)
H2: 48px → 24px (mobile)
H3: 32px → 20px (mobile)

/* Body */
Large: 18px → 16px (mobile)
Regular: 16px → 14px (mobile)
Small: 14px → 12px (mobile)
```

## Deployment to Vercel

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel --prod

# Your site will be live at: https://digitalproductleader.vercel.app
```

## Performance Targets

- **Lighthouse Score:** ≥90
- **LCP:** <2.5s
- **FID:** <100ms
- **CLS:** <0.1

## Contact

- **Email:** nicolas@digitalproductleader.com
- **Phone:** +33 6 74 12 05 91
- **LinkedIn:** https://www.linkedin.com/in/nlimare/
- **Malt:** https://www.malt.fr/profile/nicolaslimare

## License

© 2024 Digital Product Leader. All rights reserved.
