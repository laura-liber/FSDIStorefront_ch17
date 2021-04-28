import React, { Component } from "react";

import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: this.props.minimum,
    name: "Laura",
  };

  render() {
    return (
      <div className="qp-page">
        <button className="btn btn-sm btn-info" onClick={this.increase}>
          +
        </button>
        <label>{this.state.quantity}</label>
        <button className="btn btn-sm btn-info" 
        disabled={this.state.quantity == this.props.minimum} 
        onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }

  increase = () => {
    var newQnty = this.state.quantity + 1;
    this.setState({ quantity: newQnty});
    this.props.onValueChange(newQnty);
  };

  decrease = () => {
     let qnty = this.state.quantity - 1; 
    if (qnty => this.props.minimum) {
      this.setState({ quantity: qnty});
      this.props.onValueChange(qnty);
      // this.setState({quantity: this.state.quantity > 1 ? this.state.quantity -1 : this.state.quantity});
    }
  };
}

export default QuantityPicker;
