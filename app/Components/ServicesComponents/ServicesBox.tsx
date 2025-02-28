import Image from 'next/image'
import React from 'react'

function ServicesBox(props) {
  return (
    (props.pair&&
    <div className='text-left flex-col sm:w-full min-w-[250px] lg:min-h-[175px] lg:w-96 p-6 rounded-md items-start justify-between bg-white shadow-sm shadow-gray-800'>
        <Image
        src={props.icon}
        alt='Services'
        width={50}
        height={50}
        className='w-[50] h-[50] md:w-[50] md:h-[50]'
        />
        <h1 className='font-bold text-black'>
            {props.title}
        </h1>
        <h2 className='text-black md:text-md text-sm font-normal'>
            {props.description}
        </h2>
    </div>
    )
    ||
    (
    <div className='text-left flex-col sm:w-full min-w-[250px] lg:min-h-[175px] lg:w-96 p-6 rounded-md items-start justify-between md:bg-[#047424] shadow-sm shadow-gray-800 bg-white text-black md:text-white'>
        <Image
        src={props.icon}
        alt='Services'
        width={50}
        height={50}
        className='w-[40] h-[40] md:w-[50] md:h-[50]'
        />
        <h1 className='font-bold '>
            {props.title}
        </h1>
        <h2 className='md:text-md text-sm font-normal'>
            {props.description}
        </h2>
    </div>
    )
    
  )
}

export default ServicesBox