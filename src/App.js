import React, { useState } from "react";
import Register from "../Components/Register";
import Login from "../Components/Login";

function App() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleRegister = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>User Registration and Login</h1>
      <Register onRegister={handleRegister} />
      <Login userData={userData} />
    </div>
  );
}

export default App;
