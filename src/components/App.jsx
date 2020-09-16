import React from "react";
// import { render } from "react-dom";
// import Login from "./Login";

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        currentTime > 12 && <h1>Why are u still working?</h1>
      }
    </div>
  );
}

export default App;
