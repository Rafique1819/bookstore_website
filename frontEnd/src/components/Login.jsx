import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* email */}
                        <div className='mt-5 '>
                            <span>Email</span>
                            <br />
                            <input type="email"  {...register("email", { required: true })}  placeholder='Enter your email' className='w-90 px-3 py-1 mt-3 border-1 rounded-md' />

                        </div>
                        {/* password */}
                        <div className='mt-5 '>
                            <span>Password</span>
                            <br />
                            <input type="password"  {...register("password", { required: true })}  placeholder='Enter your email' className='w-90 px-3 py-1 mt-3  border-1 rounded-md' />

                        </div>
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 rounded-md hover:bg-pink-700 duration-200 px-3 py-1'>Login</button>
                            <p>Not registered? <Link to={"/signup"} className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login