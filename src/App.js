import { useEffect, useState } from 'react';

import axios from 'axios';
import userEvent from '@testing-library/user-event';
function App() {
  const [user, setUser]= useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      console.log(res)
      setUser(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
 
  return(
    <>
    
    <h1>Api handaling in react js</h1>
   {
    user.map((element, index)=>{
      <h1>{element.id}</h1>
    })
   }
   
    </>
  );
}
export default App;
