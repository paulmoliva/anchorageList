import { connect } from 'react-redux';
import { loginUser } from '../../actions/sessionActions';
import LoginForm from './LoginForm';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginContainer;
