import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FutureProd = () => {
  return (
    <div className='w-full h-full py-20'>
      <div className='px-32 mb-6 flex-col text-center flex justify-center gap-4 '>
        <span className='text-sm font-semibold text-[#23A6F0]'>Practice Advice</span>
        <h1 className='text-4xl font-bold text-[#252B42]'>Featured Posts</h1>
        <p className='font-light text-sm text-[#737373] leading-4'>Problems trying to resolve the conflict between the two major </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='px-16 py-6 flex flex-col gap-4 '>
        <Image src="/images/feaut-1.png" alt="" width={550} height={550} />
        <div className='px-4 flex flex-col gap-3'>
        <div className="flex gap-3 font-thin text-sm text-[#737373]">
          <Link href="/" className="text-blue-500">
            Google
          </Link>
          <Link href="/">Trending</Link>
          <Link href="/">New</Link>
          </div>
          <h1 className="text-xl">Loudest à la Madison #1 (L&apos;integral)</h1>
          <p className="text-sm text-[#737373]">
            We focus on ergonomics and meeting you where you work. It&apos;s only a
            keystroke away.
          </p>
          <Link href="/" className='text-lg font-medium text-[#737373]'>Learn More</Link>
          </div>
        </div>
        <div className='px-16 py-6 flex flex-col gap-4'>
        <Image src="/images/feaut-2.png" alt="" width={550} height={550} />
        <div className='px-4 flex flex-col gap-3'>
        <div className="flex gap-3 font-thin text-sm text-[#737373]">
          <Link href="/" className="text-blue-500">
            Google
          </Link>
          <Link href="/">Trending</Link>
          <Link href="/">New</Link>
          </div>
          <h1 className="text-xl">Loudest à la Madison #1 (L&apos;integral)</h1>
          <p className="text-sm text-[#737373]">
            We focus on ergonomics and meeting you where you work. It&apos;s only a
            keystroke away.
          </p>
          <Link href="/" className='text-lg font-medium text-[#737373]'>Learn More</Link>
          </div>
        </div>
        <div className='px-16 py-6 flex flex-col gap-4'>
        <Image src="/images/feaut-3.png" alt="" width={550} height={550} />
        <div className='px-4 flex flex-col gap-3'>
        <div className="flex gap-3 font-thin text-sm text-[#737373]">
          <Link href="/" className="text-blue-500">
            Google
          </Link>
          <Link href="/">Trending</Link>
          <Link href="/">New</Link>
          </div>
          <h1 className="text-xl">Loudest à la Madison #1 (L&apos;integral)</h1>
          <p className="text-sm text-[#737373]">
            We focus on ergonomics and meeting you where you work. It&apos;s only a
            keystroke away.
          </p>
          <Link href="/" className='text-lg font-medium text-[#737373]'>Learn More</Link>
          </div>
        </div>
        </div>
    </div>
  )
}

export default FutureProd