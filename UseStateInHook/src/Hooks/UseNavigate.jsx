import { useNavigate } from "react-router-dom";
import Home from "./Home";
const UseNavigate =()=>{
    const nav1 = useNavigate();

    const changepage=()=>{
        nav1(Home);
    }

    return(
        <>
        
        <Button onClick={changepage}>Click Me</Button>
        </>
    )
}
export default UseNavigate;
