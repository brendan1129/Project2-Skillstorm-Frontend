import './App.css';
import '../node_modules/@trussworks/react-uswds/lib/uswds.css';
import Nav from './components/Nav';
import EditAccount from './components/EditAccount';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditIncomeInformation from "./components/EditIncomeInformation";
import Results from "./components/Results";
import { Provider } from "react-redux";
import store from './store';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { useNavigate } from 'react-router-dom'


export default function App() {

  

    return (
      <>
      <Provider store={store}>
      <Router>
        <Nav />
            <Routes>
              <Route path="/home" element ={<Login/>}/>
              <Route path="/editAcc" element ={<PrivateRoute><EditAccount/></PrivateRoute>} />
              <Route path="/editTax" element ={<PrivateRoute><EditIncomeInformation/></PrivateRoute>} />
              <Route path="/results" element ={<PrivateRoute><Results/></PrivateRoute>} />
            </Routes>
          </Router>
          </Provider>
      
      </>  
    );
}

