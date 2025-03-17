"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import HiddenNavBar from './HiddenNavBar';

function Navbar() {
  const [hidden, setHidden] = useState(false)
  return (
    <div className='z-20 fixed w-screen md:h-[100px] h-[65px] p-4 flex items-center justify-center bg-[#047424]'>
      <div className='flex items-center justify-between max-w-screen-xl w-full'>
        <Image 
        src={"/logo-white.png"}
        width={75}
        height={75}
        alt='hopital regional foumban'
        className='md:w-[75px] md:h-[75px] h-[25px] w-[25px]'
        objectFit='contain'
        />
        <div className='md:flex items-center gap-8 hidden'>
          <Link href="/" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>Accueil</Link>
          <Link href="/pages/Services" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>Services</Link>
          <Link href="/pages/Actuality" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>Actualités</Link>
          <Link href="/pages/Membres" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>Medecins</Link>
          <Link href="/pages/About" className='text-pretty font-semibold text-[22px] text-white hover:text-[#D2D63F] transition ease-linear'>A propos</Link>
        </div>

        <Link 
        href='/pages/Contact'
        className='text-[#047424] hidden md:flex text-[22px]  items-center justify-center hover:text-white transition duration-300 ease-linear text-center bg-[#D2D63F] rounded-md min-w-[150px] px-8 h-[50px]'
        >Nous Contacter</Link>
        <div
        className='flex flex-col gap-1 h-full w-auto p-2 items-center justify-center md:hidden' 
        onClick={()=>setHidden(!hidden)}>
          <span className='flex w-6 h-1 rounded bg-white'></span>
          <span className='flex w-6 h-1 rounded bg-white'></span>
          <span className='flex w-6 h-1 rounded bg-white'></span>
        </div>
        {hidden&&<HiddenNavBar />}
      </div>
    </div>
  )
}

export default Navbar