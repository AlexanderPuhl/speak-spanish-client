import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import UserGuessForm from './userGuessForm';

export class Dashboard extends React.Component {
  componentDidMount() {
    // if (this.props.wordList === null) {
    this.props.dispatch(fetchProtectedData());
    // }
  }

  render() {
    if (!this.props.protectedData || !this.props.protectedData.length) {
      return <div>Loading...</div>;
    }
    let progressPercentage;
    if (this.props.totalGuesses !== 0) {
      progressPercentage = Math.floor(
        (this.props.correctCount / this.props.totalGuesses) * 100
      );
    }

    return (
      <React.Fragment>
        <p className="dashboard-name">Hello {this.props.name}!</p>
        <UserGuessForm />
        <div className="message">{this.props.message}</div>
        <p>{this.props.answer}</p>
        <p>Mastery: {progressPercentage ? progressPercentage : 0}%</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    currentHead: state.auth.currentUser.head,
    answer: state.auth.answer,
    correctCount: state.auth.currentUser.correctCount,
    message: state.auth.message,
    totalGuesses: state.auth.currentUser.totalGuesses,
    word: state.auth.currentUser.wordList,
    name: currentUser.name,
    index: state.protectedData.index,
    protectedData: state.protectedData.data.wordList
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
