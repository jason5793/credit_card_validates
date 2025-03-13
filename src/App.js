import React, { useState } from "react";
import Validator from "validator";
import './App.css';
const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (Validator.isCreditCard(value)) {
      setErrorMessage("✅ Valid Credit Card Number");
    } else {
      setErrorMessage("❌ Enter a valid Credit Card Number!");
    }
  };

  return (
    <div style={{ marginLeft: "200px", display: "flex", flexDirection: "column" }}>
      <h2>Validate Credit Card in React.js</h2>
      <span>Enter your name</span>
      <input 
      className="input-fields"
      type="text"  
      placeholder="Enter name"
      />
      <span>Enter Credit Card:</span>
      <input 
      className="input-fields"
      placeholder="Enter your credit card"
        type="text"
        onChange={(e) => validate(e.target.value)}
        style={{ padding: "8px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <p style={{ color: errorMessage.includes("Valid") ? "green" : "red" }}>{errorMessage}</p>
    </div>
  );
};
export default App;
