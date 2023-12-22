import React, { Component } from 'react';
import '../App.css';
import  { Row, Col, Image, Container, Card, Button} from "react-bootstrap";
import axios from 'axios';
const Eventcard = props => (//event card component 
 
  <Col className="d-flex align-items-stretch">
    <Card className = "cards" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.grabandgo.image}/>
        <Card.Body>
          <Card.Title>{props.grabandgo.name}</Card.Title>
          <Card.Text>
          {props.grabandgo.price+`$`}
          </Card.Text>
          <Card.Text>
          {props.grabandgo.description}
          </Card.Text>
          <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  </Col>
  
)

export default class GrabAndGo extends Component {
  constructor(props){
    super(props);
    this.state = {GrabAndGoes:[]};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/grabAndGo/')
      .then(response =>{
        console.log(response);
        this.setState({GrabAndGoes:response.data})
      })
      .catch((error) =>{ 
        console.log(error);
        console.log("this is an error");
      })
    }
    grabAndGoList() {
    return this.state.GrabAndGoes.map(currentgrabandgo => {//for each loop
      return <Eventcard grabandgo={currentgrabandgo}  key={currentgrabandgo._id}/>;
    })
  }

  render() {
    return (
    <main>
    <Container>
        <h3 className="text-center">Grab And Go</h3>
            <Row>
            {this.grabAndGoList()}
            </Row> 
    </Container>
    </main>
      
    )
  }
}
