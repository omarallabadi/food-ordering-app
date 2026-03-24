"use client";

import { Routes } from "@/app/constants/enums";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "../ui/button";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const Links = [
    {id: crypto.randomUUID(), title: "Menu", href: Routes.MENU },
    { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
    {  id: crypto.randomUUID(), title: "Contact", href: Routes.CONTACT },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/${Routes.LOGIN}`,
    },
  ];
  return (
    <nav className="py-10">
      <Button
        variant="secondary"
        size="sm"
        className="md:hidden"
        onClick={() => {
          setOpenMenu(true);
        }}
      >
        <Menu />
      </Button>

      <ul
        className={`fixed top-0  flex flex-col bg-background h-full  w-full md:static ${openMenu ? "left-0 z-50" : "-left-full"}    md:flex  md:flex-row gap-9  items-center transition-all duration-300  font-semibold `}
      >
        <section className=" w-full py-5 justify-end px-10 flex">
        <Button
          variant="secondary"
          size="sm"
          className="md:hidden rounded-full px-2 py-1"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <X />
        </Button>
        </section>
        {Links.map((link) => (
          <li key={link.id}>
            <Link
              className={`${link.title === "Login" ? "bg-primary rounded-3xl px-6 py-2 text-white" : "text-accent hover:text-primary font-bold duration-300 transition-colors"}`}
              href={`/${link.href}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
