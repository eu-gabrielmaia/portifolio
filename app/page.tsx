import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-foreground font-tomorrow dark:bg-background dark:[--pattern-fg:white]/10">
      <div className="flex w-full flex-col items-center py-18 bg-transparent sm:items-start">
        <div className="w-full p-5 flex justify-center items-center gap-8 sm:flex-row sm:items-center sm:gap-16">
          <div className="flex items-center gap-36 sm:gap-8 flex-col sm:flex-row">
            <div className="h-46 w-46 rounded-full border border-zinc-600 overflow-hidden">
              <Image
                className="w-full h-full object-cover rounded-full p-1"
                src={"https://avatars.githubusercontent.com/eu-gabrielmaia"}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col gap-1 items-center sm:items-start">
              <h1 className="text-5xl font-bold">Gabriel Maia</h1>
              <div className="flex gap-2 mt-2 text-sm text-zinc-500 dark:text-zinc-400 w-max py-1 rounded-full">
                <p>19</p>
                <div className="my-auto h-1 w-1 rounded-full bg-zinc-500 dark:bg-zinc-400" />
                <p>Developer</p>
              </div>
              <div className="flex gap-2">
                <Image className="h-5 w-5" src={"/gmail.png"} alt="Gmail" width={80}
                height={80}/>
                <Image className="h-5 w-5" src={"/github.png"} alt="GitHub" width={80}
                height={80}/>
                <Image className="h-5 w-5" src={"/linkedin.png"} alt="Linkedin" width={80}
                height={80}/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-4 w-full">
          <div className="w-max max-w-xl">
            <h1 className="text-2xl font-bold">About</h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 text-wrap text-justify">
              Estudante de tecnologia com{" "}
              <span className="text-white font-semibold">
                formação técnica em informática pelo COTIL
              </span>
              , com base em desenvolvimento de sistemas e conhecimentos em
              ferramentas digitais. Possuo{" "}
              <span className="text-white font-semibold">
                boa organização, raciocínio lógico e facilidade para aprender
                processos administrativos
              </span>
              . Busco oportunidade como aprendiz para desenvolver habilidades
              profissionais e contribuir no dia a dia do setor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
