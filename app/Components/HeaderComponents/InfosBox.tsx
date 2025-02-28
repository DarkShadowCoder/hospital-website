import Image from 'next/image'
import React from 'react'

interface InfosBoxProps {
  icon: string;
  title: string;
  value: string;
}

function InfosBox(props: InfosBoxProps) {
  return (
    <div className='w-1/3 md:px-3 md:py-3 py-2 flex flex-col items-center gap-2 rounded-md md:m-4 m-2 md:min-w-[200px] md:min-h-[140px] min-w-[100px] min-h-[90px] text-center bg-white shadow-md shadow-zinc-800'>
      <Image
      src={props.icon}
      alt='hopital'
      width={40}
      height={40}
      className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'
      />
      <h1 className='md:text-[20px] text-[16px] text-black font-semibold'>
        {props.title}
      </h1>
      <h2 className='md:text-[18px] text-[12px] font-normal text-[#D3D63F]'>
        {props.value}
      </h2>
    </div>
  )
}

export default InfosBox