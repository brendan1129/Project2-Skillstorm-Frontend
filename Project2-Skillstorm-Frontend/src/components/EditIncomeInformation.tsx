import { Button, Table, Fieldset, Form, Grid, GridContainer, Label, Select, TextInput} from '@trussworks/react-uswds';
import './Component.css'
import '/node_modules/@trussworks/react-uswds/lib/uswds.css';
import React, { useState } from 'react';
import { taxApi, Form1099, FormW2 } from '../api/TaxApi';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function EditIncomeInformation() {

  // add API calls
  const email = String(localStorage.getItem("email")).replace(/\"/g, "")
  const {data : form1099s, } = taxApi.useFindForm1099Query(email);
  const {data : formW2 } = taxApi.useFindFormW2Query(email);
  const [create1099] = taxApi.useCreateForm1099Mutation();
  const [createW2] = taxApi.useCreateFormW2Mutation();
  const [delete1099] =  taxApi.useDeleteForm1099Mutation();
  const [deleteW2] = taxApi.useDeleteFormW2Mutation();
  const thisForm1099s = form1099s;
  const thisFormW2 = formW2;
  const {t} = useTranslation();
  // useNavigate to change pages/refresh state
  const navigate = useNavigate();

  // builds the initial form1099 shell
  const [form1099Data, setForm1099Data] = useState({
      payerTIN: "",
      email: "",
      businessName : "",
      streetPrimary : "",
      streetSecondary : "",
      city : "",
      state : "",
      zipCode : 0,
      amountEarned : 0,
      amountWithheld: 0
    })

  // builds the initial formW2 shell
  const [formW2Data, setFormW2Data] = useState({
    employerEIN : "",
    email : "",
    amountEarned : 0,
    amountWithheld : 0,
    employerName : "",
    streetPrimary : "",
    streetSecondary : "",
    city : "",
    state : "",
    zipCode: 0,
})

  // deletes a form1099
  function handle1099Delete(form1099: Form1099) {
    delete1099(form1099)
    navigate(0)
  }

  // deletes a formW2
  function handleW2Delete(formW2: FormW2) {
    console.log(formW2)
    deleteW2(formW2)
    navigate(0)
  }

  // adds a new form1099 to the database
  const handleNew1099Submit = (event: any) => {
    event.preventDefault();

    // creates the 1099 object
    const newForm1099 : Form1099 = {
        payerTIN : String(form1099Data?.payerTIN),
        email : email,
        businessName : String(form1099Data?.businessName),
        address : {
            streetPrimary : String(form1099Data.streetPrimary),
            streetSecondary : String(form1099Data?.streetSecondary),
            city : String(form1099Data.city),
            state : String(form1099Data.state),
            zipCode : Number(form1099Data.zipCode)
        },
        amountEarned : Number(form1099Data.amountEarned),
        amountWithheld: Number(form1099Data.amountWithheld)
    }

    // makes the API call
    console.log(newForm1099)
    create1099(newForm1099)
        .unwrap()
        .then( () => {
            // shows Success alert
           navigate(0)
      })
        .catch(error => console.error(error))
}

// adds a new formW2 to the database
const handleNewW2Submit = (event: any) => {
  event.preventDefault();

  // creates the W2 object
  const newFormW2 : FormW2 = {
      employerEIN : String(formW2Data?.employerEIN),
      email : email,
      employerName : String(formW2Data?.employerName),
      address : {
          streetPrimary : String(formW2Data.streetPrimary),
          streetSecondary : String(formW2Data?.streetSecondary),
          city : String(formW2Data.city),
          state : String(formW2Data.state),
          zipCode : Number(formW2Data.zipCode)
      },
      amountEarned : Number(formW2Data.amountEarned),
      amountWithheld: Number(formW2Data.amountWithheld)
  }

  // makes the API call
  console.log(newFormW2)
  createW2(newFormW2)
      .unwrap()
      .then( () => {
         navigate(0)
    })
      .catch(error => console.error(error))
}

// moves to the results page
const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate('/results')
}


  // creates the form table
  function handleTable(tableData, formType : string) {
    if (formType === "1099")
        return(
          <>
            {tableData?.map((form) => {
                return (
                  <tr key={form.payerTIN}>
                      <td>{"1099"}</td>
                      <td>{form.businessName}</td>
                      <td>{form.payerTIN}</td>
                      <td>${form.amountEarned}</td>
                      <td>${form.amountWithheld}</td>
                      <td><Button className="usa-button--secondary margin-right-0 margin-bottom-2" type="button" onClick={() => handle1099Delete(form)}>{t("Form1099Table.Remove")}</Button></td>
                  </tr>
                  );
              })}
          </>
        )
      else if(formType === "W2")
        return (
          <>
             {tableData?.map((form) => {
                return (
                  <tr key={form.employerEIN}>
                      <td>{"W2"}</td>
                      <td>{form.employerName}</td>
                      <td>{form.employerEIN}</td>
                      <td>${form.amountEarned}</td>
                      <td>${form.amountWithheld}</td>
                      <td><Button className="usa-button--secondary margin-right-0 margin-bottom-2" accentStyle="warm" type="button" onClick={() => handleW2Delete(form)}>{t("Form1099Table.Remove")}</Button></td>
                  </tr>
                  );
              })}
          </>
        )
  }

  // Hook for capturing IncomeType from form ( W2 or 1099 )
  const [incomeType, setIncomeType] = useState("");

  // Event occurs when dropdown selection is made
  const handleIncomeTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIncomeType(event.target.value);
  };
  const renderTextInputs = () => {
    // render different form values based on dropdown selection of Income Type
    if (incomeType === "formW2") {
      return (
        // Return W2 Form values        
        <div style={{borderBottom:"solid"}}>
            <Label htmlFor='ein'>{t("EditIncome.Employer Identification Number (EIN)")}</Label>
            <TextInput onChange={(e) => setFormW2Data({...formW2Data, employerEIN : e.target.value})} 
            id="ein" 
            name="ein" 
            aria-describedby='einHint' 
            type="text"
            >
            
            </TextInput>
            <Label htmlFor='w2-amount-earned'>{t("EditIncome.Amount Earned")}</Label>
            <TextInput onChange={(e) => setFormW2Data({...formW2Data, amountEarned : parseInt(e.target.value)})} 
            id="w2-amount-earned" 
            name="w2-amount-earned" 
            type="text"
           ></TextInput>
            <Label htmlFor='w2-amount-withheld'>{t("EditIncome.Amount Withheld")}</Label>
            <TextInput onChange={(e) => setFormW2Data({...formW2Data, amountWithheld : parseInt(e.target.value)})} 
            id="w2-amount-withheld" 
            name="w2-amount-withheld" 
            type="text"
            ></TextInput>
            <legend className="usa-legend usa-legend"><b>{t("EditIncome.Employer Information")}</b></legend>
            <Label htmlFor='w2-employer-name'>{t("EditIncome.Employer Name")}</Label>
            <TextInput onChange={(e) => setFormW2Data({...formW2Data, employerName : e.target.value})} id="w2-employer-name" name="w2-employer-name" type="text"></TextInput> 
            <legend className="usa-legend usa-legend"><b>{t("EditIncome.Employer Address")}</b></legend>
            <Label className="usa-label" htmlFor="w2-employer-street-primary">{t("EditIncome.Street Primary")}</Label>
            <TextInput onChange={(e) => setFormW2Data({...formW2Data, streetPrimary : e.target.value})} id="w2-employer-street-primary" name="w2-employer-street-primary" type="text"></TextInput>
            <Label className="usa-label" htmlFor="w2-employer-street-secondary">{t("EditIncome.Street Secondary")}</Label>
            <TextInput onChange={(e) => setFormW2Data({...formW2Data, streetSecondary : e.target.value})} id="w2-employer-street-secondary" name="w2-employer-street-secondary" type="text"></TextInput>
            <Label className="usa-label" htmlFor="w2-employer-city">{t("EditIncome.City")}</Label>
            <TextInput onChange={(e) => setFormW2Data({...formW2Data, city : e.target.value})} id="w2-employer-city" name="w2-employer-city" type="text"></TextInput>
            <Label className="usa-label" htmlFor="w2-employer-state">{t("EditIncome.State")}</Label>
            <TextInput onChange={(e) => setFormW2Data({...formW2Data, state : e.target.value})} 
            id="w2-employer-state" 
            name="w2-employer-state" 
            type="text"
            pattern="^[A-Z]{2}$"
            onBlur={(e) => {
                const state = e.target.value;
                if(!state.match(/^[A-Z]{2}$/)) {
                    alert(t("EditIncome.Please enter a valid business state abbreviation"));
                }
            }}></TextInput>
            <Label className="usa-label" htmlFor="w2-employer-zip">{t("EditIncome.Zip Code")}</Label>      
            <TextInput onChange={(e) => setFormW2Data({...formW2Data, zipCode : parseInt(e.target.value)})} id="w2-employer-zip" name="w2-employer-zip" type="text"></TextInput>
            <Button className="usa-button--accent-cool" style={{marginBottom:"25px"}} onClick={handleNewW2Submit}type="button"> Submit Form </Button>   
        </div>
      );
    } else if (incomeType === "form1099") {
      return (
        // Render 1099 Form Values
        <div style={{borderBottom:"solid"}}>
            <Label htmlFor='tin'>{t("EditIncome.Payer's TIN")}</Label>
            <TextInput onChange={(e) => setForm1099Data({...form1099Data, payerTIN : e.target.value})} 
            id="tin" 
            name="tin" 
            aria-describedby='tinHint' 
            type="text"
            pattern="^9[0-9]{2}-[0-9]{2}-[0-9]{4}$"
            ></TextInput>
            <Label htmlFor='1099-amount-earned'>{t("EditIncome.Amount Earned")}</Label>
            <TextInput onChange={(e) => setForm1099Data({...form1099Data, amountEarned : parseInt(e.target.value)})} 
            id="1099-amount-earned" 
            name="1099-amount-earned" 
            type="text"
           ></TextInput>
            <Label htmlFor='1099-amount-withheld'>{t("EditIncome.Amount Withheld")}</Label>
            <TextInput onChange={(e) => setForm1099Data({...form1099Data, amountWithheld : parseInt(e.target.value)})} 
            id="1099-amount-withheld" 
            name="1099-amount-withheld" 
            type="text"
            ></TextInput>
            <legend className="usa-legend usa-legend"><b>{t("EditIncome.Employer Information")}</b></legend>
            <Label htmlFor='1099-employer'>{t("EditIncome.Employer Name")}</Label>
            <TextInput onChange={(e) => setForm1099Data({...form1099Data, businessName : e.target.value})} id="1099-employer" name="1099-employer" type="text"></TextInput>
            <legend className="usa-legend usa-legend"><b>{t("EditIncome.Employer Address")}</b></legend>
            <Label className="usa-label" htmlFor="1099-employer-street-primary">{t("EditIncome.Street Primary")}</Label>
            <TextInput onChange={(e) => setForm1099Data({...form1099Data, streetPrimary : e.target.value})} id="1099-employer-street-primary" name="1099-employer-street-primary" type="text"></TextInput>
            <Label className="usa-label" htmlFor="1099-employer-street-secondary">{t("EditIncome.Street Secondary")}</Label>
            <TextInput onChange={(e) => setForm1099Data({...form1099Data, streetSecondary : e.target.value})} id="1099-employer-street-secondary" name="1099-employer-street-secondary" type="text"></TextInput>
            <Label className="usa-label" htmlFor="1099-employer-city">{t("EditIncome.City")}</Label>
            <TextInput onChange={(e) => setForm1099Data({...form1099Data, city : e.target.value})} id="1099-employer-city" name="1099-employer-city" type="text"></TextInput>
            <Label className="usa-label" htmlFor="1099-employer-state">{t("EditIncome.State")}</Label>
            <TextInput onChange={(e) => setForm1099Data({...form1099Data, state : e.target.value})} 
            id="1099-employer-state" 
            name="1099-employer-state" 
            type="text"
            onBlur={(e) => {
              const state = e.target.value;
              if(!state.match(/^[A-Z]{2}$/)) {
                  alert("Please enter a valid employer state abbreviation");
              }
            }}></TextInput>
            <Label className="usa-label" htmlFor="1099-employer-zip">{t("EditIncome.Zip Code")}</Label>      
            <TextInput onChange={(e) => setForm1099Data({...form1099Data, zipCode : parseInt(e.target.value)})} id="1099-employer-zip" name="1099-employer-zip" type="text"></TextInput>                     
            <Button className="usa-button--accent-cool" style={{marginBottom:"25px"}} onClick={handleNew1099Submit}type="button"> Submit Form </Button>
        </div>
      );
    } 
  };

  return(
    <div className="bg-base-lightest">
    <GridContainer   className="usa-section">
      <Grid row className="margin-x-neg-05 flex-justify-center">
        <div className= "bg-white  padding-y-3 padding-x-15 border border-base-lighter" >
        <div style={{marginLeft: "0%"}}>
          <Form onSubmit={handleSubmit} className= "usa-form usa-form--large margin-bottom-3" >
            <Fieldset className="usa-fieldset ">
            <Grid row>
              <Grid col>
                <h2 className='text-centered'>{t("EditIncome.Submitted Forms")}</h2>
              </Grid>
            </Grid>
            <Grid row>
              <Grid col>
                <div style={{textAlign: "center"}}>
                <Table>
                  <thead>
                      <tr>
                        <th>{t("Form1099Table.Form Type")}</th>
                        <th>{t("Form1099Table.Employer")}</th>
                        <th>{t("Form1099Table.Employer Tax ID")}</th>
                        <th>{t("Form1099Table.Amount Earned")}</th>
                        <th>{t("Form1099Table.Amount Withheld")}</th>
                        <th>{t("Form1099Table.Remove")}</th>
                      </tr>
                  </thead>
                  <tbody>
                    {handleTable(thisForm1099s, "1099")}
                    {handleTable(thisFormW2, "W2")}
                  </tbody>
                </Table>
                </div>
              </Grid>
            </Grid>
          <Button className="usa-button--big" accentStyle='warm' type="submit" style={{position:"relative", left:"25%"}} base> {t("EditIncome.Calculate Results")} </Button>

              <h2>{t("EditIncome.Add Forms")}</h2>
              <Label htmlFor='income-type'>{t("EditIncome.Income Type")}</Label>
              <Select
                id="income-type"
                name="income-type"
                onChange={handleIncomeTypeChange}
              >
                <React.Fragment key=".0">
                  <option>
                  {t("EditIncome.Select")}{' '}
                  </option>
                  <option value="formW2">
                    W2
                  </option>
                  <option value="form1099">
                    1099
                  </option>
                </React.Fragment>
              </Select>
              {renderTextInputs()}
              
            </Fieldset>
          </Form>
          </div>
        </div>
      </Grid>
    </GridContainer>
    </div>
  );
}

export default EditIncomeInformation;
