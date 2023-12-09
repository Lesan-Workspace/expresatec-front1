import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import styles from './styles/register.module.css'
import { Input } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RegisterUser } from '../services/authService';



const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password2, setPassword2] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('')
  const [showPassword3, setShowPassword3] = useState(false);



  const handlePassword2Change = (e) => {
    const newValue = e.target.value;
    setPassword2(newValue);
    setShowPassword3(newValue !== '');

  };
  const userData = {
    username,
    password: repeatPassword,
    email,
    firstname,
    lastname,

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await RegisterUser(userData);


      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Ahora puedes iniciar sesión con tu cuenta.',
      }).then((result) => {

        if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
          window.location.href = '/login';
        }
      });




      console.log('Registro exitoso:', response);


    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo.',
      });

      console.error('Registro fallido', error);

    }
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

                <Input type="text" label="Ingrese un nombre de Usuario" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className='mb-5'>

                <Input type="text" label="Ingrese su Primer Nombre" onChange={(e) => setFirstname(e.target.value)} />
              </div>
              <div className='mb-5'>

                <Input type="tezt" label="Ingrese su Apellido" onChange={(e) => setLastname(e.target.value)} />
              </div>
              <div className='mb-5'>

                <Input type="email" label="Ingrese su Email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mb-5'>
                <Input type="password" label="Ingrese una contraseña" onChange={handlePassword2Change} />
                <br />
                {showPassword3 && (
                  <Input
                    type="password"
                    label="Repita la contraseña"
                    className={styles.animatefadeInUp}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />)}

              </div>
              <div>
                <p>
                  ¿Ya eres usuario?, Inicia sesión
                  <Link to="/login" className='text-blue-600'> Aquí</Link>
                </p>
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