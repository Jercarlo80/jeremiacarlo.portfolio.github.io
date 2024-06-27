import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';

function App() {
  return (
    <div className='bg-black w-full h-full'>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Experience/>
    </div>
  )
}

export default App
