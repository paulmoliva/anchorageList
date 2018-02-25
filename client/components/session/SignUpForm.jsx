import React from 'react';
import { Redirect } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
      passwordConfirmationInput: '',
      passwordMatch: true
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange =
      this.handlePasswordConfirmationChange.bind(this);
    this.passwordsDoNotMatch = this.passwordsDoNotMatch.bind(this);
    this.postSignupForm = this.postSignupForm.bind(this);
  }

  componentWillMount(){
    if(this.props.currentUser){
      this.props.history.push('/');
    }
  }

  handleEmailChange(e){
    this.setState({
      emailInput: e.target.value
    });
  }

  handlePasswordChange(e){
    this.setState({
      passwordInput: e.target.value
    });
  }

  handlePasswordConfirmationChange(e){
    this.setState({
      passwordConfirmationInput: e.target.value
    });
  }

  passwordsDoNotMatch(){
    return (this.state.passwordInput !== this.state.passwordConfirmationInput);
  }

  errorText(){
    let errors = [];
    if(this.passwordsDoNotMatch()){
      errors.push('Passwords must match.');
    }
    return errors.map( (error, idx) => {
      return <li key={idx}>{error}</li>;
    });
  }

  postSignupForm(e){
    e.preventDefault();
    this.props.createUser({
      email: this.state.emailInput,
      password: this.state.passwordInput
    });
  }

  render(){
    if(this.props.currentUser){
      return <Redirect to="/" />;
    }
    return (
      <div>
        <input type="email" onChange={this.handleEmailChange} />
        <input
          type="password"
          onChange={this.handlePasswordChange}
          placeholder="Password"
          />
        <input
          type="password"
          onChange={this.handlePasswordConfirmationChange}
          placeholder="Confirm Password"
          />
        <ul>
          {this.errorText()}
        </ul>
        <button onClick={this.postSignupForm}>Sign Up</button>
      </div>
    );
  }
}

export default SignUpForm;
