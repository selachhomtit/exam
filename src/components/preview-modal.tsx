"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductPreview } from "@/components/product-preview";

export function PreviewModal({ id }: { id: string }) {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={(open) => !open && router.back()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Quick preview</DialogTitle>
        </DialogHeader>
        <ProductPreview id={id} />
      </DialogContent>
    </Dialog>
  );
}
