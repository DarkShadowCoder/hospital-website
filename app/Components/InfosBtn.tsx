import React from 'react'

interface InfosProps {
  link: string;
  title: string ;
}
function InfosBtn(props : InfosProps) {
  return (
    <a
      href={props.link || ""} 
      className='min-w-[150px] w-auto h-[50px] bg-[#047424] rounded-[25px] hover:text-[#D3D63F] hover:transition duration-300 ease-in-out md:text-[20px] text-[18px] font-bold px-8 flex items-center justify-center cursor-pointer'
      >
      <h1>{props.title}</h1>
    </a>
  )
}

export default InfosBtn