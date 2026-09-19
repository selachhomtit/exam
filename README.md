# Shopfront — Admin Dashboard Demo

A Next.js (App Router) storefront + admin dashboard built to walk through the full checklist:
shadcn-style UI, Redux Toolkit + RTK Query, parallel routes, validated forms, a searchable/sortable
data table, skeleton loading, image fallbacks, hidden-backend route handlers, custom error pages,
and a custom Google Font.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The homepage links to `/products` (storefront) and `/admin`
(dashboard). `npm run build` requires internet access (it fetches the Google Fonts used in
`src/app/layout.tsx` at build time).

## Where each checklist item lives

| # | Item | Where |
|---|------|-------|
| 1 | Project + shadcn UI setup | `src/components/ui/*` — hand-written shadcn-style primitives (button, card, input, table, dialog, dropdown-menu, select, form, badge, skeleton, sonner) since the `shadcn` CLI needs network access this sandbox doesn't have. Swap in real shadcn components any time by running `npx shadcn@latest add <component>` — the file shapes match. |
| 2 | Homepage: navbar, footer, hero, responsive, dark mode | `src/components/navbar.tsx`, `footer.tsx`, `hero.tsx`, `theme-toggle.tsx` (next-themes), `src/app/page.tsx` |
| 3 | RTK + RTK Query setup | `src/store/store.ts`, `src/store/hooks.ts`, `src/store/api/productsApi.ts` |
| 4 | Fetch + render as cards | `src/app/products/page.tsx` + `src/components/product-card.tsx` |
| 5 | Parallel route image/card preview | `src/app/products/@modal/(.)preview/[id]/page.tsx` (intercepted modal) + `src/app/products/preview/[id]/page.tsx` (direct-link fallback) + `src/components/preview-modal.tsx` |
| 6 | Form with React Hook Form + Zod | `src/components/product-form.tsx`, schema in `src/lib/validations/product.ts` |
| 7 | Admin dashboard shell | `src/app/admin/layout.tsx`, `src/components/app-sidebar.tsx`, overview cards in `src/app/admin/page.tsx` |
| 8 | Insert form data to API | `ProductForm` calls `useCreateProductMutation` -> `POST /api/products` |
| 9 | Data table: search, filter, sort | `src/components/products-data-table.tsx` (TanStack Table v8) |
| 10 | Delete from API | Delete action + confirm dialog in `products-data-table.tsx` -> `DELETE /api/products/[id]` |
| 11 | Skeleton loading | `Skeleton` used in `products/page.tsx`, `product-preview.tsx`, `admin/page.tsx`, and the data table |
| 12 | Default image fallback | `FALLBACK_IMAGE` constant in `product-card.tsx`, `product-preview.tsx`, `products-data-table.tsx` |
| 13 | Route handlers hiding the backend | `src/app/api/products/route.ts` and `src/app/api/products/[id]/route.ts` — the browser only ever calls same-origin `/api/products`; swap the in-memory `src/lib/data/products.ts` for a real `fetch(process.env.BACKEND_URL, ...)` call and nothing on the client changes |
| 14 | Custom 404 / error pages | `src/app/not-found.tsx`, `src/app/error.tsx` |
| 15 | Custom Google Font | `Plus_Jakarta_Sans` + `JetBrains_Mono` via `next/font/google` in `src/app/layout.tsx` |

## Notes

- Data currently lives in an in-memory array (`src/lib/data/products.ts`) so the app runs with zero
  setup. It resets whenever the dev server restarts — swap that module for real database/API calls
  when ready; the route handlers and RTK Query layer don't need to change.
- Dark mode uses `next-themes`; toggle it from the navbar (sun/moon icon).
- Image URLs from the create-product form must be absolute URLs (`https://...`), matching the Zod schema.
