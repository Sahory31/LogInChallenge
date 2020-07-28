import React, { Component } from 'react';
import 'firebase/auth'; 
import firebaseApi from './controller/database';
import LogInForm from './components/logInForm';
import HomePage from './components/Home';
import computer from './styles/img/computer.png';
import './styles/App.css';
//import AppCarousel from './components/carousel/AppCarousel';


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
                <div className='logInWindow' style = {{display: 'flex', backgroundColor: '#4164e3', borderRadius: '4%' }}>
                    <LogInForm/>
                    <div className='container'>
                        <img src={computer} className='computer'
                        alt="computer"></img>
                        <br/>
                        <h1 className='description'><b>Locate certified suppliers</b></h1>
                        <p className='information'>Help our buyers locate certified around the country
                        and help our suppliers generate more revenue.</p>
                    </div>
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