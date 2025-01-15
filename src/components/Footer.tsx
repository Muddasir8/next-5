import { BlueFace, BlueInsta, BlueX } from "@/utils/svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full mx-auto bg-white px-4 md-px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Top Section */}
      <section className="bg-[#f9f9f9]  py-10 px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center ">
          <div className="flex flex-col">
            <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">
              Bandage
            </h1>
          </div>
          <div className="flex gap-6">
            <Link href={"/"}>
            <BlueFace/>
            </Link>
            <Link href={"/"}>
            <BlueInsta
            />
            </Link>
            <Link href={"/"}>
            <BlueX
            />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#e6e6e6]" />

      {/* Main Footer Content */}
      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
                About Us
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              Carrier
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              We are hiring
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
            <Link href={"/"} className="text-[#727272] text-sm font-bold">
            About Us
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              Carrier
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              We are hiring
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              Blog
              </Link>
            </nav>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Features</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
            <Link href={"/"} className="text-[#727272] text-sm font-bold">
            Business Marketing
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              User Analytic
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              Live Chat
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              Unlimited Support
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
            <Link href={"/"} className="text-[#727272] text-sm font-bold">
            IOS & Android
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              Watch a Demo
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              Customers
              </Link>
              <Link href={"/"} className="text-[#727272] text-sm font-bold">
              API
              </Link>
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
            <div className="mt-3">
              <div className="relative mb-4">
                <input
                  type="email"
                  className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                  placeholder="Your Email"
                />
                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-[#727272] text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#f9f9f9] py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <p className="text-[#727272] text-sm font-bold">
            Made with love by Finland. All rights reserved.
          </p>
          <div className="flex gap-4"></div>
        </div>
      </section>
    </div>
  );
}
