import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ActualityBox(props) {
  return (
    <Link 
    href={props.link}
    className='flex-col text-left cursor-pointer justify-between items-center md:w-[32%] w-full bg-white/50 h-auto sm:h-[400px] px-4 py-2 shadow-md rounded'>
      <div className='flex-col items-center h-[95%] gap-4 w-full'>
        <Image
        src={props.image}
        width={300}
        height={300}
        className='w-full h-[200px] sm:h-[200px]'
        alt='Actualités'
        />
        <h1 className='max-w-28 w-auto px-2 py-1 bg-[#047424] text-white font-normal text-md rounded my-4 md:px-6'>
          {props.badge}
        </h1>
        <h1 className='text-black font-bold md:text-[18px] text-[16px] pb-6 md:pb-0'>
          {props.title}
        </h1>
      </div>
      <p className='text-gray-800/50 font-normal md:text-md text-sm'>
        {props.date}
      </p>
    </Link>
  )
}

export default ActualityBox