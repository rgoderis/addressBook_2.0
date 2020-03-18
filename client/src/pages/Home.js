import React from 'react';
import {Link} from 'react-router-dom';
import Landing from "../components/Landing";
import "./style.css"

class Home extends React.Component{
    render(){
        return(
            <div className="text-center">
                <Landing/>
                <Link to="/login" className="btn btn-info btn-lg mx-5 px-5 text-decoration-none text-color">Login</Link>
                <Link to="/register" className="btn btn-info btn-lg mx-5 px-5 text-decoration-none text-color">Register</Link>
            </div>
        )
    }
}

export default Home