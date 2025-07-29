import React ,{useState} from "react";
import usePrevious from "./hooks/usePrevious";
function genetateRandomColor(){
      const colors = ["Pink","blue","Green","Red","Orange"];
     return colors[Math.floor(Math.random()*colors.length)];
}


export default function App() {
 const [color,setNewColor] = useState(genetateRandomColor());
 const previousColor = usePrevious(color);

  const handleClick = ()=>{
        function getNewColor(){
             const newColor = genetateRandomColor();
              if(color ==newColor){
                   getNewColor();
              }else{
                 setNewColor(newColor);
              }
        }
        getNewColor();
  }

   
   const boxStyle = (bgColor) => ({
    backgroundColor: bgColor,
    height: "250px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    margin: "10px"
  });



return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={boxStyle(previousColor)}>Previous</div>
        <div style={boxStyle(color)}>Current</div>
      </div>
      <div>
        <button onClick={handleClick} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
        Change Color
       </button>
       </div>
    </div>
  );
}


