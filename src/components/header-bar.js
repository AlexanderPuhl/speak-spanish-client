import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../styles/header.css';
import logo from '../images/icon.png';



export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button id="logoutButton" className='logoutButton' onClick={() => this.logOut()}>
          Log out
        </button>
      );
    }
    return (
      <header className="header-bar">
        <img className='logo' src={logo} alt='logo'></img>
        <h1>Speak Spanish</h1>
        {logOutButton}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
