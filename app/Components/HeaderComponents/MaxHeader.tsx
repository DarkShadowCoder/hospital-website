import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import InfosBox from './InfosBox'
import Link from 'next/link'

function MaxHeader() {
  
  return (
    <div className="w-full lg:h-screen max-h-screen h-[600px] mb-24 lg:mb-0">
      <Navbar />
      <div className='relative z-0 top-0 w-full h-full flex items-center'>
        <Image 
        src={"/hero-bg.png"}
        alt='hopital regional Foumban'
        width={1400}
        height={720}
        className='w-full h-full z-20'
        />
        <div className='absolute top-0 left-0 z-30 bg-black/45 h-full w-full flex flex-col items-center justify-between'>
          <h1 className='text-white sm:text-[35px] text-[25px] lg:text-[68px] pt-[100px] lg:pt-[250px] text-center max-w-screen-2xl font-extrabold  '>
            BIENVENUE A L&apos;HOPITAL REGIONAL ANNEXE DE FOUMBAN
          </h1>
          <p className='text-white/75 lg:text-[24px] sm:text-[18px] text-[14px] text-justify w-5/6 max-w-screen-xl'>
          À l&apos;Hôpital Régional Annexe de Foumban, nous nous engageons à vous offrir des soins de qualité, un accueil chaleureux et un accompagnement personnalisé.
          Chaque jour, notre équipe met tout en œuvre pour assurer votre bien-être, car votre santé est au cœur de nos préoccupations.
          </p>
          <div className="flex lg:flex-row flex-col flex-nowrap lg:gap-8 gap-4 items-center justify-center w-full lg:h-[50px] h-auto lg:mt-10 mt-14">
            <Link
            href={"/pages/Services"}
            className='min-w-[200px] h-[50px] px-6 flex items-center justify-center bg-[#047424] rounded-full lg:text-[20px] text-[15px] font-bold'>
              Nos Services
            </Link>
            <div className="font-bold lg:text-[24px] text-[15px] text-left border-b-2 border-b-white">
              <a href=""
              className="hover:text-[#D3D63F] cursor-pointer "
              >
              Decouvrir Notre Galerie
              </a>
            </div>
          </div>
          <div className='flex z-50 relative lg:top-16 top-[50] w-full lg:max-w-screen-2xl'>
            <InfosBox
            icon={"/sharp-call.png"} 
            title={"Contact"}
            value={"(237) 255865866"}
            />
            <InfosBox 
            icon={"/alarm.png"}
            title={"Heure d'ouverture"}
            value={"09:00 20:00:00 (7/7)"}/>
            <InfosBox 
            icon={"/position.png"}
            title={"Localisation"}
            value={"Foumban"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaxHeader