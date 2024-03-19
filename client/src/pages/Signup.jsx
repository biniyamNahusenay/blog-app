import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">

       <div className="flex-1">
       <Link to="/" className="font-bold dark:text-white text-4xl">
         <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
          via-purple-500 to-pink-500 rounded-lg text-white">Bini's</span>
          Blog
       </Link>
        <p className='mt-5 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis tenetur</p>
       </div>

       <div className="flex-1">
         <form className='flex flex-col gap-4'>
          <div className="">
            <Label value='username'/>
             <TextInput type='text' placeholder='type your username' id='username'/>
          </div>
          <div className="">
            <Label value='email'/>
             <TextInput type='email' placeholder='type your Email' id='email'/>
          </div>
          <div className="">
            <Label value='password'/>
             <TextInput type='password' placeholder='type your password' id='password'/>
          </div>
           <Button gradientDuoTone="purpleToPink" type='submit'>Sign Up</Button>
         </form>
          <div className="flex gap-2 text-sm mt-2">
           <span>Have an account?</span>
           <Link to='/signin' className='text-blue-500'>Sign In</Link>
          </div>
       </div>
    </div>
    </div>
  )
}
