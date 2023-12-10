import React from 'react'


const Personalisation = () => {
  return (
    <div className='w-full h-screen bg-white mt-32 pl-20 pr-20 flex justify-center items-center'>

      <div className='border w-full h-96 rounded-2xl bg-[#B8B8FF]/30 flex flex-col gap-5  justify-center px-5 '>
        <div><h1 className=' text-2xl'>Let’s make it personal</h1></div>
        <div><p className='text-xs text-slate-500 '>Select your interest to get suggestion based on what you want to learn</p></div>
        <div className=' w-full flex flex-wrap gap-7 justify-start items-center pt-5 cursor-pointer '> 
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>Java</div>
        <div className=' w-auto px-20 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>Java-script</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>React</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>GO</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>API</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>Python</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>NextJS</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>Kotlin</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>Java</div>
        <div className=' w-auto px-20 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>Java-script</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>React</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>GO</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>API</div>
        <div className=' w-auto px-10 h-10 rounded-full border-[#A0A0ED] flex justify-center items-center border'>Python</div>
        
        

        </div>
      </div>
    </div>
  )
}

export default Personalisation