import { ProductPreview } from "@/components/product-preview";

export default async function ProductPreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="mx-auto max-w-2xl">
      <ProductPreview id={id} />
    </div>
  );
}
