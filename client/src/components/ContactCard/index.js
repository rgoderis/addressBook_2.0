import React from 'react'

function ContactCard(props){
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <h3>{props.address} {props.city}, {props.state}. {props.zip}</h3>
            <button>View More</button>
        </div>
    )
}

export default ContactCard