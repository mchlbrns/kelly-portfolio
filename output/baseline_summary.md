# Baseline Audit Summary - Kelly Portfolio

This document outlines the starting state of the `mchlbrns/kelly-portfolio` Next.js application prior to audit and remediation.

## 1. Project Overview
- **Framework**: Next.js 15.x
- **React version**: 19.x
- **Package Manager**: pnpm (v10.33.3) and npm lockfiles present
- **Deployment Platform**: Vercel (https://michaelbriones-dev.vercel.app/)

## 2. Identified Issues & Gaps

### A. Missing `vercel.json` Configuration
- **Issue**: The project lacked a root-level `vercel.json` file.
- **Impact**: Security headers (like HSTS, X-Frame-Options, X-Content-Type-Options) and specific static caching policies were not explicitly defined, relying only on default Vercel edge rules.

### B. Implicit Robots Metadata
- **Issue**: Robots metadata was handled implicitly (only through `robots.txt`), missing explicit metadata declarations inside the Next.js `src/app/layout.tsx` metadata configuration.
- **Impact**: Reduced SEO robustness and control over crawler instructions in the Next.js App Router context.

### C. Missing `browserslist` Config
- **Issue**: No `.browserslistrc` or `browserslist` block in `package.json` was defined.
- **Impact**: Build processes could default to overly broad or outdated target configurations, potentially bloating built assets or breaking compatibility in modern environments.

### D. Tracked Server Log File (`server.log`)
- **Issue**: `server.log` was actively tracked in the Git repository.
- **Impact**: Development logs were committed to source control, causing unnecessary file changes and git clutter.

### E. Unreliable Lighthouse CI Configuration
- **Issue**: `.lighthouserc.json` was configured to use `pnpm run start` and audit `http://localhost:3000/` during CI processes.
- **Impact**: Starting a dev/production server on CI virtual machines is historically flaky, resource-constrained, and prone to timeouts or port conflicts, leading to unreliable performance score baselines.

### F. Vercel Analytics and Speed Insights Integration
- **Issue**: Vercel's real-time Analytics and Speed Insights were not integrated or instrumented in the Next.js code.
- **Impact**: Missing real-user monitoring (RUM) metrics for page views, speed index, and core web vitals.
