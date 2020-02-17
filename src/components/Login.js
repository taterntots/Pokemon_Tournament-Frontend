import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../state/actions';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(credentials);
    setTimeout(() => {
      props.history.push('/teams');
    }, 800)
  }

  return (
    <div>
      <h1>Welcome to the Tater & Tots Pokemon Championship!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          name='password'
          type='password'
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log in</button>
      </form>
      <Link to='/register'><button>Register Here!</button></Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    fetchingData: state.fetchingData,
    isLoggedIn: state.isLoggedIn,
    error: state.error,
    id: state.id
  }
}

export default connect(mapStateToProps, { login })(Login);