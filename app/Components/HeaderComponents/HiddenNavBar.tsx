import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

function HiddenNavBar(props) {
  return (
    <div className='flex flex-col w-screen h-screen z-50 fixed top-0 left-0 backdrop-blur-sm justify-between items-center text-center text-black text-2xl font-extrabold px-8 py-10'>
        <div className='w-full h-auto  items-start justify-center '>
          <Image
          src={"/back-icon.png"}
          alt='hopital'
          width={95}
          height={95}
          className=''
          onClick={() => redirect("/")}
        />
        </div>
        <div className='flex flex-col justify-between items-center gap-8 w-full z-50'>
          <Link href="#" className='text-pretty font-extrabold text-[28px] hover:text-[#D2D63F] transition ease-in-out w-full h-auto my-6 hover:border-b-2 hover:border-b-[#D2D63F] hover:duration-300 transform'>Accueil</Link>
          <Link href="/pages/Services" className='text-pretty font-extrabold text-[28px] hover:text-[#D2D63F] transition ease-in-out w-full h-auto my-6 hover:border-b-2 hover:border-b-[#D2D63F] hover:duration-300 transform'>Services</Link>
          <Link href="/pages/Actuality" className='text-pretty font-extrabold text-[28px] hover:text-[#D2D63F] transition ease-in-out w-full h-auto my-6 hover:border-b-2 hover:border-b-[#D2D63F] hover:duration-300 transform'>Actualités</Link>
          <Link href="/pages/Membres" className='text-pretty font-extrabold text-[28px] hover:text-[#D2D63F] transition ease-in-out w-full h-auto my-6 hover:border-b-2 hover:border-b-[#D2D63F] hover:duration-300 transform'>Medecins</Link>
          <Link href="/pages/About" className='text-pretty font-extrabold text-[28px] hover:text-[#D2D63F] transition ease-in-out w-full h-auto my-6 hover:border-b-2 hover:border-b-[#D2D63F] hover:duration-300 transform'>A propos</Link>
        </div>
        <Link href="/pages/Contact" className='text-pretty font-extrabold text-[28px] hover:text-[#D2D63F] transition ease-in-out w-full h-auto  border-b-2 border-b-[#047424] hover:duration-300 transform'>Nous Contacter</Link>
    </div>
  )
}

export default HiddenNavBar