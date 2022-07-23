import React from "react";

import "../RestrictedPage/style.css";

function RestrictedPage({ isLoggedin, user, Login, Logout }) {
  return (
    <div>
      {isLoggedin ? (
        <>
          <p>Bem-vindo {user}</p> <button onClick={Logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Você não pode acessar essa página</p>
          <button onClick={Login}>Login</button>
        </>
      )}
    </div>
  );
}

export default RestrictedPage;
