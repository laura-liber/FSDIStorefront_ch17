import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {clearTodos} from "../store/actions";

class HomePage extends Component {
    render() { 
        return ( 
            <div className="home-page">
                <h1 className="display-4">Welcome to OrganiKa</h1>

                <p className="lead">
                    Here you will find the best, freshest and faciest food. 
                </p>

                <hr className="my-4"></hr>
                
                <p>Our fruits and vegetables are...</p>

                <Link className="btn btn-primary btn-lg" to="/catalog" role="button">
                    Check out the Catalog
                </Link>

                <button
                    className="btn btn-warning"
                    onClick={this.props.clearTodos()}
                >
                    Clear My Todo List
                </button>
            </div>
         );
    }
}
 
export default connect (null, {clearTodos}) (HomePage);