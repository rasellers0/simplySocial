import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';
import {useState} from 'react';
import {useEffect} from 'react';
import userList from './resources/usernames.json';

function Profile (props) {
  let userKey = props.match.params.userKey

  const [userFields, setUserFields] = useState(null);
  const [isEdit, setIsEdit] = useState (false);
  const [button, setButton] = useState (<button className="col-sm-2 float-right btn btn-primary">Edit Profile</button>);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const handleChange = function(event){setUserFields(event.target.value);}


  async function fetchUser(id = ""){
  setIsLoaded(false);
  let res = await fetch(`http://localhost:8080/users?userKey=${id}`);
  return res.ok ? await res.json() : Promise.reject();
}
  function effectfxn(){
    fetchUser(userKey)
    .then(
      (result) => {setUserFields(result[0]);},
      (error) => {setError(error);}
    ).finally(
      setIsLoaded(error !== null ? false : true)
    );
  }

  useEffect(effectfxn, []);

  let setEdit = function () {
    setIsEdit (!isEdit);
    let localIsEdit = isEdit === false ? true : false;
    setButton (localIsEdit ? saveBtn : editBtn);
  };

  let editBtn = (<button className="col-sm-2 float-right btn btn-primary">Edit Profile</button>);
  let saveBtn = (<button className="col-sm-2 float-right btn btn-success">Save Profile</button> );

  const displayFields = (
    <div>
      <ul>
        <li><strong>User ID: </strong>{userKey}</li>
        <li><strong>First Name: </strong>{userFields !== null ? userFields.firstName : null}</li>
        <li><strong>Middle Name: </strong>{userFields !== null ? userFields.middleName : null}</li>
        <li><strong>Last Name: </strong>{userFields !== null ? userFields.lastName : null}</li>
        <li><strong>Bio: </strong>{userFields !== null ? userFields.bio : null}</li>
      </ul>
      <strong>Most Recent Comments</strong>
      <ul>{userFields !== null  && userFields.comments !== undefined ? userFields.comments.map ((value, index) => {
            let usr = userList.users.find(u => u.userKey === value.source);
            let usrName = usr.firstname + ' ' + usr.middlename + ' ' + usr.lastname;
            return <li key={index}><strong>{usrName + ': '}</strong>{value.text}</li>;
          }) : null}
      </ul>
    </div>
  );

  const displayForm = (
    <div>
      <form>
        <div className="form-group col-sm-6">
          <label>User ID:</label>
          <input className="form-control" value={userKey} disabled/>
        </div>
        <div className="form-group col-sm-6">
          <label>First Name:</label>
          <input type="text" className="form-control" value={userFields !== null ? userFields.firstName : null} onChange={handleChange}/>
        </div>
        <div className="form-group col-sm-6">
          <label>Middle Name:</label>
          <input type="text" className="form-control" value={userFields !== null ? userFields.middleName : null} />
        </div>
        <div className="form-group col-sm-6">
          <label>Last Name:</label>
          <input type="text" className="form-control" value={userFields !== null ? userFields.lastName : null} />
        </div>
        <div className="form-group col-sm-6">
          <label>Bio:</label>
          <textarea className="form-control" rows="7" value={userFields !== null ? userFields.bio : null} />
        </div>

        <table className="table table-striped">
          <thead>
            <th>Comment</th>
            <th>Reference</th>
            <th />
          </thead>
          <tbody>
            {userFields !== null && userFields.comments !== undefined ? userFields.comments.map ((value, index) => {
                let usr = userList.users.find(u => u.userKey === value.source);
              return (
                <tr key={index}>
                  <td>{value.text}</td>
                  <td>{usr.firstname + ' ' + usr.middlename + ' ' + usr.lastname}</td>
                  <td><button className="btn btn-danger">Delete</button></td>
                </tr>
              );
            }) : null}
          </tbody>
        </table>
      </form>
    </div>
  );

  let pageContent = isEdit === true ? displayForm : displayFields;

  return (<div className="app-container">
  <Header />
  <div className="container">
    <div style={{margin: '40px'}}>
      <div className="col-sm-12"><div onClick={setEdit}>{button}</div></div>
      <strong>Profile Information:</strong>
      {pageContent}
    </div>
  </div>
  <Footer />
</div>);
}

// const updateJson = function(user){
//     fetch('http://localhost:8080/users/{user.userKey}',{
//         body: JSON.stringify(user),
//         headers: {'accept': 'application/json',
//                   'content-type': 'application/json'},
//         "method": "PUT"
//     }).then((response) => response.json());
// }


export default Profile;
