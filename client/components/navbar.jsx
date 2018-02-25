import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const navBar = ({currentUser}) => {
  if(currentUser) {
    return (
      <p>Hello {currentUser.email}</p>
    );
  } else {
    return (
      <div>
        <Link to="/login">Log In</Link> |
        <Link to="signup">Sign Up</Link>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const NavBar = connect(
  mapStateToProps,
  null
)(navBar);

export default NavBar;
