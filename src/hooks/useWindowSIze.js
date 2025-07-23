import { useState ,useEffect} from "react";

export default function useWindowSize({delay}){
      const[ windowSize ,setWindowSize] = useState({
           height: window.innerHeight,
           width: window.innerWidth
      })
       
      
      useEffect(()=>{
         let timerId;
         function handleResize(){
             if(timerId) clearTimeout(timerId);
             timerId = setTimeout(()=>{
                setWindowSize ({
                 height: window.innerHeight,
                 width:window.innerWidth,
              })
             },delay)


          }
           window.addEventListener("resize",handleResize)

           return ()=>{
              clearTimeout(timerId);
              window.removeEventListener("resize",handleResize);
           }
      },[delay])
      
   return windowSize;
}