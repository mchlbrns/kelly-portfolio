## 2025-06-09 - Framer Motion Lazy Loading
**Learning:** We replaced `motion` with `m` from framer-motion and used Next.js `dynamic` imports. The bundle size went from `151 kB` to `118 kB` for the first load JS on the main page.
**Action:** Always consider `m` instead of `motion` with framer-motion to reduce bundle size, especially in portfolios with heavy animations. Also `optimizePackageImports` in `next.config.ts` had a small positive effect.
