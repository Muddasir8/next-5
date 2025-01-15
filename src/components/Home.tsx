import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="h-[calc(100vh-80px)] mx-auto relative flex flex-col md:flex-row">
        <div className="w-full h-full flex absolute">
          <div className="w-screen h-full flex flex-col md:flex-row">
          <div className="h-full w-full relative ">
            <Image
              src="/images/shop-hero-1-product-slide-1.png"
              alt="hero"
              layout="fill"
              sizes="100%"
              className="object-cover "
            />
          </div>
          <div className=" absolute flex flex-col items-center sm:items-start justify-center px-32 md:px-64 mt-20 md:mt-52 text-center md:text-left">
            <div className="flex flex-col items-center  md:items-start  gap-7 text-white">
              <span className="text-sm md:text-base font-bold font-['Montserrat'] leading-normal">
                SUMMER 2020
              </span>
              <h1 className="text-3xl md:text-[58px] font-bold font-['Montserrat'] leading-tight md:leading-[80px] tracking-tight">
                NEW COLLECTION
              </h1>
              <p className="text-sm md:text-xl text-[#f9f9f9] font-normal font-['Montserrat'] leading-5 md:leading-[30px] tracking-tight">
                We know how large objects will act,
                <br />
                but things on a small scale.
              </p>
              <Link href="/shop" className="">
                <button className="bg-green-600 text-white px-10 py-2 mt-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Home