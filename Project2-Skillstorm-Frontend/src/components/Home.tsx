import { Button, Fieldset, Form, Grid, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
    const {t, i18n} = useTranslation();
    // Home component implementation
    return (
        // All classes and components found at https://trussworks.github.io/react-uswds/
        // and https://designsystem.digital.gov/how-to-use-uswds/
        <div className="bg-base-lightest">
            <GridContainer className="usa-section">
              <Grid row className="margin-x-neg-205 flex-justify-center">
                    <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
                        <h1>{t("Home.Welcome")}</h1>
                        <Button className="usa-button--big" style={{position:"relative", left:"25%"}}type="submit" > {t("Home.Log In")} </Button>
                        
                    </div>
                </Grid>
            </GridContainer>
         </div>
        );
};
  
export default Home;