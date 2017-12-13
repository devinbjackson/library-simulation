import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import './BookListCard.css';

class BookListCard extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { book_id, title, author, genre, description, image_url, in_stock } = this.props.book;
        return (
           <div className="BookListCard cream-bg container">
               <div className="book-image" style={{backgroundImage: `url(${image_url})`}}>
                </div>
                   <cite className="book-title">{title}</cite>
                   <p><small>by </small>
                    {author}</p>
                <div className="right-section flex-centered">
               <p> <i>In Stock:</i> {in_stock}</p>
                <Link to={`details/${book_id}`}><button>Details</button></Link>


                </div>
           </div> 
        );
    }
};


export default BookListCard;