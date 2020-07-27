import React, {Component} from 'react';
import 'firebase/auth'; 
import firebaseApi from '../controller/database';
import LogoHG from'../styles/img/logoHG.png';
import '../styles/logIn.css';



class LogInForm extends Component{

    constructor(props){
        super(props);
        this.logIn = this.logIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            email: '',
            password: '',
            emailRestore:'',
        }

        this.state = { checked : false}
    }
    
    changePassword(e){
        console.log(this.state.emailRestore);
        e.preventDefault();
        firebaseApi.auth().sendPasswordResetEmail(this.state.emailRestore).then(function() {
            // Email sent.
          }).catch(function(error) {
            console.log(error);
          });
    }

    validateForm = () =>{
        let emailError = '';
        let passwordError = '';
        let emailRegEx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (!this.state.email){
            emailError = 'Name cannot be empty';
        } else if(!this.state.email.match(emailRegEx)){
            emailError = 'Invalid E-mail';
        }

        if (!this.state.password) {
            passwordError = 'Password cannot be empty';
        } else if (this.state.password.length < 6) {
            passwordError = 'Password required at least 6 characters';
        }

        if (emailError || passwordError){
            this.setState({emailError, passwordError});
            return false; 
        }

        return true;
    }; 

    logIn(e){

        e.preventDefault();
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
        
        e.preventDefault();
        firebaseApi.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error)=> { 
            console.log(error)
        });
    }

    signUp(e){
        
        e.preventDefault();
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

        e.preventDefault();
        firebaseApi.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function() {
          }).catch(function(error) {
            console.log(error);
          });
    }

    

    handleChange(e){
        this.setState({ [e.target.name] : e.target.value});
        const checkbox = e.target.type === 'checkbox';
        this.setState({    //establecer el estado
            [e.target.name]: checkbox
            ? e.target.checked
            : e.target.value
        });
    };

    handleChangeChecked(checked){
        this.setState({checked});
        
    }

    handleChangeCheckedSignUp(checked){
        this.setState({checked});
        
    }


   render(){
    return(
        <div className='auth'>
          <div className='signIn-form'>
              <h1 className='signInTitle' hidden={this.state.checked ? true : false}>Log In</h1>
              <h1 className='signUpTitle' hidden={this.state.checked ? false : true}>Sign Up</h1>
              <img className='logo' src={LogoHG} alt='logo'/>
              <form>
                  <div className='email'>
                      <label htmlFor='email' className='emailLabel'>E-mail</label>
                      <br/>
                      <input 
                      value={this.state.email}
                      type='email' 
                      placeholder="e-mail@" 
                      className='emailInput'
                      name='email'
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div className='emailError'>{this.state.emailError}</div>
                  </div>
                  <div className='password'>
                      <label htmlFor='password'>Password </label>
                      <br/>
                      <input 
                      value={this.state.password}
                      type='password' 
                      className='passwordInput' 
                      placeholder='password' 
                      name='password'
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div className='passwordError'>{this.state.passwordError}</div>
                  </div>
                  <div className='logIn'>
                    <button onClick={this.logIn}  
                            type= 'submit' 
                            className='logInBtn'
                            hidden={this.state.checked ? true : false}> Log In </button>
                    <button onClick={this.signUp}  
                            type= 'submit' 
                            className='signUpBtn' 
                            hidden={this.state.checked ? false : true}> sign Up </button>
                  </div>
                  <div>
                    <input name='remember' type='checkbox' defaultChecked/>
                    <label>Remember me</label>
                    <button onClick={() => this.handleChangeChecked(true)}>Forgot Password?</button>
                    <br/>
                    <div className='hiddenInput' >
                    <label htmlFor='email' className='changePassword'>E-mail</label>
                      <input 
                      value={this.state.emailRestore}
                      type='email' 
                      placeholder="e-mail@" 
                      className='emailChangePasswordInput'
                      name='emailChangePasswordInput'
                      /> 
                      <button className='sendEmail' type='submit' onClick={this.changePassword}>Send E-mail</button>
                    </div>
                  </div>
              </form>
              <div className='signUp'>
                <p onClick={() => this.handleChangeCheckedSignUp(true)}>Don't you have an account yet? Join Hire Ground</p>
              </div>
          </div>
      </div>
    );
   }
}

export default LogInForm;