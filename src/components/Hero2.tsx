import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="w-full h-[920px] lg:w-full lg:h-[600px] mx-auto flex flex-col lg:flex-row mt-10  ">
      <div className="w-full h-full lg:h-[600px] flex bg-[#23856D] relative px-4 md:-px-8 lg:px-16 xl:px-32 2xl:px-64 ">
        <div className="h-[429px] w-full  flex justify-center items-center flex-col gap-8 lg:mt-24  text-white px-12 lg:px-36 lg:items-start  lg:gap-4">
          <h1 className="font-thin">SUMMER 2020</h1>
          <h1 className="text-4xl w- font-bold ">
            Vita Classic <br /> Product{" "}
          </h1>
          <div className="w-max ">
            <p className="text-sm ">
              We know how large objects will act,
              <br /> We know how are objects will act, We know
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center lg:flex-row lg:gap-3">
            <span className="font-bold">$16.48</span>
            <div className="w-32 h-10 rounded-sm bg-[#2DC071] flex justify-center items-center">
              <button className=" font-bold font-['Montserrat'] text-md">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="w-[416px] h-[500px] bottom-0 right-0 lg:mr-24 absolute">
          <Image
            src="/images/shop-hero-2.png"
            alt="hero"
            width={416}
            height={680}
            className="w-[410px] h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
