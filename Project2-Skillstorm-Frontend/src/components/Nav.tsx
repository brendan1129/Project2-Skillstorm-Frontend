import { GovBanner, Header, PrimaryNav, Title } from "@trussworks/react-uswds";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
import Home from "./Home";
import EditAccount from "./EditAccount";
import EditIncomeInformation from "./EditIncomeInformation";
import Logout from "./Logout";
import Login from "./Login";
import { FunctionComponent, useEffect, useState } from "react";
import CreateAccount from "./CreateAccount";

const Nav: FunctionComponent = () => {
    const [expanded, setExpanded] = useState(false)  
  
    useEffect(() => {
      // Navigate to the "/home" route when the component is rendered
      console.log("home");
      redirect('/home');
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
    
  
    const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)
    
    return (
      <>
        <GovBanner />
        <Header basic={true}>
            <div className="usa-navbar" style={{marginTop: "1%", marginLeft: "240px"}}>
              <Title>
                <a href="/home" title="home" aria-label="Home"><h2>Tax Processing System</h2></a>
              </Title>
            </div>
          <PrimaryNav
              items={items}
              mobileExpanded={expanded}
              onToggleMobileNav={onClick}>
          </PrimaryNav>
        </Header>
        <main id='main-content'>
          <Router>
            <Routes>
              <Route path="/home" element ={<Home/>}/>
              <Route path="/editAcc" element ={<EditAccount/>} />
              <Route path="/editTax" element ={<EditIncomeInformation/>} />
              <Route path="/logout" element ={<Logout/>} />
              <Route path="/login" element ={<Login/>} />
              <Route path="/createAccount" element ={<CreateAccount/>} />
            </Routes>
          </Router>
        </main>
      </>
    )
  }
export default Nav;