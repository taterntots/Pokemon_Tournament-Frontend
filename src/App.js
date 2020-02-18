import React from 'react';
// React Router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Components
import Login from './components/Login';
import Register from './components/Register';
import TeamList from './components/TeamList';
import PrivateRoute from './components/PrivateRoute';
// Styling
import './App.css';

const App = () => {
  return (
    <Router>
      <main className="App">
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute exact path='/teams' component={TeamList} />
      </main>
    </Router>
  );
};

const mapStateToProps = state => {
  console.log('APP STATE', state);
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, {})(App);