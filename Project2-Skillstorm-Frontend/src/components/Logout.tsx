import { redirect, useNavigate } from "react-router-dom";
import Globals from './Global';
import { Grid, GridContainer } from "@trussworks/react-uswds";
function Logout() {
    // Logout functionality
    window.location.assign('/home');
    localStorage.removeItem("user");
    return (         
    <main id="main-content">
        <div className="bg-base-lightest">
            <GridContainer className="usa-section">
                <Grid row className="margin-x-neg-205 flex-justify-center">
                    <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter" style={{marginBottom: "600px"}}>   
                    <h2> We're sorry to see you go... </h2>
                    </div> 
                </Grid>
            </GridContainer>
        </div>
    </main>
        
    );
}
export default Logout;