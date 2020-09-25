import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import userList from './resources/usernames.json';
import Header from './Header.js';
import Footer from './Footer.js';
import {Link} from 'react-router-dom';

const people = userList;

function UserSearch () {
  const [searchTerm, setSearchTerm] = React.useState ('');
  const [searchResults, setSearchResults] = React.useState ([]);
  const handleChange = event => {setSearchTerm (event.target.value);};
  //for future reference -- this is how you might do an onChange event, combined w/ handleChange, above
  //   React.useEffect (
  //     () => {
  //       const results = people.users.filter (p =>(p.firstname + ' ' + p.middlename + ' ' + p.lastname).toLowerCase ().includes (searchTerm));
  //       setSearchResults (results);
  //     }, [searchTerm]
  //   );

  function doSearch () {
    const results = people.users.filter (p => (p.firstname + ' ' + p.middlename + ' ' + p.lastname).toLowerCase ().includes (searchTerm));
    setSearchResults (results);
  }

  let searchHasResults = searchTerm !== null && searchTerm !== '';
  let searchList = (
    <ul>
      {searchResults.map ((item, index) => (
        <div key={index}>
          <Link className="nav-link" to={"/Profile/" + item.userKey} >{item.firstname + ' ' + item.middlename + ' ' + item.lastname}</Link>
        </div>
      ))}
    </ul>
  );
  let searchResultList = searchHasResults ? searchList : null;
  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <div className="form-inline col-sm-12">
          <input
            className="form-control col-sm-8" placeholder="Search" value={searchTerm} style={{margin: '40px'}} onChange={handleChange}/>
          <button className="btn btn-success col-sm-1" type="button" onClick={doSearch}>Search</button>
        </div>
        {searchResultList}
      </div>
      <Footer />
    </div>
  );
}

export default UserSearch;
