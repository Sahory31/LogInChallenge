import React from 'react';

const SignUpForm = () => {

    return(
        <div className="Auth">
          <div className="logIn">
              <h1 className='logIn Title'>Sign Up</h1>
              <form>
                  <div className="name">
                      <label htmlFor="name">E-mail</label>
                      <input 
                      type="name" 
                      placeholder="Name" 
                      className="name"
                      noValidate
                      />
                      <div className='userNameError'></div>
                  </div>
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
                    <button className='signInBtn'> Sign Up </button>
                    <p/>
                    <div>Sign Up</div> 
                  </div>
              </form>
          </div>
      </div>

    );
}

export default SignUpForm;