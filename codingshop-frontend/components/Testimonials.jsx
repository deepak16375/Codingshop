import { user1, user2 } from '@/public'
import Image from 'next/image'
import React from 'react'
const Testimonials = () => {
  return (
    <div class="wrapper" className=' w-full h-screen flex flex-col justify-center items-center gap-10 '>
  <div className='flex flex-col gap-4 justify-center items-center'>
  <h1>Testimonials</h1>
    <h2 className='text-5xl text-[#9381FF]'> What they say</h2>
    <p className='text-xs'>Read what previous workshop attendees and hosts have to say about us</p>

  </div>
    <div className="cards">
        <div className="card">
            <Image src={user1} alt=""/>
            <p>I recently had the pleasure of using this website's services and I couldn't be more impressed. From start to finish, the experience was seamless.</p>
            <h4>Ritika Sharma</h4>
           

        </div>

        <div className="card">
            <Image src={user2} alt=""/>
            <p>The app development team delivered an exceptional product with their professionalism, expertise, and commitment to quality.</p>
            <h4>Deepak Kumar</h4>
            
            
        </div>

        <div className="card">
            <Image src={user1}alt=""/>
            <p>This UI/UX team did an exceptional job with their attention to detail, expertise, and creativity, resulting in an outstanding user experience.</p>
            <h4>Chenika</h4>
           
            
        </div>

    </div>
</div>
    
  )
}

export default Testimonials