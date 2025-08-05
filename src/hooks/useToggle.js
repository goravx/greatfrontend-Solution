
import { useState ,useCallback} from "react";

export default function useToggle(initValue){
     console.log("running useToggle tg")
     const [state,setState] = useState(initValue);
     console.log("useToggle")
     const toggleHelper = useCallback(()=>{
           setState(prev=>!prev);
     },[])

     return {state,toggleHelper};
}