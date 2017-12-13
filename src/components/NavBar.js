import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state ={
        user_id:''
    }
  }

  render() {
    return (
      <div className="NavBar black-bg">
        <ul>
          <li><Link to="/">Icon</Link></li>
          <li><Link to="/browsing">Browse</Link></li>
          <li><Link to="/checkout">Cart</Link></li>
          <li><Link to={`/bookshelf/${this.state.user_id}`}>My Shelf</Link></li>
          <li style={{float:"right"}}><Link to="/browsing">Logout</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
