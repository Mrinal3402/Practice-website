import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const Landingpage = () => {
  return (
    <div className='w-full h-screen pt-1'>
      <div className="textwrapper mt-40">
        {["we create","eye opening","presentations"].map((items,index)=>{
          return <div className="masker">  
           <div className="w-fit flex">
            {index===1 && (<div className='w-[8vw] h-[6vw]  rounded-md bg-green-400 relative top-[1.2vw] left-20 '></div>)}
             <h1 className='uppercase text-[9vw] px-20 leading-[8vw] tracking-tighter font-semibold'>{items}</h1>           
            </div>                 
        </div>
        })}
        
        
        
      </div>
      <div className="borderbottom border-t-2 border-zinc-700 mt-20 flex justify-between items-center py-5 px-20  " >
        {["random text1 ", "random text 2"].map((items,index)=><p className='text-md font-light tracking-tight leading-none'>{items}</p>)}
        <div className="start flex items-center gap-5">
        <div className='py-2 px-5 text-xs  border-[2px] border-zinc-950 rounded-full'>Button</div>
        <div className='w-10 h-10 rounded-full border-[2px] border-zinc-900 flex items-center justify-center'>
          <span className='rotate-90'>
            <FaArrowUpLong />

          </span>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Landingpage