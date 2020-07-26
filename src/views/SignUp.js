import React, {Component} from 'react';
import 'firebase/auth'; 
import firebaseApi from '../controller/database';

class SignUpForm extends Component{

    constructor(props){
        super(props);
        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            email: '',
            password: '',
          //  emailError: '',
          //  passwordError: ''
        }
    }
      
    signUp(e){
        e.preventDefault();
        firebaseApi.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error)=> {
            console.log(error);
        });
    }

    handleChange(e){
        this.setState({ [e.target.name] : e.target.value});
    }

    validateForm = () =>{
        let emailError = '';
        let passwordError = '';
        let emailRegEx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (!this.state.email.match(emailRegEx)){
            emailError = 'Invalid E-mail';
        }

        if (this.state.password.length < 6) {
            passwordError = 'Password required at least 6 characters';
        }

        if (!this.state.password) {
            passwordError = 'Password cannot be empty';
        }

        if (this.state.password.includes(' ')) {
            passwordError = 'Password cannot have spaces';
        }

        if (emailError || passwordError){
            this.setState({emailError, passwordError});
            return false; 
        }

        return true;
    }; 

    handleSubmit = event => {
        event.preventDefault();
        const resetState ={
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        };

        const validate = this.validateForm();
        if (validate) {
            this.setState(resetState);

        }
       

    };


    render(){
        return(
            <div className="Auth">
            <div className="logIn">
                <h1 className='logIn Title'>Sign Up</h1>
                <form>
                    <div className="email">
                        <label htmlFor="email">E-mail</label>
                        <input 
                        type="email" 
                        placeholder="E-mail@" 
                        className="email"
                        noValidate
                        />
                        <div className='emailError'></div>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password </label>
                        <input 
                        type="password" 
                        className="password" 
                        placeholder="Password" 
                        noValidate
                        />
                        <div className='passwordError'></div>
                    </div>
                    <div className="logIn">
                        <button onClick={this.signUp}  type= 'submit' className='signUpBtn'> Sign Up </button>
                        <p/>
                    </div>
                </form>
            </div>
        </div>

        );
    }
}

export default SignUpForm;