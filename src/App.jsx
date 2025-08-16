import * as React from "react";
import useDefault from "./hooks/useDefault";

export default function App() {
  const initState = { name: "Tyler" };
  const defaultState = { name: "Ben" };

  const [user, setUser] = useDefault(initState, defaultState);

  return (
    <section>
      <h1>Use Default</h1>
      <button
        title="sets the value to Lynn"
        className="link"
        onClick={() => setUser({ name: "Lynn" })}
      >
        Lynn
      </button>

      <button
        title="sets the valye to tyler"
        className="link"
        onClick={() => setUser({ name: "Tyler" })}
      >
        Tyler
      </button>

      <button
        title="Sets the value to null causing it to use the default value"
        className="link"
        onClick={() => setUser(null)}
      >
        Null
      </button>

      <pre>
            <code>{JSON.stringify(user,((key,value)=>{
                    if(value.name=="Lynn") {
                        return {name:"Gaurav"}

                  }else{
                         return value
                  }
            }),1)}</code>
      </pre>
    </section>
  );
}
