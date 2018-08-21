import React, { Component } from 'react';
import { render } from 'react-dom';
import Body from './Body.js';
import Content from './Content.js';
import Nav from './Nav.js';
import Sidebar from './Sidebar.js';
// import UserAvatar from './UserAvatar.js';
import UserStats from './UserStats.js';
import {AppContextProvider, AppContext} from './Context.js';


class App extends React.Component {

  render() {
    return (
        <AppContextProvider>
          <Nav />
          <Body />
        </AppContextProvider>
    );
  }
}

export default App;
