export default function RoomLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      {/* Header Skeleton */}
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="mx-auto flex w-full max-w-425 items-center gap-2 px-3 py-2 md:px-5">
          <div className="h-5 w-24 animate-pulse rounded bg-zinc-800" />
          <div className="h-6 w-32 animate-pulse rounded border border-zinc-700 bg-zinc-800" />
          <div className="ml-auto flex gap-2">
            <div className="h-8 w-20 animate-pulse rounded bg-zinc-800" />
            <div className="h-8 w-8 animate-pulse rounded bg-zinc-800" />
          </div>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-425 flex-1 gap-3 p-3 md:grid-cols-[1fr_340px]">
        {/* Left Pane (Editor) Skeleton */}
        <div className="grid min-h-[75vh] grid-rows-[auto_1fr_auto] rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
          <div className="flex gap-1 border-b border-zinc-800 bg-zinc-900/80 px-3 pt-2">
            <div className="h-8 w-24 animate-pulse rounded-t-md bg-zinc-800" />
            <div className="h-8 w-24 animate-pulse rounded-t-md bg-zinc-700/50" />
          </div>
          <div className="h-[60vh] animate-pulse bg-zinc-950" />
          <div className="flex h-10 items-center border-t border-zinc-800 px-3">
            <div className="h-4 w-32 animate-pulse rounded bg-zinc-800" />
          </div>
        </div>

        {/* Right Pane (Sidebar) Skeleton */}
        <aside className="grid min-h-[75vh] grid-rows-[auto_1fr_auto] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
          <div className="grid grid-cols-3 border-b border-zinc-800">
            <div className="h-10 animate-pulse bg-zinc-800/50" />
            <div className="h-10 animate-pulse bg-zinc-800/30" />
            <div className="h-10 animate-pulse bg-zinc-800/50" />
          </div>
          <div className="p-3 space-y-4">
            <div className="h-24 w-full animate-pulse rounded-lg bg-zinc-950" />
            <div className="h-32 w-full animate-pulse rounded-lg bg-zinc-950" />
          </div>
          <div className="border-t border-zinc-800 p-3">
            <div className="mb-2 h-3 w-20 animate-pulse rounded bg-zinc-800" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="size-6 animate-pulse rounded-full bg-zinc-800" />
                <div className="h-4 flex-1 animate-pulse rounded bg-zinc-800" />
              </div>
              <div className="flex items-center gap-2">
                <div className="size-6 animate-pulse rounded-full bg-zinc-800" />
                <div className="h-4 flex-1 animate-pulse rounded bg-zinc-800" />
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
