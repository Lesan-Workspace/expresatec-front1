import React from 'react'
import { toast } from 'sonner'
import styles from './styles/login.module.css'
import { Link } from 'react-router-dom';
import { Input } from "@nextui-org/react";
import { LoginUser } from '../services/authService';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';


const Login = () => {

  const [User, setUsername] = useState('')
  const [Password, setPassword] = useState('')



  const userData = {
    username: User,
    password: Password
  }
  const handleLogin = async (e) => {

    e.preventDefault();




    try {

      const response = await LoginUser(userData);




      if (response) {
        const decodedToken = jwtDecode(response.data.token);


        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', decodedToken.userId);
        console.log(decodedToken);
        toast.success('Login exitoso')
        await new Promise((resolve) => setTimeout(resolve, 1000));
        window.location.href = '#/';

      } else {
        toast.error('Token no encontrado en la respuesta');
      }





    } catch (error) {
      toast.error('Usuario o contraseña incorrectos')
      console.log(error);



    }

  }
  return (
    <>
      <div className={`${styles.fondo} h-screen`}>

        <div className='absolute inset-0 flex justify-center items-center backdrop-blur-md'>

          <div className='absolute inset-0'></div>


          <div className='bg-black bg-opacity-40 p-10 rounded-md text-white relative'>
            <h1 className='text-3xl font-bold text-center mb-5'>Login</h1>
            <form>
              <div className='mb-5'>

                <Input type="text" label="Username" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className='mb-5'>
                <Input type="password" label="Password" onChange={(e) => setPassword(e.target.value)} />
              </div>


              {/* onClick={() => toast.warning('Abraham maldito')} */}
              <button type="submit" onClick={handleLogin} className='bg-blue-600 text-white p-2 rounded-md w-full'>Login</button>
              <div className='mt-2'>
                <p>¿no tienes cuenta?, Registrate <Link className='text-yellow-400' to='/register'> Aquí</Link> </p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login