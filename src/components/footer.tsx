import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Shopfront. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/products" className="hover:text-foreground">Products</Link>
          <Link href="/admin" className="hover:text-foreground">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
