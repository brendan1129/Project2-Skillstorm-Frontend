import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// User type
export type User = {
    email : String,
    ssn : String,
    firstName : String,
    lastName : String,
    address : {
        streetPrimary: String,
        streetSecondary?: String,
        city : String,
        state : String,
        zipCode : number
    },
    dateOfBirth : String,
    maritalStatus: String
}

// Form1099 type
export type Form1099 = {
    payerTIN : String,
    email : String,
    amountEarned: number,
    amountWithheld: number,
    businessName?: String,
    payerFirstName?: String,
    payerLastName?: String,
    address : {
        streetPrimary: String,
        streetSecondary?: String,
        city : String,
        state : String,
        zipCode : number
    }
}

// FormW2 type
export type FormW2 = {
    employerTIN : String,
    email : String,
    amountEarned: number,
    amountWithheld: number,
    employerName: String,
    address : {
        streetPrimary: String,
        streetSecondary?: String,
        city : String,
        state : String,
        zipCode : number
    }
}

// Results type
export type Results = {
    email : String,
    year : number,
    earned : number,
    withheld : number,
    result : number
}

// create the API calls
export const taxApi = createApi({
    reducerPath : 'taxApi',
    baseQuery : fetchBaseQuery({baseUrl : 'http://ec2-3-238-52-15.compute-1.amazonaws.com:8080/'}),
    endpoints : (builder) => ({

        // User endpoints
        findUser : builder.query<User, String>({query : (email) => `users/email?email=${email}`}),
        createUser : builder.mutation<User, User>({
            query : (newUser) => {
                return {
                    method : 'POST',
                    url : 'users/user',
                    body : newUser
                }
            }
        }),
        updateUser : builder.mutation<User, User>({
            query : (updateUser) => {
                return {
                    method : 'PUT',
                    url : 'users/user',
                    body : updateUser
                }
            }
        }),
        deleteUser : builder.mutation<User, User>({
            query : (deleteUser) => {
                return {
                    method : 'DELETE',
                    url : 'users/user',
                    body : deleteUser
                }
            }
        }),

        // Form 1099 endpoints
        findForm1099 : builder.query<Form1099[], String>({query : (email) => `form1099/email/${email}`}),
        createForm1099 : builder.mutation<Form1099, Form1099>({
            query : (newForm1099) => {
                return {
                    method : 'POST',
                    url : 'form1099',
                    body : newForm1099
                }
            }
        }),
        updateForm1099 : builder.mutation<Form1099, Form1099>({
            query : (updateForm1099) => {
                return {
                    method : 'PUT',
                    url : 'form1099',
                    body : updateForm1099
                }
            }
        }),
        deleteForm1099 : builder.mutation<Form1099, Form1099>({
            query : (deleteForm1099) => {
                return {
                    method : 'DELETE',
                    url : 'form1099',
                    body : deleteForm1099
                }
            }
        }),

        // Form W2 endpoints
        findFormW2 : builder.query<FormW2[], String>({query : (email) => `formW2/email/${email}`}),
        createFormW2 : builder.mutation<FormW2, FormW2>({
            query : (newFormW2) => {
                return {
                    method : 'POST',
                    url : 'formW2',
                    body : newFormW2
                }
            }
        }),
        updateFormW2 : builder.mutation<FormW2, FormW2>({
            query : (updateFormW2) => {
                return {
                    method : 'PUT',
                    url : 'formW2',
                    body : updateFormW2
                }
            }
        }),
        deleteFormW2 : builder.mutation<FormW2, FormW2>({
            query : (deleteFormW2) => {
                return {
                    method : 'DELETE',
                    url : 'formW2',
                    body : deleteFormW2
                }
            }
        }),

        // Results endpoint
        findResults : builder.query<Results, String>({query : (email) => `taxforms/email/${email}`}),
    })
})