import { Button, Fieldset, Form, Grid, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

function Home() {
    
    const[accessToken, setAccessToken] = useState('');
    const[userInfo, setUserInfo] = useState('');

    function handleLogIn() {
        window.location.replace("http://3.238.52.15.nip.io:8080/login/login");

    }

    return (
        // All classes and components found at https://trussworks.github.io/react-uswds/
        // and https://designsystem.digital.gov/how-to-use-uswds/
        <div className="bg-base-lightest">
            <GridContainer className="usa-section">
              <Grid row className="margin-x-neg-205 flex-justify-center">
                    <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
                        <h1>Welcome</h1>
                        <Button onClick={handleLogIn} className="usa-button--big" style={{position:"relative", left:"25%"}}type="button" > Log In </Button>
                        
                    </div>
                </Grid>
            </GridContainer>
         </div>
        );
};
  
export default Home;