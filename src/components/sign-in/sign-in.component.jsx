import React from "react";

import Forminput from "../form-input/form-input.component";
import Custombutton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('dsds');
        this.setState({email: '', password:''});
    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name] : value});
    }
    

    render() {
        return(
            <div className="sing-in">
                <h2 className="title"> I already have an acount</h2>
                <span> sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Forminput  
                        name='email' 
                        label = 'email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required/>
                    <Forminput 
                        name='password' 
                        onChange={this.handleChange} 
                        label='password'
                        type='password' 
                        value={this.state.password} 
                        required/>
                    <Custombutton 
                        type='submits'
                        value='sign in'/>
                </form>
            </div>
        )
    }
}

export default Signin;