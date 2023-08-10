/*import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Button, Fieldset, Form, GovBanner, Grid, GridContainer, Header, Label, Modal, ModalHeading, ModalRef, ModalToggleButton, TextInput, Title } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import './i18n.js';
import React from "react";
import { taxApi } from "../api/TaxApi.js";

const Login: FunctionComponent = () => {

  // t, i18n for translations
  const { t, i18n } = useTranslation();
  
  const checkAuth = taxApi.useFindAuthQuery();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    // checks if any fields were unchanged, as their value will be undefined. This sets them back to defaultValue
    

    /*

    // makes the API call
    checkAuth(updatedUser)
        .unwrap()
        .then( () => {
            // shows Success alert
           render(<><Alert className='usa-alert--success' type='success' headingLevel="h4" heading="Saved" style={{position:"fixed", top:0, left:0, width:"100%"}}/></>)
           
           // transitions to the editTax page after 1.5 seconds
           window.setTimeout(() => {
            cleanup()
            navigate('/editTax')
           }, 1500)
           

      })
        .catch(error => console.error(error))
}

  return (
  <>

        <GovBanner />
        <Header extended>
        <div className="usa-nav-container">
          <div className="usa-navbar" >
            
            <Title>
              <a href="/home" title="Home" aria-label="Home">{t("Login.Title")}</a>
            </Title>
          </div>
        </div>
        </Header>
        <main id="main-content">
        <div className="bg-base-lightest">
        <GridContainer className="usa-section">
          <Grid row className="margin-x-neg-205 flex-justify-center">
          <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
            <Form onSubmit={handleLogin} className= "usa-form usa-form--large margin-bottom-3">
              <Fieldset className="usa-fieldset">
                <legend className="usa-legend usa-legend--large" style={{paddingTop: "10%", paddingBottom: "10%", paddingLeft: "0%", textAlign: "center"}}>{t('Login.Enter Login Info')}</legend>
              </Fieldset>
              <Label className="usa-label" htmlFor="username">Email</Label>
              <TextInput id="username" name="username" type='email'></TextInput>
              <Label className="usa-label" htmlFor="password">{t("Login.Password")}</Label>
              <TextInput id="password" name="password" type={showPassword ? 'text' : 'password'}></TextInput>
              <a
                          title="Show password"
                          href="javascript:void(0);"
                          className="usa-show-password"
                          aria-controls="password-create-account password-create-account-confirm"
                          onClick={(): void =>
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? 'Hide password' : 'Show password'}
              </a>
              <Button type="submit" base>{t("Login.Login Button")}</Button>
              <ModalToggleButton modalRef={modalRef} opener>
                  {t("Login.Create an Account")}
              </ModalToggleButton>
                <Modal
                  ref={modalRef}
                  id="modal-1"
                  aria-labelledby="modal-1-heading"
                  aria-describedby="modal-1-description">
                  <ModalHeading id="modal-1-heading">
                    {t("Login.Create an Account")}
                  </ModalHeading>
                  <div className="usa-prose">
                      <Form onSubmit={handleRegistry}>
                      <Label className="usa-label" htmlFor="new-name">{t("Login.Full Name")}</Label>
                      <TextInput id="new-name" name="new-name" type="text"></TextInput>
                      <Label className="usa-label" htmlFor="new-username">{t("Login.Email")}</Label>
                      <TextInput id="new-username" name="new-username" type="text"></TextInput>
                      <Label className="usa-label" htmlFor="new-password">{t("Login.Password")}</Label>
                      <TextInput id="new-password" name="new-password" type="password"></TextInput>
                      <Label className="usa-label" htmlFor="new-password-2">{t("Login.Retype")}</Label>
                      <TextInput id="new-password-2" name="new-password-2" type="password"></TextInput>
                      <Button type="submit" size="big" style={{margin:"60px"}}>{t("Login.Create")}</Button>
                      </Form>
                  </div>
                </Modal>
            </Form>
          </div>
          </Grid>
        </GridContainer>
        </div>
        </main>
    </>
        );
}

export default Login;*/