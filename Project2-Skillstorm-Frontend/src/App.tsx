import './App.css';
import '../node_modules/@trussworks/react-uswds/lib/uswds.css';
import Nav from './components/Nav';
import EditAccount from './components/EditAccount';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditIncomeInformation from "./components/EditIncomeInformation";
import Results from "./components/Results";
import { Provider } from "react-redux";
import store from './store';
import React from 'react';
import { Footer, Grid, Select } from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';



export default function App() {

  
  const { i18n} = useTranslation();
    
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
              <Route path="/" element ={<Login/>}/>
              <Route path="/editAcc" element ={<PrivateRoute><EditAccount/></PrivateRoute>} />
              <Route path="/editTax" element ={<PrivateRoute><EditIncomeInformation/></PrivateRoute>} />
              <Route path="/results" element ={<PrivateRoute><Results/></PrivateRoute>} />
            </Routes>
          </Router>
          </Provider>
      
      </>  
    );
}

