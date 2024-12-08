/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";

export default function navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


    return(
        <nav>
            <div className="w-full h-auto relative bg-white shadow">
  <div className="max-w-[1322px] mx-auto flex items-center justify-between px-4 py-4">
    {/* Logo */}
    <div className="text-[#252b42] text-2xl font-bold font-['Montserrat']">
      Bandage
    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex gap-8">
      <a
        href="#"
        className="text-[#727272] text-sm font-bold font-['Montserrat'] hover:text-[#252b42]"
      >
        Home
      </a>
      <a
        href="#"
        className="text-[#727272] text-sm font-bold font-['Montserrat'] hover:text-[#252b42]"
      >
        Product
      </a>
      <a
        href="#"
        className="text-[#727272] text-sm font-bold font-['Montserrat'] hover:text-[#252b42]"
      >
        Pricing
      </a>
      <a
        href="#"
        className="text-[#727272] text-sm font-bold font-['Montserrat'] hover:text-[#252b42]"
      >
        Contact
      </a>
    </div>

    {/* Actions */}
    <div className="hidden md:flex items-center gap-6">
      <a
        href="#"
        className="text-[#23a6f0] text-sm font-bold font-['Montserrat'] hover:underline"
      >
        Login
      </a>
      <button className="bg-[#23a6f0] text-white text-sm font-bold font-['Montserrat'] px-6 py-2 rounded hover:bg-[#1d8cdb]">
        Become a member
      </button>
    </div>

    {/* Mobile Menu Icon */}
    <div className="md:hidden flex items-center">
      <button
        className="text-[#252b42] text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white shadow-lg py-4 px-4 flex flex-col gap-4">
      <a
        href="#"
        className="text-[#727272] text-sm font-bold font-['Montserrat'] hover:text-[#252b42]"
      >
        Home
      </a>
      <a
        href="#"
        className="text-[#727272] text-sm font-bold font-['Montserrat'] hover:text-[#252b42]"
      >
        Product
      </a>
      <a
        href="#"
        className="text-[#727272] text-sm font-bold font-['Montserrat'] hover:text-[#252b42]"
      >
        Pricing
      </a>
      <a
        href="#"
        className="text-[#727272] text-sm font-bold font-['Montserrat'] hover:text-[#252b42]"
      >
        Contact
      </a>
      <a
        href="#"
        className="text-[#23a6f0] text-sm font-bold font-['Montserrat'] hover:underline"
      >
        Login
      </a>
      <button className="bg-[#23a6f0] text-white text-sm font-bold font-['Montserrat'] px-6 py-2 rounded hover:bg-[#1d8cdb]">
        Become a member
      </button>
    </div>
  )}
</div>
</nav>
    )
}