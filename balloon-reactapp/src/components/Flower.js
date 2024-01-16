import React, { Component } from 'react';
import '../App.css';
import  { Row, Col, Image, Container, Card, Button} from "react-bootstrap";
import axios from 'axios';
import { Link } from 'react-router-dom';



const Eventcard = props => {
  // Splitting the description at each comma (or change ',' to your preferred delimiter)
  const descriptionParts = props.flower.description.split(',').map(part => part.trim());

  return (
    <Col xs={12} md={6} lg={3} className="d-flex align-items-stretch mb-4">
      <Card className="cards mx-auto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.flower.image}/>
        <Card.Body>
          <Card.Title>{props.flower.name}</Card.Title>
          <Card.Text>${props.flower.price}</Card.Text>
          <Card.Text>
          {descriptionParts.map((part, index) => (
          <div key={index} className="description-line">
            <span className="description-text">{part}</span>
          </div>
        ))}
          </Card.Text>
        </Card.Body>
        
        <Card.Footer>
          <Link to={`/products/${props.flower._id}`} className="btn btn-outline-secondary">
            Learn More
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
}


export default class Flower extends Component {
  constructor(props){
    super(props);
    this.state = {flowers:[]};
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/flower/`)
    .then(response =>{
      console.log(response);
      this.setState({flowers:response.data})
    })
    .catch((error) =>{ 
      console.log(error);
      console.log("this is an error");
    })
  }

    flowerList() {
    return this.state.flowers.map(currentflower => {//for each loop
      return <Eventcard flower={currentflower}  key={currentflower._id}/>;
    })
  }

  render() {
    return (
    <main>
    <Container>
        <h3 className="text-center">Flowers</h3> 
            <Row className="justify-content-center">
            {this.flowerList()}
            </Row>
    </Container>
    </main>
      
    )
  }
}
