import { useContext } from "react"
import { ColorContext,ThemeContext } from "./ColorContext.jsx";
const MyComponent=()=>{
    const {color, setColor} = useContext(ThemeContext);

    const cc=()=>{
        setColor("black")
    }
    return(
        <>
        <h1 style={{color:color}} onClick={cc} >THis is Context APi</h1>
        
        </>
    )
}
export default MyComponent