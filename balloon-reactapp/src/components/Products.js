import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const Products = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: ''
  });
  const { id } = useParams();

  useEffect(() => {
    console.log(`Attempting to fetch data for product ID: ${id}`);

    axios.get(`http://localhost:5000/event/${id}`)
      .then(response => {
        console.log("Response received from server:", response);
        if(response.data) {
          setProduct({
            name: response.data.name,
            description: response.data.description,
            price: response.data.price,
            image: response.data.image
          });
          console.log("Product data set in state:", product);
        } else {
          console.log("No data found in response");
        }
      })
      .catch(error => {
        console.log("Error fetching product data:", error);
      });

  }, [id]); // Depend on id to re-run the effect when the id changes

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> ${product.price}
              </Card.Text>
              <Card.Text>
                {product.description}
              </Card.Text>
              {/* Add more product details here */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;


/*import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      description: '',
      price: 0,
      image:''
    };

  }

componentDidMount() {
  console.log("Component did mount, props:", this.props);
  if (this.props.match && this.props.match.params) {
    
    const productId = this.props.match.params.id;
    console.log("Product ID:", productId);
    
    axios.get(`http://localhost:5000/event/${productId}`)
    .then(response => {
      this.setState({
        name: response.data.name,
        description: response.data.description,
        price: response.data.price,
        image: response.data.image
      })   
      console.log("product details: " + this.state);
    })
      .catch((error) =>{ 
        console.log(error);
        console.log("this is an error");
      })
}
}
   
    render() {
    return (
     <div>
      <h1>This is single product page</h1>
     
      
      
      </div>



    )
  }
}
*/