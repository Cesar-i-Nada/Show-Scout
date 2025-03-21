import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SynchroMap from '../Pages/SynchroMap';
import CreateProfile from '../Components/CreateProfile';
import ProfileCreated from '../Pages/ProfileCreated';




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
                <Route path="/ProfileCreated" element={<ProfileCreated/>}/>      
        </Routes>
      </Router>
    </div>
  );
}

export default Routing