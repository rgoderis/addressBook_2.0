import React from 'react';
import Nav from '../components/Nav';
import API from "../utils/API"

class Details extends React.Component{
    state = {
        contact: {}
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        API.getContact(this.props.match.params.id)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    render(){
        return(
            <div>
                <Nav/>
                <h1>Details Page</h1>
            </div>
            
        )
    }
}

export default Details