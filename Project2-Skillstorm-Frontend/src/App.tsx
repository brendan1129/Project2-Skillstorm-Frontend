import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import EditIncomeInformation from "./components/EditIncomeInformation";
import EditAccount from './components/EditAccount';
import Home from './components/Home';
import Logout from './components/Logout';

// Navbar component
function Navbar() {
  return (
    <nav style={{ position: "fixed", top: 0, right: 10, width: 500 }}>
      <ul style ={{display: "flex", justifyContent: "flex-end"}}>
        <li style ={{paddingRight: 25}}>
          <Link to="/">Home</Link>
        </li>
        <li style ={{paddingRight: 25}}>
          <Link to="/editAcc">Edit Account</Link>
        </li>
        <li style ={{paddingRight: 25}}>
          <Link to="/editTax">File Taxes</Link>
        </li>
        <li style ={{paddingRight: 25}}>
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/editAcc" element ={<EditAccount/>} />
          <Route path="/editTax" element ={<EditIncomeInformation/>} />
          <Route path="/logout" element ={<Logout/>} />
        </Routes>
      </div>
      </Router>
    );
}
export default App
