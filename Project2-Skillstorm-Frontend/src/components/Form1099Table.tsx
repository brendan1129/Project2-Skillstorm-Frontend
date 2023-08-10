import { Button, Table, Alert } from "@trussworks/react-uswds";
import { taxApi, Form1099 } from '../api/TaxApi';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react'

export default function Form1099Table({tableData}) {

    

    const [delete1099] =  taxApi.useDeleteForm1099Mutation()
   // const forceUpdate = useForceUpdate()


  // function useForceUpdate(){
      const [value, setValue] = useState(0); // integer state
   //     return () => setValue(value => value + 1); // update state to force render
        // A function that increment 👆🏻 the previous state like here 
       //  is better than directly setting `setValue(value + 1)`
   //     }
    

    //const forceUpdate = useForceUpdate();

    
    const navigate = useNavigate()

    const handleChange = form1099 => {
        delete1099(form1099)
        navigate(0)
        render(<><Alert className='usa-alert--success' type='success' headingLevel="h4" heading="Saved" style={{position:"fixed", top:0, left:0, width:"10%"}}/></>)
               
               // transitions to the editTax page after 1 second
               window.setTimeout(() => {
                cleanup()
                
               }, 1000)
        return(
            <>
            
            </>
        )
    }

    
        

    return(
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Form Type</th>
                        <th>Employer</th>
                        <th>Employer Tax ID</th>
                        <th>Amount Earned</th>
                        <th>Amount Withheld</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((form1099) => {
                        return (
                            <tr key={form1099.payerTIN}>
                                <td>{"1099"}</td>
                                <td>{form1099.businessName}</td>
                                <td>{form1099.payerTIN}</td>
                                <td>${form1099.amountEarned}</td>
                                <td>${form1099.amountWithheld}</td>
                                
                                <td><Button className="usa-button--accent-warm margin-right-0 margin-bottom-2" type="button" onClick={() => handleChange(form1099)}>Delete</Button></td>
                                </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    )
}