import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';
import About from './pages/About';
import Experience from './pages/Experience';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Portofolio/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App
