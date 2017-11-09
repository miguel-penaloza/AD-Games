import React, {Component}from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apps: [],
      uid: localStorage.getItem("uid"),
      owner: localStorage.getItem("owner")
    }
  }

  render() {
    // check if they are no logged in at all
    /* if (!this.state.uid) {
      this.context.router.transitionTo(`/login`);
      return null;
    } */

    return (
        <MuiThemeProvider>
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </main> 
        </MuiThemeProvider>
    )
  }
}

export default App;
