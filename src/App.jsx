import useLocalStoarge from "./hooks/useLocalStorage";
import createDrawing from "./common/createDrawing";

import { useRef ,useEffect} from "react";
export default function App(){
      const [drawing, saveDrawing] = useLocalStoarge('drawing',null);
      const ref = useRef(null);

      useEffect(()=>{
             createDrawing(ref.current,drawing,saveDrawing);
      },[drawing,saveDrawing]);



      return (
         <section>
            <header>
                 <h1> use Local Storage</h1>
                 <button className="link" onClick={()=>window.location.reload()}>
                     Reload Window
                 </button>

                 <button className="link" onClick={()=>{
                      window.localStorage.clear();
                      window.location.reload();
                 }}> Clear Local Storage</button>
            </header>

              <figure>
                   <canvas ref= {ref} width={800} height = {800}/>
              </figure>
         </section>
      )
     
}