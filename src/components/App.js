import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "./userActions";

function App() {
  const { name, email } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />

      {/* Live Display */}
      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}

export default App;
