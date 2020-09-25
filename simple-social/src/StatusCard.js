import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './resources/logo192.png';
import {Link} from 'react-router-dom';

function StatusCard (props) {
  let comments = props.name.comments.length;
  let context = window.location.href.replace ('http://localhost:3000/', '');
  var commentsButton = null
  if(context !== 'Comments'){
    commentsButton = <Link className="col-sm-2 float-right" to={{pathname: '/Comments', state: props}}>
                        <button type="button" className="btn btn-sm btn-info"> Comments</button>
                    </Link>
  }
  return (
    <div className="statuscard col-sm-12">
      <div className="card">
        <div className="card-header">
          <img src={logo} className="App-logo float-left" alt="logo" />
          <span className="float-right">
            {props.name.firstname + ' ' + props.name.middlename + ' ' +  props.name.lastname}
          </span>
        </div>
        <div className="card-body">{props.name.bio}</div>
        <div className="card-footer col-sm-12">
          <div className="col-sm-2 float-left">{comments + ' Comment(s)'}</div>
          <div className="col-sm-10 float-right">{ commentsButton }</div>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
