import React from 'react'
import Navbar from '../components/Navbar'
import { getGames } from '../services/fetchServices'
import { Link } from 'react-router-dom'
import Cardgame from '../components/Cardgame/Cardgame'

import { useEffect } from 'react'
import { useState } from 'react'
const Juegos = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        const getData = async () => {
            const datagame = await getGames()
            setGames(datagame)
        }
        getData()
        console.log(games);
    }, [])



    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-center mt-[80px]'>
                <div>
                    <p className='font-bold text-4xl'>JUEGOS</p>
                </div>
                <div className="game flex flex-wrap justify-center items-center mt-[60px]   gap-10 " >
                    {games.map((game, index) => (
                        <Link key={index}><Cardgame titulo={game.name} img={game.urlImage} /></Link>
                    ))}

                </div>

            </div>


        </>
    )
}

export default Juegos