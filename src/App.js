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
      <Router basename = {process.env.PUBLIC_URL}>
          <Navbar/>
          <Routes>  
                <Route exact path='/' element={<Homepage />}/>
                <Route exact path='/car' element={<Services />}/>   
          </Routes>
          <Footer/>
      </Router>
        
    </>
  );
}

export default App;
