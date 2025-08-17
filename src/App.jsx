import { useState } from "react";
import useHistoryState from "./hooks/useHistoryState";

export default function App(){
      const initialValue = {items:[]};
      
      const {state,set,undo,redo,clear,canUndo,canRedo} = useHistoryState(initialValue);
      const [val,setVal] = useState("");

    const addItem = (e) => {
    e.preventDefault();
    if (!val.trim()) return;
    set({
      ...state,
      items: state.items.concat({ id: crypto.randomUUID(), name: val }),
    });
    setVal("");
  };

      return (
          <div>
              <h2>Undo/redo</h2>

              <form onSubmit = {addItem}>
                    <input type="text"
                     placeholder="enter the value.."
                     value = {val}
                     onChange = {(e)=>setVal(e.target.value)}/>
                     <button type="submit">Add</button>
              </form>

               <ul>
        {state.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>


                  <div style={{marginTop:"10px"}}>

                          <button disable={!canUndo} onClick={undo}>Undo</button>
                          <button disable={!canRedo} onClick={redo}>Redo</button>
                          <button onClick={clear}>Clear</button>
                  </div>
          </div>
      )

}