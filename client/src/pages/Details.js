import React from 'react';
import Nav from '../components/Nav';
import API from "../utils/API";
import {userId} from "./Contacts"

class Details extends React.Component{
    state = {
        contact: {},
        notes: false,
        note:"",
        updated: false,
    }

    handleInputChange = event=>{
        this.setState({
            note: event.target.value
        })
    }

    formSubmit = event=>{
        event.preventDefault();
        if(!this.state.note){
            return false
        } else {
            API.saveNote(this.state.contact._id,{
                body: this.state.note
            })
            .then(res=>this.setState({note: "", updated: true}))
            .catch(err=>console.log(err))        
        }
    }

    deleteNote = noteId=>{
        API.deleteNote(this.state.contact._id, noteId)
        .then(res=>this.setState({updated: true}))
        .catch(err=>console.log(err))
    }

    deleteContact = event=>{
        // delete contact
        API.deleteContact(userId, this.state.contact_id)
        .then(res=>{console.log(res)})
        .catch(err=>console.log(err))
    }

    getContactInfo = id =>{
        API.getContact(id)
        .then(res=>{
            this.setState({contact: res.data})
            if(this.state.contact.notes.length !==0){
                this.setState({notes: true})
            }
        })
        .catch(err=>console.log(err))
    }

    componentDidMount(){
        console.log(userId)
        API.getContact(this.props.match.params.id)
        .then(res=>{
            this.setState({contact: res.data})
            if(this.state.contact.notes.length !==0){
                this.setState({notes: true})
            }
        })
        .catch(err=>console.log(err))    
    }

    componentDidUpdate(){
        if(this.state.updated){
            API.getContact(this.props.match.params.id)
            .then(res=>{
                this.setState({contact: res.data, updated: false})
                if(this.state.contact.notes.length !==0){
                    this.setState({notes: true})
                } else {
                    this.setState({notes: false})
                }
            })
            .catch(err=>console.log(err))    
        }
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
                <button>Delete Contact</button>
                <br/>
                <div>
                <h3>Notes</h3>
                    {!this.state.notes?
                    (<h4>No notes found, please enter one below</h4>):
                    (this.state.contact.notes.map(note=>(
                        <div className="mb-4">
                            <p>{note.body}</p>
                            <button className="btn btn-danger" onClick={()=>this.deleteNote(note._id)}>Delete Note</button>
                        </div>
                    )))}
                    <br/>
                    <form>
                        <textarea className="form-control mx-auto w-50" onChange={this.handleInputChange} value={this.state.note}/>
                        <button className="btn btn-success mt-1" onClick={this.formSubmit}>Add Note</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Details