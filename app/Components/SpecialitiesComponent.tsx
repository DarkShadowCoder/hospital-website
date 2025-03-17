import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'


interface ActualityBoxProps {
  icon: string;
  title: string;
  description: string;
}

export function SpecialityBox(props: ActualityBoxProps){
  return(
          <div className='text-left flex-col w-full lg:max-w-[700px] lg:w-[31%] min-w-[250px] lg:min-h-[200px] p-4 rounded-md items-center justify-between gap-8 bg-[#047424] shadow-sm shadow-gray-800'>
          <Image
          src={props.icon}
          alt='Services'
          width={50}
          height={50}
          className='my-4'
          />
          <h1 className='font-bold text-white text-[20px]'>
              {props.title}
          </h1>
          <h2 className='text-white text-[15px] font-thin'>
              {props.description}
          </h2>
      </div>
      )
}
function SpecialitiesComponent() {
  return (
    <div className='lg:flex items-center justify-center bg-white w-screen h-auto'>
      <div className='max-w-screen-xl w-full h-auto py-8 px-4'>
        <div className='h-auto lg:w-1/2 flex-col gap-4'>
          <SectionTitle title={"Nos Specialités"} />
          <h1 className='font-medium text-md text-[#D3D63F] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos autem repellendus impedit, aliquid temporibus! Voluptatibus beatae aut ab earum nesciunt, mollitia architecto similique, nemo dolorum eum vero fuga cum?</h1>
        </div>
        <div className='flex lg:flex-row flex-col flex-wrap h-auto gap-8'>
          <SpecialityBox
            icon={"/icon3.png"}
            title={"Consultation medicale"}
            description={"Nous prenons soin de votre ouïe, nez et gorge avec des diagnostics précis et des traitements adaptés. Que ce soit pour des infections, des troubles de l&apos;audition ou des problèmes respiratoires, notre équipe ORL vous accompagne avec expertise et attention."}
          />
          <SpecialityBox
            icon={"/icon4.png"}
            title={"Gastro-entérologie"}
            description={"Prenez soin de votre système digestif avec nos spécialistes en gastro-entérologie. De la digestion aux troubles intestinaux, nous vous offrons un diagnostic précis et des traitements adaptés pour votre confort et votre bien-être. "}
          />
          <SpecialityBox
            icon={"/icon5.png"}
            title={"Cardiologie"}
            description={"Prenez soin de votre cœur avec nos spécialistes en cardiologie. Nous offrons des consultations, des diagnostics précis et une prise en charge complète des maladies cardiovasculaires pour préserver votre bien-être et votre santé cardiaque. "}
          />
          <SpecialityBox
            icon={"/icon1.png"}
            title={"Santé mentale"}
            description={"Votre bien-être mental est essentiel. Nos spécialistes vous accompagnent avec écoute et bienveillance pour vous aider à surmonter le stress, l&apos;anxiété, la dépression et d’autres troubles psychologiques. Parce que prendre soin de son esprit, c’est aussi prendre soin de sa santé. "}
          />
          <SpecialityBox
            icon={"/icon2.png"}
            title={"Ophtalmologie"}
            description={"Voir clair, c’est essentiel ! Nos spécialistes vous accompagnent pour le diagnostic et le traitement des troubles visuels, afin de préserver votre santé oculaire et améliorer votre qualité de vie. "}
          />
          <SpecialityBox
            icon={"/icon6.png"}
            title={"Kinésithérapie"}
            description={"Retrouvez votre mobilité et soulagez vos douleurs grâce à nos experts en kinésithérapie. Que ce soit pour une rééducation, un renforcement musculaire ou un traitement post-traumatique, nous vous aidons à retrouver votre bien-être au quotidien."}
          />
        </div>
      </div>
    </div>
  )
}

export default SpecialitiesComponent