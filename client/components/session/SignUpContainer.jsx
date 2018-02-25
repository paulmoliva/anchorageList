import { connect } from 'react-redux';

import { receiveCurrentUser, createUser } from '../../actions/sessionActions';
import SignUpForm from './SignUpForm';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
  createUser: user => dispatch(createUser(user))
});

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);

export default SignupContainer;
