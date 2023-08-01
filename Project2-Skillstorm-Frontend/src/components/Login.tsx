import { FunctionComponent, useEffect, useRef, useState } from "react";
import { redirect } from 'react-router-dom';
import Nav from "./Nav";
import { Button, Fieldset, Form, GovBanner, Header, Label, Modal, ModalHeading, ModalRef, ModalToggleButton, TextInput, Title } from "@trussworks/react-uswds";

const Login: FunctionComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    // Check if there's a user in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      // User is logged in, set isLoggedIn to true
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
    redirect("/home");
  };

  // Redirect to another page if user is logged in
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
              <a href="/home" title="Home" aria-label="Home"><h2>Tax Processing System</h2></a>
            </Title>
          </div>
        </Header>
        <main id="main-content">
        <div className= "card">
          <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
            <Form onSubmit={handleLogin} className= "usa-form usa-form--large margin-bottom-3">
              <Fieldset className="usa-fieldset">
                <legend className="usa-legend usa-legend--large" style={{paddingTop: "15%", paddingBottom: "15%", textAlign: "center"}}>Enter Login Information</legend>
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
                    <p id="modal-1-description">
                      <Form onSubmit={handleRegistry}>
                      <Label className="usa-label" htmlFor="new-username">Email</Label>
                      <TextInput id="new-username" name="new-username" type="text"></TextInput>
                      <Label className="usa-label" htmlFor="new-password">Password</Label>
                      <TextInput id="new-password" name="new-password" type="password"></TextInput>
                      <Label className="usa-label" htmlFor="new-password-2">Re-type Password</Label>
                      <TextInput id="new-password-2" name="new-password-2" type="password"></TextInput>
                      <Button type="submit" size="big" style={{margin:"60px"}}>Create</Button>
                      </Form>
                    </p>
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