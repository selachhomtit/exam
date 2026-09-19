import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:py-28">
        <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
          Built with Next.js &amp; shadcn UI
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Everything you need, <span className="text-primary">beautifully organized</span>
        </h1>
        <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
          A responsive storefront and admin dashboard demo: RTK Query data fetching, validated
          forms, sortable tables, and a hidden backend behind Next.js route handlers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/products">Browse Products</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/admin">Open Admin Dashboard</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
