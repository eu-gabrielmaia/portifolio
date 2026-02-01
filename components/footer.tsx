export function Footer() {
  return (
    <footer className="text-zinc-700 dark:text-white font-tomorrow w-full py-6 px-8 border border-zinc-200 dark:border-zinc-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1 items-center text-sm">
          <p>Você é o</p>
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
