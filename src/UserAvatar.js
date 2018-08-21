import React, { Component } from 'react';
import {connectContext} from './Context.js';

const UserAvatar = ({ size, context }) => (
  <img
    onClick={() => context.action.updateFollowers(Math.random())}
    className={`user-avatar ${size || ""}`}
    alt="user avatar"
    src={context.state.user.avatar}
  />
);

const connectedUserAvatar = connectContext(UserAvatar)

export default connectedUserAvatar;
