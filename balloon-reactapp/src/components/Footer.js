import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWeixin,
    faFacebook,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from 'react';
import  {Container,Row, Col} from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      
   <footer className="py-5 my-5">
    <Row className="social-container">
        <Col sm = {4}>
        <h3 >Let's stay connected</h3>
            <a href="https://i.postimg.cc/mkrXYZLG/IMG-0960.jpg"
                className="weixin social">
                <FontAwesomeIcon icon={faWeixin} size="2x" />
            </a>

            <a href="https://www.facebook.com"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
        
            <a href="https://www.instagram.com"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </Col>
        <Col sm = {6}>
            <p>Location: North Quincy, MA</p>
            <p>Email: bostonggevents@gmail.com</p>
            <p>Wechat ID: _OceanBlue_</p>
            <p>Msg: 617-412-7280</p>
        </Col>
        
    </Row>  
        <p className = "text-center">
            Copyright © 2024 by Ziwei Hu. All rights reserved.
        </p>
      
    </footer>
    )
  }
}
