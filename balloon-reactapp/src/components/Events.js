import React, { Component } from 'react';
import '../App.css';
import  { Row, Col, Container, Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';

  
const Eventcard = props => {
  // Splitting the description at each comma (or change ',' to your preferred delimiter)
  const descriptionParts = props.event.description.split(',').map(part => part.trim());

  return (
    <Col className="d-flex align-items-stretch">
      <Card className="cards" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.event.image}/>
        <Card.Body>
          <Card.Title>{props.event.name}</Card.Title>
          <Card.Text>${props.event.price}</Card.Text>
          <Card.Text>
          {descriptionParts.map((part, index) => (
          <div key={index} className="description-line">
            <span className="description-text">{part}</span>
          </div>
        ))}
          </Card.Text>
        </Card.Body>
        
        <Card.Footer>
          <Link to={`/products/${props.event._id}`} className="btn btn-outline-secondary">
            Learn More
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
}


export default class Event extends Component {
  constructor(props){
    super(props);
    this.state = {events:[]};
  }
  componentDidMount() {
    console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);
   
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/event/`)
      .then(response =>{
        console.log(response);
        this.setState({events:response.data})
      })
      .catch((error) =>{ 
        console.log(error);
        console.log("this is an error");
      })
    }
  
  eventList() {
    return this.state.events.map(currentevent => {//for each loop
      return <Eventcard event={currentevent}  key={currentevent._id}/>;
    })
  }

  render() {
    return (
    <main>
    <Container>
        <h3 className="text-center">Event Packages</h3>
            <Row>
            {this.eventList()}
            </Row>
    </Container>
    </main>
      
    )
  }
}
