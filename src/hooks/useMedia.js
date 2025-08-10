import { useState ,useEffect } from "react";

export default function useMediaQuery(query){
  const [matches,setMatches] = useState(()=>{
        return typeof window !==undefined 
         ? window.matchMedia(query).matches:
          false;
  });

   
   useEffect(()=>{
         const matchMediaList = window.matchMedia(query);
         
         const handleChange = (e)=>{
             setMatches(e.matches)
         }
         setMatches(matchMediaList.matches)
         matchMediaList.addEventListener("change",handleChange);

         
         return ()=>{
             matchMediaList.removeEventListener("change",handleChange)
         }
   },[])

  return matches;

}