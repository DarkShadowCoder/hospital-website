import Image from 'next/image'
import React from 'react'
import SectionTitle from './SectionTitle'
import ServicesBox from './ServicesComponents/ServicesBox'
import InfosBtn from './InfosBtn'

function ServicesComponent() {
  return (
    <div className='z-0 md:flex block items-center justify-center w-screen h-screen bg-white md:mt-20 m-0'>
      <div className='max-w-screen-2xl w-full h-full py-16 px-4'>
        <div className='h-auto lg:w-[60%] flex-col gap-4'>
          <SectionTitle title={"Nos Services Hospitaliers"} />
          <h1 className='font-medium md:text-[18px] text-[15px] text-[#D3D63F] md:-mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos autem repellendus impedit, aliquid temporibus! Voluptatibus beatae aut ab earum nesciunt, mollitia architecto similique, nemo dolorum eum vero fuga cum?</h1>
        </div>
        <div className='w-full flex lg:flex-row justify-between items-center'>
          <div className='w-full lg:min-w-[700px] lg:h-auto flex gap-4 md:flex-nowrap items-center flex-wrap lg:flex-wrap pt-8 md:pt-'>
            <ServicesBox
            icon={"/placeholder1.png"}
            pair={true}
            title={"Consultation medicale"}
            description={"lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null nulla null Lorem ips"}
            />
            <ServicesBox
            icon={"/placeholder2.png"}
            pair={false}
            title={"Medecine Generale"}
            description={"lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null nulla null Lorem ips"}
            />
            <ServicesBox
            icon={"/placeholder3.png"}
            pair={false}
            title={"Urgence"}
            description={"lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null nulla null Lorem ips"}
            />
            <ServicesBox
            icon={"/placeholder4.png"}
            pair={true}
            title={"Chirurgie"}
            description={"lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null nulla null Lorem ips"}
            />
          </div>
          <Image
            src={"/service-img.png"}
            alt=''
            width={800}
            height={500}
            className='w-[60%] h-full hidden lg:flex'
          />
        </div>
        <div className='w-full flex items-center justify-center mt-10'>
          <InfosBtn  link="" title={"Tous les services"}/>
        </div>
      </div>
    </div>
  )
}

export default ServicesComponent