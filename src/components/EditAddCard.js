import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


import './EditAddCard.css';

class EditAddCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            newBook:{}
        }
    }
    componentDidUpdate(){
        this.state.newBook !== this.props.book?
        this.setState({newBook: this.props.book}):
        ''
    }

    render() {
        return (
           <div className="EditAddCard dark-bg container">
           <form>
               <div className="left-edit">
               img URL
               <input value={this.state.newBook.image_url}></input>
               img Preview
               {this.state.newBook.image_url?
               <div className="book-image" style={{backgroundImage: `url(${this.state.newBook.image_url})`}}>
               </div>
               :
               <div className="book-image">
               </div>
               }
               </div>
               <div className="right-edit">
               Title<input type="text" value={this.state.newBook.title}></input>
               Author<input value={this.state.newBook.author}></input>
               Genre<select value={this.state.newBook.genre}>
                <option value={this.state.newBook.genre}>{this.state.newBook.genre}</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
               </select>
               Description<textarea value={this.state.newBook.description}></textarea>
               <button>Save Book</button>
               </div>
               </form>
           </div> 
        );
    }
};


export default EditAddCard;