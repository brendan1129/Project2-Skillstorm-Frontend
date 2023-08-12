import { Fieldset, Form, Grid, GridContainer, Label, TextInput, Button } from "@trussworks/react-uswds";
import { taxApi } from "../api/TaxApi";
import { useNavigate } from 'react-router-dom'

import { useTranslation } from "react-i18next";


function Results() {

    const email = String(localStorage.getItem("email")).replace(/\"/g, "")
    const {data : results} = taxApi.useFindResultsQuery(email)
    const thisResults = results;
    const navigate = useNavigate();
    const {t} = useTranslation();


    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate("/editTax")
    }

    function checkRefund() {

        if (thisResults?.result !== undefined ) {
            if (thisResults.result > 0) {
                return (
                    <>
                        <Label className="usa-label" htmlFor="result">{t("Results.Taxes Owed to the IRS")}</Label>
                        <TextInput id="result" name="result" aria-describedby="nameHint" type="text" value={"$" + round(thisResults?.result, 2)} disabled={true}></TextInput>
                    </>
                )
            }
            else if (thisResults.result <= 0) {
                const refund : number = round(thisResults?.result * -1, 2);
                return(
                    <>

                    <Label className="usa-label" htmlFor="result">{t("Results.Tax Refund")}</Label>
                    <TextInput id="result" name="result" aria-describedby="nameHint" type="text" value={"$" + refund} disabled={true}></TextInput>
                    </>
                )

            }
        }
    }

    const round = function(num: number, places: number) {
        const demical = 10 ** places;
        return Math.round(num * demical) / demical;
      };

    return (      // All classes and components found at https://trussworks.github.io/react-uswds/
            // and https://designsystem.digital.gov/how-to-use-uswds/
            <div className="bg-base-lightest">
                <GridContainer className="usa-section">
                  <Grid row className="margin-x-neg-205 flex-justify-center">
                        <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
                            <Form onSubmit={handleSubmit} className= "usa-form usa-form--large margin-bottom-3">
                            <Fieldset className="usa-fieldset">
                                <legend className="usa-legend usa-legend--large">{t("Results.Tax Results")}</legend>
                                <legend className="usa-legend usa-legend"><b>{t("Results.Filing Year 2022")}</b></legend>
                                <Label className="usa-label" htmlFor="total-earned">{t("Results.Total Earned")}</Label>
                                <TextInput id="total-earned" name="total-earned" aria-describedby="nameHint" type="text" value={"$" + thisResults?.earned} disabled={true}></TextInput>
                                <Label className="usa-label" htmlFor="total-withheld">{t("Results.Total Withheld")}</Label>
                                <TextInput id="total-withheld" name="total-withheld" aria-describedby="nameHint" type="text" value={"$" + thisResults?.withheld} disabled={true}></TextInput>
                                {checkRefund()}
                                <Button className="usa-button" accentStyle='warm' type="submit" style={{position:"relative", left:"32%"}} base> {t("Results.Back")} </Button>
                            </Fieldset>
                            </Form>
                        </div>
                    </Grid>
                </GridContainer>
             </div>
        
    );
}
export default Results;