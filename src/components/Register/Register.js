import React from 'react';

const Register = () => {
    return (
      <div>
        <h3>Please Login</h3>
        <from>
          <input type="text" placeholder="Your Name"></input>
          <br />
          <input type="email" placeholder="Your Email"></input>
          <br />
          <input type="password" placeholder="password"></input>
          <br />
        
          <input type="submit" value="Register"></input>
        </from>
      </div>
    );
};

export default Register;