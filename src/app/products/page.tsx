"use client";
import { useGetProductsQuery } from "@/store/api/productsApi";
import { ProductCard } from "@/components/product-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsPage() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <p className="text-muted-foreground">Click any product to preview it without leaving this page.</p>
      </div>

      {isError && (
        <p className="text-destructive">Couldn&apos;t load products. Please try again.</p>
      )}

      {isLoading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-video w-full rounded-lg" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          ))}
        </div>
      )}

      {products && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
