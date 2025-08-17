
import React, { useState } from "react"
export default function useHistoryState(initialValue){
      
      const[history,setHistory] = useState({
           past:[],
           present: initialValue,
           future:[],
      })


      const set = (newValue)=>{
             setHistory((prev)=>{
                   return {
                       past:[...prev.past,prev.present],
                       present:newValue,
                       future:[],
                   }
             })
      }

      const undo = ()=>{
           setHistory((prev)=>{
               if(prev.past.length ===0) return prev;
                const previous = prev.past[prev.past.length-1];
                const newPast = prev.past.slice(0,-1);

                return {
                    past:newPast,
                    present: previous,
                    future: [prev.present,...prev.future],
                }
           })
           
      }

      const redo = ()=>{
          setHistory((prev)=>{
               if(prev.future.length ==0) return prev;
               const next = prev.future[0];
               const newFuture = prev.future.slice(1);

               return {
                   past:[...prev.past,prev.present],
                   present:next,
                   future:newFuture,
               }
          })
      }


      const clearHistory = () =>{
           setHistory({
               past:[],
               present: initialValue,
               future: [],
           })
      }


      return {state:history.present,
        set,
        undo,
        redo,
        clear:clearHistory,
        canUndo: history.past.length >0,
        canRedo: history.future.length >0,

      }

}
