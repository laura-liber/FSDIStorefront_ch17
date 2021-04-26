import React, { Component } from 'react';
import QuantityPicker from "./quantityPicker";

import "./product.css";

class Product extends Component {
    state = {};
    render() { 
        return ( 
            <div className="product">
                <img src={"/images/products/" + this.props.data.image} alt="product" />
                <h6 className="title">{this.props.data.title}</h6>
                <label className="total-value">Total: $10.00</label>
                <label className="price-value">Price: $10.00</label>

                <QuantityPicker></QuantityPicker>

                <button className="btn btn-sm btn-primary">
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>    
                    Add
                </button>
            </div>
         );
    };
}
 
export default Product;


