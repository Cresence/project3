// src/components/Profile.js
import Navadmin from '../components/Navadmin/index'
import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

var keys = require('../keys');


const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  let adminBar = (keys) =>{
    return keys.map(e => {
      if (user.email === e) {
        return <Navadmin />
      } else {
        return null
      }
    });
};
  return (
    <>
      {adminBar(keys.adminEmail.id)}
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      {user.email === user.name ? null : <p>{user.email}</p>}
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default Profile;