import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.postLoginForm = this.postLoginForm.bind(this);
  }

  componentWillMount(){
    if(this.props.currentUser){
      this.props.history.push('/');
    }
  }

  handleEmailChange(e){
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    });
  }

  postLoginForm(e){
    e.preventDefault();
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password
    });
  }

  render(){
    if(this.props.currentUser){
      return <Redirect to="/" />;
    }
    return (
      <div className="login-container">
        <form
          onSubmit={this.postLoginForm}
          className="login-form"
        >
          <h3>AnchorageList</h3>
          <input
            type="text"
            onChange={this.handleEmailChange}
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="password"
            onChange={this.handlePasswordChange}
            placeholder="Password"
            autoComplete="off"
          />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
