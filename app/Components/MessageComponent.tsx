import Image from 'next/image'
import React from 'react'

function MessageComponent() {
  return (
    <div className='flex z-0 items-center w-screen h-auto md:h-screen justify-center bg-neutral-300'>
      <div className='max-w-screen-2xl h-full py-14 flex flex-col md:flex-row lg:items-end  items-center justify-center lg:justify-between gap-4 '>
        <Image
        src={"/director.png"}
        alt='Directeur'
        width={800}
        height={750}
        className='md:w-[38%] w-[370] h-[400px] md:h-full z-0 lg:flex'
        objectFit='fill'
        />
        <div className='flex flex-col gap-4 md:w-[55%] w-full h-full justify-end px-4 md:px-0'>
          <div className='flex-col gap-2 text-justify px-2'>
            <Image src={"/quote-left-solid.png"}
            width={75}
            height={75}
            alt='mot du Directeur'
            className='w-[45px] h-[45px] md:w-[45px] md:h-[45px]'
            />
            <h1 className='text-[#047424] font-extrabold text-justify text-[35px] md:text-[48px] px-4'>Mot du directeur</h1>
            <p className='text-[#1B3B4F] text-[16px] md:text-md font-medium'>C&apos;est avec un immense honneur et un profond engagement que je vous souhaite la bienvenue sur le site officiel de l&apos;Hôpital Régional Annexe de Foumban (HRAF). Cette plateforme a été conçue pour vous fournir des informations essentielles sur nos services, nos infrastructures et notre engagement envers la santé et le bien-être de la population.
            </p>
          </div>
          <div className='md:border-l-2 border-l-[#047424] px-3 text-[16px]  text-justify font-medium text-[#1B3B4F]'>
            <p>C&apos;est avec un immense honneur et un profond engagement que je vous souhaite la bienvenue sur le site officiel de l&apos;Hôpital Régional Annexe de Foumban (HRAF). Cette plateforme a été conçue pour vous fournir des informations essentielles sur nos services, nos infrastructures et notre engagement envers la santé et le bien-être de la population.</p><br/>
            <p className='hidden md:block'>
            L&apos;HRAF est une institution de référence qui, depuis sa création, ne cesse d&apos;évoluer pour répondre aux besoins croissants en matière de soins de santé. Notre objectif principal est d&apos;offrir une prise en charge de qualité, accessible à tous, en mettant un accent particulier sur l&apos;humanisation des soins, la modernisation de nos équipements et l&apos;amélioration continue de nos services.</p>
              <p className='hidden md:block'>Notre équipe, composée de médecins spécialistes, généralistes, personnels paramédicaux et agents d&apos;appui, œuvre chaque jour avec professionnalisme et dévouement pour garantir une prise en charge efficace et personnalisée. Grâce au soutien de l&apos;État, des ONG partenaires et de la communauté, nous poursuivons nos efforts pour faire de l&apos;HRAF un pôle d&apos;excellence médicale dans la région de l&apos;Ouest Cameroun.</p><br/>
              <p className='hidden md:block'>Nous restons à votre écoute pour améliorer constamment notre offre de soins et répondre aux attentes de nos patients. Nous vous invitons à parcourir ce site afin de découvrir nos différentes spécialités, nos services et nos actualités. N&apos;hésitez pas à nous contacter pour toute information complémentaire.</p><br/>
              <p className='hidden md:block'>Ensemble, bâtissons un système de santé performant et accessible à tous !</p>
            <details className='md:hidden block -mt-16'>
              <summary className='text-[#047424] font-semibold cursor-pointer animate-pulse'>Afficher plus</summary>
              <p>
            L&apos;HRAF est une institution de référence qui, depuis sa création, ne cesse d&apos;évoluer pour répondre aux besoins croissants en matière de soins de santé. Notre objectif principal est d&apos;offrir une prise en charge de qualité, accessible à tous, en mettant un accent particulier sur l&apos;humanisation des soins, la modernisation de nos équipements et l&apos;amélioration continue de nos services.</p>
              <p>Notre équipe, composée de médecins spécialistes, généralistes, personnels paramédicaux et agents d&apos;appui, œuvre chaque jour avec professionnalisme et dévouement pour garantir une prise en charge efficace et personnalisée. Grâce au soutien de l&apos;État, des ONG partenaires et de la communauté, nous poursuivons nos efforts pour faire de l&apos;HRAF un pôle d&apos;excellence médicale dans la région de l&apos;Ouest Cameroun.</p><br/>
              <p>Nous restons à votre écoute pour améliorer constamment notre offre de soins et répondre aux attentes de nos patients. Nous vous invitons à parcourir ce site afin de découvrir nos différentes spécialités, nos services et nos actualités. N&apos;hésitez pas à nous contacter pour toute information complémentaire.</p><br/>
              <p>Ensemble, bâtissons un système de santé performant et accessible à tous !</p>
              
            </details> 
          </div>
          <div className='text-[#1B3B4F] px-2 mt-4'>
            <h1 className='font-bold text-[20px] text-[#1B3B4F]'>Pr. Njifou Njimah Amadou,</h1>
            <h2 className='text-[#1B3B4F] font-medium text-[16px]'>Directeur General</h2>
            <h2 className='text-[#1B3B4F] font-medium text-[16px]'>Hopital Regional de Foumban</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageComponent