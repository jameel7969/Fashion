import React from 'react'
import logo from '../Images/Vector.png'
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className='flex justify-between w-full lg:w-[90%] p-4 mx-auto items-center'>

      {/* Left Section */}
      <div className='flex items-center gap-1 md:gap-2'>
        <img src={logo} alt="Logo" className='w-[25px] md:w-[40px]' />
        <h1 className="text-black text-[24px] lg:text-[40px] font-black font-['Poppins'] tracking-wide cursor-pointer">Fashion </h1>
      </div>

      {/* Right Section */}

      <div>
        <div className='block md:hidden text-3xl'>
          <CiMenuBurger />
        </div>
        <div className="w-[95%] h-9 hidden md:flex justify-center items-center gap-[25px] lg:gap-[140px] ">
          <a href="#" className=" text-neutral-800 lg:text-[22px] font-medium font-['Poppins'] tracking-tight">CATALOGUE</a>
          <a href="#" className="text-neutral-800 lg:text-[22px] font-medium font-['Poppins'] tracking-tight">FASHION </a>
          <a href="#" className=" text-neutral-800 lg:text-[22px] font-medium font-['Poppins'] tracking-tight">FAVOURITE</a>
          <a href="#" className=" text-neutral-800 lg:text-[22px] font-medium font-['Poppins'] tracking-tight">LIFESTYLE</a>
          <a href="#" className="text-white bg-black rounded-[5px] lg:text-2xl md:text-xl font-medium font-['Poppins'] px-[15px] py-[10px]">SIGNUP</a>
        </div>
      </div>

    </div>
  )
}

export default NavBar
