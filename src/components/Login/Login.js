import React from 'react';

const Login = () => {
    return (
      <div>
        <h3>Please Login</h3>
        <div style={{ margin:'20px'}}>
       <button>Sign in with Google</button>

        </div>

        <from>
          <input type="email" placeholder="Your Email"></input>
          <br />
          <input type="password" placeholder="password"></input>
          <br />
          <input type="submit" value="Submit"></input>
        </from>
      </div>
    );
};

export default Login;