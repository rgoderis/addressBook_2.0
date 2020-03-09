import React from 'react';
import Nav from '../components/Nav'
import {username} from "../components/Login"

class Contacts extends React.Component{
    render(){
        console.log(username)
        return(
            <div>
                <Nav/>
                <h1>Contacts Page</h1>
            </div>
            
        )
    }
}

export default Contacts