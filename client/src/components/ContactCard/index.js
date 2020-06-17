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
        <div className="text-center mb-5">
            <div className="text-left contact-card container rounded mt-2 mb-2 p-4 w-50">
                <h2 className="text-white m-0">{props.firstName} {props.lastName}</h2>
                <p className="text-white m-0">{props.title?(`${props.title} `):("")}
                {props.company?(`${props.company}`):("")}</p>
                <hr className="bg-info w-50 ml-0"/>
                {props.phoneNumber?(<p className="text-white m-0">P: {props.phoneNumber}</p>):(<h3 className="d-none"></h3>)}
                {props.email?(<p className="text-white m-0">{props.email}</p>):(<h3 className="d-none"></h3>)}
                <br/>
                {/* <hr className="bg-info w-25 ml-0"/> */}
                <p className="text-white m-0">{props.address?(`${props.address}`):("")}</p>
                <p className="text-white m-0">{props.city?(`${props.city}, `):("")}
                {props.state?(`${props.state}. `):("")}
                {props.zip?(`${props.zip}`):("")}</p>
            </div>
            <Link to={"/details/"+props.id} className="link-button text-color btn btn-lg btn-info">View More</Link>
        </div>

    )
}

export default ContactCard