import React from 'react';
import './App.css';
import Main from "./app_component/Main"
import MainNews from "./News_Component/MainNews"
import Wtry from "./app_component/WeatherTry"
function App() {
  return (
    <div className="App">
      <Wtry/>
      {/* <Main/> */}
      {/* <MainNews/> */}
    </div>
  );
}

export default App;
