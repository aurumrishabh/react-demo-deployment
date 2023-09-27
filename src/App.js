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
    </div>
  );
}

export default App;
