import React from 'react';
import Item from './Item'

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
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
        if (this.state.email && this.state.password) {
            alert(`
                Email: ${this.state.email}
                Password: ${this.state.password}
            `);
        }
    }
    render() {
        return (
            <div id="login">   
                <h1>Welcome Back!</h1>
                
                <form action="/" method="post">
                
                    <div className="field-wrap">
                        <Item title = "Email Address" type="email"
                                value = {this.state.email} 
                                handleChange = {this.handleChange}
                                name = "email"
                            />
                    </div>
                
                <div className="field-wrap">
                        <Item title = "Password" type="password"
                                value = {this.state.password} 
                                handleChange = {this.handleChange}
                                name = "password"
                        />
                </div>
                
                <p className="forgot"><a href="#!">Forgot Password?</a></p>
                
                <button className="button button-block" onClick= {this.submit}>Log In</button>
                
                </form>
            </div>
        )
    }
}

export default Login;