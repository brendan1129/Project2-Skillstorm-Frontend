import { User as UserType, Form1099 as Form1099Type, FormW2 as FormW2Type, Results as ResultsType, taxApi } from './api/TaxApi';
import './App.css';
import '../node_modules/@trussworks/react-uswds/lib/uswds.css';
import Login from "./components/Login";
import { useEffect, useState } from 'react';
import Nav from './components/Nav';

export default function App() {

    // creating data from our queries
    const {data : user, refetch} = taxApi.useFindUserQuery();
    const {data : form1099, refetch} = taxApi.useFindForm1099Query();
    const {data : formW2, refetch} = taxApi.useFindFormW2Query();
    const {data : results, refetch} = taxApi.useFindResultsQuery();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there's a user in localStorage
    const user = localStorage.getItem('user');
    if (!user) {
      // no user found
      setLoggedIn(false);
    }
    else {
      setLoggedIn(true);
    }
  }, []);

    return (
      <>
      {loggedIn ? <Nav/> : <Login />}
      </>  
    );
}

