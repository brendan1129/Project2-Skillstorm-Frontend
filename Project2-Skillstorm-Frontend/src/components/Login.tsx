import { FunctionComponent,  useRef, useState } from "react";
import { Button, Fieldset, Form, Grid, GridContainer,  Label, Modal, ModalHeading, ModalRef, ModalToggleButton, TextInput,  } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'
import { Auth } from "../api/TaxApi.js";

const Login: FunctionComponent = () => {

  

  

  // t, i18n for translations
  const { t } = useTranslation();

  const navigate = useNavigate();


  const [authData, setAuthData] = useState({
    email : "",
    password : ""
  })

  const [showPassword, setShowPassword] = useState(false);

  // Registration Modal
  const modalRef = useRef<ModalRef>(null);

  const handleLogin = (event: any) => {
    event.preventDefault();

     const newAuth : Auth = {
        email : String(authData.email),
        password : String(authData.password),
        role : "USER"
     }

     fetch("http://ec2-3-238-52-15.compute-1.amazonaws.com:8080/auth/login", {
      headers: {
        "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(newAuth),
    })
    .then((response) => Promise.all([response.json(), response.headers]))
    .then(([body, headers]) => {

      localStorage.setItem("JWT", JSON.stringify((headers.get("authorization"))));
      localStorage.setItem("email", JSON.stringify((body.email)))
      
    })
    .catch(error => console.error(error));
navigate('/editAcc')
  }

  const handleRegistry = (event: any) => {
    event.preventDefault();

     const regAuth : Auth = {
        email : String(authData.email),
        password : String(authData.password),
        role : "USER"
     }

    fetch("http://ec2-3-238-52-15.compute-1.amazonaws.com:8080/auth/register", {
      headers: {
        "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(regAuth),
    })
    .then()
    .catch(error => console.error(error));
    
    navigate(0)

  }
  return (
  <>
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
              <TextInput onChange={(e) => setAuthData({...authData, email : e.target.value})} id="username" name="username" type='email'></TextInput>
              <Label className="usa-label" htmlFor="password">{t("Login.Password")}</Label>
              <TextInput onChange={(e) => setAuthData({...authData, password : e.target.value})} id="password" name="password" type={showPassword ? 'text' : 'password'}></TextInput>
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
                      <Label className="usa-label" htmlFor="new-username">{t("Login.Email")}</Label>
                      <TextInput onChange={(e) => setAuthData({...authData, email : e.target.value})} id="new-username" name="new-username" type="text"></TextInput>
                      <Label className="usa-label" htmlFor="new-password">{t("Login.Password")}</Label>
                      <TextInput id="new-password" name="new-password" type="password"></TextInput>
                      <Label className="usa-label" htmlFor="new-password-2">{t("Login.Retype")}</Label>
                      <TextInput onChange={(e) => setAuthData({...authData, password : e.target.value})} id="new-password-2" name="new-password-2" type="password"></TextInput>
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

export default Login;