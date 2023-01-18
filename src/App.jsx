import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Navigation from './components/navigation';
import cashback from "./assets/cashback.avif"

function App() {
  return (
    <div>
      <Navbar/>
      <Navigation/>
      <img src={cashback} alt="" />
    </div>
  )
}

export default App