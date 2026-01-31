export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-2 py-1 font-medium text-sm text-foreground border border-(--gray) rounded-xl bg-linear-to-b from-(--black-custom-primary) to-(--black-custom-secondary) transition hover:brightness-80 ">
      {children}
    </button>
  );
}
