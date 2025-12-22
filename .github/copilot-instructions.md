# Copilot Instructions for Next.js Blog

## Project Overview

This is a **Next.js 16.1.0** blog application using TypeScript, React 19, and Tailwind CSS 4 with the React Compiler enabled. It follows the App Router pattern with a minimal starter template structure. The project uses strict TypeScript configuration and modern React patterns.

## Architecture & Key Patterns

### App Structure
- **`src/app/`** - App Router directory with Next.js special files (layout, page)
- **`src/app/layout.tsx`** - Root layout with Google fonts (Geist Sans/Mono) and metadata
- **`src/app/page.tsx`** - Home page component
- **`src/app/globals.css`** - Global Tailwind CSS styles
- **Path alias**: Use `@/*` to import from `src/` (e.g., `import { foo } from "@/components/foo"`)

### React & Rendering
- **React 19** with experimental **React Compiler** enabled in `next.config.ts`
- Use Server Components by default; add `"use client"` only when needed for interactivity
- Metadata: Define via `export const metadata: Metadata` in layout/page files
- Image optimization: Always use `next/image` Image component for static/dynamic images

### TypeScript Configuration
- **Strict mode enabled** - all types must be explicit, no implicit `any`
- **ES2017 target** with strict null checks
- `jsx: "react-jsx"` - new JSX transform, no need to import React
- All components should have explicit return type annotations

## Development Workflows

### Scripts
- **`npm run dev`** - Start dev server on localhost:3000 with fast refresh
- **`npm run build`** - Production build, creates `.next` directory
- **`npm start`** - Run production server
- **`npm run lint`** - Run ESLint (uses Next.js core-web-vitals and TypeScript config)

### Common Tasks
- **Edit pages**: Modify `.tsx` files in `src/app/` - Next.js auto-refreshes
- **Style components**: Use Tailwind utility classes directly in className
- **Add metadata**: Export `metadata` object in layout/page components
- **Create API routes**: Add `route.ts` files in `app/` directories (API route example: `app/api/posts/route.ts`)

## Code Conventions

### File Naming & Imports
- Use `.tsx` for components, `.ts` for utilities
- Prefer named exports for components; use default exports for page/layout files
- Always use path alias `@/` for relative imports within `src/`

### Component Patterns
```tsx
// Server Component (default)
export default function MyComponent() {
  return <div>Content</div>;
}

// Client Component (when needed)
"use client";
export default function Interactive() {
  const [state, setState] = useState();
  return <div>{state}</div>;
}
```

### Styling
- All Tailwind configuration is default; extend in `tailwind.config.js` if needed
- Use CSS modules (`.module.css`) only for non-Tailwind scoped styles
- Global styles go in `src/app/globals.css`
- Dark mode: Use `dark:` prefix for dark theme classes (configured in Tailwind)

## Dependencies & External Integrations

### Core Stack
- **Next.js 16.1.0** - Framework (App Router, Server Components, Image optimization)
- **React 19.2.3** - UI library with new features and better performance
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling with PostCSS
- **ESLint 9** with Next.js config - Linting for code quality

### Build & Development
- **PostCSS** - CSS processing for Tailwind
- **Babel React Compiler** - Automatic component memoization
- No database or API client installed; add as needed (e.g., Prisma, Supabase client)

## Debugging & Troubleshooting

- **Fast refresh not working?** Check for syntax errors; console shows issues
- **Type errors?** Run `npm run build` to see full TypeScript output
- **Tailwind classes not applied?** Ensure the file is in `src/app/` or update `tailwind.config.js` content paths
- **ESLint warnings?** Run `npm run lint` to see and fix issues
