import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

//context
import { withFirebase } from "../../components/Firebase";

const INITIAL_STATE = {
  username: "",
  password: "",
  error: null,
};

const Admin = ({
  history,
  firebase: { doSignInWithEmailAndPassword, messages },
}) => {
  const [credentials, setCredentials] = useState(INITIAL_STATE);

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    doSignInWithEmailAndPassword(credentials.username, credentials.password)
      .then((authUser) => {
        setCredentials(INITIAL_STATE);
        history.push("/console");
      })
      .catch((error) => {
        setCredentials({ ...credentials, error });
      });
    e.preventDefault();
  };

  const isValid = credentials.password === "" || credentials.username === "";

  return (
    <React.Fragment>
      <form className='user-login-form' onSubmit={onSubmit}>
        <div className='username-field'>
          <label htmlFor='username'>Username:</label>
          <input
            name='username'
            type='text'
            id='username'
            value={credentials.username}
            placeholder='username'
            onChange={onInputChange}
          />
        </div>
        <div className='password-field'>
          <label htmlFor='password'>password:</label>
          <input
            name='password'
            type='text'
            id='password'
            value={credentials.password}
            placeholder='password'
            onChange={onInputChange}
          />
        </div>
        <div className='form-submit-button'>
          <button type='submit' disabled={isValid}>
            Login
          </button>
        </div>
        <div>{credentials.error && <p>{credentials.error.message}</p>}</div>
      </form>
      <div className='forgot-container'>
        <Link to='/reset'>Forgot</Link>
      </div>
    </React.Fragment>
  );
};

export default withRouter(withFirebase(Admin));
