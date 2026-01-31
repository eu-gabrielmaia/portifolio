export function Footer() {
  return (
    <footer className="font-tomorrow w-full py-6 px-8  border border-zinc-700 text-foreground flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1 items-center text-sm">
          <p>You are the</p>
          <p className="font-medium">#000</p>
        </div>
        <div className="flex gap-1 items-center text-sm">
          <p>Desenvolvido por</p>
          <p className="font-medium">Ramirez</p>
        </div>
      </div>
    </footer>
  );
}
