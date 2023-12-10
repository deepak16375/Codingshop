import { create, host, promote } from '@/public'
import Image from 'next/image'
import React from 'react'

const HostWorkshop = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-20 pl-20 pr-20 '>
        <div className='pt-20 text-xl'> <h1>Discover</h1></div>
        <div className=' text-center'><h1 className=' text-5xl text-[#9381FF]'>Host Your Own Coding Workshop <br /> Today!</h1></div>
        <div className='flex gap-20'>
            <div className=' w-56 h-52 flex flex-col justify-center items-center '>
            <Image src={create} width={40} height={40}/>
            <h1 className='text-center'>Step 1: Create Workshop Listing</h1>
            <p className='text-[10px] text-center text-slate-400'>Start by creating a detailed listing for your workshop, including the topic, date, time, and any prerequisites. This will help potential participants understand what your workshop is all about.</p>
            </div>
            <div className=' w-52 h-52 flex flex-col justify-center items-center '>
            <Image src={promote} width={50} height={50}/>
            <h1 className='text-center'>Step 2: Promote Your Workshop</h1>
            <p className='text-[10px] text-center text-slate-400'>Spread the word about your workshop through social media, email newsletters, and online communities. The more people you reach, the higher the chances of attracting participants.</p>
            </div>
            <div className=' w-52 h-52 flex flex-col justify-center items-center '>
            <Image src={host} width={50} height={50}/>
            <h1 className='text-center'>Step 3: Host Your Workshop</h1>
            <p className='text-[10px] text-center text-slate-400'>On the day of your workshop, make sure you're well-prepared and ready to share your knowledge. Create a welcoming and inclusive environment for all participants.</p>
            </div>
            
        </div>
        <div>
            <button className='bg-[#9381FF] text-white px-4 py-3 rounded-xl'>Get started</button>
        </div>
    </div>
  )
}

export default HostWorkshop