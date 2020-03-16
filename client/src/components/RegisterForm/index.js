import React from 'react'



class RegisterForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;

	render() {
		const { onRegister } = this.props;
		console.log(`Register form props are: ${JSON.stringify(this.props)}`);
		
		return (
			
				<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onRegister({
							username: this.usernameElem.value,
							password: this.passwordElem.value
						});
					}}
				>
					<div className="form-group container">
						<div className="row">
							<div className="col-6">
								<label className="pl-2">User Name:</label>
							</div>
							<div>
								<label className="pl-4">Password:</label>
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' />
							</div>
							<div className="col-6">
								<input className="form-control" ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' />
							</div>
						</div>
						<div className="d-flex flex-row-reverse pt-2">
							<button className="btn btn-info btn-lg px-5 text-dark" type='submit'>
								Register
							</button>
						</div>
					</div>
				</form>
			
		)
	}
}

export default RegisterForm