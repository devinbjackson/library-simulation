import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar.js';
import DetailsCard from '../DetailsCard';
import axios from 'axios';
import './BookDetailsView.css';

class BookDetaisView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book:{}
        }
    }
    componentDidMount(){
        axios.get(`/api/books/${this.props.match.params.id}`)
        .then(response =>{ 
        console.log(response.data),
        this.setState({book: response.data[0]})
        })
        
      }

    render() {
        return (
            <div className="BookDetailsView flex-centered">
               <NavBar />   
               
               <div className="container tan-bg flex-centered vertical">
                Details <small onClick={this.props.history.goBack}>Back</small>
               <DetailsCard book={this.state.book}/>
               
               </div>
           </div> 
        );
    }
};


export default BookDetaisView;