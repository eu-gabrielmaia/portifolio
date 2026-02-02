export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-2 py-1 font-medium text-sm text-zinc-800   dark:text-white border border-zinc-300 dark:border-zinc-700 dark:bg-linear-to-b from-(--black-custom-primary) to-(--black-custom-secondary) transition hover:brightness-80">
      {children}
    </button>
  );
}
