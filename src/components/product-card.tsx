"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/data/products";

// Checklist #12: fall back to a placeholder whenever a product has no image yet.
const FALLBACK_IMAGE = "https://placehold.co/600x400/1e293b/ffffff?text=No+Image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/preview/${product.id}`} scroll={false}>
      <Card className="group overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={product.image || FALLBACK_IMAGE}
            alt={product.name}
            fill
            unoptimized
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.stock === 0 && (
            <Badge variant="destructive" className="absolute right-2 top-2">Out of stock</Badge>
          )}
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2 text-sm text-muted-foreground">{product.category}</CardContent>
        <CardFooter className="justify-between">
          <span className="font-ledger font-semibold">${product.price.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground">{product.stock} in stock</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
