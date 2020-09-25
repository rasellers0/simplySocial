import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import userList from './resources/usernames.json';

function CommentFeed (props) {
  const comments = props.comments;
  const users = userList.users;
  return (
    <ul>
      {comments.map ((value, index) => {
          let user = users.find(u => u.userKey === value.source);
        return (
          <div className="card" key={index}>
            <div className="card-body">
                <strong>{user.firstname + ' ' + user.middlename + ' ' + user.lastname + ': '}</strong>
             {value.text}
            </div>

          </div>
        );
      })}
    </ul>
  );
}

export default CommentFeed;
