import React from 'react';
import {Link} from 'react-router-dom'
import Auth from "../../utils/Auth"
import "./style.css"

function Nav(){
    return(      
    <nav className="navbar navbar-expand-lg navbar-light mb-5 nav">
      <h1 className="navbar-brand text-info">Address Book</h1>
      <button className="navbar-toggler bg-info" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ml-auto">
          <li className="nav-item">
           <Link to="/contacts" className="float-right nav-link text-info">View Contacts</Link>
         </li>
         <li className="nav-item">
            <Link to="/new" className="float-right nav-link text-info">Add Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="float-right nav-link text-info" onClick={()=>{Auth.signout()}}>Logout</Link>
          </li>
         </ul>
      </div>
    </nav>
    );
}

export default Nav

