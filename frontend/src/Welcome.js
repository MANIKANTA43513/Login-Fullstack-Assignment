
import React from "react";

function Welcome() {

  const username = localStorage.getItem("username");

  return (
    <div style={{textAlign:"center", marginTop:"120px"}}>

      <h1>Welcome back, {username}!</h1>

      <p>You have successfully logged in.</p>

    </div>
  );
}

export default Welcome;
