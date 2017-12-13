import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar.js';
import './BookShelfView.css';

class BookShelfView extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
           <div>
               <NavBar/>
           </div> 
        );
    }
};


export default BookShelfView;