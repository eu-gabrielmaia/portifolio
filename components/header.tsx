import { Button } from "./button";
import { NavItem } from "./nav-item";

export function Header() {
    return (
        <header className="font-tomorrow w-full py-2 px-4 border border-zinc-700 text-foreground flex items-center justify-between">
            <nav className="flex gap-4">
                <NavItem text="Home" href={"/"} />
                <NavItem text="About" href={"/about"} />
                <NavItem text="Projects" href={"/projects"} />
                <NavItem text="Contact" href={"/contact"} />
            </nav>
            <div className="flex gap-2">
                <Button> 
                    Idioma
                </Button>
                <Button> 
                    Tema
                </Button>
            </div>
        </header>
    );
}