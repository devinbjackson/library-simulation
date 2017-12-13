import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar.js';
import EditAddCard from '../EditAddCard';

import './AddBookView.css';

class AddBookView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="AddBookView flex-centered">
               <NavBar />   
               
               <div className="container tan-bg flex-centered vertical">
                Edit <small onClick={this.props.history.goBack}>Back</small>
               <EditAddCard editOrAdd="add"/>
               
               </div>
           </div> 
        );
    }
};


export default AddBookView;