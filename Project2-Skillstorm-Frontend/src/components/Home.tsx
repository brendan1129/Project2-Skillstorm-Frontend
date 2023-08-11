import { Button, Grid, GridContainer } from "@trussworks/react-uswds";

function Home() {
    // Home component implementation
    return (
        // All classes and components found at https://trussworks.github.io/react-uswds/
        // and https://designsystem.digital.gov/how-to-use-uswds/
        <div className="bg-base-lightest">
            <GridContainer className="usa-section">
              <Grid row className="margin-x-neg-205 flex-justify-center">
                    <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter">
                        <h1>Welcome</h1>
                        <Button className="usa-button--big" style={{position:"relative", left:"25%"}}type="submit" > Log In </Button>
                        
                    </div>
                </Grid>
            </GridContainer>
         </div>
        );
};
  
export default Home;