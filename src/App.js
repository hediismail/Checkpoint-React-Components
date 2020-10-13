import React from 'react';
import logo from './logo.svg';
import './App.css';
import Address from "./component/profile/Address";
import FullName from "./component/profile/FullName";
import Image from "./component/profile/ProfilPhoto";
import "./style.css"
function App() {
  return (
    <div className="App">
      <FullName/>
      <Image/>
      <Address/>
    </div>
  );
}

export default App;
