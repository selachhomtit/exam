import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, ShieldCheck, Table2 } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "A full admin panel built from shadcn UI blocks with a collapsible sidebar.",
  },
  {
    icon: Table2,
    title: "Data Table",
    description: "Search, filter, sort and paginate records fetched live from the API.",
  },
  {
    icon: ShieldCheck,
    title: "Validated Forms",
    description: "React Hook Form + Zod catch bad input before it ever reaches the server.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <CardHeader>
                  <f.icon className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{f.description}</CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
