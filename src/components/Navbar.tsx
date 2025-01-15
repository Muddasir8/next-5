import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavbarIcon from "./NavbarIcon";

const Navbar = () => {
  return (
    <div className="bg-white h-16 px-4 md-px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full md:hidden  flex justify-between items-center  ">
        <Link href="/">
          <div className="text-[#252B42] font-bold text-2xl tracking-wide">
            Bandage
          </div>
        </Link>
        <div className="flex justify-between gap-4" >
        <SearchBar/>
          <NavbarIcon/>
          </div>
          <Menu />
      </div>
      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center h-full">
        {/* Left */}
        <div className="w-1/3 lg:w-1/2 flex items-center gap-12">
          <Link href="/">
          <div className="text-[#252B42] font-bold text-2xl -ml-5 tracking-wide">
            Bandage
          </div>
          </Link>
          <div className="hidden lg:flex gap-4 text-[#737373] font-bold text-sm">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">About</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Pages</Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-1/2 xl:w-1/2 flex justify-between gap-2 items-center">
          <SearchBar />
          <NavbarIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
