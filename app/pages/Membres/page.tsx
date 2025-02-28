import React from 'react'
import MinHeader from '../../Components/HeaderComponents/MinHeader'
import SectionTitle from '../../Components/SectionTitle'
import MemberBox from '../../Components/MemberComponents/MemberBox'
import Footer from '../../Components/Footer'
import ContactComponent from '../../Components/ContactComponent'

function Members() {
  return (
    <div>
      <MinHeader
      title={"Nos Medecins"}
      description={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."}
      />
      <div className='flex flex-col w-full items-center justify-center px-4 gap-6 pb-8 md:pb-10 bg-white w-full'>
        <div className='z-0 max-w-screen-2xl flex items-center pt-4'>
          <SectionTitle title={"Nos Médecins"} />
        </div>
        <div className='flex flex-wrap justify-between max-w-screen-2xl items-center gap-8 w-full h-sreen'>
        <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"CHIRURGIE "}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"CHIRURGIE "}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"CHIRURGIE "}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"CHIRURGIE "}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"CHIRURGIE "}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"CHIRURGIE "}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"CHIRURGIE "}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
          <MemberBox
          image={"/medecin.png"}
          nom={"Pr. KETOU NTANDI YAYA JALIL"}
          specialite={"CHIRURGIE "}
          contact={"(237) 698073637/ 698073637"}
          mail={"ketoujaliliboy@gmail.com"}
          />
        </div>
      </div>
      <ContactComponent />
      <Footer />
    </div>
  )
}

export default Members