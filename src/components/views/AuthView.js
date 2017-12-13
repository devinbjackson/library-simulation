import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import './AuthView.css';

class AuthView extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
           <div className="AuthView flex-centered">
               <div className="container tan-bg flex-centered vertical">
               Book Exchange
               <div className="container dark-bg flex-centered vertical">
               <form className="flex-centered vertical">
                   Username
                   <input></input>
                   Password
                   <input></input>
                    <div>
                        <button>Register</button>
                        <button>Login</button>
                    </div>    

               </form>
               </div>
               </div>
           </div> 
        );
    }
};


export default AuthView;