
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
import React from 'react';
import { Footer, FooterNav, Grid, Select } from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';

export default function App() {

  
  const {t, i18n} = useTranslation();
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
  const footerPrimary = (
    <>
    </>
  )

  const setLanguage = (v: string) => {
    i18n.changeLanguage(v);
  }
  const footerSecondary = (
    <>
    <div style={{bottom: "0px"}}>
      <Grid row gap>
        <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
        <Select
          onChange={(e) => setLanguage(e.target.value)}
          defaultValue={"en"}
          id="filing-status"
          name="filing-status"
        >
          <React.Fragment key=".0">
          <option value="en">
          Select Language{' '}
          </option>
          <option value="en">
          English
          </option>
          <option value="sp">
          Spanish
          </option>
          </React.Fragment>
        </Select>
        </Grid>
      </Grid>
      </div>
    </>
  )

    return (
      <>
      <Provider store={store}>
      <Router>
        <Nav />
            <Routes>
              <Route path="/home" element ={<Home/>}/>
              <Route path="/editAcc" element ={<EditAccount/>} />
              <Route path="/editTax" element ={<EditIncomeInformation/>} />
              <Route path="/results" element ={<Results/>} />
            </Routes>
          </Router>
          </Provider>
        <Footer
        primary={footerPrimary}
        secondary={footerSecondary}
        />
      </>
      
    );
}

