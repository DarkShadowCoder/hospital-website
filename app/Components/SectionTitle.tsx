import React from 'react'

function SectionTitle(props) {
  return (
    <div className='w-auto h-auto p-2 md:m-10 inline'>
      <div className='bg-[#D3D63F] max-w-[700px] z-0 h-[12px]'></div>
      <h1 className='lg:text-[50px] text-[25px] font-extrabold z-10 relative md:-top-16 -top-[37px] text-black text-center inline'>{props.title}</h1>
    </div>
  )
}

export default SectionTitle