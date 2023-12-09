import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="max-w-xs mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <img className="w-full h-32 object-cover" src={props.image} alt="Imagen del card" />

                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{props.titulo}</h2>
                    <p className="text-gray-700">Descripción corta del card. Puedes agregar más detalles aquí.</p>
                </div>

                <div className="bg-gray-100 p-4">
                    <a href="#" className="text-blue-500 hover:underline">Leer más</a>
                </div>
            </div>
        </>

    )
}

export default Card