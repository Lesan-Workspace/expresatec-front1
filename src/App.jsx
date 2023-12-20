import './App.css'
import React from 'react'
import Home from './pages/Home'
import Juegos from './pages/Juegos'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Ayuda from './pages/Ayuda'
import { Navigate } from 'react-router-dom'
import Home2 from './pages/Home2'
import NotFound from './pages/NotFound'
import Parque from './pages/Games/Parque/Parque'
import Escuela from './pages/Games/Escuela/Escuela'
import Cine from './pages/Games/Cine/Cine'
import Categorias from './pages/Categorias'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const hasTokenAndUserId = localStorage.getItem('token') && localStorage.getItem('userId');
  return (
    <>

      <Routes>
        {hasTokenAndUserId ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home2 />} />
            <Route path="/games" element={<Juegos />} />
            <Route path="/help" element={<Ayuda />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/category/:id" element={<Categorias />} />
            <Route path="/Cine" element={<Cine />} />
            <Route path="/Parque" element={<Parque />} />
            <Route path="/Escuela" element={<Escuela />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home2 />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>


    </>
  )
}

export default App
