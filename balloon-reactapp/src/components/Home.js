import React, { Component } from 'react';
import  { Row, Col, Image, Container, Card, Button} from "react-bootstrap";
import '../App.css';
import logo from './images/logo/logo.png';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import EncorePink from './images/balloons/EncorePinkOne.jpg';
import Davios_seaport from './images/balloons/Davios_seaport.jpg';
import NH_heart1 from './images/balloons/NH_heart1.PICT';
import EncoreBlack from './images/balloons/EncoreBlack.jpg';
import tallCenterPiece from './images/flowers/tallCenterPiece.jpg';
import happyBDay from './images/grab_and_go/happyBDay.jpg'

export default class Home extends Component {
  render() {
    return (
      
      <main>
      <Container>
        {/*logo*/}
          <Row className ="justify-content-md-center">
            <Col xs={12} sm={4} md={4}> 
            <Image src = {logo} fluid />
            </Col>
          </Row>
        {/*Carousel pictures*/}
          <Carousel>
            <Carousel.Item>
              <Image src = {EncorePink} fluid />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image src = {Davios_seaport} fluid />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <Image src = {NH_heart1} fluid />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         
        
      {/*upper grey bar*/}
        <Row>
          <Card className = "text-center bg-secondary text-white my-5 py4">
            <Card.Body>

            </Card.Body>
          </Card>
        </Row>

      {/*intro text*/}
        <Row className ="justify-content-md-center">
          <Col sm = {5}> 
            <h1>
              Take Your Parties to New Heights with Our Events Decor & Styling!
            </h1>
            <Link to= "/contactUs" className="btn btn-outline-secondary">Contact Us Today</Link>
          </Col>
            
          <Col sm = {7}> 
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Boston_GG_Events, where we specialize in elevating the ambiance 
            of your events. From birthdays and anniversaries to proposals, engagements, and 
            significant milestones like a child's first birthday or a graduation, we offer 
            sophisticated decoration solutions. 
            </p>
            
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unsure about your event's details? Take our custom event quiz for clearer 
            vision and personalized recommendations. Share your questions, comments, 
            and even upload pictures at the end!
            </p>
          </Col>
      </Row>

      {/*lower grey bar*/}
       <Row>
          <Card className = "text-center bg-secondary text-white my-5 py4">
            <Card.Body>

            </Card.Body>

          </Card>
        </Row>

      {/*cards for display*/}
        <Row >
        <Col className="d-flex align-items-stretch">
            <Card className = "cards" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={EncoreBlack}/>
                <Card.Body>
                  <Card.Title>Events Decoration</Card.Title>
                  <Card.Text>
                    Sit back, relax, and enjoy your special occasion 
                    while we expertly handle every aspect of the decoration.
                  </Card.Text>
                  <Link to= "/event" className="btn btn-outline-secondary">Learn More</Link>
              </Card.Body>
            </Card>
        </Col>
          
        <Col className = "d-flex align-items-stretch">
          <Card className = "cards" style={{ width: '18rem' }}>
            <Card.Img 
                variant="top" 
                src={tallCenterPiece}/>
              <Card.Body>
                <Card.Title>Flowers</Card.Title>
                <Card.Text>
                  Discover the charm of our floral services, 
                  offering both exquisite real and artificial flower arrangements. 
                </Card.Text>
                <Link to= "/flower" className="btn btn-outline-secondary">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
        
        <Col className="d-flex align-items-stretch">
          <Card className = "cards" style={{width: '18rem' }}>
            <Card.Img 
                  variant="top" 
                  src={happyBDay}/>
              <Card.Body>
                <Card.Title>Grab and Go</Card.Title>
                <Card.Text>
                Quick, grab-and-go balloon service - perfect for last-minute 
                celebrations. Add instant joy and color to your event.
                </Card.Text>
                <Link to= "/grabAndGo" className="btn btn-outline-secondary">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
        
        </Row>
        </Container>
     </main>
    )
  }
}
