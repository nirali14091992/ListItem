import React, { Component } from 'react';
import Heading from "./component/Heading";
import Para from "./component/Para";
import List from "./component/List";
import * as calci from "./component/Calculator";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Heading  />
      <Para />
      <List /> */}
      <ol>
		  <li>This is the Addition , {calci.default(20,4)}</li>
        <li>This is the Subtraction , {calci.subtract(20,4)}</li>
        <li>This is the Multiplication , {calci.multiplication(20,4)}</li>
        <li>This is the Division , {calci.division(21,4)}</li>
      </ol>
    </div>
  );
}

export default App;
