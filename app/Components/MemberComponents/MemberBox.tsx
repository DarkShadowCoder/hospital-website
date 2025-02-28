import Image from 'next/image'
import React from 'react'

function MemberBox(props) {
  return (
    <button 
      className='flex flex-col text-left cursor-pointer justify-between items-center md:w-[32%] lg:max-w-[320px] sm:min-w-[300px] w-full md:h-auto h-[400px] bg-neutral-200 rounded-[20px] pb-2'>
        <Image
        src={props.image}
        width={300}
        height={300}
        className=' rounded-t-[20px] w-full h-[200px] sm:h-[300px]'
        alt='Membres'
        />
        <h1 className='text-[#047424] font-bold md:text-[20px] text-[18px] text-center sm:my-2 px-2'>
          {props.nom}
        </h1>
        <h1 className='text-black font-bold md:text-[18px] text-[16px] text-center sm:my-2'>
          {props.specialite}
        </h1>
        <div className='flex flex-col gap-2 items-center justify-center p-2'>
          <a 
          href=''
          className=' text-[#047424] font-normal text-[15px] flex flex-nowrap gap-4 w-full px-6'
          >
            <Image 
            src={"/call.png"}
            alt='contact'
            width={15.2}
            height={15}
            className=''
            />
            <p className='text-left'>{props.contact} </p>
          </a>
          <a 
          href='mailto'
           className=' text-[#047424] font-normal text-[15px] flex flex-nowrap gap-4 w-full px-6 my-1'
          >
            <Image 
            src={"/mail.png"}
            alt='mail'
            width={15.2}
            height={15}
            className=''
            />
            <p className='text-left'>{props.mail} </p>
          </a>
        </div>
      </button>
  )
}

export default MemberBox