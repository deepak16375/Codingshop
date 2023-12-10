import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full h-screen pl-20 pr-20 flex justify-center items-center'>

    <div className='w-full h-[60%] border bg-[#B8B8FF]/30  rounded-3xl flex'>
      <div className='w-1/2 h-full  rounded-3xl rounded-r-none flex justify-center items-center'><h1 className=' text-5xl w-[80%]'>Level Up Your Coding Skills, Subscribe for <span className='text-[#9381FF]'> Workshop </span> Details straight to your inbox!</h1></div>
      <div className='w-1/2 h-full rounded-3xl rounded-l-none flex justify-center items-center'>
        <div className='w-auto border border-[#A0A0ED] p-4 px-10 rounded-full flexjustify-between'>
          <input type="email" name="" id="" placeholder='enter your email' className='p-2 focus:outline-none bg-transparent '/>
          <button className='bg-[#9381FF] rounded-full text-white p-2 px-5 '>Subscribe</button>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default Newsletter