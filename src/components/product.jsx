import React, { Component } from 'react';
import QuantityPicker from "./quantityPicker";

import "./product.css";
import { connect } from "react-redux";
import { addToCart } from "../store/actions";

class Product extends Component {
    state = {
        quantity: 1
    };
    render() { 
        return ( 
            <div className="product">
                <img src={"/images/products/" + this.props.data.image} alt="product" />
                <h6 className="title">{this.props.data.title}</h6>
                <label className="total-value">Total: {this.getTotal()}</label>
                <label className="price-value">Price: {this.props.data.price}</label>

                <QuantityPicker 
                    minimum={this.props.data.minimum || 1}
                    onValueChange={this.handleQuantityChange}
                ></QuantityPicker>

                <button 
                    onClick={this.handleAddToCartButton}
                    className="btn btn-sm btn-primary">
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>    
                    Add
                </button>
            </div>
         );
    };

    getTotal = () => {
        var total = this.props.data.price * this.state.quantity;
        return "$ " + total.toFixed(2);
    }

    handleQuantityChange = (qty) => {
        this.setState({quantity: qty});
    };

    handleAddToCartButton = () => {
        var item = {...this.props.data }; //deep copy an object
        item.quantity = this.state.quantity;
        console.log(item);
        this.props.addToCart(item);
    };
}
 
export default connect(null, { addToCart }) (Product);


