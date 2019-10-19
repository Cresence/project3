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

  console.log(user.email);
  console.log(keys.adminEmail.id);

  let adminBar = (keys) =>{
    console.log(keys);
    return keys.map(e => {
      console.log(e)
      if (user.email === e) {
        console.log("Admin User")
        return <Navadmin />
      } else {
        console.log("Reg User")
      }
    });
};
  return (
    <>
      {adminBar(keys.adminEmail.id)}
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default Profile;