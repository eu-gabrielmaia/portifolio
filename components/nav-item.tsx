"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({ href, text }: { href: string; text: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex flex-col justify-center items-center text-sm transition-colors
    ${
      isActive
        ? "text-zinc-900 font-semibold dark:text-white"
        : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
    }
  `}
    >
      {text}

      <div
        className={`mt-px h-0.5 w-2 text-bold transition-colors
      ${isActive ? "bg-zinc-900 dark:bg-zinc-400" : "bg-transparent"}
    `}
      />
    </Link>
  );
}
