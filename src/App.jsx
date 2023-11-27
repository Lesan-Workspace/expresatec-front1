import './App.css'
import React from 'react'
import Home from './pages/Home'
import Juegos from './pages/Juegos'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Ayuda from './pages/Ayuda'
import Home2 from './pages/Home2'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home2 />} />
          <Route path='/games' element={<Juegos />} />
          <Route path='/help' element={<Ayuda />} />
          <Route path='/profile' element={< Profile />} />
          <Route path='/login' element={< Login />} />
          <Route path='/register' element={< Register />} />
          <Route path='*' element={< NotFound />} />'

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
