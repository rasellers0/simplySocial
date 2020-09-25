import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import userList from './resources/usernames.json';
import Header from './Header';
import Footer from './Footer';

function FriendList () {
  return (
    <div className="app-container">
      <Header />
      <ul className="container">
        {userList.users.map ((value, index) => {
          return (
            <li key={index} style={{marginLeft:"20px"}}>
              {value.firstname + ' ' + value.middlename + ' ' + value.lastname}
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}

export default FriendList;
