"use client";
import React from 'react'
import Image from 'next/image'
import MinHeader from '../../Components/HeaderComponents/MinHeader'
import ActualityBox from '../../Components/ActualityComponents/ActualityBox'
import Footer from '../../Components/Footer'
import ContactComponent from '../../Components/ContactComponent'
import Link from 'next/link'
import { motion } from "framer-motion";

function Actuality() {
  return (
    <div>
      <MinHeader
      title={"Decouvrez toutes les actualités"}
      description={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."}
      />
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:h-screen h-auto md:flex flex-col items-center justify-center pb-10 md:pb-0"
        >
        <a 
        href=""
        className='flex md:flex-row flex-col text-left cursor-pointer justify-between items-center w-full max-w-screen-xl bg-white/50 h-auto px-4 py-2 shadow-md rounded'>
          <Image
          src="/image 12.png"
          width={300}
          height={300}
          className='md:h-[350px] md:w-[450px] h-[200] w-full m-4'
          alt='Actualités'
          />
          <div className="flex flex-col justify-between text-left h-full py-2">
            <h1 className='max-w-28 w-auto bg-[#047424] text-white font-normal text-md rounded px-6 my-4'>
              visite
            </h1>
            <h1 className='text-black font-bold md:text-[25px] text-[20px]'>
              Hopital Regional Annexe de Foumban : Le nouveau directeur prend fonction
            </h1>
            <h2 className='text-black/80 font-medium md:text-[16px] text-[14px]'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null nulla null Lorem ips
              lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null nulla null Lorem ips
              lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null nulla null Lorem ips
              lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null nulla null Lorem ips
              lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null nulla null Lorem ips
            </h2>
            <div className="flex flex-row justify-between items-center">
              <p className='text-gray-800/50 font-normal md:text-md text-sm'>
                15 Decembre 2024 à 20h05
              </p>
              <Link 
                href='/pages/ActualityItems'
                className="text-black/70 md:text-[16px] text-[14px] font-bold hover:text-[#047424]"
              > En savoir plus
              </Link>
            </div>
            
          </div>
        </a>
        </motion.div>
        <div className='flex flex-wrap justify-between items-center w-screen max-w-screen-xl h-auto py-4 gap-2'>
          <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          ><ActualityBox
            image={"/act-img1.png"}
            badge={"visite"}
            link={"/pages/ActualityItems"}
            title={"Visite de travail d'une délégation gambienne au port autonome"}
            date={"15 Decembre 2024 à 20h05"}
            />
          </motion.div>
          
          <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          ><ActualityBox
            image={"/act-img2.png"}
            badge={"Annulation"}
            link={"/pages/ActualityItems"}
            title={"Annulation des frais de magasinage"}
            date={"21 Novembre 2024 à 20h 01"}
            />
          </motion.div>
            
          <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          >
          <ActualityBox
            image={"/act-img3.png"}
            badge={"Séminaire"}
            link={"/pages/ActualityItems"}
            title={"Séminaire annuel du reseau de femmes professionelles."}
            date={"12 Novembre 2024 à 19h 34"}
          />
          </motion.div>
            
        </div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          >
            <ContactComponent />
          </motion.div>
      
      <Footer />
    </div>
  )
}

export default Actuality