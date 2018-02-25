import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/sessionActions';

const navBar = ({currentUser, logoutUser}) => {
  if(currentUser) {
    return (
      <div>
        <p>Hello {currentUser.email}</p>
        <a
          href="#"
          onClick={() => {
            logoutUser(currentUser);
          }}
        >Logout</a>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/login">Log In</Link> |
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logoutUser: user => dispatch(logoutUser(user))
});

const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(navBar);

export default NavBar;
