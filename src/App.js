import React, { useEffect } from 'react';
// React Router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Google Analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
// Components
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';
import TeamList from './components/TeamList';
import PokemonList from './components/PokemonList';
import PrivateRoute from './components/PrivateRoute';
// Styling
import './App.css';

function initializeReactGA() {
  ReactGA.initialize('UA-159232862-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// const history = createBrowserHistory();

// Initialize google analytics page view tracking
// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

const App = () => {
  useEffect(() => {
    initializeReactGA();
  }, [])

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