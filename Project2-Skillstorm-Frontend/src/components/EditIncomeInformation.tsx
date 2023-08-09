import { Button, DatePicker, Fieldset, Form, Grid, GridContainer, Label, Select, TextInput } from '@trussworks/react-uswds';
import './Component.css'
import '/node_modules/@trussworks/react-uswds/lib/uswds.css';
import React, { useState } from 'react';


function EditIncomeInformation() {

  const handleSubmit = () => {

  };

  // Hook for capturing IncomeType from form ( W2 or 1099 )
  const [incomeType, setIncomeType] = useState("");

  // Event occurs when dropdown selection is made
  const handleIncomeTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIncomeType(event.target.value);
  };
  const renderTextInputs = () => {
    // render different form values based on dropdown selection of Income Type
    if (incomeType === "value1") {
      return (
        // Return W2 Form values
        <div>
            <Label htmlFor='ein'>Employer Identification Number (EIN)</Label>
            <TextInput id="ein" name="ein" aria-describedby='einHint' type="text"></TextInput>
            <Label htmlFor='w2-amount-earned'>Amount Earned</Label>
            <TextInput id="w2-amount-earned" name="w2-amount-earned" type="text"></TextInput>
            <Label htmlFor='w2-amount-withheld'>Amount Withheld</Label>
            <TextInput id="w2-amount-withheld" name="w2-amount-withheld" type="text"></TextInput>
            <legend className="usa-legend usa-legend"><b>Employer Information</b></legend>
            <Label htmlFor='w2-employer-name'>Employer Name</Label>
            <TextInput id="w2-employer-name" name="w2-employer-name" type="text"></TextInput> 
            <legend className="usa-legend usa-legend"><b>Employer Address</b></legend>
            <Label className="usa-label" htmlFor="w2-employer-street-primary">Street Primary</Label>
            <TextInput id="w2-employer-street-primary" name="w2-employer-street-primary" type="text"></TextInput>
            <Label className="usa-label" htmlFor="w2-employer-street-secondary">Street Secondary</Label>
            <TextInput id="w2-employer-street-secondary" name="w2-employer-street-secondary" type="text"></TextInput>
            <Label className="usa-label" htmlFor="w2-employer-city">City</Label>
            <TextInput id="w2-employer-city" name="w2-employer-city" type="text"></TextInput>
            <Label className="usa-label" htmlFor="w2-employer-state">State</Label>
            <TextInput id="w2-employer-state" name="w2-employer-state" type="text"></TextInput>
            <Label className="usa-label" htmlFor="w2-employer-zip">Zip Code</Label>      
            <TextInput id="w2-employer-zip" name="w2-employer-zip" type="text"></TextInput>   
        </div>
      );
    } else if (incomeType === "value2") {
      return (
        // Render 1099 Form Values
        <div>
            <Label htmlFor='tin'>Payer's TIN</Label>
            <TextInput id="tin" name="tin" aria-describedby='tinHint' type="text"></TextInput>
            <Label htmlFor='1099-amount-earned'>Amount Earned</Label>
            <TextInput id="1099-amount-earned" name="1099-amount-earned" type="text"></TextInput>
            <Label htmlFor='1099-amount-withheld'>Amount Withheld</Label>
            <TextInput id="1099-amount-withheld" name="1099-amount-withheld" type="text"></TextInput>
            <legend className="usa-legend usa-legend"><b>Employer Information</b></legend>
            <Label htmlFor='1099-employer-first'>Employer First Name</Label>
            <TextInput id="1099-employer-first" name="1099-employer-first" type="text"></TextInput>
            <Label htmlFor='1099-employer-last'>Employer Last Name</Label>
            <TextInput id="1099-employer-last" name="1099-employer-last" type="text"></TextInput> 
            <legend className="usa-legend usa-legend"><b>Employer Address</b></legend>
            <Label className="usa-label" htmlFor="1099-employer-street-primary">Street Primary</Label>
            <TextInput id="1099-employer-street-primary" name="1099-employer-street-primary" type="text"></TextInput>
            <Label className="usa-label" htmlFor="1099-employer-street-secondary">Street Secondary</Label>
            <TextInput id="1099-employer-street-secondary" name="1099-employer-street-secondary" type="text"></TextInput>
            <Label className="usa-label" htmlFor="1099-employer-city">City</Label>
            <TextInput id="1099-employer-city" name="1099-employer-city" type="text"></TextInput>
            <Label className="usa-label" htmlFor="1099-employer-state">State</Label>
            <TextInput id="1099-employer-state" name="1099-employer-state" type="text"></TextInput>
            <Label className="usa-label" htmlFor="1099-employer-zip">Zip Code</Label>      
            <TextInput id="1099-employer-zip" name="1099-employer-zip" type="text"></TextInput>                     
        </div>
      );
    } 
  };
  return (
    <div className="bg-base-lightest">
    <GridContainer className="usa-section">
      <Grid row className="margin-x-neg-205 flex-justify-center">
        <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
          <Form onSubmit={handleSubmit} className= "usa-form usa-form--large margin-bottom-3">
            <Fieldset className="usa-fieldset">
              <Label htmlFor='income-type'>Income Type</Label>
              <Select
                id="income-type"
                name="income-type"
                onChange={handleIncomeTypeChange}
              >
                <React.Fragment key=".0">
                  <option>
                    - Select -{' '}
                  </option>
                  <option value="value1">
                    W2
                  </option>
                  <option value="value2">
                    1099
                  </option>
                </React.Fragment>
              </Select>
              {renderTextInputs()}
              <Label htmlFor='income'>Income</Label>
              <div className="usa-hint" id="incomeHint">Obtained from W2 or 1099 Forms</div>
              <TextInput id="income" name="income" aria-describedby='incomeHint' type="text"></TextInput>
              <Label htmlFor='deduction'>Deduction</Label>
              <div className="usa-hint" id="deductionHint"> $12,950 for single filers, $25,900 for joint filers or $19,400 for heads of household </div>
              <TextInput id="deduction" name="deduction" aria-describedby='deductionHint' type="text"></TextInput>
              <Button type="submit" base> Calculate Return </Button>
            </Fieldset>
          </Form>
        </div>
      </Grid>
    </GridContainer>
    </div>
  );
}

export default EditIncomeInformation;