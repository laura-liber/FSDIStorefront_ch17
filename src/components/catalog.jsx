import React, { Component } from 'react';
import Product from './product';

import ProductService from "../services/productService";

class Catalog extends Component {
    state = {  
        catalog: [],
        categories: [],
        selectedCategory: "",
    };

    render() {
        let itemsToDisplay = this.state.catalog;
      
        if(this.state.selectedCategory !== ""){
            itemsToDisplay = itemsToDisplay.filter( prod => prod.category === this.state.selectedCategory );
        }

        return ( 
            <div className="catalog-page">    
                <h1>Our Amazing Catalog</h1>
                <div>There are: {this.state.catalog.length} products in the catalog.</div>
            
                <div>
                    <button onClick={this.clearFilter} className="btn btn-sm btn-info btn-category">See All</button>

                    {this.state.categories.map( (c, index) => <button key={index}
                        onClick={() => {this.categorySelected(c)} }
                        className="btn btn-sm btn-info btn-category">{c}</button>)}
                </div>

                {itemsToDisplay.map((item) => (
                <Product key={item.id} data={item}></Product>
                ))}
            </div>
         );
    }

    clearFiler = () =>{
        this.setState({selectedCategory: ""});
    }

    categorySelected = (catName) => {
        console.log(catName);
        this.setState({ selectedCategory: catName });
    }

    async componentDidMount() {
        console.log("Did mount");
        // get data from the service
        var service = new ProductService();
        var catalog = await service.getCatalog();


        //get unique categories
        var cats = [];
        for(let i=0; i<catalog.length; i++) {
            let product = catalog[i];
            if(!cats.includes(product.category)) {
                cats.push(product.category);
            }
        }

        this.setState({ catalog: catalog });
    }
}
 
export default Catalog;