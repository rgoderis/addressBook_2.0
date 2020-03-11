import React from 'react';
import Nav from '../components/Nav';
import API from "../utils/API"

class Details extends React.Component{
    state = {
        contact: {}
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        API.getContact(this.props.match.params.id)
        .then(res=>{
            this.setState({contact: res.data})
            console.log(this.state.contact)})
        .catch(err=>console.log(err))
    }
    render(){
        return(
            <div>
                <Nav/>
                <h1>Contact Information</h1>
                <br/>
                <h2>{this.state.contact.firstName} {this.state.contact.lastName}</h2>
                <div>
                    <h4>Phone Number: {this.state.contact.phoneNumber}</h4>
                    <h4>Email: {this.state.contact.email}</h4>
                    <h4>Address: {this.state.contact.address} {this.state.contact.city} {this.state.contact.state}. {this.state.contact.zip}</h4>
                    <h4>Birthday: {this.state.contact.birthMonth} {this.state.contact.birthDay}</h4>
                </div>
            </div>
            
        )
    }
}

export default Details