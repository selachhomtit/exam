import { PreviewModal } from "@/components/preview-modal";

export default async function InterceptedPreview({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <PreviewModal id={id} />;
}
