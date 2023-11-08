import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [InputData, setInputData]= useState()
  const [items, setItems] = useState([])

  const addItem =()=>{
    setItems([...items, InputData])

  }
  const deleteAll=()=>{
    setItems([])
  }

  return (
    <div className="App">
   < input  onChange={(e)=>setInputData(e.target.value)} value ={InputData} type='text'  placeholder='Enter your Todo' />
   <button onClick={addItem}>Add Todo</button>
   <button onClick={deleteAll}>delete Todo</button>
   <div>
    {
      items.map((element,index)=>{
        return(
          <h1>{element}</h1>
        )
      })
    }
   </div>
    </div>
  );
}

export default App;
