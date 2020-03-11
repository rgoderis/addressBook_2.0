import React from "react";

function SearchBar(){
    return(
        <div className="form-group text-center">
        <select className="form-control d-inline w-25" onChange={props.option}>
            <option value={false}>see options below</option>
            <option value="lastName">Last Name</option>
            <option value="firstName">First Name</option>
            <option value="city">City</option>
            <option value="state">State</option>
            <option value="zip">Zip</option>
        </select>
        <input className="form-control w-50 ml-1 d-inline" onChange={props.input}/>
        <button className="btn btn-primary ml-1" onClick={props.onClick}>Search</button>
    </div>
    )
}

export default SearchBar