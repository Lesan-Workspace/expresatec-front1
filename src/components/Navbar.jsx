import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logout } from '../services/authService'
const links = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Juegos",
    href: "/games"
  },
  {
    text: "Ayuda",
    href: "/help"
  }


]
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mt-1">

      <nav className="flex justify-around items-center ">

        <div className="flex justify-between w-full md:w-auto">
          <div className='mb-2'>
            <Link to="/">
              <img src="https://i.ibb.co/80kC8vg/expresatec.png" style={{ width: 220, paddingRight: 60 }} alt="" />
            </Link>

          </div>
        </div>

        <div className='items-centers' style={{ paddingRight: 170 }}>
          <ul className="flex gap-10 items-center justify-center">
            {links.map((link, index) => (
              <li key={index}>
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
                  <Link to="/profile" className="block py-2 px-4 hover:bg-gray-200">
                    Profile
                  </Link>
                </li>
                <li>
                  <button className="block py-2 px-4 hover:bg-gray-200" onClick={Logout}  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar




