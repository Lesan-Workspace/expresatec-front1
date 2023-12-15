import React from 'react'

const CardUser = (user) => {
    return (
        <>
            <div className='mt-10'>
                <div className="max-w-md mx-auto my-5 bg-yellow p-6 rounded-md shadow-md">
                    <div className="flex items-center justify-center">

                    </div>
                    <div className="mt-4 text-center">
                        <h2 className="text-xl font-semibold text-black">
                            {user.firstname} {user.lastname}
                        </h2>
                        <p className="text-black">{user.email}</p>
                        <p className="text-black">{user.rol}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardUser