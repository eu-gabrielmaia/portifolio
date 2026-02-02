import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

interface CardProjetoProps {
  nome: string;
  descricao: string;
  repositorio: string;
  link: string;
  finalizado?: boolean;
}

export function CardProjeto({
  nome,
  descricao,
  repositorio,
  link,
  finalizado,
}: CardProjetoProps) {
  return (
    <div className="w-full sm:flex border border-zinc-200 dark:border-zinc-800 p-4 hover:bg-accent transition-colors duration-300">
      <Image
        src={`https://image.thum.io/get/width/800/${link}`}
        alt=""
        width={800}
        height={300}
        className="h-full sm:w-64 w-48 object-cover mb-4 md:mb-0"
      />

      <div className="w-full ml-4 flex flex-wrap justify-center sm:justify-start">
        <div className="flex flex-col gap-4 sm:flex-col-reverse w-full">
          <div>
            <h2 className="text-xl font-bold dark:text-white">{nome}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              {descricao}
            </p>
            <Link
              href={link}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Ver mais detalhes
            </Link>
          <div className="flex items-center gap-2 text-sm border rounded-full w-max px-4 py-1 bg-transparent text-zinc-700 dark:text-zinc-300 mt-4">
            <div
              className={`h-1 w-1 rounded-full ${
                finalizado ? "bg-green-600" : "bg-red-600"
              }`}
            />
            <p>{finalizado ? "Finalizado" : "Em desenvolvimento"}</p>
          </div>
          </div>

          <div className="flex gap-2">
            <Link
              className="flex items-center justify-center gap-2 text-sm bg-zinc-500 dark:bg-zinc-800 hover:bg-zinc-700 dark:hover:bg-zinc-900 text-zinc-50 dark:text-zinc-400 border border-zinc-600 dark:border-zinc-600 hover:border-zinc-900 mb-4 px-2 py-1 rounded transition-colors duration-300 h-max"
              href={repositorio}
              target="_blank"
            >
              <Github className="h-5 w-5" />
              <p>Repositório</p>
            </Link>
            <Link
              className="flex items-center justify-center gap-2 text-sm bg-zinc-500 dark:bg-zinc-800 hover:bg-zinc-700 dark:hover:bg-zinc-900 text-zinc-50 dark:text-zinc-400 border border-zinc-600 dark:border-zinc-600 hover:border-zinc-900 mb-4 px-2 py-1 rounded transition-colors duration-300 h-max"
              href={link}
              target="_blank"
            >
              <ExternalLink className="h-5 w-5" />
              <p>Ver</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
