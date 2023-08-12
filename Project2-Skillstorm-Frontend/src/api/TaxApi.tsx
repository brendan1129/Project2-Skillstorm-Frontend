import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// User type
export type User = {
    email : string,
    ssn : string,
    firstName : string,
    lastName : string,
    address : {
        streetPrimary: string,
        streetSecondary?: string,
        city : string,
        state : string,
        zipCode : number
    },
    dateOfBirth : Date,
    maritalStatus: string
}

export type Auth= {
    email : string,
    password : string,
    role : string
}

// Form1099 type
export type Form1099 = {
    payerTIN : string,
    email : string,
    amountEarned: number,
    amountWithheld: number,
    businessName?: string,
    payerFirstName?: string,
    payerLastName?: string,
    address : {
        streetPrimary: string,
        streetSecondary?: string,
        city : string,
        state : string,
        zipCode : number
    }
}

// FormW2 type
export type FormW2 = {
    employerEIN : string,
    email : string,
    amountEarned: number,
    amountWithheld: number,
    employerName: string,
    address : {
        streetPrimary: string,
        streetSecondary?: string,
        city : string,
        state : string,
        zipCode : number
    }
}

// Results type
export type Results = {
    email : string,
    year : number,
    earned : number,
    withheld : number,
    result : number
}

const jwt = String(localStorage.getItem("JWT")).replace(/\"/g, "")
const email = String(localStorage.getItem("email")).replace(/\"/g, "")


// create the API calls
export const taxApi = createApi({
   
    reducerPath : 'taxApi',
    
    baseQuery : fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints : (builder) => ({

        // User endpoints

        findUser : builder.query<User, string>({
            query : () => {
                console.log(`Bearer ${jwt}`);
                return {
                    method : 'GET',
                    url: `users/email?email=${email}`,
                    headers: {
                        "Authorization": `Bearer ${jwt}`,
                        "Access-Control-Allow-Origin": "*"
                    }
                }
        }}),
        createUser : builder.mutation<User, User>({
            query : (newUser) => {
                return {
                    method : 'POST',
                    url : 'users/user',
                    body : newUser,
                    headers: {
                        "Authorization": `Bearer ${jwt}`,
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            }
        }),
        updateUser : builder.mutation<User, User>({
            query : (updateUser) => {
                return {
                    method : 'PUT',
                    url : 'users/user',
                    body : updateUser,
                    headers: {
                        "Authorization": `Bearer ${jwt}`,
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            }
        }),
        deleteUser : builder.mutation<User, User>({
            query : (deleteUser) => {
                return {
                    method : 'DELETE',
                    url : 'users/user',
                    headers: {
                        "Authorization": `Bearer ${jwt}`
                    },
                    body : deleteUser
                }
            }
        }),

        // Form 1099 endpoints
        findForm1099 : builder.query<Form1099[], String>({ query : () => {
                console.log(`Bearer ${jwt}`);
                return {
                    method : 'GET',
                    url: `form1099/email/${email}`,
                    headers: {
                        "Authorization": `Bearer ${jwt}`,
                        "Access-Control-Allow-Origin": "*"
                    }
                }
        }}),
        createForm1099 : builder.mutation<Form1099, Form1099>({
            query : (newForm1099) => {
                return {
                    method : 'POST',
                    url : 'form1099',
                    body : newForm1099,
                    headers: {
                        "Authorization": `Bearer ${jwt}`
                    }
                }
            }
        }),
        updateForm1099 : builder.mutation<Form1099, Form1099>({
            query : (updateForm1099) => {
                return {
                    method : 'PUT',
                    url : 'form1099',
                    body : updateForm1099,
                    headers: {
                        "Authorization": `Bearer ${jwt}`
                    }
                }
            }
        }),
        deleteForm1099 : builder.mutation<Form1099, Form1099>({
            query : (deleteForm1099) => {
                return {
                    method : 'DELETE',
                    url : 'form1099/delete/' + (deleteForm1099.email) + "/" + (deleteForm1099.payerTIN),
                    body : deleteForm1099,
                    headers: {
                        "Authorization": `Bearer ${jwt}`
                    }
                }
            }
        }),

        // Form W2 endpoints
        findFormW2 : builder.query<FormW2[], String>({ query : () => {
            console.log(`Bearer ${jwt}`);
            return {
                method : 'GET',
                url: `formW2/email/${email}`,
                headers: {
                    "Authorization": `Bearer ${jwt}`,
                    "Access-Control-Allow-Origin": "*"
                }
            }
    }}),
        createFormW2 : builder.mutation<FormW2, FormW2>({
            query : (newFormW2) => {
                return {
                    method : 'POST',
                    url : 'formW2',
                    body : newFormW2,
                    headers: {
                        "Authorization": `Bearer ${jwt}`
                    }
                }
            }
        }),
        updateFormW2 : builder.mutation<FormW2, FormW2>({
            query : (updateFormW2) => {
                return {
                    method : 'PUT',
                    url : 'formW2',
                    body : updateFormW2,
                    headers: {
                        "Authorization": `Bearer ${jwt}`
                    }
                }
            }
        }),
        deleteFormW2 : builder.mutation<FormW2, FormW2>({
            query : (deleteFormW2) => {
                return {
                    method : 'DELETE',
                    url : 'formW2/delete/' + (deleteFormW2.email) + "/" + (deleteFormW2.employerEIN),
                    body : deleteFormW2,
                    headers: {
                        "Authorization": `Bearer ${jwt}`
                    }
                }
            }
        }),
        

        // Results endpoint
        findResults : builder.query<Results, String>({query : () => {
            console.log(`Bearer ${jwt}`);
            return {
                method : 'GET',
                url: `taxforms/email/${email}`,
                headers: {
                    "Authorization": `Bearer ${jwt}`,
                    "Access-Control-Allow-Origin": "*"
                }
            }
    }}),
    })
    
})