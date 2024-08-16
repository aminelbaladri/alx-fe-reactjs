import React, { useContext } from 'react';
import UserContext from '../UserContext';

import React from 'react';

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
      <div>
          <h2>User Profile</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
      </div>
  );
};


export default UserProfile;