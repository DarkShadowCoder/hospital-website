"use client";
import React from "react";
import Navbar from "../../Components/HeaderComponents/Navbar";
import Footer from "../../Components/Footer";
import Image from "next/image";
import AnimatedDiv from "@/app/Components/Animation/AnimatedDiv";

function ActualityItems() {
  return (
    <div>
      <AnimatedDiv>
        <Navbar />    
      </AnimatedDiv>
      <AnimatedDiv>
            <div className="w-screen pb-14 h-auto flex items-center justify-center pt-[150px]">
          <div className="w-full h-auto max-w-screen-xl flex flex-col p-4 text-black text-justify">
            <div className="flex flex-col-reverse md:flex-row flex-wrap h-auto w-full">
              <p className="flex flex-col gap-4 px-4 md:w-1/2 w-full h-full">
                <h1 className="md:text-[26px] text-[24px] font-bold text-center">
                  Hopital Regional Annexe de Foumban : Le nouveau directeur prend
                  service
                </h1>
                <p className="text-[17px] font-normal">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
                  null nulla null Lorem ips lorem ipsum dolor sit amet,
                  consectetur adipiscing elit sapien null nulla null Lorem ips
                  lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
                  null nulla null Lorem ips lorem ipsum dolor sit amet,
                  consectetur adipiscing elit sapien null nulla null Lorem ips
                  lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
                  null nulla null Lorem ips
                </p>
              </p>
              <Image
                src={"/image 12.png"}
                alt="Image"
                width={700}
                height={300}
                className="md:h-[400px] md:w-auto w-full "
              />
            </div>
            <div className="h-full flex flex-wrap text-[17px] font-normal p-4">
              lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null
              nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ip lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
              null nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ips lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
              null nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ips lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
              null nulla null Lorem ips
              <br />
              <br />
              lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null
              nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ips lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
              null nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ips lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips
              <br />
              <br />
              lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null
              nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ips lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
              null nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ips lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
              null nulla null Lorem ips
              <br />
              <br />
              lorem ipsum dolor sit amet, consectetur adipiscing elit sapien null
              nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ips lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
              null nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ips lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
              null nulla null Lorem ips lorem ipsum dolor sit amet, consectetur
              adipiscing elit sapien null nulla null Lorem ips lorem ipsum dolor
              sit amet, consectetur adipiscing elit sapien null nulla null Lorem
              ips lorem ipsum dolor sit amet, consectetur adipiscing elit sapien
              null nulla null Lorem ips
            </div>
          </div>
        </div>    
      </AnimatedDiv>
      <AnimatedDiv>
          <Footer />    
      </AnimatedDiv>
      
    </div>
  );
}

export default ActualityItems;
