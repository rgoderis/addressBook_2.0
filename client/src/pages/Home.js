import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <button><Link to="/login">Login</Link></button>
                <button><Link to="/register">Register</Link></button>
            </div>
        )
    }
}

export default Home