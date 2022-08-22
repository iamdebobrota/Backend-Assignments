import React from "react";
import "./App.css";
import List1 from "./components/List1";
import Clock from "./components/Clock";
import List2 from "./components/List2";


function App() {
  return (
    <div className="App">
      {/* Clock */}
      <Clock label="24 Hour Live Custom Component Clock" />
      {/* List 1  initialValues [1, 2, 3] */}
      <List1 label="List 1" initialValues={[1, 2, 3]} />
      {/* List 2  initialValues [4, 5] */}
      <List2 label="List 2" initialValues={[4, 5]} />
    </div>
  );
}

export default App;
