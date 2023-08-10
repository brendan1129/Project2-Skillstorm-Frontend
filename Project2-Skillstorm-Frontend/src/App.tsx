
import './App.css';
import '../node_modules/@trussworks/react-uswds/lib/uswds.css';
//import Login from "./components/Login";
//import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import EditAccount from './components/EditAccount';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EditIncomeInformation from "./components/EditIncomeInformation";
import Results from "./components/Results";
import { Provider } from "react-redux";

import store from './store';
import Login from './components/Login';

export default function App() {

  

    

    return (
      <>
      <Provider store={store}>
      <Router>
        <Nav />
            <Routes>
              <Route path="/" element ={<Home/>}/>
              <Route path="/editAcc" element ={<EditAccount/>} />
              <Route path="/editTax" element ={<EditIncomeInformation/>} />
              <Route path="/results" element ={<Results/>} />
              <Route path="/test" element ={<Login/>} />
            </Routes>
          </Router>
          </Provider>
      
      </>  
    );
}

