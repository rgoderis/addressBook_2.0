import React from 'react';
import {Link} from 'react-router-dom'
import Auth from "../../utils/Auth"

class Nav extends React.Component{

  render(){
    return(
      <nav>
        <button><Link to="/contacts">View Contacts</Link></button>
        <button><Link to="/new">Add Contact</Link></button>
        <button onClick={()=>{Auth.signout()}}><Link to="/">Logout</Link></button>
        <button onClick={()=>{Auth.signout()}}><Link to="/">Logout</Link></button>
        <button onClick={()=>{Auth.signout()}}><Link to="/">Logout</Link></button>
      </nav>
    )
  }
}

export default Nav

