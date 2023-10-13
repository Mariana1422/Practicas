import { useForm } from "react-hook-form"

function LoginPage() {
  
   const { register, handleSubmit, formState: {errors} } = useForm ()
   const onSubmited = handleSubmit(async(data) =>{
  console.log(data);
  })

  return (
    <div className='bg-pink-300 max-w-md p-10 rounded-md'>
         <form onSubmit={onSubmited}>
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
  )
}

export default LoginPage