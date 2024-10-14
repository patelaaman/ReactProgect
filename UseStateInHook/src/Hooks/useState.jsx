import { useState } from 'react'
import './App.css'
const useState =()=>{
    let [name,setName] = useState("Hello");    // instance og useState
    let [age,setAge] = useState(0);
    let str = "hello"
   
    const output=()=>{
      setName("Deepak");
      setAge(9);
    }
    return(
        <>
         {name} {age}
      <br></br>
      {typeof(name)}
      {typeof(age)}

      <button onClick={output}>Click Here to change </button>
        
        </>
    )
}