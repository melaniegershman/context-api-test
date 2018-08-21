import React, { Component } from 'react';

const AppContext = React.createContext();

class AppContextProvider extends Component {
  state = {
    user: {
      avatar:
        "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
      name: "Dave",
      followers: 14,
      following: 123
    }
  }

  action = {
    updateFollowers: (followers) => {
      const user = Object.assign({}, this.state.user, {followers});
      this.setState({user});
    }
  }

  render() {
    return (
      <AppContext.Provider value = {{state: this.state, action: this.action }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

const connectContext = (Component) => (props) => (
  <AppContext.Consumer>
    {context => <Component {...{...props, context}} />}
  </AppContext.Consumer>
)

export {AppContextProvider, AppContext, connectContext};
