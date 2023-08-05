import { redirect, useNavigate } from "react-router-dom";

function Logout() {
    // Logout functionality
    localStorage.removeItem("user");
    return (         
    <div className= "bg-white padding-y-3 padding-x-5 border border-base-lighter" style={{height: "600px"}}>
    <h2> We're sorry to see you go... </h2>
    </div> 
    );
}
export default Logout;