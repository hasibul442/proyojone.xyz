import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar'
import Homepage from './Pages/Homepages/Homepage';
import Services from './Pages/Services/Services';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>  
                <Route exact path='/' element={<Homepage />}/>
                <Route path='/car' element={<Services />}/>   
          </Routes>
          <Footer/>
      </Router>
        
    </>
  );
}

export default App;
