import React, { Component } from 'react';
import UserAvatar from './UserAvatar';
import {connectContext} from './Context.js';

const UserStats = ({context}) => (
      <div className="user-stats">
        <div>
          <UserAvatar />
          {context.state.user.name}
        </div>
        <div className="stats">
          <div>{context.state.user.followers} Followers</div>
          <div>Following {context.state.user.following}</div>
        </div>
      </div>
);

const connectedUserStats = connectContext(UserStats);

export default connectedUserStats;
