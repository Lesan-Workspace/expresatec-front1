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
import Category from '../components/Categories/Category'
import { getCategories } from '../services/fetchServices'
const Home = () => {
  dotPulse.register()
  const [userdata, setUserdata] = useState()
  const [backgroundImage, setBackgroundImage] = useState(OIGImage);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories()
        const user = await getUser()
        console.log(user);
        setCategories(data)
        setUserdata(user.data)
        const randomBackground = Math.random() < 0.5 ? OIGImage : amarillo;
        setBackgroundImage(randomBackground);


      } catch (error) {

        console.log(`Error :  ${error}`);

        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        console.log('token expirado');
      }
    }


    fetchData()
  }, [])






  return (
    <>
      <Navbar />
      <div>
        {userdata && categories ? (
          <>
            <>
              <div className={`${styles.hero} h-[350px] bg-cover bg-center  flex flex-row items-center justify-center`} style={{ backgroundImage: `url(${backgroundImage})` }} >
                <h1 className='font-bold text-center text-5xl mt-10'>Bienvenido {userdata.firstname} {userdata.lastname}</h1>

              </div>

              <div className='mt-5'>
                <div className='mb-10'>
                  <p className='text-start ml-[70px]  font-bold text-2xl'>Actividades para él</p>

                </div>
                <Category data={categories} />

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













    </>

  )
}

export default Home