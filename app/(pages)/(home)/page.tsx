import Image from "next/image";
import Link from "next/link";
import { Gap } from "@/components/gap";
import { Gmail } from "@/components/ui/svgs/gmail";
import { Linkedin } from "@/components/ui/svgs/linkedin";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { GithubLight } from "@/components/ui/svgs/githubLight";
import { SecaoProjetos } from "./secao-projetos";
import { SecaoSobre } from "./secao-sobre";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-tomorrow dark:bg-background dark:[--pattern-fg:white]/70">
      <div className="flex w-full flex-col items-center py-18 bg-transparent sm:items-start">
        <div className="w-full flex justify-center items-center gap-8 sm:flex-row sm:items-center sm:gap-16">
          <div className="w-full flex justify-center items-center gap-10 sm:gap-8 flex-col sm:flex-row">
            <div className="h-46 w-46 border border-zinc-600 overflow-hidden">
              <Image
                className="w-full h-full object-cover p-1"
                src={"https://avatars.githubusercontent.com/eu-gabrielmaia"}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col gap-4 items-center sm:items-start">
              <h1 className="text-5xl font-bold">Gabriel Maia</h1>
              <div className="flex gap-2 text-sm text-zinc-500 dark:text-zinc-400 w-max py-1 px-3 border border-zinc-300 dark:border-zinc-700 items-center">
                <p>19</p>
                <div className="my-auto h-1 w-1 bg-zinc-500 dark:bg-zinc-400" />
                <p>Desenvolvedor</p>
                <div className="my-auto h-1 w-1 bg-zinc-500 dark:bg-zinc-400" />
                <p>Designer</p>
              </div>
              <div className="flex gap-4 grayscale-100 ">
                <Link href="mailto:gabrielmaia7g@gmail.com" target="_blank">
                  <Gmail className="h-5 w-5" />
                </Link>
                <Link href="https://github.com/eu-gabrielmaia" target="_blank">
                  <GithubLight className="h-5 w-5 block dark:hidden" />
                  <GithubDark className="h-5 w-5 hidden dark:block" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/eu-gabrielmaia/"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SecaoSobre />
        <Gap />
        <SecaoProjetos />
      </div>
    </div>
  );
}
