import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Btn from './Components/Btn';


function App() {

  const [counter, setCounter] = useState(1)

  const inc=()=>{
    setCounter(counter + 1)
  }
  const dec=()=>{
    setCounter(counter - 1)
    
  }
  
  return (
    <div className="App">
    <h1>Counter App</h1>
    <h1>{counter}</h1>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>decrement</button>

 
    </div>
  );
}

export default App;
