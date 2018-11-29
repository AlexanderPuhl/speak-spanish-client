import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
  if(props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className='login-page'>
      <h2>Login</h2>
      <LoginForm />
      <Link to="/">Back</Link>
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);