import React from 'react';
import './App.scss';
import styled from "styled-components"
function App() {
  const MyH1 = styled.h1`
    font-size: 34px;
    font-weight: 800;
    color: #ff0000;
  `
  return (
    <div className="App">
      <MyH1> Welcome to a new app </MyH1>
    </div>
  );
}

export default App;
