import Image from "next/image";
import React from "react";

const Hero3 = () => {
  return (
    <div className="h-[800px] w-[415px] lg:w-full lg:h-[600px] px-4 md-px-8 lg:px-16 xl:px-32 2xl:px-64 mx-auto flex flex-col lg:flex-row-reverse lg:gap-10 ">
      <div className="flex flex-col mt-10 items-center justify-center text-center px-32 sm:px- gap-4 lg:w-full lg:items-start lg:text-start lg:justify-center  ">
        <h2 className="font-extralight text-[#737373]">SUMMER 2020</h2>
        <h2 className="font-bold text-2xl text-[#252B42]">Part of the Neural Universe</h2>
        <p className="font-thin text-[#737373]">We know how large objects will act, but things on a small scale.</p>
        <div className="flex flex-col gap-4 lg:flex-row">
            <button className=" bg-[#23A6F0] rounded-sm w-28 h-10 text-white ">BUY NOW</button>
            <button className="border-blue-400 border-2 rounded-sm w-28 h-10 text-[#23A6F0]">Learn More</button>
        </div>
      </div>
      <div className="h-full w-full flex justify-center mt-5 lg:right-0 ">
        <Image src="/images/shop-hero-3.png" alt="asian women" width={400} height={100} className="  lg:h-[450px] lg:w-[650px] "/>
      </div>
    </div>
  );
};

export default Hero3;
