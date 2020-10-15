import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [active, setActive] = useState(false);

  const toggle = (e) => {
    const check = e.target.id;
    if (check === "input") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div onClick={toggle} className="App">
      <div className="box">
        <h1 className={active ? "display" : ""} id="hide">
          Hello CodeSandbox
        </h1>
        <input
          className={active ? "expand" : ""}
          id="input"
          onClick={toggle}
          type="text"
        />
      </div>
    </div>
  );
};
export default App;
