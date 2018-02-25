import React from 'react';

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
    return (
      <div>
        <form onSubmit={this.postLoginForm}>
          <input
            type="text"
            onChange={this.handleEmailChange}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={this.handlePasswordChange}
            placeholder="Password"
          />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
