
import useCycle from "../hooks/useCycle";
export default function Cycle(){
    const [mode,cycle] = useCycle('low','medium','high');
    
    return (
        <div>
            <p> State: {mode}</p>
              <button onClick={cycle}>Cycle</button>
        </div>
    )
}