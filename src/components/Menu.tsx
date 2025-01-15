"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src="/menu.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />{
        open && (<div className="absolute bg-white text-[#737373] left-0 top-16 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-4 text-xl z-10">
            <Link href="/">Home</Link>
            <Link href="/">Product</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Contact</Link>
            <div className=" font-semibold flex gap-2 text-[#23A6F0]">
            <Link href="/">Login</Link>/
            <Link href="/">Register</Link>
            </div>
        </div>)
      }
    </div>
  );
};

export default Menu;
