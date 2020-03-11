import React from 'react';
import Nav from '../components/Nav'
import {username} from "../components/Login"
import API from "../utils/API"
import ContactCard from "../components/ContactCard"
import SearchBar from "../components/SearchBar"

class Contacts extends React.Component{
    state = {
        contacts: [],
        option: "",
        input: ""
    }
    componentDidMount(){
        API.getContacts(username)
        .then(res=>{
            this.setState({contacts: res.data[0].contacts})
            console.log(this.state.contacts)
        })
        .catch(err=>console.log(err))
    }

    handleOptionChange = event =>{
        event.target.value === "false"?this.setState({option: ""}):this.setState({option: event.target.value})
    }

    handleInputChange = event =>{
        this.setState({input: event.target.value})
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
                <SearchBar
                    option={this.handleOptionChange}
                    input={this.handleInputChange}
                    onClick={this.handleSearchSubmit}
                />
                <h1>Contacts Page</h1>
                {this.state.contacts.map(contact=>(
                    <ContactCard
                        id = {contact._id}
                        firstName = {contact.firstName}
                        lastName = {contact.lastName}
                        address = {contact.address}
                        city = {contact.city}
                        state = {contact.state}
                        zip = {contact.zip}
                    />
                ))}
            </div>
        )
    }
}

export default Contacts