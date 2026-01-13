import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { useSelector } from 'react-redux'


const App = () => {
  const theme = useSelector((state) => state.theme.value)
  return (
    <div className={`${theme ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App