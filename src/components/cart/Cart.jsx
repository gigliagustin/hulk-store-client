import React, {Fragment} from 'react';
import ProductTable from './ProductTable';
import CreditCard from "./CreditCard";
import 'react-credit-cards/es/styles-compiled.css'; 
import Adress from './Adress';
export default function Cart() {
    return (
        <Fragment>
            <ProductTable />
               <Adress/>

               <CreditCard />


        </Fragment>
    )
}
