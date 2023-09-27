import './App.css';
import React from "react";
import Signin from "./components/Signin";
import DummyData from "./components/DummyData";
import BootstrapCheck from "./components/BootstrapCheck";


function App() {

  return (
    <div className="App">
        <Signin/>
        <DummyData/>
        {/*<BootstrapCheck/>*/}
        <h2>git feature1</h2>
    </div>
  );
}

export default App;
