import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tablet from "../Pages/Tablet.png"
import "../src/assets/map.css"
const Map = ()=>{
    let productData= [
        {
            "carding":tablet,
            "pprize": 34999,
            "pbrand":"mac",
            "pname" :"Tablet"
    },
    {
        "carding":tablet,
        "pprize": 34999,
        "pbrand":"mac",
        "pname" :"Tablet"
},
{
    "carding":tablet,
    "pprize": 34999,
    "pbrand":"mac",
    "pname" :"Tablet"
},
{
    "carding":tablet,
    "pprize": 34999,
    "pbrand":"mac",
    "pname" :"Tablet"
}, {
    "carding":tablet,
    "pprize": 34999,
    "pbrand":"mac",
    "pname" :"Tablet"
}
]
    return(
        
        <>
        <section id="cardSection" fluid>
            {
               productData.map(items=>(
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={items.carding} height="250px" width="150px" />
                <Card.Body>
                  <Card.Title>{items.pbrand}</Card.Title>
                  <Card.Title>{items.pname}</Card.Title>
                  <Card.Title>{items.pprize}</Card.Title>

                </Card.Body>
              </Card>
               ))
            }
        </section>
        
        
        </>
    )
}
export default Map;