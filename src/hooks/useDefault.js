import { useState } from "react"


export default function useDefault(initState,defaultState){
   const [user,setUser] = useState(initState);
    const currentValue = user ?? defaultState;
   
    return [currentValue,setUser]
}