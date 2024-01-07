import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Products = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
    imageList: []
  });

  const { id } = useParams();

  useEffect(() => {
    console.log(`Attempting to fetch data for product ID: ${id}`);

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/event/${id}`)
      .then(response => {
        console.log("Response received from server:", response);
        if(response.data) {
          setProduct({
            name: response.data.name,
            description: response.data.description,
            price: response.data.price,
            image: response.data.image,
            imageList:response.data.imageList && response.data.imageList.length > 0
            ? response.data.imageList
            : [response.data.image]
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

  const carouselItems = product.imageList.map((imageUrl, index) => (
    <Carousel.Item key={index}>
      <Image src={imageUrl} alt={`Slide ${index}`} fluid />
    </Carousel.Item>
  ));

  const formattedDescription = product.description.split(',').map((item, index) => (
    <React.Fragment key={index}>
      {item.trim()}{index < product.description.split(',').length - 1 && ','}
      <br />
    </React.Fragment>
  ));

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
        
          {product.imageList && product.imageList.length > 0 && (
            <Carousel>
              {carouselItems}
            </Carousel>
          )}

        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> ${product.price}
              </Card.Text>
              <Card.Text>
               {formattedDescription}
              </Card.Text>
              
             
          
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
