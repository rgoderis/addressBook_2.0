import React from "react";

function SearchBar(props){
    return(
        <div className="form-group text-center">
            <select className="form-control d-inline w-25 ml-5" onChange={props.option}>
                <option value={false}>see options below</option>
                <option value="lastName">Last Name</option>
                <option value="firstName">First Name</option>
                <option value="city">City</option>
                <option value="state">State</option>
                <option value="zip">Zip</option>
            </select>
            <input className="form-control w-25 mx-5 d-inline" onChange={props.input}/>
            <button className="btn btn-info text-dark" onClick={props.onClick}>Search</button>
        </div>
    )
}

export default SearchBar