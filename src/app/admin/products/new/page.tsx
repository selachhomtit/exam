import { ProductForm } from "@/components/product-form";

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Add product</h2>
        <p className="text-sm text-muted-foreground">Add a new item to the catalog.</p>
      </div>
      <ProductForm />
    </div>
  );
}
