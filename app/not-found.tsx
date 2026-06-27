import Link from "next/link";
import { FileQuestion, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 text-center text-zinc-100">
      <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-zinc-900 text-zinc-400">
        <FileQuestion className="size-8" />
      </div>
      
      <h2 className="mb-2 text-2xl font-bold tracking-tight">404 - Page Not Found</h2>
      <p className="mb-8 max-w-md text-zinc-400">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link href="/">
        <Button className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
          <Home className="mr-2 size-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
