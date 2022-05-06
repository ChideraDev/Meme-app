import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import App from './App';
ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*function greeting(name){

const date = new Date();
const hours= date.getHours()
let timeOfDay

  if (hours >= 4 && hours <= 12){
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 17){
    timeOfDay = "Afternoon";
  } else if (hours >= 17 && hours < 20){
    timeOfDay = "Evening";
  } else{
    timeOfDay = "Night";
  }
   return `Good ${timeOfDay}, ${name}`
}
console.log(greeting("Chidera"))*/