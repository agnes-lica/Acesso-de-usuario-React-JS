import React from "react";
import { useState } from "react";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Agnes";

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <RestrictedPage
        isLoggedin={isLoggedIn}
        user={user}
        Login={Login}
        Logout={Logout}
      />
    </div>
  );
}

export default App;
