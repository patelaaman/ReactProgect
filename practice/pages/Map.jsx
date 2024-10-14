
import Card from 'react-bootstrap/Card';
import tablet from "../src/assets/Tablet.png"

const Map =()=>{

    let  porductdata=[
        {
            "carding":tablet,
            "pprize":348383,
            "pbrand": "mac",
            "pname":"Tablet"
        },
        {
            "carding":tablet,
            "pprize":348383,
            "pbrand": "mac",
            "pname":"Tablet"
        },
        {
            "carding":tablet,
            "pprize":348383,
            "pbrand": "mac",
            "pname":"Tablet"
        }
    ]
    return(
        <>
        <section id="ak" fluid>
             {
                porductdata.map(items=>(
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={items.carding} height="250px" width="170px" />
                    <Card.Body>
                      <Card.Title><h1>{items.pbrand}</h1></Card.Title>
                      <Card.Title><h4>{items.pprize}</h4></Card.Title>
                      <Card.Title>{items.pname}</Card.Title>
                    
                    </Card.Body>
                  </Card>
                ))
             }
        </section>
   
        </>
    )
}
export default Map;