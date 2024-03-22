import { Button, Label, TextInput,Alert,Spinner} from 'flowbite-react'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice'

export default function Signin() {
  const [formData,setFormData] = useState({})
  const {loading,error:errorMessage} = useSelector(state=>state.user)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]:e.target.value.trim() })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!formData.email || !formData.password){
       return dispatch(signInFailure('please fill out all the fields'))
    }
    try {
     dispatch(signInStart())
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(data.success === false){
        return dispatch(signInFailure(data.message))
      }
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
    
  }
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
         <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className="">
            <Label value='email'/>
             <TextInput type='email' placeholder='type your Email' id='email' onChange={handleChange}/>
          </div>
          <div className="">
            <Label value='password'/>
             <TextInput type='password' placeholder='type your password' id='password' onChange={handleChange}/>
          </div>
           <Button gradientDuoTone="purpleToPink" type='submit' disabled={loading}>
            {
              loading ? (
            <>
              <Spinner size='sm'/>
               <span className='pl-3'>Loading...</span>
            </>
              ):'Sign In'
            }
          </Button>
         </form>
          <div className="flex gap-2 text-sm mt-2">
           <span>Don't Have an account?</span>
           <Link to='/signup' className='text-blue-500'>Sign Up</Link>
          </div>
          {
            errorMessage && <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
          }
       </div>
    </div>
    </div>
  )
}
