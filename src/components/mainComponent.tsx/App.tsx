import React from 'react';
import './App.sass';
import styled from "styled-components"
function App() {
  const MyH1 = styled.h1`
    font-size: 34px;
    font-weight: 800;
  `
  return (
    <div className="App">
      <MyH1 className="text-primary text-center text-serif"> Welcome to a new app </MyH1>
    </div>
  );
}

export default App;
