
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Error from './Components/Error'
import AddCartPage from './Components/AddCartPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import About from './Components/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/addCartpage' element={<AddCartPage />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App