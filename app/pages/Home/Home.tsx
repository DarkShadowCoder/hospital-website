import React from 'react'
import MaxHeader from '../../Components/HeaderComponents/MaxHeader'
import AboutUsComponent from '../../Components/AboutUsComponent'
import MessageComponent from '../../Components/MessageComponent'
import ServicesComponent from '../../Components/ServicesComponent'
//import SpecialitiesComponent from '../Components/SpecialitiesComponent'
import ActualityComponent from '../../Components/ActualityComponent'
import MemberComponent from '../../Components/MemberComponent'
import ContactComponent from '../../Components/ContactComponent'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <>
      <MaxHeader />
      <div className='flex items-center justify-center w-screen bg-white mt-8'><AboutUsComponent /></div> 
      <MessageComponent />
      <ServicesComponent />
      <ActualityComponent />
      <MemberComponent />
      <ContactComponent />
      <Footer />
    </>
  )
}

export default Home