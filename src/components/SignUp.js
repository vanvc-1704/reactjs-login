import React from 'react';
import Item from './Item'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    submit() {
        if (this.state.first_name && this.state.last_name && this.state.email && this.state.password) {
            alert(`
                First Name: ${this.state.first_name}
                Last Name: ${this.state.last_name}
                Email: ${this.state.email}
                Password: ${this.state.password}
            `);
        }
    }

    render() {
        return (
            <div id="signup">   
                <h1>Sign Up for Free</h1>
                
                <form action="/" method="post">
                    <div className ="top-row">
                        <Item title = "First Name" 
                            type="text" 
                            value = {this.state.first_name} 
                            handleChange = {this.handleChange}
                            name = "first_name"
                        />
                        <Item title = "Last Name" type="text"
                            value = {this.state.last_name} 
                            handleChange = {this.handleChange}
                            name = "last_name"
                        />
                    </div>

                    <div className ="field-wrap">
                        <Item title = "Email Address" type="email"
                            value = {this.state.email} 
                            handleChange = {this.handleChange}
                            name = "email"
                        />
                    </div>
                    
                    <div className="field-wrap">
                        <Item title = "Set A Password" type="password"
                            value = {this.state.password} 
                            handleChange = {this.handleChange}
                            name = "password"
                        />
                    </div>
                    
                    <button type="submit" className="button button-block" onClick = {this.submit}>Get Started</button>
                </form>

            </div>
        )
    }
}

export default SignUp;