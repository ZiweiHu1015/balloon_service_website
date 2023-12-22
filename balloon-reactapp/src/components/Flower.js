import React, { Component } from 'react';
import '../App.css';
import  { Row, Col, Image, Container, Card, Button} from "react-bootstrap";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Eventcard = props => (//event card component 
 
  <Col className="d-flex align-items-stretch">
    <Card className = "cards" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.flower.image}/>
        <Card.Body>
          <Card.Title>{props.flower.name}</Card.Title>
          <Card.Text>
           
           <p>{props.flower.price+`$`}</p>
           <p>{props.flower.description}</p>
            
          </Card.Text>
          <Link to= {`/products/${props.flower._id}`} className="btn btn-primary">Learn More</Link>
      </Card.Body>
    </Card>
  </Col>
  
)

export default class Flower extends Component {
  constructor(props){
    super(props);
    this.state = {flowers:[]};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/flower/')
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

    
        <h3 class="text-center">Flowers</h3>
          
            <Row>
            {this.flowerList()}
            </Row>
     
       
    </Container>
    </main>
      
    )
  }
}
