import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar.js';
import BookListCard from '../BookListCard.js';
import axios from 'axios';

import './BrowsingView.css';

class BrowsingView extends Component {
    constructor(props) {
        super(props);
        this.state ={
            list: []
        }
    }
    componentDidMount(){
        axios.get(`/api/books`)
        .then(response =>{ 
        console.log(response.data),
        this.setState({list: response.data})
        })
        
      }

    render() {
        const list = 
        this.state.list.map( book => <BookListCard book={book}/> )

        return (
            <div className="BrowsingView flex-centered">
               <NavBar />   
               <div className="container tan-bg flex-centered vertical">
               Browse Inventory
               {list}
               <Link to="addbook"><button>+ Add New Book</button></Link>
               </div>
           </div>  
        );
    }
};


export default BrowsingView;