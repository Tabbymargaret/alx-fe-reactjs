import React, { useContext } from "react";

import UserContext from "../Contexts/UserContext";

function UserDetails() {
  const userDetails = useContext(UserContext);
  return (
    <div>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
    </div>
  );
}

export default UserDetails;
