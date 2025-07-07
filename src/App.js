
import './App.css';
import { useState } from 'react';
import useClickAnywhere from './hooks/useClickAnywhere';

function App() {
const[count,setCount] = useState(0);

useClickAnywhere(()=>{setCount((p)=>p+1)});

  return (
    <div>
      <h1>Click Count: {count}</h1>
      <p>Click Anywhere on the page to increase the count</p>
    </div>
  );
}

export default App;
