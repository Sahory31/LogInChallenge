import React, { Component } from 'react';
import 'firebase/auth'; 
import firebaseApi from './controller/database';
import LogInForm from './views/logInForm';
import HomePage from './views/Home';


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        firebaseApi.auth().onAuthStateChanged((user) => {
            //console.log(user);
            if (user){
                this.setState({ user });
            //    localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null }); 
            //    localStorage.removeItem('user');
            }
        });
    }

    render (){
        return(
            <div className='App'>
                {this.state.user ? (<HomePage />) : (<LogInForm />)}
            </div>
        );
    }
}
   
export default App; 