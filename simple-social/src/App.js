import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import userList from './resources/usernames.json';
import Header from './Header';
import StatusFeed from './StatusFeed';
import Footer from './Footer';

function App () {
  return (
    <div className="App app-container">
      <Header />
      <div className="container">
        <div className="app-body">
          <div>
            <StatusFeed userList={userList} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
