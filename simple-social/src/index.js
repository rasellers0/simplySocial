import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FriendList from './FriendList';
import Comments from './Comments';
import Search from './UserSearch';
import Profile from './Profile';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Friends" component={FriendList} />
      <Route path="/Comments" component={Comments} />
      <Route path="/Search" component={Search}/>
      <Route path="/Profile/:userKey" component={Profile} />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

