import React from 'react'
import styles from './styles/register.module.css'
import { Input } from "@nextui-org/react";
import { useState } from 'react';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('')
  const [showPassword3, setShowPassword3] = useState(false);

  const handlePassword2Change = (e) => {
    const newValue = e.target.value;
    setPassword2(newValue);
    setShowPassword3(newValue !== '');

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password2, repeatPassword);
  }


  return (
    <>
      <div className={`${styles.fondo} h-screen`}>

        <div className='absolute inset-0 flex justify-center items-center backdrop-blur-md'>

          <div className='absolute inset-0'></div>


          <div className='bg-black bg-opacity-40 p-10 rounded-md text-white relative'>
            <h1 className='text-3xl font-bold text-center mb-5'>Registro</h1>
            <form>
              <div className='mb-5'>

                <Input type="email" label="Email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mb-5'>
                <Input type="password" label="Password" onChange={handlePassword2Change} />
                <br />
                {showPassword3 && (
                  <Input
                    type="password"
                    label="Repeat Password"
                    className={styles.animatefadeInUp}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />)}

              </div>
              <div>
                <p>Aun no tienes cuenta, puedes registrarte </p>
              </div>
              <button onClick={handleSubmit} type="submit" className='bg-blue-600 text-white p-2 rounded-md w-full'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register