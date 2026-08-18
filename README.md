# YADORI - Next.js + Tailwind Landing Page

Rebuilt from the Figma file "YADORI - Desktop Landing Page" (12 sections,
hero to footer) using Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Setup

This project's dependencies were not installed and its build was not
verified in the environment it was written in (npm registry access was
blocked there). Run these steps on your own machine:

npm install
npm run download-assets
npm run dev

npm run download-assets runs scripts/download-assets.sh, which pulls every
image/SVG referenced by the components into public/images/. Figma's export
links expire roughly 7 days after they were generated (2026-08-19), so run
this soon. If a link has expired, re-run the Figma get_design_context /
download_assets MCP tool on the source file to get fresh URLs and update
the script.

## Structure

- app/layout.tsx: root layout, loads Cormorant Garamond + Gothic A1 via next/font/google
- - app/page.tsx: assembles all 12 sections in order
  - - components/*.tsx: one component per Figma section
    - - tailwind.config.ts: brand color tokens hand-mapped from the raw hex values used in the design
      - - scripts/download-assets.sh: asset downloader
        -
        - ## Notes
        -
        - - Decorative background blobs and arc-divider curves are approximated with
          -   plain rounded-corner divs using the same colors/opacity as the source
          -     design, since they are non-interactive background fills.
          - - No Figma Variables/design tokens existed in the source file - all colors
            -   are manually defined in tailwind.config.ts under theme.extend.colors.
            -   ———————
