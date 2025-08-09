import {useState,useEffect} from "react";


export default function useNetwork(){

     const getConnection = ()=>{
          const connection = navigator.connection || navigator.mozConnection || useNetwork.webkitConnection;

          return {
             online: navigator.onLine,
             downlink:connection?.downlink,
             downlinkMax:connection?.downlinkMax,
             effectiveType: connection?.effectiveType,
             rtt: connection.rtt,
             saveData:connection?.saveData,
             type: connection?.type
          }
     } ;
     
     const[state,setState] = useState(getConnection);
     
     useEffect(()=>{

           const connection = navigator.connection || navigator.mozConnection || useNetwork.webkitConnection;
           const updateState = ()=> setState(getConnection());
           
           window.addEventListener("online",updateState);
           window.addEventListener("offline",updateState);

           connection?.addEventListener("change",updateState);


           return ()=>{
               window.removeEventListener("online", updateState);
      window.removeEventListener("offline", updateState);
      connection?.removeEventListener("change", updateState);
           }

     },[])
     

     return state;
}