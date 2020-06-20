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
            <div className="container">
                <h1 className="text-center ">Contact Information</h1>
                <br/>
                <div className="container w-75 jumbotron background text-white">
                    <h2 className="">{this.state.contact.firstName} {this.state.contact.lastName}</h2>
                    <div className="job-container">
                        {this.state.contact.company?(<h4>{this.state.contact.company}</h4>):(<h4>""</h4>)}
                        {this.state.contact.jobTitle&&this.state.contact.company?(<h4 className="job-container-text">: </h4>):(<h4>""</h4>)}
                        {this.state.contact.jobTitle?(<h4 className="job-container-text">{this.state.contact.jobTitle}</h4>):(<h4>""</h4>)}
                        
                    </div>
                    <hr className="bg-info w-50 ml-0"/>
                    <h4>Phone Number: {this.state.contact.phoneNumber}</h4>
                    <h4>Email: {this.state.contact.email}</h4>
                    <br/>
                    <h4>Address: {this.state.contact.address}, {this.state.contact.city}, {this.state.contact.state}. {this.state.contact.zip}</h4>
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