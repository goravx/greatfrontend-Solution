import {useRef,useLayoutEffect,useState} from "react";

export default function useMeasure(){
    const ref = useRef(null);    
    const [dimension,setDimension] = useState({
          width:0,
          height:0
    })

    useLayoutEffect(()=>{
        const node = ref.current;
        if(!node) return;
         const observer = new ResizeObserver((entries)=>{
               if(entries[0]){
                   const {width,height} = entries[0].contentRect;
                   setDimension({width,height});
               }
         })

         observer.observe(node);

         return ()=> observer.unobserve(node);

    },[])




    return [ref,dimension];
}