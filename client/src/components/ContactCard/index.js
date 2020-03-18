import React from "react"
import {Link} from "react-router-dom"
import "./style.css"


function ContactCard(props){
    return(
        <div className="contact-card container rounded mt-2 mb-2 p-3">
            <h2 className="text-white">{props.lastName}, {props.firstName}</h2>
            <h3 className="text-white">{props.address} {props.city}, {props.state}. {props.zip}</h3>
            <Link to={"/details/"+props.id} className="text-decoration-none btn btn-lg btn-info text-color">View More</Link>
        </div>
    )
}

export default ContactCard