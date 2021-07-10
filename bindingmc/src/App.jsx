import React from "react";
import  ReactDOM  from "react-dom";
import Quiz  from "./Component";
import Header from "./Header";
import Count from "./Count";
import Time from "./Time";

function App() {
  return (
     
    <>
    <div className="container-fluid">
    <Header />
      <div className="d-flex justify-content-center">
        <div className='bind-body'>
          <Quiz x='😻' y='😻' z='😺'/>
          <Quiz x='😻' y='😻' z='😈'/>
          <Quiz x='😻' y='😻' z='😻'/>
          <Quiz x='😻' y='😻' z='😃 '/>
          <Count />
          <Time />
        </div>
      </div>
    </div>
    </>
  );
}


export default App;
