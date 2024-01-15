import React, { Component } from 'react';
import  { Row, Col, Image, Container, Card, Button} from "react-bootstrap";
import '../App.css';
import logo from './images/logo/logo.png';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import EncoreRed from './images/balloons/encoreRed.jpg';
import Empire from './images/balloons/empire.jpg';
import Jiangnan from './images/balloons/jiangnan.jpg';
import EncoreBlack from './images/balloons/EncoreBlack.jpg';
import tallCenterPiece from './images/flowers/tallCenterPiece.jpg';
import happyBDay from './images/grab_and_go/happyBDay.jpg'

export default class Home extends Component {
  render() {
    return (
      
      <main>
        
      <Container >
        

        <div>
          <Carousel >
            
            <Carousel.Item>
              <Image src = {Empire}  fluid />
              <Carousel.Caption>
             
              </Carousel.Caption> 
            </Carousel.Item>

            <Carousel.Item>
              <Image src = {Jiangnan} fluid />
              <Carousel.Caption>
             
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <Image src = {EncoreRed} fluid />
              <Carousel.Caption>
             
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
     

      {/*intro text*/}
      <div style={{ margin: '50px' }} >
    <Row className="justify-content-md-center text-center">
        <Col> 
            <h1 style={{ margin: '20px', fontWeight: 'bold', color: '#845365'}}>
                Let's Make Your Party Memorable!
            </h1>
            <div style={{ margin: '20px', textAlign: 'center' }}>
                <Link to="/contactUs" className="btn btn-outline-secondary">
                    Contact Us Today
                </Link>
            </div>
        </Col>
    </Row>
</div>


   

      {/*cards for display*/}
      <div className ="dark-gray-text">
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-stretch">
          <img src={EncoreBlack} alt="Onsite Installation" style={{ width: '100%' }} />
        </Col>
        <Col md={6} className="d-flex align-items-stretch" style={{ paddingTop: '20px' }}>
          <div>
            <h3 style={{margin: '20px',fontWeight: 'bold'}}>Onsite Installation</h3>
            <p style={{ color: '#757575', margin: '20px'}}>
            Based in North Quincy, MA, we provide onsite balloon and flower decoration service in the greater Boston region, 
            including but not limited to Boston, Cambridge, Allston, Brookline, Brighton, Somerville, Waltham, Newton, 
            and Lexington. Our on-site installation services start from $299, depending on the design and location. 
            </p>
            <Link style={{margin: '20px'}} to="/event" className="btn btn-outline-secondary">Learn More</Link>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
          <Col md={6} className="order-md-2 d-flex align-items-stretch">
            <img src={tallCenterPiece} alt="Flowers" style={{ width: '100%' }} />
          </Col>
          <Col md={6} className="order-md-1 d-flex align-items-stretch" style={{ paddingTop: '20px' }}>
            <div>
              <h3 style={{margin: '20px', fontWeight: 'bold'}}>Flowers</h3>
              <p style={{ color: '#757575', margin: '20px'}}>
                Discover the charm of our floral services, offering both exquisite real and artificial flower arrangements.
                We offer both fresh flower design and artificial flower rental services. 
                Flowers are available exclusively as an add-on to our onsite packages.
              </p>
              <Link style={{margin: '20px'}} to="/flower" className="btn btn-outline-secondary">Learn More</Link>
            </div>
          </Col>
      </Row>

      <Row className="mb-3">
          <Col md={6} className="d-flex align-items-stretch">
            <img src={happyBDay} alt="Grab and Go" style={{ width: '100%' }} />
          </Col>
          <Col md={6} className="d-flex align-items-stretch"style={{ paddingTop: '20px' }}>
            <div>
              <h3 style={{margin: '20px', fontWeight: 'bold'}}>Grab and Go</h3>
              <p style={{color: '#757575', margin: '20px'}}>
                Quick, grab-and-go balloon service - perfect for last-minute celebrations. 
                Pickup already inflated balloon designs, add instant joy and color to your event.

              </p>
              <Link style={{margin: '20px'}} to="/grabAndGo" className="btn btn-outline-secondary">Learn More</Link>
            </div>
          </Col>
      </Row>
      </div>    
        </Container>
        </main>
        )
      }
    }
