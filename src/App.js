import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PrivateRoute from './components/privateRoute';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <PrivateRoute exac path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute exac path="/">
              <Dashboard />
            </PrivateRoute>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
