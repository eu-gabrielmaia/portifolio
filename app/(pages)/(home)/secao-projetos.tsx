import { CardProjeto } from "@/components/card-projeto";
import Link from "next/link";

export function SecaoProjetos() {
  return (
    <div className="flex flex-col items-center justify-start gap-4 my-8 w-full sm:px-0 py-6">
      <div className="w-max max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Projetos</h1>
        <div className="flex flex-col gap-4 mb-4">
          <CardProjeto
            nome="BankAlt"
            descricao="Protótipo de banco digital pensado especificamente para pessoas autistas, focado em simplicidade, previsibilidade e redução de sobrecarga cognitiva."
            repositorio="https://github.com/eu-gabrielmaia/bankalt"
            link="https://bankalt.vercel.app/"
            finalizado={true}
          />
          <CardProjeto
            nome="Portfólio Pessoal"
            descricao="Meu site pessoal desenvolvido com Next.js e Tailwind CSS para apresentar meus projetos e habilidades como desenvolvedor."
            repositorio="https://github.com/eu-gabrielmaia/portifolio"
            link="https://eu-gabrielmaia.vercel.app/"
            finalizado={false}
          />
          <CardProjeto
            nome="Rick and Morty API"
            descricao="Aplicação front-end que consome a API pública de Rick and Morty para listar personagens da série de forma dinâmica e interativa."
            repositorio="https://github.com/eu-gabrielmaia/rick-morty-api"
            link="https://eu-gabrielmaia.github.io/rick-morty-api/"
            finalizado={true}
          />
        </div>
      </div>
      <Link
        href="/projetos"
        className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors duration-300"
      >
        Mostrar todos os projetos
      </Link>
    </div>
  );
}
