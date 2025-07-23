import React from "react";
import useWindowSize from "./hooks/useWindowSIze";

export default function App(){

   const {width,height} = useWindowSize(300);
   const dimension = <h1>width is {width} and height is {height}</h1>
   return (
    <>
      {dimension}
    </>
   )
   console.log(`width is ${width} and height i ${height}`)
}