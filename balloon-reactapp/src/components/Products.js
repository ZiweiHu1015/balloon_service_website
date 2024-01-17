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

  const descriptionParts = product.description.split(',').map(part => part.trim());


  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col style={{ marginBottom: '20px' }}>
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
              <span className="includes-text">Includes:</span>
                {descriptionParts.map((part, index) => (
                  <div key={index} className="description-line">
                    <span className="description-text">{part}</span>
                  </div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row style={{ marginTop: '10px' }}>
        <Col md={12}>
          <Card>
          <Card.Body>
          <Card.Text>
              <span className="includes-text">Please Note:</span>
                  <span className="description-line">Minimum on-site installation ordering is $299.</span>
                  <span className="description-line">Please consult owner for availability</span>
                  <span className="description-line">For items marked as 'Rental,' a Rental Damage 
                  Deposit is required. This deposit is separate from any event arrangement fees. 
                  Customers must return the rental items to our North Quincy location in their 
                  original condition. Failure to do so, or returning items in a damaged state, 
                  will result in the forfeiture of the Rental Damage Deposit. Please note, if a
                   rental item is damaged, the Rental Damage Deposit will not be refunded.</span></Card.Text>
                  <span className="description-line"> If you require our staff to remain on-site to wait 
                  and assist with balloon teardown at the end of event, an additional fee will apply. This service is typically charged 
                  at $30 per hour per staff .</span>
                  <span className="description-line">Price above only avaiable for the Greater Boston area, include but not limit to 
                  Boston,Brookline, Cambridge, Somerville, Watertown, Newton, Malden, Quincy, Milton, Braintree, Everett. Additional travel
                  fees may apply for services rendered beyond these specified areas.
                  </span>
             </Card.Body>
          </Card>


        </Col>
      </Row>
    </Container>
  );
};

export default Products;
