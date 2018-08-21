import React, { Component } from 'react';
import { render } from 'react-dom';
import Sidebar from './Sidebar';
import Content from './Content';
// import UserContext from './App.js';

const Body = () => (
  <div className="body">
    <Sidebar />
    <Content />
  </div>
);

export default Body;
