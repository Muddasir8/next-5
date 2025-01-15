import { EmailIcon, FaceIcon, InstaIcon, TeleIcon, XIcon, YouIcon } from "@/utils/svg";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-[#252B42] hidden md:block">
      <div className="max-w-[1439px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-4 py-2">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <span className="">
              <TeleIcon />
            </span>
            <span className="text-sm font-bold text-white">
              (225) 555-0118
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="">
              <EmailIcon />
            </span>
            <span className="text-sm font-semibold text-white">
              Muddasir@gmail.com
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm font-semibold text-white text-center">
            Follow Us and get a chance to win 80% off
          </span>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="text-sm font-bold text-white">Follow Us:</span>
          <div className="flex items-center gap-4">
            <Link href={"/"}>
              <InstaIcon />
            </Link>
            <Link href={"/"}>
              <YouIcon />
            </Link>
            <Link href={"/"}>
              <FaceIcon />
            </Link>
            <Link href={"/"}>
              <XIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
