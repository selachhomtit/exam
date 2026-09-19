"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductsQuery } from "@/store/api/productsApi";
import { Boxes, DollarSign, PackageX, Tags } from "lucide-react";

export default function AdminDashboardPage() {
  const { data: products, isLoading } = useGetProductsQuery();

  const totalProducts = products?.length ?? 0;
  const totalValue = products?.reduce((sum, p) => sum + p.price * p.stock, 0) ?? 0;
  const outOfStock = products?.filter((p) => p.stock === 0).length ?? 0;
  const categories = new Set(products?.map((p) => p.category)).size;

  const stats = [
    { label: "Total Products", value: totalProducts, icon: Boxes },
    { label: "Inventory Value", value: `$${totalValue.toFixed(2)}`, icon: DollarSign },
    { label: "Out of Stock", value: outOfStock, icon: PackageX },
    { label: "Categories", value: categories, icon: Tags },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
            <s.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="font-ledger text-2xl font-bold">{s.value}</div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
