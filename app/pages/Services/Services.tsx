import React from 'react'
import MinHeader from '../../Components/HeaderComponents/MinHeader'
import SectionTitle from '../../Components/SectionTitle'
import ServicesBox from '../../Components/ServicesComponents/ServicesBox'
import Footer from '../../Components/Footer'

function Services() {
  return (
    <div>
      <MinHeader
      title={"Nos Services"}
      description={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."}
      />
      <div className='flex flex-col w-full items-center justify-center px-4 gap-8 pb-8 md:pb-10 bg-white'>
        <div className='max-w-screen-2xl flex items-center'>
          <SectionTitle title={"Nos Services"} />
        </div>
        <div className='grid md:grid-cols-3 xl:grid-cols-4 grid-rows-3 gap-4 '>
          <ServicesBox 
          icon={"/placeholder1.png"}
          title="Consultation médicale"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam vel? Dolor quae magni necessitatibus unde deleniti sequi rem voluptas impedit laudantium vero vitae temporibus, doloribus ut mollitia, delectus error!"}
          pair={true}
          />
          <ServicesBox 
          icon={"/placeholder2.png"}
          title="Médecine Générale"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam vel? Dolor quae magni necessitatibus unde deleniti sequi rem voluptas impedit laudantium vero vitae temporibus, doloribus ut mollitia, delectus error!"}
          pair={true}
          />
          <ServicesBox 
          icon={"/placeholder3.png"}
          title="Urgences"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam vel? Dolor quae magni necessitatibus unde deleniti sequi rem voluptas impedit laudantium vero vitae temporibus, doloribus ut mollitia, delectus error!"}
          pair={true}
          />
          <ServicesBox 
          icon={"/placeholder4.png"}
          title="Chirurgie"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam vel? Dolor quae magni necessitatibus unde deleniti sequi rem voluptas impedit laudantium vero vitae temporibus, doloribus ut mollitia, delectus error!"}
          pair={true}
          />
          <ServicesBox 
          icon={"/placeholder1.png"}
          title="Consultation médicale"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam vel? Dolor quae magni necessitatibus unde deleniti sequi rem voluptas impedit laudantium vero vitae temporibus, doloribus ut mollitia, delectus error!"}
          pair={true}
          />
          <ServicesBox 
          icon={"/placeholder2.png"}
          title="Médecine Générale"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam vel? Dolor quae magni necessitatibus unde deleniti sequi rem voluptas impedit laudantium vero vitae temporibus, doloribus ut mollitia, delectus error!"}
          pair={true}
          />
          <ServicesBox 
          icon={"/placeholder3.png"}
          title="Urgences"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam vel? Dolor quae magni necessitatibus unde deleniti sequi rem voluptas impedit laudantium vero vitae temporibus, doloribus ut mollitia, delectus error!"}
          pair={true}
          />
          <ServicesBox 
          icon={"/placeholder4.png"}
          title="Chirurgie"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam vel? Dolor quae magni necessitatibus unde deleniti sequi rem voluptas impedit laudantium vero vitae temporibus, doloribus ut mollitia, delectus error!"}
          pair={true}
          />
          <ServicesBox 
          icon={"/placeholder2.png"}
          title="Méddecine Générale"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam vel? Dolor quae magni necessitatibus unde deleniti sequi rem voluptas impedit laudantium vero vitae temporibus, doloribus ut mollitia, delectus error!"}
          pair={true}
          />
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Services