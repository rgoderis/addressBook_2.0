import React from 'react';
import API from "../utils/API";
import {userId} from "./Contacts";
import {Redirect} from "react-router-dom"
import "./style.css"

class Details extends React.Component{
    state = {
        contact: {},
        notes: false,
        note:"",
        updated: false,
        pathName: "",
        redirect: false
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

    updateContact = ()=>{
        this.setState({redirect: true, pathName: `/update/${this.state.contact._id}`})
    }

    deleteContact = event=>{
        API.deleteContact(userId, this.state.contact._id)
        .then(res=>{
            this.setState({pathName: "/contacts", redirect: true})
        })
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
        if(this.state.redirect){
            return(
                <Redirect to={this.state.pathName}/>
            )
        }
        return(
            <div className="jumbotron container text-center background text-white">
                <h1 className="">Contact Information</h1>
                <br/>
                <h2 className="">{this.state.contact.firstName} {this.state.contact.lastName}</h2>
                <div className="mt-2">
                    <h4>Phone Number: {this.state.contact.phoneNumber}</h4>
                    <h4>Email: {this.state.contact.email}</h4>
                    <h4>Address: {this.state.contact.address}, {this.state.contact.city}, {this.state.contact.state}. {this.state.contact.zip}</h4>
                    <h4>Birthday: {this.state.contact.birthMonth} {this.state.contact.birthDay}</h4>
                </div>
                <button className="btn btn-danger mx-2 text-color" onClick={this.deleteContact}>Delete Contact</button>
                <button className="btn btn-info mx-2 text-color"  onClick={this.updateContact}>Edit Contact</button>
                <br/>
                <div className="mt-2">
                <h3>Notes</h3>
                    {!this.state.notes?
                    (<h4>No notes found, please enter one below</h4>):
                    (this.state.contact.notes.map(note=>(
                        <div className="mb-4">
                            <p>{note.body}</p>
                            <button className="btn btn-danger text-color" onClick={()=>this.deleteNote(note._id)}>Delete Note</button>
                        </div>
                    )))}
                    <br/>
                    <form>
                        <textarea className="form-control mx-auto w-50" onChange={this.handleInputChange} value={this.state.note}/>
                        <button className="btn btn-info btn-lg mt-2 text-color" onClick={this.formSubmit}>Add Note</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Details