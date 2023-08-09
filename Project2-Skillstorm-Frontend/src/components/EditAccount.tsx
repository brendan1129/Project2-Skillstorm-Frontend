import { Button, DatePicker, Fieldset, Form, Grid, GridContainer, Label, Select, TextInput, Alert, Modal} from "@trussworks/react-uswds";
import React from "react";
import { taxApi, User } from "../api/TaxApi";
import { useState, useRef } from 'react'
import moment from "moment";
import { useNavigate } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import EditIncomeInformation from "./EditIncomeInformation";
//import EditIncomeInformation from "./EditIncomeInformation";




const EditAccount = () => {

    // hooks in the queries from the API
    const {data : user, refetch} = taxApi.useFindUserQuery("jkersey9@gmail.com");
    const [updateUser] = taxApi.useUpdateUserMutation();
    const thisUser = user;
    const navigate = useNavigate();

   
    // sets the form to useState so changes can be read
    const [formData, setFormData] = useState({
        firstName : thisUser?.firstName,
        lastName : thisUser?.lastName,
        email : thisUser?.email,
        ssn : thisUser?.ssn,
        dateOfBirth : String(thisUser?.dateOfBirth),
        streetPrimary : thisUser?.address.streetPrimary,
        streetSecondary : thisUser?.address?.streetSecondary,
        city : thisUser?.address.city,
        state : thisUser?.address.state,
        zipCode: thisUser?.address.zipCode,
        maritalStatus: thisUser?.maritalStatus

    })

    // handles the state when the Date of Birth form is changed
    const handleDateChange = date => {
        let newDate = moment(date).toISOString();
        setFormData({...formData, dateOfBirth : newDate})
    }

    //const navigate = useNavigate();
    // sends updated User info when Submit is pressed
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData.dateOfBirth);
        
        // checks if any fields were unchanged, as their value will be undefined. This sets them back to defaultValue
        if (typeof(formData.firstName) === 'undefined') {
            formData.firstName = thisUser?.firstName;
        }
        if (typeof(formData.lastName) === 'undefined') {
            formData.lastName = thisUser?.lastName;
        }
        if (typeof(formData.ssn) === 'undefined') {
            formData.ssn = thisUser?.ssn;
        }
        if (typeof(formData.dateOfBirth) === 'undefined') {
            formData.dateOfBirth = String(thisUser?.dateOfBirth);
        }
        if (typeof(formData.streetPrimary) === 'undefined') {
            formData.streetPrimary = thisUser?.address.streetPrimary;
        }
        if (typeof(formData.streetSecondary) === 'undefined') {
            formData.streetSecondary = thisUser?.address?.streetSecondary;
                if (thisUser?.address?.streetSecondary === 'undefined') {
                    formData.streetSecondary = " ";
                }
        }
        if (typeof(formData.city) === 'undefined') {
            formData.city = thisUser?.address.city;
        }
        if (typeof(formData.state) === 'undefined') {
            formData.state = thisUser?.address.state;
        }
        if (typeof(formData.zipCode) === 'undefined') {
            formData.zipCode = thisUser?.address.zipCode;
        }
        if (typeof(formData.maritalStatus) === 'undefined') {
            formData.maritalStatus = thisUser?.maritalStatus;
            if (thisUser?.maritalStatus === 'undefined') {
                formData.streetSecondary = "SINGLE";
            }
        }

        // creates the User object
        const updatedUser : User = {
            firstName : String(formData.firstName),
            lastName : String(formData.lastName),
            email : String(thisUser?.email),
            ssn : String(formData.ssn),
            dateOfBirth : new Date(formData.dateOfBirth),
            address : {
                streetPrimary : String(formData.streetPrimary),
                streetSecondary : String(formData?.streetSecondary),
                city : String(formData.city),
                state : String(formData.state),
                zipCode : Number(formData.zipCode)
            },
            maritalStatus : String(formData.maritalStatus)
        }

        // makes the API call
        updateUser(updatedUser)
            .unwrap()
            .then( () => {
               render(<><Alert className='usa-alert--success' type='success' headingLevel="h4" heading="Saved" style={{position:"fixed", top:0, left:0, width:"10%"}}/></>)
               window.setTimeout(() => {
                cleanup()
                navigate('/editTax')
               }, 2000)
               

          })
            .catch(error => console.error(error))
    }

    
        

    // this if makes sure the user GET API call has finished before the form is built. Date of Birth and Marital Status will not properly populate otherwise
    if (thisUser?.maritalStatus !== undefined) {
        return (
            // All classes and components found at https://trussworks.github.io/react-uswds/
            // and https://designsystem.digital.gov/how-to-use-uswds/
            <div className="bg-base-lightest">
                <GridContainer className="usa-section">
                  <Grid row className="margin-x-neg-205 flex-justify-center">
                        <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
                            <Form onSubmit={handleSubmit} className= "usa-form usa-form--large margin-bottom-3">
                            <Fieldset className="usa-fieldset">
                                <legend className="usa-legend usa-legend--large">Edit Account Information</legend>
                                <legend className="usa-legend usa-legend"><b>General</b></legend>
                                <Label className="usa-label" htmlFor="first-name">First Name</Label>
                                <TextInput onChange={(e) => setFormData({...formData, firstName : e.target.value})} id="first-name" name="first-name" aria-describedby="nameHint" type="text" defaultValue={thisUser?.firstName}></TextInput>
                                <Label className="usa-label" htmlFor="last-name">Last Name</Label>
                                <TextInput onChange={(e) => setFormData({...formData, lastName : e.target.value})} id="last-name" name="last-name" aria-describedby="nameHint" type="text" defaultValue={thisUser?.lastName}></TextInput>
                                <Label className="usa-label" htmlFor="email">E-mail</Label>
                                <TextInput onChange={(e) => setFormData({...formData, email : e.target.value})} id="email" name="email" aria-describedby="nameHint" type="text" defaultValue={thisUser?.email} disabled={true}></TextInput>
                                <Label htmlFor='dob-date' id='dob-date-label'>Date of Birth</Label>
                                <div className="usa-hint" id="dob-date-hint">(mm/dd/yyyy)</div>
                                <DatePicker
                                    onChange={handleDateChange}
                                    defaultValue={String(thisUser?.dateOfBirth)}
                                    aria-describedby="dob-date-hint"
                                    aria-labelledby="dob-date-label"
                                    id="dob-date"
                                    name="dob-date"
                                />
                                <Label className="usa-label" htmlFor="ssn">Social Security Number</Label>
                                <TextInput onChange={(e) => setFormData({...formData, ssn : e.target.value})} id="ssn" name="ssn" aria-describedby="nameHint" type="text" defaultValue={thisUser?.ssn}></TextInput>
                                <legend className="usa-legend usa-legend"><b>Address</b></legend>
                                <Label  className="usa-label" htmlFor="street-primary">Street Primary</Label>
                                <TextInput onChange={(e) => setFormData({...formData, streetPrimary : e.target.value})} id="street-primary" name="street-primary" type="text" defaultValue={thisUser?.address.streetPrimary}></TextInput>
                                <Label className="usa-label" htmlFor="street-secondary">Street Secondary</Label>
                                <TextInput onChange={(e) => setFormData({...formData, streetSecondary : e.target.value})} id="street-secondary" name="street-secondary" type="text" defaultValue={thisUser?.address?.streetSecondary || ''}></TextInput>
                                <Label className="usa-label" htmlFor="city">City</Label>
                                <TextInput onChange={(e) => setFormData({...formData, city : e.target.value})} id="city" name="city" type="text" defaultValue={thisUser?.address.city}></TextInput>
                                <Label className="usa-label" htmlFor="state">State</Label>
                                <TextInput onChange={(e) => setFormData({...formData, state : e.target.value})} id="state" name="state" type="text" defaultValue={thisUser?.address.state}></TextInput>
                                <Label className="usa-label" htmlFor="zip">Zip Code</Label>
                                <TextInput onChange={(e) => setFormData({...formData, zipCode : parseInt(e.target.value)})} id="zip" name="zip" type="text" defaultValue={thisUser?.address.zipCode}></TextInput>
                                <Label htmlFor='filing-status'>Filing Status</Label>
                                <Select
                                    onChange={(e) => setFormData({...formData, maritalStatus : e.target.value})}
                                    defaultValue={thisUser?.maritalStatus}
                                    id="filing-status"
                                    name="filing-status"
                                >
                                    <React.Fragment key=".0">
                                    <option>
                                        - Select -{' '}
                                    </option>
                                    <option value="SINGLE">
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
                            </Fieldset>
                            <Button type="submit" base> Save </Button>
                            </Form>
                        </div>
                    </Grid>
                </GridContainer>
             </div>
            );
        
        }
}
export default EditAccount;