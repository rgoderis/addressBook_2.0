import React from 'react';
import {Link} from 'react-router-dom';
import Landing from "../components/Landing"

class Home extends React.Component{
    render(){
        return(
            <div>
                <Landing/>
                <button><Link to="/login">Login</Link></button>
                <button><Link to="/register">Register</Link></button>
            </div>
        )
    }
}

export default Home