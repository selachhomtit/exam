import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex-1">
        <header className="flex h-16 items-center justify-between border-b bg-card px-6">
          <h1 className="font-semibold tracking-tight">Admin Dashboard</h1>
          <ThemeToggle />
        </header>
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
