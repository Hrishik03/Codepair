"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReplayError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 text-center text-zinc-100">
      <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-red-500/10 text-red-500">
        <AlertTriangle className="size-8" />
      </div>
      
      <h2 className="mb-2 text-2xl font-bold tracking-tight">Replay not found</h2>
      <p className="mb-8 max-w-md text-zinc-400">
        This session replay may have been deleted or the link is incorrect. 
        Replays are permanent links but can be removed by the host.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          onClick={() => reset()}
          className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
        >
          <RotateCcw className="mr-2 size-4" />
          Try again
        </Button>
        <Link href="/">
          <Button variant="outline" className="border-zinc-800 bg-zinc-900 hover:bg-zinc-800 cursor-pointer">
            <Home className="mr-2 size-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
