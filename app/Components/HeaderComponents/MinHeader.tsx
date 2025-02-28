"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import HiddenNavBar from './HiddenNavBar';
import Link from 'next/link';

function MinHeader(props) {
  const [hidden, setHidden] = useState(false)
  return (
    <div className='h-[350px] w-auto p-2 bg-white mb-10'>
      <div className='h-full w-full flex items-center justify-center'>
        <Image 
        src={"/image 10.png"}
        width={500}
        alt=''
        objectFit='contain'
        height={500}
        className='w-full h-full z-0 rounded-md'
        />
        <div className='z-10 absolute w-full top-0 p-4 flex-col items-center max-w-screen-2xl justify-between px-8'>
          <div className='flex items-center justify-between w-full h-[100px]'>
            <Image 
            src={"/logo-img.png"}
            width={75}
            height={75}
            alt='hopital regional Foumban'
            className='h-[50px] w-[50px] md:h-[70px] md:w-[70px]'
            objectFit='contain'
            />
            <div className='md:flex items-center gap-8 hidden'>
            <Link href="/" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>Accueil</Link>
          <Link href="/pages/Services" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>Services</Link>
          <Link href="/pages/Actuality" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>Actualités</Link>
          <Link href="/pages/Membres" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>Medecins</Link>
          <Link href="/pages/About" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>A propos</Link>
            </div>
            
            <a 
            href={"/pages/Contact"}
            className='text-[#fff] hidden md:flex justify-center items-center md:text-[22px] text-[15px] hover:text-[#D2D63F] transition duration-300 ease-linear text-center bg-[#047424] rounded-3xl w-[122px] px-6 h-[40px] md:min-w-[150px] md:w-auto md:px-6 md:h-[40px]'
            >
              Nous Contacter
            </a>
            <div
            className='flex flex-col gap-1 h-full w-auto p-2 items-center justify-center md:hidden cursor-pointer' 
            onClick={()=>setHidden(!hidden)}>
              <span className='flex w-6 h-1 rounded bg-white'></span>
              <span className='flex w-6 h-1 rounded bg-white'></span>
              <span className='flex w-6 h-1 rounded bg-white'></span>
            </div>
            {hidden&&<HiddenNavBar />}
          </div>
          <div className='w-full h-auto flex-col items-center justify-center text-center md:mt-10 mt-5'>
            <h1 className='md:text-[45px] text-[35px] font-bold text-white '>{props.title}</h1>
            <p className='text-white/75 md:text-[25px] text-md md:my-4 font-normal'>
              {props.description}
            </p>
          </div>
        </div>
      </div>
      </div>
      
  )
}

export default MinHeader