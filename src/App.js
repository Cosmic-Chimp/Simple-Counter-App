import React from "react";
import Counter from "./reactComps/counter";
import "./Sass/main.scss";
function App() {
  return (
    <div className="App">
      <div className="CountClose">
        <Counter />
      </div>
    </div>
  );
}

export default App;
