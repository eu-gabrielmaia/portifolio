import { Button } from "./button";
import { NavItem } from "./nav-item";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function Header() {
  return (
    <header className="bg-transparent font-tomorrow w-full py-4 px-4 border border-zinc-200 dark:border-zinc-900 text-foreground flex items-center justify-between">
      <nav className="flex gap-4">
        <NavItem text="Home" href={"/"} />
        <NavItem text="Sobre" href={"/sobre"} />
        <NavItem text="Projetos" href={"/projeto"} />
        <NavItem text="Contato" href={"/contato"} />
      </nav>
      <div className="flex gap-2">
        <Button>Idioma</Button>
        <AnimatedThemeToggler duration={600} />
      </div>
    </header>
  );
}
