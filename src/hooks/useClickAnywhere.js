import { useEffect } from "react";

export default function useClickAnywhere (handler){
   
    useEffect(()=>{
         document.addEventListener('click',handler);

         return ()=>{
              document.removeEventListener("click",handler)
         }
    },[handler])
    
}