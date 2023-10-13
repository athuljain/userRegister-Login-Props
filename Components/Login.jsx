import React from "react";

function Login({ userData }) {
  return (
    <div>
      <h2>Login</h2>
      <p>Email: {userData.email}</p>
      <p>Password: {userData.password}</p>
    </div>
  );
}

export default Login;
