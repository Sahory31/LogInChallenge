import React, { Component } from 'react';
import firebaseApi from '../controller/database';
import '../styles/home.css';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.logOutFunction = this.logOutFunction.bind(this);
    }

    logOutFunction(){
        firebaseApi.auth().signOut();
    }

    render(){
        return(
            <div className='Success'>
                <h1>Success</h1>
                <button className='logOut' onClick={this.logOutFunction}>Log Out</button>
            </div>
        )
    }
}

export default HomePage;