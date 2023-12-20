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
            <div className="game flex flex-wrap justify-center items-center mt-[60px]   gap-10 " >
                {datagame.map((game, index) => (
                    <Link key={index}><Cardgame titulo={game.name} img={game.urlImage} /></Link>
                ))}

            </div>






        </>
    )
}

export default Categorias