import React from 'react'
import NavigationAdm from './LayoutAdmin/NavigationAdm'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddProductModal from './Modals/AddProductModal'
import ProductsTable from './Tables/ProductsTable'

export default function IndexAdm() {

    const [addShow, setAddShow] = useState(false);
    //flag for rerendering table
    const [addedNewProduct, setAddedNewProduct] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAddClose = () => setAddShow(false);
    const handleAddShow = () => setAddShow(true);

    return (
        <div>
            <NavigationAdm />
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="my-5">Products</h1>
                        <ProductsTable addedNewProduct={addedNewProduct}></ProductsTable>
                        <Button variant="primary" onClick={handleAddShow}>
                            Add a new Product
                        </Button>
                    </div>
                </div>
            </div>
            <AddProductModal addedNewProduct={addedNewProduct} setAddedNewProduct={setAddedNewProduct} show={addShow} handleClose={handleAddClose} />
        </div>
    )
}
