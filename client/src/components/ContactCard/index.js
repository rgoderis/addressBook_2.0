import React from "react"
import {Link} from "react-router-dom"

function ContactCard(props){
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <h3>{props.address} {props.city}, {props.state}. {props.zip}</h3>
            <button><Link to={"/details/"+props.id}>View More</Link></button>
        </div>
    )
}

export default ContactCard