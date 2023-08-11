import { Address, Footer, FooterNav, GovBanner, Grid, Header, Logo, PrimaryNav, SocialLinks, Title } from "@trussworks/react-uswds";
import { FunctionComponent, useEffect, useState } from "react";
import './i18n.js';
import { useTranslation } from "react-i18next";
import React from "react";

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
          <span>{t("Nav.Home")}</span>
        </a>,
        <a href="/editAcc" key="two" className="usa-nav__link">
          <span>{t("Nav.Profile")}</span>
        </a>,
        <a href="/editTax" key="three" className="usa-nav__link">
          <span>{t("Nav.File Taxes")}</span>
        </a>,
        <a href="/results" key="four" className="usa-nav__link">
          <span>{t("Nav.Results")}</span>
        </a>
    ];
    const footerPrimary = (
      <></>
    )
  
    const footerSecondary = (
      <>
      <div style={{bottom: "0px"}}>
        <Grid row gap>
          <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
          </Grid>
        </Grid>
        </div>
      </>
    )
  
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
       
        </main>
      </>
    )
  }
export default Nav;