import React from "react";

import "./App.css";
import PrimaryHeaderAppBar from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <PrimaryHeaderAppBar></PrimaryHeaderAppBar>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
