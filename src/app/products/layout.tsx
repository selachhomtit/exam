import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ProductsLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[60vh] max-w-6xl px-4 py-10">{children}</main>
      {modal}
      <Footer />
    </>
  );
}
