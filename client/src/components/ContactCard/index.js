import React from "react"
import {Link} from "react-router-dom"
import "./style.css"


function ContactCard(props){
    if(props.title){
        console.log("title")
    } else {
        console.log("no title")
    }
    if(props.lastName){
        console.log("last name")
    } else {
        console.log("no last name")
    }
    return(
        <div>
            <div className="contact-card container rounded mt-2 mb-2 p-3 w-50">
                <h2 className="text-white">{props.lastName}, {props.firstName}</h2>
                {props.title?(<h3 className="text-white">Title: {props.title}</h3>):(<h3 className="d-none"></h3>)}
                {props.company?(<h3 className="text-white">Company: {props.company}</h3>):(<h3 className="d-none"></h3>)}
            </div>
            <Link to={"/details/"+props.id} className="text-decoration-none btn btn-lg btn-info text-color text-center">View More</Link>
        </div>

    )
}

export default ContactCard