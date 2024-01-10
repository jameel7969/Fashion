import React from 'react'
import logo from '../Images/hImage.png'
import girlImage from '../Images/girlImage.png'

const HeroSection = () => {
    return (

        <section className='px-4 md:px-0'>
            <div className="w-full md:w-[85%] mx-auto mt-[50px] px-[20px] py-8 md:py-0 md:px-0 h-[400px] md:h-[600px] bg-neutral-100 rounded-[60px] flex">

                <div className='w-[500px] md:mr-[100px] h-[350px] flex-col md:mt-[100px] md:ml-[100px]'>

                    <div className=" text-black text-4xl md:text-6xl  font-black font-['Poppins'] px-[10px] bg-white w-fit transformPayDay">LET'S</div>
                    <div className=" text-black text-4xl md:text-6xl font-black font-['Poppins'] px-[10px] w-fit">EXPLORE</div>
                    <div className=" text-black text-4xl md:text-6xl font-black font-['Poppins'] bg-amber-300 px-[10px] w-fit" >UNIQUE</div>
                    <div className=" text-black text-4xl md:text-6xl font-black font-['Poppins'] px-[10px]" w-fit>CLOTHES.</div>
                    <p className="text-[20px] font-normal font-['Poppins'] px-[10px] mt-[10px] md:mt-[30px]">Live for Influential and Innovative fashion!</p>

                    <div className='flex items-center mt-[40px] gap-6'>
                        <img src={logo} alt="Leaf Image" className='w-[140px] md:w-[200px]'/>
                        <a href="#" className="text-white bg-black rounded-[5px] text-[13px] lg:text-2xl text-center font-medium font-['Poppins'] lg:p-[10px] px-[10px] py-[10px]">SHOP NOW</a>
                    </div>
                </div>

                {/* Right Section */}
                <div className='hidden md:block'>
                    <img src={girlImage} alt="" className='w-[600px] h-[600px]' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
