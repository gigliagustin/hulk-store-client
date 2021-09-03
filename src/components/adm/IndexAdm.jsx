import React from 'react'
import NavigationAdm from './LayoutAdmin/NavigationAdm'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddProductModal from './Modals/AddProductModal'
import ProductsTable from './Tables/ProductsTable'
import {Redirect} from 'react-router-dom'

export default function IndexAdm() {

    const [addShow, setAddShow] = useState(false);
    //flag for rerendering table
    const [addedNewProduct, setAddedNewProduct] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAddClose = () => setAddShow(false);
    const handleAddShow = () => setAddShow(true);

    const user = JSON.parse(localStorage.getItem("currentUser"));
    const token = user?.token;
    const isAdmin = user?.role.keyName === "admin";

    if(!isAdmin) return <Redirect to="/"/>

    return (
        <div>
            <NavigationAdm />
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="my-5">Productos</h1>
                        <ProductsTable addedNewProduct={addedNewProduct}></ProductsTable>
                        <Button variant="primary" onClick={handleAddShow}>
                            Agregar un nuevo producto
                        </Button>
                    </div>
                </div>
            </div>
            <AddProductModal addedNewProduct={addedNewProduct} setAddedNewProduct={setAddedNewProduct} show={addShow} handleClose={handleAddClose} />
        </div>
    )
}
