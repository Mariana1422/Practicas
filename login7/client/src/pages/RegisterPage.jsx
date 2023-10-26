import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function RegisterPage() {

    const { register, handleSubmit, formState : {errors} } = useForm();
    const { signup, isAuthenticathed, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
      if(isAuthenticathed) navigate('/tasks');
    },[isAuthenticathed, navigate])

    const onSubmited = handleSubmit(async(values) =>{
      signup(values);
    })
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className='bg-pink-300 max-w-md p-10 rounded-md'>

        

      {
        RegisterErrors.map((error, i)=>(
          <div className='bg-red-600 text-white p-2' key={i}>
            { error }
          </div>
        ))
      }
        <form onSubmit={onSubmited}>
            <input type="text"{...register("username", {required:true})} placeholder='username' 
            className='w-full bg-pink-200 text-black px-4 py-4 rounded-md my-2'/>

            {
              errors.username && <p className='text-red-600'>User is Required</p>
            }

            <input type="email" {...register("email", {required:true})} placeholder='email' 
            className='w-full bg-pink-200 text-black px-4 py-4 rounded-md my-2'/>

            {
              errors.email && <p className='text-red-600'>Email is Required</p>
            }

            <input type="password"{...register("password", {required:true})} placeholder='password' 
            className='w-full bg-pink-200 text-black px-4 py-4 rounded-md my-2' />
            
            {
              errors.password && <p className='text-red-600'>Password is Required</p>
            
            }
            <button type="submit" className=" bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded"> Register </button>
        </form>
       </div>
         </div>
    
  )
}

export default RegisterPage