"use client";
import Image from "next/image";
import { useGetProductQuery } from "@/store/api/productsApi";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const FALLBACK_IMAGE = "https://placehold.co/600x400/1e293b/ffffff?text=No+Image";

export function ProductPreview({ id }: { id: string }) {
  const { data: product, isLoading, isError } = useGetProductQuery(id);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="aspect-video w-full rounded-lg" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    );
  }

  if (isError || !product) {
    return <p className="text-destructive">Product not found.</p>;
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
        <Image src={product.image || FALLBACK_IMAGE} alt={product.name} fill unoptimized className="object-cover" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <span className="font-ledger text-lg font-bold">${product.price.toFixed(2)}</span>
      </div>
      {product.description && <p className="text-sm text-muted-foreground">{product.description}</p>}
      <Badge variant={product.stock === 0 ? "destructive" : "secondary"}>
        {product.stock === 0 ? "Out of stock" : `${product.stock} in stock`}
      </Badge>
    </div>
  );
}
