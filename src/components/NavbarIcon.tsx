"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import CardModel from "./CardModel";
import { useRouter } from "next/navigation";

const NavbarIcon = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex gap-4 items-center justify-center xl:gap-6 relative ">
      <div className="hidden md:block">
      <Image
        src="/login.png"
        alt=""
        width={16}
        height={16}
        className="ml-3 cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-5 text-black bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-11 left-0 text-sm flex flex-col z-20">
          <Link href="/login" className="hover:ring-1 px-2 py-2 rounded-md ring-slate-400">Profile</Link>
          <div className="mt-2 cursor-pointer hover:ring-1 px-2 py-2 rounded-md ring-slate-400">Logout</div>
        </div>
      )}
      </div>
      <div className="hidden md:block">
      <Image
        src="/heart.svg"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      </div>
      <div className="relative ">
      <Image
        src="/shop.svg"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      />
      <div className="absolute -top-4 -right-3 flex justify-center items-center w-6 h-6 bg-red-500 text-white rounded-full text-sm">1</div>
      </div>
      {isCartOpen && <CardModel />}
      
    </div>
  );
};

export default NavbarIcon;
