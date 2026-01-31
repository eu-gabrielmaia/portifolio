import Link from "next/link";

interface NavItemProps {
    text: string;
    href: string;
}

export function NavItem({ text, href }: NavItemProps) {
    return (
        <nav>
            <Link href={href} className="text-zinc-400 text-sm font-medium hover:text-white pb-0.75 hover:border-b-2 hover:border-white transition delay-150 duration-300 ease-in-out">{text}</Link>
        </nav>
    );
}