import React, {Component} from 'react';
import 'firebase/auth'; 
import firebaseApi from '../controller/database';

class LogInForm extends Component{

    constructor(props){
        super(props);
        this.logIn = this.logIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            email: '',
            password: '',
          //  emailError: '',
          //  passwordError: ''
        }
    }
      
    logIn(e){
        e.preventDefault();
        firebaseApi.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error)=> {
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
          <div className="signIn-form">
              <h1 className='signInTitle'>Log In</h1>
              <form>
                  <div className="email">
                      <label htmlFor="email">E-mail</label>
                      <input 
                      value={this.state.email}
                      type="email" 
                      placeholder="e-mail@" 
                      className="email"
                      name="email"
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div className='emailError'>{this.state.emailError}</div>
                  </div>
                  <div className="password">
                      <label htmlFor="password">Password </label>
                      <input 
                      value={this.state.password}
                      type="password" 
                      className="password" 
                      placeholder="password" 
                      name="password" 
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div className='passwordError'>{this.state.passwordError}</div>
                  </div>
                  <div className="logIn">
                    <button onClick={this.logIn}  type= 'submit' sclassName='signInBtn'> Log In </button>
                  </div>
              </form>
          </div>
      </div>
    );
   }
}

export default LogInForm;