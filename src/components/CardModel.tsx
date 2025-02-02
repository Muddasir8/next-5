"use client";

import Image from "next/image";
import React from "react";

const CardModel = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-10 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart Is Empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/*item */}
            <div className="flex gap-4">
              <Image
                src={"/images/feaut-1.png"}
                alt="product"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* top*/}
                <div className="">
                  {/* title */}
                  <div className="flex justify-between items-center gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* bottom */}
                <div className="flex mt-5 justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/*item */}
            <div className="flex gap-4">
              <Image
                src={"/images/feaut-1.png"}
                alt="product"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* top*/}
                <div className="">
                  {/* title */}
                  <div className="flex justify-between items-center gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* bottom */}
                <div className="flex mt-5 justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bootom */}
          <div className="">
            <div className="flex justify-between">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-1 ring-gray-500">Veiw Cart</button>
            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardModel;
