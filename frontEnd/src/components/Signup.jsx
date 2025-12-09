import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className='flex h-screen items-center justify-center  '>
          <div id="my_modal_3" className='border-1 rounded-md p-4 '>
                    <div  className="">
                       
                     <div className='flex justify-between'>
                           <h3 className="font-bold text-lg">Signup</h3>
                        <h3 className='cursor-pointer'> <Link to={"/"}>✕</Link></h3>
                     </div>
                        {/* Name */}
                        <div className='mt-5 '>
                            <span>Name:</span>
                            <br />
                            <input type="text" placeholder='Enter your name' className='w-90 px-3 py-1 mt-3 border-1 rounded-md' />

                        </div>
                        {/* email */}
                        <div className='mt-5 '>
                            <span>Email:</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-90 px-3 py-1 mt-3 border-1 rounded-md' />

                        </div>
                        {/* password */}
                        <div className='mt-5 '>
                            <span>Password:</span>
                            <br />
                            <input type="password" placeholder='Enter your email' className='w-90 px-3 py-1 mt-3  border-1 rounded-md' />

                        </div>
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 rounded-md hover:bg-pink-700 duration-200 px-3 py-1'>Signup</button>
                            <p>Have account?<Link to={"/"} className='underline text-blue-500 cursor-pointer'>Login</Link></p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Signup