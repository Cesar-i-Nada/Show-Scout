import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SynchroMap from '../Pages/SynchroMap';
import CreateProfile from '../Components/CreateProfile';



function Routing() {

  return (
    <div>
      <Router>
        <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/SynchroMap" element={<SynchroMap/>}/>  
                <Route path="/prueba" element={<CreateProfile/>}/>      
    
      
        </Routes>
      </Router>
    </div>
  );
}

export default Routing