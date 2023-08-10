import { Button, DatePicker, Fieldset, Form, Grid, GridContainer, Label, Select, TextInput } from "@trussworks/react-uswds";
import { Fragment } from "react";

function EditAccount() {

    const handleSubmit = () => {

    }
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
                        <TextInput id="first-name" name="first-name" aria-describedby="nameHint" type="text"></TextInput>
                        <Label className="usa-label" htmlFor="last-name">Last Name</Label>
                        <TextInput id="last-name" name="last-name" aria-describedby="nameHint" type="text"></TextInput>
                        <Label htmlFor='dob-date' id='dob-date-label'>Date of Birth</Label>
                        <div className="usa-hint" id="dob-date-hint">(mm/dd/yyyy)</div>
                        <DatePicker
                            aria-describedby="dob-date-hint"
                            aria-labelledby="dob-date-label"
                            id="dob-date"
                            name="dob-date"
                        />
                        <legend className="usa-legend usa-legend"><b>Address</b></legend>
                        <Label className="usa-label" htmlFor="street-primary">Street Primary</Label>
                        <TextInput id="street-primary" name="street-primary" type="text"></TextInput>
                        <Label className="usa-label" htmlFor="street-secondary">Street Secondary</Label>
                        <TextInput id="street-secondary" name="street-secondary" type="text"></TextInput>
                        <Label className="usa-label" htmlFor="city">City</Label>
                        <TextInput id="city" name="city" type="text"></TextInput>
                        <Label className="usa-label" htmlFor="state">State</Label>
                        <TextInput id="state" name="state" type="text"></TextInput>
                        <Label className="usa-label" htmlFor="zip">Zip Code</Label>
                        <TextInput id="zip" name="zip" type="text"></TextInput>
                        <Label htmlFor='filing-status'>Filing Status</Label>
                        <Select
                            id="filing-status"
                            name="filing-status"
                        >
                            <Fragment key=".0">
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
                            </Fragment>
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
export default EditAccount;