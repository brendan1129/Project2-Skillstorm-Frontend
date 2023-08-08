import { configureStore } from "@reduxjs/toolkit";
import { taxApi } from "./api/TaxApi";

const store = configureStore({
    reducer : {
        [taxApi.reducerPath] : taxApi.reducer
    },


    middleware : (defaultMiddleWare) => defaultMiddleWare().concat(taxApi.middleware)

});

export default store;