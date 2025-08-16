import { useState } from "react";



export default function useObjectState(initialValue){
      const [state,setState] = useState(initialValue);

        
      const setStats = (cb)=>{
            
            
            setState((prev)=>{

                  const newState = typeof cb ==='function' ?cb(prev):cb;
                  return {...prev,...newState};
            })
      }

       return [state,setStats]
}