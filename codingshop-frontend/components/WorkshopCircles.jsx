import { javascript,java,go,api,react,nodejs,python } from '@/public'
import Image from 'next/image'
import React from 'react'

const WorkshopCircles = () => {
  return (
    <div className='w-full h-48 flex gap-10 justify-center items-center bg-white flex-wrap '>
       <div className='flex flex-col justify-center items-center'>
       <div className=' w-40 h-40 rounded-full border border-[#B6BBC4]  flex justify-center items-center'>
        <Image src={javascript} width={60} height={60}/>
       </div>
       <p>Java-script</p>
       </div>
       <div className='flex flex-col justify-center  items-center'>
       <div className=' w-40 h-40 rounded-full border border-[#B6BBC4] flex justify-center items-center'>
        <Image src={api} width={60} height={60}/>
       </div>
       <p>API</p>
       </div>
       <div className='flex flex-col justify-center items-center'>
       <div className=' w-40 h-40 rounded-full border border-[#B6BBC4] flex justify-center items-center'>
        <Image src={react} width={60} height={60}/>
       </div>
       <p>React</p>
       </div>
       <div className='flex flex-col justify-center items-center'>
       <div className=' w-40 h-40 rounded-full border border-[#B6BBC4] flex justify-center items-center'>
        <Image src={nodejs} width={60} height={60}/>
       </div>
       <p>Node-js</p>
       </div>
       <div className='flex flex-col justify-center items-center'>
       <div className=' w-40 h-40 rounded-full border border-[#B6BBC4] flex justify-center items-center'>
        <Image src={java} width={60} height={60}/>
       </div>
       <p>Java</p>
       </div>
       <div className='flex flex-col justify-center items-center'>
       <div className=' w-40 h-40 rounded-full border border-[#B6BBC4] flex justify-center items-center'>
        <Image src={go} width={60} height={60}/>
       </div>
       <p>GO</p>
       </div>
       <div className='flex flex-col justify-center items-center'>
       <div className=' w-40 h-40 rounded-full border border-[#B6BBC4] flex justify-center items-center'>
        <Image src={python} width={60} height={60}/>
       </div>
       <p>Python</p>
       </div>
     
    </div>
  )
}

export default WorkshopCircles