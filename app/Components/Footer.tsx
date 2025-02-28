import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='text-white w-full bg-[#047424] md:h-[300px] h-auto flex justify-center items-center'>
      <div className='max-w-screen-2xl w-full p-8 xl:p-4 flex-col justify-between items-center'>
        <div className='bg-white/20 backdrop-blur-sm rounded-xl w-full md:h-[200px] h-auto p-8 flex md:flex-row flex-col justify-between items-center'>
          <Image
          src={"/logo-white.png"}
          width={50}
          height={50}
          alt='Hopital'
          className='md:w-[100px] md:h-[100px] w-[75px] h-[75px]'
          />
          <div className='flex flex-row md:w-1/2 gap-8 w-full h-full'>
            <div className='w-1/2 h-full flex-col gap-4'>
              <h1 className='font-bold text-lg text-left mb-4'>Liens utiles</h1>
              <div className='flex flex-col gap-3 w-auto text-left'>
                <a href="" className='text-md hover:text-[#047424]'>Contact</a>
                <a href="" className='text-md hover:text-[#047424]'>A Propos</a>
              </div> 
            </div>
            <div className='w-1/2 h-full flex-col gap-4'>
              <h1 className='font-bold text-lg text-left mb-4'>Contacts</h1>
              <div className='flex flex-col gap-3 w-auto text-left'>
                <a 
                  href=''
                  className=' text-[#047424] hover:text-white font-normal text-[15px] flex flex-nowrap gap-4 w-full'
                  >
                    <Image 
                    src={"/call.png"}
                    alt='contact'
                    width={20}
                    height={20}
                    className=''
                    />
                    <p className='text-left'>685268428 </p>
                  </a>
                  <a 
                  href=''
                  className=' text-[#047424] hover:text-white font-normal text-[15px] flex flex-nowrap gap-4 w-full'
                  >
                    <Image 
                    src={"/mail.png"}
                    alt='contact'
                    width={20}
                    height={20}
                    className=''
                    />
                    <p className='text-left'>wfhsnfijsf@gmail.com </p>
                  </a>
              </div> 
            </div>
          </div>
        </div>
        <div className='max-w-screen-2xl w-full h-auto flex md:flex-row flex-col items-center pt-4 justify-between'>
          <h1 className='text-[15px] text-center '>Copyright © 2024 Gainde 2000 | Tous droits réservés</h1>
          <div className='flex gap-2 '>
            <a href="">
              <Image
            src={"/facebook-logo.png"}
            alt=''
            width={35}
            height={35}
            className=''
            /></a>
            <a href="">
            <Image
            src={"/inst-logo.png"}
            alt=''
            width={35}
            height={35}
            className=''
            /></a>
            <a href="">
            <Image
            src={"/x-logo.png"}
            alt=''
            width={35}
            height={35}
            className=''
            /></a>
            <a href="">
              <Image
            src={"/linkedin-logo.png"}
            alt=''
            width={35}
            height={35}
            className=''
            /></a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer