import React from 'react';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: ''
    };
  }
  render(){
    return <p>Signup form</p>;
  }
}

export default SignUpForm;
