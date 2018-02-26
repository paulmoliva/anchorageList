import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/sessionActions';

const navBar = ({currentUser, logoutUser}) => {
  if(currentUser) {
    return (
      <nav>
        <div>
          <h3><Link to="/">AnchorageList</Link></h3>
        </div>
        <div>
          <p>Hello, {currentUser.email} | </p>
          <a
            href="#"
            onClick={() => {
              logoutUser(currentUser);
            }}
          >Logout</a>
        </div>
      </nav>

    );
  } else {
    return (
      <nav>
        <div>
          <h3><Link to="/">AnchorageList</Link></h3>
        </div>
        <div>
          <Link to="/login">Log In</Link>
          <p> | </p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
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
