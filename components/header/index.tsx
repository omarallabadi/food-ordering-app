import { Routes } from "@/app/constants/enums";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="container flex font-bold text-primary   items-center justify-between   ">
        <Link className="text-3xl"  href={Routes.HOME}> 🍕 Pizza</Link>
        <Navbar/>
      </div>
    </header>
  );
}

export default Header;
