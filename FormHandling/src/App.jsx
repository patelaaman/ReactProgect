 import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import './App.css'

function App() {

    //  let [name , setName]  = useState("")
    //  let [email , setEmail]  = useState("")
    //  let [number , setNumber]  = useState("")
    //  let [password , setPassword]  = useState("")
     
    //  let obj= {
    //   name,
    //   email,
    //   number ,
    //   password
    //  }
    //  console.log(obj)
     
    //  const sub=()=>{
    //   window.alert("Data Subbmited");
    //   setName(""),
    //   setEmail("")
    //  }
    const [dataForm ,setDataForm]  = useState({
      
      "city":"",
      "pass":""
  })
  const handleInput=(e)=>{
     const value = e.target.value;
     const key = e.target.name;

     setDataForm({...dataForm ,[key]:value })
  }
  console.log(dataForm)
  return (
    <>
         {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter email" />
       
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email </Form.Label>
        <Form.Control type="text"value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
       
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="textr" value placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}

{/* <input type="text" name="nam" value={dataForm.nam} onChange={handleInput} placeholder="Enter "></input> */}
        <input type="text" name="city" value={dataForm.city} onChange={handleInput} placeholder="Enter "></input>
        <input type="text" name="pass" value={dataForm.pass} onChange={handleInput} placeholder="Enter "></input>
        <button>Data Save</button>
    </>
  )
}

export default App;
