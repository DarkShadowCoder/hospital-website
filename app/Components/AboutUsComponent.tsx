import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

function AboutUsComponent() {
  return (
    <div className='bg-white md:pt-40 flex flex-col items-center justify-center max-w-screen-2xl h-auto p-5 mt-10'>
      <SectionTitle title={"A propos de nous"} />
      <div className='z-0 flex lg:flex-row flex-col-reverse md:gap-8 justify-center w-full h-full py-2 lg:min-h-[500px] md:pb-20 '>
        <div className='z-0 lg:text-left text-center items-center lg:items-start flex flex-col justify-between h-[370px] lg:h-full lg:w-1/2 md:gap-8 w-auto my-4 md:py-4'>
          <div className='flex flex-col gap-4'>
            <h1 className='md:text-[45px] text-2xl md:text-left md:leading-[45px] text-center text-[#047424] font-bold lg:max-w-[500px] h-[100px]'>
              Hopital Regional Annexe de Foumban
            </h1>
            <p className='w-full text-black font-medium md:text-[18px] text-[14px] text-justify'>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque voluptatem sint, ipsam laudantium iure id! Eaque, voluptatem nemo harum praesentium eos ipsa ipsam odio?
              Doloribus praesentium laudantium at veritatis porro.
              Lorem ipsum dolor sit amet consectetur adipisicing elit fugit blanditiis.
            </p>
          </div>
          <button 
            type="button"
            className='min-w-[150px] md:h-[50px] h-[40px] bg-[#047424] rounded-[25px] md:text-[24px] text-[18px] font-semibold px-8 hover:text-[#D3D63F] hover:transition duration-300 ease-in-out '
            >
            Savoir plus
          </button>
        </div>
        <Image
          src={"/about-img.png"}
          width={900}
          height={700}
          alt='hopital regional foumban'
          objectFit='contain'
          className='z-0 lg:w-1/2 w-full h-[370px] lg:h-full hover:blur-[0.5px] cursor-pointer transition-shadow hover:duration-300 ease-in-out '
        />
      </div>
    </div>
  )
}

export default AboutUsComponent