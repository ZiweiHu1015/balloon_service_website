import React, { Component } from 'react';
import '../App.css';
import  { Row, Col, Image, Container, Card, Button} from "react-bootstrap";
import axios from 'axios';
const Eventcard = props => (//event card component 
 
  <Col className="d-flex align-items-stretch">
    <Card className = "cards" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.event.image}/>
        <Card.Body>
          <Card.Title>{props.event.eventname}</Card.Title>
          <Card.Text>
          {props.event.price+`$`}
          </Card.Text>
          <Card.Text>
          {props.event.description}
          </Card.Text>
          <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  </Col>
   
   
  
)

export default class Event extends Component {
  constructor(props){
    super(props);
    this.state = {events:[]};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/event/')
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
