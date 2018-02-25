import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoriesContainer from './categories/categoriesContainer';
import SignupContainer from './session/SignUpContainer';
import LoginContainer from './session/LoginContainer';
import NavBar from './navbar';

class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={CategoriesContainer} />
            <Route exact path="/signup" component={SignupContainer} />
            <Route exact path="/login" component={LoginContainer} />
          </div>
        </Router>
    );

  }
}

export default App;
