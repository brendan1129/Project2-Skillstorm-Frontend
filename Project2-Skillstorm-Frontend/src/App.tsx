
import './App.css';
import '../node_modules/@trussworks/react-uswds/lib/uswds.css';
//import Login from "./components/Login";
//import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import EditAccountForm from './components/EditAccount';

export default function App() {

    //creating data from our queries
    
    //const {data : form1099, refetch} = taxApi.useFindForm1099Query();
    //const {data : formW2, refetch} = taxApi.useFindFormW2Query();
    //const {data : results, refetch} = taxApi.useFindResultsQuery();

  //const [loggedIn, setLoggedIn] = useState(false);

  /*useEffect(() => {
    // Check if there's a user in localStorage
    const user = localStorage.getItem('user');
    if (!user) {
      // no user found
      setLoggedIn(false);
    }
    else {
      setLoggedIn(true);
    }
  }, []); */

    return (
      <>
      <Nav />
      <EditAccountForm />
      </>  
    );
}

