import { User as UserType, Form1099 as Form1099Type, FormW2 as FormW2Type, Results as ResultsType, taxApi } from './api/TaxApi';
import './App.css';
import '../node_modules/@trussworks/react-uswds/lib/uswds.css';
import Login from "./components/Login";



export default function App() {

    // creating data from our queries
    const {data : user, refetch} = taxApi.useFindUserQuery();
    const {data : form1099, refetch} = taxApi.useFindForm1099Query();
    const {data : formW2, refetch} = taxApi.useFindFormW2Query();
    const {data : results, refetch} = taxApi.useFindResultsQuery();

    return (
      <>
      <Login/>
      </>  
    );
}

