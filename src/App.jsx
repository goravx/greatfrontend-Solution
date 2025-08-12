
import {useState } from "react";
import Bomb from "./components/Bomb";
import useTimeout from "./hooks/useTimeout";
export default function App(){

      const [hasDefused,setHasDefused] = useState(false);
      const [hasExploded,setHasExploded] = useState(false);

      const clear = useTimeout(()=>{
            setHasExploded(true);
      },5000)

     const handleClick = ()=>{
          clear();
          setHasDefused(!hasDefused);   
     }

     

      return (
            <>
            
            <section>
      <h1>useTimeout</h1>
      <p>You have 5s to defuse (click) the bomb or it will explode </p>
      <button
        className="link"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
      <Bomb
        hasDefused={hasDefused}
        hasExploded={hasExploded}
        handleClick={handleClick}
      />
    </section>
            </>
      )}
