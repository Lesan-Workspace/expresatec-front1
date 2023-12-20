import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className={` mx-auto ${props.color} shadow-lg rounded-md transform transition-transform hover:scale-105 hover:shadow-lg overflow-hidden`} style={{ width: '300px' }}>
                <center>
                    <img className="p-2 h-[100px] w-[100px] object-cover " src={props.image} alt="Imagen del card" />
                </center>


                <div className="p-4">
                    <h2 className="text-xl text-center font-bold mb-2">{props.titulo}</h2>

                </div>


            </div>
        </>

    )
}

export default Card