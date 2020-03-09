import React from "react";

function DropDown(props){
    return(
        <select className="form-control" {...props}>
            {props.array.map(x=>(
                <option>{x}</option>
            ))}
        </select>
    )
}

export default DropDown