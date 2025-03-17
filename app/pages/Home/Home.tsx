"use client"
import React from 'react'
import MaxHeader from '../../Components/HeaderComponents/MaxHeader'
import AboutUsComponent from '../../Components/AboutUsComponent'
import MessageComponent from '../../Components/MessageComponent'
import ServicesComponent from '../../Components/ServicesComponent'
import SpecialitiesComponent from '../../Components/SpecialitiesComponent'
import ActualityComponent from '../../Components/ActualityComponent'
import MemberComponent from '../../Components/MemberComponent'
import ContactComponent from '../../Components/ContactComponent'
import Footer from '../../Components/Footer'
import AnimatedDiv from '@/app/Components/Animation/AnimatedDiv'

function Home() {
  return (
    <>
      <AnimatedDiv><MaxHeader /></AnimatedDiv>
      <div className='flex items-center justify-center w-screen bg-white mt-8'><AboutUsComponent /></div> 
      <AnimatedDiv><MessageComponent /></AnimatedDiv>
      <AnimatedDiv><ServicesComponent /></AnimatedDiv>
      <AnimatedDiv><SpecialitiesComponent /></AnimatedDiv>
      <AnimatedDiv><ActualityComponent /></AnimatedDiv>
      <AnimatedDiv><MemberComponent /></AnimatedDiv>
      <AnimatedDiv><ContactComponent /></AnimatedDiv>
      <Footer />
    </>
  )
}

export default Home