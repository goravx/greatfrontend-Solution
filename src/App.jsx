import useToggle from "./hooks/useToggle"

export default function App(){
    console.log('running app tag')
    const{toggleHelper} = useToggle(false);
    console.log("app is running..")
    return (
       <div className="App">
        App

        <button onClick={toggleHelper}>
            Toggle
        </button>

        {false?<div>True</div> :<div>false</div>}
       </div>
    )
}