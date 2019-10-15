// src/components/Profile.js
import Navadmin from '../components/Navadmin/index'
import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-wrapper";

var keys = require('../keys');
console.log(keys.adminEmail);


const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  console.log(user);

  function renderAdmin(keys) {
    if (user.email === keys.id) {
      console.log('Admin Logged In...');
      return <Navadmin />
    } else {
      console.log('Regular User Logged In...');
    };
  }  


  return (
    <Fragment>
      {/* {renderAdmin()} */}
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile;