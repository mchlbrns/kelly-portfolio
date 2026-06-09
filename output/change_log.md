# Change Log - Audit and Remediation

This log documents all modifications and enhancements made to resolve the identified issues in the `mchlbrns/kelly-portfolio` Next.js application.

## 1. Security & Caching headers (`vercel.json`)
- **Action**: Created a root-level [vercel.json](file:///C:/Users/Geloo/Downloads/kelly-porfolio/vercel.json) configuration.
- **Added Headers**:
  - `X-DNS-Prefetch-Control`: `on`
  - `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
  - `X-Frame-Options`: `SAMEORIGIN`
  - `X-Content-Type-Options`: `nosniff`
  - `Referrer-Policy`: `strict-origin-when-cross-origin`
  - `Permissions-Policy`: Restricts browser APIs (`camera=(), microphone=(), geolocation=(), interest-cohort=()`)
  - `Cache-Control` for static assets (`/_next/static/(.*)`): `public, max-age=31536000, immutable`
  - `Cache-Control` for media assets (`png`, `jpg`, `jpeg`, `gif`, `svg`, `ico`, `pdf`): `public, max-age=86400, must-revalidate`

## 2. Robots Metadata (`src/app/layout.tsx`)
- **Action**: Modified [src/app/layout.tsx](file:///C:/Users/Geloo/Downloads/kelly-porfolio/src/app/layout.tsx) to declare explicit, safe robots instructions in the root Next.js `metadata` export:
  ```typescript
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
  ```

## 3. Browsers Target List (`.browserslistrc`)
- **Action**: Created [.browserslistrc](file:///C:/Users/Geloo/Downloads/kelly-porfolio/.browserslistrc) with a conservative modern profile to ensure clean builds and legacy exclusion (e.g. omitting Internet Explorer 11).

## 4. Server Logs Clean Up
- **Action**: Untracked the existing `server.log` file from Git using `git rm --cached server.log`.
- **Action**: Added `server.log` to [.gitignore](file:///C:/Users/Geloo/Downloads/kelly-porfolio/.gitignore) under a dedicated `# logs` section to prevent future tracking.

## 5. Stable Lighthouse CI Configuration (`.lighthouserc.json`)
- **Action**: Modified [.lighthouserc.json](file:///C:/Users/Geloo/Downloads/kelly-porfolio/.lighthouserc.json) to audit the deployed URL (`https://kelly-portfolio-delta.vercel.app/`) directly. This resolves flakiness related to spawning the server locally in resource-constrained CI environments.

## 6. Vercel Analytics and Speed Insights Integration
- **Action**: Installed `@vercel/analytics` and `@vercel/speed-insights` packages.
- **Action**: Modified [src/app/layout.tsx](file:///C:/Users/Geloo/Downloads/kelly-porfolio/src/app/layout.tsx) to import `<Analytics />` and `<SpeedInsights />` and render them in the root layout body.

## 7. Next.js Workspace Warning Fix (`next.config.ts`)
- **Action**: Configured `outputFileTracingRoot: process.cwd()` at the root of [next.config.ts](file:///C:/Users/Geloo/Downloads/kelly-porfolio/next.config.ts) to resolve workspace trace warnings caused by external workspace files.
