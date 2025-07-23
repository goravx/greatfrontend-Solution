import React, { useEffect, useState } from "react";

import debouncedata from './constants/debouncedata';


export default function App(){

    const [products,setProducts] = React.useState(debouncedata);
    const [displayItems,setDisplayItems] = React.useState(debouncedata);
   
    const [value,setValue] = useState('');

    const searchItemFun  = (e)=>{
         
         const value = e.target.value.toLowerCase();
         const searchedProducts = products.filter((item)=>{
             if(item.toLowerCase().startsWith(value)){
                 return true;
             }else{
                 return false;
             }
         })
         setDisplayItems(searchedProducts);
    }


    useEffect(()=>{
             let timerId;
             if(timerId) clearTimeout(timerId);
             timerId = setTimeout(()=>searchItemFun({target:{value}}),500);


             return ()=>{
                   clearTimeout(timerId);
             }
         
    },[value])
    
    const datatoShow = displayItems.map((item,index)=>{
          return <h1 key={index}>{item}</h1>
    })
    const searchItem = <input  onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Search the product"/>

    return (
        <>  
         <div className="App">
            {searchItem}
              <secttion>
                {datatoShow}
              </secttion>
             </div>
     </>
    )

}