import React from 'react';
import {username} from "../components/Login"
import API from "../utils/API"
import ContactCard from "../components/ContactCard"
import SearchBar from "../components/SearchBar";
let userId = ""

class Contacts extends React.Component{
    state = {
        contacts: [],
        option: "",
        input: ""
    }
    componentDidMount(){
        API.getContacts(username)
        .then(res=>{
            userId = res.data[0]._id;
            this.setState({contacts: res.data[0].contacts})
        })
        .catch(err=>console.log(err))
    }

    handleOptionChange = event =>{
        event.target.value === "false"?this.setState({option: ""}):this.setState({option: event.target.value})
    }

    handleInputChange = event =>{
        this.setState({input: event.target.value})
    }

    handleSearchSubmit = event =>{
        event.preventDefault();
        if(!this.state.option||!this.state.input){
            console.log("please enter a valid option");
        } else {
            API.searchContacts(this.state.option, this.state.input)
            .then(res=>{
                this.setState({contacts: res.data})
            })
            .catch(err=>console.log(err))
        }
    }

    render(){
        if(!this.state.contacts.length){
            return(
                <div className="text-center">
                    <SearchBar/>
                    <h1>Contacts Page</h1>
                    <h2>No Contacts Found</h2>
                </div>
            )
        }
        return(
            <div>
                <SearchBar
                    option={this.handleOptionChange}
                    input={this.handleInputChange}
                    onClick={this.handleSearchSubmit}
                />
                <h1 className="text-center">Contacts Page</h1>
                <div className="container">
                    {this.state.contacts.map(contact=>(
                        <ContactCard
                            id = {contact._id}
                            firstName = {contact.firstName}
                            lastName = {contact.lastName}
                            company = {contact.company}
                            title = {contact.jobTitle}
                            phoneNumber = {contact.phoneNumber}
                            email = {contact.email}
                            address = {contact.address}
                            city = {contact.city}
                            state = {contact.state}
                            zip = {contact.zip}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export {Contacts, userId}