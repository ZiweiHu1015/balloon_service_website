import React, { Component } from 'react';
import  { Row, Col, Card, Button} from "react-bootstrap";
import axios from 'axios';
import EncoreBlack from './images/balloons/EncoreBlack.jpg';

const Eventcard = props => (//event card component 
 /* <tr>
    <td>{props.event.eventname}</td>
    <td>{props.event.description}</td>
    <td>{props.event.price}</td>
  </tr>*/

   
    <Row>
    <Col className="d-flex align-items-stretch">
    <Card className = "cards" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={EncoreBlack}/>
        <Card.Body>
          <Card.Title>{props.event.eventname}</Card.Title>
          <Card.Text>
           
           <p>{props.event.price+`$`}</p>
           <p>{props.event.description}</p>
            
          </Card.Text>
          <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
   
  
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
    
      <div>
        <h3>Events List</h3>
        <table className="table">
          <thead className="thead-light">
           
          </thead>
          <tbody>
            {this.eventList()}
          </tbody>
        </table>
      </div>
      
    )
  }
}
