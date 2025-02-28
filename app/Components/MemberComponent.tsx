import React from 'react'
import MemberBox from './MemberComponents/MemberBox'
import SectionTitle from './SectionTitle'
import InfosBtn from './InfosBtn'

function MemberComponent() {
  return (
    <div className='md:flex relative z-0 block items-center justify-center bg-white h-screen w-screen'>
      <div className='max-w-screen-2xl w-full h-auto py-8 px-4'>
        <div className='h-auto lg:w-1/2 flex-col gap-4'>
          <SectionTitle title={"Decouvrez nos médecins"} />
          <h1 className='font-medium md:text-[18px] text-[15px] text-[#D3D63F] -mt-8 mb-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos autem repellendus impedit, aliquid temporibus! Voluptatibus beatae aut ab earum nesciunt, mollitia architecto similique, nemo dolorum eum vero fuga cum?</h1>
        </div>
        <div className='flex flex-wrap justify-between lg:gap-2 xl:gap-6  items-center w-full h-auto p-4 gap-2'>
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"OTO-RHINO-LARYNGOLOGISTE"}
          contact={"(237) 691244294 / 622455455"}
          mail={"ketoujaliliboy@gmail.com"}
          />
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"OTO-RHINO-LARYNGOLOGISTE"}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"OTO-RHINO-LARYNGOLOGISTE"}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
        </div>
        <div className='w-full flex items-center justify-center lg:mt-5'>
          <InfosBtn title={"Decouvrir plus"}/>
        </div>
      </div>
    </div>
  )
}

export default MemberComponent