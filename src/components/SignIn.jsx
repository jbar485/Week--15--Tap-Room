import React from 'react';


function SignIn(props){
    var SignInStyles = {
        textAlign: "center",
        margin: "20px",
        padding: "20px",
      }

    var inputStyles = {
        textAlign: "center",
        margin: "20px",
        padding: "20px",
        border: "2px solid red",
        height: "15px",
        color: 'red',
        width: "150px",
        borderRadius: '5px',
      }

  return (
    <div style = {SignInStyles}>
      <h1> Log In </h1>
    <form>
    <input style = {inputStyles}
          type='text'
          id='email'
          placeholder='Email'/>
        <input style = {inputStyles}
          type='text'
          id='password'
          placeholder='Password'/>
    <button type="submit" class="btn btn-outline-danger">Sign In</button>
  </form>
    </div>
  );
}

export default SignIn;