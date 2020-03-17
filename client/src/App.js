import React from 'react';
import {
	BrowserRouter as Router,
	Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Home from "./pages/Home";
import {Login} from "./components/Login";
import Register from "./components/Register"
import NewContact from "./pages/NewContact";
import Details from "./pages/Details";
import {Contacts} from "./pages/Contacts"
import Nav from "./components/Nav"
require("dotenv").config()


class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/login" component={Login}/>
            <Route path = "/register" component={Register}/>
            <PrivateRoute path = "/new" component={NewContact}/>
            <PrivateRoute path = "/update/:id" component={NewContact}/>
            <PrivateRoute path = "/details/:id" component={Details}/>
            <PrivateRoute path = "/contacts" component={Contacts}/>
            <Route component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

export default App;

