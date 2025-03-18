import React, { useState } from 'react'

const About = () => {
    
    return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl  rounded-tr-3xl text-black'>
        <h1 className='text-[3vw] leading-[3.4vw] font-normal'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full border-t-[1px] mt-20 border-[#97a171]'></div>
        <div className="flex">

        <div className="w-1/2  mt-7 ">
        <h1 className='text-[3vw] ml-20'> Our Aporach</h1>
        <button  className=" ml-20 w-[10vw] h-[2.5vw] bg-slate-950 rounded-full flex justify-between items-center text-white  mt-5 px-3 py-2 gap-4">
            <h2 className='text-[1vw]'>Read More</h2>
            <div className="h-[0.7vw] w-[0.7vw] bg-white rounded-full "></div>
        </button>
        </div>
        <div className="w-1/2 mt-7">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG91ciUyMHdvcmt8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        </div>
    </div>
  )
}

export default About