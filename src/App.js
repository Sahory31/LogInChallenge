import React, { Component } from 'react';
import 'firebase/auth'; 
import firebaseApi from './controller/database';
import LogInForm from './views/logInForm';
import HomePage from './views/Home';


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            user: null,
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        firebaseApi.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({ user });
                this.setState({ loading: false });
            } else {
                this.setState({ user : null }); 
                this.setState({ loading: false });
            }
        });
    }

    render (){
        if(this.state.loading){
            return(
                <div className='logInWindow'>
                    Loading ...
                </div>
                
            )
        }
        else if(this.state.user == null){
            return(
                <div className='logInWindow'>
                    <LogInForm/>
                </div>
                
            )
        } 
        else {
            return(
                <div className='successWindow'>
                    <HomePage />
                </div>
            )
        }
        
        
    }
}
   
export default App; 