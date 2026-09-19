import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <Compass className="h-16 w-16 text-muted-foreground" />
      <h1 className="text-4xl font-bold">404 — Lost in space</h1>
      <p className="max-w-md text-muted-foreground">
        The page you're looking for drifted off somewhere. Let's get you back on course.
      </p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
