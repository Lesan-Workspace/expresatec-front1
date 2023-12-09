import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "Juegos",
        href: "#games"
    },
    {
        text: "Contáctanos",
        href: "#contact"
    }


]
const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='fixed w-full bg-white'>

                <header className="mt-1 " >
                    <nav className="flex justify-around items-center " >
                        <div className="flex justify-between w-full md:w-auto mb-3">
                            <div>
                                <Link to="/">
                                    <img src="https://i.ibb.co/zP2fkYq/logotipo.png" style={{ width: 45 }} alt="" />
                                </Link>

                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-10 items-center justify-center">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link to={link.href} className="hover:text-purple-800 font-semibold">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div>
                                <button className='underline' onClick={handleDropdown}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </button>
                                {isOpen && (
                                    <ul className="absolute mt-2 bg-white rounded-md shadow-md">
                                        <li>
                                            <Link href="/profile" className="block py-2 px-4 hover:bg-gray-200">
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="block py-2 px-4 hover:bg-gray-200"  >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Navbar2