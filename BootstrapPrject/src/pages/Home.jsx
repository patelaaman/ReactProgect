import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import tablet from "../assets/Tablet.png"
const Home=()=>{
     return(
        <>
         <Container fluid id="hero">
        <Row>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>
                  Samsung smartphone<br></br>Porto selection
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  shop electronics
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          {/* ============================================ */}
          <Col>
            <Image src={tablet} fluid />
          </Col>
        </Row>
      </Container>
      <Container fluid id="product">
      <Row>
        <Col>
        <Row xs={1} md={6} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={tablet} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </Col>

      </Row>
     
    </Container>

        
        </>
     )
}
export default Home;