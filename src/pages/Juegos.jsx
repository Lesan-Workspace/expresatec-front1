import React from 'react'
import Navbar from '../components/Navbar'
import Cardgame from '../components/Cardgame/Cardgame'
import { Link } from 'react-router-dom'
const Juegos = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center mt-[80px]'>
        <div>
          <p className='font-bold text-4xl'>JUEGOS</p>
        </div>
        <div className="game flex flex-wrap justify-center items-center mt-[60px] w-[600px]  gap-5 " >
          <Link><Cardgame titulo="En el cine" img="https://i.ibb.co/w03bQTh/image-removebg-preview-20.png" /></Link>

          <Link><Cardgame titulo="En la escuela" img="https://i.ibb.co/y6T8dVM/image-removebg-preview-21.png" /></Link>
          <Link> <Cardgame titulo="En el parque" img="https://i.ibb.co/GRkN61Y/tree-bench-lamp-and-trash-can-in-the-park-vector-illustration-free-png.webp" /></Link>
          <Link> <Cardgame titulo="En el parque" img="https://i.ibb.co/GRkN61Y/tree-bench-lamp-and-trash-can-in-the-park-vector-illustration-free-png.webp" /></Link>

        </div>

      </div>


    </>
  )
}

export default Juegos