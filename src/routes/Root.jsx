import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import { Outlet } from 'react-router-dom';

function Root() { 
  return (
    <div className="container mx-auto scroll-smooth">
      <Header logo="Weatherly"/>
      <Outlet />
      <Footer copyright="All rights reserved by Funtechstic Services"/>
    </div>
  )
}

export default Root