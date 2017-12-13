import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar.js';
import axios from 'axios';
import EditAddCard from '../EditAddCard.js';
import './EditBookView.css';

class EditBookView extends Component {
    constructor(props) {
        super(props);
        this.state={
            book: {}
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
            <div className="EditBookView flex-centered">
               <NavBar />   
               
               <div className="container tan-bg flex-centered vertical">
                Edit <small onClick={this.props.history.goBack}>Back</small>
               <EditAddCard editOrAdd="edit" book={this.state.book}/>
               
               </div>
           </div> 
        );
    }
};


export default EditBookView;