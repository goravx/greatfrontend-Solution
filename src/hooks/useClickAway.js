import { useRef,useEffect } from "react";
export default function useClickAway(callback){
       const ref = useRef(null);

       useEffect(()=>{
           function handleClick(event){
               if(ref.current && !ref.current.contains(event.target)){
                   callback();
               }
           }

           document.addEventListener('mousedown',handleClick);
           document.addEventListener('touchStart',handleClick);

           return ()=>{
              document.removeEventListener('mousedown',handleClick);
              document.removeEventListener('touchStart',handleClick);

           }
       },[callback]);

       return ref;
}