import React from 'react'

const CuztumizeColor = () => {
  return (
    <div className='flex flex-col gap-5'>
        <ul className="flex items-center gap-3">
            <li className="w-6 h-6 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-800"></li>
            <li className="w-6 h-6 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-800"></li>
            <li className="w-6 h-6 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-orange-800"></li>
            <li className="w-6 h-6 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-[#252B42]"></li>
          </ul>
    </div>
  )
}

export default CuztumizeColor