import React from 'react'
import Image from 'next/image'

const productList = () => {
  return (
    <div className='w-full h-full py-10 bg-[#FAFAFA]'>
      <div className='px-10 flex-wrap md:px-28 lg:px-48 '>
        <div className='flex flex-col text-center gap-4 py-8'>
          <h1 className='text-3xl font-bold text-[#252B42]'>EDITOR’S PICK</h1>
          <p className='font-light text-sm text-[#737373] leading-4'>Problems trying to resolve 
          the conflict between </p>
        </div>
        <div className='flex flex-col gap-6 md:flex-row md:items-center'>
          <div className=' relative'>
          <Image
          src="/images/card cover/filter-1.png"
          alt=""
          width={50}
          height={50}
          className='w-[324px] h-[500px] md:w-[600px] '
          />
          <div className='absolute bottom-6 left-5 w-[170px] h-[48px] bg-white text-black flex flex-wrap text-center justify-center'>
          <button className='text-lg font-semibold'>MEN</button>
          </div>
          </div>
          <div className='relative'>
          <Image
          src="/images/card cover/filter-2.png"
          alt=""
          width={50}
          height={50}
          className='w-[324px] h-[500px]'
          />
          <div className='absolute bottom-6 left-5 w-[170px] h-[48px] md:w-[150px] bg-white text-black flex justify-center items-center'>
          <button className='text-lg font-semibold'>WOMEN</button>
          </div>
          </div>
          <div className='grid sm:grid-rows-2 flex-col gap-6 md:gap-2'>
          <div className='relative'>
          <Image
          src="/images/card cover/filter-3.png"
          alt=""
          width={50}
          height={50}
          className='w-[324px] h-[250px]'
          />
          <div className='absolute bottom-6 left-5 w-[170px] h-[48px] bg-white text-black flex justify-center items-center'>
          <button className='text-lg font-semibold'>ACCESSORIES</button>
          </div>
          </div>
          <div className=' relative'>
          <Image
          src="/images/card cover/filter-4.png"
          alt=""
          width={50}
          height={50}
          className='w-[324px] h-[250px]'
          />
          <div className='absolute bottom-6 left-5 w-[170px] h-[48px] md:w-[100px] bg-white text-black flex justify-center items-center'>
          <button className='text-lg font-semibold'>KIDS</button>
          </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default productList