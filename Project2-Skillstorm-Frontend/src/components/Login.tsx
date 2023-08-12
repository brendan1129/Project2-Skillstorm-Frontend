import { FunctionComponent,  useRef, useState } from "react";
import { Button, DatePicker, Fieldset, Form, Grid, GridContainer,  Label, Modal, ModalHeading, ModalRef, ModalToggleButton, Select, TextInput,  } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'
import { Auth, User } from "../api/TaxApi.js";
import React from "react";
import moment from "moment";

const Login: FunctionComponent = () => {

  

  

  // t, i18n for translations
  const { t } = useTranslation();

  const navigate = useNavigate();


  const [authData, setAuthData] = useState({
    email : "",
    password : ""
  })

  const [userData, setUserData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    ssn : "",
    dateOfBirth : "",
    streetPrimary : "",
    streetSecondary : "",
    city : "",
    state : "",
    zipCode: 0,
    maritalStatus: ""
  })

  const [showPassword, setShowPassword] = useState(false);

  // Registration Modal
  const modalRef = useRef<ModalRef>(null);

  const handleDateChange = date => {
    let newDate = moment(date).toISOString();
    setUserData({...userData, dateOfBirth : newDate})
}

  const handleLogin = (event: any) => {
    event.preventDefault();

     const newAuth : Auth = {
        email : String(authData.email),
        password : String(authData.password),
        role : "USER"
     }

     fetch("http://localhost:8080/auth/login", {
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
      window.setTimeout(() => {
        navigate('/editAcc')
       }, 1500)

    })
    .catch(() => 
      alert("Incorrect Email/Password")
    )
  }

  const handleRegistry = (event: any) => {
    event.preventDefault();

     const regAuth : Auth = {
        email : String(authData.email),
        password : String(authData.password),
        role : "USER"
     }

     const newUser : User = {
      firstName : String(userData.firstName),
      lastName : String(userData.lastName),
      email : String(authData.email),
      ssn : String(userData.ssn),
      dateOfBirth : new Date(userData.dateOfBirth),
      address : {
          streetPrimary : String(userData.streetPrimary),
          streetSecondary : String(userData?.streetSecondary),
          city : String(userData.city),
          state : String(userData.state),
          zipCode : Number(userData.zipCode)
      },
      maritalStatus : String(userData.maritalStatus)
     }

    fetch("http://localhost:8080/auth/register", {
      headers: {
        "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(regAuth),
    })
    .then(() => {
      fetch("http://localhost:8080/users/new", {
      headers: {
        "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(newUser),
    })
    .then(() => {
      navigate(0)
    })
    .catch(error => console.error(error));
    })
    .catch( () => {alert("Account already exists")});
    
    

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
                      <TextInput onChange={(e) => setAuthData({...authData, email : e.target.value})} id="new-username" name="new-username" type="text" required></TextInput>
                      <Label className="usa-label" htmlFor="new-password">{t("Login.Password")}</Label>
                      <TextInput onChange={(e) => setAuthData({...authData, password : e.target.value})} id="new-password" name="new-password" type="password" required></TextInput>
                      <legend className="usa-legend usa-legend"><b>General</b></legend>
                      <Label className="usa-label" htmlFor="first-name">First Name</Label>
                                <TextInput onChange={(e) => setUserData({...userData, firstName : e.target.value})} id="first-name" name="first-name" aria-describedby="nameHint" type="text" required></TextInput>
                                <Label className="usa-label" htmlFor="last-name">Last Name</Label>
                                <TextInput onChange={(e) => setUserData({...userData, lastName : e.target.value})} id="last-name" name="last-name" aria-describedby="nameHint" type="text" required></TextInput>
                                <Label htmlFor='dob-date' id='dob-date-label'>Date of Birth</Label>
                                <div className="usa-hint" id="dob-date-hint">(mm/dd/yyyy)</div>
                                <DatePicker
                                    onChange={handleDateChange}
                                    aria-describedby="dob-date-hint"
                                    aria-labelledby="dob-date-label"
                                    id="dob-date"
                                    name="dob-date"
                                    required
                                />
                                <Label className="usa-label" htmlFor="ssn">Social Security Number</Label>
                                <TextInput onChange={(e) => setUserData({...userData, ssn : e.target.value})} id="ssn" name="ssn" aria-describedby="nameHint" type="text" required></TextInput>
                                <legend className="usa-legend usa-legend"><b>Address</b></legend>
                                <Label  className="usa-label" htmlFor="street-primary">Street Primary</Label>
                                <TextInput onChange={(e) => setUserData({...userData, streetPrimary : e.target.value})} id="street-primary" name="street-primary" type="text" required></TextInput>
                                <Label className="usa-label" htmlFor="street-secondary">Street Secondary</Label>
                                <TextInput onChange={(e) => setUserData({...userData, streetSecondary : e.target.value})} id="street-secondary" name="street-secondary" type="text" ></TextInput>
                                <Label className="usa-label" htmlFor="city">City</Label>
                                <TextInput onChange={(e) => setUserData({...userData, city : e.target.value})} id="city" name="city" type="text" required></TextInput>
                                <Label className="usa-label" htmlFor="state">State</Label>
                                <TextInput onChange={(e) => setUserData({...userData, state : e.target.value})} id="state" name="state" type="text" required></TextInput>
                                <Label className="usa-label" htmlFor="zip">Zip Code</Label>
                                <TextInput onChange={(e) => setUserData({...userData, zipCode : parseInt(e.target.value)})} id="zip" name="zip" type="text" required></TextInput>
                                <Label htmlFor='filing-status'>Filing Status</Label>
                                <Select
                                    onChange={(e) => setUserData({...userData, maritalStatus : e.target.value})}
                                    
                                    id="filing-status"
                                    name="filing-status"
                                    required
                                >
                                    <React.Fragment key=".0">
                                    <option value="SINGLE" selected>
                                        Single
                                    </option>
                                    <option value="MARRIED_FILING_JOINTLY">
                                        Married Filing Jointly
                                    </option>
                                    <option value="MARRIED_FILING_SEPARATELY">
                                        Married Filing Separately
                                    </option>
                                    <option value="HEAD_OF_HOUSEHOLD">
                                        Head Of Household
                                    </option>
                                    </React.Fragment>
                                </Select>
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