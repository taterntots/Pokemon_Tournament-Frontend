import React from 'react';
// React Router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Components
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';
import TeamList from './components/TeamList';
import PokemonList from './components/PokemonList';
import PrivateRoute from './components/PrivateRoute';
// Styling
import './App.css';

const App = () => {
  return (
    <Router>
      <main className="App">
        <NavBar />
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute exact path='/pokemon' component={PokemonList} />
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