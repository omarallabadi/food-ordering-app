import { Routes } from "@/app/constants/enums";
import { link } from "fs";
import Link from "next/link";
import { title } from "process";
import React from "react";

function Navbar() {
  const Links = [
    { id: crypto.randomUUID(), title: "Menu", href: Routes.MENU },
    { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
    { id: crypto.randomUUID(), title: "Contact", href: Routes.CONTACT },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/${Routes.LOGIN}`,
    },
  ];
  return (
    <nav>
      <ul className="flex gap-9 my-4 items-center font-semibold ">
        {Links.map((link) => (
           
          <Link className={`${  link.title==="Login"?"bg-primary rounded-3xl px-6 py-2 text-white": "text-accent hover:text-primary font-bold duration-300 transition-colors"}`} key={link.id} href={`/${link.href}`}>
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
