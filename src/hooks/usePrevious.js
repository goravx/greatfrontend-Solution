import {useEffect,useRef} from "react";


export default function usePrevious(color){
       const ref = useRef();
       

       useEffect(()=>{
          ref.current = color
       },[color]);

       return ref.current;
}