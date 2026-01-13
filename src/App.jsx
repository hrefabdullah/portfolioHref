import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'


const App = () => {
  const theme = useSelector((state) => state.theme.value)
  return (
    <div className={`${theme ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      <Navbar />
      <h1>Hello, Portfolio!</h1>
      <Footer />
    </div>
  )
}

export default App