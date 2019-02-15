import React from 'react';
import { Card, Button, CardHeader, CardBody, CardImg, Row, Col, CardText } from 'reactstrap';
import giphy from '../../assets/giphy.gif'; 
import donut from '../../assets/donut.gif';

const Featured = (props) => {
  return (
    <div className="container">
        <br/>
        <h3> Featured </h3>
        <br/>
        
  <Row>
      <Col sm="4">
      <Card body inverse color="warning">
        <CardHeader>Pepperoni Pizza</CardHeader>
        <CardBody>
        <CardImg top width="100%" src="https://res.cloudinary.com/dic8veaeg/image/upload/v1541868424/Pepperoni_pizza.gif" alt="Card image cap" />
          &nbsp;&nbsp;
          <CardText>Tomato, onion, green capsicum, jalapenos, fresh mushroom, baby corn, cilantro, garlic, black olives, red paprika, feta cottage cheese, oven roasted red peppers and cheese</CardText>
          &nbsp;&nbsp;
          <Button>Buy this</Button>
        </CardBody>
      </Card>
      </Col>
      
      <Col sm="4">
      <Card body inverse color="danger">
        <CardHeader>Chocolate Donut</CardHeader>
        <CardBody>
        <CardImg top width="100%" src={donut} alt="Card image cap" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <CardText>Made with real cocoa and spices like: cinnamon, cardamom and nutmeg, this seasoning tastes like a fresh, warm chocolate donut in a bottle</CardText>
          <Button>Buy this</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </CardBody>
      </Card>
      </Col>
      
      <Col sm="4">
      <Card body inverse color="info">
        <CardHeader>Crispy Veg Burger</CardHeader>
        <CardBody>
        <CardImg top width="100%" src="https://res.cloudinary.com/dic8veaeg/image/upload/v1541868859/Cheeseburger.gif" alt="Card image cap" />
          &nbsp;&nbsp;
          <CardText>Pure-veg burger is stuffed with goodness of wholesome potatoes, Garnished with sliced onions, the patty is served in a 4-inch sesame-seed bun.</CardText>
          <Button>Buy This</Button>
        </CardBody>
      </Card>
      </Col>
  
  </Row>
    <br/>  <br/>
   
  <center>
    <div className="row">
    <div className="col-sm-6">
    <br/>
     Let's Order something, I am hungry.
    </div>
    
    <div className="col-sm-6">
    <img src={giphy} alt="food"/>
  </div>
    </div>
  </center>

</div>
  
  );
};

export default Featured;