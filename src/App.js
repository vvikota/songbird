import React from 'react';
import MainScreen from "./components/main-screen/main-screen.jsx";
import birdsData from "./mock/mockData.js";

function App() {
  return (
    <div className="App">
      <MainScreen data={birdsData}/>
    </div>
  );
}

export default App;
