import React from 'react';
import Nav from '../components/Nav'

class Details extends React.Component{
    state = {
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
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