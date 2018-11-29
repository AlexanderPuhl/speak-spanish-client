import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <section className="landing-page">
            <p>This app is meant to help you learn Spanish. It uses the spaced repetition technique to help you retain what you have learned.</p>
            <Link className="block" to="/login">Login</Link>
            <Link className="block" to="/register">Register</Link>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
