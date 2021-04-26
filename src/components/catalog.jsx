import React, { Component } from 'react';
import Product from './product';

import ProductService from "../services/productService";

class Catalog extends Component {
    state = {  
        catalog: []
    };

    render() {
        return ( 
            <div className="catalog-page">    
                <h1>Our Amazing Catalog</h1>
                <div>There are: {this.state.catalog.length} products in the catalog.</div>

                {this.state.catalog.map((item) => (
                <Product key={item.id} data={item}></Product>
                ))}
            </div>
         );
    }

    componentDidMount() {
        console.log("Did mount");
        // get data from the service
        var service = new ProductService();
        var catalog = service.getCatalog();
        this.setState({ catalog: catalog });
    }
}
 
export default Catalog;