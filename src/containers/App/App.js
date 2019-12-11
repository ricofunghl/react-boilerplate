import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Appbar from '../../components/Appbar/Appbar';
import Homepage from '../../components/Pages/Homepage';
import Footer from '../../components/Footer/Footer';
import AuthContext from '../../auth-context';
import classes from './App.module.css';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  const login = () => {

  }
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <AuthContext.Provider>
          <CssBaseline />
          <Appbar />
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/Login' exact component={Login} />
          </Switch>
          <Footer />
        </AuthContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
