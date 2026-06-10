# Follow-up Baseline Audit - Kelly Portfolio

This report details the repository state and source configuration status before the follow-up optimization pass.

## 1. File Verification (Main Branch)

We have verified that the following key files exist and reviewed their contents:

- **[vercel.json](file:///C:/Users/Geloo/Downloads/kelly-porfolio/vercel.json)**:
  - *Status*: Exist.
  - *Starting Content*: Contained security headers with `X-Frame-Options` set to `SAMEORIGIN`. Lacked any custom `Cache-Control` policy for general routes `/(.*)`, resulting in the default Next.js/Vercel caching behavior for HTML pages.
- **[src/app/layout.tsx](file:///C:/Users/Geloo/Downloads/kelly-porfolio/src/app/layout.tsx)**:
  - *Status*: Exist.
  - *Starting Content*: Correctly configured with custom Google Fonts, canonical alternate meta tags, explicit robots metadata instructions, and imports/components for `@vercel/analytics` and `@vercel/speed-insights`.
- **[package.json](file:///C:/Users/Geloo/Downloads/kelly-porfolio/package.json)**:
  - *Status*: Exist.
  - *Starting Content*: Dependency array correctly contained `next`, `react`, `react-dom`, `@vercel/analytics` and `@vercel/speed-insights`.
- **[.gitignore](file:///C:/Users/Geloo/Downloads/kelly-porfolio/.gitignore)**:
  - *Status*: Exist.
  - *Starting Content*: Correctly configured to ignore `server.log` under the `# logs` block.
- **[.lighthouserc.json](file:///C:/Users/Geloo/Downloads/kelly-porfolio/.lighthouserc.json)**:
  - *Status*: Exist.
  - *Starting Content*: Correctly points to the production deployed URL `https://michaelbriones-dev.vercel.app/` for stable auditing.
- **[.github/workflows/audit.yml](file:///C:/Users/Geloo/Downloads/kelly-porfolio/.github/workflows/audit.yml)**:
  - *Status*: Exist.
  - *Starting Content*: Standard GitHub Actions workflow running pnpm install, linting, type-checking, next build, lighthouse-ci-action, lychee link checking, and axe-cli accessibility tests.
- **[output/baseline_summary.md](file:///C:/Users/Geloo/Downloads/kelly-porfolio/output/baseline_summary.md)**:
  - *Status*: Exist.
- **[output/change_log.md](file:///C:/Users/Geloo/Downloads/kelly-porfolio/output/change_log.md)**:
  - *Status*: Exist.
- **[output/validation_results.md](file:///C:/Users/Geloo/Downloads/kelly-porfolio/output/validation_results.md)**:
  - *Status*: Exist.
- **[output/final_report.md](file:///C:/Users/Geloo/Downloads/kelly-porfolio/output/final_report.md)**:
  - *Status*: Exist.

---

## 2. Header Policy Diagnostic

We analyzed why the HTML routes were returning `X-Frame-Options: SAMEORIGIN` and `Cache-Control: public, max-age=0, must-revalidate`:

- **X-Frame-Options: SAMEORIGIN**:
  - *Diagnosis*: The implementation was **incomplete/incorrect in source**. The root `vercel.json` explicitly mapped `X-Frame-Options` to `SAMEORIGIN`. Vercel faithfully respected the source file configuration, resulting in this header output.
- **Cache-Control: public, max-age=0, must-revalidate**:
  - *Diagnosis*: The implementation was **incomplete/incorrect in source**. The source `vercel.json` only applied specific Cache-Control to static files under `/_next/static` and media extensions. It lacked a rule for root/HTML paths `/(.*)`, which allowed Vercel's default Next.js edge caching mechanism (which serves HTML with `public, max-age=0, must-revalidate` to require browser validation) to govern HTML delivery.
