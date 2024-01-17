import React, { Component } from 'react';
import '../App.css';
import  { Row, Col, Image, Container, Card, Button} from "react-bootstrap";
import axios from 'axios';
import { Link } from 'react-router-dom';



const Eventcard = props => {
  // Splitting the description at each comma (or change ',' to your preferred delimiter)
  const descriptionParts = props.grabandgo.description.split(',').map(part => part.trim());

  return (
    <Col xs={12} md={6} lg={3} className="d-flex align-items-stretch mb-4">
    <Card className="cards mx-auto" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.grabandgo.image}/>
      <Card.Body>
        <Card.Title>{props.grabandgo.name}</Card.Title>
        <Card.Text>Starts at ${props.grabandgo.price}</Card.Text>
        <Card.Text>
        {descriptionParts.map((part, index) => (
        <div key={index} className="description-line">
          <span className="description-text">{part}</span>
        </div>
      ))}
        </Card.Text>
      </Card.Body>
      
      <Card.Footer>
        <Link to={`/products/${props.grabandgo._id}`} className="btn btn-outline-secondary">
          Learn More
        </Link>
      </Card.Footer>
    </Card>
  </Col>
  );
}

export default class GrabAndGo extends Component {
  constructor(props){
    super(props);
    this.state = {GrabAndGoes:[]};
  }


    componentDidMount() {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/grabAndGo/`)
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
            <Row className="justify-content-center">
            {this.grabAndGoList()}
            </Row> 
    </Container>
    </main>
      
    )
  }
}
