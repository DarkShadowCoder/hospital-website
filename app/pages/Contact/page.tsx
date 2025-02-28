import React from 'react'
import MinHeader from '../../Components/HeaderComponents/MinHeader'
import ContactComponent from '../../Components/ContactComponent'
import Footer from '../../Components/Footer'

function ContactUs() {
  return (
    <div>
      <MinHeader
      title={"Contactez Nous"}
      description={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."}
      />
      <div className='flex flex-col w-full items-center justify-center px-4 gap-8 pb-8 md:pb-10 bg-white'>
          <div className='max-w-screen-2xl flex flex-col gap-8 items-center w-full'>
            <h1 className='text-black lg:text-4xl md:text-2xl text-[25px] text-center font-bold '>NUMEROS UTILES HOPITAL ANNEXE DE FOUMBAN</h1>
            <table className='w-full h-auto rounded'>
              <thead className='bg-zinc-500 w-full h-[60px] rounded flex flex-row justify-between items-center md:px-10 px-4'>
                <th className='text-black md:text-xl text-md font-semibold text-left w-1/3'>Responsables</th>
                <th className='text-black md:text-xl text-md font-semibold text-center w-1/3'>Orange</th>
                <th className='text-black md:text-xl text-md font-semibold text-right w-1/3'>MTN</th>
              </thead>
              <tbody className='w-full mt-8 '>
                <tr className='w-full flex flex-row justify-between items-center md:px-10 px-4 my-4'>
                  <td className='text-black md:text-xl text-md font-semibold text-left'>Directeur</td>
                  <td className='text-black md:text-xl text-md font-medium text-center w-1/3'>
                    <a 
                    href="tel:699 05 89 55" 
                    className="hover:text-[#d3d63f] ease-in-out duration-300 hover:transition-transform text-left"
                    >
                      699 05 89 55
                    </a>
                  </td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>
                    <a 
                    href="tel:699 05 89 55" 
                    className="hover:text-[#d3d63f] ease-in-out duration-300 hover:transition-transform text-left"
                    >
                      699 05 89 55
                    </a>
                  </td>
                </tr>
                <tr className='w-full flex flex-row justify-between items-center md:px-10 px-4 my-4'>
                  <td className='text-black md:text-xl text-md font-semibold text-left'>Directeur</td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>
                    <a 
                    href="tel:699 05 89 55" 
                    className="hover:text-[#d3d63f] ease-in-out duration-300 hover:transition-transform"
                    >
                      699 05 89 55
                    </a>
                  </td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>6 79 76 13 00</td>
                </tr>
                <tr className='w-full flex flex-row justify-between items-center md:px-10 px-4 my-4'>
                  <td className='text-black md:text-xl text-md font-semibold text-left'>Directeur</td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>
                    <a 
                    href="tel:699 05 89 55" 
                    className="hover:text-[#d3d63f] ease-in-out duration-300 hover:transition-transform"
                    >
                      699 05 89 55
                    </a>
                  </td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>6 79 76 13 00</td>
                </tr>
                <tr className='w-full flex flex-row justify-between items-center md:px-10 px-4 my-4'>
                  <td className='text-black md:text-xl text-md font-semibold text-left'>Directeur</td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>
                    <a 
                    href="tel:699 05 89 55" 
                    className="hover:text-[#d3d63f] ease-in-out duration-300 hover:transition-transform"
                    >
                      699 05 89 55
                    </a>
                  </td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>6 79 76 13 00</td>
                </tr>
                <tr className='w-full flex flex-row justify-between items-center md:px-10 px-4 my-4'>
                  <td className='text-black md:text-xl text-md font-semibold text-left'>Directeur</td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>
                    <a 
                    href="tel:699 05 89 55" 
                    className="hover:text-[#d3d63f] ease-in-out duration-300 hover:transition-transform"
                    >
                      699 05 89 55
                    </a>
                  </td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>6 79 76 13 00</td>
                </tr>
                <tr className='w-full flex flex-row justify-between items-center md:px-10 px-4 my-4'>
                  <td className='text-black md:text-xl text-md font-semibold text-left'>Directeur</td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>
                    <a 
                    href="tel:699 05 89 55" 
                    className="hover:text-[#d3d63f] ease-in-out duration-300 hover:transition-transform"
                    >
                      699 05 89 55
                    </a>
                  </td>
                  <td className='text-black md:text-xl text-md font-medium text-left'>6 79 76 13 00</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      <ContactComponent />
      <Footer />
    </div>
  )
}

export default ContactUs