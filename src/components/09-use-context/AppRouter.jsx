import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar></NavBar>

        <div className="container mt-3">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/about" component={AboutScreen}></Route>
            <Route exact path="/login" component={LoginScreen}></Route>
            <Route exact path="/home" component={HomeScreen}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
