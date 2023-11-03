import { Container, Row, Col, Card } from 'react-bootstrap';
import './CSS/Service.css'

function Services() {
  const services = [
    {
      title: "Search Engine Optimization",
      description: "Improve your website's visibility on search engines and attract organic traffic.",
    },
    {
      title: "Social Media Marketing",
      description: "Engage with your audience on social media platforms to build brand awareness and customer loyalty.",
    },
    {
      title: "Email Marketing",
      description: "Reach your customers directly with personalized email campaigns that drive results.",
    },
      {
        title: "Digital Marketing",
        description: "Drive your business to the next level with digital marketing.",
        },
      {
          title: "Web Development",
          description: "Develop your website and build your online presence.",
    }
  ];

  return (
    <div>
      <Container>
        <h2>Our Services</h2>
        <Row  >
          {services.map((service, index) => (
            <Col key={index} md={4} id='container'>
              <Card>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
                <button className='btn btn-primary'>Details</button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
