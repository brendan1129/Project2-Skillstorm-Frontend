import { GovBanner, Header, PrimaryNav, Title } from "@trussworks/react-uswds";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
import Home from "./Home";
import EditAccount from "./EditAccount";
import EditIncomeInformation from "./EditIncomeInformation";
import Logout from "./Logout";
import { FunctionComponent, useEffect, useState } from "react";
import './i18n.js';
import { useTranslation } from "react-i18next";

const Nav: FunctionComponent = () => {

    // Mobile expansion hook found in TrussWorks docs
    const [expanded, setExpanded] = useState(false);
    // t, i18n for translations
    const { t, i18n } = useTranslation();

    useEffect(() => {
      // Navigate to the "/home" route when the component is rendered
    }, []);
    
    const items = [
        <a href="/home" key="one" className="usa-nav__link">
          <span>Home</span>
        </a>,
        <a href="/editAcc" key="two" className="usa-nav__link">
          <span>Profile</span>
        </a>,
        <a href="/editTax" key="three" className="usa-nav__link">
          <span>File Taxes</span>
        </a>,
        <a href="/logout" key="four" className="usa-nav__link">
          <span>Logout</span>
        </a>
    ];
    
  
    const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded);
    
    return (
      <>
        <GovBanner />
        <Header extended>
          <div className="usa-nav-container">
            <div className="usa-navbar">
              <Title>
                <a href="/home" title="home" aria-label="Home">{t("Login.Title")}</a>
              </Title>
            </div>
          <PrimaryNav
              items={items}
              mobileExpanded={expanded}
              onToggleMobileNav={onClick}>
          </PrimaryNav>
          </div>
        </Header>
        <main id='main-content'>
          <Router>
            <Routes>
              <Route path="/home" element ={<Home/>}/>
              <Route path="/editAcc" element ={<EditAccount/>} />
              <Route path="/editTax" element ={<EditIncomeInformation/>} />
              <Route path="/logout" element ={<Logout/>} />
            </Routes>
          </Router>
        </main>
      </>
    )
  }
export default Nav;