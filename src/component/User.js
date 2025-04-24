import React, { useEffect } from "react";
import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  //     console.log("Ticking");
  //   }, 1000);
  //   //this is how we clear our app and prevent from memory leakage also it is called unmounting phase
  //   return () => {
  //     clearInterval(timer);
  //   };
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
