import { useState } from 'react' 
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FeaturedSection from './components/FeaturedSection';
import Newletter from './components/Newsletter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto scroll-smooth">
      <Header title="React Weather App" logo="Weatherly"/>
      <FeaturedSection />
      <Hero />
      <Newletter />
      <Footer copyright="All rights reserved by Funtechstic Services"/>
    </div>
    
  )
}

export default App
