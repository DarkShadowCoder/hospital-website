"use client";
import React from 'react'
import MinHeader from '../../Components/HeaderComponents/MinHeader'
import AboutUsComponent from '../../Components/AboutUsComponent'
import Footer from '../../Components/Footer'
import SectionTitle from '../../Components/SectionTitle'
import ActualityBox from '../../Components/ActualityComponents/ActualityBox'
import InfosBtn from '../../Components/InfosBtn'
import AnimatedDiv from '@/app/Components/Animation/AnimatedDiv';

function About() {
  return (
    <div>
      <MinHeader 
      title={"A propos de nous"}
      description={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."}
      />
      <AnimatedDiv>
        <div className='md:flex w-full items-center md:-mt-56 justify-center bg-white'>
          <AboutUsComponent />
        </div>
      </AnimatedDiv>
      <div className='flex w-full items-center justify-center bg-white'>
        <div className='text-left px-8 max-w-screen-xl flex flex-col items-baseline justify-center w-full'>
          <h1 className='text-black font-bold text-2xl my-4'>Historique et évolution</h1>
          <div className='text-black font-normal md:text-[18px] text-md my-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium labore architecto consectetur libero nam ipsa quis quos optio itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, illum ab rerum voluptas enim quisquam. Culpa vitae neque veritatis. Magnam, nisi voluptate doloremque assumenda reiciendis perferendis rem eius ex omnis?
            <ol className='list-disc'>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
            </ol>
          </div>

          <h1 className='text-black font-bold text-2xl my-4'>Loclisation et infrastructure</h1>
          <div className='text-black font-normal text-md md:text-[18px] my-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium labore architecto consectetur libero nam ipsa quis quos optio itaque esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem earum animi officiis, est, repellendus voluptatibus ipsa officia ullam, nulla alias similique reprehenderit veritatis omnis quam tempora architecto. Itaque, ipsam?
            <ol className='list-disc'>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
            </ol>
          </div>

          <h1 className='text-black font-bold text-2xl my-4'>Capacité et personnel</h1>
          <div className='text-black font-normal text-md md:text-[18px] my-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium labore architecto consectetur libero nam ipsa quis quos optio itaque esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore voluptatem, vel accusantium dolorem numquam asperiores mollitia quidem. Id quam beatae odio accusantium nobis sequi aliquam minus. Consectetur, obcaecati distinctio.
            <ol className='list-disc'>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
            </ol>
          </div>

          <h1 className='text-black font-bold text-2xl my-4'>Services offerts</h1>
          <div className='text-black font-normal text-md md:text-[18px] my-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium labore architecto consectetur libero nam ipsa quis quos optio itaque esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus, sit ipsa saepe hic aspernatur error odit accusamus, dolor reprehenderit, vel quaerat excepturi laborum beatae maiores iure nulla. Vitae, quo?
            <ol className='list-disc'>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
            </ol>
          </div>

          <h1 className='text-black font-bold text-2xl my-4'>Equipements et moyens logistiques</h1>
          <div className='text-black font-normal text-md md:text-[18px] my-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium labore architecto consectetur libero nam ipsa quis quos optio itaque esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum iste repellendus natus nam consequuntur omnis eveniet facere autem deserunt harum nobis nesciunt explicabo minus voluptate aliquid, esse molestiae quo?
            <ol className='list-disc'>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eos perspiciatis molestias. Dolores nesciunt alias et iure aperiam illo hic, eos labore.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center bg-white'>
        <div className='max-w-screen-xl w-full h-auto py-8 px-4'>
          <div className='h-auto lg:w-full flex-col gap-4'>
          <div className='flex flex-row justify-between items-center w-full'>
            <SectionTitle title={"Nos Actualités"} />
            <div className='lg:flex hidden items-start justify-start h-full px-8'>
              <InfosBtn  link="" title={"Toutes les Actualités"}/>
            </div>
          </div>
            
            <h1 className='font-medium md:w-1/2 md:min-w-[300px] px-4 text-md text-[#D3D63F] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos autem repellendus impedit, aliquid temporibus! Voluptatibus beatae aut ab earum nesciunt, mollitia architecto similique, nemo dolorum eum vero fuga cum?</h1>
          </div>
          <div className='flex flex-wrap justify-between items-center w-full h-auto p-4 gap-2'>
            <ActualityBox
            link={"/pages/ActualityItems"}
            image={"/act-img1.png"}
            badge={"visite"}
            title={"Visite de travail d'une delegation Gambienne"}
            date={"15 Decembre 2024 à 20h05"}
            />
            <ActualityBox
            link={"/pages/ActualityItems"}
            image={"/act-img2.png"}
            badge={"Annulation"}
            title={"Annulation des frais de magasinage"}
            date={"20 Janvier 2025 à 15h00"}
            />
            <ActualityBox
            link={"/pages/ActualityItems"}
            image={"/act-img3.png"}
            badge={"Séminaire"}
            title={"Séminaire annuel du reseau de femmes professionelles."}
            date={"02 Fevrier 2025 à 08h30"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About