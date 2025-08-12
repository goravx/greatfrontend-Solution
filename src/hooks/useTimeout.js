import { useEffect,useRef } from "react";
export default function useTimeout(cb,time){
    const timerRef = useRef();  

   useEffect(()=>{
      
       timerRef.current=  setTimeout(cb,time);


       return ()=>clearTimeout(timerRef.current);
   })
   

    const clear = ()=>clearTimeout(timerRef.current);
    return clear;
    
}