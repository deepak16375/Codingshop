import React from 'react'

const page = () => {
  return (
    <div className='w-full h-[1440px] pt-10 pl-10 pr-10 flex flex-col'>
        <div className='w-full h-screen  flex justify-center items-center gap-5 pl-5 pr-5'>
         <div className='w-[70%] h-[80%] flex flex-col items-center gap-2' >
         <div className='w-[100%] h-[100%] bg-slate-300 border rounded-lg flex justify-center items-center'>
            Stream
          </div>
          <div className='w-full h-[10%] '><h1 className='text-xl'>Title of the workshop | Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque.</h1></div>
         </div>
          <div className='w-[30%] h-[80%] border rounded-lg flex justify-center items-center bg-slate-200'>
            chat
          </div>
        </div>
       <div className='w-full h-[50%]  pl-5 flex flex-col gap-2'>
        <h1>Description:</h1>
        <div className='w-1/2 h-[80%] border bg-slate-200 rounded-lg'></div>
       </div>
    </div>
  )
}


export default page