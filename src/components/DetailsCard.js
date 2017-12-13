import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import './DetailsCard.css';

class DetailsCard extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { book_id, title, author, genre, description, image_url, in_stock } = this.props.book;
        return (
           <div className="DetailsCard cream-bg container">
               <div className="book-image" style={{backgroundImage: `url(${image_url})`}}>
                </div>
                   <p><cite>Title: {title}</cite></p>
                   <p><cite>Author:</cite> {author}</p>
                   <p><cite>Genre:</cite> {genre}</p>
                   <p><cite>In Stock:</cite> {in_stock}</p>
                   <p><cite>Desctription:</cite> <small>{description}</small></p>
                <div className="right-section flex-centered">
                <Link to={`/editbook/${book_id}`}><button>Edit</button></Link>
                <button>Delete</button>
                <button>Add to Cart</button>
                </div>
           </div> 
        );
    }
};


export default DetailsCard;