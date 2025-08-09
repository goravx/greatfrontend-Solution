
import { useEffect,useState } from "react";

export default function useLocalStoarge(key,intialValue){
   const[storedValue,setStoredValue] = useState(()=>{
          try{
               const item = window.localStorage.getItem(key);
               return item? JSON.parse(item):intialValue;
          }catch(error){
               console.log("error in gettig",key,error);
               return intialValue;
          }
   });
  

    useEffect(()=>{
          try{
         window.localStorage.setItem(key,JSON.stringify(storedValue));
          }catch(err){
             console.log('error ',key,err)
          }
    },[storedValue])
   return [storedValue,setStoredValue];
}