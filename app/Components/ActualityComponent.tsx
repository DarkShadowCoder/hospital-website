import React from 'react'
import SectionTitle from './SectionTitle'
import InfosBtn from './InfosBtn'
import ActualityBox from './ActualityComponents/ActualityBox'

function ActualityComponent() {
  return (
    <div className='z-0 m-0 lg:flex block items-center justify-center bg-white w-screen lg:h-screen h-auto mt-20 lg:mt-0'>
      <div className='max-w-screen-xl w-full h-auto py-8 px-4'>
        <div className='h-auto lg:w-1/2 flex-col gap-4'>
          <SectionTitle title={"Nos Actualités"} />
          <h1 className='font-medium lg:text-[18px] text-[15px] text-[#D3D63F] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos autem repellendus impedit, aliquid temporibus! Voluptatibus beatae aut ab earum nesciunt, mollitia architecto similique, nemo dolorum eum vero fuga cum?</h1>
        </div>
        <div className='flex flex-wrap justify-between items-center w-full h-auto lg:p-4 gap-2'>
          <ActualityBox
          link={"/pages/ActualityItems"}
          image={"/act-img1.png"}
          badge={"visite"}
          title={"Visite de travail d'une délégation gambienne au port autonome"}
          date={"15 Decembre 2024 à 20h05"}
          />
          <ActualityBox
          link={"/pages/ActualityItems"}
          image={"/act-img2.png"}
          badge={"Annulation"}
          title={"Annulation des frais de magasinage"}
          date={"21 Novembre 2024 à 20h 01"}
          />
          <ActualityBox
          link={"/pages/ActualityItems"}
          image={"/act-img3.png"}
          badge={"Séminaire"}
          title={"Séminaire annuel du reseau de femmes professionelles."}
          date={"12 Novembre 2024 à 19h 34"}
          />
        </div>
        <div className='w-full flex items-center justify-center mt-10'>
          <InfosBtn  link="" title={"Toutes les Actualités"}/>
        </div>
      </div>
    </div>
  )
}

export default ActualityComponent