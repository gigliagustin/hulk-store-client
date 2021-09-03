import React, {Fragment, useEffect} from 'react';
import ProductTable from './ProductTable';
import CreditCard from "./CreditCard";
import 'react-credit-cards/es/styles-compiled.css'; 
import Adress from './Adress';
import { useState } from 'react';
export default function Cart() {

    const[isLoggued, setIsLoggued] = useState(false);
    const [sale, setSale] = useState(false);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user?.token;

    useEffect(() => {
        if(token){
            setIsLoggued(true);
        }
    }, [token]);    


    return (
        <Fragment>
            {
                isLoggued ?
                <>    
                    <ProductTable sale={sale}/>
                    <Adress/>
                    <CreditCard setSale={setSale}/>
                </>
                :
                <h1>Please log in to see your cart</h1>
            }
        </Fragment>
    )
}
