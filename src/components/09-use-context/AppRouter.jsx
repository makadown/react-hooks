import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div> 
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={HomeScreen}>
          </Route>
          <Route exact path="/about" component={AboutScreen}>
          </Route>
          <Route exact path="/login" component={LoginScreen}>
          </Route>
          <Route exact path="/home" component={HomeScreen}>
          </Route>
        </Switch>
      </div> 
    </Router>
  );
};
