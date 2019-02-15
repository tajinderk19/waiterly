import React, { Component } from "react";
import qrcode from '../assets/site.png';
import {Link} from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './Homebody/Menu/Menu';

const Footer = props => {
  return (
    <footer>
      <Row>
        <Col>
      <p className="footer-links">
      <Link to= '/Menu'>
          Chinese
        </Link>
        <span> / </span>
        <Link to= '/Menu'>
          Juices
          </Link>
        <span> / </span>
        <Link to= '/Menu'>
          Salads
          </Link>
        <span> / </span>
        <Link to= '/Menu'>
          Snacks
          </Link><span> / </span>
        <Link to= '/Menu'>
          Shakes
          </Link> <span> / </span>
        <Link to= '/Menu'>
          Rajasthani
          </Link> <span> / </span>
        <Link to= '/Menu'>
       Kebab
       </Link><span> / </span>
        <Link to= '/Menu'>
          Rolls
          </Link> <span> / </span>
        <Link to= '/Menu'>
          Wraps
          </Link><span> / </span>
        <Link to= '/Menu'>
          Mughlai
          </Link> <span> / </span>
        <Link to= '/Menu'>
          Middle Eastern
          </Link> <span> / </span>
        <Link to= '/Menu'>
          South Indian
          </Link><span> / </span>
        <Link to= '/Menu'>
          Ice Creams
          </Link> <span> / </span>
        <Link to= '/Menu'>
          Desserts
          </Link>
        <span> / </span>
        <Link to= '/Menu'>
          Healthy
          </Link>
     
      </p>
      </Col>
      <Col sm="6">
<img src={qrcode} alt="qrcode"/>
<br/>
<br/>
<h6>Scan QR Code to Open Menu in your hand and take discounts.</h6>
      </Col>
      </Row>
<br/>
<br/>      <p>
        &copy; 2018 <strong>Waiterly</strong> Bringing Innovation 
      </p>
    </footer>
  );
};

export default Footer;
