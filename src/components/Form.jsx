import * as React from "react";


export default function Form({addItem}){
    const [value,setValue] = React.useState("");

    const handleSubmit = (e)=>{
          e.preventDefault();
          if(!value.trim()) return ;

          addItem(value);
          setValue("");
    }


    return (
          <form onSubmit = {handleSubmit} className="form">
              <input type ="text" value = {value} 
              onChange = {(e)=>setValue(e.target.value)}
              placeholder = "Enter Todo..."
              className = "input"
              />
           
           <button type="submit" className="btn">
            Add
           </button>
          </form>
    )
}