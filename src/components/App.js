import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor() {
    super();
    this.renderHome = this.renderHome.bind(this);
    this.state = {
      apps: [],
      uid: localStorage.getItem("uid"),
      owner: localStorage.getItem("owner")
    }
  }

  renderHome() {
    const profile = {
      Name: localStorage.getItem("owner")
    };

    return (
      <div className='base'>
        <MuiThemeProvider />
        <div>Agustin puto!</div>
      </div>
    );
  }

  render() {
    // check if they are no logged in at all
    if (!this.state.uid) {
      this.context.router.transitionTo(`/login`);
      return null;
    }

    return (
      <div className="homePage">
        {this.renderHome()}
      </div>
    )
  }
}


App.contextTypes = {
  router: React.PropTypes.object
}
export default App;
