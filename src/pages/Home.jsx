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
const Home = () => {
  dotPulse.register()
  const [userdata, setUserdata] = useState()
  const [backgroundImage, setBackgroundImage] = useState(OIGImage);


  useEffect(() => {

    getUser(setUserdata)
    const randomBackground = Math.random() < 0.5 ? OIGImage : amarillo;
    setBackgroundImage(randomBackground);


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

      <div className='flex flex-row justify-around mt-10'>
        <Link><Cardhome color="bg-yellow-300" titulo="Juegos" enlace="/games" boton="Ver juegos" /></Link>
        <Link><Cardhome color="bg-red-300" titulo="Ayuda" enlace="/help" boton="Más información" /></Link>
        <Link><Cardhome color="bg-blue-300" titulo="Juegos" enlace="/games" boton="Ver juegos" /></Link>

      </div>



    </>

  )
}

export default Home