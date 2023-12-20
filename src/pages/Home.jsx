import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { getUser } from '../services/fetchServices'
import { dotPulse } from 'ldrs'
import styles from './styles/home.module.css'
import Cardhome from '../components/Cardhome/Cardhome'
import { Link } from 'react-router-dom'
import amarillo from '../assets/amarillo.jpeg'
import OIGImage from '../assets/OIG.jpeg'
import { useState } from 'react'
import Cardgame from '../components/Cardgame/Cardgame'
const Home = () => {
  dotPulse.register()
  const [userdata, setUserdata] = useState()
  const [backgroundImage, setBackgroundImage] = useState(OIGImage);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser()


        if (user.status == 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          console.log('token expirado');

        } else {
          console.log(user)
          setUserdata(user.data)
          const randomBackground = Math.random() < 0.5 ? OIGImage : amarillo;
          setBackgroundImage(randomBackground);
        }





      } catch (error) {



      }
    }


    fetchData()
  }, [])






  return (
    <>
      <Navbar />
      <div>
        {userdata ? (
          <>
            <>
              <div className={`${styles.hero} h-[350px] bg-cover bg-center  flex flex-row items-center justify-center`} style={{ backgroundImage: `url(${backgroundImage})` }} >
                <h1 className='font-bold text-center text-5xl mt-10'>Bienvenido {userdata.firstname} {userdata.lastname}</h1>

              </div>

            </>
          </>
        ) : (
          <>
            <>
              <div className={`${styles.hero} h-[350px] bg-cover bg-center  flex flex-row items-center justify-center`} style={{ backgroundImage: `url(${backgroundImage})` }} >
                <h1 className='font-bold text-center text-5xl mt-10'><div className='mt-10'>
                  <h1 className='font-bold text-center text-5xl mt-10'>
                    <l-dot-pulse
                      size="43"
                      speed="1.3"
                      color="black"
                    ></l-dot-pulse></h1>

                </div></h1>

              </div>

            </>


          </>
        )}
      </div >
      {/* <div>

        <div className='flex flex-row justify-around mt-10'>
          <Link><Cardhome color="bg-yellow-300" titulo="Juegos" enlace="/games" boton="Ver juegos" /></Link>
          <Link><Cardhome color="bg-red-300" titulo="Ayuda" enlace="/help" boton="Más información" /></Link>
          <Link><Cardhome color="bg-blue-300" titulo="Juegos" enlace="/games" boton="Ver juegos" /></Link>

        </div>

      </div> */}


      <div className='mt-10'>
        <div className='mb-20'>
          <p className='text-start ml-[70px]  font-bold text-2xl'>Actividades para él</p>

        </div>
        <div className="game flex flex-row justify-around mt-[50px] ">
          <Link><Cardgame titulo="En el cine" img="https://i.ibb.co/w03bQTh/image-removebg-preview-20.png" /></Link>

          <Link><Cardgame titulo="En la escuela" img="https://i.ibb.co/y6T8dVM/image-removebg-preview-21.png" /></Link>
          <Link> <Cardgame titulo="En el parque" img="https://i.ibb.co/GRkN61Y/tree-bench-lamp-and-trash-can-in-the-park-vector-illustration-free-png.webp" /></Link>
          <Link> <Cardgame titulo="En el parque" img="https://i.ibb.co/GRkN61Y/tree-bench-lamp-and-trash-can-in-the-park-vector-illustration-free-png.webp" /></Link>
        </div>
      </div>

      <div className="lonuevo mt-[150px]">
        <div className='mb-20'>
          <p className='text-center font-bold text-3xl'>Lo nuevo del mes</p>

        </div>
      </div>







    </>

  )
}

export default Home