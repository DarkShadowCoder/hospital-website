import Image from 'next/image'
import React from 'react'

function ContactComponent() {
  return (
    <div 
    id="contact"
    className='relative z-0 w-screen h-screen md:flex block md:m-0 items-center justify-center'>
      <Image
      src={"/image 10.png"}
      alt='Hopital regionale Foumban'
      width={1000}
      height={500}
      className='w-full h-full'
      />
      <div className='absolute z-0 md:z-30 top-0 left-0 flex flex-col items-center w-full h-full'>
        <div className="flex flex-col gap-8 justify-center items-center h-full w-full md:p-10">
          <h1 className='lg:text-3xl text-2xl font-extrabold text-white text-center'>
            Pour Tout Besoin d&apos;informations !
          </h1>
          <form 
          className='flex md:flex-row w-full flex-col justify-between md:rounded-xl backdrop-blur-sm bg-white/5 text-left p-5 gap-8 max-w-screen-2xl'
          action=""
          >
            <div className='md:w-1/2 w-full h-full flex flex-col items-center md:items-start'>
              <h1 className='text-black md:text-2xl text-xl font-bold mb-6'>Formulaire de Contact</h1>
              <div className='flex flex-col gap-2 w-full h-auto py-2'>
                <h1 className='text-white font-semibold md:text-lg text-md'>Prenom</h1>
                <input 
                type='text' 
                placeholder='Votre prénom'
                className='w-full h-10 text-sm rounded-md shadow-sm p-2 outline-none hover:border-b-4 hover:border-b-[#047424] hover:transition duration-300 text-black/65 text-md font-semibold bg-transparent/45'
                />
              </div>
              <div className='flex flex-col gap-2 w-full h-auto py-2'>
                <h1 className='text-white font-semibold md:text-lg text-md'>Nom</h1>
                <input 
                type='text' 
                placeholder='Votre Nom'
                className='w-full h-10 text-sm rounded-md shadow-sm p-2 outline-none hover:border-b-4 hover:border-b-[#047424] hover:transition duration-300 text-black/65 text-md font-semibold bg-transparent/45'
                />
              </div>
              <div className='flex flex-col gap-2 w-full h-auto py-2'>
                <h1 className='text-white font-semibold md:text-lg text-md'>Téléphone</h1>
                <input 
                type='number' 
                placeholder='Votre Telephone'
                className='w-full h-10 text-sm rounded-md shadow-sm p-2 outline-none hover:border-b-4 hover:border-b-[#047424] hover:transition duration-300 text-black/65 text-md font-semibold bg-transparent/45'
                />
              </div>
              <div className='flex flex-col gap-2 w-full h-auto py-2'>
                <h1 className='text-white font-semibold md:text-lg text-md'>Email</h1>
                <input 
                type='email' 
                placeholder='Votre Adresse mail'
                className='w-full h-10 text-sm rounded-md shadow-sm p-2 outline-none hover:border-b-4 hover:border-b-[#047424] hover:transition duration-300 text-black/65 text-md font-semibold bg-transparent/45'
                />
              </div>

              <div className='flex flex-col gap-2 w-full h-auto py-2'>
                <h1 className='text-white font-semibold md:text-lg text-md'>Message</h1>
                <input 
                type='text' 
                placeholder='Adressez-vous au personnel ici !! '
                className='w-full h-10 text-sm rounded-md shadow-sm p-2 outline-none hover:border-b-4 hover:border-b-[#047424] hover:transition duration-300 text-black/65 text-md font-semibold bg-transparent/45'
                />
              </div>

              <button 
              className='w-[160px] md:h-[50] h-[40] rounded bg-[#047424] md:p-4 text-white font-bold text-md text-center mt-10 '
              type="submit">
                Envoyer
              </button>
            </div>
            <div className='w-1/2 h-full md:flex flex-col hidden'>
              <h1 className='text-black text-2xl font-bold mb-6'>Nos Coordonnées</h1>
              <div className='flex flex-col items-center justify-between w-full h-full'>
                <div className='flex flex-col gap-6 items-center w-full text-left text-white font-semibold text-md'>
                  <div className='w-full flex flex-row flex-nowrap gap-6 items-center'>
                    <Image
                    src={"/mail-icon.png"}
                    alt='Foumban'
                    width={50}
                    height={50}
                    />
                    <a 
                    className='text-xl' 
                    href="mailto:contact@hopitalfoumban.com">contact@hopitalfoumban.com</a>
                  </div>
                  <div className='w-full flex flex-row flex-nowrap gap-6 items-center'>
                    <Image
                    src={"/call-icon.png"}
                    alt='Foumban'
                    width={50}
                    height={50}
                    />
                    <a 
                    className='text-xl' 
                    href="tel:+237 33 922 455">+237 33 922 455</a>
                  </div>
                  <div className='w-full flex flex-row flex-nowrap gap-6 items-center'>
                    <Image
                    src={"/position-icon.png"}
                    alt='Foumban'
                    width={50}
                    height={50}
                    />
                    <a 
                    className='text-xl' 
                    href="">Foumban</a>
                  </div>
                </div>
                <Image 
                alt='Carte Foumban'
                src={"/map.png"}
                width={500}
                height={500}
                className='rounded w-full h-[220px]'
                />
              </div>
            </div>
          </form>
        </div>
        </div>
        
    </div>
  )
}

export default ContactComponent