import { Button, DatePicker, Fieldset, Form, Label, Select, TextInput } from '@trussworks/react-uswds';
import './Component.css'
import '/node_modules/@trussworks/react-uswds/lib/uswds.css';
import React from 'react';


function EditIncomeInformation() {

  const handleSubmit = () => {

  };

  return (
    <div className= "card">
    <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
    <Form onSubmit={handleSubmit} className= "usa-form usa-form--large margin-bottom-3">
      <Fieldset className="usa-fieldset">
        <legend className="usa-legend usa-legend--large">Enter Financial Information</legend>
        <Label className="usa-label" htmlFor="given-name">Full Legal Name</Label>
        <div className="usa-hint" id="nameHint">For example, John Doe, Juan Perez</div>
        <TextInput id="given-name" name="given-name" aria-describedby="nameHint" type="text"></TextInput>
        <Label htmlFor='dob-date' id='dob-date-label'>Date of Birth</Label>
        <div className="usa-hint" id="dob-date-hint">(mm/dd/yyyy)</div>
        <DatePicker
          aria-describedby="dob-date-hint"
          aria-labelledby="dob-date-label"
          id="dob-date"
          name="dob-date"
        />
        <Label htmlFor='ssn'>Social Security Number</Label>
        <div className="usa-hint" id="ssnHint">(###-##-####)</div>
        <TextInput id="ssn" name="ssn" aria-describedby="ssnHint" type="text"></TextInput>
        <Label htmlFor='address'>Address</Label>
        <TextInput id="address" name="address" type="text"></TextInput>
        <Label htmlFor='filing-status'>Filing Status</Label>
        <Select
          id="filing-status"
          name="filing-status"
        >
          <React.Fragment key=".0">
            <option>
              - Select -{' '}
            </option>
            <option value="value1">
              Single
            </option>
            <option value="value2">
              Married Filing Jointly
            </option>
            <option value="value3">
              Married Filing Separately
            </option>
            <option value="value4">
              Head Of Household
            </option>
            <option value="value5">
              Qualifying Surviving Spouse
            </option>
          </React.Fragment>
        </Select>
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
    </div>
  );
}

export default EditIncomeInformation;