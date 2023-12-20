import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        text: "Home",
        href: "/",
        color: "bg-blue-300 "
    },
    {
        text: "Juegos",
        href: "#games",
        color: "bg-red-300 "
    },
    {
        text: "Contáctanos",
        href: "#contact",
        color: "bg-green-300 "
    }


]
const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className=' w-full bg-white'>

                <header className="mt-5 mb-5" >
                    <nav className="flex justify-around items-center " >
                        <div className="flex justify-between w-full md:w-auto mb-3">

                            <div>

                                <Link to="/">
                                    <img src="https://i.ibb.co/zP2fkYq/logotipo.png" style={{ width: 45 }} alt="" />
                                </Link>

                            </div>
                        </div>
                        <div className='flex flex-row gap-20'>
                            {links.map((link, index) => (
                                <div key={index}>
                                    <div>
                                        <center>
                                            <div className={`${link.color} rounded-full w-10 h-10 `}>

                                            </div>
                                        </center>

                                    </div>
                                    <ul className="flex gap-10 items-center justify-center">

                                        <li key={link.href}>
                                            <Link to={link.href} className="hover:text-purple-800 font-semibold">
                                                {link.text}
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            ))}
                        </div>


                    </nav>
                </header>
            </div>
        </>
    )
}

export default Navbar2