import React from "react";
// add any needed imports here
import {useSelector} from "react-redux"


function Users() {
    const users = useSelector((state)=> state.users)

  return (
    <div>
      <ul>
        Users!
        
        {users.map((user) => (
          <li>{user.username}</li>
        ))}
        {users.length}
       
      </ul>
    </div>
  );
}

export default Users;
