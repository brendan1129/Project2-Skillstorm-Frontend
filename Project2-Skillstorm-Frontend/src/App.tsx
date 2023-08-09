
import './App.css';
import '../node_modules/@trussworks/react-uswds/lib/uswds.css';
//import Login from "./components/Login";
//import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import EditAccount from './components/EditAccount';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EditIncomeInformation from "./components/EditIncomeInformation";
import Logout from "./components/Logout";
import { Provider } from "react-redux";
import store from './store';

export default function App() {

  

    //creating data from our queries
    
    //const {data : form1099, refetch} = taxApi.useFindForm1099Query();
    //const {data : formW2, refetch} = taxApi.useFindFormW2Query();
    //const {data : results, refetch} = taxApi.useFindResultsQuery();

  //const [loggedIn, setLoggedIn] = useState(false);

  /*useEffect(() => {
    // Check if there's a user in localStorage
    const user = localStorage.getItem('user');
    if (!user) {
      // no user found
      setLoggedIn(false);
    }
    else {
      setLoggedIn(true);
    }
  }, []); */

    return (
      <>
      <Provider store={store}>
      <Router>
        <Nav />
            <Routes>
              <Route path="/home" element ={<Home/>}/>
              <Route path="/editAcc" element ={<EditAccount/>} />
              <Route path="/editTax" element ={<EditIncomeInformation/>} />
              <Route path="/logout" element ={<Logout/>} />
            </Routes>
          </Router>
          </Provider>
      
      </>  
    );
}

