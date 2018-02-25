import { connect } from 'react-redux';

import { receiveCurrentUser } from '../../actions/sessionActions';
import SignUpForm from './SignUpForm';

const mapStateToProps = state => ({
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
});

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);

export default SignupContainer;
