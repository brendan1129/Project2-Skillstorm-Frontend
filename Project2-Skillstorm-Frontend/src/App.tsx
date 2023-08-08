
import './App.css';
import '../node_modules/@trussworks/react-uswds/lib/uswds.css';
import Login from "./components/Login";
import { useEffect, useState } from 'react';
import Nav from './components/Nav';

function App() {

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
export default App
