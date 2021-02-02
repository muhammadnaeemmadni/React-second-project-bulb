import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


function Blub(){
  const [value, setValue] = React.useState(true);

function On(){
  setValue((previous) => !previous)
}

  return(
    <div id={"ybbground"} className={(value===true)? "Bright" : "Dark"}>
      <div id={"ybtext"}>The Room is {(value === true)? "Dark":"Bright"}</div>
      <button onClick={On} className="button">Change</button>
    </div>
  )
}
ReactDOM.render(<Blub />,document.getElementById("root"));