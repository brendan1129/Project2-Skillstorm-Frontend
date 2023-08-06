import { FunctionComponent, useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import { Button, Fieldset, Form, GovBanner, Header, Label, Modal, ModalHeading, ModalRef, ModalToggleButton, TextInput, Title } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import './i18n.js';

const Login: FunctionComponent = () => {

  const { t, i18n } = useTranslation();
  
  console.log(i18n.language);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there's a user in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      // User is logged in, set isLoggedIn to true
      console.log(user);
      setLoggedIn(true);
    }
  }, []);

  
  const modalRef = useRef<ModalRef>(null);

  const handleRegistry = () => {

    console.log("user created");
  };
  const handleLogin = () => {
    // Set user in localStorage
    localStorage.setItem('user', 'username');

    // Set isLoggedIn to true
    setLoggedIn(true);
    window.location.href = "/home";
  };

  // Redirect to main page if user is logged in
  if (loggedIn) {
    return <>
          <Nav/>
          </>;
  }
  return (
    <>
        <GovBanner />
        <Header basic={true}>
          <div className="usa-navbar" style={{marginTop: "1%", paddingBottom: "10%", marginLeft: "240px", height: "0px"}}>
            <Title>
              <a href="/home" title="Home" aria-label="Home"><h2>{t("Title")}</h2></a>
            </Title>
          </div>
        </Header>
        <main id="main-content">
        <div className= "card">
          <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
            <Form onSubmit={handleLogin} className= "usa-form usa-form--large margin-bottom-3">
              <Fieldset className="usa-fieldset">
                <legend className="usa-legend usa-legend--large" style={{paddingTop: "15%", paddingBottom: "15%", textAlign: "center"}}>{t('Enter Login Info')}</legend>
              </Fieldset>
              <Label className="usa-label" htmlFor="username">Email</Label>
              <TextInput id="username" name="username" type="text"></TextInput>
              <Label className="usa-label" htmlFor="password">Password</Label>
              <TextInput id="password" name="password" type="password"></TextInput>
              <Button type="submit" base>Login</Button>
              <ModalToggleButton modalRef={modalRef} opener>
                  Create Account
              </ModalToggleButton>
                <Modal
                  ref={modalRef}
                  id="modal-1"
                  aria-labelledby="modal-1-heading"
                  aria-describedby="modal-1-description">
                  <ModalHeading id="modal-1-heading">
                    Create Account
                  </ModalHeading>
                  <div className="usa-prose">
                      <Form onSubmit={handleRegistry}>
                      <Label className="usa-label" htmlFor="new-username">Email</Label>
                      <TextInput id="new-username" name="new-username" type="text"></TextInput>
                      <Label className="usa-label" htmlFor="new-password">Password</Label>
                      <TextInput id="new-password" name="new-password" type="password"></TextInput>
                      <Label className="usa-label" htmlFor="new-password-2">Re-type Password</Label>
                      <TextInput id="new-password-2" name="new-password-2" type="password"></TextInput>
                      <Button type="submit" size="big" style={{margin:"60px"}}>Create</Button>
                      </Form>
                  </div>
                </Modal>
            </Form>
          </div>
        </div>
        </main>
    </>
        );
}
export default Login;