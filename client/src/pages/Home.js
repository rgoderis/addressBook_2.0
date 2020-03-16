import React from 'react';
import {Link} from 'react-router-dom';
import Landing from "../components/Landing"

class Home extends React.Component{
    render(){
        return(
            <div className="text-center">
                <Landing/>
                <Link to="/login" className="btn btn-info btn-lg mx-5 px-5 text-dark text-decoration-none">Login</Link>
                <Link to="/register" className="btn btn-info btn-lg mx-5 px-5 text-dark text-decoration-none">Register</Link>
            </div>
        )
    }
}

export default Home