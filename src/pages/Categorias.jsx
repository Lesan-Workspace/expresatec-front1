import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import Cardgame from '../components/Cardgame/Cardgame'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getGamecategory } from '../services/fetchServices'
const Categorias = () => {
    const params = useParams()
    const [datagame, setDatagame] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                console.log(params);
                const datagame1 = await getGamecategory(parseInt(params.id))
                setDatagame(datagame1)
                console.log(datagame1);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Manejar errores si es necesario
            }
        };


        fetchData()
    }, [])


    return (
        <>
            <Navbar />
            {params.id === '1' ? (
                <div className='mt-10 ml-60'>
                    <p className='text-4xl font-bold'>En el cine</p>
                    <br />
                    <p className='text-2xl'>Guía a tu niño a través de un mundo de película, con escenarios que parecen escenas icónicas ¡Pon la peli!</p>
                </div>
            ) : params.id === '2' ? (
                <div className='mt-10 ml-40'>
                    <p className='text-3xl font-bold'>En el Parque</p>
                    <br />
                    <p className='text-2xl'>Toma la mano de tu niño o niña y guíalo a través del verde paisaje para que se exprese naturalmente.</p>
                </div>
            ) : (
                <div className='mt-10 ml-40'>
                    <p className='text-3xl font-bold'>En la Escuela</p>
                    <br />
                    <p className='text-2xl'>Llevamos la escuela a tu hogar, no importa dónde se encuentre, siempre hay algo que aprender, así que continuemos con esta ruta del saber.</p>
                </div>
            )}


            <div className="game flex flex-wrap justify-center items-center mt-[60px]   gap-10 " >
                {datagame.map((game, index) => (
                    <Link key={index} ><Cardgame titulo={game.name} img={game.urlImage} /></Link>
                ))}

            </div>






        </>
    )
}

export default Categorias