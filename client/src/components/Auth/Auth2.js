import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <br/><br/><br/><br/><br/><br/>
        <h1>{ isSignup ? 'Sign up' : 'Sign in' }</h1>
        <form onSubmit={handleSubmit}>

        { isSignup && (
            <>
            <label>First name:</label><br />
            <input type="text" id="firstName" placeholder="firstName" name="firstName" label="First Name" onChange={handleChange} required/><br /><br />

            <label>Last Name:</label><br />
            <input type="text" id="lastName" placeholder="lastName" name="lastName" label="Last Name" onChange={handleChange} required/><br /><br />
            </>
        )}

        <label>Email:</label><br />
        <input type="email" id="email" placeholder="email" name="email" label="Email" onChange={handleChange} required/><br /><br />

        <label>Password:</label><br />
        <input type="password" id="password" placeholder="password" name="password" label="Password" onChange={handleChange} required/><br /><br />

        { isSignup && (
            <>
                <label for="Repeat Password">Repeat Password:</label><br />
                <input type="password" id="confirmPassword" placeholder="confirmPassword" name="confirmPassword" label="Repeat Password" onChange={handleChange} required/><br /><br />
            </>
        )}

            <input type="submit" value={ isSignup ? 'Sign Up' : 'Sign In' } />
        </form> 
        <button onClick={switchMode}>{ isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }</button>
    </div>
  );
};

export default SignUp;
