import React from 'react'
import { toast } from 'sonner'
import styles from './styles/login.module.css'
import { Link } from 'react-router-dom';
import { Input } from "@nextui-org/react";
const Login = () => {
  return (
    <>
      <div className={`${styles.fondo} h-screen`}>

        <div className='absolute inset-0 flex justify-center items-center backdrop-blur-md'>

          <div className='absolute inset-0'></div>


          <div className='bg-black bg-opacity-40 p-10 rounded-md text-white relative'>
            <h1 className='text-3xl font-bold text-center mb-5'>Login</h1>
            <form>
              <div className='mb-5'>

                <Input type="email" label="Email" />
              </div>
              <div className='mb-5'>
                <Input type="password" label="Password" />
              </div>

              <button onClick={() => toast.warning('Abraham maldito')} type="submit" className='bg-blue-600 text-white p-2 rounded-md w-full'>Login</button>
              <div className='mt-2'>
                <p>¿no tienes cuenta?, Registrate <Link className='text-sky-600' to='/register'> Aquí</Link> </p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login