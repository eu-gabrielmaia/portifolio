export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center flex-1 py-20">
            <h1 className="text-4xl font-bold mb-4">Página Não Encontrada</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Desculpe, a página que você está procurando não existe.
            </p>
        </div>
    );
}