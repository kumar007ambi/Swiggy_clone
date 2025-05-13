import React, { useEffect } from "react";
import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  // }, []);
  return (
    <div className="user-card bg-zinc-100 rounded">
      <h3>Count : {count}</h3>
      <h2>Name : {name}</h2>
      <h3>Location : Kolkata</h3>
      <h4>Contact : ambikakewat007@gmail.com</h4>
    </div>
  );
};

export default User;
