import React from 'react';
import Nav from '../components/Nav'
import {username} from "../components/Login"
import API from "../utils/API"

class Contacts extends React.Component{
    state = {
        contacts: []
    }
    componentDidMount(){
        API.getContacts(username)
        .then(res=>{
            console.log(res.data)
            this.setState({contacts: res.data[0].contacts})
            console.log(this.state.contacts)
        })
        .catch(err=>console.log(err))
    }

    render(){
        if(!this.state.contacts.length){
            return(
                <div>
                    <Nav/>
                    <h1>Contacts Page</h1>
                    <h2>No Contacts Found</h2>
                </div>
            )
        }
        return(
            <div>
                <Nav/>
                <h1>Contacts Page</h1>
            </div>
            
        )
    }
}

export default Contacts