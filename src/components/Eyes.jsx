import React, { useEffect, useState } from 'react'

const eyes = () => {

        const [rotate,setrotate]=useState(0);

        useEffect(()=>{
                window.addEventListener("mousemove",(e)=>{
                        let mouseX=e.clientX;
                        let mouseY=e.clientY;

                        let deltax= mouseX - window.innerWidth/2;
                        let deltay=mouseY - window.innerHeight/2;

                        let angle= Math.atan2(deltay,deltax)*(180/Math.PI)

                        setrotate(angle-180);

                })
        })
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div className=" relative img w-full h-full bg-cover bg-center bg-[url('https://ochi.design//wp-content//uploads//2022//05//Top-Viewbbcbv-1-1440x921.jpg')]">
             <div className="absolute w-1/3   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center gap-7">
              
                <div className="bg-slate-50 h-48 w-48 rounded-full flex justify-center items-center">
                        <div className=" relative h-32 w-32 bg-black  rounded-full ">
                                        
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="bar absolute top-1/2 left-1/2 -translate-x[50%] -translate-y-[50%] w-full  ">
                                         <div className="bg-slate-50 h-6 w-6 rounded-full z-10"></ div>

                                </div>

                        </div>
                </div>
                <div className="bg-slate-50 h-48 w-48 rounded-full flex justify-center items-center">
                        <div className="h-32 w-32 bg-black  rounded-full relative">
                                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" bar absolute top-1/2 left-1/2 -translate-x[50%] -translate-y-[50%] w-full  ">
                                         <div className="bg-slate-50 h-6 w-6 rounded-full z-10"></ div>

                                </div>

                        </div>

                </div>
             </div>
        </div>
    </div>
  )
}

export default eyes