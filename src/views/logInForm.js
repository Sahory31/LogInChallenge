import React from 'react';

const LogInForm = () => {

    return(
        <div className="Auth">
          <div className="logIn">
              <h1 className='logIn Title'>Log In</h1>
              <form>
                  <div className="user">
                      <label htmlFor="user">User Name</label>
                      <input 
                      type="text" 
                      placeholder="User Name" 
                      className="userName"
                      noValidate
                      />
                      <div className='userNameError'></div>
                  </div>
                  <div className="password">
                      <label htmlFor="password">Password </label>
                      <input 
                      type="password" 
                      className="password" 
                      placeholder="password" 
                      noValidate
                      />
                      <div className='passwordError'></div>
                  </div>
                  <div className="logIn">
                    <button className='signInBtn'> Log In </button>
                    <p/>
                    <div>Sign Up</div> 
                  </div>
              </form>
          </div>
      </div>

    );
}

export default LogInForm;