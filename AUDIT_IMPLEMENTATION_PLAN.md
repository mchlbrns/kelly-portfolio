# AUDIT IMPLEMENTATION PLAN

## Project Structure Discovery
* **Framework:** Next.js (v15.5.19, utilizing App Router)
* **Routing System:** Next.js App Router (dynamic routing supported)
* **Styling Solution:** Tailwind CSS v4 + custom CSS declarations in [globals.css](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/app/globals.css)
* **State Management:** React Local State, React 19 `useActionState` (for contact form), and `next-themes` (for dark/light theme management)
* **Form Handling:** HTML Form integrated with Next.js Server Action (`submitContactForm`) and Zod schema validation
* **Animation Libraries:** Framer Motion (optimized with `LazyMotion` and `domAnimation` bundle reduction)
* **SEO Implementation:** Page Metadata config in [layout.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/app/layout.tsx), JSON-LD Person structured data component, custom `sitemap.ts`, and `robots.txt`
* **Build Tooling:** pnpm, TypeScript v5, ESLint, Next.js compiler

---

## Identified Issues & Bugs

### Phase 2: Critical Bug Fixes
1. **Bug 1: Dead CTA Link**
   * **Affected File:** [Hero.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/components/Hero.tsx#L8)
   * **Issue:** `bookingUrl` defaults to `"#"` if the environment variable `NEXT_PUBLIC_BOOKING_URL` is undefined, creating a dead link.
   * **Solution:** Change fallback to `"#contact"` (the contact form section anchor) or integrate a Calendly component fallback.
   * **Complexity:** Low

2. **Bug 2: Placeholder Production URLs**
   * **Affected File:** [Projects.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/components/Projects.tsx#L27)
   * **Issue:** The "AI Customer Support Agent" project card uses `https://example.com/ai-agent` as its live URL.
   * **Solution:** Replace the placeholder with conditional rendering that hides the live URL link when it matches a placeholder or is empty, or point it to the dynamic case study page `/projects/ai-agent` once implemented.
   * **Complexity:** Low

3. **Bug 3: Theme Toggle State**
   * **Affected File:** [Navbar.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/components/Navbar.tsx#L75-L121)
   * **Issue:** Toggle buttons only switch resolved themes (`resolvedTheme === "dark" ? "light" : "dark"`). The button text / aria-label should update dynamically and accurately reflect state, and screen readers must be notified of theme updates.
   * **Solution:** Implement a robust toggle button that preserves system preference defaults, sets proper `aria-label` tags, and uses an accessible announcement mechanism.
   * **Complexity:** Low

4. **Bug 4: Contact Form Accessibility**
   * **Affected Files:** [Contact.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/components/Contact.tsx) and [contact.ts](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/app/actions/contact.ts)
   * **Issue:** Fields lack complete keyboard and screen reader hints. Validation errors are present but can be hardened with explicit `aria-describedby`, `aria-invalid`, `role="alert"`, and an `aria-live` container to report form status updates dynamically.
   * **Solution:** Add `aria-describedby` pointing to the error message IDs, configure input attributes `aria-invalid`, and implement `aria-live="polite"` feedback for form submission results.
   * **Complexity:** Medium

5. **Bug 5: Repository Links**
   * **Affected File:** [Projects.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/components/Projects.tsx#L28)
   * **Issue:** Several project cards point to the general GitHub profile (`https://github.com/mchlbrns`) as a placeholder rather than specific repositories.
   * **Solution:** Update the rendering to hide the "Source Code" button when there is no specific repository URL, or point them to valid, specific repository URLs.
   * **Complexity:** Low

6. **Bug 7: Form Feedback**
   * **Affected Files:** [Contact.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/components/Contact.tsx)
   * **Issue:** While submitting, the submit button is disabled. However, input fields remain editable, and multiple submissions are not fully guarded at the UI level.
   * **Solution:** Disable all form input controls while `isPending` is active. Provide explicit loading skeleton indicators and animated success states.
   * **Complexity:** Low

---

### Phase 3: Accessibility Hardening
* **Affected Files:** [layout.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/app/layout.tsx), [Navbar.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/components/Navbar.tsx), [SkipLink.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/components/SkipLink.tsx), other sections.
* **Gaps:** Skip link focus styles need checking, keyboard navigation for the mobile menu must trap focus and close on Escape keypress, and proper landmarks (like `<header>`, `<main>`, `<footer>`) must be verified.
* **Solution:** Implement full WCAG 2.1 AA review, fix keyboard trapping for the mobile menu drawer, add focus indicators, and generate `ACCESSIBILITY_REPORT.md`.
* **Complexity:** Medium

---

### Phase 4: SEO Optimization
* **Affected Files:** [layout.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/app/layout.tsx), [JsonLd.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/components/JsonLd.tsx), [sitemap.ts](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/app/sitemap.ts), [robots.txt](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/app/robots.txt).
* **Gaps:** The JSON-LD schema is basic. Need to expand to include Person, CreativeWork (portfolio items), and WebSite schema. Hardcoded URLs in layout/sitemap/robots.txt must be aligned.
* **Solution:** Implement meta tag audits, expand JSON-LD metadata, test schemas with rich results, and generate `SEO_REPORT.md`.
* **Complexity:** Medium

---

### Phase 5: Performance Optimization
* **Affected Files:** [next.config.ts](file:///c:/Users/Geloo/Downloads/kelly-porfolio/next.config.ts), [layout.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/app/layout.tsx), all section components.
* **Gaps:** Font optimization uses `<link preconnect>` in layout, which is redundant when using `next/font/google`. Image sizing can be refined to prevent layout shifts. Framer motion bundles can be split/lazy loaded.
* **Solution:** Refine next/image sizing parameters, clean up preconnect links, lazy-load sections using next/dynamic, and generate `PERFORMANCE_REPORT.md`.
* **Complexity:** Medium

---

### Phase 6: UX Improvements
* **Affected Files:** New files under `src/components/` and modifications to [page.tsx](file:///c:/Users/Geloo/Downloads/kelly-porfolio/src/app/page.tsx).
* **Gaps:** Lacks Stats Section, Project Filtering, Back-To-Top button, and Contact form loading skeletons.
* **Solution:** Create `Stats.tsx`, update `Projects.tsx` with category-filtering buttons, build an accessible `BackToTop.tsx` component, and implement skeleton loader components.
* **Complexity:** Medium

---

### Phase 7: Case Study System
* **Affected Files:** [NEW] `src/app/projects/[slug]/page.tsx`
* **Gaps:** Lacks deep-dive case study pages for individual projects.
* **Solution:** Refactor project list into a centralized dataset and create dynamic routes `/projects/[slug]` with comprehensive content sections (Problem, Challenge, Solution, Tech Stack, Architecture, Results, Lessons Learned).
* **Complexity:** Medium

---

### Phase 8: Automated Quality Gates
* **Affected Files:** [.github/workflows/audit.yml](file:///c:/Users/Geloo/Downloads/kelly-porfolio/.github/workflows/audit.yml)
* **Gaps:** The CI pipeline runs Axe CLI and Treosh Lighthouse, but does not enforce step failures based on exact thresholds.
* **Solution:** Configure workflow failure triggers if checks fall below target metrics.
* **Complexity:** Medium

---

## Implementation Order
1. **Phase 1:** Plan & Discovery (Current)
2. **Phase 2:** Critical Bug Fixes (Bugs 1-7, including fallback CTA links, repository links, resume downloads, form feedback)
3. **Phase 3:** Accessibility Hardening (WCAG AA compliance, focus states, keyboard navigation)
4. **Phase 4:** SEO Optimization (JsonLD schemas, meta fields, canonical setups)
5. **Phase 5:** Performance Optimization (Image sizing, font load, lazy loading)
6. **Phase 6:** UX Improvements (Stats section, filtering, back-to-top)
7. **Phase 7:** Case Study System (Dynamic routing, project details)
8. **Phase 8:** CI/CD Quality Gates (Lighthouse & Axe threshold assertions)
9. **Phase 9-10:** Validation, Testing, and Final Reporting

---

## Potential Risks & Mitigations
* **Risk:** Framer Motion hydration mismatch.
  * *Mitigation:* Ensure animation wrapper and client components check mount status before executing client-specific render paths.
* **Risk:** Tailwind CSS v4 breaking custom selectors.
  * *Mitigation:* Verify builds locally after each modification to confirm styles compile successfully.
* **Risk:** Broken routing links.
  * *Mitigation:* Leverage next/link features and verify routes using automated checks.
